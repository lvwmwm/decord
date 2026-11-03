// Module ID: 9263
// Function ID: 9264
// Dependencies: [2, 9264, 7017, 9273, 9274, 7020]

// Module 9263
import sortByMatchScoreDefault from "sortByMatchScore" /* 7020 */;
import AutocompleterDefault from "Autocompleter" /* 9264 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9273 */;
import _modDef9274 from "module_9274" /* 9274 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 7017 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9274;
export const sortByMatchScore = sortByMatchScoreDefault;
