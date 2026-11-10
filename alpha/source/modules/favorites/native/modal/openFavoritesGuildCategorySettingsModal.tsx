// Module ID: 18535
// Function ID: 18536
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6801, 18536, 2118, 2]
// Exports: default

// Module 18535 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6801 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18536, dependencyMap.paths), obj2);
};
