// Module ID: 16643
// Function ID: 16644
// Name: WebAuthnEditStep
// Dependencies: [32, 19, 1072, 21, 5009, 575, 7158, 1498, 8169, 1114, 1188, 5629, 6742, 5707, 2]
// Exports: default

// Module 16643 (WebAuthnEditStep)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import WebAuthnActionCreators from "WebAuthnActionCreators" /* 6742 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const UserSettingsSections = Constants.UserSettingsSections;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { inputField: obj2, form: obj3 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_8 = createStyles(obj);
let result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx");

export default function WebAuthnEditStep() {
  let credential;
  let intl;
  let intl2;
  let items;
  let tmp10;
  let tmp13;
  let tmp5;
  let value;
  let tmp = credential;
  let obj = credential(7158);
  credential = obj.useSettingNavigationRoute().params.credential;
  const tmp3 = closure_8();
  const obj2 = credential(1498);
  let closure_1 = obj2.useNavigation();
  [tmp5, dependencyMap] = value(react.useState(false), 2);
  value(react.useState(false), 2);
  const tmp6 = value(react.useState(""), 2);
  value = tmp6[0];
  const tmp8 = tmp6[1];
  const tmp9 = value(react.useState(null), 2);
  [tmp10, react] = tmp9;
  const obj3 = { style: tmp3.form, children: items };
  const Form = credential(8169).Form;
  const obj4 = { showTopContainer: false, value, onChange: tmp8, style: tmp3.inputField, error: tmp10, title: intl.string(credential(1114).t["Jzd+z/"]), placeholder: credential.name, disabled: tmp5, clearButtonVisibility: credential(1188).ClearButtonVisibility.WITH_CONTENT, autoFocus: true, showBorder: true, required: true, large: true };
  const FormInput = credential(8169).FormInput;
  intl = credential(1114).intl;
  items = [closure_6(FormInput, obj4), closure_6(credential(8169).FormDivider, {}), ];
  const obj5 = {
    onPress() {
      const tmp = dependencyMap(true);
      react(null);
      let obj = WebAuthnActionCreators;
      const result = obj.editWebAuthnCredential(credential.id, first);
      const nextPromise = result.then(() => {
        let intl;
        const obj = { text: intl.string(credential(dependencyMap[9]).t.IV13mH), variant: "success" };
        const open = closure_1(dependencyMap[13]).open;
        closure_1(dependencyMap[13]);
        intl = credential(dependencyMap[9]).intl;
        open("WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY", obj);
        closure_1_1.popTo(constants.WEBAUTHN_VIEW);
      });
      const catchPromise = nextPromise.catch((error) => {
        closure_1_4(error.body.message);
      });
      catchPromise.finally(() => {
        closure_1_2(false);
      });
    },
    disabled: tmp13,
    loading: tmp5,
    size: "lg",
    text: intl2.string(tmp(1114).t["7asiR3"]),
    grow: true
  };
  tmp13 = tmp5;
  const Button = credential(5629).Button;
  const tmp11 = closure_7;
  const tmp12 = closure_6;
  if (!tmp5) {
    tmp13 = "" === value;
  }
  intl2 = tmp(1114).intl;
  items[2] = tmp12(Button, obj5);
  return tmp11(Form, obj3);
};
