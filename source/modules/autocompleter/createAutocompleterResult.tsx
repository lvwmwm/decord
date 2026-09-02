// Module ID: 9955
// Function ID: 9956
// Name: HeaderRecord
// Dependencies: [5460, 2]
// Exports: createHeaderResult

// Module 9955 (HeaderRecord)
import set from "set" /* 2 */;
import HeaderRecord from "HeaderRecord" /* 5460 */;

({ HeaderRecord: c0, AutocompleterResultTypes: closure_1 } = HeaderRecord);
const result = set.fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export const createHeaderResult = function createHeaderResult(intl) {
  const obj = { type: constants.HEADER, record: new closure_0(intl), score: 0 };
  return obj;
};
