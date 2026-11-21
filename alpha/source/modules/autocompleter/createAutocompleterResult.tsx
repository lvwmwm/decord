// Module ID: 10067
// Function ID: 10068
// Name: AutocompleterConstants
// Dependencies: [6675, 2]
// Exports: createHeaderResult

// Module 10067 (AutocompleterConstants)
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6675 */;
import size from "module_2" /* 2 */;

let _window;
let map;
({ HeaderRecord: _window, AutocompleterResultTypes: map } = AutocompleterConstants);
const result = size.fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export function createHeaderResult(intl) {
  const obj = { type: map.HEADER, record: new React(intl), score: 0 };
  new React(intl);
  return obj;
}
