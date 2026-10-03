// Module ID: 16058
// Function ID: 16059
// Name: openFavoritesGuildActionSheet
// Dependencies: [4854, 16059, 1987, 2]
// Exports: default

// Module 16058 (openFavoritesGuildActionSheet)
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
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
  obj.openLazy(asyncRequire(16059, dependencyMap.paths), FavoritesGuildActionSheet, obj2);
};
