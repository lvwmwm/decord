// Module ID: 16136
// Function ID: 16137
// Name: openFavoritesGuildActionSheet
// Dependencies: [4527, 16137, 1896, 2]
// Exports: default

// Module 16136 (openFavoritesGuildActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4527 */;

const FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = set.fileFinishedImporting("modules/favorites/native/openFavoritesGuildActionSheet.tsx");

export default function openFavoritesGuildActionSheet() {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    onClose() {
      callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(asyncRequireImpl(16137, dependencyMap.paths), FavoritesGuildActionSheet, obj);
};
