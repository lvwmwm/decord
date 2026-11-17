// Module ID: 18874
// Function ID: 18875
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6833, 18875, 2121, 2]
// Exports: default

// Module 18874 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6833 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18875, dependencyMap.paths), obj2);
};
