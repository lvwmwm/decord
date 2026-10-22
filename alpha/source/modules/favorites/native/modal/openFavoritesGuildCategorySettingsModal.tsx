// Module ID: 17435
// Function ID: 17436
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6658, 17436, 2002, 2]
// Exports: default

// Module 17435 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6658 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17436, dependencyMap.paths), obj2);
};
