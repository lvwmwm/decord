// Module ID: 15743
// Function ID: 15744
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5039, 15744, 1981, 2]
// Exports: default

// Module 15743 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(15744, dependencyMap.paths), obj2);
};
