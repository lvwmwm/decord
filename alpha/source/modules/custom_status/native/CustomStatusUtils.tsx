// Module ID: 10765
// Function ID: 10766
// Name: CustomStatusUtils
// Dependencies: [6152, 10766, 2002, 2]
// Exports: openEditCustomStatusModal

// Module 10765 (CustomStatusUtils)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  let _prompt;
  let analyticsLocations;
  ({ analyticsLocations, prompt: _prompt } = arg0);
  const obj = ModalActionCreatorsDefault;
  const obj2 = { analyticsLocations, prompt: _prompt };
  obj.pushLazy(asyncRequire(10766, dependencyMap.paths), obj2, undefined, { presentation: "modal" });
};
