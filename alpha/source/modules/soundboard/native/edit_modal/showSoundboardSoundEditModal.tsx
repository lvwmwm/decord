// Module ID: 19950
// Function ID: 19951
// Name: showSoundboardSoundEditModal
// Dependencies: [5226, 6099, 19951, 2119, 2]
// Exports: default

// Module 19950 (showSoundboardSoundEditModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/edit_modal/showSoundboardSoundEditModal.tsx");

export default function showSoundboardSoundEditModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19951, dependencyMap.paths), merged, "SoundboardSoundEditModal");
};
