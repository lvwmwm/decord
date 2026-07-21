// Module ID: 1832
// Function ID: 20029
// Name: isNullOrEmpty
// Dependencies: [5, 27]
// Exports: isNullOrEmpty

// Module 1832 (isNullOrEmpty)
import asyncGeneratorStep from "asyncGeneratorStep";

const result = asyncGeneratorStep.fileFinishedImporting("utils/StringUtils.tsx");

export const isNullOrEmpty = function isNullOrEmpty(application_id) {
  let tmp = null == application_id;
  if (!tmp) {
    tmp = 0 === application_id.length;
  }
  return tmp;
};
export const upperCaseFirstChar = require("keys").upperCaseFirstChar;
export const getAcronym = require("keys").getAcronym;
export const cssValueToNumber = require("keys").cssValueToNumber;
export const stripDiacritics = require("keys").stripDiacritics;
export const truncateText = require("keys").truncateText;
export const normalize = require("keys").normalize;
