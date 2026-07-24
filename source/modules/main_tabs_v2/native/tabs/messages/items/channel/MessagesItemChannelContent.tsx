// Module ID: 14951
// Function ID: 113947
// Name: MessagesItemChannelContentIcon
// Dependencies: [31, 27, 4142, 10289, 4326, 33, 4130, 689, 1273, 8541, 8542, 10313, 9990, 3840, 4066, 1324, 566, 14256, 3712, 8384, 14952, 21, 4320, 14953, 3834, 8558, 8559, 4126, 8620, 8568, 10286, 3808, 9102, 1212, 14955, 2]

// Module 14951 (MessagesItemChannelContentIcon)
import { View } from "Text";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SUBTITLE_OPACITY_NORMAL } from "hairlineWidth";
import { UnreadSetting } from "ReadStateTypes";
import jsxProd from "getSystemLocale";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "ChannelListLayoutTypes";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function MessagesItemChannelContentIcon(selected) {
  let blocked;
  let favorite;
  let ignored;
  let muted;
  ({ muted, favorite, ignored, blocked } = selected);
  const tmp = callback4(selected.selected);
  if (blocked) {
    let obj = { source: importDefault(8541), size: require(1273) /* Button */.Icon.Sizes.EXTRA_SMALL };
    const items = [, ];
    ({ channelIcon: arr4[0], channelMutedIcon: arr4[1] } = tmp);
    obj.style = items;
    let tmp2 = callback(require(1273) /* Button */.Icon, obj);
  } else if (ignored) {
    obj = { source: importDefault(8542), size: require(1273) /* Button */.Icon.Sizes.EXTRA_SMALL };
    const items1 = [, ];
    ({ channelIcon: arr3[0], channelIgnoredIcon: arr3[1] } = tmp);
    obj.style = items1;
    tmp2 = callback(require(1273) /* Button */.Icon, obj);
  } else if (muted) {
    const obj1 = { source: importDefault(10313), size: require(1273) /* Button */.Icon.Sizes.EXTRA_SMALL };
    const items2 = [, ];
    ({ channelIcon: arr2[0], channelMutedIcon: arr2[1] } = tmp);
    obj1.style = items2;
    tmp2 = callback(require(1273) /* Button */.Icon, obj1);
  } else {
    tmp2 = null;
    if (favorite) {
      obj = { source: importDefault(9990), size: require(1273) /* Button */.Icon.Sizes.EXTRA_SMALL };
      const items3 = [, ];
      ({ channelIcon: arr[0], channelFavoriteIcon: arr[1] } = tmp);
      obj.style = items3;
      tmp2 = callback(require(1273) /* Button */.Icon, obj);
    }
  }
  return tmp2;
}
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
let obj = { content: { flex: 1 }, channelIcon: { alignSelf: "center" }, channelNameAndAccessories: { flexDirection: "row", alignItems: "center", width: "100%" }, channelIcons: { flexDirection: "row", alignItems: "center" } };
obj = { flexDirection: "row", justifyContent: "flex-end", marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.channelAccessoriesContainer = obj;
_createForOfIteratorHelperLoose = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_4, paddingVertical: 1 };
obj.channelAccessories = _createForOfIteratorHelperLoose;
let obj2 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4, flex: 1, minWidth: 0 };
obj.channelNameAndBadge = obj2;
obj.botTag = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj3 = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.contentPadded = { paddingRight: require("_createForOfIteratorHelperLoose").space.PX_40 };
let closure_10 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_11 = _createForOfIteratorHelperLoose.createStyles((arg0, arg1, arg2, arg3, arg4) => {
  let obj = {};
  obj = {};
  if (arg2) {
    let MOBILE_TEXT_HEADING_PRIMARY = importDefault(689).colors.TEXT_MUTED;
  } else {
    if (!arg0) {
      if (!arg1) {
        MOBILE_TEXT_HEADING_PRIMARY = importDefault(689).colors.MESSAGES_ITEM_CHANNEL_TEXT_DEFAULT;
      }
    }
    MOBILE_TEXT_HEADING_PRIMARY = importDefault(689).colors.MOBILE_TEXT_HEADING_PRIMARY;
  }
  obj.color = MOBILE_TEXT_HEADING_PRIMARY;
  obj.channelText = obj;
  obj.channelName = { flexShrink: 1 };
  obj = {};
  let tmp9;
  if (!arg4) {
    if (!arg2) {
      if (!arg3) {
        tmp9 = SUBTITLE_OPACITY_NORMAL;
      }
    }
  }
  obj.opacity = tmp9;
  if (arg4) {
    const obj1 = { color: importDefault(689).colors.TEXT_SUBTLE };
    let obj2 = obj1;
  } else {
    obj2 = {};
  }
  const merged = Object.assign(obj2);
  obj.timestamp = obj;
  return obj;
});
let closure_12 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { marginRight: importDefault(689).space.PX_4 };
  obj.channelIcon = obj;
  obj = {};
  const colors = importDefault(689).colors;
  obj.tintColor = arg0 ? colors.ICON_SUBTLE : colors.ICON_MUTED;
  obj.channelMutedIcon = obj;
  const obj1 = {};
  const colors2 = importDefault(689).colors;
  obj1.tintColor = arg0 ? colors2.ICON_SUBTLE : colors2.ICON_MUTED;
  obj.channelFavoriteIcon = obj1;
  const obj2 = {};
  const colors3 = importDefault(689).colors;
  obj2.tintColor = arg0 ? colors3.ICON_SUBTLE : colors3.ICON_MUTED;
  obj.channelIgnoredIcon = obj2;
  return obj;
});
let obj4 = { paddingRight: require("_createForOfIteratorHelperLoose").space.PX_40 };
const memoResult = importAllResult.memo(function MessagesItemChannelContent(channel) {
  let blocked;
  let channelSelected;
  let favorite;
  let hasActivity;
  let hasNameplate;
  let hasUnreadMessages;
  let ignored;
  let muted;
  let resolvedUnreadSetting;
  channel = channel.channel;
  ({ channelSelected, muted, ignored, blocked, hasUnreadMessages, hasNameplate } = channel);
  ({ favorite, hasActivity, resolvedUnreadSetting } = channel);
  let obj = channel(3840);
  const isThemeLightResult = obj.isThemeLight(importDefault(4066)());
  let tmp3 = hasUnreadMessages;
  if (hasUnreadMessages) {
    tmp3 = resolvedUnreadSetting === UnreadSetting.ALL_MESSAGES;
  }
  let tmp5 = muted;
  if (!muted) {
    tmp5 = ignored;
  }
  if (!tmp5) {
    tmp5 = blocked;
  }
  if (tmp5) {
    tmp5 = !channelSelected;
  }
  const tmp6 = callback2();
  const tmp7 = callback3(channelSelected, tmp3, tmp5, hasNameplate, importDefault(1324)("MessagesItemChannelContent"));
  let obj1 = channel(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_4.lastMessageId(channel.id));
  const tmp9 = importDefault(14256)(channel, { unread: hasUnreadMessages });
  let tmp10 = null != tmp9;
  if (tmp10) {
    let obj2 = importDefault(3712)();
    tmp10 = obj2.diff(tmp9.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
    const tmp13 = obj2.diff(tmp9.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
  }
  if (tmp10) {
    tmp10 = !importDefault(8384)(channel.id);
  }
  let obj3 = channel(14952);
  obj = {};
  let obj5 = importDefault(21);
  let id = stateFromStores;
  if (null == stateFromStores) {
    id = channel.id;
  }
  obj.timestamp = obj5.extractTimestamp(id);
  const relativeTimestamp = obj3.useRelativeTimestamp(obj);
  let tmp17 = channel.isPrivate() && !channel.isMultiUserDM() && null != channel.recipients;
  if (tmp17) {
    tmp17 = channel.recipients.length > 0;
  }
  const tmp18 = importDefault(4320)(channel);
  const tmp19 = importDefault(14953)(channel, stateFromStores);
  const waveShouldShow = tmp19.waveShouldShow;
  obj = {};
  let obj7 = channel(3834);
  obj.variant = obj7.useToken(importDefault(689).modules.mobile.MESSAGES_ITEM_CHANNEL_NAME_TEXT_STYLE);
  const items1 = [, ];
  ({ channelText: arr2[0], channelName: arr2[1] } = tmp7);
  obj.style = items1;
  obj.lineClamp = 1;
  obj.ellipsizeMode = "tail";
  obj1 = { style: tmp6.content };
  obj2 = { style: tmp6.channelNameAndAccessories };
  obj3 = { style: tmp6.channelNameAndBadge };
  if (channel.isDM()) {
    if (null != channel.recipients) {
      if (channel.recipients.length > 0) {
        const obj4 = { userId: channel.recipients[0], userName: tmp18 };
        const EffectDisplayType = channel(8559).EffectDisplayType;
        obj4.effectDisplayType = channelSelected ? EffectDisplayType.STATIC : EffectDisplayType.PLAIN;
        obj = Object.assign(obj);
        callback(importDefault(8558), obj4);
        const tmp23 = callback;
        const tmp26 = importDefault(8558);
      }
    }
  }
  obj5 = {};
  const merged = Object.assign(obj);
  obj5["children"] = tmp18;
  const items2 = [callback(channel(4126).Text, obj5), , ];
  let tmp32 = null;
  if (tmp17) {
    const obj6 = { userId: channel.recipients[0], disabledTooltip: true };
    tmp32 = callback(importDefault(8620), obj6);
  }
  items2[1] = tmp32;
  let tmp36 = null;
  if (channel.isSystemDM()) {
    obj7 = { style: tmp6.botTag, type: importDefault(8568).Types.SYSTEM_DM, verified: true };
    tmp36 = callback(importDefault(8568), obj7);
    const tmp40 = importDefault(8568);
  }
  items2[2] = tmp36;
  obj3.children = items2;
  const items3 = [closure_8(View, obj3), ];
  const obj8 = {};
  const items4 = [tmp6.channelAccessoriesContainer, ];
  const obj9 = {};
  let num11 = 0;
  if (hasNameplate) {
    num11 = 0;
    if (!waveShouldShow) {
      num11 = 40;
    }
  }
  obj9.minWidth = num11;
  items4[1] = obj9;
  obj8.style = items4;
  const obj10 = {};
  const items5 = [tmp6.channelAccessories, , ];
  let tmp45;
  if (waveShouldShow) {
    const obj11 = { paddingVertical: 0 };
    tmp45 = obj11;
  }
  items5[1] = tmp45;
  if (!hasNameplate) {
    items5[2] = undefined;
    obj10.style = items5;
    const obj12 = { style: tmp6.channelIcons };
    const obj13 = { muted, favorite, ignored, blocked, selected: channelSelected };
    obj12.children = callback(MessagesItemChannelContentIcon, obj13);
    const items6 = [callback(View, obj12), ];
    let tmp54 = !waveShouldShow;
    if (tmp54) {
      const obj14 = { style: null, variant: "text-xs/medium", lineClamp: 1 };
      const items7 = [, ];
      ({ channelText: arr8[0], timestamp: arr8[1] } = tmp7);
      obj14.style = items7;
      obj14.children = relativeTimestamp;
      tmp54 = callback(channel(4126).Text, obj14);
    }
    items6[1] = tmp54;
    obj10.children = items6;
    obj8.children = closure_8(View, obj10);
    items3[1] = callback(View, obj8);
    obj2.children = items3;
    const items8 = [tmp20(tmp21, obj2), ];
    const obj15 = {};
    let contentPadded;
    if (hasNameplate) {
      if (!waveShouldShow) {
        contentPadded = tmp6.contentPadded;
      }
    }
    obj15.style = contentPadded;
    if (tmp10) {
      const obj16 = { message: tmp9, channel };
      let str6 = "text-muted";
      let str7 = "text-muted";
      if (!tmp5) {
        if (channelSelected) {
          str6 = "mobile-text-heading-primary";
        }
        str7 = str6;
      }
      obj16.color = str7;
      obj16.layout = channel(3808).ChannelListLayoutTypes.COZY_DRAWER_SMOL;
      obj16.muted = muted;
      let tmp67Result = callback(channel(10286).ChannelRowPreview, obj16);
      const tmp72 = callback;
    } else if (channel.isDM()) {
      const obj17 = { textStyle: tmp7.channelText, userId: channel.getRecipientId() };
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      obj17.guildId = guild_id;
      tmp67Result = callback(importDefault(9102), obj17);
      const tmp67 = callback;
      const tmp70 = importDefault(9102);
    } else {
      tmp67Result = null;
      if (importDefault(8384)(channel.id)) {
        const obj18 = { variant: "text-xs/medium", style: tmp7.channelText, lineClamp: 1 };
        const intl = channel(1212).intl;
        obj18.children = intl.string(channel(1212).t.FL5T01);
        tmp67Result = callback(channel(4126).Text, obj18);
      }
    }
    obj15.children = tmp67Result;
    items8[1] = callback(View, obj15);
    obj1.children = items8;
    const obj19 = {};
    const items9 = [tmp20(tmp21, obj1), ];
    let tmp79 = null;
    if (waveShouldShow) {
      const obj20 = { wavePressed: tmp19.wavePressed, hasNameplate };
      tmp79 = callback(importDefault(14955), obj20);
    }
    items9[1] = tmp79;
    obj19.children = items9;
    return closure_8(closure_9, obj19);
  } else {
    const obj21 = {};
    if (isThemeLightResult) {
      let num13 = 0.3;
      if (channelSelected) {
        num13 = 0.6;
      }
      const _HermesInternal2 = HermesInternal;
      let combined = "rgba(255, 255, 255, " + num13 + ")";
    } else {
      let num12 = 0.25;
      if (channelSelected) {
        num12 = 0.7;
      }
      const _HermesInternal = HermesInternal;
      combined = "rgba(0, 0, 0, " + num12 + ")";
    }
    obj21.backgroundColor = combined;
  }
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelContent.tsx");

export default memoResult;
