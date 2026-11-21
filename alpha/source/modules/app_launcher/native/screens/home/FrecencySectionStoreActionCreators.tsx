// Module ID: 12925
// Function ID: 12926
// Name: FrecencySectionStoreActionCreators
// Dependencies: [572, 2]
// Exports: setFrecencySectionSelection

// Module 12925 (FrecencySectionStoreActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export function setFrecencySectionSelection(APPS) {
  const obj = DispatcherDefault;
  const obj2 = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj2);
}
