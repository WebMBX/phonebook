<template>
  <div>
    <div class="search-wrapper">
      <img
        class="search-wrapper__search-icon"
        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
      />
      <input
        class="search-wrapper__search"
        placeholder="Фамилия или имя"
        type="text"
        v-model="searchText"
        @keyup="sortBySearch"
      />
      <input class="search-wrapper__search" type="date" @change="sortByBday" />
      <img
        class="search-wrapper__clear-icon"
        src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
      />
    </div>

    <Table />
  </div>
</template>

<script>
import Table from "./Table";
export default {
  components: {
    Table,
  },
  data() {
    return {
      tableData: [],
      sortAsc: false,
      sortAscData: false,
      searchText: "",
    };
  },

  mounted() {
    fetch("https://randomuser.me/api?results=100")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // this.$store.commit('setData', data.results)
        const list = data.results.map((el) => {
          const birthday = new Date(el.dob.date).toLocaleDateString("ru-RU");
          // const birthday = new Date(el.dob.date);
          return {
            id: el.id,
            name: el.name,
            picture: el.picture,
            bday: birthday,
          };
        });

        console.log("all", list);

        if (list && list.length) {
          this.$store.commit("setData", list);
          this.$store.commit("setTableData", list);
        }

        // this.$store.dispatch('setData', data.results)
        //   state.data = data.results
      });
  },

  computed: {
    staffList: function() {
      return this.$store.state.data;
    },
  },

  methods: {
    sortBySearch() {
      console.log(this.searchText);
      const searchText = this.searchText.toLowerCase();
      const result = this.staffList.filter((el) => {
        return (
          el.name.last.toLowerCase().indexOf(searchText) !== -1 ||
          el.name.first.toLowerCase().indexOf(searchText) !== -1
        );
      });

      console.log("res", result);

      if (result.length) this.$store.commit("setTableData", result);
      else this.$store.commit("setTableData", []);
    },
    sortByBday(e) {
      const max = new Date(new Date().getTime() + 86400000 * 36500);
      const min = new Date(new Date().getTime() - 86400000 * 36500);
      const data = this.$store.state.data;
      if (new Date(e.target.value) > max || new Date(e.target.value) < min) {
        this.$store.commit("setTableData", data);
        return;
      }
      const date = new Date(e.target.value)
        .toLocaleString("ru-RU")
        .substr(0, 10);
      const result = data.filter((el) => el.bday.indexOf(date) !== -1);
      console.log("change");

      this.$store.commit("setTableData", result);
    },
    sortByName() {
      this.sortAsc = !this.sortAsc;
      const data = this.$store.state.tableData;
      const sort = (a, b) => {
        return a.name.last > b.name.last ? 1 : -1;
      };

      const sorted = data.sort(sort);

      if (sorted)
        this.$store.commit(
          "setTableData",
          this.sortAsc ? sorted : sorted.reverse()
        );
    },

    sortByDate() {
      this.sortAscData = !this.sortAscData;
      const data = this.$store.state.tableData;

      const sorted = data.sort((a, b) => {
        return a.bday - b.bday;
      });

      if (sorted)
        this.$store.commit(
          "setTableData",
          this.sortAscData ? sorted : sorted.reverse()
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.search-wrapper {
  position: relative;
  display: flex;
  min-width: 100px;

  .search-wrapper__search-icon {
    position: absolute;
    top: 12px;
    left: 8px;
    width: 14px;
  }

  .search-wrapper__clear-icon {
    position: absolute;
    top: 14px;
    right: 8px;
    width: 10px;
    cursor: pointer;
  }
  .search-wrapper__search {
    border: 1px solid grey;
    border-radius: 5px;
    height: 30px;
    width: 100%;
    font-size: 1.2rem;
    padding: 2px 23px 2px 30px;
    outline: 0;
    &:hover,
    &:focus {
      border: 1.5px solid #009688;
    }
  }
}
</style>
