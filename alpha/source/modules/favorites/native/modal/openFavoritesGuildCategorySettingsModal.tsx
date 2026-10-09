// Module ID: 16455
// Function ID: 16456
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5941, 16456, 2000, 2]
// Exports: default

// Module 16455 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5941 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(16456, dependencyMap.paths), obj2);
};
