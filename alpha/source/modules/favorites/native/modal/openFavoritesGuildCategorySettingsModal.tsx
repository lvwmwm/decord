// Module ID: 16537
// Function ID: 16538
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5032, 16538, 1980, 2]
// Exports: default

// Module 16537 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16538, dependencyMap.paths), { categoryId });
};
