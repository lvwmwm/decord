// Module ID: 11243
// Function ID: 11244
// Name: setFrecencySectionSelection
// Dependencies: [709, 2]
// Exports: setFrecencySectionSelection

// Module 11243 (setFrecencySectionSelection)
const result = require("set").fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  let obj = importDefault(709);
  obj = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj);
};
