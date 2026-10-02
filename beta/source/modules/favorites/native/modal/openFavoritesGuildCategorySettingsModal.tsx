// Module ID: 15742
// Function ID: 15743
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5040, 15743, 1987, 2]
// Exports: default

// Module 15742 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 1987 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(15743, dependencyMap.paths), obj2);
};
