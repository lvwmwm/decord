// Module ID: 17507
// Function ID: 17508
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6310, 17508, 2119, 2]
// Exports: default

// Module 17507 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6310 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17508, dependencyMap.paths), obj2);
};
