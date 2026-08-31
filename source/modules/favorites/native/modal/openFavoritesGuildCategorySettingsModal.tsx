// Module ID: 15664
// Function ID: 15665
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4691, 15665, 2009, 2]
// Exports: default

// Module 15664 (openFavoritesGuildCategorySettingsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4691 from "module_4691" /* 4691 */;

const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = _modDef4691;
  obj = { categoryId };
  obj.pushLazy(asyncRequireImpl(15665, dependencyMap.paths), obj);
};
