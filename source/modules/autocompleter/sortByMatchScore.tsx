// Module ID: 5316
// Function ID: 45173
// Name: sortByMatchScore
// Dependencies: []
// Exports: default

// Module 5316 (sortByMatchScore)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/autocompleter/sortByMatchScore.tsx");

export default function sortByMatchScore(score, score2) {
  if (score.score === score2.score) {
    let sortable = score.sortable;
    if (null == sortable) {
      const comparator = score.comparator;
      let toLocaleLowerCaseResult;
      if (null != comparator) {
        toLocaleLowerCaseResult = comparator.toLocaleLowerCase();
      }
      sortable = toLocaleLowerCaseResult;
    }
    let str = "";
    let str2 = "";
    if (null != sortable) {
      str2 = sortable;
    }
    let sortable2 = score.sortable;
    if (null == sortable2) {
      const comparator2 = score2.comparator;
      let toLocaleLowerCaseResult1;
      if (null != comparator2) {
        toLocaleLowerCaseResult1 = comparator2.toLocaleLowerCase();
      }
      sortable2 = toLocaleLowerCaseResult1;
    }
    if (null != sortable2) {
      str = sortable2;
    }
    if (str2 < str) {
      return -1;
    } else if (str2 > str) {
      return 1;
    }
  }
  return score2.score - score.score;
};
