// Module ID: 17629
// Function ID: 17630
// Name: openFavoritesGuildCategoryActionSheet
// Dependencies: [5127, 17630, 2119, 2]
// Exports: default

// Module 17629 (openFavoritesGuildCategoryActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
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
  obj.openLazy(combined(2119)(17630, dependencyMap.paths), combined, obj2);
};
