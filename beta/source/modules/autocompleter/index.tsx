// Module ID: 10109
// Function ID: 10110
// Name: sortByMatchScore
// Dependencies: [2, 10110, 5766, 10116, 10117, 5769]

// Module 10109 (sortByMatchScore)
import autocompleter_sortByMatchScoreDefault from "autocompleter/sortByMatchScore" /* 5769 */;
import AutocompleterDefault from "Autocompleter" /* 10110 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 10116 */;
import _modDef10117 from "module_10117" /* 10117 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5766 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in _module1) {
  arg5[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef10117;
export const sortByMatchScore = autocompleter_sortByMatchScoreDefault;
