// Module ID: 9933
// Function ID: 9934
// Name: HeaderRecord
// Dependencies: [5452, 2]
// Exports: createHeaderResult

// Module 9933 (HeaderRecord)
import set from "set" /* 2 */;
import HeaderRecord from "HeaderRecord" /* 5452 */;

({ HeaderRecord: c0, AutocompleterResultTypes: closure_1 } = HeaderRecord);
const result = set.fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export const createHeaderResult = function createHeaderResult(intl) {
  const obj = { type: constants.HEADER, record: new closure_0(intl), score: 0 };
  return obj;
};
