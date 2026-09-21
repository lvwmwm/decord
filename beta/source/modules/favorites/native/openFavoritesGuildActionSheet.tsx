// Module ID: 16475
// Function ID: 16476
// Name: openFavoritesGuildActionSheet
// Dependencies: [4723, 16476, 1980, 2]
// Exports: default

// Module 16475 (openFavoritesGuildActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1980 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4723 */;
import size from "module_2" /* 2 */;

const FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildActionSheet.tsx");

export default function openFavoritesGuildActionSheet() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16476, dependencyMap.paths), FavoritesGuildActionSheet, {
    onClose() {
      ActionSheetActionCreatorsDefault.hideActionSheet(FavoritesGuildActionSheet);
    }
  });
};
