// Module ID: 9066
// Function ID: 9067
// Dependencies: [2, 9067, 6823, 9076, 9077, 6826]

// Module 9066
import sortByMatchScoreDefault from "sortByMatchScore" /* 6826 */;
import AutocompleterDefault from "Autocompleter" /* 9067 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9076 */;
import _modDef9077 from "module_9077" /* 9077 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6823 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9077;
export const sortByMatchScore = sortByMatchScoreDefault;
