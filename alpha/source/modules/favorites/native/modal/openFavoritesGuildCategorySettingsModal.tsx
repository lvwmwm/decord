// Module ID: 18446
// Function ID: 18447
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6824, 18447, 2118, 2]
// Exports: default

// Module 18446 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6824 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18447, dependencyMap.paths), obj2);
};
