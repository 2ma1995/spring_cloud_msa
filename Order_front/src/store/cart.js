function initState() {
    return {
        productsInCart: JSON.parse(localStorage.getItem("productsInCart")) || [],
        totalQuantity: localStorage.getItem("totalQuantity") || 0,
    }
}

const cart = {
//     상태초기화
    state: initState,
//     값을 변경하는 메서드
//     mutation은 컴포넌트에서 직접 호출되기보다는. actions를 통해 mutation을 통해 호출
//     그이유는 여러 mutation의 조합을 actions에서 정의할수 있기 때문.
    mutations: {
        addCart(state, product) {
            const exsitProduct = state.productsInCart.find(p => p.productId === product.productId);
            if (exsitProduct) {
                exsitProduct.productCount += product.productCount;
            }else {
            state.productsInCart.push(product);
            }
            state.totalQuantity = parseInt(state.totalQuantity) + product.productCount;

            localStorage.setItem("productsInCart", JSON.stringify(state.productsInCart) );
            localStorage.setItem("totalQuantity", state.totalQuantity);

        },
        clearCart(state) {
            state.productsInCart = [];
            state.totalQuantity = 0;
            localStorage.removeItem("productsInCart");
            localStorage.removeItem("totalQuantity");
        }
    },
    actions: {
        addCart(context, product) {
            context.commit('addCart', product);
        },
        clearCart(context) {
            context.commit('clearCart');
        }
    },
//     값을 가져가기 위한 메서드
    getters: {
        getTotalQuantity: state => state.totalQuantity,
        getProductsInCart: state => state.productsInCart,
    }
}
export default cart;