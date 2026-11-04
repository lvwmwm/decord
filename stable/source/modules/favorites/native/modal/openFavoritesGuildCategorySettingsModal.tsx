// Module ID: 17575
// Function ID: 17576
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6704, 17576, 2002, 2]
// Exports: default

// Module 17575 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6704 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17576, dependencyMap.paths), obj2);
};
