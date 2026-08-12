// Module ID: 15307
// Function ID: 15308
// Name: openFavoritesGuildCategoryActionSheet
// Dependencies: [4312, 15308, 2007, 2]
// Exports: default

// Module 15307 (openFavoritesGuildCategoryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/openFavoritesGuildCategoryActionSheet.tsx");

export default function openFavoritesGuildCategoryActionSheet(categoryId) {
  const combined = "FavoritesGuildCategoryLongPress-" + categoryId;
  let obj = importDefault(4312);
  obj = {
    categoryId,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2007)(15308, dependencyMap.paths), combined, obj);
};
