// Module ID: 17163
// Function ID: 17164
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6152, 17164, 2002, 2]
// Exports: default

// Module 17163 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6152 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17164, dependencyMap.paths), obj2);
};
