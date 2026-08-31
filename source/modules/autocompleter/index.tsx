// Module ID: 9885
// Function ID: 9886
// Name: sortByMatchScore
// Dependencies: [2, 9886, 5420, 9894, 9895, 5423]

// Module 9885 (sortByMatchScore)
import set from "set" /* 2 */;
import sortByMatchScoreDefault from "sortByMatchScore" /* 5423 */;
import getAutocompleterBoosterMapDefault from "getAutocompleterBoosterMap" /* 9886 */;
import HeaderRecord2 from "HeaderRecord" /* 9894 */;
import _modDef9895 from "module_9895" /* 9895 */;
import HeaderRecord from "HeaderRecord" /* 5420 */;

const result = set.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in _module1) {
  let tmp4 = key10022;
  arg5[key10022] = HeaderRecord[key10022];
  continue;
}

export default getAutocompleterBoosterMapDefault;
export const createHeaderResult = HeaderRecord2.createHeaderResult;
export const findNextSelectedResult = _modDef9895;
export const sortByMatchScore = sortByMatchScoreDefault;
