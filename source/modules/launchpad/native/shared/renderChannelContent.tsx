// Module ID: 15664
// Function ID: 120821
// Name: ChannelContent
// Dependencies: [31, 27, 10260, 4326, 33, 4130, 477, 15659, 4623, 15665, 4126, 4652, 7576, 14971, 2]
// Exports: default

// Module 15664 (ChannelContent)
import result from "result";
import { View } from "get ActivityIndicator";
import { SUBTITLE_OPACITY_NORMAL } from "hairlineWidth";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "set";
import set from "hairlineWidth";

let closure_7;
let closure_8;
const require = arg1;
function ChannelContent(arg0) {
  let channel;
  let channelCategoryName;
  let connected;
  let isSubscriptionGated;
  let lastMessageTimestampString;
  let locked;
  let mentionBadge;
  let mentionCount;
  let muted;
  let name;
  let needSubscriptionToAccess;
  let resolvedUnreadSetting;
  let subtitle;
  let unread;
  ({ subtitle, resolvedUnreadSetting, locked, muted, lastMessageTimestampString, channel, channelCategoryName, mentionCount, mentionBadge, isSubscriptionGated } = arg0);
  ({ name, unread, connected, needSubscriptionToAccess } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let tmp3 = null != channel;
  if (tmp3) {
    if (!locked) {
      locked = importDefault(4623)(channel);
    }
    tmp3 = locked;
  }
  if (null != channel) {
    let isNSFWResult = channel.isNSFW();
  }
  const isValidElementResult = validElement.isValidElement(subtitle);
  let tmp8 = null != lastMessageTimestampString;
  let tmp9 = tmp8;
  if (tmp8) {
    tmp9 = null == mentionBadge;
  }
  let obj = { style: tmp.channelContent };
  obj = { style: tmp.channelContainer };
  obj = {};
  const items = [tmp.leftBox, ];
  const obj1 = {};
  let str = "center";
  if (isValidElementResult) {
    str = "space-between";
  }
  obj1.justifyContent = str;
  items[1] = obj1;
  obj.style = items;
  const obj2 = {};
  const obj3 = { flexDirection: "row", paddingRight: null, alignItems: "center" };
  let num2 = 0;
  if (tmp9) {
    num2 = 30;
  }
  obj3.paddingRight = num2;
  obj2.style = obj3;
  const obj4 = { title: name, muted, unread };
  const tmp10 = callback;
  const tmp11 = View;
  const tmp12 = closure_8;
  const tmp13 = View;
  const tmp14 = closure_8;
  const tmp15 = View;
  const tmp16 = closure_8;
  const tmp17 = View;
  const tmp18 = callback;
  const tmp2 = importDefault(15659)();
  if (null == resolvedUnreadSetting) {
    resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  }
  obj4.resolvedUnreadSetting = resolvedUnreadSetting;
  obj4.connected = connected;
  const items1 = [tmp18(importDefault(15665), obj4), , ];
  let tmp21 = null;
  if (null != channelCategoryName) {
    const obj5 = { variant: "text-xs/bold", color: "text-muted" };
    const obj6 = { marginRight: 4 };
    obj5.style = obj6;
    obj5.children = channelCategoryName;
    tmp21 = callback(require(4126) /* Text */.Text, obj5);
  }
  items1[1] = tmp21;
  let tmp26Result = tmp3;
  if (!tmp3) {
    tmp26Result = isNSFWResult;
  }
  if (tmp26Result) {
    const obj7 = {};
    const items2 = [tmp.channelTraits, ];
    const obj8 = {};
    let num6 = 1;
    if (tmp3) {
      num6 = 1;
      if (isNSFWResult) {
        num6 = 2;
      }
    }
    obj8.maxWidth = 14 * num6;
    items2[1] = obj8;
    obj7.style = items2;
    if (tmp3) {
      const obj9 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      tmp3 = callback(require(4652) /* LockIcon */.LockIcon, obj9);
    }
    const items3 = [tmp3, , ];
    if (isNSFWResult) {
      const obj10 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      isNSFWResult = callback(require(7576) /* WarningIcon */.WarningIcon, obj10);
    }
    items3[1] = isNSFWResult;
    if (isSubscriptionGated) {
      const obj11 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
      isSubscriptionGated = callback(importDefault(14971), obj11);
    }
    items3[2] = isSubscriptionGated;
    obj7.children = items3;
    tmp26Result = closure_8(View, obj7);
    const tmp26 = closure_8;
    const tmp27 = View;
  }
  items1[2] = tmp26Result;
  obj2.children = items1;
  const items4 = [tmp16(tmp17, obj2), ];
  let tmp38Result = null;
  if (isValidElementResult) {
    const obj12 = {};
    const obj13 = {};
    let num11 = 0;
    if (null != mentionCount) {
      num11 = mentionCount;
    }
    let num12 = 0;
    if (num11 > 0) {
      num12 = 20;
    }
    obj13.paddingRight = num12;
    const items5 = [obj13, ];
    const obj14 = { marginTop: tmp2.messagePreview.margin.marginTop };
    items5[1] = obj14;
    obj12.style = items5;
    obj12.children = subtitle;
    tmp38Result = callback(View, obj12);
    const tmp38 = callback;
    const tmp39 = View;
  }
  items4[1] = tmp38Result;
  obj.children = items4;
  const items6 = [tmp14(tmp15, obj), ];
  const obj15 = { style: tmp9 ? tmp.rightContentAbsolute : tmp.rightBox };
  let tmp43Result = tmp8;
  if (tmp8) {
    const obj16 = { variant: "text-xs/medium", color: "text-muted", style: null, maxFontSizeMultiplier: 1.75 };
    const obj17 = { marginLeft: "auto" };
    let num14 = 1;
    if (!muted) {
      num14 = SUBTITLE_OPACITY_NORMAL;
    }
    obj17.opacity = num14;
    obj16.style = obj17;
    obj16.children = lastMessageTimestampString;
    tmp43Result = callback(require(4126) /* Text */.Text, obj16);
    const tmp43 = callback;
  }
  const items7 = [tmp43Result, , ];
  const obj18 = {};
  const items8 = [{ alignItems: "center", paddingLeft: 4 }, ];
  if (tmp8) {
    const obj19 = { marginTop: 5 };
    tmp8 = obj19;
  }
  items8[1] = tmp8;
  obj18.style = items8;
  obj18.children = mentionBadge;
  items7[1] = callback(View, obj18);
  if (tmp9) {
    const obj20 = {};
    const obj21 = { flex: 1 };
    obj20.style = obj21;
    tmp9 = callback(View, obj20);
  }
  items7[2] = tmp9;
  obj15.children = items7;
  items6[1] = closure_8(View, obj15);
  obj.children = items6;
  obj.children = tmp12(tmp13, obj);
  return tmp10(tmp11, obj);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1 };
let num = -1;
if (set.isIOS()) {
  num = 2;
}
_createForOfIteratorHelperLoose.marginTop = num;
_createForOfIteratorHelperLoose.channelContent = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.channelContainer = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.leftBox = { flexDirection: "column", alignItems: "flex-start", flexShrink: 1 };
_createForOfIteratorHelperLoose.rightBox = { flexDirection: "column", alignItems: "flex-end" };
_createForOfIteratorHelperLoose.rightContentAbsolute = { position: "absolute", right: 0, top: 0 };
_createForOfIteratorHelperLoose.channelTraits = { display: "flex", flexDirection: "row", alignItems: "center" };
let obj1 = { opacity: SUBTITLE_OPACITY_NORMAL, marginRight: 4 };
let num2 = 0;
if (set.isAndroid()) {
  num2 = 2;
}
obj1.marginTop = num2;
_createForOfIteratorHelperLoose.channelTraitIcon = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("modules/launchpad/native/shared/renderChannelContent.tsx");

export default function renderChannelContent(arg0) {
  const merged = Object.assign(arg0);
  return callback(ChannelContent, {});
};
