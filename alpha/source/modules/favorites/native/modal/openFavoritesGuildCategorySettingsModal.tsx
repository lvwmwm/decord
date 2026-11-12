// Module ID: 18702
// Function ID: 18703
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6785, 18703, 2118, 2]
// Exports: default

// Module 18702 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18703, dependencyMap.paths), obj2);
};
