// Module ID: 9972
// Function ID: 9973
// Name: AutocompleterConstants
// Dependencies: [5596, 2]
// Exports: createHeaderResult

// Module 9972 (AutocompleterConstants)
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5596 */;
import size from "module_2" /* 2 */;

({ HeaderRecord: closure_0, AutocompleterResultTypes: closure_1 } = AutocompleterConstants);
const result = size.fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export const createHeaderResult = function createHeaderResult(intl) {
  const obj = { type: constants.HEADER, record: new React(intl), score: 0 };
  return obj;
};
