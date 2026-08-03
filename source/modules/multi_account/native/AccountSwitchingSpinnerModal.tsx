// Module ID: 16339
// Function ID: 16340
// Name: AccountSwitchingSpinnerModal
// Dependencies: [19, 17, 21, 4255, 1236, 5703, 691, 2]

// Module 16339 (AccountSwitchingSpinnerModal)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
class AccountSwitchingSpinnerModal {
  constructor() {
    obj = { style: jsx().switchingSpinnerContainer, accessible: true, accessibilityLabel: null, children: null };
    intl = require("getSystemLocale").intl;
    obj[2] = intl.string(require("getSystemLocale").t.n8qMH0);
    obj[3] = jsx(require("ActivityIndicator").ActivityIndicator, {});
    return jsx(View, obj);
  }
}
let closure_4 = createCacheKey.createStyles({ switchingSpinnerContainer: { flex: 1, alignItems: "center", justifyContent: "center" } });
createCacheKey = { animation: require("keys").ModalAnimation.FADE, closable: false };
AccountSwitchingSpinnerModal.modalConfig = createCacheKey;
const result = require("jsxProd").fileFinishedImporting("modules/multi_account/native/AccountSwitchingSpinnerModal.tsx");

export default AccountSwitchingSpinnerModal;
