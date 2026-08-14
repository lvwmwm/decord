// Module ID: 15323
// Function ID: 15324
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4572, 15324, 2007, 2]
// Exports: default

// Module 15323 (openFavoritesGuildCategorySettingsModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = importDefault(4572);
  obj = { categoryId };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(15324, dependencyMap.paths), obj);
};
