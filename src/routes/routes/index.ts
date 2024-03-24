// 根路由
export const RootRoute: AppRouteRecordRaw = {
    path: '/',
    name: 'Root',
    redirect: PageEnum.BASE_HOME,
    meta: {
        title: 'Root',
    },
}

export const LoginRoute: AppRouteRecordRaw = {
    path: '/login',
    name: 'Login',
    component: () => import('/@/views/sys/login/Login.vue'),
    meta: {
        title: t('routes.basic.login'),
    },
}

// Basic routing without permission
// 未经许可的基本路由
export const basicRoutes = [LoginRoute, RootRoute, REDIRECT_ROUTE, PAGE_NOT_FOUND_ROUTE]
