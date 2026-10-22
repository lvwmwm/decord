// Module ID: 9053
// Function ID: 9054
// Name: AutocompleterConstants
// Dependencies: [6810, 2]
// Exports: createHeaderResult

// Module 9053 (AutocompleterConstants)
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6810 */;
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
