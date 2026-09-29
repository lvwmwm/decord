// Module ID: 15918
// Function ID: 15919
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5039, 15919, 1981, 2]
// Exports: default

// Module 15918 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1981 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5039 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15919, dependencyMap.paths), { categoryId });
};
