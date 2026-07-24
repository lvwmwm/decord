// Module ID: 11759
// Function ID: 91292
// Name: AddPhoneScreen
// Dependencies: [5, 57, 31, 27, 1849, 11733, 33, 4130, 5084, 689, 1456, 4126, 1212, 9274, 9275, 11732, 624, 5582, 44, 9298, 9269, 2]
// Exports: AddPhoneScreen, VerifyPasswordScreen, VerifyPhoneScreen

// Module 11759 (AddPhoneScreen)
import initialValues from "initialValues";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { useContactSyncModalStore } from "initialValues";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.redesignContainer = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
_createForOfIteratorHelperLoose.header = { alignItems: "center" };
_createForOfIteratorHelperLoose.title = { textAlign: "center" };
_createForOfIteratorHelperLoose.subtitle = { marginTop: 8, lineHeight: 18, textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, paddingTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT + 32 };
let result = require("result").fileFinishedImporting("modules/contact_sync/native/components/AddPhoneScreens.tsx");

export const AddPhoneScreen = function AddPhoneScreen() {
  let obj = _require(1456);
  _require = obj.useNavigation();
  const tmp = _createForOfIteratorHelperLoose();
  obj = { style: tmp.header };
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = _require(1212).intl;
  obj.children = intl.string(_require(1212).t.Xgb497);
  const items = [callback2(_require(4126).Text, obj), ];
  const obj1 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default" };
  const intl2 = _require(1212).intl;
  obj1.children = intl2.string(_require(1212).t.qFmzyo);
  items[1] = callback2(_require(4126).Text, obj1);
  obj.children = items;
  const obj2 = { style: tmp.container };
  const tmp2 = callback3(View, obj);
  obj2.reason = _require(9275).ChangePhoneReason.CONTACT_SYNC;
  obj2.header = tmp2;
  obj2.onComplete = function onComplete(arg0) {
    return callback(outer1_2[15]).submitPhone(arg0, callback);
  };
  return callback2(importDefault(9274), obj2);
};
export const VerifyPhoneScreen = function VerifyPhoneScreen() {
  let require;
  let tmp3;
  function _handleCodeEntered(result, arg1) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = stateFromStores(tmp);
    return obj(...arguments);
  }
  const tmp = _createForOfIteratorHelperLoose();
  [tmp3, require] = _handleCodeEntered(React.useState(false), 2);
  const tmp4 = _handleCodeEntered(React.useState(), 2);
  const importDefault = tmp4[1];
  let phone = useContactSyncModalStore().phone;
  let obj = require(navigation[10]);
  navigation = obj.useNavigation();
  const tmp2 = _handleCodeEntered(React.useState(false), 2);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = require(navigation[16]).useStateFromStores(items, () => {
    const currentUser = outer1_7.getCurrentUser();
    let phone;
    if (null != currentUser) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const items1 = [navigation, phone, stateFromStores];
  const effect = React.useEffect(() => {
    let c0 = null;
    if (null != stateFromStores) {
      const result = outer1_0(navigation[15]).handlePhoneVerificationComplete(stateFromStores, navigation);
      result.then(() => {
        let closure_0 = outer2_0(navigation[17]).runAfterInteractions(() => callback(false));
      });
      const obj = outer1_0(navigation[15]);
    }
    return () => {
      if (null != c0) {
        c0.cancel();
      }
    };
  }, items1);
  importDefault(navigation[18])(null != phone, "Phone shouldn't be null when trying to verify the code");
  obj = {
    phone,
    loading: tmp3,
    error: tmp4[0],
    backgroundStyle: tmp.redesignContainer,
    disableKeyboardAvoidingView: true,
    onCodeEnteredIntercept: function handleCodeEntered(arg0) {
      return _handleCodeEntered(...arguments);
    },
    onVerified(arg0) {
      const result = outer1_0(navigation[15]).verifyPhoneWithPassword(arg0, navigation);
    }
  };
  return callback2(importDefault(navigation[19]), obj);
};
export const VerifyPasswordScreen = function VerifyPasswordScreen() {
  const tmp = callback(React.useState(false), 2);
  const _require = tmp[1];
  let obj = _require(phoneToken[10]);
  const navigation = obj.useNavigation();
  phoneToken = useContactSyncModalStore().phoneToken;
  const tmp3 = _createForOfIteratorHelperLoose();
  const items = [_isNativeReflectConstruct];
  const stateFromStores = _require(phoneToken[16]).useStateFromStores(items, () => {
    const currentUser = outer1_7.getCurrentUser();
    let phone;
    if (null != currentUser) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const items1 = [navigation, stateFromStores];
  const effect = React.useEffect(() => {
    let c0 = null;
    if (null != stateFromStores) {
      const result = callback(phoneToken[15]).handlePhoneVerificationComplete(stateFromStores, navigation);
      result.then(() => {
        _null = _null(phoneToken[17]).runAfterInteractions(() => callback(false));
      });
      const obj = callback(phoneToken[15]);
    }
    return () => {
      if (null != c0) {
        c0.cancel();
      }
    };
  }, items1);
  navigation(phoneToken[18])(null != phoneToken, "Phone token shouldn't be null when trying to verify the password");
  obj = {
    hideUnverifiedBanner: true,
    parentLoading: tmp[0],
    style: tmp3.redesignContainer,
    onSubmit(password) {
      callback(true);
      return navigation(phoneToken[14]).addPhone(phoneToken, password, callback(phoneToken[14]).ChangePhoneReason.CONTACT_SYNC);
    },
    onError() {
      return callback(false);
    },
    onSuccess() {

    }
  };
  return callback2(navigation(phoneToken[20]), obj);
};
