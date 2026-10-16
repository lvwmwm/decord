// Module ID: 8926
// Function ID: 8927
// Dependencies: [2, 8927, 6319, 8936, 8937, 6322]

// Module 8926
import sortByMatchScoreDefault from "sortByMatchScore" /* 6322 */;
import AutocompleterDefault from "Autocompleter" /* 8927 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 8936 */;
import _modDef8937 from "module_8937" /* 8937 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6319 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef8937;
export const sortByMatchScore = sortByMatchScoreDefault;
