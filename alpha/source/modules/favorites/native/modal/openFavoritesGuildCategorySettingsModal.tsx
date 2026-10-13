// Module ID: 16853
// Function ID: 16854
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5934, 16854, 2000, 2]
// Exports: default

// Module 16853 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(16854, dependencyMap.paths), obj2);
};
