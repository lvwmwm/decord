// Module ID: 9233
// Function ID: 9234
// Dependencies: [2, 9234, 6977, 9243, 9244, 6980]

// Module 9233
import sortByMatchScoreDefault from "sortByMatchScore" /* 6980 */;
import AutocompleterDefault from "Autocompleter" /* 9234 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9243 */;
import _modDef9244 from "module_9244" /* 9244 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6977 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9244;
export const sortByMatchScore = sortByMatchScoreDefault;
