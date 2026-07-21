// Module ID: 14611
// Function ID: 110178
// Name: AccountStatusIcon
// Dependencies: []
// Exports: default

// Module 14611 (AccountStatusIcon)
class AccountStatusIcon {
  constructor(arg0) {
    user = global.user;
    obj = arg1(dependencyMap[8]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    id = undefined;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    if (user.id === id) {
      tmp9 = jsx;
      tmp10 = arg1;
      tmp11 = dependencyMap;
      num3 = 9;
      obj = {};
      tmp12 = importDefault;
      num4 = 10;
      obj.color = importDefault(dependencyMap[10]).colors.TEXT_BRAND;
      tmp4 = jsx(arg1(dependencyMap[9]).CircleCheckIcon, obj);
    } else {
      tmp3 = MultiAccountTokenStatus;
      tmp4 = null;
      if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
        tmp5 = jsx;
        tmp6 = arg1;
        tmp7 = dependencyMap;
        num = 11;
        obj1 = {};
        tmp8 = importDefault;
        num2 = 10;
        obj1.color = importDefault(dependencyMap[10]).colors.ICON_FEEDBACK_CRITICAL;
        tmp4 = jsx(arg1(dependencyMap[11]).CircleInformationIcon, obj1);
      }
    }
    return tmp4;
  }
}
importAll(dependencyMap[0]);
({ Pressable: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const MultiAccountTokenStatus = arg1(dependencyMap[5]).MultiAccountTokenStatus;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
let closure_11 = arg1(dependencyMap[7]).createStyles({ accountListTag: { shrink: null, disabled: 0 }, tagContainer: {}, accountSwitcherListItem: {}, username: { flexShrink: 1 }, accountInfo: {} });
const obj = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/multi_account/native/AccountSwitcherListItem.tsx");

export default function AccountSwitcherListItem(arg0) {
  let delayLongPress;
  let leading;
  let onPressUser;
  let showActiveAccountLabel;
  let sortHandlers;
  let trailing;
  let user;
  ({ user, onPressUser, showActiveAccountLabel } = arg0);
  if (showActiveAccountLabel === undefined) {
    showActiveAccountLabel = false;
  }
  ({ sortHandlers, trailing } = arg0);
  ({ delayLongPress, leading } = arg0);
  const tmp = callback2();
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => obj.hidePersonalInformation);
  let obj1 = arg1(dependencyMap[8]);
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let id;
  if (null != stateFromStores1) {
    id = stateFromStores1.id;
  }
  let obj2 = new closure_5(user);
  if (user.id === id) {
    if (showActiveAccountLabel) {
      obj = {};
      const intl = arg1(dependencyMap[13]).intl;
      obj.children = intl.string(arg1(dependencyMap[13]).t.seV8yt);
      let tmp6 = callback(arg1(dependencyMap[12]).Text, obj);
    }
    if (null == onPressUser) {
      let PressableOpacity = closure_3;
    } else {
      PressableOpacity = arg1(dependencyMap[14]).PressableOpacity;
    }
    let obj4 = arg1(dependencyMap[15]);
    obj = { selected: tmp5 };
    const radioA11yNative = obj4.useRadioA11yNative(obj);
    obj1 = {};
    ({ accessibilityRole: obj7.accessibilityRole, accessibilityState: obj7.accessibilityState } = radioA11yNative);
    let stringResult;
    if (!tmp5) {
      const intl2 = arg1(dependencyMap[13]).intl;
      stringResult = intl2.string(arg1(dependencyMap[13]).t.wY4y0R);
    }
    obj1.accessibilityHint = stringResult;
    obj1.style = tmp.accountSwitcherListItem;
    obj1.delayLongPress = delayLongPress;
    obj1.onPress = onPressUser;
    const merged = Object.assign(sortHandlers);
    const items2 = [leading, , ];
    obj2 = { style: tmp.accountInfo };
    const obj3 = { user: obj2, guildId: undefined };
    const items3 = [callback(arg1(dependencyMap[16]).Avatar, obj3), ];
    obj4 = { style: tmp.accountListTag };
    const obj5 = { style: tmp.tagContainer };
    const obj6 = { style: tmp.username };
    const obj7 = { mode: "username" };
    let str2 = "always";
    if (stateFromStores) {
      str2 = "never";
    }
    obj7.identifiable = str2;
    obj6.children = importDefault(dependencyMap[17]).getUserTag(obj2, obj7);
    const items4 = [callback(arg1(dependencyMap[12]).Text, obj6), ];
    let tmp29 = !stateFromStores && !obj2.hasUniqueUsername();
    if (tmp29) {
      const obj8 = {};
      const _HermesInternal = HermesInternal;
      obj8.children = "#" + obj2.discriminator;
      tmp29 = callback(arg1(dependencyMap[12]).Text, obj8);
    }
    items4[1] = tmp29;
    obj5.children = items4;
    const items5 = [closure_10(closure_4, obj5), tmp6];
    obj4.children = items5;
    items3[1] = closure_10(closure_4, obj4);
    obj2.children = items3;
    items2[1] = closure_10(closure_4, obj2);
    if (undefined === trailing) {
      const obj9 = { user };
      trailing = callback(AccountStatusIcon, obj9);
    }
    items2[2] = trailing;
    obj1["children"] = items2;
    return closure_10(PressableOpacity, obj1, user.id);
  }
  tmp6 = null;
  if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
    const obj10 = {};
    const intl3 = arg1(dependencyMap[13]).intl;
    obj10.children = intl3.string(arg1(dependencyMap[13]).t.tYX2ps);
    tmp6 = callback(arg1(dependencyMap[12]).Text, obj10);
  }
};
export { AccountStatusIcon };
