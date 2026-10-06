// Module ID: 9268
// Function ID: 9269
// Dependencies: [2, 9269, 5828, 9275, 9276, 5831]

// Module 9268
import sortByMatchScoreDefault from "sortByMatchScore" /* 5831 */;
import AutocompleterDefault from "Autocompleter" /* 9269 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9275 */;
import _modDef9276 from "module_9276" /* 9276 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5828 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9276;
export const sortByMatchScore = sortByMatchScoreDefault;
