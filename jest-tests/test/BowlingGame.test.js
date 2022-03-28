import BowlingGame from "../src/BowlingGame";

test("BowlingGame should have 10 frames", () => {
  const game = new BowlingGame();

  const result = game.getTotalFrames();

  expect(result).toBe(10);
});

test("When start the game should be frame 1", () => {
  const game = new BowlingGame();

  expect(game.getCurrentFrame()).toBe(1);
});

test("After the first roll the frame should not advance", () => {
  const game = new BowlingGame();

  game.roll(5);

  expect(game.getCurrentFrame()).toBe(1);
});

test("After Two rolls the frame should advance", () => {
  const game = new BowlingGame();

  game.roll(5);
  game.roll(5);

  expect(game.getCurrentFrame()).toBe(2);
});

test("The pins knocked should not be less than 0", () => {
  const game = new BowlingGame();

  game.roll(-2);

  expect(game.score()).toBe(0);
});

test("The pins knocked should not be greater than 10", () => {
  const game = new BowlingGame();

  game.roll(12);

  expect(game.score()).toBe(10);
});

test("After roll should get correct score ", () => {
  const game = new BowlingGame();

  game.roll(1);
  expect(game.score()).toBe(1);
});
test("After roll should add the score", () => {
  const game = new BowlingGame();

  game.roll(1);
  game.roll(1);
  expect(game.score()).toBe(2);
});
test("After roll should be 0 the score", () => {
  const game = new BowlingGame();

  game.roll(0);
  game.roll(0);
  expect(game.score()).toBe(0);
});

test("After doing a strike should advance to the next frame", () => {
  const game = new BowlingGame();

  game.roll(10);
  expect(game.getCurrentFrame()).toBe(2);
});

test("After doing a strike the next roll should be the first of the frame", () => {
  const game = new BowlingGame();

  game.roll(10);
  game.roll(2);
  expect(game.getCurrentFrame()).toBe(2);
});

test("After doing a spare the next roll should be the first of the frame", () => {
  const game = new BowlingGame();

  game.roll(5);
  game.roll(5);
  game.roll(2);
  expect(game.getCurrentFrame()).toBe(2);
});

test.only("After spare roll on the next roll should apply the bonus", () => {
  const game = new BowlingGame();

  game.roll(5);
  game.roll(5);
  game.roll(5);
  expect(game.score()).toBe(20);
});
