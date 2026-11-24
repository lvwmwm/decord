// Module ID: 17631
// Function ID: 17632
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6429, 17632, 2119, 2]
// Exports: default

// Module 17631 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2119 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17632, dependencyMap.paths), obj2);
};
