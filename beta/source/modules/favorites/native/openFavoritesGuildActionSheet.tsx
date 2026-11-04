// Module ID: 18194
// Function ID: 18195
// Name: openFavoritesGuildActionSheet
// Dependencies: [5258, 18195, 1994, 2]
// Exports: default

// Module 18194 (openFavoritesGuildActionSheet)
import asyncRequire from "asyncRequire" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
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
  obj.openLazy(asyncRequire(18195, dependencyMap.paths), FavoritesGuildActionSheet, obj2);
};
