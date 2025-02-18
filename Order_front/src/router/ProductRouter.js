import ProductList from "@/views/ProductList.vue";
import ProductListManage from "@/views/ProductListManage.vue";
import ProductCreate from "@/views/ProductCreate.vue";

export const ProductRouter = [
    {
      path: '/product/list',
      name: 'ProductList',
      component: ProductList,
    },
    {
        path: '/product/manage',
        name: 'ProductListManage',
        component: ProductListManage,
    },
    {
        path: '/product/create',
        name: 'ProductCreate',
        component: ProductCreate,
    },
]