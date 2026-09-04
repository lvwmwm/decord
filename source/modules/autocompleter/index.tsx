// Module ID: 9764
// Function ID: 9765
// Name: sortByMatchScore
// Dependencies: [2, 9765, 5470, 9771, 9772, 5473]

// Module 9764 (sortByMatchScore)
import set from "set" /* 2 */;
import sortByMatchScoreDefault from "sortByMatchScore" /* 5473 */;
import getAutocompleterBoosterMapDefault from "getAutocompleterBoosterMap" /* 9765 */;
import HeaderRecord2 from "HeaderRecord" /* 9771 */;
import _modDef9772 from "module_9772" /* 9772 */;
import HeaderRecord from "HeaderRecord" /* 5470 */;

const result = set.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in _module1) {
  let tmp4 = key10022;
  arg5[key10022] = HeaderRecord[key10022];
  continue;
}

export default getAutocompleterBoosterMapDefault;
export const createHeaderResult = HeaderRecord2.createHeaderResult;
export const findNextSelectedResult = _modDef9772;
export const sortByMatchScore = sortByMatchScoreDefault;
