// Module ID: 13531
// Function ID: 102674
// Name: UsernameStatusMessage
// Dependencies: [0, 0, 0, 0, 0, 0, 1849, 7656, 9225, 566, 4329, 9224, 1934, 9227, 10080, 1212, 2, 7656, 4339, 3807, 10080, 1212, 2, 7656, 653, 10080]
// Exports: default

// Module 13531 (UsernameStatusMessage)
import closure_4 from "result";
import closure_5 from "result";
import closure_6 from "result";
import result from "result";
import closure_9 from "result";
import { UserSettingsSections } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import MobileSetting from "MobileSetting";
import createToggle from "createToggle";

function UsernameStatusMessage(showHint) {
  const arg1 = showHint.showHint;
  const match = arg1(dependencyMap[9]).match(showHint.usernameStatus);
  let obj = { type: arg1(dependencyMap[10]).NameValidationState.ERROR };
  const P = arg1(dependencyMap[9]).P;
  obj.message = P.select();
  const str = arg1(dependencyMap[9]);
  obj = { type: arg1(dependencyMap[10]).NameValidationState.AVAILABLE };
  const P2 = arg1(dependencyMap[9]).P;
  obj.message = P2.select();
  const withResult = match.with(obj, (children) => callback(showHint(closure_3[11]).Text, { children }));
  return match.with(obj, (children) => callback(showHint(closure_3[11]).Text, { children })).with(obj, (children) => callback(showHint(closure_3[11]).Text, { children })).otherwise(() => {
    let tmp = null;
    if (showHint) {
      const obj = {};
      const intl = showHint(closure_3[12]).intl;
      obj.children = intl.string(showHint(closure_3[12]).t.z7c4bP);
      tmp = callback(showHint(closure_3[11]).Text, obj);
    }
    return tmp;
  });
}
({ View: closure_7, ScrollView: closure_8 } = result);
({ jsx: closure_11, jsxs: closure_12 } = _isNativeReflectConstruct);
MobileSetting = {};
MobileSetting = { backgroundColor: require("PHONE_VERIFICATION_MODAL_KEY").colors.BACKGROUND_BASE_LOW };
MobileSetting.background = MobileSetting;
MobileSetting.container = { padding: 16 };
MobileSetting.inputs = {};
MobileSetting.username = { flex: 2 };
MobileSetting.discriminator = { flex: 1 };
MobileSetting.divider = { backgroundColor: require("PHONE_VERIFICATION_MODAL_KEY").colors.BACKGROUND_BASE_LOWEST };
const obj2 = { "Bool(false)": null, "Bool(false)": null, backgroundColor: require("PHONE_VERIFICATION_MODAL_KEY").colors.INTERACTIVE_BACKGROUND_SELECTED };
MobileSetting.dividerInner = obj2;
MobileSetting = MobileSetting.createStyles(MobileSetting);
result = createToggle.fileFinishedImporting("modules/user_settings/account/native/UserSettingsChangeUsername.tsx");

export default function UserSettingsChangeUsername() {
  let obj5;
  const tmp = MobileSetting();
  let obj = arg1(dependencyMap[13]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  let obj1 = arg1(dependencyMap[14]);
  const items = [closure_9];
  const stateFromStores = obj1.useStateFromStores(items, () => callback.getCurrentUser());
  const importDefault = stateFromStores;
  let obj3 = importDefault(dependencyMap[15]);
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
  const tmp8 = callback(React.useState(str2), 2);
  const first = tmp8[0];
  const dependencyMap = first;
  let closure_4 = tmp8[1];
  let discriminator;
  if (null != stateFromStores) {
    discriminator = stateFromStores.discriminator;
  }
  if (null != discriminator) {
    str = discriminator;
  }
  const tmp12 = callback(React.useState(str), 2);
  const first1 = tmp12[0];
  let callback = first1;
  [obj5, closure_6] = callback(React.useState(null), 2);
  obj5 = arg1(dependencyMap[16]);
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
  const items1 = [tmp20, canEditDiscriminatorResult, first1, navigation, stateFromStores, first];
  callback = React.useCallback(() => {
    if (tmp20) {
      let obj = stateFromStores(first[17]);
      obj.setSection(constants.ACCOUNT_CONFIRM_PASSWORD);
      obj = {};
      // CreateGeneratorClosureLongIndex (0x67)
      let arr = callback(tmp);
      obj.onSubmit = function() {
        return lib(...arguments);
      };
      obj.onSuccess = function onSuccess() {
        const CommonActions = lib(closure_3[20]).CommonActions;
        lib.dispatch(CommonActions.navigate({ name: constants.ACCOUNT }));
      };
      arr = arr.push(constants.ACCOUNT_CONFIRM_PASSWORD, obj);
    }
  }, items1);
  closure_9 = callback;
  const items2 = [canEditDiscriminatorResult, callback];
  const items3 = [tmp20, callback, navigation];
  const callback1 = React.useCallback(() => {
    if (canEditDiscriminatorResult) {
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
        if (closure_8) {
          const obj = {};
          const merged = Object.assign(arg0);
          obj["onPress"] = closure_9;
          const intl = callback(closure_3[12]).intl;
          obj["label"] = intl.string(callback(closure_3[12]).t.R3BPH+);
          tmp = callback2(callback(closure_3[21]).HeaderTextButton, obj);
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
      obj = { type: arg1(dependencyMap[10]).NameValidationState.ERROR, message: fieldMessage };
      tmp30 = obj;
    }
    if (canEditDiscriminatorResult) {
      obj = { ref, containerStyle: tmp.discriminator, keyboardType: "numeric", value: first1, onChange: tmp12[1], onSubmitEditing: callback, placeholder: "1337", returnKeyType: "done", autoCapitalize: "none", isClearable: true, leadingText: "#", maxLength: 4 };
      obj1 = obj;
    } else {
      obj1 = { ref, containerStyle: tmp.discriminator, value: `#${tmp13}`, isClearable: false, isDisabled: true };
    }
    const obj2 = { style: tmp.background };
    const items4 = [callback2(importDefault(dependencyMap[23]), {}), ];
    obj3 = { style: tmp.container };
    const obj4 = {};
    const tmp33 = callback2;
    const tmp33Result = callback2(arg1(dependencyMap[22]).TextInput, obj1);
    const tmp38 = tmp20;
    const intl = arg1(dependencyMap[12]).intl;
    obj4.children = intl.string(arg1(dependencyMap[12]).t.IEpCBQ);
    const items5 = [callback2(importDefault(dependencyMap[24]), obj4), , ];
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
    const intl2 = arg1(dependencyMap[12]).intl;
    obj6.placeholder = intl2.string(arg1(dependencyMap[12]).t.IEpCBQ);
    let str12 = "done";
    if (canEditDiscriminatorResult) {
      str12 = "next";
    }
    obj6.returnKeyType = str12;
    obj6.autoCapitalize = "none";
    obj6.autoFocus = true;
    const items6 = [callback2(arg1(dependencyMap[22]).TextInput, obj6), , ];
    let tmp47 = !stateFromStores.hasUniqueUsername();
    if (tmp47) {
      const obj7 = { style: tmp.divider };
      const obj8 = { style: tmp.dividerInner };
      obj7.children = callback2(ref, obj8);
      tmp47 = callback2(ref, obj7);
    }
    items6[1] = tmp47;
    const tmp44 = importDefault(dependencyMap[24]);
    const tmp46 = callback2;
    items6[2] = !stateFromStores.hasUniqueUsername() && tmp33Result;
    obj5.children = items6;
    items5[1] = closure_12(ref, obj5);
    const obj9 = { usernameStatus: tmp30, showHint: stateFromStores.hasUniqueUsername() };
    items5[2] = callback2(UsernameStatusMessage, obj9);
    obj3.children = items5;
    items4[1] = closure_12(ref, obj3);
    obj2.children = items4;
    return closure_12(tmp38, obj2);
  }
  const tmp14 = callback(React.useState(null), 2);
};
