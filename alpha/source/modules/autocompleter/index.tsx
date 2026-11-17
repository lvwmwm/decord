// Module ID: 10680
// Function ID: 10681
// Dependencies: [2, 10681, 7079, 10684, 10685, 7082]

// Module 10680
import sortByMatchScoreDefault from "sortByMatchScore" /* 7082 */;
import AutocompleterDefault from "Autocompleter" /* 10681 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 10684 */;
import _modDef10685 from "module_10685" /* 10685 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 7079 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef10685;
export const sortByMatchScore = sortByMatchScoreDefault;
