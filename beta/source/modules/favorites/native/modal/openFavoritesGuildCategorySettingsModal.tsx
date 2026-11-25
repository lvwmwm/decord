// Module ID: 17641
// Function ID: 17642
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6429, 17642, 2119, 2]
// Exports: default

// Module 17641 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17642, dependencyMap.paths), obj2);
};
