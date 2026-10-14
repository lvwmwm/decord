// Module ID: 16890
// Function ID: 16891
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5939, 16891, 2000, 2]
// Exports: default

// Module 16890 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2000 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5939 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(16891, dependencyMap.paths), obj2);
};
