// Module ID: 8972
// Function ID: 8973
// Dependencies: [2, 8973, 6372, 8982, 8983, 6375]

// Module 8972
import sortByMatchScoreDefault from "sortByMatchScore" /* 6375 */;
import AutocompleterDefault from "Autocompleter" /* 8973 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 8982 */;
import _modDef8983 from "module_8983" /* 8983 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6372 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef8983;
export const sortByMatchScore = sortByMatchScoreDefault;
