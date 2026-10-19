// Module ID: 11870
// Function ID: 11871
// Name: FrecencySectionStoreActionCreators
// Dependencies: [584, 2]
// Exports: setFrecencySectionSelection

// Module 11870 (FrecencySectionStoreActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/FrecencySectionStoreActionCreators.tsx");

export const setFrecencySectionSelection = function setFrecencySectionSelection(APPS) {
  const obj = DispatcherDefault;
  const obj2 = { type: "FRECENCY_SECTION_SET_SELECTION", selection: APPS };
  obj.dispatch(obj2);
};
