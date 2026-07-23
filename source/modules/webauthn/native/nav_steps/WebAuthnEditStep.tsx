// Module ID: 13640
// Function ID: 104768
// Name: EditCredentialModal
// Dependencies: [57, 31, 33, 4130, 689, 1456, 5087, 7495, 1212, 1273, 4543, 5594, 3831, 9670, 4091, 2]
// Exports: default

// Module 13640 (EditCredentialModal)
import _slicedToArray from "_slicedToArray";
import result from "result";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.inputField = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.form = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("jsxProd").fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx");

export default function EditCredentialModal(credential) {
  credential = credential.credential;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = credential(1456);
  const navigation = obj.useNavigation();
  const tmp3 = first1(React.useState(false), 2);
  const first = tmp3[0];
  const dependencyMap = tmp3[1];
  const tmp5 = first1(React.useState(""), 2);
  first1 = tmp5[0];
  const tmp7 = first1(React.useState(null), 2);
  React = tmp7[1];
  const items = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {
      headerLeft: credential(5087).getHeaderBackButton(() => {
        outer1_1.pop();
      })
    };
    navigation.setOptions(obj);
  }, items);
  obj = { style: tmp.form };
  obj = { showTopContainer: false, value: first1, onChange: tmp5[1], style: tmp.inputField, error: tmp7[0] };
  let intl = credential(1212).intl;
  obj.title = intl.string(credential(1212).t["Jzd+z/"]);
  obj.placeholder = credential.name;
  obj.disabled = first;
  obj.clearButtonVisibility = credential(1273).ClearButtonVisibility.WITH_CONTENT;
  obj.autoFocus = true;
  obj.showBorder = true;
  obj.required = true;
  obj.large = true;
  const items1 = [callback(credential(7495).FormInput, obj), callback(credential(7495).FormDivider, {}), ];
  const obj1 = {
    onPress() {
      dependencyMap(true);
      callback(null);
      const result = credential(5594).editWebAuthnCredential(credential.id, first1);
      let obj = credential(5594);
      const nextPromise = result.then(() => {
        let obj = navigation(3831);
        obj = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY" };
        const intl = credential(1212).intl;
        obj.content = intl.string(credential(1212).t.IV13mH);
        obj.icon = navigation(9670);
        obj.IconComponent = credential(4091).CircleCheckIcon;
        obj.iconColor = "status-positive";
        obj.open(obj);
        outer1_1.popToTop();
      });
      result.then(() => {
        let obj = navigation(3831);
        obj = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY" };
        const intl = credential(1212).intl;
        obj.content = intl.string(credential(1212).t.IV13mH);
        obj.icon = navigation(9670);
        obj.IconComponent = credential(4091).CircleCheckIcon;
        obj.iconColor = "status-positive";
        obj.open(obj);
        outer1_1.popToTop();
      }).catch((body) => {
        outer1_4(body.body.message);
      }).finally(() => {
        outer1_2(false);
      });
    }
  };
  let tmp11 = first;
  if (!first) {
    tmp11 = "" === first1;
  }
  obj1.disabled = tmp11;
  obj1.loading = first;
  obj1.size = "lg";
  const intl2 = credential(1212).intl;
  obj1.text = intl2.string(credential(1212).t["7asiR3"]);
  obj1.grow = true;
  items1[2] = callback(credential(4543).Button, obj1);
  obj.children = items1;
  return closure_6(credential(7495).Form, obj);
};
