// Module ID: 9457
// Function ID: 9458
// Name: sortByMatchScore
// Dependencies: [2, 9458, 5994, 9464, 9465, 5997]

// Module 9457 (sortByMatchScore)
import autocompleter_sortByMatchScoreDefault from "autocompleter/sortByMatchScore" /* 5997 */;
import AutocompleterDefault from "Autocompleter" /* 9458 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9464 */;
import _modDef9465 from "module_9465" /* 9465 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5994 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in _module1) {
  arg5[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9465;
export const sortByMatchScore = autocompleter_sortByMatchScoreDefault;
