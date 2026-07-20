// Module ID: 9226
// Function ID: 72158
// Name: AddPhone
// Dependencies: []
// Exports: default

// Module 9226 (AddPhone)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const UserFlags = arg1(dependencyMap[7]).UserFlags;
const NOOP_NULL = arg1(dependencyMap[8]).NOOP_NULL;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_BASE_LOW };
obj.background = obj;
obj.container = { MEMBERS_WITHOUT_ROLES: "Group 11", KvStorage: 2 };
obj.title = { textAlign: "center" };
obj.input = { marginTop: 24 };
const tmp3 = arg1(dependencyMap[9]);
obj.redesignInput = { borderRadius: importDefault(dependencyMap[11]).radii.lg };
obj.button = { marginTop: 8 };
let closure_15 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[11]).radii.lg };
const result = arg1(dependencyMap[26]).fileFinishedImporting("modules/verification/native/components/AddPhone.tsx");

export default function AddPhone(reason) {
  let header;
  let onDeletePhone;
  ({ header, onComplete: closure_0, onDeletePhone } = reason);
  const importDefault = onDeletePhone;
  const dependencyMap = reason.reason;
  let callback;
  let React;
  let first1;
  let closure_7;
  let closure_8;
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
    const _handleSubmit = obj;
    return obj(...arguments);
  }
  const tmp = callback2();
  let obj = arg1(dependencyMap[12]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let closure_3 = stateFromStores;
  let obj1 = arg1(dependencyMap[12]);
  const items1 = [closure_9];
  let phone;
  const stateFromStores1 = obj1.useStateFromStores(items1, () => action.getAction());
  if (null != stateFromStores) {
    phone = stateFromStores.phone;
  }
  let obj2 = importDefault(dependencyMap[13]);
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
  let obj3 = arg1(dependencyMap[12]);
  const items2 = [closure_8];
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
  const first2 = tmp15[0];
  closure_8 = first2;
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
      if (null != tmp11) {
        str = tmp11;
      }
      closure_9(str);
      const tmp = closure_9;
    }
  }, items3);
  obj = { style: items4 };
  const items4 = [tmp.background, reason.style];
  obj = { style: tmp.container };
  if (null != header) {
    const items5 = [header, , , ];
    obj1 = {};
    ({ input: obj7.style, redesignInput: obj7.textInputStyle } = tmp);
    if (null != phone) {
      if (!result) {
        const intl3 = arg1(dependencyMap[17]).intl;
        let stringResult = intl3.string(arg1(dependencyMap[17]).t.K6R0UP);
      }
      obj1.label = stringResult;
      obj1.alpha2 = stateFromStores2.alpha2;
      obj1.countryCode = first;
      obj1.value = first2;
      obj1.onChangeText = function onChangeText(arg0, arg1) {
        action(arg0);
        callback2(arg1);
      };
      obj1.forceMode = arg1(dependencyMap[19]).PhoneOrEmailSelectorForceMode.PHONE;
      obj1.returnKeyType = "done";
      obj1.onSubmitEditing = handleSubmit;
      obj1.error = tmp17[0];
      obj1.onPressCountrySelector = function onPressCountrySelector() {
        return onDeletePhone(reason[20]).pushLazy(callback(reason[22])(reason[21], reason.paths));
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
      const intl5 = arg1(dependencyMap[17]).intl;
      obj3.text = intl5.string(arg1(dependencyMap[17]).t.PDTjLN);
      obj3.onPress = handleSubmit;
      obj3.loading = tmp18[0];
      obj2.children = _handleSubmit(arg1(dependencyMap[23]).Button, obj3);
      items5[2] = _handleSubmit(first1, obj2);
      let tmp45 = null;
      if (tmp6) {
        const obj4 = { style: tmp.button };
        const obj5 = { <string:1522289750>: "r", <string:570601313>: "isArray" };
        const intl6 = arg1(dependencyMap[17]).intl;
        obj5.text = intl6.string(arg1(dependencyMap[17]).t.kYvzoQ);
        obj5.onPress = function onPress() {
          if (null != stateFromStores) {
            if (stateFromStores.hasFlag(ref.MFA_SMS)) {
              let obj = onDeletePhone(reason[24]);
              obj = {
                importer() {
                      return callback(paths[22])(paths[25], paths.paths).then((arg0) => {
                        let closure_0 = arg0.default;
                        return (arg0) => {
                          const obj = {};
                          const merged = Object.assign(arg0);
                          obj["onConfirm"] = null != closure_1 ? closure_1 : closure_12;
                          return closure_13(closure_0, obj);
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
        obj4.children = _handleSubmit(arg1(dependencyMap[23]).Button, obj5);
        tmp45 = _handleSubmit(first1, obj4);
      }
      items5[3] = tmp45;
      obj.children = items5;
      obj.children = tmp22(tmp23, obj);
      return tmp20(tmp21, obj);
    }
    const intl4 = arg1(dependencyMap[17]).intl;
    stringResult = intl4.string(arg1(dependencyMap[17]).t.64bX0M);
    const tmp30 = _handleSubmit;
  } else {
    const obj6 = { 0: 24, 9223372036854775807: 24, 0: null, -9223372036854775808: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
    if (null != phone) {
      if (!result) {
        const intl = arg1(dependencyMap[17]).intl;
        let stringResult1 = intl.string(arg1(dependencyMap[17]).t.WO0zBE);
      }
      obj6.children = stringResult1;
      tmp50(tmp53, obj6);
    }
    const intl2 = arg1(dependencyMap[17]).intl;
    stringResult1 = intl2.string(arg1(dependencyMap[17]).t.hY8QTR);
    const tmp50 = _handleSubmit;
  }
};
