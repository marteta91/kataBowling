export default class BowlingGame {
  constructor() {
    this.currentFrame = 1;
    this.isFirstRollOfTheFrame = true;
    this.currentScore = 0;
    this.nextRollHasSpareBonus = false;
    this.lastPinsKnocked = 0;
  }

  getTotalFrames() {
    return 10;
  }

  roll(pinsKnocked) {
    console.log("roll");
    // validamos los parametros de entrada
    if (pinsKnocked < 0) {
      pinsKnocked = 0;
    }

    if (pinsKnocked > 10) {
      pinsKnocked = 10;
    }

    // sumamos la puntuacion
    this.currentScore += pinsKnocked;
    console.log("currentScore" + this.score());

    if (this.nextRollHasSpareBonus == true) {
      console.log("nextRollHasSpareBonus" + this.score());
      this.currentScore += pinsKnocked;
    }

    if (this.isSpare(pinsKnocked)) {
      this.nextRollHasSpareBonus = true;
    }

    if (this.isSecondRollOfTheFrame()) {
      this.advanceToNextFrame();
      return;
    }

    if (this.isFirstRollOfTheFrame == true) {
      this.isFirstRollOfTheFrame = false;
    }

    console.log("pinsKnocked" + pinsKnocked);
    console.log("last" + this.lastPinsKnocked);

    // cuando es un strike
    if (this.isStrike(pinsKnocked)) {
      this.advanceToNextFrame();
    }

    this.lastPinsKnocked = pinsKnocked;
  }

  score() {
    return this.currentScore;
  }

  getCurrentFrame() {
    return this.currentFrame;
  }

  isSecondRollOfTheFrame() {
    return this.isFirstRollOfTheFrame == false;
  }

  isStrike(pinsKnocked) {
    return pinsKnocked == 10;
  }

  isSpare(pinsKnocked) {
    return pinsKnocked + this.lastPinsKnocked == 10;
  }

  advanceToNextFrame() {
    this.currentFrame += 1;
    this.isFirstRollOfTheFrame = true;
  }
}
