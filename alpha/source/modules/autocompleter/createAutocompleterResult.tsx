// Module ID: 9126
// Function ID: 9127
// Name: AutocompleterConstants
// Dependencies: [6891, 2]
// Exports: createHeaderResult

// Module 9126 (AutocompleterConstants)
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 6891 */;
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
