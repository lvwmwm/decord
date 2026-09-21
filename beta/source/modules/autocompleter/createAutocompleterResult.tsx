// Module ID: 10098
// Function ID: 10099
// Name: AutocompleterConstants
// Dependencies: [5732, 2]
// Exports: createHeaderResult

// Module 10098 (AutocompleterConstants)
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5732 */;
import size from "module_2" /* 2 */;

({ HeaderRecord: closure_0, AutocompleterResultTypes: closure_1 } = AutocompleterConstants);
const result = size.fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export const createHeaderResult = function createHeaderResult(intl) {
  const obj = { type: constants.HEADER, record: new React(intl), score: 0 };
  return obj;
};
