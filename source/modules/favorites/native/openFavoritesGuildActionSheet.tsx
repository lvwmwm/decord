// Module ID: 15655
// Function ID: 15656
// Name: openFavoritesGuildActionSheet
// Dependencies: [4413, 15656, 2010, 2]
// Exports: default

// Module 15655 (openFavoritesGuildActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2010 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4413 */;

const FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = set.fileFinishedImporting("modules/favorites/native/openFavoritesGuildActionSheet.tsx");

export default function openFavoritesGuildActionSheet() {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    onClose() {
      callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(asyncRequireImpl(15656, dependencyMap.paths), FavoritesGuildActionSheet, obj);
};
