// Module ID: 19815
// Function ID: 19816
// Name: showSoundboardSoundEditModal
// Dependencies: [5127, 6429, 19816, 2119, 2]
// Exports: default

// Module 19815 (showSoundboardSoundEditModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/edit_modal/showSoundboardSoundEditModal.tsx");

export default function showSoundboardSoundEditModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19816, dependencyMap.paths), merged, "SoundboardSoundEditModal");
};
