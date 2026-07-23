// Module ID: 9194
// Function ID: 71994
// Name: ConfirmEmailCode
// Dependencies: [5, 57, 31, 27, 1849, 9183, 33, 4130, 689, 566, 4030, 4126, 1212, 9000, 9195, 3831, 4543, 2]
// Exports: default

// Module 9194 (ConfirmEmailCode)
import closure_3 from "setChangeEmailError";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import setChangeEmailError from "setChangeEmailError";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ useChangeEmailError: closure_9, ChangeEmailFields: closure_10 } = setChangeEmailError);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.background = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { textAlign: "center" };
_createForOfIteratorHelperLoose.prompt = { marginTop: 8, lineHeight: 18, textAlign: "center" };
_createForOfIteratorHelperLoose.input = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj1 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.contentContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_24 };
const result = require("result").fileFinishedImporting("modules/verification/native/components/ConfirmEmailCode.tsx");

export default function ConfirmEmailCode(onFormSubmit) {
  let confirmButtonText;
  let headerText;
  onFormSubmit = onFormSubmit.onFormSubmit;
  const onSuccess = onFormSubmit.onSuccess;
  const onResend = onFormSubmit.onResend;
  ({ headerText, confirmButtonText } = onFormSubmit);
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj = onFormSubmit(onResend[9]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getCurrentUser());
  const tmp4 = callback(React.useState(""), 2);
  const first = tmp4[0];
  const tmp6 = callback(callback2(constants.EMAIL_TOKEN), 2);
  callback = tmp7;
  const tmp8 = callback(React.useState(false), 2);
  React = tmp9;
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [first, tmp6[1], onFormSubmit, onSuccess];
  callback = React.useCallback(first(tmp9), items1);
  let tmp11 = null;
  if (null != stateFromStores) {
    obj = { style: null, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false };
    ({ background: obj2.style, contentContainer: obj2.contentContainerStyle } = tmp2);
    obj = {};
    const obj1 = { style: tmp2.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: headerText };
    const items2 = [callback3(onFormSubmit(onResend[11]).Text, obj1), , , ];
    const obj2 = { style: tmp2.prompt, variant: "text-sm/medium", color: "text-default" };
    const intl = onFormSubmit(onResend[12]).intl;
    obj2.children = intl.string(onFormSubmit(onResend[12]).t.SZJowy);
    items2[1] = callback3(onFormSubmit(onResend[11]).Text, obj2);
    const obj3 = { style: tmp2.input };
    const intl2 = onFormSubmit(onResend[12]).intl;
    obj3.label = intl2.string(onFormSubmit(onResend[12]).t["8mZX6M"]);
    obj3.textContentType = "emailAddress";
    obj3.keyboardType = "email-address";
    obj3.value = first;
    obj3.onChangeText = tmp4[1];
    obj3.onSubmitEditing = callback;
    obj3.returnKeyType = "done";
    obj3.autoCapitalize = "none";
    obj3.error = tmp6[0];
    obj3.autoFocus = true;
    items2[2] = callback3(onSuccess(onResend[13]), obj3);
    const obj4 = {};
    const intl3 = onFormSubmit(onResend[12]).intl;
    obj4.text = intl3.string(onFormSubmit(onResend[12]).t.K0NPQ6);
    obj4.variant = "text-sm/medium";
    // CreateGeneratorClosureLongIndex (0x67)
    obj4.onPress = first(tmp);
    items2[3] = callback3(onFormSubmit(onResend[14]).LinkButton, obj4);
    obj.children = items2;
    const items3 = [callback4(closure_6, obj), ];
    const obj5 = { text: confirmButtonText, onPress: callback, loading: tmp8[0], disabled: "" === first };
    items3[1] = callback3(onFormSubmit(onResend[16]).Button, obj5);
    obj.children = items3;
    tmp11 = callback4(closure_7, obj);
    const tmp19 = onSuccess(onResend[13]);
  }
  return tmp11;
};
