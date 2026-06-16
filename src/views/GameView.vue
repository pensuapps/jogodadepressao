<template>
  <v-container
    class="max-height d-flex flex-column justify-space-between content-size"
  >
    <template v-if="!showResult">
      <div class="full-width">
        <v-img
          :src="
            require(`../assets/images/depressionGame/${currentQuestion.img}.png`)
          "
          max-height="212"
          max-width="328"
          cover
          class="bg-grey-lighten-2 rounded-lg mx-auto"
        ></v-img>

        <h3 class="text-justify mt-3">
          {{ currentQuestion.text }}
        </h3>
      </div>
      <div class="full-width grid-3">
        <div class="d-flex flex-column align-center" @click="handleAnsware(1)">
          <v-btn fab depressed color="#3174CC" dark x-large>
            <v-icon> mdi-thumb-up </v-icon>
          </v-btn>
          <p class="text-center">Sim</p>
        </div>
        <div class="d-flex flex-column align-center" @click="handleAnsware(1)">
          <v-btn fab depressed dark color="#94BF36" x-large>
            <v-icon> mdi-thumbs-up-down </v-icon>
          </v-btn>
          <p class="text-center">Às vezes</p>
        </div>
        <div class="d-flex flex-column align-center" @click="handleAnsware(0)">
          <v-btn fab depressed dark color="#BF3A22" x-large>
            <v-icon> mdi-thumb-down </v-icon>
          </v-btn>
          <p class="text-center">Não</p>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="full-width">
        <v-img
          src="../assets/images/depressionGame/end.png"
          max-height="212"
          max-width="328"
          cover
          class="bg-grey-lighten-2 rounded-lg mx-auto"
        ></v-img>

        <h3 class="text-justify mt-3">
          <template v-if="score < 6">
            <span
              >Você parece estar se divertindo e aprendendo coisas legais na
              escola, continue assim!</span
            >
          </template>
          <template v-else>
            <span
              >Você deve conversar com seus pais e professores sobre o que
              acontece na escola.</span
            >
          </template>
        </h3>
      </div>
      <div class="full-width">
        <div class="d-flex justify-space-between" v-if="showLikeButtons">
          <div class="d-flex flex-column align-center" @click="handleLike()">
            <v-btn fab depressed color="#3174CC" dark size="x-large">
              <v-icon> mdi-thumb-up </v-icon>
            </v-btn>
            <p class="text-center">Gostei</p>
          </div>
          <div class="d-flex flex-column align-center" @click="handleLike()">
            <v-btn fab depressed dark color="#BF3A22" size="x-large">
              <v-icon> mdi-thumb-down </v-icon>
            </v-btn>
            <p class="text-center">Não gostei</p>
          </div>
        </div>
        <a
          class="text-center primary white--text rounded-pill py-2 px-4 cursor-pointer mt-2 mb-2 d-flex align-center justify-center"
          @click="goToAbout"
        >
          <v-icon class="white--text"> mdi-lightbulb </v-icon> Ficou curioso? Clica aqui</a
        >
        <v-btn rounded depressed dark block color="primary" @click="gotoHome">
          Voltar para a tela inicial
        </v-btn>
      </div>
    </template>
  </v-container>
</template>

<script>
import { depressionQuestions } from "../data/questions";
import { writeToFirestore } from "../plugins/firebase";
// Components
export default {
  name: "GameView",
  data: () => ({
    questionIndex: 0,
    score: 0,
    showResult: false,
    showLikeButtons: true,
  }),
  computed: {
    currentQuestion() {
      return depressionQuestions.questions[this.questionIndex];
    },
    lastQuestion() {
      return this.questionIndex === depressionQuestions.questions.length;
    },
  },
  watch: {
    questionIndex() {
      if (this.lastQuestion) {
        this.showResult = true;
        if (window.location.hostname !== "localhost") {
          writeToFirestore({
            score: this.score,
            dia: new Date().toLocaleDateString(),
            aplicacao: "jogo_da_depressao",
          });
        }
      }
    },
  },
  methods: {
    handleAnsware(value) {
      this.score += value;
      if (!this.lastQuestion) {
        this.questionIndex++;
      }
    },
    handleLike() {
      this.showLikeButtons = false;
    },
    goToAbout() {
      this.$router.push("/sobre");
    },
    gotoHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.content-size {
  max-width: 328px;
  margin: auto;
}

.full-width {
  width: 100%;
}

.grid-3 {
  display: grid !important;
  grid-template-columns: 1fr 1fr 1fr;
}
a {
  display: block;
  color: white;
}

.max-height {
  min-height: calc(100dvh - 4rem);
}
</style>
