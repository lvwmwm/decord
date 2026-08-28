// Module ID: 9862
// Function ID: 9863
// Name: sortByMatchScore
// Dependencies: [2, 9863, 5417, 9871, 9872, 5420]

// Module 9862 (sortByMatchScore)
import set from "set" /* 2 */;
import sortByMatchScoreDefault from "sortByMatchScore" /* 5420 */;
import getAutocompleterBoosterMapDefault from "getAutocompleterBoosterMap" /* 9863 */;
import HeaderRecord2 from "HeaderRecord" /* 9871 */;
import _modDef9872 from "module_9872" /* 9872 */;
import HeaderRecord from "HeaderRecord" /* 5417 */;

const result = set.fileFinishedImporting("modules/autocompleter/index.tsx");
for (const key10022 in _module1) {
  let tmp4 = key10022;
  arg5[key10022] = HeaderRecord[key10022];
  continue;
}

export default getAutocompleterBoosterMapDefault;
export const createHeaderResult = HeaderRecord2.createHeaderResult;
export const findNextSelectedResult = _modDef9872;
export const sortByMatchScore = sortByMatchScoreDefault;
