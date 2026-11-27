// Module ID: 8948
// Function ID: 8949
// Dependencies: [2, 8949, 6986, 8958, 8959, 6989]

// Module 8948
import sortByMatchScoreDefault from "sortByMatchScore" /* 6989 */;
import AutocompleterDefault from "Autocompleter" /* 8949 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 8958 */;
import _modDef8959 from "module_8959" /* 8959 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6986 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef8959;
export const sortByMatchScore = sortByMatchScoreDefault;
