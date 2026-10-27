// Module ID: 17579
// Function ID: 17580
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6673, 17580, 1999, 2]
// Exports: default

// Module 17579 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 1999 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6673 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17580, dependencyMap.paths), obj2);
};
