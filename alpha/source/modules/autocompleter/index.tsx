// Module ID: 9287
// Function ID: 9288
// Dependencies: [2, 9288, 7035, 9297, 9298, 7038]

// Module 9287
import sortByMatchScoreDefault from "sortByMatchScore" /* 7038 */;
import AutocompleterDefault from "Autocompleter" /* 9288 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9297 */;
import _modDef9298 from "module_9298" /* 9298 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 7035 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9298;
export const sortByMatchScore = sortByMatchScoreDefault;
