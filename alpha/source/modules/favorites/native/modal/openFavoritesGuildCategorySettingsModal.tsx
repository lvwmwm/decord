// Module ID: 16076
// Function ID: 16077
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5099, 16077, 1987, 2]
// Exports: default

// Module 16076 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(16077, dependencyMap.paths), obj2);
};
