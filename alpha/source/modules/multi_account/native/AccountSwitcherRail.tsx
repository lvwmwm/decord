// Module ID: 19166
// Function ID: 19167
// Name: AccountSwitcherRail
// Dependencies: [19, 17, 1404, 5195, 1385, 14210, 15805, 14211, 1072, 21, 575, 5140, 5200, 5194, 1113, 5842, 1411, 7366, 5859, 1627, 5724, 18316, 504, 18787, 1252, 7412, 14214, 5845, 7633, 9996, 2]

// Module 19166 (AccountSwitcherRail)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import FastImageDefault from "FastImage" /* 5842 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7412 */;
import SettingsIcon2 from "SettingsIcon" /* 7633 */;
import MultiAccountStore2 from "MultiAccountStore" /* 14210 */;
import MultiAccountActionCreatorsAll from "MultiAccountActionCreators" /* 14214 */;
import openManageAccountsModalDefault from "openManageAccountsModal" /* 18787 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserRecord from "UserRecord" /* 1404 */;
import StreamerModeStore from "StreamerModeStore" /* 5195 */;
import UserStore from "UserStore" /* 1385 */;
import MultiAccountSwitchStore from "MultiAccountSwitchStore" /* 15805 */;
import Constants_mod from "Constants" /* 14211 */;
import Constants_mod2 from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const MultiAccountStore = MultiAccountStore2;
let _require, currentUser, dependencyMap;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let hasOwnProperty;
let map1;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let size1;
let size2;
let size3;
let size4;
function RailButton(arg0) {
  let closure_0 = closure_22();
  const obj = {
    style(pressed) {
      pressed = pressed.pressed;
      const items = [closure_0.button, ];
      if (pressed) {
        pressed = closure_0.pressed;
      }
      items[1] = pressed;
      return items;
    }
  };
  const merged = Object.assign(arg0);
  return closure_17(hasOwnProperty, obj);
}
function AccountButton(user) {
  let accessibilityRole;
  let accessibilityState;
  let closure_3;
  let disabled;
  let getUserTag;
  let str;
  let stringResult;
  user = user.user;
  const selected = user.selected;
  ({ disabled, onSelect: importAll } = user);
  const hidePersonalInformation = user.hidePersonalInformation;
  dependencyMap = closure_22();
  let tmp = user;
  let tmp2 = dependencyMap;
  let obj = user(5200);
  const radioA11yNative = obj.useRadioA11yNative({ selected, disabled });
  ({ accessibilityRole, accessibilityState } = radioA11yNative);
  const tmp4 = new UserRecord(user);
  const tmp5 = user.tokenStatus === MultiAccountTokenStatus.INVALID;
  let closure_4 = tmp5;
  let obj2 = {
    accessibilityRole,
    accessibilityState,
    accessibilityLabel: getUserTag(tmp4, { mode: "username", identifiable: str }),
    accessibilityHint: stringResult,
    disabled,
    onPress() {
      return importAll(user);
    },
    children(pressed) {
      let obj2;
      let tmp3Result;
      let tmp3Result2;
      const items = [, , ];
      ({ circle: arr[0], accountRing: arr[1] } = closure_3);
      let activeRing = selected;
      const tmp = closure_19;
      const tmp2 = authStore5;
      if (!selected) {
        activeRing = pressed.pressed;
      }
      if (activeRing) {
        activeRing = tmp5.activeRing;
      }
      items[2] = activeRing;
      const children = [closure_17(metroRequire, { style: items, pointerEvents: "none" }), , ];
      const obj = { accessible: false, source: obj2.getUserAvatarSource(user, false, diff), style: closure_3.avatar, resizeMode: "cover", fadeDuration: 0 };
      const tmp9 = FastImageDefault;
      obj2 = AvatarUtilsDefault;
      children[1] = closure_17(tmp9, obj);
      if (selected) {
        const items2 = [closure_3.indicator, ];
        const obj3 = { style: items2, pointerEvents: "none", children: tmp3Result };
        const tmp12 = !selected && closure_3.invalidIndicator;
        items2[1] = tmp12;
        if (selected) {
          const obj4 = { size: "xxs", color: nativeDefault.colors.ICON_OVERLAY_LIGHT, accessible: false };
          const CheckmarkSmallIcon = tmp13(7366).CheckmarkSmallIcon;
          tmp3Result = tmp3(CheckmarkSmallIcon, obj4);
        } else {
          const obj5 = { size: "xxs", color: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, accessible: false };
          const CircleInformationIcon = tmp13(5859).CircleInformationIcon;
          tmp3Result = tmp3(CircleInformationIcon, obj5);
        }
        tmp3Result2 = tmp3(tmp4, obj3);
      } else {
        tmp3Result2 = null;
      }
      children[2] = tmp3Result2;
      return tmp(tmp2, { children });
    }
  };
  str = "always";
  getUserTag = selected(5194).getUserTag;
  const tmp6 = closure_17;
  const tmp7 = RailButton;
  const tmp8 = selected(5194);
  if (hidePersonalInformation) {
    str = "never";
  }
  if (tmp5) {
    const intl2 = tmp(1113).intl;
    stringResult = intl2.string(tmp(1113).t.tYX2ps);
  } else if (!selected) {
    const intl = tmp(1113).intl;
    stringResult = intl.string(tmp(1113).t.wY4y0R);
  }
  return tmp6(tmp7, obj2);
}
function AccountSwitcherRailContent() {
  let bottom;
  let constants22;
  let hidePersonalInformation;
  let intl;
  let intl2;
  let intl3;
  let isSwitchingAccount;
  let items7;
  let manageIcon;
  let multiAccountUsers;
  let right;
  let stateFromStores1;
  function handleSelect(id) {
    if (id.id !== stateFromStores) {
      if (!MultiAccountSwitchStore.getIsSwitchingAccount()) {
        if (id.tokenStatus === MultiAccountTokenStatus.INVALID) {
          openManageAccountsModalDefault(constants22.LOGIN);
          const obj3 = AnalyticsUtilsDefault;
          obj3.track(constants2.LOGIN_VIEWED, { source: "account_switcher_rail_invalid_user" });
        } else {
          const obj = { location: AnalyticsLocationDefault.ACCOUNT_SWITCHER_RAIL };
          const track = AnalyticsUtilsDefault.track;
          const MULTI_ACCOUNT_SWITCH_ATTEMPT = constants2.MULTI_ACCOUNT_SWITCH_ATTEMPT;
          AnalyticsUtilsDefault;
          track(MULTI_ACCOUNT_SWITCH_ATTEMPT, obj);
          const obj2 = MultiAccountActionCreatorsAll;
          obj2.switchAccount(id.id, undefined, constants.ACCOUNT_SWITCHER_RAIL);
        }
      }
    }
  }
  const tmp2 = closure_22();
  _require = tmp2;
  const tmp4 = multiAccountUsers(stateFromStores1[19])();
  ({ right, bottom } = tmp4);
  let obj = require("useToken");
  const token = obj.useToken(multiAccountUsers(stateFromStores1[10]).modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  let obj2 = require("useToken");
  const token1 = obj2.useToken(multiAccountUsers(stateFromStores1[10]).modules.mobile.CHAT_INPUT_FLOATING_CONTENT_PADDING_VERTICAL);
  let obj3 = require("useToken");
  const token2 = obj3.useToken(multiAccountUsers(stateFromStores1[10]).modules.mobile.CHAT_INPUT_FLOATING_ACCESSORY_BORDER_WIDTH);
  const obj4 = require("useToken");
  const token3 = obj4.useToken(multiAccountUsers(stateFromStores1[10]).modules.mobile.CHAT_INPUT_SEND_BUTTON_HEIGHT);
  const tmp10 = closure_21(right, Math.max(bottom, token) + token1 + token2 + (token3 - 44) / 2);
  const obj5 = require("useMultiAccount");
  multiAccountUsers = obj5.useMultiAccountUsers().multiAccountUsers;
  let items = [UserStore];
  const obj6 = require("get initialized");
  const stateFromStores = obj6.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    return id;
  });
  let items1 = [MultiAccountSwitchStore];
  const obj7 = require("get initialized");
  stateFromStores1 = obj7.useStateFromStores(items1, () => isSwitchingAccount.getIsSwitchingAccount());
  const items2 = [StreamerModeStore];
  const obj8 = require("get initialized");
  react = obj8.useStateFromStores(items2, () => StreamerModeStore.hidePersonalInformation);
  const items3 = [multiAccountUsers, stateFromStores];
  const memo = react.useMemo(() => {
    const substr = multiAccountUsers.slice(0, 5);
    const arr = multiAccountUsers;
    if (null != stateFromStores) {
      if (!substr.some((id) => id.id === stateFromStores)) {
        const found = arr.find((id) => id.id === stateFromStores);
        if (null != found) {
          substr[substr.length - 1] = found;
        }
      }
    }
    return substr;
  }, items3);
  if (null != stateFromStores) {
    if (memo.length >= 2) {
      let items5;
      if (multiAccountUsers.length < closure_13) {
        const obj9 = {
          label: intl.string(require("intl").t.bPP34Q),
          IconComponent: require("UserPlusIcon").UserPlusIcon,
          action() {
                  multiAccountUsers(stateFromStores1[23])(constants2.LOGIN);
                  const obj = multiAccountUsers(stateFromStores1[24]);
                  obj.track(constants.LOGIN_VIEWED, { source: "account_switcher_rail_add_account" });
                }
        };
        intl = tmp5(tmp3[14]).intl;
        const items4 = [obj9];
        items5 = items4;
      } else {
        items5 = [];
      }
      const items6 = [];
      const obj10 = {
        label: intl2.string(require("intl").t.WbFpq4),
        IconComponent: require("SettingsIcon").SettingsIcon,
        action() {
              return multiAccountUsers(stateFromStores1[23])();
            }
      };
      const arraySpreadResult = HermesBuiltin.arraySpread(items6, items5, 0);
      intl2 = tmp5(tmp3[14]).intl;
      items6[arraySpreadResult] = obj10;
      const obj11 = { style: tmp10.gutter, pointerEvents: "box-none", children: items7 };
      const obj12 = {
        style: tmp2.accounts,
        accessibilityRole: "radiogroup",
        accessibilityLabel: intl3.string(require("intl").t.oMNyYN),
        children: memo.map((user) => {
              const obj = { user, selected: user.id === stateFromStores, disabled: stateFromStores1, hidePersonalInformation, onSelect: handleSelect };
              return closure_17(AccountButton, obj, user.id);
            })
      };
      intl3 = tmp5(tmp3[14]).intl;
      items7 = [closure_17(closure_6, obj12), ];
      const obj13 = {
        items: items6,
        triggerOnTap: true,
        align: "left",
        enabled: !stateFromStores1,
        children(arg0) {
              let intl;
              let items;
              let items1;
              const obj = { disabled: stateFromStores1, accessibilityRole: "button", accessibilityLabel: intl.string(intl4.t.WbFpq4), children: items1 };
              const merged = Object.assign(arg0);
              intl = intl4.intl;
              const obj2 = { style: items, pointerEvents: "none" };
              items = [, ];
              ({ circle: arr[0], neutralCircle: arr[1] } = manageIcon);
              items1 = [closure_17(metroRequire, obj2), ];
              const obj3 = { size: "custom", style: manageIcon.manageIcon, color: nativeDefault.colors.INTERACTIVE_ICON_DEFAULT, accessible: false };
              const SettingsIcon = SettingsIcon2.SettingsIcon;
              items1[1] = closure_17(SettingsIcon, obj3);
              return closure_19(RailButton, obj);
            }
      };
      items7[1] = closure_17(require("ContextMenu").ContextMenu, obj13);
      return closure_19(closure_6, obj11);
    }
  }
  return null;
}
let react = react_mod;
({ Pressable: hasOwnProperty, View: metroRequire } = react_native);
const MultiAccountTokenStatus = MultiAccountStore2.MultiAccountTokenStatus;
let Constants = Constants_mod2;
({ MAX_ACCOUNTS: map1, MultiAccountSwitchLocation: closure_14 } = Constants);
Constants = Constants_mod2;
({ AnalyticEvents: closure_15, AuthStates: closure_16 } = Constants);
({ jsx: closure_17, Fragment: closure_18, jsxs: closure_19 } = Fragment);
const diff = 41 - 2 * nativeDefault.space.PX_4;
let createStyles = createStyles_mod;
let closure_21 = createStyles.createStyles((width, bottom) => {
  let rect;
  const obj = { gutter: rect };
  rect = { position: "absolute", right: nativeDefault.space.PX_6, bottom, width, alignItems: "center" };
  return obj;
});
createStyles = createStyles_mod;
let obj = { accounts: obj2, button: size, pressed: obj3, avatar: size1, circle: size2, neutralCircle: obj4, accountRing: obj5, activeRing: obj6, indicator: size3, invalidIndicator: obj7, manageIcon: size4 };
obj2 = { gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { width: 44, height: 44, alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
size1 = { width: diff, height: diff, borderRadius: nativeDefault.radii.round };
size2 = { position: "absolute", width: 41, height: 41, borderRadius: nativeDefault.radii.round };
obj4 = { borderWidth: nativeDefault.modules.mobile.CHAT_INPUT_PILL_BORDER_WIDTH, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj5 = { borderWidth: 2, borderColor: nativeDefault.colors.MOBILE_FLOATING_ACCESSORY_BACKGROUND };
obj6 = { borderColor: nativeDefault.colors.TEXT_BRAND };
size3 = { position: "absolute", bottom: 0, right: 0, width: nativeDefault.space.PX_16, height: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center", borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
size4 = { width: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE, height: nativeDefault.modules.mobile.CHAT_INPUT_ACTION_ICON_PIXEL_SIZE };
let closure_22 = createStyles(obj);
const memoResult = react.memo(function AccountSwitcherRail() {
  let canUseMultiAccountMobile;
  const items = [MultiAccountStore];
  let tmp = null;
  const obj = get_initialized;
  if (obj.useStateFromStores(items, () => canUseMultiAccountMobile.getCanUseMultiAccountMobile())) {
    tmp = closure_17(AccountSwitcherRailContent, {});
  }
  return tmp;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/multi_account/native/AccountSwitcherRail.tsx");

export default memoResult;
