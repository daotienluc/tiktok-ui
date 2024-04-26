import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avata')}
                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/337236385_1574882599680050_7925664085151030700_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=23HBQBSI94kAb4bIMnL&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfC084J3E-wgh9qKN7y50BnR92Bmsf11UCq5IfPNsbBWzg&oe=662E01BB"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>đào lực</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>Đào Lực</span>
            </div>
        </div>
    );
}

export default AccountItem;
