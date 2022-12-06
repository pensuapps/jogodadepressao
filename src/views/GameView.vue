<template>
  <v-container class="fill-height d-flex flex-column justify-space-between content-size">
    <template v-if="!showResult">
      <div class="full-width">
        <v-img :src="require(`../assets/images/depressionGame/${currentQuestion.img}.png`)" max-height="212"
          max-width="328" cover class="bg-grey-lighten-2 rounded-lg mx-auto"></v-img>

        <h3 class="text-justify mt-3">
          {{ currentQuestion.text }}
        </h3>
      </div>
      <div class="full-width grid-3">
        <div class="d-flex flex-column align-center" @click="handleAnsware(1)">
          <v-btn fab depressed color="#3174CC" dark>
            <v-icon> mdi-thumb-up </v-icon>
          </v-btn>
          <p class="text-center">Sim</p>
        </div>
        <div class="d-flex flex-column align-center" @click="handleAnsware(1)">
          <v-btn fab depressed dark color="#94BF36">
            <v-icon> mdi-thumbs-up-down </v-icon>
          </v-btn>
          <p class="text-center">Às vezes</p>
        </div>
        <div class="d-flex flex-column align-center" @click="handleAnsware(0)">
          <v-btn fab depressed dark color="#BF3A22">
            <v-icon> mdi-thumb-down </v-icon>
          </v-btn>
          <p class="text-center">Não</p>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="full-width">
        <v-img src="../assets/images/depressionGame/end.png" max-height="212" max-width="328" cover
          class="bg-grey-lighten-2 rounded-lg mx-auto"></v-img>

        <h3 class="text-justify mt-3">
          <template v-if="score < 6">
            <span>Você parece estar se divertindo e aprendendo coisas legais na escola, continue assim!</span>
          </template>
          <template v-else>
            <span>Você deve conversar com seus pais e professores sobre o que acontece na escola.</span>
          </template>
        </h3>
      </div>
      <div class="full-width">
        <div class="d-flex justify-space-between" v-if="showLikeButtons">
          <div class="d-flex flex-column align-center" @click="handleLike()">
            <v-btn fab depressed color="#3174CC" dark>
              <v-icon> mdi-thumb-up </v-icon>
            </v-btn>
            <p class="text-center">Gostei</p>
          </div>
          <div class="d-flex flex-column align-center" @click="handleLike()">
            <v-btn fab depressed dark color="#BF3A22">
              <v-icon> mdi-thumb-down </v-icon>
            </v-btn>
            <p class="text-center">Não gostei</p>
          </div>
        </div>
        <a class="text-center" @click="goToAbout">Ficou curioso? Clica aqui</a>
      </div>
    </template>
  </v-container>
</template>
  
<script>
import { depressionQuestions } from "../data/questions"

// Components
export default {
  name: "GameView",
  data: () => ({
      questionIndex: 0,
      score: 0,
      showResult: false,
      showLikeButtons: true
  }),
  computed: {
    currentQuestion() {
      return depressionQuestions.questions[this.questionIndex]
    },
    lastQuestion() {
      return (this.questionIndex + 1) === depressionQuestions.questions.length
    }
  },
  watch: {
    questionIndex() {
      if (this.lastQuestion) {
        this.showResult = true
      }
    }
  },
  methods: {
    handleAnsware(value) {
      this.score += value
      if (!this.lastQuestion) {
        this.questionIndex++
      }
    },
    handleLike() {
      this.showLikeButtons = false
    },
    goToAbout() {
      this.$router.push("/sobre")
    }
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
</style>
  