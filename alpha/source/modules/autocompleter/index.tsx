// Module ID: 9221
// Function ID: 9222
// Dependencies: [2, 9222, 6955, 9231, 9232, 6958]

// Module 9221
import sortByMatchScoreDefault from "sortByMatchScore" /* 6958 */;
import AutocompleterDefault from "Autocompleter" /* 9222 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9231 */;
import _modDef9232 from "module_9232" /* 9232 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6955 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9232;
export const sortByMatchScore = sortByMatchScoreDefault;
