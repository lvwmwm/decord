// Module ID: 18156
// Function ID: 18157
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6744, 18157, 1994, 2]
// Exports: default

// Module 18156 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 1994 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18157, dependencyMap.paths), obj2);
};
