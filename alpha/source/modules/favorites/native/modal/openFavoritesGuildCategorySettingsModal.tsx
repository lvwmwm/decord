// Module ID: 15959
// Function ID: 15960
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5048, 15960, 1981, 2]
// Exports: default

// Module 15959 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5048 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15960, dependencyMap.paths), { categoryId });
};
