// Module ID: 15576
// Function ID: 15577
// Name: AccountSwitcherListItem
// Dependencies: [19, 17, 1386, 4679, 1372, 11906, 21, 4836, 504, 4792, 576, 4787, 4832, 1115, 5435, 4548, 1177, 4678, 2]
// Exports: default

// Module 15576 (AccountSwitcherListItem)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import react_native from "react-native" /* 4548 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import MultiAccountStore from "MultiAccountStore" /* 11906 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import UserRecord from "UserRecord" /* 1386 */;
import StreamerModeStore from "StreamerModeStore" /* 4679 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c3;
let c9;
let closure_4;
class AccountStatusIcon {
  constructor(user) {
    let currentUser;
    let tmp6;
    user = user.user;
    const items = [UserStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    let id1;
    const id = user.id;
    if (stateFromStores != null) {
      id1 = stateFromStores.id;
    }
    if (id === id1) {
      const obj2 = { color: nativeDefault.colors.TEXT_BRAND };
      const CircleCheckIcon = tmp(4792).CircleCheckIcon;
      tmp6 = React4(CircleCheckIcon, obj2);
    } else {
      tmp6 = null;
      if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
        const obj3 = { color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL };
        const CircleInformationIcon = tmp(4787).CircleInformationIcon;
        tmp6 = React4(CircleInformationIcon, obj3);
      }
    }
    return tmp6;
  }
}
({ Pressable: c3, View: closure_4 } = react_native2);
const MultiAccountTokenStatus = MultiAccountStore.MultiAccountTokenStatus;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({ accountListTag: { marginLeft: 12, flex: 1 }, tagContainer: { display: "flex", flexDirection: "row" }, accountSwitcherListItem: { display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingVertical: 8, paddingHorizontal: 16 }, username: { flexShrink: 1 }, accountInfo: { flex: 1, minWidth: "30%", display: "flex", flexDirection: "row", alignItems: "center" } });
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitcherListItem.tsx");

export default function AccountSwitcherListItem(arg0) {
  let currentUser;
  let delayLongPress;
  let getUserTag;
  let intl;
  let intl3;
  let items2;
  let items3;
  let items4;
  let items5;
  let leading;
  let obj13;
  let onPressUser;
  let showActiveAccountLabel;
  let sortHandlers;
  let stringResult;
  let tmp8;
  let trailing;
  let user;
  ({ user, onPressUser, showActiveAccountLabel } = arg0);
  if (showActiveAccountLabel === undefined) {
    showActiveAccountLabel = false;
  }
  ({ sortHandlers, trailing } = arg0);
  ({ delayLongPress, leading } = arg0);
  const tmp = closure_11();
  const items = [StreamerModeStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation);
  const items1 = [UserStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let id1;
  const id = user.id;
  if (stateFromStores1 != null) {
    id1 = stateFromStores1.id;
  }
  const obj3 = new UserRecord(user);
  if (id === id1) {
    let PressableOpacity;
    if (showActiveAccountLabel) {
      const obj4 = { variant: "text-sm/semibold", color: "text-brand", children: intl.string(intl4.t.seV8yt) };
      const Text = tmp2(4832).Text;
      intl = tmp2(1115).intl;
      tmp8 = React4(Text, obj4);
    }
    if (null == onPressUser) {
      PressableOpacity = _false;
    } else {
      PressableOpacity = tmp2(5435).PressableOpacity;
    }
    const obj5 = { selected: id === id1 };
    const tmp2Result = react_native;
    const radioA11yNative = tmp2Result.useRadioA11yNative(obj5);
    const obj6 = { accessibilityRole: null, accessibilityState: null, accessibilityHint: stringResult, style: tmp.accountSwitcherListItem, delayLongPress, onPress: onPressUser, children: items2 };
    ({ accessibilityRole: obj7.accessibilityRole, accessibilityState: obj7.accessibilityState } = radioA11yNative);
    stringResult = undefined;
    if (id !== id1) {
      const intl2 = tmp2(1115).intl;
      stringResult = intl2.string(tmp2(1115).t.wY4y0R);
    }
    const merged = Object.assign(sortHandlers);
    items2 = [leading, , ];
    const obj8 = { style: tmp.accountInfo, children: items3 };
    const obj9 = { user: obj3, guildId: "a" };
    items3 = [React4(native.Avatar, obj9), ];
    const obj10 = { style: tmp.accountListTag, children: items5 };
    const obj11 = { style: tmp.tagContainer, children: items4 };
    const obj12 = { variant: "text-md/semibold", color: "text-default", style: tmp.username, lineClamp: 1, children: getUserTag(obj3, obj13) };
    const Text2 = tmp2(4832).Text;
    let str = "always";
    getUserTag = UserUtilsDefault.getUserTag;
    UserUtilsDefault;
    if (stateFromStores) {
      str = "never";
    }
    obj13 = { mode: "username", identifiable: str };
    items4 = [React4(Text2, obj12), ];
    let tmp18Result = !stateFromStores && !obj3.hasUniqueUsername();
    if (tmp18Result) {
      const _HermesInternal = HermesInternal;
      const obj14 = { variant: "text-md/normal", color: "text-muted", children: "#" + obj3.discriminator };
      const Text3 = tmp2(4832).Text;
      tmp18Result = tmp18(Text3, obj14);
    }
    items4[1] = tmp18Result;
    items5 = [authStore(React3, obj11), tmp8];
    items3[1] = authStore(React3, obj10);
    items2[1] = authStore(React3, obj8);
    if (undefined === trailing) {
      const obj15 = { user };
      trailing = tmp18(AccountStatusIcon, obj15);
    }
    items2[2] = trailing;
    return authStore(PressableOpacity, obj6, user.id);
  }
  tmp8 = null;
  if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
    const obj16 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: intl3.string(intl4.t.tYX2ps) };
    const Text4 = tmp2(4832).Text;
    intl3 = tmp2(1115).intl;
    tmp8 = React4(Text4, obj16);
  }
};
export { AccountStatusIcon };
