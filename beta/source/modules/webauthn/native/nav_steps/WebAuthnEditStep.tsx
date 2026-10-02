// Module ID: 14220
// Function ID: 14221
// Name: WebAuthnEditStep
// Dependencies: [32, 19, 21, 4837, 588, 558, 576, 1491, 5933, 6009, 4531, 1127, 10154, 4793, 8057, 1189, 5282, 2]

// Module 14220 (WebAuthnEditStep)
import nativeDefault from "native" /* 588 */;
import NavigatorHeader from "NavigatorHeader" /* 5933 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6009 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let credential, dependencyMap, navigation;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let react = react_mod;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { inputField: obj2, form: obj3 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((credential) => {
  let form;
  let inputField;
  let items1;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp7;
  let value;
  let tmp = credential;
  let obj = credential(576);
  const cResult = obj.c(24);
  credential = credential.credential;
  const tmp4 = closure_7();
  let obj2 = credential(1491);
  navigation = obj2.useNavigation();
  [tmp7, dependencyMap] = value(react.useState(false), 2);
  value(react.useState(false), 2);
  const tmp8 = value(react.useState(""), 2);
  value = tmp8[0];
  const tmp10 = tmp8[1];
  const obj3 = react;
  const tmp11 = value(react.useState(null), 2);
  [tmp12, react] = tmp11;
  if (cResult[0] !== navigation) {
    const fn = function c() {
      let obj2;
      const setOptions = navigation.setOptions;
      const obj = {
        headerLeft: obj2.getHeaderBackButton(() => {
          navigation.pop();
        })
      };
      obj2 = NavigatorHeader;
      setOptions(obj);
    };
    const items = [navigation];
    cResult[0] = navigation;
    cResult[1] = fn;
    cResult[2] = items;
    tmp14 = items;
    tmp13 = fn;
  } else {
    tmp13 = cResult[1];
    tmp14 = cResult[2];
  }
  const layoutEffect = obj3.useLayoutEffect(tmp13, tmp14);
  if (cResult[3] === credential.id) {
    if (cResult[4] === navigation) {
      let tmp16;
      let tmp18;
      if (cResult[5] === value) {
        tmp16 = cResult[6];
      }
      const _Symbol = Symbol;
      ({ form, inputField } = tmp4);
      if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
        let intl = tmp(1127).intl;
        const stringResult = intl.string(tmp(1127).t["Jzd+z/"]);
        cResult[7] = stringResult;
        tmp18 = stringResult;
      } else {
        tmp18 = cResult[7];
      }
      if (cResult[8] === credential.name) {
        if (cResult[9] === tmp12) {
          if (cResult[10] === tmp7) {
            if (cResult[11] === value) {
              let tmp20;
              let tmp23;
              let tmp27;
              if (cResult[12] === tmp4.inputField) {
                tmp20 = cResult[13];
              }
              const _Symbol2 = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp25 = closure_5(tmp(8057).FormDivider, {});
                cResult[14] = tmp25;
                tmp23 = tmp25;
              } else {
                tmp23 = cResult[14];
              }
              const _Symbol3 = Symbol;
              if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                const intl2 = tmp(1127).intl;
                const stringResult1 = intl2.string(tmp(1127).t["7asiR3"]);
                cResult[15] = stringResult1;
                tmp27 = stringResult1;
              } else {
                tmp27 = cResult[15];
              }
              if (cResult[16] === tmp7) {
                if (cResult[17] === tmp16) {
                  let tmp29;
                  if (cResult[18] === (tmp7 || "" === value)) {
                    tmp29 = cResult[19];
                  }
                  if (cResult[20] === tmp4.form) {
                    if (cResult[21] === tmp29) {
                      let tmp32;
                      if (cResult[22] === tmp20) {
                        tmp32 = cResult[23];
                      }
                      return tmp32;
                    }
                  }
                  const obj4 = { style: form, children: items1 };
                  items1 = [tmp20, tmp23, tmp29];
                  const tmp34 = closure_6(tmp(8057).Form, obj4);
                  cResult[20] = tmp4.form;
                  cResult[21] = tmp29;
                  cResult[22] = tmp20;
                  cResult[23] = tmp34;
                  tmp32 = tmp34;
                }
              }
              const obj5 = { onPress: tmp16, disabled: tmp7 || "" === value, loading: tmp7, size: "lg", text: tmp27, grow: true };
              const tmp31 = closure_5(tmp(5282).Button, obj5);
              cResult[16] = tmp7;
              cResult[17] = tmp16;
              cResult[18] = tmp7 || "" === value;
              cResult[19] = tmp31;
              tmp29 = tmp31;
            }
          }
        }
      }
      const obj6 = { showTopContainer: false, value, onChange: tmp10, style: inputField, error: tmp12, title: tmp18, placeholder: credential.name, disabled: tmp7, clearButtonVisibility: tmp(1189).ClearButtonVisibility.WITH_CONTENT, autoFocus: true, showBorder: true, required: true, large: true };
      const FormInput = tmp(8057).FormInput;
      const tmp22 = closure_5(FormInput, obj6);
      cResult[8] = credential.name;
      cResult[9] = tmp12;
      cResult[10] = tmp7;
      cResult[11] = value;
      cResult[12] = tmp4.inputField;
      cResult[13] = tmp22;
      tmp20 = tmp22;
    }
  }
  const fn2 = function h() {
    const tmp = dependencyMap(true);
    react(null);
    let obj = WebAuthnActionCreators;
    const result = obj.editWebAuthnCredential(credential.id, first);
    const nextPromise = result.then(() => {
      let intl;
      const obj = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", content: intl.string(credential(dependencyMap[11]).t.IV13mH), icon: navigation(dependencyMap[12]), IconComponent: credential(dependencyMap[13]).CircleCheckIcon, iconColor: "status-positive" };
      const open = navigation(dependencyMap[10]).open;
      navigation(dependencyMap[10]);
      intl = credential(dependencyMap[11]).intl;
      open(obj);
      closure_1_1.popToTop();
    });
    const catchPromise = nextPromise.catch((error) => {
      closure_1_4(error.body.message);
    });
    catchPromise.finally(() => {
      closure_1_2(false);
    });
  };
  cResult[3] = credential.id;
  cResult[4] = navigation;
  cResult[5] = value;
  cResult[6] = fn2;
  tmp16 = fn2;
}) : ((credential) => {
  let _undefined;
  let c2;
  let closure_4;
  let intl;
  let intl2;
  let items1;
  let tmp15;
  let tmp6;
  credential = credential.credential;
  dependencyMap = undefined;
  let value;
  react = undefined;
  let tmp = closure_7();
  let obj = credential(1491);
  navigation = obj.useNavigation();
  [tmp6, c2] = value(react.useState(false), 2);
  value(react.useState(false), 2);
  const tmp7 = value(react.useState(""), 2);
  value = tmp7[0];
  const tmp9 = tmp7[1];
  const tmp10 = value(react.useState(null), 2);
  react = tmp10[1];
  const items = [navigation];
  const first1 = tmp10[0];
  const layoutEffect = react.useLayoutEffect(() => {
    let obj2;
    const setOptions = navigation.setOptions;
    const obj = {
      headerLeft: obj2.getHeaderBackButton(() => {
        navigation.pop();
      })
    };
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items);
  let obj2 = { style: tmp.form, children: items1 };
  const Form = credential(8057).Form;
  const obj3 = { showTopContainer: false, value, onChange: tmp9, style: tmp.inputField, error: first1, title: intl.string(credential(1127).t["Jzd+z/"]), placeholder: credential.name, disabled: tmp6, clearButtonVisibility: credential(1189).ClearButtonVisibility.WITH_CONTENT, autoFocus: true, showBorder: true, required: true, large: true };
  const FormInput = credential(8057).FormInput;
  intl = credential(1127).intl;
  items1 = [closure_5(FormInput, obj3), closure_5(credential(8057).FormDivider, {}), ];
  const obj4 = {
    onPress() {
      const tmp = _undefined(true);
      closure_4(null);
      let obj = WebAuthnActionCreators;
      const result = obj.editWebAuthnCredential(credential.id, first);
      const nextPromise = result.then(() => {
        let intl;
        const obj = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", content: intl.string(credential(c2[11]).t.IV13mH), icon: navigation(c2[12]), IconComponent: credential(c2[13]).CircleCheckIcon, iconColor: "status-positive" };
        const open = navigation(c2[10]).open;
        navigation(c2[10]);
        intl = credential(c2[11]).intl;
        open(obj);
        closure_1_1.popToTop();
      });
      const catchPromise = nextPromise.catch((error) => {
        closure_1_4(error.body.message);
      });
      catchPromise.finally(() => {
        _undefined(false);
      });
    },
    disabled: tmp15,
    loading: tmp6,
    size: "lg",
    text: intl2.string(credential(1127).t["7asiR3"]),
    grow: true
  };
  tmp15 = tmp6;
  const Button = credential(5282).Button;
  const tmp13 = closure_6;
  const tmp14 = closure_5;
  if (!tmp6) {
    tmp15 = "" === value;
  }
  intl2 = tmp2(1127).intl;
  items1[2] = tmp14(Button, obj4);
  return tmp13(Form, obj2);
});
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx");

export default tmp4;
