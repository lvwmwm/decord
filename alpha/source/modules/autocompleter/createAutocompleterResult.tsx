// Module ID: 8686
// Function ID: 8687
// Name: AutocompleterConstants
// Dependencies: [6097, 2]
// Exports: createHeaderResult

// Module 8686 (AutocompleterConstants)
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6097 */;
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
