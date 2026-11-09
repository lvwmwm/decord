// Module ID: 18529
// Function ID: 18530
// Name: openFavoritesGuildActionSheet
// Dependencies: [5374, 18530, 2118, 2]
// Exports: default

// Module 18529 (openFavoritesGuildActionSheet)
import asyncRequire from "asyncRequire" /* 2118 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5374 */;
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
  obj.openLazy(asyncRequire(18530, dependencyMap.paths), FavoritesGuildActionSheet, obj2);
};
