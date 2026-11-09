// Module ID: 18506
// Function ID: 18507
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6799, 18507, 2118, 2]
// Exports: default

// Module 18506 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6799 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18507, dependencyMap.paths), obj2);
};
