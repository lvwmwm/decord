// Module ID: 11961
// Function ID: 92404
// Name: useShouldShowMutualInfo
// Dependencies: [1850, 566, 11962, 2]
// Exports: default

// Module 11961 (useShouldShowMutualInfo)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
const result = require("useIsUserProfileObfuscated").fileFinishedImporting("modules/user_profile/hooks/useShouldShowMutualInfo.tsx");

export default function useShouldShowMutualInfo(id) {
  id = undefined;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(566) /* initialize */.useStateFromStores(items, () => outer1_3.getCurrentUser());
  const obj = require(566) /* initialize */;
  if (null != stateFromStores) {
    id = stateFromStores.id;
  }
  const tmp3 = importDefault(11962)(id);
  return id !== id.id && !importDefault(11962)(id);
};
