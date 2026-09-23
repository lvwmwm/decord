// Module ID: 16513
// Function ID: 16514
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5030, 16514, 1980, 2]
// Exports: default

// Module 16513 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5030 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16514, dependencyMap.paths), { categoryId });
};
