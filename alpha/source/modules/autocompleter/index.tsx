// Module ID: 8699
// Function ID: 8700
// Dependencies: [2, 8700, 6092, 8710, 8711, 6095]

// Module 8699
import sortByMatchScoreDefault from "sortByMatchScore" /* 6095 */;
import AutocompleterDefault from "Autocompleter" /* 8700 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 8710 */;
import _modDef8711 from "module_8711" /* 8711 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6092 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef8711;
export const sortByMatchScore = sortByMatchScoreDefault;
