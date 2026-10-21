// Module ID: 17365
// Function ID: 17366
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6651, 17366, 2002, 2]
// Exports: default

// Module 17365 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2002 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6651 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(17366, dependencyMap.paths), obj2);
};
