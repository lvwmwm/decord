// Module ID: 9043
// Function ID: 9044
// Dependencies: [2, 9044, 6810, 9053, 9054, 6813]

// Module 9043
import sortByMatchScoreDefault from "sortByMatchScore" /* 6813 */;
import AutocompleterDefault from "Autocompleter" /* 9044 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9053 */;
import _modDef9054 from "module_9054" /* 9054 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6810 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9054;
export const sortByMatchScore = sortByMatchScoreDefault;
