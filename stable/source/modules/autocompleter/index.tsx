// Module ID: 9135
// Function ID: 9136
// Dependencies: [2, 9136, 6897, 9145, 9146, 6900]

// Module 9135
import sortByMatchScoreDefault from "sortByMatchScore" /* 6900 */;
import AutocompleterDefault from "Autocompleter" /* 9136 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9145 */;
import _modDef9146 from "module_9146" /* 9146 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6897 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9146;
export const sortByMatchScore = sortByMatchScoreDefault;
