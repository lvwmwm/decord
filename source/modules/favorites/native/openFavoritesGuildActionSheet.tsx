// Module ID: 15398
// Function ID: 15399
// Name: openFavoritesGuildActionSheet
// Dependencies: [4342, 15399, 2007, 2]
// Exports: default

// Module 15398 (openFavoritesGuildActionSheet)
const FavoritesGuildActionSheet = "FavoritesGuildActionSheet";
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/openFavoritesGuildActionSheet.tsx");

export default function openFavoritesGuildActionSheet() {
  let obj = importDefault(4342);
  obj = {
    onClose() {
      callback(table[0]).hideActionSheet(closure_3);
    }
  };
  obj.openLazy(require(2007) /* asyncRequireImpl */(15399, dependencyMap.paths), FavoritesGuildActionSheet, obj);
};
