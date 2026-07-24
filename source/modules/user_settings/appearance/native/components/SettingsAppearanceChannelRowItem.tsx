// Module ID: 14229
// Function ID: 109315
// Name: ChannelRowItem
// Dependencies: [31, 27, 653, 33, 4130, 689, 1273, 9134, 4126, 2]
// Exports: default

// Module 14229 (ChannelRowItem)
import "result";
import { View } from "get ActivityIndicator";
import { StatusTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import Button from "Button";

let closure_4;
let closure_5;
const require = arg1;
let num = 0;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_4, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, paddingRight: require("_createForOfIteratorHelperLoose").space.PX_16, paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.channelItemContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.channelItemLeft = { alignItems: "center", justifyContent: "center" };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, height: 8, width: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.round, margin: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.channelItemUnreadIndicator = obj1;
let obj2 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_8, justifyContent: "center", alignItems: "center" };
_createForOfIteratorHelperLoose.channelItemAvatar = obj2;
_createForOfIteratorHelperLoose.channelItemContent = { flexDirection: "column", flex: 1, justifyContent: "center" };
let obj3 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_4, justifyContent: "space-between", alignItems: "center" };
_createForOfIteratorHelperLoose.channelItemTop = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj4 = { direction: require("Button").CutoutDirection.BOTTOM_RIGHT };
const statusSize = Button.getStatusSize(require("Button").AvatarSizes.LARGE_48);
if (null != statusSize) {
  num = statusSize;
}
obj4.radius = num / 2 + 4;
obj4.imageType = require("Button").CutoutType.CIRCULAR;
obj4.inset = -4;
const result = require("ME").fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceChannelRowItem.tsx");

export default function ChannelRowItem(isUnread) {
  let animatedStyles;
  let avatar1;
  let avatar2;
  let preview;
  let status;
  let timestamp;
  let title;
  ({ animatedStyles, preview, avatar1, avatar2, status } = isUnread);
  ({ title, timestamp } = isUnread);
  if (status === undefined) {
    status = StatusTypes.ONLINE;
  }
  let flag = isUnread.isUnread;
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = _createForOfIteratorHelperLoose();
  let obj = { style: tmp2.channelItemContainer };
  obj = { style: tmp2.channelItemLeft };
  obj = {};
  const items = [tmp2.channelItemUnreadIndicator, ];
  const obj1 = {};
  let num = 0;
  if (flag) {
    num = 1;
  }
  obj1.opacity = num;
  items[1] = obj1;
  obj.style = items;
  obj.children = callback(View, obj);
  const items1 = [callback(View, obj), , ];
  const obj2 = { style: tmp2.channelItemAvatar };
  if (null != avatar2) {
    const obj3 = {};
    const items2 = [avatar1, avatar2];
    obj3.sources = items2;
    obj3.size = require(1273) /* Button */.AvatarSizes.LARGE_48;
    let tmp12 = callback(require(9134) /* FacepileGroupDMAvatar */.FacepileGroupDMAvatar, obj3);
  } else {
    const obj4 = { status, source: avatar1 };
    obj4.cutout = obj4;
    obj4.size = require(1273) /* Button */.AvatarSizes.LARGE_48;
    tmp12 = callback(require(1273) /* Button */.Avatar, obj4);
  }
  obj2.children = tmp12;
  items1[1] = callback(View, obj2);
  const obj5 = { style: tmp2.channelItemContent };
  const obj6 = { style: tmp2.channelItemTop };
  const obj7 = { animated: true, style: flag ? animatedStyles.textNormal : animatedStyles.textMuted, variant: "redesign/channel-title/semibold", children: title };
  const items3 = [callback(require(4126) /* Text */.Text, obj7), ];
  const obj8 = { animated: true, style: animatedStyles.textMuted, variant: "text-xs/medium", children: timestamp };
  items3[1] = callback(require(4126) /* Text */.Text, obj8);
  obj6.children = items3;
  const items4 = [closure_5(View, obj6), ];
  if (null == preview) {
    items4[1] = null;
    obj5.children = items4;
    items1[2] = tmp16(tmp17, obj5);
    obj.children = items1;
    return closure_5(tmp4, obj);
  } else {
    const obj9 = { animated: true, style: flag ? animatedStyles.textNormal : animatedStyles.textMuted, variant: "redesign/message-preview/medium", lineClamp: 1, children: preview };
    callback(require(4126) /* Text */.Text, obj9);
    const tmp19 = callback;
  }
};
