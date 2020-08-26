export default {
    setData(state, data) {
        state.data = data;
    },
    setTableData(state, data) {
        state.tableData = data;
    },
    setError(state, status) {
        state.isError = status;
    },
};