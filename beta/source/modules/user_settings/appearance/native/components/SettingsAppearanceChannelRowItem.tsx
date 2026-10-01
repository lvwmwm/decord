// Module ID: 14837
// Function ID: 14838
// Name: SettingsAppearanceChannelRowItem
// Dependencies: [19, 17, 1074, 21, 4836, 576, 1177, 10371, 4832, 2]
// Exports: default

// Module 14837 (SettingsAppearanceChannelRowItem)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import GroupDMAvatar from "GroupDMAvatar" /* 10371 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import native_mod from "native" /* 1177 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let native;
let num;
let obj2;
let obj3;
let obj4;
let size;
const View = react_native.View;
const StatusTypes = Constants.StatusTypes;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { channelItemContainer: obj2, channelItemLeft: { alignItems: "center", justifyContent: "center" }, channelItemUnreadIndicator: size, channelItemAvatar: obj3, channelItemContent: { flexDirection: "column", flex: 1, justifyContent: "center" }, channelItemTop: obj4 };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, paddingVertical: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_16, paddingLeft: nativeDefault.space.PX_8 };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 8, width: 8, borderRadius: nativeDefault.radii.round, margin: nativeDefault.space.PX_8 };
obj3 = { marginRight: nativeDefault.space.PX_8, justifyContent: "center", alignItems: "center" };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_4, justifyContent: "space-between", alignItems: "center" };
let closure_6 = createStyles(obj);
let obj5 = { direction: native.CutoutDirection.BOTTOM_RIGHT, radius: num / 2 + 4, imageType: native.CutoutType.CIRCULAR, inset: -4 };
native = native_mod;
num = native.getStatusSize(native.AvatarSizes.LARGE_48);
if (num == null) {
  num = 0;
}
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelRowItem.tsx");

export default function ChannelRowItem(isUnread) {
  let animatedStyles;
  let avatar1;
  let avatar2;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let preview;
  let status;
  let timestamp;
  let title;
  let tmp5Result;
  let tmp6;
  ({ animatedStyles, preview, avatar1, avatar2, status } = isUnread);
  ({ title, timestamp } = isUnread);
  if (status === undefined) {
    status = StatusTypes.ONLINE;
  }
  let flag = isUnread.isUnread;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = closure_6();
  const obj = { style: tmp2.channelItemContainer, children: items1 };
  const obj2 = { style: tmp2.channelItemLeft, children: React3(View, { style: items }) };
  items = [tmp2.channelItemUnreadIndicator, ];
  let num = 0;
  if (flag) {
    num = 1;
  }
  items[1] = { opacity: num };
  items1 = [React3(View, obj2), , ];
  const obj3 = { style: tmp2.channelItemAvatar, children: tmp5Result };
  if (null != avatar2) {
    const obj4 = { sources: items2, size: native.AvatarSizes.LARGE_48 };
    items2 = [avatar1, avatar2];
    const FacepileGroupDMAvatar = GroupDMAvatar.FacepileGroupDMAvatar;
    tmp5Result = tmp5(FacepileGroupDMAvatar, obj4);
    tmp6 = require;
  } else {
    tmp6 = require;
    obj5 = { status, source: avatar1, cutout: obj5, size: native.AvatarSizes.LARGE_48 };
    const Avatar = native.Avatar;
    tmp5Result = tmp5(Avatar, obj5);
  }
  items1[1] = React3(View, obj3);
  const obj7 = { style: tmp2.channelItemTop, children: items3 };
  items3 = [, ];
  const obj6 = { style: tmp2.channelItemContent, children: items4 };
  const obj8 = { animated: true, style: flag ? animatedStyles.textNormal : animatedStyles.textMuted, variant: "redesign/channel-title/semibold", children: title };
  items3[0] = React3(tmp6(4832).Text, obj8);
  const obj9 = { animated: true, style: animatedStyles.textMuted, variant: "text-xs/medium", children: timestamp };
  items3[1] = React3(tmp6(4832).Text, obj9);
  items4 = [hasOwnProperty(View, obj7), ];
  let tmp5Result2 = null;
  if (null != preview) {
    const obj10 = { animated: true, style: flag ? animatedStyles.textNormal : animatedStyles.textMuted, variant: "redesign/message-preview/medium", lineClamp: 1, children: preview };
    tmp5Result2 = tmp5(tmp6(4832).Text, obj10);
  }
  items4[1] = tmp5Result2;
  items1[2] = hasOwnProperty(View, obj6);
  return hasOwnProperty(View, obj);
};
