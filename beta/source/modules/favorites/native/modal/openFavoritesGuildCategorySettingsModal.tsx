// Module ID: 17538
// Function ID: 17539
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6672, 17539, 2002, 2]
// Exports: default

// Module 17538 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17539, dependencyMap.paths), obj2);
};
