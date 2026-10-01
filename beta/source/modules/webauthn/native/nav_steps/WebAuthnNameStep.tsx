// Module ID: 14238
// Function ID: 14239
// Name: WebAuthnNameStep
// Dependencies: [5, 32, 19, 17, 14215, 21, 4836, 1485, 6014, 4528, 1115, 10115, 4792, 8053, 1177, 5281, 2]
// Exports: default

// Module 14238 (WebAuthnNameStep)
import react_native from "react-native" /* 17 */;
import useNavigation from "useNavigation" /* 1485 */;
import WebAuthnConstants from "WebAuthnConstants" /* 14215 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1, dependencyMap;

let c9;
let metroImportAll;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const WebAuthnScreens = WebAuthnConstants.WebAuthnScreens;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ margin: { margin: 16 } });
const result = size.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnNameStep.tsx");

export default function WebAuthnNameStep(arg0) {
  let Button;
  let c4;
  let closure_2;
  let closure_3;
  let first;
  let intl;
  let intl2;
  let intl3;
  let items;
  let name;
  let obj5;
  let tmp9;
  ({ ticket: require, credential: importDefault, name } = arg0);
  dependencyMap = undefined;
  closure_3 = undefined;
  _slicedToArray = undefined;
  let first1;
  let obj = function _onPress() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let body;
      let closure_0;
      let intl;
      let obj3;
      let v2;
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
        let c3;
        try {
          c4 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c3 = 2;
              closure_2_3(true);
              c1 = 3;
              c4 = 1;
              const obj5 = { value: obj3.finishRegisterWebAuthnCredential(first1, require, importDefault), done: false };
              obj3 = tmp(body[8]);
              return obj5;
            }
          } else if (1 === c1) {
            c3 = 0;
            closure_128_3(false);
            throw body;
          } else if (2 === c1) {
            closure_128_4(body.body.message);
            c3 = 0;
            closure_128_3(false);
            c4 = 3;
            const obj6 = { value: undefined, done: true };
            return obj6;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_3(false);
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_3(false);
            const obj7 = { key: "WEBAUTHN_CREDENTIAL_REGISTER_SUCCESS_TOAST_KEY", content: intl.string(tmp(body[10]).t.j3d5qI), icon: c1(body[11]), IconComponent: tmp(body[12]).CircleCheckIcon, iconColor: "status-success" };
            const open = c1(body[9]).open;
            const tmp40 = c1(body[9]);
            intl = tmp(body[10]).intl;
            open(obj7);
            closure_128_2.push(constants.SUCCESS, {});
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp28) {
          body = tmp28;
          if (0 === c3) {
            c4 = 3;
            throw tmp28;
          } else if (1 === tmp30) {
            c1 = 1;
          } else {
            c1 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_10();
  const tmp3 = dependencyMap;
  obj = useNavigation;
  dependencyMap = obj.useNavigation();
  [first, closure_3] = first1.useState(false);
  [tmp9, c4] = _slicedToArray(first1.useState(null), 2);
  const useState = first1.useState;
  const tmp5 = _slicedToArray;
  const tmp8 = _slicedToArray(first1.useState(null), 2);
  if (name == null) {
    name = "";
  }
  const tmp5Result = tmp5(useState(name), 2);
  first1 = tmp5Result[0];
  let obj2 = { children: items };
  const tmp12 = tmp5Result[1];
  const Form = tmp2(8053).Form;
  let obj3 = { showTopContainer: false, value: first1, onChange: tmp12, style: tmp.margin, error: tmp9, title: intl.string(tmp2(1115).t["Jzd+z/"]), placeholder: intl2.string(tmp2(1115).t["I/sJtJ"]), disabled: first, clearButtonVisibility: tmp2(1177).ClearButtonVisibility.WITH_CONTENT, autoFocus: true, showBorder: true, required: true, large: true };
  const FormInput = tmp2(8053).FormInput;
  intl = tmp2(1115).intl;
  intl2 = tmp2(1115).intl;
  items = [closure_8(FormInput, obj3), closure_8(tmp2(8053).FormDivider, {}), ];
  let obj4 = { style: tmp.margin, children: closure_8(Button, obj5) };
  obj5 = {
    onPress() {
      return obj(...arguments);
    },
    text: intl3.string(tmp2(1115).t["5dyZ1S"]),
    disabled: "" === first1,
    size: "lg"
  };
  Button = tmp2(5281).Button;
  intl3 = tmp2(1115).intl;
  items[2] = closure_8(obj, obj4);
  return closure_9(Form, obj2);
};
