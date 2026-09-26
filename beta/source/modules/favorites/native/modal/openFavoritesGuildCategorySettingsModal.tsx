// Module ID: 16453
// Function ID: 16454
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4991, 16454, 1980, 2]
// Exports: default

// Module 16453 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4991 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16454, dependencyMap.paths), { categoryId });
};
