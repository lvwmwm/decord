// Module ID: 13517
// Function ID: 102557
// Name: EditCredentialModal
// Dependencies: [31, 27, 12550, 33, 4126, 689, 5490, 3828, 5428, 5421, 1212, 3832, 566, 13524, 4537, 4124]
// Exports: default

// Module 13517 (EditCredentialModal)
import module_31 from "module_31";
import keys from "keys";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import module_33 from "module_33";
import Text from "Text";

({ jsx: closure_5, jsxs: closure_6 } = _isNativeReflectConstruct);
module_33 = {};
module_33 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
module_33.inputField = module_33;
module_33.form = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
module_33 = module_33.createStyles(module_33);
const result = Text.fileFinishedImporting("modules/webauthn/native/nav_steps/WebAuthnEditStep.tsx");

export default function EditCredentialModal(credential) {
  credential = credential.credential;
  const arg1 = credential;
  const tmp = module_33();
  let obj = arg1(closure_2[5]);
  const navigation = obj.useNavigation();
  const importDefault = navigation;
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  closure_2 = tmp3[1];
  const tmp5 = callback(React.useState(""), 2);
  const first1 = tmp5[0];
  const callback = first1;
  const tmp7 = callback(React.useState(null), 2);
  const React = tmp7[1];
  const items = [navigation];
  const layoutEffect = React.useLayoutEffect(() => {
    const obj = {
      headerLeft: credential(closure_2[6]).getHeaderBackButton(() => {

      })
    };
    navigation.setOptions(obj);
  }, items);
  obj = { style: tmp.form };
  obj = { showTopContainer: false, value: first1, onChange: tmp5[1], style: tmp.inputField, error: tmp7[0] };
  const intl = arg1(closure_2[8]).intl;
  obj.title = intl.string(arg1(closure_2[8]).t.Jzd+z/);
  obj.placeholder = credential.name;
  obj.disabled = first;
  obj.clearButtonVisibility = arg1(closure_2[9]).ClearButtonVisibility.WITH_CONTENT;
  obj.autoFocus = true;
  obj.showBorder = true;
  obj.required = true;
  obj.large = true;
  const items1 = [callback2(arg1(closure_2[7]).FormInput, obj), callback2(arg1(closure_2[7]).FormDivider, {}), ];
  const obj1 = {
    onPress() {
      callback(true);
      callback2(null);
      const result = credential(callback[11]).editWebAuthnCredential(credential.id, first1);
      const obj = credential(callback[11]);
      const nextPromise = result.then(() => {
        let obj = lib(closure_2[12]);
        obj = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY" };
        const intl = callback(closure_2[8]).intl;
        obj.content = intl.string(callback(closure_2[8]).t.IV13mH);
        obj.icon = lib(closure_2[13]);
        obj.IconComponent = callback(closure_2[14]).CircleCheckIcon;
        obj.iconColor = "status-positive";
        obj.open(obj);
        lib.popToTop();
      });
      result.then(() => {
        let obj = lib(closure_2[12]);
        obj = { key: "WEBAUTHN_CREDENTIAL_EDIT_SUCCESS_TOAST_KEY" };
        const intl = callback(closure_2[8]).intl;
        obj.content = intl.string(callback(closure_2[8]).t.IV13mH);
        obj.icon = lib(closure_2[13]);
        obj.IconComponent = callback(closure_2[14]).CircleCheckIcon;
        obj.iconColor = "status-positive";
        obj.open(obj);
        lib.popToTop();
      }).catch((body) => {
        callback3(body.body.message);
      }).finally(() => {
        callback2(false);
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
  const intl2 = arg1(closure_2[8]).intl;
  obj1.text = intl2.string(arg1(closure_2[8]).t.7asiR3);
  obj1.grow = true;
  items1[2] = callback2(arg1(closure_2[10]).Button, obj1);
  obj.children = items1;
  return closure_6(arg1(closure_2[7]).Form, obj);
};
