// Module ID: 11627
// Function ID: 11628
// Name: setFrecencySectionSelection
// Dependencies: [709, 2]
// Exports: setFrecencySectionSelection

// Module 11627 (setFrecencySectionSelection)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  let obj = dispatcherDefault;
  obj = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj);
};
