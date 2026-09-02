// Module ID: 15931
// Function ID: 15932
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4723, 15932, 2008, 2]
// Exports: default

// Module 15931 (openFavoritesGuildCategorySettingsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4723 from "module_4723" /* 4723 */;

const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = _modDef4723;
  obj = { categoryId };
  obj.pushLazy(asyncRequireImpl(15932, dependencyMap.paths), obj);
};
