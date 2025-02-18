import {createStore} from "vuex";
import practice from "@/store/practice";
import cart from "@/store/cart";

const store = createStore({
    modules: {
        practice,
        cart

    }
})

export default store;