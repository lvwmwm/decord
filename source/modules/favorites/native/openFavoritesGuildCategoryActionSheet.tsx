// Module ID: 15371
// Function ID: 15372
// Name: openFavoritesGuildCategoryActionSheet
// Dependencies: [4342, 15372, 2007, 2]
// Exports: default

// Module 15371 (openFavoritesGuildCategoryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/openFavoritesGuildCategoryActionSheet.tsx");

export default function openFavoritesGuildCategoryActionSheet(categoryId) {
  const combined = "FavoritesGuildCategoryLongPress-" + categoryId;
  let obj = importDefault(4342);
  obj = {
    categoryId,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2007)(15372, dependencyMap.paths), combined, obj);
};
