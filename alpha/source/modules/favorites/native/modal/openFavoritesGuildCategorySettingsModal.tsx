// Module ID: 16336
// Function ID: 16337
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5940, 16337, 1999, 2]
// Exports: default

// Module 16336 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5940 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(16337, dependencyMap.paths), obj2);
};
