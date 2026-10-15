// Module ID: 17129
// Function ID: 17130
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6150, 17130, 2000, 2]
// Exports: default

// Module 17129 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6150 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17130, dependencyMap.paths), obj2);
};
