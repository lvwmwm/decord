// Module ID: 17177
// Function ID: 17178
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6153, 17178, 2002, 2]
// Exports: default

// Module 17177 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6153 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17178, dependencyMap.paths), obj2);
};
