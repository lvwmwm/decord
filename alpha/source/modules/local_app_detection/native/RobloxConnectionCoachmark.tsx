// Module ID: 19019
// Function ID: 19020
// Name: RobloxConnectionCoachmark
// Dependencies: [32, 19, 17, 6572, 1383, 15599, 1072, 4860, 21, 5014, 575, 5080, 1625, 5258, 5272, 7321, 7367, 6027, 5624, 1113, 5634, 14574, 9720, 7563, 5036, 6574, 1409, 1187, 8031, 504, 15600, 7347, 5044, 4847, 2]
// Exports: default, useShouldShowRobloxConnectionCoachmark

// Module 19019 (RobloxConnectionCoachmark)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import AvatarUtils from "AvatarUtils" /* 1409 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import themes from "themes" /* 5036 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5044 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import PlatformsDefault from "Platforms" /* 6574 */;
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 7347 */;
import openUserSettings from "openUserSettings" /* 7563 */;
import inlineStyles from "inlineStyles" /* 8031 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6572 */;
import UserStore from "UserStore" /* 1383 */;
import LocalAppDetectionStore from "LocalAppDetectionStore" /* 15599 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const inlineStylesDefault = inlineStyles;
let BottomSheet, dependencyMap;

let c10;
let c9;
let closure_14;
let map1;
let obj2;
let size;
let size1;
let tmp;
let unpackModuleId;
const authorizeConnectionDefault = tmp(9720);
function RobloxIcon(theme) {
  let Icon;
  let items;
  let obj4;
  theme = theme.theme;
  const tmp = closure_15();
  const obj = themes;
  const isThemeDarkResult = obj.isThemeDark(theme);
  let str = "white";
  const obj2 = PlatformsDefault;
  const value = obj2.get(constants2.ROBLOX);
  if (isThemeDarkResult) {
    str = "black";
  }
  const icon = value.icon;
  const obj3 = { style: items, children: map1(Icon, obj4) };
  items = [tmp.robloxIconContainer, { backgroundColor: str }];
  const tmp2Result = AvatarUtils;
  const source = tmp2Result.makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
  obj4 = { size: native.IconSizes.LARGE, source, disableColor: true };
  Icon = tmp2(1187).Icon;
  return map1(View, obj3);
}
class UnionIcon {
  constructor(theme) {
    let LinearGradient;
    let items;
    let items1;
    let obj3;
    theme = theme.theme;
    let str = "black";
    const obj = themes;
    if (obj.isThemeDark(theme)) {
      str = "white";
    }
    const id = react.useId();
    size = { width: 25, height: 4, viewBox: "0 0 25 4", id, children: items };
    items = [, ];
    const tmp4 = inlineStylesDefault;
    items[0] = map1(inlineStyles.Path, { fill: "url(#a)", d: "M1.7002 0.799805C2.36285 0.79991 2.90039 1.33732 2.90039 2C2.90029 2.66259 2.36278 3.20009 1.7002 3.2002C1.03752 3.2002 0.500106 2.66265 0.5 2C0.5 1.33726 1.03745 0.799805 1.7002 0.799805ZM8.90039 0.799805C9.56297 0.799989 10.0996 1.33737 10.0996 2C10.0995 2.66254 9.56291 3.20001 8.90039 3.2002C8.23771 3.2002 7.70029 2.66266 7.7002 2C7.7002 1.33726 8.23765 0.799805 8.90039 0.799805ZM16.0996 0.799805C16.7624 0.799805 17.2998 1.33726 17.2998 2C17.2997 2.66266 16.7623 3.2002 16.0996 3.2002C15.4371 3.19996 14.9005 2.66251 14.9004 2C14.9004 1.3374 15.4371 0.800042 16.0996 0.799805ZM23.2998 0.799805C23.9625 0.799805 24.5 1.33726 24.5 2C24.4999 2.66266 23.9625 3.2002 23.2998 3.2002C22.6372 3.20006 22.0997 2.66258 22.0996 2C22.0996 1.33734 22.6372 0.799936 23.2998 0.799805Z" });
    const obj2 = { children: authStore3(LinearGradient, obj3) };
    const Defs = tmp(8031).Defs;
    obj3 = { id: "a", x1: 0.5, y1: 2, x2: 24.5, y2: 2, gradientUnits: "userSpaceOnUse", children: items1 };
    LinearGradient = tmp(8031).LinearGradient;
    items1 = [map1(inlineStyles.Stop, { stopColor: str, stopOpacity: 0.3 }), map1(inlineStyles.Stop, { offset: 1, stopColor: str, stopOpacity: 0.7 })];
    items[1] = map1(Defs, obj2);
    return authStore3(tmp4, size);
  }
}
function UserIcon() {
  let currentUser;
  let items1;
  const tmp = closure_15();
  const items = [UserStore];
  const obj2 = { style: tmp.avatarContainer, children: items1 };
  const obj = get_initialized;
  const obj3 = { style: tmp.avatarInnerBorder };
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  items1 = [map1(View, obj3), ];
  const obj4 = { size: native.AvatarSizes.NORMAL, user: stateFromStores, guildId: "Array" };
  const Avatar = native.Avatar;
  items1[1] = map1(Avatar, obj4);
  return authStore3(View, obj2);
}
const View = react_native.View;
({ AnalyticsLocations: c9, PlatformTypes: c10, UserSettingsSections: unpackModuleId } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
let obj = { robloxIconContainer: size, content: obj2, text: { textAlign: "center" }, avatarContainer: { position: "relative" }, avatarInnerBorder: size1 };
size = { width: 40, height: 40, borderRadius: nativeDefault.radii.md, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
createStyles = createStyles.createStyles;
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
size1 = { zIndex: 1, position: "absolute", borderColor: nativeDefault.colors.BORDER_STRONG, borderRadius: nativeDefault.radii.round, borderWidth: 1, width: "100%", height: "100%" };
let closure_15 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/local_app_detection/native/RobloxConnectionCoachmark.tsx");

export default function RobloxConnectionActionSheet(markAsDismissed) {
  let BottomSheetTitleHeader;
  let Stack;
  let WindowLaunchIcon;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  let obj11;
  let obj3;
  let obj4;
  markAsDismissed = markAsDismissed.markAsDismissed;
  function handleCancel() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet();
    if (markAsDismissed != null) {
      tmp2(ContentDismissActionType.DISMISS);
    }
  }
  let tmp = closure_15();
  let obj = markAsDismissed(5080);
  const theme = obj.useThemeContext().theme;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj2 = {
    startExpanded: true,
    contentStyles: tmp.content,
    header: closure_13(BottomSheetTitleHeader, obj3),
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.DISMISS);
    },
    children: closure_14(Stack, obj4)
  };
  BottomSheet = markAsDismissed(5272).BottomSheet;
  obj3 = { title: null, leading: closure_13(markAsDismissed(7367).ActionSheetCloseButton, { onPress: handleCancel }) };
  BottomSheetTitleHeader = markAsDismissed(7321).BottomSheetTitleHeader;
  obj4 = { spacing: 24, style: { paddingBottom: bottom }, children: items1 };
  Stack = markAsDismissed(6027).Stack;
  const obj5 = { justify: "center", align: "center", direction: "horizontal", children: items };
  const Stack2 = markAsDismissed(6027).Stack;
  items = [closure_13(RobloxIcon, { theme }), closure_13(UnionIcon, { theme }), closure_13(UserIcon, {})];
  items1 = [closure_14(Stack2, obj5), , ];
  const obj6 = { justify: "center", children: items2 };
  const Stack3 = markAsDismissed(6027).Stack;
  const obj7 = { variant: "heading-xl/bold", style: tmp.text, children: intl.string(markAsDismissed(1113).t.t3asUZ) };
  const Text = markAsDismissed(5624).Text;
  intl = markAsDismissed(1113).intl;
  items2 = [closure_13(Text, obj7), ];
  const obj8 = { variant: "text-md/medium", style: tmp.text, children: intl2.string(markAsDismissed(1113).t.no96NU) };
  const Text2 = markAsDismissed(5624).Text;
  intl2 = markAsDismissed(1113).intl;
  items2[1] = closure_13(Text2, obj8);
  items1[1] = closure_14(Stack3, obj6);
  const obj9 = { children: items3 };
  const Stack4 = markAsDismissed(6027).Stack;
  const obj10 = {
    text: intl3.string(markAsDismissed(1113).t.ItuabN),
    icon: closure_13(WindowLaunchIcon, obj11),
    iconPosition: "end",
    size: "lg",
    onPress: function handleConnect() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      if (markAsDismissed != null) {
        tmp4(ContentDismissActionType.PRIMARY);
      }
      const obj2 = { platformType: constants2.ROBLOX, location: constants.ROBLOX_CONNECTION_ACTION_SHEET };
      authorizeConnectionDefault(obj2);
      const obj3 = openUserSettings;
      const obj4 = { screen: unpackModuleId.CONNECTIONS };
      obj3.openUserSettings(obj4);
    }
  };
  const Button = markAsDismissed(5634).Button;
  intl3 = markAsDismissed(1113).intl;
  obj11 = { size: "sm", color: nativeDefault.colors.WHITE };
  WindowLaunchIcon = markAsDismissed(14574).WindowLaunchIcon;
  items3 = [closure_13(Button, obj10), ];
  const obj12 = { text: intl4.string(markAsDismissed(1113).t.DiGJy3), variant: "secondary", size: "lg", onPress: handleCancel };
  const Button2 = markAsDismissed(5634).Button;
  intl4 = markAsDismissed(1113).intl;
  items3[1] = closure_13(Button2, obj12);
  items1[2] = closure_14(Stack4, obj9);
  return closure_13(BottomSheet, obj2);
};
export { UnionIcon };
export function useShouldShowRobloxConnectionCoachmark() {
  let appInstalled;
  let closure_2;
  let fetchingAccounts;
  let hasRoloxAccount;
  let stateFromStores;
  let obj = stateFromStores(504);
  const items = [LocalAppDetectionStore];
  stateFromStores = obj.useStateFromStores(items, () => appInstalled.isAppInstalled(stateFromStores(closure_2[30]).DetectableAppNames.ROBLOX));
  const tmp2 = hasRoloxAccount(react.useState(false), 2);
  const first = tmp2[0];
  dependencyMap = tmp2[1];
  let obj2 = stateFromStores(504);
  const items1 = [ConnectedAccountsStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    let accounts;
    const obj = { fetchingAccounts: ConnectedAccountsStore.isFetching(), hasRoloxAccount: null != accounts.find((type) => type.type === constants.ROBLOX) };
    accounts = ConnectedAccountsStore.getAccounts();
    return obj;
  });
  ({ fetchingAccounts, hasRoloxAccount } = stateFromStoresObject);
  const items2 = [first, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = stateFromStores && !first;
    if (tmp) {
      closure_2(true);
      const obj = ConnectedAccountsActionCreatorsDefault;
      const response = obj.fetch();
    }
  }, items2);
  const items3 = [hasRoloxAccount];
  const effect1 = react.useEffect(() => {
    const tmp = hasRoloxAccount;
    if (tmp) {
      const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
      const obj = DismissibleContentUnsafeUtils;
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.ROBLOX_CONNECTION_COACHMARK, obj2);
    }
  }, items3);
  return !fetchingAccounts && stateFromStores && !hasRoloxAccount;
}
