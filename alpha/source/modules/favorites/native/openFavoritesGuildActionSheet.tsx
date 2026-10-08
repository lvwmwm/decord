// Module ID: 16361
// Function ID: 16362
// Name: openFavoritesGuildActionSheet
// Dependencies: [5054, 16362, 1999, 2]
// Exports: default

// Module 16361 (openFavoritesGuildActionSheet)
import asyncRequire from "asyncRequire" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildActionSheet.tsx");

export default function openFavoritesGuildActionSheet() {
  let obj = ActionSheetActionCreatorsDefault;
  const obj2 = {
    onClose() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(FavoritesGuildActionSheet);
    }
  };
  obj.openLazy(asyncRequire(16362, dependencyMap.paths), FavoritesGuildActionSheet, obj2);
};
