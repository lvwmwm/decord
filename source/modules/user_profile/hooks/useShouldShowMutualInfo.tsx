// Module ID: 12091
// Function ID: 12092
// Name: useShouldShowMutualInfo
// Dependencies: [1922, 589, 12092, 2]
// Exports: default

// Module 12091 (useShouldShowMutualInfo)
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
  const tmp2 = importDefault(12092)(id);
  return id !== id.id && !importDefault(12092)(id);
};
