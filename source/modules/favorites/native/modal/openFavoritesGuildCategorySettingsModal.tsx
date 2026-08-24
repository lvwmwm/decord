// Module ID: 15437
// Function ID: 15438
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5265, 15438, 2008, 2]
// Exports: default

// Module 15437 (openFavoritesGuildCategorySettingsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef5265 from "module_5265" /* 5265 */;

const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = _modDef5265;
  obj = { categoryId };
  obj.pushLazy(asyncRequireImpl(15438, dependencyMap.paths), obj);
};
