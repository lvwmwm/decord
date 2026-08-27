// Module ID: 15612
// Function ID: 15613
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4676, 15613, 2009, 2]
// Exports: default

// Module 15612 (openFavoritesGuildCategorySettingsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4676 from "module_4676" /* 4676 */;

const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = _modDef4676;
  obj = { categoryId };
  obj.pushLazy(asyncRequireImpl(15613, dependencyMap.paths), obj);
};
