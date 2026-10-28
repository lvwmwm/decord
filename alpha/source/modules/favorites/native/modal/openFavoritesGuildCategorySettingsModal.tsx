// Module ID: 17814
// Function ID: 17815
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6707, 17815, 1999, 2]
// Exports: default

// Module 17814 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6707 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17815, dependencyMap.paths), obj2);
};
