import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import HeadlessTippy from '@tippyjs/react';
import AccountItem from '~/components/AccountItem';
import { wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState, useRef } from 'react';
import styles from './Seach.module.scss';
import classNames from 'classnames/bind';
import { useDebounce } from '~/hooks';
import * as searchServeces from '~/services/searchServece';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const inputRef = useRef();

    const debounce = useDebounce(searchValue, 500);

    useEffect(() => {
        if (!debounce.trim()) {
            setShowResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            const result = await searchServeces.Search(debounce);
            setSearchResult(result);
            setLoading(false);
        };

        fetchApi();
    }, [debounce]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    //xử lí ẩn kết quả
    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const seachValue = e.target.value;
        if (!seachValue.startsWith(' ')) setSearchValue(e.target.value);
    };

    return (
        //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div
                        className={cx('seach-result', {
                            ['pointer-auto']: showResult,
                        })}
                        tabIndex="-1"
                        {...attrs}
                    >
                        <PopperWrapper>
                            <h4 className={cx('seach-title')}>Accounts</h4>
                            {searchResult.map((result) => (
                                <AccountItem key={result.id} data={result} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('seach')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Seach accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                        onBlur={handleHideResult}
                    />
                    {!!searchValue &&
                        !loading && ( //chuyển đổi dữ liệu sang boolean(value)
                            <button
                                className={cx('clear')}
                                onClick={handleClear}
                            >
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                    {loading && (
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                    )}

                    <button
                        className={cx('seach-btn')}
                        onMouseDown={(e) => e.preventDefault()}
                    >
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
