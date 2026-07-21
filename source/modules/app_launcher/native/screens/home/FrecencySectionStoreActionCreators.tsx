// Module ID: 11164
// Function ID: 86828
// Name: setFrecencySectionSelection
// Dependencies: [646840323, 899088385]
// Exports: setFrecencySectionSelection

// Module 11164 (setFrecencySectionSelection)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj);
};
