// Module ID: 8917
// Function ID: 8918
// Dependencies: [2, 8918, 6315, 8927, 8928, 6318]

// Module 8917
import sortByMatchScoreDefault from "sortByMatchScore" /* 6318 */;
import AutocompleterDefault from "Autocompleter" /* 8918 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 8927 */;
import _modDef8928 from "module_8928" /* 8928 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6315 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef8928;
export const sortByMatchScore = sortByMatchScoreDefault;
