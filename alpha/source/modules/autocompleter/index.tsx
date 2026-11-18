// Module ID: 9961
// Function ID: 9962
// Dependencies: [2, 9962, 6583, 9965, 9966, 6586]

// Module 9961
import sortByMatchScoreDefault from "sortByMatchScore" /* 6586 */;
import AutocompleterDefault from "Autocompleter" /* 9962 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9965 */;
import _modDef9966 from "module_9966" /* 9966 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6583 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9966;
export const sortByMatchScore = sortByMatchScoreDefault;
