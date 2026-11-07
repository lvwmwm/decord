// Module ID: 9215
// Function ID: 9216
// Dependencies: [2, 9216, 6952, 9225, 9226, 6955]

// Module 9215
import sortByMatchScoreDefault from "sortByMatchScore" /* 6955 */;
import AutocompleterDefault from "Autocompleter" /* 9216 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9225 */;
import _modDef9226 from "module_9226" /* 9226 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6952 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9226;
export const sortByMatchScore = sortByMatchScoreDefault;
