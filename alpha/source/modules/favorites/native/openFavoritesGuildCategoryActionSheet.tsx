// Module ID: 17127
// Function ID: 17128
// Name: openFavoritesGuildCategoryActionSheet
// Dependencies: [5115, 17128, 2000, 2]
// Exports: default

// Module 17127 (openFavoritesGuildCategoryActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5115 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/favorites/native/openFavoritesGuildCategoryActionSheet.tsx");

export default function openFavoritesGuildCategoryActionSheet(categoryId) {
  const combined = "FavoritesGuildCategoryLongPress-" + categoryId;
  let obj = ActionSheetActionCreatorsDefault;
  const obj2 = {
    categoryId,
    onClose() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2000)(17128, dependencyMap.paths), combined, obj2);
};
