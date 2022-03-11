import Layout from '@/layouts';
import ListIcon from '@/assets/assets-slide-list.svg';
import FormIcon from '@/assets/assets-slide-form.svg';
import DetailIcon from '@/assets/assets-slide-detail.svg';

export default [
  {
    path: '/permissions',
    name: 'permissions',
    component: Layout,
    redirect: '/permission/manager',
    meta: { title: '权限管理', icon: ListIcon },
    children: [
      {
        path: 'manager',
        name: 'manager',
        component: () => import('@/pages/permissions/manager/index.vue'),
        meta: { title: '管理员管理' },
      },
      {
        path: 'permission',
        name: 'permission',
        component: () => import('@/pages/permissions/permission/index.vue'),
        meta: { title: '权限管理' },
      },
      {
        path: 'role',
        name: 'role',
        component: () => import('@/pages/permissions/role/index.vue'),
        meta: { title: '角色管理' },
      },
      {
        path: 'menu',
        name: 'menu',
        component: () => import('@/pages/permissions/menu/index.vue'),
        meta: { title: '菜单管理' },
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    component: Layout,
    redirect: '/user/list',
    meta: { title: '用户管理', icon: 'usergroup' },
    children: [
      {
        path: 'list',
        name: 'userList',
        component: () => import('@/pages/user/list/index.vue'),
        meta: { title: '用户列表' },
      },
      {
        path: 'recycle',
        name: 'userRecycle',
        component: () => import('@/pages/user/recycle/index.vue'),
        meta: { title: '用户回收站' },
      }
    ],
  },
  {
    path: '/seller',
    name: 'seller',
    component: Layout,
    redirect: '/seller/list',
    meta: { title: '商家管理', icon: 'chart-bubble' },
    children: [
      {
        path: 'list',
        name: 'sellerList',
        component: () => import('@/pages/seller/list/index.vue'),
        meta: { title: '商家列表' },
      },
      {
        path: 'audit',
        name: 'sellerAudit',
        component: () => import('@/pages/seller/audit/index.vue'),
        meta: { title: '商家审核' },
      }
    ],
  },
  {
    path: '/order',
    name: 'order',
    component: Layout,
    redirect: '/order/list',
    meta: { title: '订单管理', icon: 'layers' },
    children: [
      {
        path: 'list',
        name: 'orderList',
        component: () => import('@/pages/order/list/index.vue'),
        meta: { title: '订单列表' },
      }
    ],
  },
  {
    path: '/goods',
    name: 'goods',
    component: Layout,
    redirect: '/goods/cloud',
    meta: { title: '商品管理', icon: 'gift' },
    children: [
      {
        path: 'cloud',
        name: 'goodsCloud',
        component: () => import('@/pages/goods/cloud/index.vue'),
        meta: { title: '云商品' },
      },
      {
        path: 'seller',
        name: 'goodsSeller',
        component: () => import('@/pages/goods/seller/index.vue'),
        meta: { title: '商家商品' },
      },
      {
        path: 'sellerDelete',
        name: 'goodsSellerDelete',
        component: () => import('@/pages/goods/seller/delete.vue'),
        meta: { title: '商家已删除商品' },
      },
      {
        path: 'category',
        name: 'goodsCategory',
        component: () => import('@/pages/goods/cloud/category/index.vue'),
        meta: { title: '商品分类' },
      },
      {
        path: 'unit',
        name: 'goodsUnit',
        component: () => import('@/pages/goods/cloud/unit/index.vue'),
        meta: { title: '商品单位' },
      },
    ],
  },
  {
    path: '/brand',
    name: 'brand',
    component: Layout,
    redirect: '/brand/cloud',
    meta: { title: '品牌管理', icon: 'flag' },
    children: [
      {
        path: 'cloud',
        name: 'brandCloud',
        component: () => import('@/pages/brand/cloud/index.vue'),
        meta: { title: '云品牌' },
      },
      {
        path: 'seller',
        name: 'brandSeller',
        component: () => import('@/pages/brand/seller/index.vue'),
        meta: { title: '商家品牌' },
      }
    ],
  },
  {
    path: '/content',
    name: 'content',
    component: Layout,
    redirect: '/content/article',
    meta: { title: '内容管理', icon: 'file-paste' },
    children: [
      {
        path: 'article',
        name: 'contentArticle',
        component: () => import('@/pages/content/article/index.vue'),
        meta: { title: '文章公告' },
      }
    ],
  },
  {
    path: '/datacenter',
    name: 'datacenter',
    component: Layout,
    redirect: '/datacenter/seller',
    meta: { title: '数据管理', icon: 'file-paste' },
    children: [
      {
        path: 'seller',
        name: 'dataSeller',
        component: () => import('@/pages/datacenter/seller/index.vue'),
        meta: { title: '商家数据' },
      },
      {
        path: 'sale',
        name: 'dataSale',
        component: () => import('@/pages/datacenter/sale/index.vue'),
        meta: { title: '销售数据' },
      }
    ],
  },
  {
    path: '/demand',
    name: 'demand',
    component: Layout,
    redirect: '/demand/list',
    meta: { title: '需求管理', icon: 'queue' },
    children: [
      {
        path: 'list',
        name: 'demandList',
        component: () => import('@/pages/demand/list/index.vue'),
        meta: { title: '需求列表' },
      }
    ],
  },
  {
    path: '/setting',
    name: 'setting',
    component: Layout,
    redirect: '/setting/seller',
    meta: { title: '系统设置', icon: 'setting' },
    children: [
      {
        path: 'pay',
        name: 'settingPay',
        component: () => import('@/pages/setting/pay/index.vue'),
        meta: { title: '支付设置' },
      },
      {
        path: 'system',
        name: 'settingSystem',
        component: () => import('@/pages/setting/system/index.vue'),
        meta: { title: '系统设置' },
      }
    ],
  },
];
