// Module ID: 8705
// Function ID: 8706
// Dependencies: [2, 8706, 6099, 8715, 8716, 6102]

// Module 8705
import sortByMatchScoreDefault from "sortByMatchScore" /* 6102 */;
import AutocompleterDefault from "Autocompleter" /* 8706 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 8715 */;
import _modDef8716 from "module_8716" /* 8716 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6099 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef8716;
export const sortByMatchScore = sortByMatchScoreDefault;
