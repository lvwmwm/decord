// Module ID: 11638
// Function ID: 11639
// Name: setFrecencySectionSelection
// Dependencies: [709, 2]
// Exports: setFrecencySectionSelection

// Module 11638 (setFrecencySectionSelection)
import set from "set" /* 2 */;
import dispatcherDefault from "dispatcher" /* 709 */;

const result = set.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  let obj = dispatcherDefault;
  obj = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj);
};
