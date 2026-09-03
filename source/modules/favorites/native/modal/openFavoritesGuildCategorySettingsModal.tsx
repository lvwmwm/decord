// Module ID: 15947
// Function ID: 15948
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4724, 15948, 2008, 2]
// Exports: default

// Module 15947 (openFavoritesGuildCategorySettingsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import _modDef4724 from "module_4724" /* 4724 */;

const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = _modDef4724;
  obj = { categoryId };
  obj.pushLazy(asyncRequireImpl(15948, dependencyMap.paths), obj);
};
