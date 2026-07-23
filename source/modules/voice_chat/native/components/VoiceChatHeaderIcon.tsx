// Module ID: 10730
// Function ID: 83467
// Name: VoiceChatCallScreenHeaderIconInner
// Dependencies: [31, 27, 4142, 653, 33, 4130, 689, 5084, 566, 10666, 22, 3842, 4660, 1273, 2]
// Exports: VoiceChatCallScreenHeaderIcon, default, useVoiceChatMentions

// Module 10730 (VoiceChatCallScreenHeaderIconInner)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ThemeTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function VoiceChatCallScreenHeaderIconInner(onPress) {
  let accessibilityLabel;
  let children;
  let source;
  let noop = onPress.onPress;
  ({ children, source, accessibilityLabel } = onPress);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.chatIconContainer };
  obj = { containerStyle: tmp.chatIcon, accessibilityLabel, source };
  if (null == noop) {
    noop = importDefault(22).noop;
  }
  obj.onPress = noop;
  obj.children = children;
  obj.children = closure_6(importDefault(10666), obj);
  return closure_6(View, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "center", padding: 6, backgroundColor: require("_createForOfIteratorHelperLoose").colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
_createForOfIteratorHelperLoose.headerButton = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.disabledOpacity = { opacity: 0.6 };
const obj1 = { marginRight: 12, height: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.chatIconContainer = obj1;
_createForOfIteratorHelperLoose.chatIcon = { marginHorizontal: 0, width: 32, height: 32 };
_createForOfIteratorHelperLoose.badge = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.ICON_STRONG };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/voice_chat/native/components/VoiceChatHeaderIcon.tsx");

export default function VoiceChatHeaderIcon(disabled) {
  let accessibilityLabel;
  let children;
  let onPress;
  let source;
  let disabledOpacity = disabled.disabled;
  ({ accessibilityLabel, onPress, source, children } = disabled);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { disabled: disabledOpacity, activeOpacity: 0.5, accessibilityRole: "button", accessibilityLabel, onPress };
  const items = [tmp.headerButton, ];
  if (disabledOpacity) {
    disabledOpacity = tmp.disabledOpacity;
  }
  items[1] = disabledOpacity;
  obj.style = items;
  obj = { source, color: tmp.badge.backgroundColor, size: require(1273) /* Button */.Icon.Sizes.SMALL_20 };
  const items1 = [callback(require(1273) /* Button */.Icon, obj), children];
  obj.children = items1;
  return closure_7(require(4660) /* PressableBase */.PressableOpacity, obj);
};
export const useVoiceChatMentions = function useVoiceChatMentions(arg0) {
  const _require = arg0;
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0];
  return _require(566).useStateFromStoresObject(items, () => ({ unreadCount: outer1_4.getUnreadCount(closure_0), mentionCount: outer1_4.getMentionCount(closure_0) }), items1);
};
export const VoiceChatCallScreenHeaderIcon = function VoiceChatCallScreenHeaderIcon(arg0) {
  let obj = { theme: ThemeTypes.DARK };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = callback(VoiceChatCallScreenHeaderIconInner, obj);
  return callback(require(3842) /* ManaContext */.ThemeContextProvider, obj);
};
