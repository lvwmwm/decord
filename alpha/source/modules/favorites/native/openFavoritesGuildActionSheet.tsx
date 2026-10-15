// Module ID: 17154
// Function ID: 17155
// Name: openFavoritesGuildActionSheet
// Dependencies: [5115, 17155, 2000, 2]
// Exports: default

// Module 17154 (openFavoritesGuildActionSheet)
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
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
  obj.openLazy(asyncRequire(17155, dependencyMap.paths), FavoritesGuildActionSheet, obj2);
};
