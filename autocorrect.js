const AdvancedFunction = "REPLACE ME!!!";
// Note: There are some simple test cases at the bottom of this file!

/**
 * @param {string[]} topics - an array of topic words
 * @param {string} sentence - a space-separated string of words
 * @returns {boolean} whether `sentence` contains any of the words in `topics`
 */
const isRelevant = [
  "DevOps",
  "SonarQube",
  "Artifactory",
  "GLAPI",
  "Humana",
  "SCM",
  "Between Two Branches",
];
// A space-separated string of words
let sentencee = "I have experience in DevOps and SCM";
// Check if the sentence contains any of the words in topics
let result = isRelevant.some((topic) => sentencee.includes(topic));
//Display the result
console.log(result);

/**
 * @param {string[]} topics - an array of topic words
 * @returns {(sentence: string) => boolean} a function that takes a sentence
 *  and returns whether it is relevant to `topics`
 */
const about = [
  "DevOps",
  "SonarQube",
  "Artifactory",
  "GLAPI",
  "Humana",
  "SCM",
  "Between Two Branches",
];
function isRelevants(sentence, topics) {
  return about.some((topic) => sentence.includes(topic));
}
let sentenceee = "I have experience in DevOps and SCM";
let results = isRelevants(sentenceee, about);
console.log(results);

/**
 * @param {(sentence: string) => boolean} criterion - a function that
 *  takes a sentence and returns a boolean
 * @param {string[]} sentences - an array of space-separated strings of words
 * @returns {string[]} the subset of `sentences` for which `criterion` returns true
 */
const getRelevantSentences = [
  "DevOps",
  "SonarQube",
  "Artifactory",
  "GLAPI",
  "Humana",
  "SCM",
  "Between Two Branches",
];
function criterion(sentence) {
  return getRelevantSentences.some((topic) => sentence.includes(topic));
}
let sentencess = [
  "I have experience in DevOps and SCM",
  "I love to play guitar",
  "The weather is nice today",
  "Artifactory is a great tool for version control",
];
let relevantSenetences = sentencess.filter(criterion);
console.log(relevantSenetences);

/**
 * @param {string} str1 - the first string to compare
 * @param {string} str2 - the second string to compare
 * @returns {number} the absolute difference in length between `str1` and `str2`
 */
const getDistanceByLength = lengthDifference;
function lengthDifference(str1, str2) {
  return Math.abs(str1.length - str2.length);
}
let str1 = "FullStack";
let str2 = "FullStack SDR Database One shot";
let diff = lengthDifference(str1, str2);
console.log(diff);

/**
 * @param {string} word - the original string
 * @param {string[]} words - an array of strings
 * @param {(str1: string, str2: string) => number} distanceFn - a function that
 *  takes two strings and returns a number representing the distance between them
 * @param {number} threshold - the maximum distance that is still considered "close"
 * @returns {string} the string in `words` with the minimum distance to `word`
 *  as calculated by `distanceFn`, unless that distance is strictly greater than
 *  the `threshold`, in which case the original `word` is returned.
 */
const getClosestWord = closestDistance;
function closestDistance(original, words, distanceFn, threshold) {
  let closestWord = original;
  let smallestDist = Infinity;

  words.forEach((word) => {
    let dist = distanceFn(original, word);
    if (dist < smallestDist && dist <= threshold) {
      smallestDist = dist;
      closestWord = word;
    }
  });

  return closestWord;
}

function lengthDifference(str1, str2) {
  return Math.abs(str1.length - str2.length);
}

let originals = "Humana";
let wordsa = ["HumanaCare", "HumanaLife", "Huma", "HumanaHealthPlus"];
let thresholds = 3;

let closests = closestDistance(originals, wordsa, lengthDifference, thresholds);

console.log(closests); // logs the closest string in length within the threshold

/**
 * @param {string} word - the original string
 * @param {string[]} words - an array of strings
 * @param {number} threshold - the maximum distance that is still considered "close"
 * @returns {string} the string in `words` that is the closest to `word` in _length_,
 *  unless that distance is strictly greater than the `threshold`,
 *  in which case the original `word` is returned.
 */
const getClosestWordByLength = closestLength;
function closestLength(original, words, threshold) {
  let closestWord = original;
  let smallestDiff = Infinity;

  words.forEach((word) => {
    let diff = Math.abs(original.length - word.length);
    if (diff < smallestDiff && diff <= threshold) {
      smallestDiff = diff;
      closestWord = word;
    }
  });
  return closestWord;
}

let original = "Humana";
let wordss = ["HumanCare", "HumanaLife", "Huma", "HumanaHealthPlus"];
let threshold = 3;

let closest = closestLength(original, wordss, threshold);
console.log(closest);

/* === Simple Test Cases === */
// The provided logs print the expected output first.

/*
console.log("--- isRelevant ---");
const sentence = "the quick brown fox jumps over the lazy dog";
const catWords = ["cat", "kitten"];
const dogWords = ["dog", "puppy"];

console.log(true, isRelevant(dogWords, sentence));
console.log(false, isRelevant(catWords, sentence));

console.log("--- about ---");
const aboutDogs = about(dogWords);
console.log(true, aboutDogs(sentence));
console.log(false, aboutDogs("this sentence is about cats"));

console.log("--- getRelevantSentences ---");
const sentences = [
  "I have a pet dog",
  "I have a pet cat",
  "I don't have any pets",
];
console.log(["I have a pet dog"], getRelevantSentences(aboutDogs, sentences));
console.log(
  ["I don't have any pets"],
  getRelevantSentences((s) => s.length > 17, sentences)
);

console.log("--- getClosestWord ---");
let words = ["bed", "bank", "fence", "bridges"];
console.log("bed", getClosestWord("hi", words, getDistanceByLength, 3));
console.log("hi", getClosestWord("hi", words, getDistanceByLength, 0));
console.log("fence", getClosestWord("rivers", words, getDistanceByLength, 2));

console.log("--- getClosestWordByLength ---");
console.log("bed", getClosestWordByLength("hi", words, 3));
console.log("hi", getClosestWordByLength("hi", words, 0));
console.log("fence", getClosestWordByLength("rivers", words, 2));
*/
