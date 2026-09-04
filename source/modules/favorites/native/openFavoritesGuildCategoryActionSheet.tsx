// Module ID: 16031
// Function ID: 16032
// Name: openFavoritesGuildCategoryActionSheet
// Dependencies: [4448, 16032, 2008, 2]
// Exports: default

// Module 16031 (openFavoritesGuildCategoryActionSheet)
import set from "set" /* 2 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4448 */;

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
  obj.openLazy(combined(2008)(16032, dependencyMap.paths), combined, obj);
};
