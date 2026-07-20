// Module ID: 11158
// Function ID: 86793
// Name: setFrecencySectionSelection
// Dependencies: []
// Exports: setFrecencySectionSelection

// Module 11158 (setFrecencySectionSelection)
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  let obj = importDefault(dependencyMap[0]);
  obj = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj);
};
