// Module ID: 17289
// Function ID: 17290
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6623, 17290, 2002, 2]
// Exports: default

// Module 17289 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6623 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17290, dependencyMap.paths), obj2);
};
