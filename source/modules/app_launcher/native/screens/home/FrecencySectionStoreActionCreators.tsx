// Module ID: 12055
// Function ID: 12056
// Name: setFrecencySectionSelection
// Dependencies: [573, 2]
// Exports: setFrecencySectionSelection

// Module 12055 (setFrecencySectionSelection)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 573 */;

const result = set.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  let obj = dispatcherDefault;
  obj = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj);
};
