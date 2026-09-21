// Module ID: 12185
// Function ID: 12186
// Name: FrecencySectionStoreActionCreators
// Dependencies: [577, 2]
// Exports: setFrecencySectionSelection

// Module 12185 (FrecencySectionStoreActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  DispatcherDefault.dispatch({ type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS });
};
