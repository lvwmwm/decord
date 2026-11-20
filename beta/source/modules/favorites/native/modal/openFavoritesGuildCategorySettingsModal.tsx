// Module ID: 18835
// Function ID: 18836
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6838, 18836, 2121, 2]
// Exports: default

// Module 18835 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2121 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6838 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18836, dependencyMap.paths), obj2);
};
