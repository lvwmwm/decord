// Module ID: 17196
// Function ID: 17197
// Name: AccountSwitchingSpinnerModal
// Dependencies: [19, 17, 21, 4836, 1115, 5889, 1094, 2]

// Module 17196 (AccountSwitchingSpinnerModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import intl2 from "intl" /* 1115 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

class AccountSwitchingSpinnerModal {
  constructor() {
    const intl = intl2.intl;
    return <View style={closure_4().switchingSpinnerContainer} accessible accessibilityLabel={intl.string(intl2.t.n8qMH0)}>{null}</View>;
  }
}
const View = react_native.View;
const jsx = Fragment.jsx;
const React3 = createStyles.createStyles({ switchingSpinnerContainer: { flex: 1, alignItems: "center", justifyContent: "center" } });
AccountSwitchingSpinnerModal.modalConfig = { animation: ConstantsIOS.ModalAnimation.FADE, closable: false };
const obj = { animation: ConstantsIOS.ModalAnimation.FADE, closable: false };
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitchingSpinnerModal.tsx");

export default AccountSwitchingSpinnerModal;
