// Module ID: 9275
// Function ID: 9276
// Name: AutocompleterConstants
// Dependencies: [5828, 2]
// Exports: createHeaderResult

// Module 9275 (AutocompleterConstants)
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 5828 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ HeaderRecord: _window, AutocompleterResultTypes: map } = AutocompleterConstants);
const result = size.fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export const createHeaderResult = function createHeaderResult(intl) {
  const obj = { type: map.HEADER, record: new React(intl), score: 0 };
  new React(intl);
  return obj;
};
