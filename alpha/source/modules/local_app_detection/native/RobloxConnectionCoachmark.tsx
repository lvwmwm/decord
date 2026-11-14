// Module ID: 19804
// Function ID: 19805
// Name: RobloxConnectionCoachmark
// Dependencies: [32, 19, 17, 7085, 1388, 16216, 1072, 5152, 21, 5306, 575, 5377, 1630, 5552, 5566, 7913, 7952, 6337, 7420, 5929, 1113, 5936, 15195, 7422, 8604, 5328, 7087, 1414, 1187, 504, 16217, 7466, 5348, 5139, 2]
// Exports: default, useShouldShowRobloxConnectionCoachmark

// Module 19804 (RobloxConnectionCoachmark)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import AvatarUtils from "AvatarUtils" /* 1414 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import dismissible_content from "dismissible_content" /* 5139 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5152 */;
import themes from "themes" /* 5328 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5348 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import PlatformsDefault from "Platforms" /* 7087 */;
import ConnectedAccountsActionCreatorsDefault from "ConnectedAccountsActionCreators" /* 7466 */;
import openUserSettings from "openUserSettings" /* 8604 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 7085 */;
import UserStore from "UserStore" /* 1388 */;
import LocalAppDetectionStore from "LocalAppDetectionStore" /* 16216 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let closure_14;
let map1;
let obj2;
let size;
let size1;
let tmp;
let unpackModuleId;
const authorizeConnectionDefault = tmp(7422);
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
  return gesture(View, obj2);
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
  let obj12;
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
  let obj = markAsDismissed(5377);
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
  const BottomSheet = markAsDismissed(5566).BottomSheet;
  obj3 = { title: null, leading: closure_13(markAsDismissed(7952).ActionSheetCloseButton, { onPress: handleCancel }) };
  BottomSheetTitleHeader = markAsDismissed(7913).BottomSheetTitleHeader;
  obj4 = { spacing: 24, style: { paddingBottom: bottom }, children: items1 };
  Stack = markAsDismissed(6337).Stack;
  const obj5 = { justify: "center", align: "center", direction: "horizontal", children: items };
  const Stack2 = markAsDismissed(6337).Stack;
  items = [closure_13(RobloxIcon, { theme }), , ];
  const obj6 = { size: "md", color: nativeDefault.colors.ICON_MUTED, accessible: false };
  const MoreHorizontalIcon = markAsDismissed(7420).MoreHorizontalIcon;
  items[1] = closure_13(MoreHorizontalIcon, obj6);
  items[2] = closure_13(UserIcon, {});
  items1 = [closure_14(Stack2, obj5), , ];
  const obj7 = { justify: "center", children: items2 };
  const Stack3 = markAsDismissed(6337).Stack;
  const obj8 = { variant: "heading-xl/semibold", style: tmp.text, children: intl.string(markAsDismissed(1113).t.t3asUZ) };
  const Text = markAsDismissed(5929).Text;
  intl = markAsDismissed(1113).intl;
  items2 = [closure_13(Text, obj8), ];
  const obj9 = { variant: "body-md/medium", style: tmp.text, children: intl2.string(markAsDismissed(1113).t.no96NU) };
  const Text2 = markAsDismissed(5929).Text;
  intl2 = markAsDismissed(1113).intl;
  items2[1] = closure_13(Text2, obj9);
  items1[1] = closure_14(Stack3, obj7);
  const obj10 = { children: items3 };
  const Stack4 = markAsDismissed(6337).Stack;
  const obj11 = {
    text: intl3.string(markAsDismissed(1113).t.ItuabN),
    icon: closure_13(WindowLaunchIcon, obj12),
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
  const Button = markAsDismissed(5936).Button;
  intl3 = markAsDismissed(1113).intl;
  obj12 = { size: "sm", color: nativeDefault.colors.WHITE };
  WindowLaunchIcon = markAsDismissed(15195).WindowLaunchIcon;
  items3 = [closure_13(Button, obj11), ];
  const obj13 = { text: intl4.string(markAsDismissed(1113).t.DiGJy3), variant: "secondary", size: "lg", onPress: handleCancel };
  const Button2 = markAsDismissed(5936).Button;
  intl4 = markAsDismissed(1113).intl;
  items3[1] = closure_13(Button2, obj13);
  items1[2] = closure_14(Stack4, obj10);
  return closure_13(BottomSheet, obj2);
};
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
