// Module ID: 10221
// Function ID: 78938
// Name: useFavoritesNotificationStore
// Dependencies: [621, 682, 2]

// Module 10221 (useFavoritesNotificationStore)
import keys from "keys";

const obj = keys.create((arg0) => {
  let closure_0 = arg0;
  return {
    favoriteAdded: false,
    notifyFavoriteAdded() {
      return callback(outer1_1[1]).batchUpdates(() => outer1_0({ favoriteAdded: true }));
    },
    clearFavoriteAdded() {
      return callback(outer1_1[1]).batchUpdates(() => outer1_0({ favoriteAdded: false }));
    }
  };
});
const result = require("set").fileFinishedImporting("modules/favorites/FavoritesNotificationStore.tsx");

export const useFavoritesNotificationStore = obj;
