// Module ID: 17687
// Function ID: 17688
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6337, 17688, 2121, 2]
// Exports: default

// Module 17687 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6337 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17688, dependencyMap.paths), obj2);
};
