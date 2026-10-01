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
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7298 */;
import useChatBottomManagerUIStore from "useChatBottomManagerUIStore" /* 8843 */;
import getChatInputPositionStyleDefault from "getChatInputPositionStyle" /* 11742 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
let closure_6 = useChatBottomManagerUIStore.updateChatInputContainerHeight;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let obj3;
  let obj4;
  let str;
  let lg;
  const obj = { container: { paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8 }, content: obj3, underlay: obj4, wrapper: { borderColor: nativeDefault.colors.BORDER_MUTED, paddingHorizontal: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, borderWidth: 1 }, floating: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1 }, text: { textAlign: "center" }, subtext: { marginTop: nativeDefault.space.PX_4, textAlign: "center" }, spacing: { marginTop: nativeDefault.space.PX_8 } };
  ({ paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: nativeDefault.space.PX_8 });
  if (arg0) {
    lg = tmp(576).radii.lg;
  }
  obj3 = { borderRadius: lg, overflow: str };
  str = undefined;
  if (arg0) {
    str = "hidden";
  }
  obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, height: nativeDefault.space.PX_8 + Radius.Radius.lg, top: undefined };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  ({ borderColor: nativeDefault.colors.BORDER_MUTED, paddingHorizontal: nativeDefault.space.PX_12, paddingTop: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.lg, borderWidth: 1 });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.modules.mobile.TABLE_ROW_BORDER_RADIUS, borderColor: nativeDefault.colors.BORDER_MUTED, borderWidth: 1 });
  ({ marginTop: nativeDefault.space.PX_4, textAlign: "center" });
  ({ marginTop: nativeDefault.space.PX_8 });
  return obj;
});
const result = size.fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuard.tsx");

export default function ChatInputGuard(type) {
  let actionIcon;
  let actionLabel;
  let actionOnPress;
  let buttonPrimaryDisabled;
  let buttonPrimaryLoading;
  let buttonPrimaryOnPress;
  let buttonPrimaryText;
  let buttonPrimaryVariant;
  let buttonSecondaryDisabled;
  let buttonSecondaryLoading;
  let buttonSecondaryOnPress;
  let buttonSecondaryText;
  let countdown;
  let countdown2;
  let icon;
  let items;
  let items1;
  let items2;
  let items3;
  let message;
  let message2;
  let subtext;
  let subtext2;
  const tmp3 = closure_9(useIsUsingClientThemeDefault());
  if ("simple-action" === type.type) {
    let tmp7Result;
    ({ countdown, actionIcon, actionLabel, actionOnPress } = type);
    const obj2 = { style: tmp3.floating, children: null };
    ({ icon, message, subtext } = type);
    const obj3 = { arrow: false, accessibilityRole: "button", onPress: actionOnPress, icon, start: true, end: true, trailing: null, label: null, subLabel: null };
    const tmp8 = hasOwnProperty;
    if (null != actionLabel) {
      if (null != actionOnPress) {
        const obj4 = { accessibilityLabel: actionLabel, icon: actionIcon, size: "sm", onPress: actionOnPress };
        const IconButton = tmp9(7363).IconButton;
        if (actionIcon == null) {
          const obj5 = { color: nativeDefault.colors.WHITE };
          const ArrowSmallRightIcon = tmp9(10396).ArrowSmallRightIcon;
          actionIcon = tmp7(ArrowSmallRightIcon, obj5);
        }
        tmp7Result = tmp7(IconButton, obj4);
      }
      obj3.trailing = tmp7Result;
      const obj6 = { variant: "text-sm/semibold", children: message };
      obj3.label = metroImportDefault(Text_Text.Text, obj6);
      obj3.subLabel = subtext;
      obj2.children = metroImportDefault(tmp10, obj3);
      return metroImportDefault(tmp8, obj2);
    }
    tmp7Result = null;
    if (null != countdown) {
      const obj7 = { style: items, deadline: countdown };
      items = [, ];
      ({ text: arr3[0], spacing: arr3[1] } = tmp3);
      tmp7Result = tmp7(tmp(10391), obj7);
    }
  } else {
    ({ subtext: subtext2, buttonSecondaryText, buttonSecondaryOnPress, countdown: countdown2 } = type);
    ({ message: message2, buttonPrimaryText, buttonPrimaryOnPress, buttonPrimaryDisabled, buttonPrimaryLoading, buttonPrimaryVariant, buttonSecondaryDisabled, buttonSecondaryLoading } = type);
    const obj8 = { disabled: buttonPrimaryDisabled, loading: buttonPrimaryLoading, text: buttonPrimaryText, onPress: buttonPrimaryOnPress, size: "sm", variant: buttonPrimaryVariant };
    const tmp15 = metroImportDefault(components_Button_Button.Button, obj8);
    const obj10 = { style: tmp3.text, variant: "text-sm/semibold", children: message2 };
    const obj9 = { style: tmp3.wrapper, children: items1 };
    items1 = [metroImportDefault(Text_Text.Text, obj10), , , ];
    let tmp13Result = null;
    const tmp17 = hasOwnProperty;
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
    const ButtonGroup = tmp14(5745).ButtonGroup;
    if (null != buttonSecondaryText) {
      tmp16Result = tmp15;
      if (null != buttonSecondaryOnPress) {
        const obj11 = { children: items2 };
        items2 = [tmp15, ];
        const TwinButtons = tmp14(8370).TwinButtons;
        const obj12 = { disabled: buttonSecondaryDisabled, loading: buttonSecondaryLoading, text: buttonSecondaryText, onPress: buttonSecondaryOnPress, variant: "secondary", size: "sm" };
        items2[1] = metroImportDefault(components_Button_Button.Button, obj12);
        tmp16Result = tmp16(TwinButtons, obj11);
      }
    }
    const obj13 = { children: tmp16Result };
    items1[2] = metroImportDefault(ButtonGroup, obj13);
    let tmp13Result2 = null;
    if (null != countdown2) {
      const obj14 = { style: items3, deadline: countdown2 };
      items3 = [, ];
      ({ text: arr2[0], spacing: arr2[1] } = tmp3);
      tmp13Result2 = tmp13(tmp(10391), obj14);
    }
    items1[3] = tmp13Result2;
    return metroImportAll(tmp17, obj9);
  }
};
export const ChatInputGuardContainer = function ChatInputGuardContainer(screenIndex) {
  let callback;
  let children;
  let items1;
  let items2;
  let items3;
  let items4;
  let onJumpToPresent;
  screenIndex = screenIndex.screenIndex;
  const channelId = screenIndex.channelId;
  ({ onJumpToPresent, children } = screenIndex);
  const tmp3 = useIsUsingClientThemeDefault();
  const obj = screenIndex(11743);
  const chatInputFloatingOverlayStyle = obj.useChatInputFloatingOverlayStyle();
  const tmp6 = closure_9(tmp3);
  const items = [screenIndex];
  const obj2 = { style: items1, onLayout: callback, collapsable: false, children: items2 };
  callback = react.useCallback((nativeEvent) => {
    closure_6(screenIndex, nativeEvent.nativeEvent.layout.height);
  }, items);
  items1 = [getChatInputPositionStyleDefault({ isCreatingThread: false }), chatInputFloatingOverlayStyle];
  items2 = [closure_7(screenIndex(11743).ChatInputScrimGradient, {}), ];
  let tmp10Result = null;
  const obj3 = { style: tmp6.container, children: items3 };
  const tmp4 = screenIndex;
  if (!tmp3) {
    const obj4 = { style: tmp6.underlay };
    tmp10Result = tmp10(tmp9, obj4);
  }
  items3 = [tmp10Result, , ];
  let tmp10Result3 = null;
  const obj5 = { style: tmp6.content, children: items4 };
  if (tmp3) {
    tmp10Result3 = tmp10(tmp(5437), { absolute: true, wide: true, tall: true, mix: true });
  }
  items4 = [tmp10Result3, children];
  items3[1] = closure_8(closure_5, obj5);
  let tmp10Result4 = null;
  const tmp4Result = tmp4(1364);
  if (tmp4Result.isIOS()) {
    tmp10Result4 = null;
    if (null != channelId) {
      const obj6 = { channelId, screenIndex, onJumpToPresent };
      tmp10Result4 = tmp10(tmp(11749), obj6);
    }
  }
  items3[2] = tmp10Result4;
  items2[1] = closure_8(closure_5, obj3);
  return closure_8(closure_5, obj2);
};
