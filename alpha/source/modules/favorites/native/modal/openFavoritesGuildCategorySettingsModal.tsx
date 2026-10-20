// Module ID: 17270
// Function ID: 17271
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6620, 17271, 2002, 2]
// Exports: default

// Module 17270 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6620 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17271, dependencyMap.paths), obj2);
};
