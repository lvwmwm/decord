// Module ID: 19811
// Function ID: 19812
// Name: showSoundboardSoundEditModal
// Dependencies: [5127, 6429, 19812, 2119, 2]
// Exports: default

// Module 19811 (showSoundboardSoundEditModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/edit_modal/showSoundboardSoundEditModal.tsx");

export default function showSoundboardSoundEditModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19812, dependencyMap.paths), merged, "SoundboardSoundEditModal");
};
