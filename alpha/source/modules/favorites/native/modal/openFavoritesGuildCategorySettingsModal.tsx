// Module ID: 16033
// Function ID: 16034
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5093, 16034, 1987, 2]
// Exports: default

// Module 16033 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(16034, dependencyMap.paths), obj2);
};
