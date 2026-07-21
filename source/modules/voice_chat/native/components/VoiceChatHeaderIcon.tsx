// Module ID: 10719
// Function ID: 83405
// Name: VoiceChatCallScreenHeaderIconInner
// Dependencies: []
// Exports: VoiceChatCallScreenHeaderIcon, default, useVoiceChatMentions

// Module 10719 (VoiceChatCallScreenHeaderIconInner)
function VoiceChatCallScreenHeaderIconInner(onPress) {
  let accessibilityLabel;
  let children;
  let source;
  let noop = onPress.onPress;
  ({ children, source, accessibilityLabel } = onPress);
  const tmp = callback2();
  let obj = { style: tmp.chatIconContainer };
  obj = { containerStyle: tmp.chatIcon, accessibilityLabel, source };
  if (null == noop) {
    noop = importDefault(dependencyMap[10]).noop;
  }
  obj.onPress = noop;
  obj.children = children;
  obj.children = closure_6(importDefault(dependencyMap[9]), obj);
  return closure_6(View, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const ThemeTypes = arg1(dependencyMap[3]).ThemeTypes;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[6]).radii.lg, backgroundColor: importDefault(dependencyMap[6]).colors.REDESIGN_BUTTON_TERTIARY_BACKGROUND };
obj.headerButton = obj;
obj.disabledOpacity = { opacity: 0.6 };
const obj1 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, height: arg1(dependencyMap[7]).NAV_BAR_HEIGHT };
obj.chatIconContainer = obj1;
obj.chatIcon = {};
const tmp3 = arg1(dependencyMap[4]);
obj.badge = { backgroundColor: importDefault(dependencyMap[6]).colors.ICON_STRONG };
let closure_8 = obj.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[6]).colors.ICON_STRONG };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/voice_chat/native/components/VoiceChatHeaderIcon.tsx");

export default function VoiceChatHeaderIcon(disabled) {
  let accessibilityLabel;
  let children;
  let onPress;
  let source;
  let disabledOpacity = disabled.disabled;
  ({ accessibilityLabel, onPress, source, children } = disabled);
  const tmp = callback2();
  let obj = { <string:3563180329>: false, <string:1568511577>: false, <string:382146483>: false, disabled: disabledOpacity, accessibilityLabel, onPress };
  const items = [tmp.headerButton, ];
  if (disabledOpacity) {
    disabledOpacity = tmp.disabledOpacity;
  }
  items[1] = disabledOpacity;
  obj.style = items;
  obj = { source, color: tmp.badge.backgroundColor, size: arg1(dependencyMap[13]).Icon.Sizes.SMALL_20 };
  const items1 = [callback(arg1(dependencyMap[13]).Icon, obj), children];
  obj.children = items1;
  return closure_7(arg1(dependencyMap[12]).PressableOpacity, obj);
};
export const useVoiceChatMentions = function useVoiceChatMentions(arg0) {
  const arg1 = arg0;
  const items = [closure_4];
  const items1 = [arg0];
  return arg1(dependencyMap[8]).useStateFromStoresObject(items, () => ({ unreadCount: store.getUnreadCount(arg0), mentionCount: store.getMentionCount(arg0) }), items1);
};
export const VoiceChatCallScreenHeaderIcon = function VoiceChatCallScreenHeaderIcon(arg0) {
  let obj = { theme: ThemeTypes.DARK };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = callback(VoiceChatCallScreenHeaderIconInner, obj);
  return callback(arg1(dependencyMap[11]).ThemeContextProvider, obj);
};
