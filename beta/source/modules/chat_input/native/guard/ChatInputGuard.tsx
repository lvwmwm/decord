// Module ID: 11941
// Function ID: 11942
// Name: ChatInputGuard
// Dependencies: [19, 17, 8843, 21, 4836, 576, 670, 7298, 11743, 11742, 5437, 1364, 11749, 5917, 7363, 10396, 10391, 4832, 5281, 5745, 8370, 2]
// Exports: ChatInputGuardContainer, default

// Module 11941 (ChatInputGuard)
import nativeDefault from "native" /* 576 */;
import Radius from "Radius" /* 670 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import ButtonGroup from "ButtonGroup" /* 5745 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7298 */;
import getChatInputPositionStyleDefault from "getChatInputPositionStyle" /* 11742 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(8843).updateChatInputContainerHeight;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4836);
let closure_9 = createStyles.createStyles((arg0) => {
  const obj = { container: { paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8 }, content: null, underlay: null, wrapper: null, floating: null, text: null, subtext: null, spacing: null };
  let lg;
  if (arg0) {
    lg = tmp(576).radii.lg;
  }
  const obj3 = { borderRadius: lg, overflow: null };
  let str;
  if (arg0) {
    str = "hidden";
  }
  obj3.overflow = str;
  obj.content = obj3;
  const obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: nativeDefault.space.PX_8 + Radius.Radius.lg };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj4.top = undefined;
  obj.underlay = obj4;
  const obj2 = { paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8 };
  obj.wrapper = { borderColor: nativeDefault.colors.BORDER_MUTED, paddingHorizontal: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, borderWidth: 1 };
  const obj5 = { borderColor: nativeDefault.colors.BORDER_MUTED, paddingHorizontal: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, borderWidth: 1 };
  obj.floating = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1 };
  obj.text = { textAlign: "center" };
  const obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1 };
  obj.subtext = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
  const obj7 = { marginTop: nativeDefault.space.PX_4, textAlign: "center" };
  obj.spacing = { marginTop: nativeDefault.space.PX_8 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuard.tsx");

export default function ChatInputGuard(type) {
  const tmp3 = closure_9(useIsUsingClientThemeDefault());
  if ("simple-action" === type.type) {
    ({ countdown, actionIcon, actionLabel, actionOnPress } = type);
    const obj2 = { style: tmp3.floating, children: null };
    ({ icon, message, subtext } = type);
    const obj3 = { arrow: false, accessibilityRole: "button", onPress: actionOnPress, icon, start: true, end: true, trailing: null, label: null, subLabel: null };
    if (null != actionLabel) {
      if (null != actionOnPress) {
        const obj4 = { accessibilityLabel: actionLabel, icon: null, size: "sm", onPress: null };
        if (actionIcon == null) {
          const obj5 = { color: tmp(576).colors.WHITE };
          actionIcon = tmp7(tmp9(10396).ArrowSmallRightIcon, obj5);
        }
        obj4.icon = actionIcon;
        obj4.onPress = actionOnPress;
        let tmp7Result = tmp7(tmp9(7363).IconButton, obj4);
      }
      obj3.trailing = tmp7Result;
      const obj6 = { variant: "text-sm/semibold", children: message };
      obj3.label = tmp7(tmp9(4832).Text, obj6);
      obj3.subLabel = subtext;
      obj2.children = tmp7(tmp10, obj3);
      return tmp7(tmp8, obj2);
    }
    tmp7Result = null;
    if (null != countdown) {
      const obj7 = { style: null, deadline: null };
      const items = [, ];
      ({ text: arr3[0], spacing: arr3[1] } = tmp3);
      obj7.style = items;
      obj7.deadline = countdown;
      tmp7Result = tmp7(tmp(10391), obj7);
    }
    tmp8 = hasOwnProperty;
  } else {
    ({ subtext: subtext2, buttonSecondaryText, buttonSecondaryOnPress, countdown: countdown2 } = type);
    ({ message: message2, buttonPrimaryText, buttonPrimaryOnPress, buttonPrimaryDisabled, buttonPrimaryLoading, buttonPrimaryVariant, buttonSecondaryDisabled, buttonSecondaryLoading } = type);
    const obj8 = { disabled: buttonPrimaryDisabled, loading: buttonPrimaryLoading, text: buttonPrimaryText, onPress: buttonPrimaryOnPress, size: "sm", variant: buttonPrimaryVariant };
    const tmp15 = React5(components_Button_Button.Button, obj8);
    const obj9 = { style: tmp3.wrapper, children: null };
    const obj10 = { style: tmp3.text, variant: "text-sm/semibold", children: message2 };
    const items1 = [React5(Text_Text.Text, obj10), , , ];
    let tmp13Result = null;
    if (null != subtext2) {
      tmp13Result = null;
      if (typeof subtext2 === "string") {
        tmp13Result = null;
        if (subtext2.length > 0) {
          const obj = { style: tmp3.subtext, variant: "text-xs/medium", color: "text-muted", children: subtext2 };
          tmp13Result = tmp13(tmp14(4832).Text, obj);
        }
      }
    }
    items1[1] = tmp13Result;
    let tmp16Result = tmp15;
    if (null != buttonSecondaryText) {
      tmp16Result = tmp15;
      if (null != buttonSecondaryOnPress) {
        const obj11 = { children: null };
        const items2 = [tmp15, ];
        const obj12 = { disabled: buttonSecondaryDisabled, loading: buttonSecondaryLoading, text: buttonSecondaryText, onPress: buttonSecondaryOnPress, variant: "secondary", size: "sm" };
        items2[1] = tmp13(tmp14(5281).Button, obj12);
        obj11.children = items2;
        tmp16Result = tmp16(tmp14(8370).TwinButtons, obj11);
      }
    }
    const obj13 = { children: tmp16Result };
    items1[2] = React5(ButtonGroup.ButtonGroup, obj13);
    let tmp13Result2 = null;
    if (null != countdown2) {
      const obj14 = { style: null, deadline: null };
      const items3 = [, ];
      ({ text: arr2[0], spacing: arr2[1] } = tmp3);
      obj14.style = items3;
      obj14.deadline = countdown2;
      tmp13Result2 = tmp13(tmp(10391), obj14);
    }
    items1[3] = tmp13Result2;
    obj9.children = items1;
    return React6(hasOwnProperty, obj9);
  }
};
export const ChatInputGuardContainer = function ChatInputGuardContainer(screenIndex) {
  screenIndex = screenIndex.screenIndex;
  const channelId = screenIndex.channelId;
  ({ onJumpToPresent, children } = screenIndex);
  const tmp3 = useIsUsingClientThemeDefault();
  const chatInputFloatingOverlayStyle = screenIndex(11743).useChatInputFloatingOverlayStyle();
  const tmp6 = closure_9(tmp3);
  const items = [screenIndex];
  const obj2 = { style: null, onLayout: null, collapsable: false, children: null };
  const callback = noop.useCallback((nativeEvent) => {
    closure_6(screenIndex, nativeEvent.nativeEvent.layout.height);
  }, items);
  const items1 = [getChatInputPositionStyleDefault({ isCreatingThread: false }), chatInputFloatingOverlayStyle];
  obj2.style = items1;
  obj2.onLayout = callback;
  const items2 = [closure_7(screenIndex(11743).ChatInputScrimGradient, {}), ];
  const obj3 = { style: tmp6.container, children: null };
  let tmp10Result = null;
  if (!tmp3) {
    const obj4 = { style: tmp6.underlay };
    tmp10Result = tmp10(tmp9, obj4);
  }
  const items3 = [tmp10Result, , ];
  const obj5 = { style: tmp6.content, children: null };
  let tmp10Result3 = null;
  if (tmp3) {
    tmp10Result3 = tmp10(tmp(5437), { absolute: true, wide: true, tall: true, mix: true });
  }
  const items4 = [tmp10Result3, children];
  obj5.children = items4;
  items3[1] = closure_8(closure_5, obj5);
  const obj = screenIndex(11743);
  let tmp10Result4 = null;
  if (tmp4Result.isIOS()) {
    tmp10Result4 = null;
    if (null != channelId) {
      const obj6 = { channelId, screenIndex, onJumpToPresent };
      tmp10Result4 = tmp10(tmp(11749), obj6);
    }
  }
  items3[2] = tmp10Result4;
  obj3.children = items3;
  items2[1] = closure_8(closure_5, obj3);
  obj2.children = items2;
  return closure_8(closure_5, obj2);
};
