// Module ID: 11511
// Function ID: 89661
// Name: ChatInputGuard
// Dependencies: [31, 27, 9349, 33, 4130, 689, 783, 8869, 11395, 4662, 477, 11403, 5165, 7533, 10201, 10196, 4126, 4543, 4965, 8416, 2]
// Exports: ChatInputGuardContainer, default

// Module 11511 (ChatInputGuard)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { updateChatInputContainerHeight as closure_6 } from "getChatInputContainerHeight";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ StyleSheet: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { paddingHorizontal: importDefault(689).space.PX_12, paddingBottom: importDefault(689).space.PX_8 };
  obj.container = obj;
  obj = {};
  let lg;
  if (arg0) {
    lg = importDefault(689).radii.lg;
  }
  obj.borderRadius = lg;
  let str;
  if (arg0) {
    str = "hidden";
  }
  obj.overflow = str;
  obj.content = obj;
  const obj1 = { backgroundColor: importDefault(689).colors.BACKGROUND_BASE_LOWER, height: importDefault(689).space.PX_8 + require(783) /* Radius */.Radius.lg };
  const merged = Object.assign(absoluteFillObject.absoluteFillObject);
  obj1["top"] = undefined;
  obj.underlay = obj1;
  obj.wrapper = { borderColor: importDefault(689).colors.BORDER_MUTED, paddingHorizontal: importDefault(689).space.PX_12, paddingTop: importDefault(689).space.PX_16, backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(689).radii.lg, borderWidth: 1 };
  const obj2 = { borderColor: importDefault(689).colors.BORDER_MUTED, paddingHorizontal: importDefault(689).space.PX_12, paddingTop: importDefault(689).space.PX_16, backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(689).radii.lg, borderWidth: 1 };
  obj.floating = { backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(689).modules.mobile.TABLE_ROW_BORDER_RADIUS, borderColor: importDefault(689).colors.BORDER_MUTED, borderWidth: 1 };
  obj.text = { textAlign: "center" };
  const obj3 = { backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(689).modules.mobile.TABLE_ROW_BORDER_RADIUS, borderColor: importDefault(689).colors.BORDER_MUTED, borderWidth: 1 };
  obj.subtext = { marginTop: importDefault(689).space.PX_4, textAlign: "center" };
  const obj4 = { marginTop: importDefault(689).space.PX_4, textAlign: "center" };
  obj.spacing = { marginTop: importDefault(689).space.PX_8 };
  return obj;
});
const result = require("getChatInputContainerHeight").fileFinishedImporting("modules/chat_input/native/guard/ChatInputGuard.tsx");

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
  let message;
  let message2;
  let subtext;
  let subtext2;
  const tmp = callback3(importDefault(8869)());
  if ("simple-action" === type.type) {
    ({ countdown, actionIcon, actionLabel, actionOnPress } = type);
    let obj = { style: tmp.floating };
    ({ icon, message, subtext } = type);
    obj = { arrow: false, accessibilityRole: "button", onPress: actionOnPress, icon, start: true, end: true };
    if (null != actionLabel) {
      if (null != actionOnPress) {
        const obj1 = { accessibilityLabel: actionLabel };
        if (null == actionIcon) {
          const obj2 = { color: importDefault(689).colors.WHITE };
          actionIcon = callback(require(10201) /* ArrowSmallRightIcon */.ArrowSmallRightIcon, obj2);
        }
        obj1.icon = actionIcon;
        obj1.size = "sm";
        obj1.onPress = actionOnPress;
        let tmp28Result = callback(require(7533) /* IconButton */.IconButton, obj1);
        const tmp28 = callback;
      }
      obj.trailing = tmp28Result;
      const obj3 = { variant: "text-sm/semibold", children: message };
      obj.label = callback(require(4126) /* Text */.Text, obj3);
      obj.subLabel = subtext;
      obj.children = tmp18(tmp22, obj);
      return tmp18(tmp19, obj);
    }
    tmp28Result = null;
    if (null != countdown) {
      const obj4 = {};
      const items = [, ];
      ({ text: arr3[0], spacing: arr3[1] } = tmp);
      obj4.style = items;
      obj4.deadline = countdown;
      tmp28Result = callback(importDefault(10196), obj4);
    }
    tmp19 = closure_5;
  } else {
    ({ subtext: subtext2, buttonSecondaryText, buttonSecondaryOnPress, countdown: countdown2 } = type);
    ({ message: message2, buttonPrimaryText, buttonPrimaryOnPress, buttonPrimaryDisabled, buttonPrimaryLoading, buttonPrimaryVariant, buttonSecondaryDisabled, buttonSecondaryLoading } = type);
    const obj5 = { disabled: buttonPrimaryDisabled, loading: buttonPrimaryLoading, text: buttonPrimaryText, onPress: buttonPrimaryOnPress, size: "sm", variant: buttonPrimaryVariant };
    const tmp41 = callback(require(4543) /* Button */.Button, obj5);
    const obj6 = { style: tmp.wrapper };
    const obj7 = { style: tmp.text, variant: "text-sm/semibold", children: message2 };
    const items1 = [callback(require(4126) /* Text */.Text, obj7), , , ];
    let tmp2 = null;
    if (null != subtext2) {
      tmp2 = null;
      if ("string" === typeof subtext2) {
        tmp2 = null;
        if (subtext2.length > 0) {
          obj = { style: tmp.subtext, variant: "text-xs/medium", color: "text-muted", children: subtext2 };
          tmp2 = callback(require(4126) /* Text */.Text, obj);
        }
      }
    }
    items1[1] = tmp2;
    const obj8 = {};
    let tmp9 = tmp41;
    if (null != buttonSecondaryText) {
      tmp9 = tmp41;
      if (null != buttonSecondaryOnPress) {
        const obj9 = {};
        const items2 = [tmp41, ];
        const obj10 = { disabled: buttonSecondaryDisabled, loading: buttonSecondaryLoading, text: buttonSecondaryText, onPress: buttonSecondaryOnPress, variant: "secondary", size: "sm" };
        items2[1] = callback(require(4543) /* Button */.Button, obj10);
        obj9.children = items2;
        tmp9 = callback2(require(8416) /* TwinButtons */.TwinButtons, obj9);
      }
    }
    obj8.children = tmp9;
    items1[2] = callback(require(4965) /* ButtonGroup */.ButtonGroup, obj8);
    let tmp14 = null;
    if (null != countdown2) {
      const obj11 = {};
      const items3 = [, ];
      ({ text: arr2[0], spacing: arr2[1] } = tmp);
      obj11.style = items3;
      obj11.deadline = countdown2;
      tmp14 = callback(importDefault(10196), obj11);
    }
    items1[3] = tmp14;
    obj6.children = items1;
    return callback2(closure_5, obj6);
  }
};
export const ChatInputGuardContainer = function ChatInputGuardContainer(screenIndex) {
  let children;
  let onJumpToPresent;
  screenIndex = screenIndex.screenIndex;
  const channelId = screenIndex.channelId;
  ({ onJumpToPresent, children } = screenIndex);
  const tmp = importDefault(8869)();
  const tmp2 = callback3(tmp);
  const items = [screenIndex];
  let obj = {};
  const items1 = [tmp2.container, ];
  const callback = React.useCallback((nativeEvent) => {
    outer1_6(screenIndex, nativeEvent.nativeEvent.layout.height);
  }, items);
  items1[1] = importDefault(11395)({ isCreatingThread: false });
  obj.style = items1;
  obj.onLayout = callback;
  obj.collapsable = false;
  let tmp6 = null;
  if (!tmp) {
    obj = { style: tmp2.underlay };
    tmp6 = callback(closure_5, obj);
  }
  const items2 = [tmp6, , ];
  obj = { style: tmp2.content };
  let tmp11 = null;
  if (tmp) {
    tmp11 = callback(importDefault(4662), { absolute: true, wide: true, tall: true, mix: true });
  }
  const items3 = [tmp11, children];
  obj.children = items3;
  items2[1] = closure_8(closure_5, obj);
  let tmp15 = null;
  if (obj4.isIOS()) {
    tmp15 = null;
    if (null != channelId) {
      const obj1 = { channelId, screenIndex, onJumpToPresent };
      tmp15 = callback(importDefault(11403), obj1);
    }
  }
  items2[2] = tmp15;
  obj.children = items2;
  return closure_8(closure_5, obj);
};
