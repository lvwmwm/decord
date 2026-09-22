// Module ID: 11384
// Function ID: 11385
// Name: CustomStatusUtils
// Dependencies: [4960, 11385, 1980, 2]
// Exports: openEditCustomStatusModal

// Module 11384 (CustomStatusUtils)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/custom_status/native/CustomStatusUtils.tsx");

export const openEditCustomStatusModal = function openEditCustomStatusModal(arg0) {
  ({ analyticsLocations, prompt: _prompt } = arg0);
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11385, dependencyMap.paths), { analyticsLocations, prompt: _prompt }, undefined, { presentation: "modal" });
};
