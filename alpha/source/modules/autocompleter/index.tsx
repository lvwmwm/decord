// Module ID: 9027
// Function ID: 9028
// Dependencies: [2, 9028, 6804, 9037, 9038, 6807]

// Module 9027
import sortByMatchScoreDefault from "sortByMatchScore" /* 6807 */;
import AutocompleterDefault from "Autocompleter" /* 9028 */;
import AutocompleterConstants2 from "AutocompleterConstants" /* 9037 */;
import _modDef9038 from "module_9038" /* 9038 */;
import size from "module_2" /* 2 */;
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6804 */;

const result = size.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in AutocompleterConstants) {
  exports[key10022] = AutocompleterConstants[key10022];
  continue;
}

export default AutocompleterDefault;
export const createHeaderResult = AutocompleterConstants2.createHeaderResult;
export const findNextSelectedResult = _modDef9038;
export const sortByMatchScore = sortByMatchScoreDefault;
