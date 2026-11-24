// Module ID: 8806
// Function ID: 8807
// Dependencies: [2, 8807, 6860, 8816, 8817, 6863]

// Module 8806
import sortByMatchScoreDefault from "sortByMatchScore" /* 6863 */;
import AutocompleterDefault from "Autocompleter" /* 8807 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 8816 */;
import _modDef8817 from "module_8817" /* 8817 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6860 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef8817;
export const sortByMatchScore = sortByMatchScoreDefault;
