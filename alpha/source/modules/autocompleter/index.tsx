// Module ID: 10178
// Function ID: 10179
// Dependencies: [2, 10179, 7008, 10188, 10189, 7011]

// Module 10178
import sortByMatchScoreDefault from "sortByMatchScore" /* 7011 */;
import AutocompleterDefault from "Autocompleter" /* 10179 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 10188 */;
import _modDef10189 from "module_10189" /* 10189 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 7008 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef10189;
export const sortByMatchScore = sortByMatchScoreDefault;
