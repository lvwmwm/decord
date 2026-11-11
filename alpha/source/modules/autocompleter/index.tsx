// Module ID: 10180
// Function ID: 10181
// Dependencies: [2, 10181, 7008, 10190, 10191, 7011]

// Module 10180
import sortByMatchScoreDefault from "sortByMatchScore" /* 7011 */;
import AutocompleterDefault from "Autocompleter" /* 10181 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 10190 */;
import _modDef10191 from "module_10191" /* 10191 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 7008 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef10191;
export const sortByMatchScore = sortByMatchScoreDefault;
