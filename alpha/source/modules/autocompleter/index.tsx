// Module ID: 8675
// Function ID: 8676
// Dependencies: [2, 8676, 6097, 8686, 8687, 6100]

// Module 8675
import sortByMatchScoreDefault from "sortByMatchScore" /* 6100 */;
import AutocompleterDefault from "Autocompleter" /* 8676 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 8686 */;
import _modDef8687 from "module_8687" /* 8687 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6097 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef8687;
export const sortByMatchScore = sortByMatchScoreDefault;
