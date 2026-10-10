// Module ID: 16525
// Function ID: 16526
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5934, 16526, 2000, 2]
// Exports: default

// Module 16525 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(16526, dependencyMap.paths), obj2);
};
