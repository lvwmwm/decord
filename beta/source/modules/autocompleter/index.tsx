// Module ID: 8695
// Function ID: 8696
// Dependencies: [2, 8696, 6093, 8706, 8707, 6096]

// Module 8695
import sortByMatchScoreDefault from "sortByMatchScore" /* 6096 */;
import AutocompleterDefault from "Autocompleter" /* 8696 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 8706 */;
import _modDef8707 from "module_8707" /* 8707 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6093 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef8707;
export const sortByMatchScore = sortByMatchScoreDefault;
