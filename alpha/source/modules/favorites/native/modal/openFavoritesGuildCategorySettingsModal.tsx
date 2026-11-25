// Module ID: 17782
// Function ID: 17783
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6099, 17783, 2119, 2]
// Exports: default

// Module 17782 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6099 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17783, dependencyMap.paths), obj2);
};
