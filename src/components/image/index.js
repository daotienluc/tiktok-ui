import { useState, forwardRef } from 'react';
import images from '~/assests/images';
import styles from './image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(
    (
        {
            src,
            alt,
            className,
            fallback: cuttomFallback = images.noImage,
            ...props
        },
        ref,
    ) => {
        const [fallback, setFalback] = useState(''); //falback:khi lỗi
        const handleError = () => {
            setFalback(cuttomFallback);
        };
        // eslint-disable-next-line jsx-a11y/alt-text
        return (
            <img
                className={classNames(styles.wrapper, className)}
                ref={ref}
                src={fallback || src}
                alt={alt}
                {...props}
                onError={handleError}
            />
        );
    },
);

export default Image;
