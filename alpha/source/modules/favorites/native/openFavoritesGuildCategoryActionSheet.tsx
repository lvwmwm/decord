// Module ID: 16031
// Function ID: 16032
// Name: openFavoritesGuildCategoryActionSheet
// Dependencies: [4854, 16032, 1987, 2]
// Exports: default

// Module 16031 (openFavoritesGuildCategoryActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
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
  obj.openLazy(combined(1987)(16032, dependencyMap.paths), combined, obj2);
};
