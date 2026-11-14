// Module ID: 10257
// Function ID: 10258
// Name: AutocompleterConstants
// Dependencies: [7071, 2]
// Exports: createHeaderResult

// Module 10257 (AutocompleterConstants)
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 7071 */;
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
