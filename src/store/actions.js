export default {
    async getPersons({ commit }) {
        commit("setError", false);
        return fetch("https://randomuser.me/api?results=100")
            .then((response) => {
                return response.json();
            })
            .then((data) => {

                const staffList = [];
                let id = 0;
                data.results.forEach((el) => {
                    id++;
                    const birthday = new Date(el.dob.date).toLocaleDateString("ru-RU");
                    staffList.push({
                        id,
                        name: el.name,
                        picture: el.picture,
                        bday: birthday,
                        born: el.dob.date,
                        phone: el.phone,
                        email: el.email,
                    });
                });

                if (staffList && staffList.length) {
                    commit("setData", staffList);
                    commit("setTableData", staffList);
                }
            })
            .catch(() => commit("setError", true));
    },
};