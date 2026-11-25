// Module ID: 8905
// Function ID: 8906
// Dependencies: [2, 8906, 6955, 8915, 8916, 6958]

// Module 8905
import sortByMatchScoreDefault from "sortByMatchScore" /* 6958 */;
import AutocompleterDefault from "Autocompleter" /* 8906 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 8915 */;
import _modDef8916 from "module_8916" /* 8916 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6955 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef8916;
export const sortByMatchScore = sortByMatchScoreDefault;
