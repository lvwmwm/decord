// Module ID: 10330
// Function ID: 79768
// Name: useFavoritesNotificationStore
// Dependencies: []

// Module 10330 (useFavoritesNotificationStore)
const _module = require(dependencyMap[0]);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/favorites/FavoritesNotificationStore.tsx");

export const useFavoritesNotificationStore = _module.create((arg0) => {
  const require = arg0;
  return {
    favoriteAdded: false,
    notifyFavoriteAdded() {
      return arg0(closure_1[1]).batchUpdates(() => callback({ favoriteAdded: true }));
    },
    clearFavoriteAdded() {
      return arg0(closure_1[1]).batchUpdates(() => callback({ favoriteAdded: false }));
    }
  };
});
