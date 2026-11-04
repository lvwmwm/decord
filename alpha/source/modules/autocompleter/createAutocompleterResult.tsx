// Module ID: 9290
// Function ID: 9291
// Name: AutocompleterConstants
// Dependencies: [7032, 2]
// Exports: createHeaderResult

// Module 9290 (AutocompleterConstants)
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 7032 */;
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
