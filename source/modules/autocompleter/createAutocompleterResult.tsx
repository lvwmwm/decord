// Module ID: 7640
// Function ID: 7641
// Name: HeaderRecord
// Dependencies: [6810, 2]
// Exports: createHeaderResult

// Module 7640 (HeaderRecord)
import set from "set" /* 2 */;
import HeaderRecord from "HeaderRecord" /* 6810 */;

({ HeaderRecord: c0, AutocompleterResultTypes: closure_1 } = HeaderRecord);
const result = set.fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export const createHeaderResult = function createHeaderResult(intl) {
  const obj = { type: constants.HEADER, record: new closure_0(intl), score: 0 };
  return obj;
};
