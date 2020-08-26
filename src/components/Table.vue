<template>
  <div class="table">
    <div class="table-header">
      <div class="table-header__cell">
        Фотография
      </div>
      <div class="table-header__cell">
        <span class="cpointer" @click="sortByName">
          ФИО
          <i
            class="table-header__sort-icon"
            :class="{
              'table-header__sort-icon--active': activeSort === 'name',
            }"
            >{{ !sortAsc ? "↓" : "↑" }}</i
          ></span
        >
      </div>
      <div class="table-header__cell">
        <span class="cpointer" @click="sortByDate">
          Дата рождения
          <i
            class="table-header__sort-icon"
            :class="{
              'table-header__sort-icon--active': activeSort === 'data',
            }"
            >{{ sortAscData ? "↓" : "↑" }}</i
          ></span
        >
      </div>
    </div>

    <p v-if="!tableData.length && !$store.state.isError">Ничего не найдено</p>
    <p v-else-if="$store.state.isError" class="error">
      Ошибка! Нe удалось загрузить данные!
    </p>
    <router-link
      :to="`/person/${person.id}`"
      v-for="person in tableData"
      :key="person.id"
    >
      <div class="item">
        <img class="item__img" :src="person.picture.thumbnail" />
        <div class="cell item__name" data-title="Full Name">
          {{ person.name.last + " " + person.name.first }}
        </div>
        <div class="cell item__date" data-title="Birthday">
          {{ person.bday }}
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortAsc: false,
      sortAscData: false,
      activeSort: false,
    };
  },

  computed: {
    tableData: function() {
      return this.$store.state.tableData;
    },
  },

  methods: {
    sortByName() {
      this.sortAsc = !this.sortAsc;
      const data = this.$store.state.tableData;
      const sort = (a, b) => {
        return a.name.last > b.name.last ? 1 : -1;
      };

      const sorted = data.sort(sort);

      if (sorted) {
        this.activeSort = "name";
        this.$store.commit(
          "setTableData",
          this.sortAsc ? sorted : sorted.reverse()
        );
      }
    },

    sortByDate() {
      this.sortAscData = !this.sortAscData;
      const data = this.$store.state.tableData;

      data.sort(function(a, b) {
        return new Date(a.born) - new Date(b.born);
      });

      if (data.length) {
        this.activeSort = "data";
        this.$store.commit(
          "setTableData",
          this.sortAscData ? data.reverse() : data
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: inherit;
  text-decoration: none;
}
.table__item {
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}

.item__img {
  display: flex;
  padding: 14px;
  width: 100px;
}
.item__name {
  width: 70%;
  font-size: 1.5rem;
  font-weight: 500;
}

.item {
  display: flex;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #eee;
  line-height: 3rem;
  overflow: hidden;
  &:hover {
    border-left: 1px solid #6b76e7;
    background: #6b76e72b;
    cursor: pointer;
    img {
      padding-left: 13px;
    }
  }
}

.table-header {
  display: flex;
  color: #ffffff;
  background: #6c7ae0;
  line-height: 2.2rem;
  padding: 4px 14px;
  .table-header__cell {
    font-weight: bold;
    text-transform: uppercase;
    &:nth-child(2) {
      width: 70%;
    }
  }
}

.table-header__sort-icon {
  font-size: 1.5rem;
  line-height: 1rem;
  font-weight: bold;
  margin-left: 10px;
  text-transform: initial;
  opacity: 0.5;
  &--active {
    opacity: 1;
  }
}

.cpointer {
  cursor: pointer;
}

.error {
  padding: 10px 0;
  font-size: 1.4rem;
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
}
</style>
