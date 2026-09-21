// Module ID: 16450
// Function ID: 16451
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4959, 16451, 1980, 2]
// Exports: default

// Module 16450 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4959 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16451, dependencyMap.paths), { categoryId });
};
