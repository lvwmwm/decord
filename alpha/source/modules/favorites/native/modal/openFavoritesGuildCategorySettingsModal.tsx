// Module ID: 16461
// Function ID: 16462
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4960, 16462, 1980, 2]
// Exports: default

// Module 16461 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4960 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16462, dependencyMap.paths), { categoryId });
};
