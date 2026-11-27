// Module ID: 20039
// Function ID: 20040
// Name: showSoundboardSoundEditModal
// Dependencies: [5257, 6130, 20040, 2120, 2]
// Exports: default

// Module 20039 (showSoundboardSoundEditModal)
import asyncRequire from "asyncRequire" /* 2120 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/edit_modal/showSoundboardSoundEditModal.tsx");

export default function showSoundboardSoundEditModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(20040, dependencyMap.paths), merged, "SoundboardSoundEditModal");
};
