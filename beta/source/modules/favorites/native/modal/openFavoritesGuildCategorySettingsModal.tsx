// Module ID: 16548
// Function ID: 16549
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5934, 16549, 2000, 2]
// Exports: default

// Module 16548 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(16549, dependencyMap.paths), obj2);
};
