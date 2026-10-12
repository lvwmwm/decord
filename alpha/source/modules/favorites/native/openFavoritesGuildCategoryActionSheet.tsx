// Module ID: 16546
// Function ID: 16547
// Name: openFavoritesGuildCategoryActionSheet
// Dependencies: [5056, 16547, 2000, 2]
// Exports: default

// Module 16546 (openFavoritesGuildCategoryActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
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
  obj.openLazy(combined(2000)(16547, dependencyMap.paths), combined, obj2);
};
