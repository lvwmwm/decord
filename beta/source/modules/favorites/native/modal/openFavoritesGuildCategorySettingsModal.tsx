// Module ID: 18542
// Function ID: 18543
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6831, 18543, 2118, 2]
// Exports: default

// Module 18542 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6831 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18543, dependencyMap.paths), obj2);
};
