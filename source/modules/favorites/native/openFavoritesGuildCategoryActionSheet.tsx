// Module ID: 15250
// Function ID: 15251
// Name: openFavoritesGuildCategoryActionSheet
// Dependencies: [4271, 15251, 2007, 2]
// Exports: default

// Module 15250 (openFavoritesGuildCategoryActionSheet)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/openFavoritesGuildCategoryActionSheet.tsx");

export default function openFavoritesGuildCategoryActionSheet(categoryId) {
  const combined = "FavoritesGuildCategoryLongPress-" + categoryId;
  let obj = importDefault(4271);
  obj = {
    categoryId,
    onClose() {
      outer1_1(outer1_2[0]).hideActionSheet(combined);
    }
  };
  obj.openLazy(combined(2007)(15251, dependencyMap.paths), combined, obj);
};
