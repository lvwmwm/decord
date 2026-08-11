// Module ID: 1903
// Function ID: 1904
// Name: isNullOrEmpty
// Dependencies: [2, 1904]
// Exports: isNullOrEmpty

// Module 1903 (isNullOrEmpty)
const result = require("set").fileFinishedImporting("utils/StringUtils.tsx");

export const isNullOrEmpty = function isNullOrEmpty(application_id) {
  let tmp = null == application_id;
  if (!tmp) {
    tmp = 0 === application_id.length;
  }
  return tmp;
};
export const upperCaseFirstChar = require("cssValueToNumber").upperCaseFirstChar;
export const getAcronym = require("cssValueToNumber").getAcronym;
export const cssValueToNumber = require("cssValueToNumber").cssValueToNumber;
export const stripDiacritics = require("cssValueToNumber").stripDiacritics;
export const truncateText = require("cssValueToNumber").truncateText;
export const normalize = require("cssValueToNumber").normalize;
