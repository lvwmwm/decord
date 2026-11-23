// Module ID: 17633
// Function ID: 17634
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6429, 17634, 2119, 2]
// Exports: default

// Module 17633 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17634, dependencyMap.paths), obj2);
};
