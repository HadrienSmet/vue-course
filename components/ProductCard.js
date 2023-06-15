app.component("product-card", {
    props: {
        premium: {
            type: Boolean,
            required: true,
        },
    },
    template:
        /*html*/
        `
        <div class="product-container">
            <div class="product-container__header">
                <div class="infos">
                    <h1>{{ title }}</h1>
                    <p>{{ description }}</p>
                    <p>Shipping: {{ shipping  }}</p>
                </div>
            </div>
            <div class="stock-details">
                <p v-if="quantity > 10">In stock</p>
                <p v-else-if="quantity <= 10 && quantity > 0">
                    Almost sold out
                </p>
                <p v-else>Out of stock</p>
            </div>
            <ul>
                <li
                    v-for="(variant, index) in variants"
                    :key="variant.id"
                    :style="{ backgroundColor: variant.color }"
                    @mouseover="changeSelected(index)"
                ></li>
            </ul>
            <div class="buttons-container">
                <button
                    @click="addToBasket"
                    :disabled="!inStock"
                    class="button"
                    :class="inStock ? 'active' : 'disabled'"
                >Add to basket</button>
                <button
                    @click="removeOneFromBasket"
                    :disabled="!inStock"
                    class="button"
                    :class="inStock ? 'active' : 'disabled'"
                >Remove from basket</button>
            </div>
        </div>
    `,
    data() {
        return {
            brand: "Adidas",
            product: "Socks",
            description: "Don't buy it its a scam",
            selectedProduct: 0,
            variants: [
                { id: 0, color: "blue", quantity: 5 },
                { id: 1, color: "green", quantity: 15 },
                { id: 2, color: "red", quantity: 0 },
            ],
        };
    },
    methods: {
        addToBasket() {
            this.$emit("add-to-basket", this.variants[this.selectedProduct].id);
        },
        removeOneFromBasket() {
            if (this.basket > 0) this.basket -= 1;
        },
        changeSelected(index) {
            this.selectedProduct = index;
        },
    },
    computed: {
        title() {
            return this.product + " by " + this.brand;
        },
        quantity() {
            return this.variants[this.selectedProduct].quantity;
        },
        inStock() {
            return this.variants[this.selectedProduct].quantity;
        },
        shipping() {
            if (this.premium) {
                return "Free";
            } else {
                return "2.99e";
            }
        },
    },
});
