// Module ID: 15698
// Function ID: 15699
// Name: openFavoritesGuildCategoryActionSheet
// Dependencies: [4445, 15699, 2009, 2]
// Exports: default

// Module 15698 (openFavoritesGuildCategoryActionSheet)
import set from "set" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;

const result = set.fileFinishedImporting("modules/favorites/native/openFavoritesGuildCategoryActionSheet.tsx");

export default function openFavoritesGuildCategoryActionSheet(categoryId) {
  const combined = "FavoritesGuildCategoryLongPress-" + categoryId;
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = {
    categoryId,
    onClose() {
      closure_1_1(closure_1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2009)(15699, dependencyMap.paths), combined, obj);
};
