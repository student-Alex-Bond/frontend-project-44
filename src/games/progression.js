import playBrainGames from '../index.js';
import { getRandomNumber } from '../random-number.js';

const rules = 'What number is missing in the progression?';

const getProgression = (length, firstItem, step) => {
  const progressionArray = [];
  let newProgressionItem = firstItem;

  for (let i = 0; i < length; i += 1) {
    progressionArray.push(`${newProgressionItem}`);
    newProgressionItem += step;
  }

  return progressionArray;
};

const getRound = () => {
  const progressionLength = 10;
  const minFirstProgressionItem = 0;
  const maxFirstProgressionItem = 99;
  const randomFirstProgressionItem = getRandomNumber(
    minFirstProgressionItem,
    maxFirstProgressionItem,
  );

  const minProgresssionStep = 2;
  const maxProgressionStep = 9;
  const randomProgressionStep = getRandomNumber(minProgresssionStep, maxProgressionStep);

  const interimProgressionArray = getProgression(
    progressionLength,
    randomFirstProgressionItem,
    randomProgressionStep,
  );

  const randomHiddenItemIndex = getRandomNumber(0, interimProgressionArray.length - 1);
  const correctAnswer = interimProgressionArray[randomHiddenItemIndex];
  interimProgressionArray[randomHiddenItemIndex] = '..';
  const question = interimProgressionArray.join(' ');

  return [question, correctAnswer];
};

const playProgression = () => {
  playBrainGames(rules, getRound);
};

export default playProgression;
