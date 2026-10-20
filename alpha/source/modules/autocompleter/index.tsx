// Module ID: 9000
// Function ID: 9001
// Dependencies: [2, 9001, 6776, 9010, 9011, 6779]

// Module 9000
import sortByMatchScoreDefault from "sortByMatchScore" /* 6779 */;
import AutocompleterDefault from "Autocompleter" /* 9001 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9010 */;
import _modDef9011 from "module_9011" /* 9011 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6776 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9011;
export const sortByMatchScore = sortByMatchScoreDefault;
