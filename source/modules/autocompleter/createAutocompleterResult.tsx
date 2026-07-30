// Module ID: 6169
// Function ID: 6170
// Name: HeaderRecord
// Dependencies: [5100, 2]
// Exports: createHeaderResult

// Module 6169 (HeaderRecord)
import HeaderRecord from "HeaderRecord";

let c0;
let closure_1;
({ HeaderRecord: c0, AutocompleterResultTypes: closure_1 } = HeaderRecord);
const result = require("set").fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export const createHeaderResult = function createHeaderResult(intl) {
  const obj = { type: constants.HEADER, record: null, score: 0 };
  obj[1] = new closure_0(intl);
  return obj;
};
