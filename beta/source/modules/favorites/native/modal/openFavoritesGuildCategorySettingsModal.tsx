// Module ID: 18544
// Function ID: 18545
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6831, 18545, 2118, 2]
// Exports: default

// Module 18544 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18545, dependencyMap.paths), obj2);
};
