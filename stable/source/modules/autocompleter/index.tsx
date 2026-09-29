// Module ID: 10130
// Function ID: 10131
// Name: sortByMatchScore
// Dependencies: [2, 10131, 5764, 10137, 10138, 5767]

// Module 10130 (sortByMatchScore)
import autocompleter_sortByMatchScoreDefault from "autocompleter/sortByMatchScore" /* 5767 */;
import AutocompleterDefault from "Autocompleter" /* 10131 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 10137 */;
import _modDef10138 from "module_10138" /* 10138 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5764 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in _module1) {
  arg5[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef10138;
export const sortByMatchScore = autocompleter_sortByMatchScoreDefault;
