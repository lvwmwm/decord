// Module ID: 2153
// Function ID: 2154
// Name: StringUtils
// Dependencies: [2, 2154]
// Exports: isNullOrEmpty

// Module 2153 (StringUtils)
import utils_StringUtils from "utils/StringUtils" /* 2154 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("utils/StringUtils.tsx");

export function isNullOrEmpty(application_id) {
  return null == application_id || 0 === application_id.length;
}
export const upperCaseFirstChar = utils_StringUtils.upperCaseFirstChar;
export const getAcronym = utils_StringUtils.getAcronym;
export const cssValueToNumber = utils_StringUtils.cssValueToNumber;
export const stripDiacritics = utils_StringUtils.stripDiacritics;
export const truncateText = utils_StringUtils.truncateText;
export const normalize = utils_StringUtils.normalize;
