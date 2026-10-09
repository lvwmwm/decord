// Module ID: 8684
// Function ID: 8685
// Dependencies: [2, 8685, 6099, 8695, 8696, 6102]

// Module 8684
import sortByMatchScoreDefault from "sortByMatchScore" /* 6102 */;
import AutocompleterDefault from "Autocompleter" /* 8685 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 8695 */;
import _modDef8696 from "module_8696" /* 8696 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6099 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef8696;
export const sortByMatchScore = sortByMatchScoreDefault;
