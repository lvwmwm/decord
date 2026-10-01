// Module ID: 14232
// Function ID: 14233
// Name: WebAuthnEditStep
// Dependencies: [32, 19, 21, 4836, 576, 1485, 5936, 8053, 1115, 1177, 5281, 6014, 4528, 10115, 4792, 2]
// Exports: default

// Module 14232 (WebAuthnEditStep)
import nativeDefault from "native" /* 576 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6014 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, navigation;

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
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx");

export default function EditCredentialModal(credential) {
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
  let obj = credential(1485);
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
  const Form = credential(8053).Form;
  const obj3 = { showTopContainer: false, value, onChange: tmp9, style: tmp.inputField, error: first1, title: intl.string(credential(1115).t["Jzd+z/"]), placeholder: credential.name, disabled: tmp6, clearButtonVisibility: credential(1177).ClearButtonVisibility.WITH_CONTENT, autoFocus: true, showBorder: true, required: true, large: true };
  const FormInput = credential(8053).FormInput;
  intl = credential(1115).intl;
  items1 = [closure_5(FormInput, obj3), closure_5(credential(8053).FormDivider, {}), ];
  const obj4 = {
    onPress() {
      const tmp = _undefined(true);
      closure_4(null);
      let obj = WebAuthnActionCreators;
      const result = obj.editWebAuthnCredential(credential.id, first);
      const nextPromise = result.then(() => {
        let intl;
        const obj = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", content: intl.string(credential(c2[8]).t.IV13mH), icon: navigation(c2[13]), IconComponent: credential(c2[14]).CircleCheckIcon, iconColor: "status-positive" };
        const open = navigation(c2[12]).open;
        navigation(c2[12]);
        intl = credential(c2[8]).intl;
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
    text: intl2.string(credential(1115).t["7asiR3"]),
    grow: true
  };
  tmp15 = tmp6;
  const Button = credential(5281).Button;
  const tmp13 = closure_6;
  const tmp14 = closure_5;
  if (!tmp6) {
    tmp15 = "" === value;
  }
  intl2 = tmp2(1115).intl;
  items1[2] = tmp14(Button, obj4);
  return tmp13(Form, obj2);
};
