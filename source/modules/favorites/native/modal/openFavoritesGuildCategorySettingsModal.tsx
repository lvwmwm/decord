// Module ID: 15547
// Function ID: 15548
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4675, 15548, 2009, 2]
// Exports: default

// Module 15547 (openFavoritesGuildCategorySettingsModal)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import _modDef4675 from "module_4675" /* 4675 */;

const result = set.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = _modDef4675;
  obj = { categoryId };
  obj.pushLazy(asyncRequireImpl(15548, dependencyMap.paths), obj);
};
