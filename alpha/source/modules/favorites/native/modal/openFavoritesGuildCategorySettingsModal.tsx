// Module ID: 18493
// Function ID: 18494
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6799, 18494, 2118, 2]
// Exports: default

// Module 18493 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18494, dependencyMap.paths), obj2);
};
