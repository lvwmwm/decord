// Module ID: 19694
// Function ID: 19695
// Name: AccountSwitchingSpinnerModal
// Dependencies: [19, 17, 21, 5141, 1113, 7080, 1092, 2]

// Module 19694 (AccountSwitchingSpinnerModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import intl2 from "intl" /* 1113 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
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
