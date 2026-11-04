// Module ID: 18424
// Function ID: 18425
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6879, 18425, 2123, 2]
// Exports: default

// Module 18424 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2123 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6879 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18425, dependencyMap.paths), obj2);
};
