// Module ID: 14737
// Function ID: 112417
// Name: AccountStatusIcon
// Dependencies: [31, 27, 1857, 3970, 1849, 11452, 33, 4130, 566, 4091, 689, 4086, 4126, 1212, 4660, 3848, 1273, 3969, 2]
// Exports: default

// Module 14737 (AccountStatusIcon)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { MultiAccountTokenStatus } from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_3;
let closure_4;
let closure_9;
const require = arg1;
class AccountStatusIcon {
  constructor(arg0) {
    user = global.user;
    obj = require("initialize");
    items = [];
    items[0] = c7;
    stateFromStores = obj.useStateFromStores(items, () => outer1_7.getCurrentUser());
    id = undefined;
    if (null != stateFromStores) {
      id = stateFromStores.id;
    }
    if (user.id === id) {
      tmp9 = jsx;
      tmp10 = closure_0;
      tmp11 = closure_2;
      num3 = 9;
      obj = {};
      tmp12 = closure_1;
      num4 = 10;
      obj.color = require("_createForOfIteratorHelperLoose").colors.TEXT_BRAND;
      tmp4 = jsx(require("CircleCheckIcon").CircleCheckIcon, obj);
    } else {
      tmp3 = MultiAccountTokenStatus;
      tmp4 = null;
      if (user.tokenStatus === MultiAccountTokenStatus.INVALID) {
        tmp5 = jsx;
        tmp6 = closure_0;
        tmp7 = closure_2;
        num = 11;
        obj1 = {};
        tmp8 = closure_1;
        num2 = 10;
        obj1.color = require("_createForOfIteratorHelperLoose").colors.ICON_FEEDBACK_CRITICAL;
        tmp4 = jsx(require("CircleInformationIcon").CircleInformationIcon, obj1);
      }
    }
    return tmp4;
  }
}
({ Pressable: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles({ accountListTag: { marginLeft: 12, flex: 1 }, tagContainer: { display: "flex", flexDirection: "row" }, accountSwitcherListItem: { display: "flex", flexDirection: "row", justifyContent: "flex-start", alignItems: "center", paddingVertical: 8, paddingHorizontal: 16 }, username: { flexShrink: 1 }, accountInfo: { flex: 1, minWidth: "30%", display: "flex", flexDirection: "row", alignItems: "center" } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/multi_account/native/AccountSwitcherListItem.tsx");

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
  let obj = require(566) /* initialize */;
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.hidePersonalInformation);
  let obj1 = require(566) /* initialize */;
  const items1 = [closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_7.getCurrentUser());
  let id;
  if (null != stateFromStores1) {
    id = stateFromStores1.id;
  }
  let obj2 = new _isNativeReflectConstruct(user);
  if (user.id === id) {
    if (showActiveAccountLabel) {
      obj = { variant: "text-sm/semibold", color: "text-brand" };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj.children = intl.string(require(1212) /* getSystemLocale */.t.seV8yt);
      let tmp6 = callback(require(4126) /* Text */.Text, obj);
    }
    if (null == onPressUser) {
      let PressableOpacity = closure_3;
    } else {
      PressableOpacity = require(4660) /* PressableBase */.PressableOpacity;
    }
    let obj4 = require(3848) /* useCheckboxA11yNative */;
    obj = { selected: tmp5 };
    const radioA11yNative = obj4.useRadioA11yNative(obj);
    obj1 = {};
    ({ accessibilityRole: obj7.accessibilityRole, accessibilityState: obj7.accessibilityState } = radioA11yNative);
    let stringResult;
    if (!tmp5) {
      const intl2 = require(1212) /* getSystemLocale */.intl;
      stringResult = intl2.string(require(1212) /* getSystemLocale */.t.wY4y0R);
    }
    obj1.accessibilityHint = stringResult;
    obj1.style = tmp.accountSwitcherListItem;
    obj1.delayLongPress = delayLongPress;
    obj1.onPress = onPressUser;
    const merged = Object.assign(sortHandlers);
    const items2 = [leading, , ];
    obj2 = { style: tmp.accountInfo };
    const obj3 = { user: obj2, guildId: undefined };
    const items3 = [callback(require(1273) /* Button */.Avatar, obj3), ];
    obj4 = { style: tmp.accountListTag };
    const obj5 = { style: tmp.tagContainer };
    const obj6 = { variant: "text-md/semibold", color: "text-default", style: tmp.username, lineClamp: 1 };
    const obj7 = { mode: "username" };
    let str2 = "always";
    if (stateFromStores) {
      str2 = "never";
    }
    obj7.identifiable = str2;
    obj6.children = importDefault(3969).getUserTag(obj2, obj7);
    const items4 = [callback(require(4126) /* Text */.Text, obj6), ];
    let tmp29 = !stateFromStores && !obj2.hasUniqueUsername();
    if (tmp29) {
      const obj8 = { variant: "text-md/normal", color: "text-muted" };
      const _HermesInternal = HermesInternal;
      obj8.children = "#" + obj2.discriminator;
      tmp29 = callback(require(4126) /* Text */.Text, obj8);
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
    const obj10 = { variant: "text-sm/semibold", color: "text-feedback-critical" };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj10.children = intl3.string(require(1212) /* getSystemLocale */.t.tYX2ps);
    tmp6 = callback(require(4126) /* Text */.Text, obj10);
  }
};
export { AccountStatusIcon };
