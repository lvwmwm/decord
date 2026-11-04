// Module ID: 18449
// Function ID: 18450
// Name: openFavoritesGuildActionSheet
// Dependencies: [5382, 18450, 2123, 2]
// Exports: default

// Module 18449 (openFavoritesGuildActionSheet)
import asyncRequire from "asyncRequire" /* 2123 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5382 */;
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
  obj.openLazy(asyncRequire(18450, dependencyMap.paths), FavoritesGuildActionSheet, obj2);
};
