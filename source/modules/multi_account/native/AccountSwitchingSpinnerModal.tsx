// Module ID: 16108
// Function ID: 124893
// Name: AccountSwitchingSpinnerModal
// Dependencies: [31, 27, 33, 4130, 1212, 5586, 668, 2]

// Module 16108 (AccountSwitchingSpinnerModal)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
class AccountSwitchingSpinnerModal {
  constructor() {
    obj = { style: c4().switchingSpinnerContainer, accessible: true };
    intl = require("getSystemLocale").intl;
    obj.accessibilityLabel = intl.string(require("getSystemLocale").t.n8qMH0);
    obj.children = jsx(require("ActivityIndicator").ActivityIndicator, {});
    return jsx(View, obj);
  }
}
let closure_4 = _createForOfIteratorHelperLoose.createStyles({ switchingSpinnerContainer: { flex: 1, alignItems: "center", justifyContent: "center" } });
_createForOfIteratorHelperLoose = { animation: require("keys").ModalAnimation.FADE, closable: false };
AccountSwitchingSpinnerModal.modalConfig = _createForOfIteratorHelperLoose;
const result = require("jsxProd").fileFinishedImporting("modules/multi_account/native/AccountSwitchingSpinnerModal.tsx");

export default AccountSwitchingSpinnerModal;
