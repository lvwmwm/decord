// Module ID: 16033
// Function ID: 16034
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4731, 16034, 2008, 2]
// Exports: default

// Module 16033 (openFavoritesGuildCategorySettingsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4731 from "module_4731" /* 4731 */;

const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = _modDef4731;
  obj = { categoryId };
  obj.pushLazy(asyncRequireImpl(16034, dependencyMap.paths), obj);
};
