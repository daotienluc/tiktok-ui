//layouts
import { HeaderOnly } from '~/layouts';
import config from '~/config/';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Seach from '~/pages/Seach';

//Public Routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.seach, component: Seach, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
