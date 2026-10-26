// Module ID: 12036
// Function ID: 12037
// Name: FrecencySectionStoreActionCreators
// Dependencies: [584, 2]
// Exports: setFrecencySectionSelection

// Module 12036 (FrecencySectionStoreActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  const obj = DispatcherDefault;
  const obj2 = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj2);
};
