// Module ID: 18541
// Function ID: 18542
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6831, 18542, 2118, 2]
// Exports: default

// Module 18541 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18542, dependencyMap.paths), obj2);
};
