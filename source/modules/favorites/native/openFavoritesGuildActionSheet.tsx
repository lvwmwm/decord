// Module ID: 15725
// Function ID: 15726
// Name: openFavoritesGuildActionSheet
// Dependencies: [4445, 15726, 2009, 2]
// Exports: default

// Module 15725 (openFavoritesGuildActionSheet)
import set from "set" /* 2 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = set.fileFinishedImporting("modules/favorites/native/openFavoritesGuildActionSheet.tsx");

export default function openFavoritesGuildActionSheet() {
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    onClose() {
      callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(asyncRequireImpl(15726, dependencyMap.paths), FavoritesGuildActionSheet, obj);
};
