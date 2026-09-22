// Module ID: 16294
// Function ID: 16295
// Name: AccountSwitcherListItem
// Dependencies: [19, 17, 1386, 4602, 1372, 12671, 21, 4757, 504, 4716, 576, 4711, 4753, 1115, 5341, 4475, 1177, 4601, 2]
// Exports: default

// Module 16294 (AccountSwitcherListItem)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import UserUtilsDefault from "UserUtils" /* 4601 */;
import noop from "module_19" /* 19 */;
import UserRecord from "UserRecord" /* 1386 */;
import StreamerModeStore from "StreamerModeStore" /* 4602 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
class AccountStatusIcon {
  constructor(arg0) {
    user = global.user;
    tmp = closure_0;
    tmp2 = closure_2;
    obj = closure_0(closure_2[8]);
    items = [];
    items[0] = closure_7;
    stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
    id = undefined;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (user.id === id) {
      tmp9 = jsx;
      obj1 = { color: null };
      tmp10 = closure_1;
      obj1.color = closure_1(tmp2[10]).colors.TEXT_BRAND;
      tmp6 = jsx(tmp(tmp2[9]).CircleCheckIcon, obj1);
    } else {
      tmp5 = MultiAccountTokenStatus;
      tmp6 = null;
      if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
        tmp7 = jsx;
        obj4 = { color: null };
        tmp8 = closure_1;
        obj4.color = closure_1(tmp2[10]).colors.ICON_FEEDBACK_CRITICAL;
        tmp6 = jsx(tmp(tmp2[11]).CircleInformationIcon, obj4);
      }
    }
    return tmp6;
  }
}
get_ActivityIndicator = fn(17);
({ Pressable: c3, View: closure_4 } = get_ActivityIndicator);
const MultiAccountTokenStatus = fn(12671).MultiAccountTokenStatus;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4757);
let closure_11 = createStyles.createStyles({ accountListTag: { marginLeft: 12, flex: 1 }, tagContainer: { display: "flex", flexDirection: "row" }, accountSwitcherListItem: { display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingVertical: 8, paddingHorizontal: 16 }, username: { flexShrink: 1 }, accountInfo: { flex: 1, minWidth: "30%", display: "flex", flexDirection: "row", alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitcherListItem.tsx");

export default function AccountSwitcherListItem(arg0) {
  ({ user, onPressUser, showActiveAccountLabel } = arg0);
  if (showActiveAccountLabel === undefined) {
    showActiveAccountLabel = false;
  }
  ({ sortHandlers, trailing } = arg0);
  ({ delayLongPress, leading } = arg0);
  const tmp = closure_11();
  const items = [StreamerModeStore];
  const stateFromStores = initialize.useStateFromStores(items, () => StreamerModeStore.hidePersonalInformation);
  const items1 = [UserStore];
  const stateFromStores1 = initialize.useStateFromStores(items1, () => currentUser.getCurrentUser());
  let id;
  if (stateFromStores1 != null) {
    id = stateFromStores1.id;
  }
  const obj3 = new UserRecord(user);
  if (user.id === id) {
    if (showActiveAccountLabel) {
      const obj4 = { variant: "text-sm/semibold", color: "text-brand", children: null };
      const intl = tmp2(1115).intl;
      obj4.children = intl.string(tmp2(1115).t.seV8yt);
      let tmp8 = React7(tmp2(4753).Text, obj4);
    }
    if (null == onPressUser) {
      let PressableOpacity = React3;
    } else {
      PressableOpacity = tmp2(5341).PressableOpacity;
    }
    const obj5 = { selected: tmp7 };
    const radioA11yNative = tmp2(4475).useRadioA11yNative(obj5);
    const obj6 = { accessibilityRole: null, accessibilityState: null, accessibilityHint: null, style: null, delayLongPress: null, onPress: null };
    ({ accessibilityRole: obj7.accessibilityRole, accessibilityState: obj7.accessibilityState } = radioA11yNative);
    let stringResult;
    if (!tmp7) {
      const intl2 = tmp2(1115).intl;
      stringResult = intl2.string(tmp2(1115).t.wY4y0R);
    }
    obj6.accessibilityHint = stringResult;
    obj6.style = tmp.accountSwitcherListItem;
    obj6.delayLongPress = delayLongPress;
    obj6.onPress = onPressUser;
    const merged = Object.assign(sortHandlers);
    const items2 = [leading, , ];
    const obj8 = { style: tmp.accountInfo, children: null };
    const obj9 = { user: obj3, guildId: "Array" };
    const items3 = [React7(tmp2(1177).Avatar, obj9), ];
    const obj10 = { style: tmp.accountListTag, children: null };
    const obj11 = { style: tmp.tagContainer, children: null };
    const obj12 = { variant: "text-md/semibold", color: "text-default", style: tmp.username, lineClamp: 1, children: null };
    const tmp2Result = tmp2(4475);
    let str = "always";
    if (stateFromStores) {
      str = "never";
    }
    const obj14 = { mode: "username", identifiable: str };
    obj12.children = UserUtilsDefault.getUserTag(obj3, obj14);
    const items4 = [React7(tmp2(4753).Text, obj12), ];
    let tmp18Result = !stateFromStores;
    if (!stateFromStores) {
      tmp18Result = !obj3.hasUniqueUsername();
    }
    if (tmp18Result) {
      const obj15 = { variant: "text-md/normal", color: "text-muted", children: null };
      const _HermesInternal = HermesInternal;
      obj15.children = "#" + obj3.discriminator;
      tmp18Result = tmp18(tmp2(4753).Text, obj15);
    }
    items4[1] = tmp18Result;
    obj11.children = items4;
    const items5 = [closure_1_10(React4, obj11), tmp8];
    obj10.children = items5;
    items3[1] = closure_1_10(React4, obj10);
    obj8.children = items3;
    items2[1] = closure_1_10(React4, obj8);
    if (undefined === trailing) {
      const obj16 = { user };
      trailing = tmp18(AccountStatusIcon, obj16);
    }
    items2[2] = trailing;
    obj6.children = items2;
    return closure_1_10(PressableOpacity, obj6, user.id);
  }
  tmp8 = null;
  if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
    const obj17 = { variant: "text-sm/semibold", color: "text-feedback-critical", children: null };
    const intl3 = tmp2(1115).intl;
    obj17.children = intl3.string(tmp2(1115).t.tYX2ps);
    tmp8 = React7(tmp2(4753).Text, obj17);
  }
};
export { AccountStatusIcon };
