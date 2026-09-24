// Module ID: 16460
// Function ID: 16461
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4993, 16461, 1984, 2]
// Exports: default

// Module 16460 (openFavoritesGuildCategorySettingsModal)
import asyncRequireImpl from "asyncRequireImpl" /* 1984 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4993 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(16461, dependencyMap.paths), { categoryId });
};
