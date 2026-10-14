// Module ID: 16037
// Function ID: 16038
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5093, 16038, 1987, 2]
// Exports: default

// Module 16037 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(16038, dependencyMap.paths), obj2);
};
