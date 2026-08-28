// Module ID: 15630
// Function ID: 15631
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4689, 15631, 2010, 2]
// Exports: default

// Module 15630 (openFavoritesGuildCategorySettingsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import _modDef4689 from "module_4689" /* 4689 */;

const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = _modDef4689;
  obj = { categoryId };
  obj.pushLazy(asyncRequireImpl(15631, dependencyMap.paths), obj);
};
