// Module ID: 9099
// Function ID: 9100
// Dependencies: [2, 9100, 6857, 9109, 9110, 6860]

// Module 9099
import sortByMatchScoreDefault from "sortByMatchScore" /* 6860 */;
import AutocompleterDefault from "Autocompleter" /* 9100 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9109 */;
import _modDef9110 from "module_9110" /* 9110 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6857 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9110;
export const sortByMatchScore = sortByMatchScoreDefault;
