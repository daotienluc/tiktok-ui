import classNames from 'classnames/bind';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import Button from '~/components/Button';
import images from '~/assests/images';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
// import 'HeadlessTippy.js/dist/HeadlessTippy.css'; // optional

import Menu from '~/components/Popper/Menu';
import { UploadIcon, InboxIcon, MessageIcon } from '~/components/icons';
import Image from '~/components/image';
import Search from '../../search';
import { Link } from 'react-router-dom';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Englist',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'Englist',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
function Header() {
    const currentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case `language`:
                //handle change language
                break;
            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@luc',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/Coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/Setting',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/Logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy
                                delay={[0, 200]}
                                content="Upload video"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content="Messenger"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy
                                delay={[0, 200]}
                                content="Inbox"
                                placement="bottom"
                            >
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <div className={cx('action-item')}>10</div>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={handleMenuChange}
                    >
                        {currentUser ? (
                            <Image
                                src="https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/337236385_1574882599680050_7925664085151030700_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jOXgjZ69sEIQ7kNvgF-o91x&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBBrKVIR6Aq3YlUi3pN9NXTSGj2AJRipIoN72PIbVIo2A&oe=663AF87B"
                                className={cx('user-avt')}
                                alt="Phạm Như Quỳnh"
                                fallback="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIPEA8PEA8PEBAQEA4QDg4QDw8NDw0PFREXFhURFRUYHSggGBolGxMTITEhJSkrLi4uFx8zODMsOigtLisBCgoKDg0OFhAPGisfHR4tLTcvKy0rLSs1NDU3Kys3MCstKzctNzUwNzcvODc3Mjc3Lys3Mi8rLSsrKystNy0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYBAgMEB//EADwQAAIBAgIGBwUGBQUAAAAAAAABAgMRBAUSITFBUWEGEyJxgZGxMkJSksEUU6HR4fAjM2JyggdjorLx/8QAGgEBAQEBAQEBAAAAAAAAAAAAAAECAwQFBv/EACQRAQACAgEDBAMBAAAAAAAAAAABAgMRBBIhMRNBUWEycaEU/9oADAMBAAIRAxEAPwD7iAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABiUkldtJcW7IDIPBXzWnHZeb5al5s8VXOJv2VGP/ACZdSJwFanjqj21JeFo+hzdeb9+fzSL0i0gqqrzXvz+ZnSONqLZUl4vS9R0izAgaeb1Ft0Zd6s/wPbRzeD9pOPP2kTUiRBpTqKSvFprinc3IAAAAAAAAAAAAAAAAAAAAAAGzStVUE5Sdkv3YgMdj5VdS7MPh3vvLEbHvxebKOqn2n8Xur8yJrV5Td5Sb9F3I5g3EaQABQAAAAAAABtTqOLvFtPitRK4TN9iqL/NfVfkRAJMbFshJNJppp7GtaZkrWExkqT1a1vi9j/Jk/hcTGorxfet6fMxMaV2ABAAAAAAAAAAAAAADStVUIuUnZL92N2yu5ljOtlZexH2eb+IsRsc8bi3Vld6kvZjw/U4GLGTcIAAoAAAAAAAAAAAAAB0w9eVOSlF69/BrgzmALNhMSqsdJeK3xfA7lZweJdKSktmyS4oslOaklJO6aumc5jStgAQAAAAAAAAADE5JJt7Em33ARuc4rRj1a2y9rlHh4kKdMRWc5Sk978luRzOkRpAAFAAAACWyvAKyqTX9qfqSZ0PHh8vnPWlZcXqPZDJuM/JEsDHVIipZMt034o8lfLJx120lxX5FgA6pFTBOZlgVJOUV2ltS94gzcTsAAUAAAJTJcVZ9W9j1x5PeiLMxk001qaaafBokxsWwHLDVlOEZLevJ70dTmoAAAAAAAAeDOa2jT0d83bw2v98z3kHndS9RR+GP4v8AaLHkRwAOiAAAAADvgaOnOMd219yLKkQ+RQ7U5cEkTBi3kAAZAAACv5rQ0Kja2S1r6lgIzPIdmMuDt5lgQwAOgAAAAAJfIq2qUOHaXdsf08yWK5ldTRqw59l+P62LGc7eVAAQAAAAAArWYyvVqP8Aqt5avoWUq2Jd5zf9cvVmqjmADaAAAAACYyL2Z969CUIfIp65x4pMmDnbyAAIAAAHgzr+V/lE95GZ5PsRjxd/IQIYAHUAAAAAG1OVmnwafky1lRLZSd4xfJehiytgAZAAAAAAKriF25/3S9WWorOPjarUX9Tfnr+pqo4AA2gAAAAA7YStoTjLnr7iyxd0mtj1oqhKZVjrfw5PV7r4cjNoEwADAAAAV3M6+nUdtkdSPfmmO0U4RfaeqT4LgQxqIAAGwAAAAAYZa6S7Me5ehVoxu0uLS8y2GLKAAyAAAAAAQOdU7VL/ABRT8Vq/IniOzuleCl8L/B6vWxY8iDAB0QAAAAAAIxb2K50WGm/cl8rA9GFzKcNT7UeD2rxJCGbU3t0l4XIj7LP7ufysfZan3c/lZnUCYlm1NbNJ+Fjw4nNZS1R7K/E8v2Wf3c/lY+yz+7n8rGoHJg6vDT+Cfys5yg1tTXeijAAKAAAAAD0ZdT0qsFwel5a/oWUh8ipa5T/xXq/oTBi3lQAGQAAAAADSrBSi4vY00zcAVSrTcZOL2p2ZqS+dYbZUXdL6P6eREHSJ2gAezL8E6ru9UVtfHkBxw2FlUdorVve5Evh8qhHXLtPyXke2nTUUklZLcbGJkYhTS1JJdysZMgisAyAMAyAMGJQT2pPvRsAPDiMshLYtF8Vs8iJxWClT2q6+JbCyGJJNWauixIqRtGDexN9ybMZxnmGwkpQpw66qnrV/4dJ8G+PJfgQVXplim+y6UFuUad/+zZ7sXCzZY3Eaj7eXJy8dJ1M7/SdattCIjDdNKuyvSpVob7LQl9V+BZ8mnh8S1Woydo+1Sl7VOW668+K1GM/Gy4e947fLeLkY8nas90tgqHVwjHelr73tO5gyeN3AAAAAAAAAABicU001dNWa4oreOwrpStueuL4r8yynHFYdVIuL8HvT4lidCuYai5yUVv28kWWjTUIqKWpHhyzBunpOS13sua4o99yz3G1xc1uLk0Nrg1uLjQ2FzW4uNDYXNbi40Nri5rcXGhsV/plnDw1FQg7Va14xa2wgvakuetLx5E9c+e/6gVG8VGO6NGFlzcpNv08j2cHDGTPWLeI7vNy8k0xTMeZVkHtyvK6uKk4Uo30U3KTejGPBN8XsX/p5/s89PqtCXWaWh1du1pcLH6b1Kbmu+8Pi9M6ideWlKm5yUYpylJpRildyb3Ik6br5biIuUXGas3G941ab2q+xr0a5Fy6N5BDBwdas49botzk2tGhG2tJ+rKt0qz77XNRgrUabeg2u3NvU5cUuXny8NeV/oyzjpXdPeXpth9KkWtOre0Po+FrxqwhUg7xnGMovk1c6kD0IqOWCp392VSK7tN29SePz2anRktX4mX18duqkW+YAAc2wAAZAAAAAAABho12G4A5hmXE0uUbJi5rcXKNkxc1uLgbXFzW4uBsZuaXFwNkUf/UPCNVKNdLsyj1UnwlFuS81KXyl2ucMxwEcRSnRqLsyWprbGW6S5o78bN6OWLuOfF6mOavnnRnP5YOdpXlRm05xW2L2acefLefQIQw8msaurb6v+f8A7fG/7e4+aZxk9XCT0akey32KqXYmvo+R5ljKipujpy6pyU3Tv2XJb/07j7Ofh05ExkxW1vz9w+bi5FsO6XjevCZ6UdInim6dNuNCL7nWa96XLgvF8q+C29FOjEpyjXxEXGnFqVOnJWlUe5yW6Pr3bfTM4uJi+Ij+uERkz5PtaejGDdDCUYSVpaLnJb1KbcrPuvbwJQA/LXvN7Tafd92tYrERHsAAy0AADIAAAAAAAAAAGGrmQBzdPgauD4HYDY87MXPSLF2PNcHosZGxwUXwN1T4nQDYwopGQCDSpTUk4ySlF6nGSUk1zTImt0Vwcnd0Ev7J1Ka8ouxMg3TJen4zMfqWbUrb8o2jcFkeGoNSp0IKS2Sd5yXc5XaJEAlr2tO7Tta1ivaI0AAyoAAAAAyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAD//Z"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
