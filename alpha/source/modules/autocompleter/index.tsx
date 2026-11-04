// Module ID: 9280
// Function ID: 9281
// Dependencies: [2, 9281, 7032, 9290, 9291, 7035]

// Module 9280
import sortByMatchScoreDefault from "sortByMatchScore" /* 7035 */;
import AutocompleterDefault from "Autocompleter" /* 9281 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9290 */;
import _modDef9291 from "module_9291" /* 9291 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 7032 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9291;
export const sortByMatchScore = sortByMatchScoreDefault;
