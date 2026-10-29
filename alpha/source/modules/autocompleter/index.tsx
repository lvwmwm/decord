// Module ID: 9103
// Function ID: 9104
// Dependencies: [2, 9104, 6884, 9113, 9114, 6887]

// Module 9103
import sortByMatchScoreDefault from "sortByMatchScore" /* 6887 */;
import AutocompleterDefault from "Autocompleter" /* 9104 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9113 */;
import _modDef9114 from "module_9114" /* 9114 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6884 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9114;
export const sortByMatchScore = sortByMatchScoreDefault;
