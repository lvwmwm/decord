// Module ID: 15318
// Function ID: 15319
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4550, 15319, 2007, 2]
// Exports: default

// Module 15318 (openFavoritesGuildCategorySettingsModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = importDefault(4550);
  obj = { categoryId };
  obj.pushLazy(require(2007) /* asyncRequireImpl */(15319, dependencyMap.paths), obj);
};
