// Module ID: 18113
// Function ID: 18114
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6738, 18114, 1995, 2]
// Exports: default

// Module 18113 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 1995 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6738 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18114, dependencyMap.paths), obj2);
};
