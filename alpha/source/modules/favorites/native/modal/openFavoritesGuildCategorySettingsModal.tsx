// Module ID: 18454
// Function ID: 18455
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6882, 18455, 2123, 2]
// Exports: default

// Module 18454 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6882 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18455, dependencyMap.paths), obj2);
};
