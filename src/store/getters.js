export default {
    getPersonById: (state) => (id) => {
        return state.data.filter((el) => el.id === id)[0] || [];
    },
};