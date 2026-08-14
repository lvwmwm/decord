// Module ID: 15321
// Function ID: 15322
// Name: openFavoritesGuildCategoryActionSheet
// Dependencies: [4310, 15322, 2007, 2]
// Exports: default

// Module 15321 (openFavoritesGuildCategoryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/openFavoritesGuildCategoryActionSheet.tsx");

export default function openFavoritesGuildCategoryActionSheet(categoryId) {
  const combined = "FavoritesGuildCategoryLongPress-" + categoryId;
  let obj = importDefault(4310);
  obj = {
    categoryId,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2007)(15322, dependencyMap.paths), combined, obj);
};
