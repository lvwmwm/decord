// Module ID: 15241
// Function ID: 15242
// Name: openFavoritesGuildCategoryActionSheet
// Dependencies: [4271, 15242, 1988, 2]
// Exports: default

// Module 15241 (openFavoritesGuildCategoryActionSheet)
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
  obj.openLazy(combined(1988)(15242, dependencyMap.paths), combined, obj);
};
