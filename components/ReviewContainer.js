app.component("review-container", {
    props: {
        reviews: {
            type: Array,
            required: true,
        },
    },
    template:
        /*html*/
        `
        <ul>
            <li v-for="(review, index) in reviews" :key="index">
                <h3>{{ review.name }} gave this {{ review.rating }} rating!</h3>
                <p>{{ review.review }}</p>
            </li>
        </ul>
    `,
});
