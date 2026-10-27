// Module ID: 17239
// Function ID: 17240
// Name: openFavoritesGuildCategoryActionSheet
// Dependencies: [5155, 17240, 2002, 2]
// Exports: default

// Module 17239 (openFavoritesGuildCategoryActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5155 */;
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
  obj.openLazy(combined(2002)(17240, dependencyMap.paths), combined, obj2);
};
