<template>
  <div>
    <div v-if="$store.state.isError">
      Произошла ошибка...
    </div>

    <div v-else>
      <div v-if="person.id">
        <div class="popup" v-show="isPopUp">
          <div class="popup__overlay" @click="closePopUp">
            <img :src="person.picture.large" />
            <span class="popup__close" @click="closePopUp">x</span>
          </div>
        </div>
        <div class="person">
          <div class="person__image">
            <img
              class="person__image"
              :src="person.picture.large"
              @click="openPopUp"
            />
          </div>
          <div class="person__info info">
            <h1 class="info__name">
              {{ person.name.last }} {{ person.name.first }}
            </h1>
            <p class="info__phone">{{ person.phone }}</p>
            <p class="info__email">
              <a :href="`mailto:${person.email}`">{{ person.email }} </a>
            </p>
          </div>
        </div>
      </div>
      <div v-else>Загрузка..</div>
      <div class="nav">
        <router-link to="/">← Назад к списку сотрудников</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      person: "",
      isPopUp: false,
    };
  },

  async created() {
    if (this.$store.state.data.length === 0)
      await this.$store.dispatch("getPersons");
    this.person = this.$store.getters.getPersonById(+this.$route.params.id);
  },

  methods: {
    openPopUp() {
      this.isPopUp = true;
    },
    closePopUp() {
      this.isPopUp = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1200px;
}
.nav {
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 3rem;
}
.person {
  margin-top: 4rem;
  display: flex;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  height: 220px;
}

.person__image {
  img {
    height: 220px;
    &:hover {
      cursor: zoom-in;
    }
  }
}

.person__info {
  margin-left: 30px;
  text-align: left;
}

.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.popup__overlay {
  background: #000000cc;
  width: 100vw;
  height: 100vh;
  img {
    position: absolute;
    top: 7%;
    width: 40%;
    left: 30%;
  }
}
.popup__close {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #fff;
  font-size: 30px;
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
  }
}
</style>
