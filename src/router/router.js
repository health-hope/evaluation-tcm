/**
 * @param {Boolean} cache 是否启用路由缓存
 * @param {String} title document.title字段
 */
const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/Home.vue'),
        meta: { cache: false, title: '中医测评' }
    },
    {
        path: '/survey',
        name: 'survey',
        component: () => import('@/views/survey/Survey.vue'),
        meta: { cache: false, title: '中医测评' }
    },
    {
        path: '/presentation',
        name: 'presentation',
        component: () => import('@/views/presentation/Presentation.vue'),
        meta: { cache: false, title: '中医测评' }
    },
    {
        path: '/programme',
        name: 'programme',
        component: () => import('@/views/programme/Programme.vue'),
        meta: { cache: false, title: '调理方案' }
    }
]
export default routes
