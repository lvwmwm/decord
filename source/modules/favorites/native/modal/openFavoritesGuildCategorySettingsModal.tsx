// Module ID: 15243
// Function ID: 15244
// Name: openFavoritesGuildCategorySettingsModal
// Dependencies: [4509, 15244, 1988, 2]
// Exports: default

// Module 15243 (openFavoritesGuildCategorySettingsModal)
const result = require("asyncRequireImpl").fileFinishedImporting("modules/favorites/native/modal/openFavoritesGuildCategorySettingsModal.tsx");

export default function openFavoritesGuildCategorySettingsModal(categoryId) {
  let obj = importDefault(4509);
  obj = { categoryId };
  obj.pushLazy(require(1988) /* asyncRequireImpl */(15244, dependencyMap.paths), obj);
};
