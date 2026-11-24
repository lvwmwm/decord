// Module ID: 17671
// Function ID: 17672
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6004, 17672, 2119, 2]
// Exports: default

// Module 17671 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6004 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17672, dependencyMap.paths), obj2);
};
