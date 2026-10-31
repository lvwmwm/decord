// Module ID: 12243
// Function ID: 12244
// Name: FrecencySectionStoreActionCreators
// Dependencies: [572, 2]
// Exports: setFrecencySectionSelection

// Module 12243 (FrecencySectionStoreActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export function setFrecencySectionSelection(APPS) {
  const obj = DispatcherDefault;
  const obj2 = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj2);
}
