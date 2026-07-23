// Module ID: 7103
// Function ID: 57124
// Name: HeaderRecord
// Dependencies: [5043, 2]
// Exports: createHeaderResult

// Module 7103 (HeaderRecord)
import HeaderRecord from "HeaderRecord";

({ HeaderRecord: closure_0, AutocompleterResultTypes: closure_1 } = HeaderRecord);
const result = require("set").fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export const createHeaderResult = function createHeaderResult(intl) {
  const obj = { type: closure_1.HEADER, record: new closure_0(intl), score: 0 };
  return obj;
};
