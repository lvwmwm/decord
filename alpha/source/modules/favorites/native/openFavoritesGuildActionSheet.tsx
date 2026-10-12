// Module ID: 16573
// Function ID: 16574
// Name: openFavoritesGuildActionSheet
// Dependencies: [5056, 16574, 2000, 2]
// Exports: default

// Module 16573 (openFavoritesGuildActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
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
  obj.openLazy(asyncRequire(16574, dependencyMap.paths), FavoritesGuildActionSheet, obj2);
};
