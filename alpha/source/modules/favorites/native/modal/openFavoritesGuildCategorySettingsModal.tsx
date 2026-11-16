// Module ID: 18833
// Function ID: 18834
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6838, 18834, 2121, 2]
// Exports: default

// Module 18833 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18834, dependencyMap.paths), obj2);
};
