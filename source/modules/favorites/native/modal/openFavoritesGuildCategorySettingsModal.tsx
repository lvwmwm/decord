// Module ID: 16111
// Function ID: 16112
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4763, 16112, 1896, 2]
// Exports: default

// Module 16111 (openFavoritesGuildCategorySettingsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import _modDef4763 from "module_4763" /* 4763 */;

const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = _modDef4763;
  obj = { categoryId };
  obj.pushLazy(asyncRequireImpl(16112, dependencyMap.paths), obj);
};
