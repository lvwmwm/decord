// Module ID: 19676
// Function ID: 19677
// Name: showSoundboardSoundEditModal
// Dependencies: [5008, 6310, 19677, 2119, 2]
// Exports: default

// Module 19676 (showSoundboardSoundEditModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5008 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/native/edit_modal/showSoundboardSoundEditModal.tsx");

export default function showSoundboardSoundEditModal(merged) {
  const obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet();
  const obj2 = ModalActionCreatorsDefault;
  obj2.pushLazy(asyncRequire(19677, dependencyMap.paths), merged, "SoundboardSoundEditModal");
};
