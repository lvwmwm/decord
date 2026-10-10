// Module ID: 10215
// Function ID: 10216
// Name: UnifiedGiftModalRecipientSelectScreen
// Dependencies: [19, 17, 10216, 21, 5092, 587, 558, 576, 1503, 10217, 10183, 2]

// Module 10215 (UnifiedGiftModalRecipientSelectScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import UnifiedGiftModalTypes from "UnifiedGiftModalTypes" /* 10183 */;
import UserRowConstants from "UserRowConstants" /* 10216 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, navigation;

let obj2;
const View = react_native.View;
const UserRowModes = UserRowConstants.UserRowModes;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, paddingTop: 16, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_6 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function UnifiedGiftModalRecipientSelectScreen(setRecipientUser) {
  const obj = setRecipientUser(576);
  const cResult = obj.c(6);
  setRecipientUser = setRecipientUser.setRecipientUser;
  const obj2 = setRecipientUser(1503);
  navigation = obj2.useNavigation();
  const tmp4 = closure_6();
  if (cResult[0] === navigation) {
    let tmp5;
    if (cResult[1] === setRecipientUser) {
      tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.container) {
      let tmp7;
      if (cResult[4] === tmp5) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
    const tmp10 = <View style={tmp4.container}>{tmp5}</View>;
    cResult[3] = tmp4.container;
    cResult[4] = tmp5;
    cResult[5] = tmp10;
    tmp7 = tmp10;
  }
  const tmp6 = jsx(navigation(10217), {
    onSelectUser(arg0) {
      setRecipientUser(arg0);
      navigation.navigate(UnifiedGiftModalTypes.UnifiedGiftModalScreens.GIFT_DETAIL, undefined, { pop: true });
    },
    rowMode: UserRowModes.NONE,
    disableGradient: true,
    disableThemedGradient: true
  });
  cResult[0] = navigation;
  cResult[1] = setRecipientUser;
  cResult[2] = tmp6;
  tmp5 = tmp6;
}) : (function UnifiedGiftModalRecipientSelectScreen(setRecipientUser) {
  setRecipientUser = setRecipientUser.setRecipientUser;
  const obj = setRecipientUser(1503);
  importDefault = obj.useNavigation();
  return <View style={closure_6().container}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/checkout/native/gifting/UnifiedGiftModalRecipientSelectScreen.tsx");

export default tmp3;
