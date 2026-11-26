// Module ID: 17839
// Function ID: 17840
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6130, 17840, 2120, 2]
// Exports: default

// Module 17839 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2120 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6130 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17840, dependencyMap.paths), obj2);
};
