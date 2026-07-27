// Module ID: 11167
// Function ID: 86810
// Name: setFrecencySectionSelection
// Dependencies: [686, 2]
// Exports: setFrecencySectionSelection

// Module 11167 (setFrecencySectionSelection)
const result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  let obj = importDefault(686);
  obj = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj);
};
