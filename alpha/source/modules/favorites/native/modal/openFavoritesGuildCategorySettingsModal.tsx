// Module ID: 17457
// Function ID: 17458
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6657, 17458, 2002, 2]
// Exports: default

// Module 17457 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6657 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17458, dependencyMap.paths), obj2);
};
