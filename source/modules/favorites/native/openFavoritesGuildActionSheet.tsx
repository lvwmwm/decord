// Module ID: 15349
// Function ID: 15350
// Name: openFavoritesGuildActionSheet
// Dependencies: [4310, 15350, 2007, 2]
// Exports: default

// Module 15349 (openFavoritesGuildActionSheet)
const FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/openFavoritesGuildActionSheet.tsx");

export default function openFavoritesGuildActionSheet() {
  let obj = importDefault(4310);
  obj = {
    onClose() {
      callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(require(2007) /* asyncRequireImpl */(15350, dependencyMap.paths), FavoritesGuildActionSheet, obj);
};
