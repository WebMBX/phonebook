<template>
  <div>
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
            >{{ sortAsc ? "↓" : "↑" }}</i
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

    <p v-if="!tableData.length">Ничего не найдено</p>
    <div
      class="item"
      v-for="person in tableData"
      :key="person.id.value"
      @click="getInfo(person.id)"
    >
      <router-link to="/foo">Перейти к Foo</router-link>
      <img class="item__img" :src="person.picture.thumbnail" />
      <div class="cell item__name" data-title="Full Name">
        {{ person.name.last + " " + person.name.first }}
      </div>
      <div class="cell item__date" data-title="Birthday">
        <!-- {{ person.bday.toLocaleDateString("ru-RU") }} -->
        {{ person.bday }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  //   props: {
  //     data: {
  //       type: Array,
  //       required: true,
  //       default: () => [],
  //     },
  //   },

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
    getInfo(id) {
      console.log(id.value);
    },
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

      const sorted = data.sort((a, b) => {
        return a.bday - b.bday;
      });

      if (sorted) {
        this.activeSort = "data";
        this.$store.commit(
          "setTableData",
          this.sortAscData ? sorted : sorted.reverse()
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
    background: #6b76e705;
    cursor: pointer;
    // transform: scale(1.1);
    // box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
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
</style>
