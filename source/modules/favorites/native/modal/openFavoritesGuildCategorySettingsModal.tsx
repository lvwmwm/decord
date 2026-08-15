// Module ID: 15373
// Function ID: 15374
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [5260, 15374, 2007, 2]
// Exports: default

// Module 15373 (openFavoritesGuildCategorySettingsModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = importDefault(5260);
  obj = { categoryId };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(15374, dependencyMap.paths), obj);
};
