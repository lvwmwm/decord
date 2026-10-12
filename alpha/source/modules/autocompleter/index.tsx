// Module ID: 8700
// Function ID: 8701
// Dependencies: [2, 8701, 6093, 8711, 8712, 6096]

// Module 8700
import sortByMatchScoreDefault from "sortByMatchScore" /* 6096 */;
import AutocompleterDefault from "Autocompleter" /* 8701 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 8711 */;
import _modDef8712 from "module_8712" /* 8712 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6093 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef8712;
export const sortByMatchScore = sortByMatchScoreDefault;
