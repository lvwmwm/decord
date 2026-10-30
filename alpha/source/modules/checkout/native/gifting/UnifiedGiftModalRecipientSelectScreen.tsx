// Module ID: 10706
// Function ID: 10707
// Name: UnifiedGiftModalRecipientSelectScreen
// Dependencies: [19, 17, 10707, 21, 5009, 575, 1498, 10708, 10674, 2]
// Exports: default

// Module 10706 (UnifiedGiftModalRecipientSelectScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes" /* 10674 */;
import UserRowConstants from "UserRowConstants" /* 10707 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let importDefault;

let obj2;
const View = react_native.View;
const UserRowModes = UserRowConstants.UserRowModes;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx");

export default function UnifiedGiftModalRecipientSelectScreen(setRecipientUser) {
  setRecipientUser = setRecipientUser.setRecipientUser;
  const obj = setRecipientUser(1498);
  importDefault = obj.useNavigation();
  return <View style={closure_6().container}>{null}</View>;
};
