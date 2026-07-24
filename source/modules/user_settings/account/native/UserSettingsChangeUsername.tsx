// Module ID: 13712
// Function ID: 105232
// Name: UsernameStatusMessage
// Dependencies: [5, 57, 31, 27, 1849, 653, 33, 4130, 689, 4329, 13713, 4126, 1212, 1456, 566, 3776, 13714, 7375, 9266, 507, 1457, 9158, 7574, 9270, 9040, 2]
// Exports: default

// Module 13712 (UsernameStatusMessage)
import ME from "ME";
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { UserSettingsSections } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
let closure_7;
let closure_8;
const require = arg1;
function UsernameStatusMessage(showHint) {
  showHint = showHint.showHint;
  const match = showHint(4329).match(showHint.usernameStatus);
  let obj = { type: showHint(13713).NameValidationState.ERROR };
  const P = showHint(4329).P;
  obj.message = P.select();
  const str = showHint(4329);
  obj = { type: showHint(13713).NameValidationState.AVAILABLE };
  const P2 = showHint(4329).P;
  obj.message = P2.select();
  const withResult = match.with(obj, (children) => {
    const obj = { variant: "text-xs/medium", color: "text-feedback-critical", children };
    return outer1_11(showHint(outer1_3[11]).Text, obj);
  });
  return match.with(obj, (children) => {
    const obj = { variant: "text-xs/medium", color: "text-feedback-critical", children };
    return outer1_11(showHint(outer1_3[11]).Text, obj);
  }).with(obj, (children) => {
    const obj = { variant: "text-xs/medium", color: "text-feedback-positive", children };
    return outer1_11(showHint(outer1_3[11]).Text, obj);
  }).otherwise(() => {
    let tmp = null;
    if (showHint) {
      const obj = { variant: "text-xs/medium", color: "text-default" };
      const intl = showHint(outer1_3[12]).intl;
      obj.children = intl.string(showHint(outer1_3[12]).t.z7c4bP);
      tmp = outer1_11(showHint(outer1_3[11]).Text, obj);
    }
    return tmp;
  });
}
({ View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.background = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.container = { padding: 16 };
_createForOfIteratorHelperLoose.inputs = { flex: 1, flexDirection: "row", marginTop: 8 };
_createForOfIteratorHelperLoose.username = { flex: 2 };
_createForOfIteratorHelperLoose.discriminator = { flex: 1 };
let obj1 = { width: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, marginBottom: 8 };
_createForOfIteratorHelperLoose.divider = obj1;
let obj2 = { flex: 1, marginVertical: 12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_SELECTED };
_createForOfIteratorHelperLoose.dividerInner = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("result").fileFinishedImporting("modules/user_settings/account/native/UserSettingsChangeUsername.tsx");

export default function UserSettingsChangeUsername() {
  let result;
  let obj5;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = navigation(first[13]);
  navigation = obj.useNavigation();
  let obj1 = navigation(first[14]);
  const items = [callback];
  const stateFromStores = obj1.useStateFromStores(items, () => callback.getCurrentUser());
  let obj3 = stateFromStores(first[15]);
  let canEditDiscriminatorResult = obj3.canEditDiscriminator(stateFromStores);
  if (canEditDiscriminatorResult) {
    canEditDiscriminatorResult = !(null != stateFromStores && stateFromStores.hasUniqueUsername());
    const tmp5 = null != stateFromStores && stateFromStores.hasUniqueUsername();
  }
  const importAll = canEditDiscriminatorResult;
  let username;
  if (null != stateFromStores) {
    username = stateFromStores.username;
  }
  let str = "";
  let str2 = "";
  if (null != username) {
    str2 = username;
  }
  const tmp8 = first1(React.useState(str2), 2);
  first = tmp8[0];
  let ME = tmp8[1];
  let discriminator;
  if (null != stateFromStores) {
    discriminator = stateFromStores.discriminator;
  }
  if (null != discriminator) {
    str = discriminator;
  }
  const tmp12 = first1(React.useState(str), 2);
  first1 = tmp12[0];
  [obj5, result] = first1(React.useState(null), 2);
  obj5 = navigation(first[16]);
  let tmp15 = null == stateFromStores;
  if (!tmp15) {
    tmp15 = !stateFromStores.hasUniqueUsername();
  }
  let username1;
  if (null != stateFromStores) {
    username1 = stateFromStores.username;
  }
  const usernameStatus = obj5.useUsernameStatus(first, !tmp15, false, username1);
  const ref = React.useRef(null);
  let username2;
  if (null != stateFromStores) {
    username2 = stateFromStores.username;
  }
  let tmp20 = first !== username2;
  if (!tmp20) {
    let discriminator1;
    if (null != stateFromStores) {
      discriminator1 = stateFromStores.discriminator;
    }
    tmp20 = first1 !== discriminator1;
  }
  if (tmp20) {
    let tmp22 = !canEditDiscriminatorResult;
    if (!tmp22) {
      let obj6 = /^\d+$/;
      let isMatch = obj6.test(first1);
      if (isMatch) {
        const _parseInt = parseInt;
        isMatch = parseInt(first1) > 0;
      }
      tmp22 = isMatch;
    }
    tmp20 = tmp22;
  }
  let closure_8 = tmp20;
  const items1 = [tmp20, canEditDiscriminatorResult, first1, navigation, stateFromStores, first];
  callback = React.useCallback(() => {
    if (closure_8) {
      let obj = stateFromStores(first[17]);
      obj.setSection(outer1_10.ACCOUNT_CONFIRM_PASSWORD);
      obj = {};
      // CreateGeneratorClosureLongIndex (0x67)
      const navigation = callback(tmp);
      obj.onSubmit = function() {
        return lib(...arguments);
      };
      obj.onSuccess = function onSuccess() {
        const CommonActions = navigation(first[20]).CommonActions;
        lib.dispatch(CommonActions.navigate({ name: outer2_10.ACCOUNT }));
      };
      navigation.push(outer1_10.ACCOUNT_CONFIRM_PASSWORD, obj);
    }
  }, items1);
  const items2 = [canEditDiscriminatorResult, callback];
  const items3 = [tmp20, callback, navigation];
  const callback1 = React.useCallback(() => {
    if (closure_2) {
      const current = ref.current;
      if (null != current) {
        current.focus();
      }
    } else {
      callback();
    }
  }, items2);
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight(arg0) {
        let tmp = null;
        if (outer1_8) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["onPress"] = outer1_9;
          const intl = navigation(first[12]).intl;
          obj["label"] = intl.string(navigation(first[12]).t["R3BPH+"]);
          tmp = outer2_11(navigation(first[21]).HeaderTextButton, obj);
        }
        return tmp;
      }
    });
  }, items3);
  if (null == stateFromStores) {
    return null;
  } else {
    let fieldMessage;
    if (null != obj4) {
      fieldMessage = obj4.getFieldMessage("username");
    }
    if (null == fieldMessage) {
      let fieldMessage1;
      if (null != obj4) {
        fieldMessage1 = obj4.getFieldMessage("discriminator");
      }
      fieldMessage = fieldMessage1;
    }
    let tmp30 = usernameStatus;
    if (null != fieldMessage) {
      obj = { type: navigation(first[10]).NameValidationState.ERROR, message: fieldMessage };
      tmp30 = obj;
    }
    if (canEditDiscriminatorResult) {
      obj = { ref, containerStyle: tmp.discriminator, keyboardType: "numeric", value: first1, onChange: tmp12[1], onSubmitEditing: callback, placeholder: "1337", returnKeyType: "done", autoCapitalize: "none", isClearable: true, leadingText: "#", maxLength: 4 };
      obj1 = obj;
    } else {
      obj1 = { ref, containerStyle: tmp.discriminator, value: `#${tmp13}`, isClearable: false, isDisabled: true };
    }
    const obj2 = { style: tmp.background, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false };
    const items4 = [callback(stateFromStores(first[23]), {}), ];
    obj3 = { style: tmp.container };
    obj4 = {};
    const tmp33 = callback;
    const tmp33Result = callback(navigation(first[22]).TextInput, obj1);
    const tmp38 = closure_8;
    let intl = navigation(first[12]).intl;
    obj4.children = intl.string(navigation(first[12]).t.IEpCBQ);
    const items5 = [callback(stateFromStores(first[24]), obj4), , ];
    obj5 = { style: tmp.inputs };
    obj6 = {
      containerStyle: tmp.username,
      textContentType: "username",
      value: first,
      enableAndroidSanitizedInputWorkaround: stateFromStores.hasUniqueUsername(),
      onChange(str) {
          let formatted = str;
          if (null != stateFromStores) {
            formatted = str;
            if (stateFromStores.hasUniqueUsername()) {
              formatted = str.toLowerCase();
            }
          }
          callback(formatted);
          callback2(null);
        },
      onSubmitEditing: callback1
    };
    const intl2 = navigation(first[12]).intl;
    obj6.placeholder = intl2.string(navigation(first[12]).t.IEpCBQ);
    let str12 = "done";
    if (canEditDiscriminatorResult) {
      str12 = "next";
    }
    obj6.returnKeyType = str12;
    obj6.autoCapitalize = "none";
    obj6.autoFocus = true;
    const items6 = [callback(navigation(first[22]).TextInput, obj6), , ];
    let tmp47 = !stateFromStores.hasUniqueUsername();
    if (tmp47) {
      const obj7 = { style: tmp.divider };
      const obj8 = { style: tmp.dividerInner };
      obj7.children = callback(ref, obj8);
      tmp47 = callback(ref, obj7);
    }
    items6[1] = tmp47;
    const tmp44 = stateFromStores(first[24]);
    const tmp46 = callback;
    items6[2] = !stateFromStores.hasUniqueUsername() && tmp33Result;
    obj5.children = items6;
    items5[1] = closure_12(ref, obj5);
    const obj9 = { usernameStatus: tmp30, showHint: stateFromStores.hasUniqueUsername() };
    items5[2] = callback(UsernameStatusMessage, obj9);
    obj3.children = items5;
    items4[1] = closure_12(ref, obj3);
    obj2.children = items4;
    return closure_12(tmp38, obj2);
  }
  const tmp14 = first1(React.useState(null), 2);
};
