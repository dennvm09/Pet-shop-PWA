import Home from '../pages/Home';
import Pets from "../pages/Pets";
import NotFound from "../pages/NotFound";
import Favorites from "../pages/Favorites";

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/pets',
        component: Pets,
    },
    {
        path: '/favorites',
        component: Favorites,
    },
    {
        path: '**',
        component: NotFound,
    },
]

export default routes;