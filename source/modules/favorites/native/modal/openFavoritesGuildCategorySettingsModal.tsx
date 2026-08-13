// Module ID: 15309
// Function ID: 15310
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4550, 15310, 2007, 2]
// Exports: default

// Module 15309 (openFavoritesGuildCategorySettingsModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = importDefault(4550);
  obj = { categoryId };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(15310, dependencyMap.paths), obj);
};
