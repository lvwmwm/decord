// Module ID: 9116
// Function ID: 9117
// Dependencies: [2, 9117, 6891, 9126, 9127, 6894]

// Module 9116
import sortByMatchScoreDefault from "sortByMatchScore" /* 6894 */;
import AutocompleterDefault from "Autocompleter" /* 9117 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9126 */;
import _modDef9127 from "module_9127" /* 9127 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6891 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9127;
export const sortByMatchScore = sortByMatchScoreDefault;
