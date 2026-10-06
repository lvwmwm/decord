// Module ID: 11413
// Function ID: 11414
// Name: FrecencySectionStoreActionCreators
// Dependencies: [585, 2]
// Exports: setFrecencySectionSelection

// Module 11413 (FrecencySectionStoreActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  const obj = DispatcherDefault;
  const obj2 = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj2);
};
