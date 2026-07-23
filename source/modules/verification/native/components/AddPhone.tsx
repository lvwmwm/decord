// Module ID: 9238
// Function ID: 72235
// Name: AddPhone
// Dependencies: [5, 57, 31, 27, 9196, 1342, 1849, 653, 482, 33, 4130, 689, 566, 9189, 9239, 4029, 4126, 1212, 9240, 9215, 4337, 9241, 1934, 4543, 4471, 9261, 2]
// Exports: default

// Module 9238 (AddPhone)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { UserFlags } from "ME";
import { NOOP_NULL } from "sum";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_6;
let closure_7;
const require = arg1;
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.background = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { padding: 16, flex: 1 };
_createForOfIteratorHelperLoose.title = { textAlign: "center" };
_createForOfIteratorHelperLoose.input = { marginTop: 24 };
_createForOfIteratorHelperLoose.redesignInput = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.button = { marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
let result = require("result").fileFinishedImporting("modules/verification/native/components/AddPhone.tsx");

export default function AddPhone(reason) {
  let header;
  let onDeletePhone;
  let require;
  ({ header, onComplete: require, onDeletePhone } = reason);
  reason = reason.reason;
  let callback;
  let React;
  let first1;
  let closure_7;
  let first2;
  let closure_9;
  let closure_10;
  let closure_11;
  let closure_12;
  function handleSubmit() {
    return _handleSubmit(...arguments);
  }
  function _handleSubmit(Button, arg1) {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = stateFromStores(tmp);
    return obj(...arguments);
  }
  let tmp = _createForOfIteratorHelperLoose();
  let obj = require(reason[12]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = require(reason[12]);
  const items1 = [closure_9];
  let phone;
  const stateFromStores1 = obj1.useStateFromStores(items1, () => action.getAction());
  if (null != stateFromStores) {
    phone = stateFromStores.phone;
  }
  let obj2 = onDeletePhone(reason[13]);
  const result = obj2.isPhoneReverification(stateFromStores, stateFromStores1);
  callback = result;
  let tmp6 = null != onDeletePhone && null != phone;
  if (tmp6) {
    let email;
    if (null != stateFromStores) {
      email = stateFromStores.email;
    }
    tmp6 = null != email;
  }
  if (tmp6) {
    tmp6 = !result;
  }
  let obj3 = require(reason[12]);
  const items2 = [first2];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => first2.getCountryCode());
  const tmp9 = callback(stateFromStores2.code.split(" "), 2);
  const first = tmp9[0];
  React = tmp11;
  let str2 = "";
  if (null != first) {
    str2 = first;
  }
  const tmp13 = callback(React.useState(str2), 2);
  first1 = tmp13[0];
  closure_7 = tmp13[1];
  if (null != phone) {
    let str3 = phone.replace(first1, "");
  } else {
    str3 = "";
    if (null != tmp11) {
      str3 = tmp11;
    }
  }
  const tmp15 = callback(React.useState(str3), 2);
  first2 = tmp15[0];
  closure_9 = tmp15[1];
  const tmp17 = callback(React.useState(null), 2);
  closure_10 = tmp17[1];
  closure_11 = React.useRef(true);
  const tmp18 = callback(React.useState(false), 2);
  closure_12 = tmp18[1];
  const items3 = [tmp9[1]];
  const effect = React.useEffect(() => {
    if (ref.current) {
      ref.current = false;
    } else {
      let str = "";
      if (null != c5) {
        str = c5;
      }
      closure_9(str);
      const tmp = closure_9;
    }
  }, items3);
  obj = { style: null, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false };
  const items4 = [tmp.background, reason.style];
  obj.style = items4;
  obj = { style: tmp.container };
  if (null != header) {
    const items5 = [header, , , ];
    obj1 = {};
    ({ input: obj7.style, redesignInput: obj7.textInputStyle } = tmp);
    if (null != phone) {
      if (!result) {
        const intl3 = require(reason[17]).intl;
        let stringResult = intl3.string(require(reason[17]).t.K6R0UP);
      }
      obj1.label = stringResult;
      obj1.alpha2 = stateFromStores2.alpha2;
      obj1.countryCode = first;
      obj1.value = first2;
      obj1.onChangeText = function onChangeText(arg0, arg1) {
        action(arg0);
        callback(arg1);
      };
      obj1.forceMode = require(reason[19]).PhoneOrEmailSelectorForceMode.PHONE;
      obj1.returnKeyType = "done";
      obj1.onSubmitEditing = handleSubmit;
      obj1.error = tmp17[0];
      obj1.onPressCountrySelector = function onPressCountrySelector() {
        return onDeletePhone(reason[20]).pushLazy(outer1_0(reason[22])(reason[21], reason.paths));
      };
      obj1.autoFocus = true;
      items5[1] = tmp30(tmp33, obj1);
      obj2 = { style: tmp.button };
      obj3 = { variant: "primary" };
      let str6 = "lg";
      if (tmp6) {
        str6 = "md";
      }
      obj3.size = str6;
      const intl5 = require(reason[17]).intl;
      obj3.text = intl5.string(require(reason[17]).t.PDTjLN);
      obj3.onPress = handleSubmit;
      obj3.loading = tmp18[0];
      obj2.children = _handleSubmit(require(reason[23]).Button, obj3);
      items5[2] = _handleSubmit(first1, obj2);
      let tmp45 = null;
      if (tmp6) {
        const obj4 = { style: tmp.button };
        const obj5 = { variant: "secondary", size: "md" };
        const intl6 = require(reason[17]).intl;
        obj5.text = intl6.string(require(reason[17]).t.kYvzoQ);
        obj5.onPress = function onPress() {
          if (null != stateFromStores) {
            if (stateFromStores.hasFlag(ref.MFA_SMS)) {
              let obj = onDeletePhone(reason[24]);
              obj = {
                importer() {
                      return outer2_0(reason[22])(reason[25], reason.paths).then((arg0) => {
                        let closure_0 = arg0.default;
                        return (arg0) => {
                          const obj = {};
                          const merged = Object.assign(arg0);
                          obj["onConfirm"] = null != outer3_1 ? outer3_1 : closure_12;
                          return _handleSubmit(closure_0, obj);
                        };
                      });
                    }
              };
              obj.openLazy(obj);
            } else if (null != onDeletePhone) {
              onDeletePhone();
            }
          }
        };
        obj4.children = _handleSubmit(require(reason[23]).Button, obj5);
        tmp45 = _handleSubmit(first1, obj4);
      }
      items5[3] = tmp45;
      obj.children = items5;
      obj.children = tmp22(tmp23, obj);
      return tmp20(tmp21, obj);
    }
    const intl4 = require(reason[17]).intl;
    stringResult = intl4.string(require(reason[17]).t["64bX0M"]);
    tmp30 = _handleSubmit;
  } else {
    const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
    if (null != phone) {
      if (!result) {
        const intl = require(reason[17]).intl;
        let stringResult1 = intl.string(require(reason[17]).t.WO0zBE);
      }
      obj6.children = stringResult1;
      tmp50(tmp53, obj6);
    }
    const intl2 = require(reason[17]).intl;
    stringResult1 = intl2.string(require(reason[17]).t.hY8QTR);
    tmp50 = _handleSubmit;
  }
};
