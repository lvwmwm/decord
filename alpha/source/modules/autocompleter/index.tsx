// Module ID: 8925
// Function ID: 8926
// Dependencies: [2, 8926, 6317, 8935, 8936, 6320]

// Module 8925
import sortByMatchScoreDefault from "sortByMatchScore" /* 6320 */;
import AutocompleterDefault from "Autocompleter" /* 8926 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 8935 */;
import _modDef8936 from "module_8936" /* 8936 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6317 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef8936;
export const sortByMatchScore = sortByMatchScoreDefault;
