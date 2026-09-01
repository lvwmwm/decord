// Module ID: 15700
// Function ID: 15701
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4723, 15701, 2009, 2]
// Exports: default

// Module 15700 (openFavoritesGuildCategorySettingsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4723 from "module_4723" /* 4723 */;

const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = _modDef4723;
  obj = { categoryId };
  obj.pushLazy(asyncRequireImpl(15701, dependencyMap.paths), obj);
};
