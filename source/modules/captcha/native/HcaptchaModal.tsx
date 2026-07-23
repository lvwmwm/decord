// Module ID: 15966
// Function ID: 123319
// Name: HcaptchaModal
// Dependencies: [29, 31, 27, 1921, 1849, 653, 33, 4130, 566, 1456, 1881, 1557, 1212, 9446, 4540, 4541, 689, 4126, 477, 15965, 4660, 4084, 2]

// Module 15966 (HcaptchaModal)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_6;
let closure_7;
let closure_8;
const require = arg1;
class HcaptchaModal {
  constructor(arg0) {
    onMessage = global.onMessage;
    tmp = _objectWithoutProperties(global, closure_3);
    tmp2 = c13();
    obj = require("initialize");
    items = [];
    items[0] = c10;
    stateFromStores = obj.useStateFromStores(items, () => outer1_10.getCurrentUser());
    obj2 = require("useNavigation");
    navigation = obj2.useNavigation();
    routes = navigation.getState().routes;
    tmp4 = routes.length > 0;
    if (tmp4) {
      str = "auth";
      tmp4 = "auth" === routes[0].name;
    }
    if (!tmp4) {
      tmp5 = null;
      prop = undefined;
      if (null != stateFromStores) {
        prop = stateFromStores.ageVerificationStatus;
      }
      tmp7 = onMessage;
      tmp8 = closure_2;
      num = 10;
      tmp4 = prop === require("PermissionOverwriteType").AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
    }
    tmp9 = require("useSafeAreaInsets")();
    intl = require("getSystemLocale").intl;
    items1 = [];
    items1[0] = onMessage;
    stringResult = intl.string(require("getSystemLocale").t.wsoPhr);
    callback = result.useCallback(() => {
      if (null != onMessage) {
        let obj = {};
        obj = { data: onMessage(outer1_2[13]).CaptchaError.CANCEL };
        obj.nativeEvent = obj;
        onMessage(obj);
      }
    }, items1);
    closure_1 = callback;
    tmp12 = require("useBackPressHandler")(() => {
      callback();
      return true;
    });
    obj = { style: tmp2.container };
    tmp16Result = !tmp4;
    tmp13 = jsxs;
    tmp14 = View;
    if (!tmp4) {
      tmp17 = onMessage;
      tmp18 = closure_2;
      num2 = 15;
      tmp16 = jsxs;
      obj1 = {};
      tmp19 = closure_1;
      num3 = 16;
      obj1.spacing = require("_createForOfIteratorHelperLoose").space.PX_16;
      str2 = "center";
      obj1.align = "center";
      tmp20 = jsx;
      num4 = 17;
      obj2 = { accessibilityRole: "header", variant: "heading-lg/bold", color: "mobile-text-heading-primary" };
      obj2.style = tmp2.title;
      obj2.children = stringResult;
      items2 = [, ];
      items2[0] = jsx(require("Text").Text, obj2);
      obj3 = {};
      str3 = "small";
      obj3.size = "small";
      num5 = 18;
      tmp21 = jsx;
      tmp22 = ActivityIndicator;
      obj8 = require("set");
      WHITE = undefined;
      if (obj8.isAndroid()) {
        tmp24 = closure_1;
        tmp25 = closure_2;
        WHITE = require("_createForOfIteratorHelperLoose").unsafe_rawColors.WHITE;
      }
      obj3.color = WHITE;
      items2[1] = tmp21(tmp22, obj3);
      obj1.children = items2;
      tmp16Result = tmp16(require("Stack").Stack, obj1);
    }
    items3 = [, , ];
    items3[0] = tmp16Result;
    obj4 = { style: StyleSheet.absoluteFillObject };
    obj5 = {};
    tmp26 = require("Hcaptcha");
    merged = Object.assign(tmp);
    obj5["languageCode"] = c9.locale;
    obj5["onMessage"] = onMessage;
    obj4.children = jsx(tmp26, obj5);
    items3[1] = jsx(View, obj4);
    obj6 = {};
    items4 = [, ];
    items4[0] = tmp2.closeButtonContainer;
    obj7 = { paddingTop: top + require("_createForOfIteratorHelperLoose").space.PX_8, paddingLeft: left + require("_createForOfIteratorHelperLoose").space.PX_16 };
    ({ top, left } = tmp9);
    items4[1] = obj7;
    obj6.style = items4;
    obj6.pointerEvents = "box-none";
    obj8 = { accessibilityRole: "button" };
    intl2 = require("getSystemLocale").intl;
    obj8.accessibilityLabel = intl2.string(require("getSystemLocale").t.cpT0Cq);
    obj8.onPress = callback;
    obj8.style = tmp2.closeButtonHitArea;
    obj9 = {};
    obj9.color = require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_ICON_DEFAULT;
    obj8.children = jsx(require("XLargeIcon").XLargeIcon, obj9);
    obj6.children = jsx(require("PressableBase").PressableOpacity, obj8);
    items3[2] = jsx(View, obj6);
    obj.children = items3;
    return tmp13(tmp14, obj);
  }
}
let closure_3 = ["onMessage", "onClose"];
({ ActivityIndicator: closure_6, View: closure_7, StyleSheet: closure_8 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let closure_13 = _createForOfIteratorHelperLoose.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" }, title: { textAlign: "center" }, closeButtonContainer: { position: "absolute", top: 0, left: 0, zIndex: 2 }, closeButtonHitArea: { minWidth: 44, minHeight: 44, justifyContent: "center", alignItems: "center" } });
HcaptchaModal.modalConfig = { animation: require("ME").ModalAnimation.FADE };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/captcha/native/HcaptchaModal.tsx");

export default HcaptchaModal;
