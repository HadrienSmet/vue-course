const app = Vue.createApp({
    data() {
        return {
            premium: true,
            basket: [],
            authorImg: "./assets/photo-cv_pochoir-rsz.webp",
            authorAlt: "Gros bg sa mere",
            reviews: [],
        };
    },
    methods: {
        addItemToBasket(id) {
            this.basket.push(id);
        },
        addReview(review) {
            this.reviews.push(review);
        },
    },
});
