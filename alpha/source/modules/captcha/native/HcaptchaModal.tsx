// Module ID: 19314
// Function ID: 19315
// Name: HcaptchaModal
// Dependencies: [109, 19, 17, 2063, 1384, 1072, 21, 5009, 504, 1498, 1993, 1626, 1114, 6532, 6017, 6022, 575, 5619, 1376, 19313, 6974, 10748, 2]

// Module 19314 (HcaptchaModal)
import Constants from "Constants" /* 1072 */;
import SharedCaptchaUtils from "SharedCaptchaUtils" /* 6532 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2063 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
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
    let obj2 = onMessage(1498);
    navigation = obj2.useNavigation();
    const routes = navigation.getState().routes;
    let tmp6 = routes.length > 0 && "auth" === routes[0].name;
    if (!tmp6) {
      let prop;
      if (stateFromStores != null) {
        prop = stateFromStores.ageVerificationStatus;
      }
      tmp6 = prop === tmp3(1993).AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
    }
    const rect = onPress(1626)();
    const intl = tmp3(1114).intl;
    const items1 = [onMessage];
    const stringResult = intl.string(onMessage(1114).t.wsoPhr);
    onPress = react.useCallback(() => {
      let obj2;
      if (onMessage != null) {
        const obj = { nativeEvent: obj2 };
        obj2 = { data: SharedCaptchaUtils.CaptchaError.CANCEL };
        tmp(obj);
      }
    }, items1);
    onPress(6017)(() => {
      callback();
      return true;
    });
    let tmp13Result = !tmp6;
    const obj3 = { style: tmp2.container, children: items3 };
    if (tmp13Result) {
      const obj4 = { spacing: onPress(575).space.PX_16, align: "center", children: items2 };
      const Stack = tmp3(6022).Stack;
      const obj5 = { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary", style: tmp2.title, children: stringResult };
      items2 = [closure_11(tmp3(5619).Text, obj5), ];
      let WHITE;
      const tmp16 = closure_11;
      const tmp17 = closure_6;
      const tmp3Result = onMessage(1376);
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
    tmp9Result = onPress(19313);
    const merged = Object.assign(tmp);
    items3[1] = closure_11(closure_7, obj7);
    const obj9 = { style: items4, pointerEvents: "box-none", children: closure_11(PressableOpacity, obj11) };
    items4 = [tmp2.closeButtonContainer, { paddingTop: rect.top + onPress(575).space.PX_8, paddingLeft: rect.left + onPress(575).space.PX_16 }];
    obj11 = { accessibilityRole: "button", accessibilityLabel: intl2.string(onMessage(1114).t.cpT0Cq), onPress, style: tmp2.closeButtonHitArea, children: closure_11(XLargeIcon, obj12) };
    ({ paddingTop: rect.top + onPress(575).space.PX_8, paddingLeft: rect.left + onPress(575).space.PX_16 });
    PressableOpacity = tmp3(6974).PressableOpacity;
    intl2 = tmp3(1114).intl;
    obj12 = { color: onPress(575).colors.INTERACTIVE_ICON_DEFAULT };
    XLargeIcon = tmp3(10748).XLargeIcon;
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
