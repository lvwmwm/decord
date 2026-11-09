// Module ID: 7225
// Function ID: 7226
// Name: UserSettingsConfirmPassword
// Dependencies: [5, 32, 19, 17, 1385, 1072, 21, 5140, 575, 7226, 504, 7227, 6579, 1242, 1113, 7229, 5751, 7148, 7178, 5758, 2]
// Exports: UserSettingsConfirmPasswordWrapped

// Module 7225 (UserSettingsConfirmPassword)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import FreeFormErrorLabelDefault from "FreeFormErrorLabel" /* 7178 */;
import useSettingNavigationRoute from "useSettingNavigationRoute" /* 7226 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7227 */;
import UserSettingsAccountUnverifiedHeaderDefault from "UserSettingsAccountUnverifiedHeader" /* 7229 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1385 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c5, closure_2;

let c10;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let tmp3;
let unpackModuleId;
const intl5 = tmp3(1113);
const Text_Text = tmp3(5751);
const components_Button_Button = tmp3(5758);
const TextInput_TextInput = tmp3(7148);
let _slicedToArray = _slicedToArray_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: obj2, container: { paddingVertical: 12, paddingHorizontal: 16 }, title: { textAlign: "center" }, prompt: { marginTop: 8, lineHeight: 18, textAlign: "center" }, input: { marginTop: 24 }, button: { marginTop: 16 }, hint: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.unsafe_rawColors.RED_400 };
const authStore2 = createStyles(obj);
class UserSettingsConfirmPasswordInner {
  constructor(ref) {
    let Button;
    let _undefined;
    let c4;
    let c6;
    let fieldMessage;
    let handleSubmit;
    let hideUnverifiedBanner;
    let intl;
    let intl2;
    let intl3;
    let intl4;
    let items1;
    let items2;
    let items3;
    let obj10;
    let obj2;
    let parentLoading;
    let style;
    let tmp10;
    let tmp21;
    let tmp7;
    let value;
    ({ onSubmit: require, onSuccess: importDefault, onError: dependencyMap, parentLoading } = ref);
    if (parentLoading === undefined) {
      parentLoading = false;
    }
    ({ hideUnverifiedBanner, style } = ref);
    if (hideUnverifiedBanner === undefined) {
      hideUnverifiedBanner = false;
    }
    _slicedToArray = undefined;
    value = undefined;
    c6 = undefined;
    let obj = function _handleSubmit() {
      let ref;
      obj = _asyncToGenerator(async function(arg0, value) {
        let closure_1;
        if (c5 === 2) {
          c5 = 3;
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
          let c3;
          try {
            let closure_0;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_0 = undefined;
                if (!ref.current) {
                  const tmp69 = parentLoading;
                  if (!tmp69) {
                    ref.current = true;
                    _undefined(true);
                    c3 = 2;
                    c4 = 3;
                    c5 = 1;
                    const obj5 = { value: require(react), done: false };
                    return obj5;
                  }
                }
              }
            } else if (1 === c4) {
              c3 = 0;
              closure_129_7.current = false;
              closure_129_4(false);
              throw closure_2;
            } else {
              if (2 === c4) {
                c3 = 1;
                const tmp = closure_2;
                const obj4 = tmp(closure_2[13]);
                obj4.captureException(tmp);
                const message = tmp.message;
                const intl = closure_0(closure_2[14]).intl;
                if (message !== intl.string(closure_0(closure_2[14]).t.N2yb9a)) {
                  const self3 = this;
                  const self4 = this;
                  const v6OrEarlierAPIError = new closure_0(closure_2[12]).V6OrEarlierAPIError(tmp);
                  closure_129_6(v6OrEarlierAPIError);
                }
                if (closure_129_2 != null) {
                  closure_129_2();
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_7.current = false;
                closure_129_4(false);
                c5 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_0 = value;
                if (null == closure_0) {
                  if (closure_129_2 != null) {
                    closure_129_2();
                  }
                  c3 = 0;
                  closure_129_7.current = false;
                  closure_129_4(false);
                  c5 = 3;
                  const obj7 = { value: undefined, done: true };
                  return obj7;
                } else {
                  if (closure_0.status >= 400) {
                    if (closure_0.status <= 599) {
                      const self = this;
                      const self2 = this;
                      const v6OrEarlierAPIError1 = new closure_0(closure_2[12]).V6OrEarlierAPIError(closure_0);
                      closure_129_6(v6OrEarlierAPIError1);
                      if (closure_129_2 != null) {
                        closure_129_2();
                      }
                      c3 = 0;
                      closure_129_7.current = false;
                      closure_129_4(false);
                      c5 = 3;
                      obj = { value: undefined, done: true };
                      return obj;
                    }
                  }
                  closure_129_1();
                  c3 = 1;
                }
              }
              c3 = 0;
              closure_129_7.current = false;
              closure_129_4(false);
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp75) {
            closure_2 = tmp75;
            if (0 === c3) {
              c5 = 3;
              throw tmp75;
            } else if (1 === tmp77) {
              c4 = 1;
            } else {
              c4 = 2;
            }
          }
        }
      });
      return obj(...arguments);
    };
    ref = ref.ref;
    let tmp = closure_12();
    const imperativeHandle = value.useImperativeHandle(ref, () => ({}));
    const tmp3 = require;
    const tmp4 = dependencyMap;
    obj = get_initialized;
    const items = [obj];
    const stateFromStores = obj.useStateFromStores(items, () => obj.getCurrentUser());
    [tmp7, c4] = _slicedToArray(value.useState(false), 2);
    const tmp6 = _slicedToArray(value.useState(false), 2);
    [value, tmp10] = value.useState("");
    [obj2, c6] = _slicedToArray(value.useState(null), 2);
    const tmp11 = _slicedToArray(value.useState(null), 2);
    let closure_7 = value.useRef(false);
    const effect = value.useEffect(() => {
      obj = UserSettingsUtils;
      const obj2 = { destinationPane: constants.ACCOUNT_CONFIRM_PASSWORD };
      const result = obj.trackUserSettingsPaneViewed(obj2);
    }, []);
    let tmp14Result = null;
    if (null != stateFromStores) {
      let obj3 = { style: items1, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, children: items2 };
      items1 = [tmp.background, style];
      let tmp16 = null;
      const tmp15 = closure_7;
      if (!hideUnverifiedBanner) {
        tmp16 = closure_10(UserSettingsAccountUnverifiedHeaderDefault, {});
      }
      items2 = [tmp16, ];
      let obj4 = { style: tmp.container, children: items3 };
      let obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: intl.string(intl5.t["x+d9t3"]) };
      const Text = Text_Text.Text;
      intl = intl5.intl;
      items3 = [closure_10(Text, obj5), , , , ];
      let obj6 = { style: tmp.prompt, variant: "body-sm/medium", color: "text-default", children: intl2.string(intl5.t.vaZmAx) };
      const Text2 = Text_Text.Text;
      intl2 = intl5.intl;
      items3[1] = closure_10(Text2, obj6);
      let obj7 = { containerStyle: tmp.input, label: intl3.string(intl5.t["CIGa+7"]), textContentType: "password", autoComplete: "current-password", secureTextEntry: true, revealable: true, disabled: tmp21, value, onChange: tmp10, onSubmitEditing: handleSubmit, errorMessage: fieldMessage, returnKeyType: "done", autoCapitalize: "none", autoFocus: true };
      const TextInput = TextInput_TextInput.TextInput;
      intl3 = intl5.intl;
      handleSubmit = function handleSubmit() {
        return obj(...arguments);
      };
      fieldMessage = undefined;
      tmp21 = tmp7 || parentLoading;
      if (obj2 != null) {
        fieldMessage = obj2.getFieldMessage("password");
      }
      items3[2] = closure_10(TextInput, obj7);
      let tmp20Result = null;
      if (null != obj2) {
        tmp20Result = null;
        if (null == obj2.getFieldMessage("password")) {
          const obj8 = { style: tmp.hint, children: obj2.message };
          tmp20Result = tmp20(FreeFormErrorLabelDefault, obj8);
        }
      }
      items3[3] = tmp20Result;
      const obj9 = { style: tmp.button, children: closure_10(Button, obj10) };
      obj10 = { variant: "primary", size: "lg", text: intl4.string(intl5.t.i4jeWR), onPress: handleSubmit, loading: tmp7 };
      Button = components_Button_Button.Button;
      intl4 = intl5.intl;
      items3[4] = closure_10(c6, obj9);
      items2[1] = closure_11(c6, obj4);
      tmp14Result = tmp14(tmp15, obj3);
    }
    return tmp14Result;
  }
}
let result = size.fileFinishedImporting("modules/user_settings/account/native/UserSettingsConfirmPassword.tsx");

export default UserSettingsConfirmPasswordInner;
export function UserSettingsConfirmPasswordWrapped() {
  const obj = useSettingNavigationRoute;
  const obj2 = {};
  const merged = Object.assign(obj.useSettingNavigationRoute().params);
  return authStore(UserSettingsConfirmPasswordInner, obj2);
}
