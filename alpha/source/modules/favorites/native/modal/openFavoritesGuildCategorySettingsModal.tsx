// Module ID: 17537
// Function ID: 17538
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6672, 17538, 2002, 2]
// Exports: default

// Module 17537 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17538, dependencyMap.paths), obj2);
};
