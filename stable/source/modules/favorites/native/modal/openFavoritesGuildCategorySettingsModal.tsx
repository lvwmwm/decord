// Module ID: 16553
// Function ID: 16554
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5934, 16554, 2000, 2]
// Exports: default

// Module 16553 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(16554, dependencyMap.paths), obj2);
};
