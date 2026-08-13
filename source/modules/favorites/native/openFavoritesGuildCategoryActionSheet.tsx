// Module ID: 15316
// Function ID: 15317
// Name: openFavoritesGuildCategoryActionSheet
// Dependencies: [4310, 15317, 2007, 2]
// Exports: default

// Module 15316 (openFavoritesGuildCategoryActionSheet)
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
  obj.openLazy(combined(2007)(15317, dependencyMap.paths), combined, obj);
};
