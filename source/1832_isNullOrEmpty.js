// Module ID: 1832
// Function ID: 20029
// Name: isNullOrEmpty
// Dependencies: []
// Exports: isNullOrEmpty

// Module 1832 (isNullOrEmpty)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("utils/StringUtils.tsx");

export const isNullOrEmpty = function isNullOrEmpty(application_id) {
  let tmp = null == application_id;
  if (!tmp) {
    tmp = 0 === application_id.length;
  }
  return tmp;
};
export const upperCaseFirstChar = require(dependencyMap[1]).upperCaseFirstChar;
export const getAcronym = require(dependencyMap[1]).getAcronym;
export const cssValueToNumber = require(dependencyMap[1]).cssValueToNumber;
export const stripDiacritics = require(dependencyMap[1]).stripDiacritics;
export const truncateText = require(dependencyMap[1]).truncateText;
export const normalize = require(dependencyMap[1]).normalize;
