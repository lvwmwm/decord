// Module ID: 10188
// Function ID: 10189
// Name: AutocompleterConstants
// Dependencies: [7008, 2]
// Exports: createHeaderResult

// Module 10188 (AutocompleterConstants)
import AutocompleterConstants from "autocompleter/AutocompleterConstants" /* 7008 */;
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
