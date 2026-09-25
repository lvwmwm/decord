// Module ID: 15717
// Function ID: 15718
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5032, 15718, 1980, 2]
// Exports: default

// Module 15717 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5032 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(15718, dependencyMap.paths), { categoryId });
};
