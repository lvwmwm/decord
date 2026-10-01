// Module ID: 15590
// Function ID: 15591
// Name: RegisterDisplayName
// Dependencies: [5, 32, 19, 17, 14267, 15570, 15571, 21, 4836, 576, 1115, 6363, 1485, 15567, 15586, 15569, 1094, 15585, 13992, 14268, 6795, 6376, 6391, 6024, 5281, 5890, 2]
// Exports: default

// Module 15590 (RegisterDisplayName)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UniqueUsernamesStore from "UniqueUsernamesStore" /* 14267 */;
import RegistrationUIStore from "RegistrationUIStore" /* 15570 */;
import RegistrationConstants from "RegistrationConstants" /* 15571 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, navigation;

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let obj2;
let obj3;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
const View = react_native.View;
({ updateRegistrationOptions: metroImportAll, useRegistrationUIStore: c9 } = RegistrationUIStore);
({ RegisterTransitionSteps: c10, RegistrationTransitionActionTypes: unpackModuleId } = RegistrationConstants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { globalName: obj2, button: obj3, page: { flex: 1 } };
obj2 = { marginTop: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24 };
let closure_14 = createStyles(obj);
let closure_15 = ["discord", "hypesquad", "snowsgiving", "system message", "system mesage", "sustem mesage", "sustem message"];
let closure_16 = ["everyone", "here"];
let result = size.fileFinishedImporting("modules/auth/native/components/RegisterDisplayName.tsx");

export default function RegisterDisplayName() {
  let Button;
  let TextInput;
  let callback;
  let closure_1;
  let closure_3;
  let context;
  let intl;
  let intl2;
  let intl4;
  let items3;
  let obj5;
  let obj7;
  let str;
  let stringResult;
  let tmp28;
  function getGlobalNameError(str) {
    if (closure_1_16.includes(str)) {
      const intl2 = navigation(str[10]).intl;
      return intl2.string(navigation(str[10]).t.WeJZyy);
    } else {
      for (const item10009 of closure_1_15) {
        let formatted = str.toLowerCase();
        if (formatted.includes(item10009)) {
          let intl = navigation(str[10]).intl;
          let stringResult = intl.string(navigation(str[10]).t.WeJZyy);
          obj.return();
          return stringResult;
        }
      }
    }
  }
  let tmp = closure_14();
  let tmp3 = str;
  let tmp5 = navigation;
  let tmp4 = require("useWideAuthView")();
  let obj = navigation(str[12]);
  navigation = obj.useNavigation();
  const tmp7 = context(callback.useState(false), 2);
  importDefault = tmp7[1];
  const first = tmp7[0];
  const tmp9 = state((errors) => errors.errors);
  const tmp10 = context(callback.useState(() => {
    str = state.getState().registrationOptions.globalName;
    if (str == null) {
      str = "";
    }
    return str;
  }), 2);
  str = tmp10[0];
  _asyncToGenerator = tmp10[1];
  const tmp11 = getGlobalNameError(str);
  context = callback.useContext(navigation(str[13]).TrackRegistrationContext);
  const tmp13 = require("useAuthFlowBackHandler");
  let obj2 = navigation(str[15]);
  tmp13(obj2.getPreviousRegistrationTransitionStep(navigation(str[16]).AuthStates.REGISTER_DISPLAY_NAME));
  const tmp15 = require("useInitialRegistrationStep");
  tmp15(navigation(str[16]).AuthStates.REGISTER_DISPLAY_NAME);
  const items = [context];
  const effect = callback.useEffect(() => {
    const obj = { step: constants.ACCOUNT_DISPLAY_NAME, actionType: unpackModuleId.VIEWED };
    context(obj);
  }, items);
  const ref = callback.useRef(null);
  require("useFocusRefOnNavigation")({ inputRef: ref });
  const useCallback = callback.useCallback;
  let closure_0 = _asyncToGenerator(async (globalName) => {
    let c2 = 0;
    let c3 = 0;
    return (async (arg0, value) => {
      let obj2;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              return { value, done: true };
            } else {
              const obj6 = { globalName };
              closure_2_8(obj6);
              const registrationOptions = state.getState().registrationOptions;
              const obj7 = { step: constants.ACCOUNT_DISPLAY_NAME, actionType: constants2.SUBMITTED };
              closure_1_4(obj7);
              const tmp5 = null != registrationOptions.username && "" !== registrationOptions.username;
              if (!tmp5) {
                tmp(true);
                if (!closure_2_7.wasRegistrationSuggestionFetched(globalName)) {
                  c2 = 1;
                  c3 = 1;
                  const obj8 = { value: obj2.fetchSuggestionsRegistration(globalName), done: false };
                  obj2 = closure_2_1(str[19]);
                  return obj8;
                }
              }
              const obj4 = globalName(str[15]);
              const result = obj4.handleNextOrSubmitRegistration(globalName(str[16]).AuthStates.REGISTER_DISPLAY_NAME, globalName, closure_1_4);
              c3 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            return { value, done: true };
          }
          tmp(false);
        } catch (tmp21) {
          c3 = 3;
          throw tmp21;
        }
      }
    })();
  });
  const items1 = [navigation, context];
  callback = useCallback(function() {
    return closure_0(...arguments);
  }, items1);
  const items2 = [callback, navigation];
  const layoutEffect = callback.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        let intl;
        const obj = {
          text: intl.string(navigation(str[10]).t["5Wxrcd"]),
          onPress() {
            return closure_1_5(null);
          }
        };
        const HeaderActionButton = navigation(str[20]).HeaderActionButton;
        intl = navigation(str[10]).intl;
        return closure_2_12(HeaderActionButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items2);
  let tmp22 = require("getError")("global_name", tmp9);
  if (tmp22 == null) {
    tmp22 = tmp11;
  }
  const obj3 = { headerText: intl.string(tmp5(tmp3[10]).t.LYIh7j), children: items3 };
  const tmp2Result = require("AuthFormView");
  intl = tmp5(tmp3[10]).intl;
  let obj4 = { style: tmp.globalName, children: tmp25(TextInput, obj5) };
  obj5 = {
    ref,
    value: str,
    onChange(str) {
      str = "";
      const tmp = closure_3;
      tmp(str);
    },
    returnKeyType: "next",
    onSubmitEditing() {
      return callback(str);
    },
    textContentType: "nickname",
    errorMessage: tmp22,
    label: intl2.string(tmp5(tmp3[10]).t["9AjdkD"]),
    description: stringResult,
    clearable: true
  };
  TextInput = tmp5(tmp3[23]).TextInput;
  intl2 = tmp5(tmp3[10]).intl;
  stringResult = undefined;
  const tmp23 = closure_13;
  if (null == tmp22) {
    const intl3 = tmp5(tmp3[10]).intl;
    stringResult = intl3.string(tmp5(tmp3[10]).t.fbKwSs);
  }
  items3 = [tmp25(tmp26, obj4), ];
  let obj6 = { style: tmp.button, children: tmp25(Button, obj7) };
  obj7 = {
    size: "lg",
    loading: first,
    text: intl4.string(tmp5(tmp3[10]).t.PDTjLN),
    onPress() {
      return callback(str);
    },
    disabled: tmp28
  };
  Button = tmp5(tmp3[24]).Button;
  intl4 = tmp5(tmp3[10]).intl;
  tmp28 = null != tmp11;
  if (!tmp28) {
    tmp28 = "" === str.trim();
  }
  items3[1] = closure_12(View, obj6);
  const tmp23Result = tmp23(tmp2Result, obj3);
  let tmp25Result = tmp23Result;
  if (!tmp4) {
    let obj8 = { style: tmp.page, children: tmp23Result };
    tmp25Result = tmp25(tmp2(tmp3[25]), obj8);
  }
  return tmp25Result;
};
