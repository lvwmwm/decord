// Module ID: 19577
// Function ID: 19578
// Name: AccountSwitchingSpinnerModal
// Dependencies: [19, 17, 21, 4913, 575, 17515, 1112, 7020, 1091, 2]

// Module 19577 (AccountSwitchingSpinnerModal)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1091 */;
import intl2 from "intl" /* 1112 */;
import useAppFrameDefault from "useAppFrame" /* 17515 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
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
