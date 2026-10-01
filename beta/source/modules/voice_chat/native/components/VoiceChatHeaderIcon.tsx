// Module ID: 9460
// Function ID: 9461
// Name: VoiceChatHeaderIcon
// Dependencies: [19, 17, 4851, 1074, 21, 4836, 576, 5994, 504, 9381, 12, 4540, 5435, 1177, 2]
// Exports: VoiceChatCallScreenHeaderIcon, default, useVoiceChatMentions

// Module 9460 (VoiceChatHeaderIcon)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import native2 from "native" /* 4540 */;
import Pressables from "Pressables" /* 5435 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import ChannelCallNavigatorIconDefault from "ChannelCallNavigatorIcon" /* 9381 */;
import react from "react" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 4851 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
let tmp4;
const _modDef12 = tmp4(12);
function VoiceChatCallScreenHeaderIconInner(onPress) {
  let accessibilityLabel;
  let children;
  let obj2;
  let source;
  let tmp6;
  let noop = onPress.onPress;
  ({ children, source, accessibilityLabel } = onPress);
  const tmp = closure_8();
  const obj = { style: tmp.chatIconContainer, children: metroRequire(tmp6, obj2) };
  obj2 = { containerStyle: tmp.chatIcon, accessibilityLabel, source, onPress: noop, children };
  const tmp3 = View;
  tmp6 = ChannelCallNavigatorIconDefault;
  if (noop == null) {
    noop = _modDef12.noop;
  }
  return metroRequire(tmp3, obj);
}
const View = react_native.View;
const ThemeTypes = Constants.ThemeTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerButton: size, disabledOpacity: { opacity: 0.6 }, chatIconContainer: obj2, chatIcon: { marginHorizontal: 0, width: 32, height: 32 }, badge: { backgroundColor: nativeDefault.colors.ICON_STRONG } };
size = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg, alignSelf: "center", padding: 6, backgroundColor: nativeDefault.colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
createStyles = createStyles.createStyles;
obj2 = { marginRight: 12, height: NavigatorConstants.NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center" };
({ backgroundColor: nativeDefault.colors.ICON_STRONG });
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_chat/native/components/VoiceChatHeaderIcon.tsx");

export default function VoiceChatHeaderIcon(disabled) {
  let accessibilityLabel;
  let children;
  let items;
  let items1;
  let onPress;
  let source;
  let disabledOpacity = disabled.disabled;
  ({ accessibilityLabel, onPress, source, children } = disabled);
  const tmp = closure_8();
  const obj = { disabled: disabledOpacity, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel, onPress, style: items, children: items1 };
  items = [tmp.headerButton, ];
  const PressableOpacity = Pressables.PressableOpacity;
  const tmp2 = metroImportDefault;
  if (disabledOpacity) {
    disabledOpacity = tmp.disabledOpacity;
  }
  items[1] = disabledOpacity;
  const obj2 = { source, color: tmp.badge.backgroundColor, size: native.Icon.Sizes.SMALL_20 };
  const Icon = tmp3(1177).Icon;
  items1 = [metroRequire(Icon, obj2), children];
  return tmp2(PressableOpacity, obj);
};
export const useVoiceChatMentions = function useVoiceChatMentions(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ReadStateStore];
  const items1 = [arg0];
  return obj.useStateFromStoresObject(items, () => {
    const obj = { unreadCount: ReadStateStore.getUnreadCount(closure_0), mentionCount: ReadStateStore.getMentionCount(closure_0) };
    return obj;
  }, items1);
};
export const VoiceChatCallScreenHeaderIcon = function VoiceChatCallScreenHeaderIcon(arg0) {
  let obj2;
  const obj = { theme: ThemeTypes.DARK, children: metroRequire(VoiceChatCallScreenHeaderIconInner, obj2) };
  obj2 = {};
  const ThemeContextProvider = native2.ThemeContextProvider;
  const merged = Object.assign(arg0);
  return metroRequire(ThemeContextProvider, obj);
};
