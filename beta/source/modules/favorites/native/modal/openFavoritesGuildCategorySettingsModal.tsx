// Module ID: 16450
// Function ID: 16451
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4961, 16451, 1984, 2]
// Exports: default

// Module 16450 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4961 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16451, dependencyMap.paths), { categoryId });
};
