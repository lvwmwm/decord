// Module ID: 18831
// Function ID: 18832
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6848, 18832, 2121, 2]
// Exports: default

// Module 18831 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6848 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18832, dependencyMap.paths), obj2);
};
