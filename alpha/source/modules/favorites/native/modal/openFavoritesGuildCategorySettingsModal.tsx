// Module ID: 17680
// Function ID: 17681
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6308, 17681, 2121, 2]
// Exports: default

// Module 17680 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17681, dependencyMap.paths), obj2);
};
