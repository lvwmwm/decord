// Module ID: 2013
// Function ID: 2014
// Name: StringUtils
// Dependencies: [2, 2014]
// Exports: isNullOrEmpty

// Module 2013 (StringUtils)
import utils_StringUtils from "utils/StringUtils" /* 2014 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/StringUtils.tsx");

export const isNullOrEmpty = function isNullOrEmpty(id) {
  let tmp = null == id;
  if (!tmp) {
    tmp = 0 === id.length;
  }
  return tmp;
};
export const upperCaseFirstChar = utils_StringUtils.upperCaseFirstChar;
export const getAcronym = utils_StringUtils.getAcronym;
export const cssValueToNumber = utils_StringUtils.cssValueToNumber;
export const stripDiacritics = utils_StringUtils.stripDiacritics;
export const truncateText = utils_StringUtils.truncateText;
export const normalize = utils_StringUtils.normalize;
