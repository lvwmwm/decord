// Module ID: 15354
// Function ID: 117216
// Name: ChannelContentComponent
// Dependencies: [31, 27, 10260, 4326, 33, 4130, 477, 10261, 4623, 15355, 4652, 7576, 14971, 4126, 2]
// Exports: renderChannelContent

// Module 15354 (ChannelContentComponent)
import result from "result";
import { View } from "get ActivityIndicator";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "set";
import set from "hairlineWidth";

let closure_6;
let closure_7;
const require = arg1;
function ChannelContentComponent(arg0) {
  let channel;
  let connected;
  let isSubscriptionGated;
  let lastMessageTimestampString;
  let layout;
  let locked;
  let mentionBadge;
  let mentionCount;
  let muted;
  let name;
  let needSubscriptionToAccess;
  let resolvedUnreadSetting;
  let subtitle;
  let unread;
  ({ subtitle, resolvedUnreadSetting, locked, lastMessageTimestampString, channel, layout, mentionCount, mentionBadge, isSubscriptionGated } = arg0);
  ({ name, unread, muted, connected, needSubscriptionToAccess } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(10261) /* getLayoutStyles */;
  let tmp3 = null != channel;
  const layoutStyles = obj.getLayoutStyles(layout);
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
  obj = { style: tmp.channelContent };
  obj = { style: tmp.channelContainer };
  const obj1 = {};
  const items = [tmp.leftBox, ];
  const obj2 = {};
  let str = "center";
  if (isValidElementResult) {
    str = "space-between";
  }
  obj2.justifyContent = str;
  items[1] = obj2;
  obj1.style = items;
  const obj3 = {};
  const obj4 = { flexDirection: "row", paddingRight: null, alignItems: "center" };
  let num2 = 0;
  if (tmp9) {
    num2 = 30;
  }
  obj4.paddingRight = num2;
  obj3.style = obj4;
  const obj5 = { title: name, muted, unread };
  if (null == resolvedUnreadSetting) {
    resolvedUnreadSetting = UnreadSetting.ONLY_MENTIONS;
  }
  obj5.resolvedUnreadSetting = resolvedUnreadSetting;
  obj5.connected = connected;
  obj5.layout = layout;
  const items1 = [callback(importDefault(15355), obj5), ];
  let tmp22Result = tmp3;
  if (!tmp3) {
    tmp22Result = isNSFWResult;
  }
  if (tmp22Result) {
    const obj6 = {};
    const items2 = [tmp.channelTraits, ];
    const obj7 = {};
    let num4 = 1;
    if (tmp3) {
      num4 = 1;
      if (isNSFWResult) {
        num4 = 2;
      }
    }
    obj7.maxWidth = 14 * num4;
    items2[1] = obj7;
    obj6.style = items2;
    if (tmp3) {
      const obj8 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      tmp3 = callback(require(4652) /* LockIcon */.LockIcon, obj8);
    }
    const items3 = [tmp3, , ];
    if (isNSFWResult) {
      const obj9 = { size: "xxs", color: "icon-muted", style: tmp.channelTraitIcon };
      isNSFWResult = callback(require(7576) /* WarningIcon */.WarningIcon, obj9);
    }
    items3[1] = isNSFWResult;
    if (isSubscriptionGated) {
      const obj10 = { locked: needSubscriptionToAccess, isInMainTabsExperiment: true };
      isSubscriptionGated = callback(importDefault(14971), obj10);
    }
    items3[2] = isSubscriptionGated;
    obj6.children = items3;
    tmp22Result = closure_7(View, obj6);
    const tmp22 = closure_7;
    const tmp23 = View;
  }
  items1[1] = tmp22Result;
  obj3.children = items1;
  const items4 = [closure_7(View, obj3), ];
  let tmp34Result = null;
  if (isValidElementResult) {
    const obj11 = {};
    const obj12 = {};
    let num9 = 0;
    if (null != mentionCount) {
      num9 = mentionCount;
    }
    let num10 = 0;
    if (num9 > 0) {
      num10 = 20;
    }
    obj12.paddingRight = num10;
    const items5 = [obj12, ];
    const obj13 = { marginTop: layoutStyles.messagePreview.margin.marginTop };
    items5[1] = obj13;
    obj11.style = items5;
    obj11.children = subtitle;
    tmp34Result = callback(View, obj11);
    const tmp34 = callback;
    const tmp35 = View;
  }
  items4[1] = tmp34Result;
  obj1.children = items4;
  const items6 = [closure_7(View, obj1), ];
  const obj14 = { style: tmp9 ? tmp.rightContentAbsolute : tmp.rightBox };
  let tmp38 = tmp8;
  if (tmp8) {
    const obj15 = { variant: "text-xs/medium", color: "text-muted", style: null, maxFontSizeMultiplier: 1.75 };
    const obj16 = { marginLeft: "auto" };
    obj15.style = obj16;
    obj15.children = lastMessageTimestampString;
    tmp38 = callback(require(4126) /* Text */.Text, obj15);
  }
  const items7 = [tmp38, , ];
  const obj17 = {};
  const items8 = [{ alignItems: "center", paddingLeft: 4 }, ];
  if (tmp8) {
    const obj18 = { marginTop: 5 };
    tmp8 = obj18;
  }
  items8[1] = tmp8;
  obj17.style = items8;
  obj17.children = mentionBadge;
  items7[1] = callback(View, obj17);
  if (tmp9) {
    const obj19 = {};
    const obj20 = { flex: 1 };
    obj19.style = obj20;
    tmp9 = callback(View, obj19);
  }
  items7[2] = tmp9;
  obj14.children = items7;
  items6[1] = closure_7(View, obj14);
  obj.children = items6;
  obj.children = closure_7(View, obj);
  return callback(View, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
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
let obj1 = { opacity: require("hairlineWidth").SUBTITLE_OPACITY_NORMAL, marginRight: 4 };
let num2 = 0;
if (set.isAndroid()) {
  num2 = 2;
}
obj1.marginTop = num2;
_createForOfIteratorHelperLoose.channelTraitIcon = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/guild_channels/ChannelContent.tsx");

export const renderChannelContent = function renderChannelContent(arg0) {
  const merged = Object.assign(arg0);
  return callback(ChannelContentComponent, {});
};
