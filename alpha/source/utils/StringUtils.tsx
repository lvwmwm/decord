// Module ID: 2030
// Function ID: 2031
// Name: StringUtils
// Dependencies: [2, 2031]
// Exports: isNullOrEmpty

// Module 2030 (StringUtils)
import utils_StringUtils from "utils/StringUtils" /* 2031 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/StringUtils.tsx");

export const isNullOrEmpty = function isNullOrEmpty(id) {
  return null == id || 0 === id.length;
};
export const upperCaseFirstChar = utils_StringUtils.upperCaseFirstChar;
export const getAcronym = utils_StringUtils.getAcronym;
export const cssValueToNumber = utils_StringUtils.cssValueToNumber;
export const stripDiacritics = utils_StringUtils.stripDiacritics;
export const truncateText = utils_StringUtils.truncateText;
export const normalize = utils_StringUtils.normalize;
