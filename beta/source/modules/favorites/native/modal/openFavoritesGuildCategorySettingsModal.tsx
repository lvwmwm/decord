// Module ID: 17241
// Function ID: 17242
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6190, 17242, 2002, 2]
// Exports: default

// Module 17241 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6190 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17242, dependencyMap.paths), obj2);
};
