// Module ID: 9100
// Function ID: 9101
// Dependencies: [2, 9101, 6861, 9110, 9111, 6864]

// Module 9100
import sortByMatchScoreDefault from "sortByMatchScore" /* 6864 */;
import AutocompleterDefault from "Autocompleter" /* 9101 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9110 */;
import _modDef9111 from "module_9111" /* 9111 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6861 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9111;
export const sortByMatchScore = sortByMatchScoreDefault;
