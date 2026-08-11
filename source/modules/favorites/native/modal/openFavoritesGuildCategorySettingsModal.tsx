// Module ID: 15252
// Function ID: 15253
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4509, 15253, 2007, 2]
// Exports: default

// Module 15252 (openFavoritesGuildCategorySettingsModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = importDefault(4509);
  obj = { categoryId };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(15253, dependencyMap.paths), obj);
};
