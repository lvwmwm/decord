// Module ID: 17347
// Function ID: 17348
// Name: AccountSwitchingSpinnerModal
// Dependencies: [19, 17, 21, 4481, 1233, 5532, 688, 2]

// Module 17347 (AccountSwitchingSpinnerModal)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import ActivityIndicator from "ActivityIndicator" /* 5532 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

require = arg1;
class AccountSwitchingSpinnerModal {
  constructor() {
    obj = { style: closure_4().switchingSpinnerContainer, accessible: true, accessibilityLabel: null, children: null };
    intl = require("getSystemLocale").intl;
    obj[2] = intl.string(require("getSystemLocale").t.n8qMH0);
    obj[3] = jsx(require("ActivityIndicator").ActivityIndicator, {});
    return jsx(View, obj);
  }
}
noopAll;
let closure_4 = createCacheKey.createStyles({ switchingSpinnerContainer: { flex: 1, alignItems: "center", justifyContent: "center" } });
createCacheKey = { animation: require("keys").ModalAnimation.FADE, closable: false };
AccountSwitchingSpinnerModal.modalConfig = createCacheKey;
const result = require("set").fileFinishedImporting("modules/multi_account/native/AccountSwitchingSpinnerModal.tsx");

export default AccountSwitchingSpinnerModal;
