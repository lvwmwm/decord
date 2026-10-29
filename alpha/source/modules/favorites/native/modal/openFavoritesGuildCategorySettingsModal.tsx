// Module ID: 18052
// Function ID: 18053
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6731, 18053, 2000, 2]
// Exports: default

// Module 18052 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6731 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18053, dependencyMap.paths), obj2);
};
