<template>
  <div>
    <div class="search-panel">
      <div class="search-wrapper">
        <label for="searchByName">Поиск по ФИО:</label>
        <div class="input-wrapper">
          <img
            class="input-wrapper__search-icon"
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
          />
          <input
            id="searchByName"
            class="input-wrapper__search"
            placeholder="Фамилия или имя"
            type="text"
            v-model="searchText"
            @keyup="sortBySearch"
          />
        </div>
      </div>

      <div class="search-wrapper">
        <label for="searchByDate">Поиск по дате рождения:</label>
        <div class="input-wrapper">
          <input
            id="searchByDate"
            class="input-wrapper__search date-search-input"
            type="date"
            @change="sortByBday"
          />
          <img
            class="input-wrapper__clear-icon"
            src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxLjk3NiA1MS45NzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8cGF0aCBkPSJNNDQuMzczLDcuNjAzYy0xMC4xMzctMTAuMTM3LTI2LjYzMi0xMC4xMzgtMzYuNzcsMGMtMTAuMTM4LDEwLjEzOC0xMC4xMzcsMjYuNjMyLDAsMzYuNzdzMjYuNjMyLDEwLjEzOCwzNi43NywwICAgQzU0LjUxLDM0LjIzNSw1NC41MSwxNy43NCw0NC4zNzMsNy42MDN6IE0zNi4yNDEsMzYuMjQxYy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwbC03LjQyNS03LjQyNWwtNy43NzgsNy43NzggICBjLTAuNzgxLDAuNzgxLTIuMDQ3LDAuNzgxLTIuODI4LDBjLTAuNzgxLTAuNzgxLTAuNzgxLTIuMDQ3LDAtMi44MjhsNy43NzgtNy43NzhsLTcuNDI1LTcuNDI1Yy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0OCwwLTIuODI4ICAgYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBsNy40MjUsNy40MjVsNy4wNzEtNy4wNzFjMC43ODEtMC43ODEsMi4wNDctMC43ODEsMi44MjgsMGMwLjc4MSwwLjc4MSwwLjc4MSwyLjA0NywwLDIuODI4ICAgbC03LjA3MSw3LjA3MWw3LjQyNSw3LjQyNUMzNy4wMjIsMzQuMTk0LDM3LjAyMiwzNS40NiwzNi4yNDEsMzYuMjQxeiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="
            @click="clearDateSearchInput"
          />
        </div>
      </div>
    </div>

    <div v-if="isLoading">Загрузка...</div>
    <div v-else-if="$store.state.isError">Произошла ошибка!</div>
    <Table v-else />
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
      isLoading: false,
    };
  },

  created() {
    if (this.$store.state.data.length === 0) {
      this.isLoading = true;
      this.$store.dispatch("getPersons").then(() => (this.isLoading = false));
    }
  },

  computed: {
    staffList: function() {
      return this.$store.state.data;
    },
  },

  methods: {
    sortBySearch() {
      const searchText = this.searchText.toLowerCase();
      const result = this.staffList.filter((el) => {
        return (
          el.name.last.toLowerCase().indexOf(searchText) !== -1 ||
          el.name.first.toLowerCase().indexOf(searchText) !== -1
        );
      });

      if (result.length) this.$store.commit("setTableData", result);
      else this.$store.commit("setTableData", []);
    },
    sortByBday(e) {
      const data = this.$store.state.data;
      if (!e.target.value) {
        this.$store.commit("setTableData", data);
        return;
      }
      const date = e.target.value.split("-");

      let result;

      if (+date[0] > 1900 && +date[0] < 2020) {
        result = data.filter(
          (el) => el.bday.indexOf(`${date[2]}.${date[1]}.${date[0]}`) !== -1
        );
      } else {
        result = data.filter(
          (el) => el.bday.indexOf(`${date[2]}.${date[1]}.`) !== -1
        );
      }

      this.$store.commit("setTableData", result);
    },

    clearDateSearchInput() {
      document.querySelector(".date-search-input").value = "";
      this.$store.commit("setTableData", this.$store.state.data);
    },
  },
};
</script>

<style lang="scss" scoped>
.search-panel {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
}
.search-wrapper {
  display: flex;
  flex-direction: column;
  width: 47%;
  text-align: left;
}
.input-wrapper {
  position: relative;
  display: flex;
  min-width: 100px;

  .input-wrapper__search-icon {
    position: absolute;
    top: 12px;
    left: 8px;
    width: 14px;
  }

  .input-wrapper__clear-icon {
    position: absolute;
    top: 14px;
    right: 8px;
    width: 10px;
    cursor: pointer;
  }
  .input-wrapper__search {
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
