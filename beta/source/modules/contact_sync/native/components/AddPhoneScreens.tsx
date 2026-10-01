// Module ID: 12200
// Function ID: 12201
// Name: AddPhoneScreens
// Dependencies: [5, 32, 19, 17, 1372, 12174, 21, 4836, 5994, 576, 1485, 4832, 1115, 6465, 6466, 12173, 563, 6459, 38, 6499, 6414, 2]
// Exports: AddPhoneScreen, VerifyPasswordScreen, VerifyPhoneScreen

// Module 12200 (AddPhoneScreens)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 6459 */;
import AddPhoneDefault from "AddPhone" /* 6465 */;
import PhoneActionCreators from "PhoneActionCreators" /* 6466 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12173 */;
import ContactSyncModalStore from "ContactSyncModalStore" /* 12174 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const PhoneActionCreatorsDefault = PhoneActionCreators;
let _require, c3, c4, closure_1, currentUser, importDefault, navigation;

let c10;
let c9;
let obj2;
let obj3;
const View = react_native.View;
const useContactSyncModalStore = ContactSyncModalStore.useContactSyncModalStore;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, redesignContainer: obj3, header: { alignItems: "center" }, title: { textAlign: "center" }, subtitle: { marginTop: 8, lineHeight: 18, textAlign: "center" } };
obj2 = { paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingTop: NavigatorConstants.NAV_BAR_HEIGHT + 32 };
let closure_11 = createStyles(obj);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/AddPhoneScreens.tsx");

export const AddPhoneScreen = function AddPhoneScreen() {
  let closure_0;
  let intl;
  let intl2;
  let items;
  let tmp2;
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  const tmp = closure_11();
  const obj2 = { style: tmp.header, children: items };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(require("intl").t.Xgb497) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items = [closure_9(Text, obj3), ];
  const obj4 = { style: tmp.subtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(require("intl").t.qFmzyo) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items[1] = closure_9(Text2, obj4);
  const obj5 = {
    style: tmp.container,
    reason: require("PhoneActionCreators").ChangePhoneReason.CONTACT_SYNC,
    header: tmp2,
    onComplete(arg0) {
      const obj = ContactSyncModalActionCreators;
      return obj.submitPhone(arg0, closure_0);
    }
  };
  tmp2 = closure_10(View, obj2);
  const tmp3 = AddPhoneDefault;
  return closure_9(tmp3, obj5);
};
export const VerifyPhoneScreen = function VerifyPhoneScreen() {
  let require;
  let tmp3;
  let obj = function _handleCodeEntered() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let obj3;
      let closure_0 = arg0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let codeIntercepted;
          let addedPhone;
          let error;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_2 = tmp4;
              closure_1 = tmp;
              closure_0 = undefined;
              codeIntercepted = undefined;
              addedPhone = undefined;
              error = undefined;
              _require(true);
              closure_2_1(undefined);
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj3.verifyPhone(closure_0), done: false };
              obj3 = closure_0(closure_2[15]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_0 = value;
            codeIntercepted = closure_0.codeIntercepted;
            addedPhone = closure_0.addedPhone;
            error = closure_0.error;
            closure_130_1(error);
            const tmp6 = addedPhone && codeIntercepted;
            if (!tmp6) {
              closure_130_0(false);
            }
            c4 = 3;
            obj = { value: codeIntercepted, done: true };
            return obj;
          }
        } catch (tmp18) {
          c4 = 3;
          throw tmp18;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_11();
  [tmp3, require] = obj(react.useState(false), 2);
  const tmp2 = obj(react.useState(false), 2);
  const tmp4 = obj(react.useState(), 2);
  importDefault = tmp4[1];
  const first = tmp4[0];
  let phone = useContactSyncModalStore().phone;
  obj = require("useNavigation");
  navigation = obj.useNavigation();
  let obj2 = require("useStateFromStores");
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const items1 = [navigation, phone, stateFromStores];
  const effect = react.useEffect(() => {
    const require = null;
    if (null != stateFromStores) {
      obj = require("ContactSyncModalActionCreators");
      const result = obj.handlePhoneVerificationComplete(tmp, navigation);
      result.then(() => {
        obj = RunAfterInteractionsUtils;
        closure_0 = obj.runAfterInteractions(() => closure_1_0(false));
      });
    }
    return () => {
      obj = closure_0;
      if (closure_0 != null) {
        obj.cancel();
      }
    };
  }, items1);
  require("module_38")(null != phone, "Phone shouldn't be null when trying to verify the code");
  let obj3 = {
    phone,
    loading: tmp3,
    error: first,
    backgroundStyle: tmp.redesignContainer,
    disableKeyboardAvoidingView: true,
    onCodeEnteredIntercept: function handleCodeEntered(arg0) {
      return obj(...arguments);
    },
    onVerified(arg0) {
      obj = ContactSyncModalActionCreators;
      const result = obj.verifyPhoneWithPassword(arg0, navigation);
    }
  };
  return closure_9(require("VerifyPhone"), obj3);
};
export const VerifyPasswordScreen = function VerifyPasswordScreen() {
  let first;
  let phoneToken;
  [first, _require] = react.useState(false);
  let obj = require("useNavigation");
  navigation = obj.useNavigation();
  const tmp4 = closure_11();
  phoneToken = useContactSyncModalStore().phoneToken;
  const items = [UserStore];
  const obj2 = require("useStateFromStores");
  const stateFromStores = obj2.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let phone;
    if (currentUser != null) {
      phone = currentUser.phone;
    }
    return phone;
  });
  const items1 = [navigation, stateFromStores];
  const effect = react.useEffect(() => {
    closure_0 = null;
    if (null != stateFromStores) {
      let obj = closure_0(phoneToken[15]);
      const result = obj.handlePhoneVerificationComplete(tmp, navigation);
      result.then(() => {
        const obj = RunAfterInteractionsUtils;
        closure_0 = obj.runAfterInteractions(() => closure_1_0(false));
      });
    }
    return () => {
      const obj = closure_0;
      if (closure_0 != null) {
        obj.cancel();
      }
    };
  }, items1);
  navigation(phoneToken[18])(null != phoneToken, "Phone token shouldn't be null when trying to verify the password");
  const obj3 = {
    hideUnverifiedBanner: true,
    parentLoading: first,
    style: tmp4.redesignContainer,
    onSubmit(password) {
      closure_0(true);
      const obj = PhoneActionCreatorsDefault;
      return obj.addPhone(phoneToken, password, PhoneActionCreators.ChangePhoneReason.CONTACT_SYNC);
    },
    onError() {
      return closure_0(false);
    },
    onSuccess() {

    }
  };
  return closure_9(navigation(phoneToken[20]), obj3);
};
