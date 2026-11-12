// Module ID: 20153
// Function ID: 20154
// Name: AccountSwitchingSpinnerModal
// Dependencies: [19, 17, 21, 5243, 575, 18584, 1113, 7354, 1092, 2]

// Module 20153 (AccountSwitchingSpinnerModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import intl2 from "intl" /* 1113 */;
import useAppFrameDefault from "useAppFrame" /* 18584 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

class AccountSwitchingSpinnerModal {
  constructor() {
    const intl = intl2.intl;
    return <View style={closure_5(useAppFrameDefault().hasFrame).switchingSpinnerContainer} accessible accessibilityLabel={intl.string(intl2.t.n8qMH0)}>{null}</View>;
  }
}
const View = react_native.View;
const jsx = Fragment.jsx;
const hasOwnProperty = createStyles.createStyles((arg0) => {
  let prop;
  if (arg0) {
    prop = nativeDefault.colors.BACKGROUND_BASE_LOWER;
  }
  return { switchingSpinnerContainer: { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: prop } };
});
AccountSwitchingSpinnerModal.modalConfig = { animation: ConstantsIOS.ModalAnimation.FADE, closable: false };
const obj = { animation: ConstantsIOS.ModalAnimation.FADE, closable: false };
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitchingSpinnerModal.tsx");

export default AccountSwitchingSpinnerModal;
