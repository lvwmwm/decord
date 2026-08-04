// Module ID: 12179
// Function ID: 12180
// Name: useShouldShowMutualInfo
// Dependencies: [1874, 589, 12180, 2]
// Exports: default

// Module 12179 (useShouldShowMutualInfo)
import mergeGuildAvatar from "mergeGuildAvatar";

const require = arg1;
const result = require("useIsUserProfileObfuscated").fileFinishedImporting("modules/user_profile/hooks/useShouldShowMutualInfo.tsx");

export default function useShouldShowMutualInfo(id) {
  const items = [mergeGuildAvatar];
  const stateFromStores = require(589) /* initialize */.useStateFromStores(items, () => currentUser.getCurrentUser());
  id = undefined;
  const obj = require(589) /* initialize */;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const tmp2 = importDefault(12180)(id);
  return id !== id.id && !importDefault(12180)(id);
};
