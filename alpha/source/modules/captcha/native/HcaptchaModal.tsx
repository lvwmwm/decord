// Module ID: 19371
// Function ID: 19372
// Name: HcaptchaModal
// Dependencies: [109, 19, 17, 2062, 1383, 1072, 21, 5014, 504, 1497, 1992, 1625, 1113, 6538, 6022, 6027, 575, 5624, 1375, 19370, 6980, 10768, 2]

// Module 19371 (HcaptchaModal)
import Constants from "Constants" /* 1072 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 6538 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import UserStore from "UserStore" /* 1383 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_12;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let unpackModuleId;
class HcaptchaModal {
  constructor(onMessage) {
    let PressableOpacity;
    let XLargeIcon;
    let currentUser;
    let intl2;
    let items2;
    let items3;
    let items4;
    let obj11;
    let obj12;
    let obj8;
    let onPress;
    let tmp9Result;
    onMessage = onMessage.onMessage;
    const tmp = _objectWithoutProperties(onMessage, closure_3);
    const tmp2 = closure_13();
    let obj = onMessage(504);
    const items = [UserStore];
    const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    let obj2 = onMessage(1497);
    navigation = obj2.useNavigation();
    const routes = navigation.getState().routes;
    let tmp6 = routes.length > 0 && "auth" === routes[0].name;
    if (!tmp6) {
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.ageVerificationStatus;
      }
      tmp6 = prop === tmp3(1992).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
    }
    const rect = onPress(1625)();
    const intl = tmp3(1113).intl;
    const items1 = [onMessage];
    const stringResult = intl.string(onMessage(1113).t.wsoPhr);
    onPress = react.useCallback(() => {
      let obj2;
      if (onMessage != null) {
        const obj = { nativeEvent: obj2 };
        obj2 = { data: SharedCaptchaUtils.CaptchaError.CANCEL };
        tmp(obj);
      }
    }, items1);
    onPress(6022)(() => {
      callback();
      return true;
    });
    let tmp13Result = !tmp6;
    const obj3 = { style: tmp2.container, children: items3 };
    if (tmp13Result) {
      const obj4 = { spacing: onPress(575).space.PX_16, align: "center", children: items2 };
      const Stack = tmp3(6027).Stack;
      const obj5 = { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp2.title, children: stringResult };
      items2 = [closure_11(tmp3(5624).Text, obj5), ];
      let WHITE;
      const tmp16 = closure_11;
      const tmp17 = closure_6;
      const tmp3Result = onMessage(1375);
      if (tmp3Result.isAndroid()) {
        WHITE = tmp9(575).unsafe_rawColors.WHITE;
      }
      const obj6 = { size: "small", color: WHITE };
      items2[1] = tmp16(tmp17, obj6);
      tmp13Result = tmp13(Stack, obj4);
    }
    items3 = [tmp13Result, , ];
    const obj7 = { style: absoluteFillObject.absoluteFillObject, children: closure_11(tmp9Result, obj8) };
    obj8 = { languageCode: LocaleStore.locale, onMessage };
    tmp9Result = onPress(19370);
    const merged = Object.assign(tmp);
    items3[1] = closure_11(closure_7, obj7);
    const obj9 = { style: items4, pointerEvents: "box-none", children: closure_11(PressableOpacity, obj11) };
    items4 = [tmp2.closeButtonContainer, { paddingTop: rect.top + onPress(575).space.PX_8, paddingLeft: rect.left + onPress(575).space.PX_16 }];
    obj11 = { accessibilityRole: "button", accessibilityLabel: intl2.string(onMessage(1113).t.cpT0Cq), onPress, style: tmp2.closeButtonHitArea, children: closure_11(XLargeIcon, obj12) };
    ({ paddingTop: rect.top + onPress(575).space.PX_8, paddingLeft: rect.left + onPress(575).space.PX_16 });
    PressableOpacity = tmp3(6980).PressableOpacity;
    intl2 = tmp3(1113).intl;
    obj12 = { color: onPress(575).colors.INTERACTIVE_ICON_DEFAULT };
    XLargeIcon = tmp3(10768).XLargeIcon;
    items3[2] = closure_11(closure_7, obj9);
    return closure_12(closure_7, obj3);
  }
}
let closure_3 = ["onMessage", "onClose"];
({ ActivityIndicator: metroRequire, View: metroImportDefault, StyleSheet: metroImportAll } = react_native);
const ModalAnimation = Constants.ModalAnimation;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" }, title: { textAlign: "center" }, closeButtonContainer: { position: "absolute", top: 0, left: 0, zIndex: 2 }, closeButtonHitArea: { minWidth: 44, minHeight: 44, justifyContent: "center", alignItems: "center" } });
HcaptchaModal.modalConfig = { animation: ModalAnimation.FADE };
const result = size.fileFinishedImporting("modules/captcha/native/HcaptchaModal.tsx");

export default HcaptchaModal;
