// Module ID: 15659
// Function ID: 120730
// Name: RobloxIcon
// Dependencies: [57, 31, 27, 4812, 1849, 12685, 653, 1345, 33, 4130, 689, 3842, 1557, 4098, 5187, 5186, 5499, 4541, 4126, 1212, 4543, 10189, 9009, 5796, 3840, 4814, 1392, 1273, 8063, 566, 12686, 4938, 3946, 1334, 2]
// Exports: default, useShouldShowRobloxConnectionCoachmark

// Module 15659 (RobloxIcon)
import _slicedToArray from "_slicedToArray";
import callback from "callback";
import { View } from "Button";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "DismissibleContent";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_9;
const require = arg1;
function RobloxIcon(theme) {
  let obj = require(3840) /* isThemeLight */;
  const isThemeDarkResult = obj.isThemeDark(theme.theme);
  let obj1 = importDefault(4814);
  let str = "white";
  const value = obj1.get(constants.ROBLOX);
  if (isThemeDarkResult) {
    str = "black";
  }
  const tmp = _createForOfIteratorHelperLoose();
  const icon = value.icon;
  obj = { style: items };
  items = [tmp.robloxIconContainer, ];
  obj = { backgroundColor: str };
  items[1] = obj;
  const source = require(1392) /* getAvatarURL */.makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
  obj1 = { size: require(1273) /* Button */.IconSizes.LARGE, source, disableColor: true };
  obj.children = callback(require(1273) /* Button */.Icon, obj1);
  return callback(View, obj);
}
class UnionIcon {
  constructor(arg0) {
    obj = require("isThemeLight");
    str = "black";
    if (obj.isThemeDark(global.theme)) {
      str = "white";
    }
    id = callback.useId();
    obj = { width: 25, height: 4, viewBox: "0 0 25 4" };
    obj.id = id;
    tmp2 = require("inlineStyles");
    items = [, ];
    items[0] = jsx(require("inlineStyles").Path, { fill: "url(#a)", d: "M1.7002 0.799805C2.36285 0.79991 2.90039 1.33732 2.90039 2C2.90029 2.66259 2.36278 3.20009 1.7002 3.2002C1.03752 3.2002 0.500106 2.66265 0.5 2C0.5 1.33726 1.03745 0.799805 1.7002 0.799805ZM8.90039 0.799805C9.56297 0.799989 10.0996 1.33737 10.0996 2C10.0995 2.66254 9.56291 3.20001 8.90039 3.2002C8.23771 3.2002 7.70029 2.66266 7.7002 2C7.7002 1.33726 8.23765 0.799805 8.90039 0.799805ZM16.0996 0.799805C16.7624 0.799805 17.2998 1.33726 17.2998 2C17.2997 2.66266 16.7623 3.2002 16.0996 3.2002C15.4371 3.19996 14.9005 2.66251 14.9004 2C14.9004 1.3374 15.4371 0.800042 16.0996 0.799805ZM23.2998 0.799805C23.9625 0.799805 24.5 1.33726 24.5 2C24.4999 2.66266 23.9625 3.2002 23.2998 3.2002C22.6372 3.20006 22.0997 2.66258 22.0996 2C22.0996 1.33734 22.6372 0.799936 23.2998 0.799805Z" });
    obj1 = {};
    obj2 = { id: "a", x1: 0.5, y1: 2, x2: 24.5, y2: 2, gradientUnits: "userSpaceOnUse" };
    obj3 = {};
    obj3.stopColor = str;
    obj3.stopOpacity = 0.3;
    items1 = [, ];
    items1[0] = jsx(require("inlineStyles").Stop, obj3);
    obj4 = { offset: 1, stopColor: null, stopOpacity: 0.7 };
    obj4.stopColor = str;
    items1[1] = jsx(require("inlineStyles").Stop, obj4);
    obj2.children = items1;
    obj1.children = jsxs(require("inlineStyles").LinearGradient, obj2);
    items[1] = jsx(require("inlineStyles").Defs, obj1);
    obj.children = items;
    return jsxs(tmp2, obj);
  }
}
function UserIcon() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [closure_7];
  obj = { style: tmp.avatarContainer };
  obj = { style: tmp.avatarInnerBorder };
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getCurrentUser());
  const items1 = [callback(View, obj), ];
  const obj1 = { size: require(1273) /* Button */.AvatarSizes.NORMAL, user: stateFromStores, guildId: undefined };
  items1[1] = callback(require(1273) /* Button */.Avatar, obj1);
  obj.children = items1;
  return callback2(View, obj);
}
({ AnalyticsLocations: closure_9, PlatformTypes: closure_10, UserSettingsSections: closure_11 } = ME);
({ jsx: closure_13, jsxs: closure_14 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: 40, height: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.md, alignItems: "center", justifyContent: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
_createForOfIteratorHelperLoose.robloxIconContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.content = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.text = { textAlign: "center" };
_createForOfIteratorHelperLoose.avatarContainer = { position: "relative" };
let obj2 = { zIndex: 1, position: "absolute", borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, borderWidth: 1, width: "100%", height: "100%" };
_createForOfIteratorHelperLoose.avatarInnerBorder = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/local_app_detection/native/RobloxConnectionCoachmark.tsx");

export default function RobloxConnectionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  function handleCancel() {
    outer1_1(outer1_2[13]).hideActionSheet();
    if (null != markAsDismissed) {
      markAsDismissed(outer1_12.DISMISS);
    }
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = markAsDismissed(3842);
  const theme = obj.useThemeContext().theme;
  obj = { startExpanded: true, contentStyles: tmp.content };
  obj = { title: null, leading: callback(markAsDismissed(5499).ActionSheetCloseButton, { onPress: handleCancel }) };
  obj.header = callback(markAsDismissed(5186).BottomSheetTitleHeader, obj);
  obj.onDismiss = function onDismiss() {
    return markAsDismissed(outer1_12.DISMISS);
  };
  const obj1 = { spacing: 24, style: { paddingBottom: importDefault(1557)().bottom } };
  const obj2 = { justify: "center", align: "center", direction: "horizontal" };
  const items = [callback(RobloxIcon, { theme }), callback(UnionIcon, { theme }), callback(UserIcon, {})];
  obj2.children = items;
  const items1 = [callback2(markAsDismissed(4541).Stack, obj2), , ];
  const obj3 = { justify: "center" };
  const obj4 = { variant: "heading-xl/bold", style: tmp.text };
  const intl = markAsDismissed(1212).intl;
  obj4.children = intl.string(markAsDismissed(1212).t.t3asUZ);
  const items2 = [callback(markAsDismissed(4126).Text, obj4), ];
  const obj5 = { variant: "text-md/medium", style: tmp.text };
  const intl2 = markAsDismissed(1212).intl;
  obj5.children = intl2.string(markAsDismissed(1212).t.no96NU);
  items2[1] = callback(markAsDismissed(4126).Text, obj5);
  obj3.children = items2;
  items1[1] = callback2(markAsDismissed(4541).Stack, obj3);
  const obj6 = {};
  const obj7 = {};
  const intl3 = markAsDismissed(1212).intl;
  obj7.text = intl3.string(markAsDismissed(1212).t.ItuabN);
  const obj8 = { size: "sm", color: importDefault(689).colors.WHITE };
  obj7.icon = callback(markAsDismissed(10189).WindowLaunchIcon, obj8);
  obj7.iconPosition = "end";
  obj7.size = "lg";
  obj7.onPress = function onPress() {
    let obj = outer1_1(outer1_2[13]);
    obj.hideActionSheet();
    if (null != markAsDismissed) {
      markAsDismissed(outer1_12.PRIMARY);
    }
    obj = { platformType: outer1_10.ROBLOX, location: outer1_9.ROBLOX_CONNECTION_ACTION_SHEET };
    outer1_1(outer1_2[22])(obj);
    obj = { screen: outer1_11.CONNECTIONS };
    markAsDismissed(outer1_2[23]).openUserSettings(obj);
  };
  const items3 = [callback(markAsDismissed(4543).Button, obj7), ];
  const obj9 = { text: null, variant: "secondary", size: "lg" };
  const intl4 = markAsDismissed(1212).intl;
  obj9.text = intl4.string(markAsDismissed(1212).t.DiGJy3);
  obj9.onPress = handleCancel;
  items3[1] = callback(markAsDismissed(4543).Button, obj9);
  obj6.children = items3;
  items1[2] = callback2(markAsDismissed(4541).Stack, obj6);
  obj1.children = items1;
  obj.children = callback2(markAsDismissed(4541).Stack, obj1);
  return callback(markAsDismissed(5187).BottomSheet, obj);
};
export { UnionIcon };
export const useShouldShowRobloxConnectionCoachmark = function useShouldShowRobloxConnectionCoachmark() {
  const items = [closure_8];
  stateFromStores = stateFromStores(566).useStateFromStores(items, () => outer1_8.isAppInstalled(stateFromStores(12686).DetectableAppNames.ROBLOX));
  const tmp2 = hasRoloxAccount(React.useState(false), 2);
  const first = tmp2[0];
  const dependencyMap = tmp2[1];
  let obj = stateFromStores(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStoresObject = stateFromStores(566).useStateFromStoresObject(items1, () => {
    const obj = { fetchingAccounts: outer1_6.isFetching() };
    const accounts = outer1_6.getAccounts();
    obj.hasRoloxAccount = null != accounts.find((type) => type.type === outer2_10.ROBLOX);
    return obj;
  });
  hasRoloxAccount = stateFromStoresObject.hasRoloxAccount;
  const items2 = [first, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = stateFromStores;
    if (stateFromStores) {
      tmp = !first;
    }
    if (tmp) {
      dependencyMap(true);
      const response = first(4938).fetch();
      const obj = first(4938);
    }
  }, items2);
  const items3 = [hasRoloxAccount];
  const effect1 = React.useEffect(() => {
    if (hasRoloxAccount) {
      let obj = stateFromStores(3946);
      obj = { dismissAction: outer1_12.INDIRECT_ACTION };
      const result = obj.UNSAFE_markDismissibleContentAsDismissed(stateFromStores(1334).DismissibleContent.ROBLOX_CONNECTION_COACHMARK, obj);
    }
  }, items3);
  return !stateFromStoresObject.fetchingAccounts && stateFromStores && !hasRoloxAccount;
};
