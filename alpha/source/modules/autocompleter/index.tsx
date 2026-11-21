// Module ID: 10063
// Function ID: 10064
// Dependencies: [2, 10064, 6675, 10067, 10068, 6678]

// Module 10063
import sortByMatchScoreDefault from "sortByMatchScore" /* 6678 */;
import AutocompleterDefault from "Autocompleter" /* 10064 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 10067 */;
import _modDef10068 from "module_10068" /* 10068 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6675 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef10068;
export const sortByMatchScore = sortByMatchScoreDefault;
