// Module ID: 19858
// Function ID: 19859
// Name: showSoundboardSoundEditModal
// Dependencies: [5006, 6308, 19859, 2121, 2]
// Exports: default

// Module 19858 (showSoundboardSoundEditModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/edit_modal/showSoundboardSoundEditModal.tsx");

export default function showSoundboardSoundEditModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19859, dependencyMap.paths), merged, "SoundboardSoundEditModal");
};
