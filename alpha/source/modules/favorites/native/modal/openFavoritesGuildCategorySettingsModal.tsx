// Module ID: 18707
// Function ID: 18708
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [6785, 18708, 2118, 2]
// Exports: default

// Module 18707 (openFavoritesGuildCategorySettingsModal)
import asyncRequire from "asyncRequire" /* 2118 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  const obj = ModalActionCreatorsDefault;
  const obj2 = { categoryId };
  obj.pushLazy(asyncRequire(18708, dependencyMap.paths), obj2);
};
