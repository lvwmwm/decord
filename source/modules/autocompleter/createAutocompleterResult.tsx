// Module ID: 7093
// Function ID: 57056
// Dependencies: []
// Exports: createHeaderResult

// Module 7093
const _module = require(dependencyMap[0]);
({ HeaderRecord: closure_0, AutocompleterResultTypes: closure_1 } = _module);
const _module1 = require(dependencyMap[1]);
const result = _module1.fileFinishedImporting("modules/autocompleter/createAutocompleterResult.tsx");

export const createHeaderResult = function createHeaderResult(intl) {
  const obj = { type: closure_1.HEADER, record: new closure_0(intl), score: 0 };
  return obj;
};
