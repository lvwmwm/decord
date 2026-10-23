// Module ID: 17501
// Function ID: 17502
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6670, 17502, 2002, 2]
// Exports: default

// Module 17501 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6670 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17502, dependencyMap.paths), obj2);
};
