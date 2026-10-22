// Module ID: 9036
// Function ID: 9037
// Dependencies: [2, 9037, 6811, 9046, 9047, 6814]

// Module 9036
import sortByMatchScoreDefault from "sortByMatchScore" /* 6814 */;
import AutocompleterDefault from "Autocompleter" /* 9037 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9046 */;
import _modDef9047 from "module_9047" /* 9047 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6811 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9047;
export const sortByMatchScore = sortByMatchScoreDefault;
