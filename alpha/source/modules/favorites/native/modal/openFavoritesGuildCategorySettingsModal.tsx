// Module ID: 18313
// Function ID: 18314
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6864, 18314, 2123, 2]
// Exports: default

// Module 18313 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6864 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18314, dependencyMap.paths), obj2);
};
