// Module ID: 14770
// Function ID: 111357
// Name: MessagesItemChannelContentIcon
// Dependencies: []

// Module 14770 (MessagesItemChannelContentIcon)
function MessagesItemChannelContentIcon(selected) {
  let blocked;
  let favorite;
  let ignored;
  let muted;
  ({ muted, favorite, ignored, blocked } = selected);
  const tmp = callback4(selected.selected);
  if (blocked) {
    let obj = { source: importDefault(dependencyMap[9]), size: arg1(dependencyMap[8]).Icon.Sizes.EXTRA_SMALL };
    const items = [, ];
    ({ channelIcon: arr4[0], channelMutedIcon: arr4[1] } = tmp);
    obj.style = items;
    let tmp2 = callback(arg1(dependencyMap[8]).Icon, obj);
  } else if (ignored) {
    obj = { source: importDefault(dependencyMap[10]), size: arg1(dependencyMap[8]).Icon.Sizes.EXTRA_SMALL };
    const items1 = [, ];
    ({ channelIcon: arr3[0], channelIgnoredIcon: arr3[1] } = tmp);
    obj.style = items1;
    tmp2 = callback(arg1(dependencyMap[8]).Icon, obj);
  } else if (muted) {
    const obj1 = { source: importDefault(dependencyMap[11]), size: arg1(dependencyMap[8]).Icon.Sizes.EXTRA_SMALL };
    const items2 = [, ];
    ({ channelIcon: arr2[0], channelMutedIcon: arr2[1] } = tmp);
    obj1.style = items2;
    tmp2 = callback(arg1(dependencyMap[8]).Icon, obj1);
  } else {
    tmp2 = null;
    if (favorite) {
      obj = { source: importDefault(dependencyMap[12]), size: arg1(dependencyMap[8]).Icon.Sizes.EXTRA_SMALL };
      const items3 = [, ];
      ({ channelIcon: arr[0], channelFavoriteIcon: arr[1] } = tmp);
      obj.style = items3;
      tmp2 = callback(arg1(dependencyMap[8]).Icon, obj);
    }
  }
  return tmp2;
}
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const SUBTITLE_OPACITY_NORMAL = arg1(dependencyMap[3]).SUBTITLE_OPACITY_NORMAL;
const UnreadSetting = arg1(dependencyMap[4]).UnreadSetting;
const importAllResult = importAll(dependencyMap[0]);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = arg1(dependencyMap[5]));
let obj1 = arg1(dependencyMap[6]);
let obj = { content: { flex: 1 }, channelIcon: { alignSelf: "center" }, channelNameAndAccessories: { disabled: true, size: true, grow: true }, channelIcons: { -9223372036854775808: true, filter: true } };
obj = { <string:1968286294>: 127258332461896840000000000, <string:2583126653>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005562684654185707, <string:1880715347>: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005562684647563167, marginLeft: importDefault(dependencyMap[7]).space.PX_4 };
obj.channelAccessoriesContainer = obj;
obj1 = { durationLimit: 24, includeExtra: 4, position: 4, top: 4, bottom: "flex", left: "row", width: "center", borderRadius: importDefault(dependencyMap[7]).radii.xs, paddingHorizontal: importDefault(dependencyMap[7]).space.PX_4 };
obj.channelAccessories = obj1;
const tmp2 = arg1(dependencyMap[5]);
obj.channelNameAndBadge = { gap: importDefault(dependencyMap[7]).space.PX_4 };
const obj2 = { gap: importDefault(dependencyMap[7]).space.PX_4 };
obj.botTag = { marginRight: importDefault(dependencyMap[7]).space.PX_4 };
const obj3 = { marginRight: importDefault(dependencyMap[7]).space.PX_4 };
obj.contentPadded = { paddingRight: importDefault(dependencyMap[7]).space.PX_40 };
let closure_10 = obj1.createStyles(obj);
const obj4 = { paddingRight: importDefault(dependencyMap[7]).space.PX_40 };
let closure_11 = arg1(dependencyMap[6]).createStyles((arg0, arg1, arg2, arg3, arg4) => {
  let obj = {};
  obj = {};
  if (arg2) {
    let MOBILE_TEXT_HEADING_PRIMARY = importDefault(dependencyMap[7]).colors.TEXT_MUTED;
  } else {
    if (!arg0) {
      if (!arg1) {
        MOBILE_TEXT_HEADING_PRIMARY = importDefault(dependencyMap[7]).colors.MESSAGES_ITEM_CHANNEL_TEXT_DEFAULT;
      }
    }
    MOBILE_TEXT_HEADING_PRIMARY = importDefault(dependencyMap[7]).colors.MOBILE_TEXT_HEADING_PRIMARY;
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
    const obj1 = { color: importDefault(dependencyMap[7]).colors.TEXT_SUBTLE };
    let obj2 = obj1;
  } else {
    obj2 = {};
  }
  const merged = Object.assign(obj2);
  obj.timestamp = obj;
  return obj;
});
const obj9 = arg1(dependencyMap[6]);
let closure_12 = arg1(dependencyMap[6]).createStyles((arg0) => {
  let obj = {};
  obj = { marginRight: importDefault(dependencyMap[7]).space.PX_4 };
  obj.channelIcon = obj;
  obj = {};
  const colors = importDefault(dependencyMap[7]).colors;
  obj.tintColor = arg0 ? colors.ICON_SUBTLE : colors.ICON_MUTED;
  obj.channelMutedIcon = obj;
  const obj1 = {};
  const colors2 = importDefault(dependencyMap[7]).colors;
  obj1.tintColor = arg0 ? colors2.ICON_SUBTLE : colors2.ICON_MUTED;
  obj.channelFavoriteIcon = obj1;
  const obj2 = {};
  const colors3 = importDefault(dependencyMap[7]).colors;
  obj2.tintColor = arg0 ? colors3.ICON_SUBTLE : colors3.ICON_MUTED;
  obj.channelIgnoredIcon = obj2;
  return obj;
});
const obj10 = arg1(dependencyMap[6]);
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
  const arg1 = channel;
  ({ channelSelected, muted, ignored, blocked, hasUnreadMessages, hasNameplate } = channel);
  ({ favorite, hasActivity, resolvedUnreadSetting } = channel);
  let obj = arg1(dependencyMap[13]);
  const isThemeLightResult = obj.isThemeLight(importDefault(dependencyMap[14])());
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
  const tmp7 = callback3(channelSelected, tmp3, tmp5, hasNameplate, importDefault(dependencyMap[15])("MessagesItemChannelContent"));
  let obj1 = arg1(dependencyMap[16]);
  const items = [closure_4];
  const stateFromStores = obj1.useStateFromStores(items, () => closure_4.lastMessageId(channel.id));
  const tmp9 = importDefault(dependencyMap[17])(channel, { unread: hasUnreadMessages });
  let tmp10 = null != tmp9;
  if (tmp10) {
    let obj2 = importDefault(dependencyMap[18])();
    tmp10 = obj2.diff(tmp9.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
    const tmp13 = obj2.diff(tmp9.timestamp, "hours") < 1 || !hasActivity || hasUnreadMessages;
  }
  if (tmp10) {
    tmp10 = !importDefault(dependencyMap[19])(channel.id);
  }
  let obj3 = arg1(dependencyMap[20]);
  obj = {};
  let obj5 = importDefault(dependencyMap[21]);
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
  const tmp18 = importDefault(dependencyMap[22])(channel);
  const tmp19 = importDefault(dependencyMap[23])(channel, stateFromStores);
  const waveShouldShow = tmp19.waveShouldShow;
  obj = {};
  let obj7 = arg1(dependencyMap[24]);
  obj.variant = obj7.useToken(importDefault(dependencyMap[7]).modules.mobile.MESSAGES_ITEM_CHANNEL_NAME_TEXT_STYLE);
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
        const EffectDisplayType = arg1(dependencyMap[26]).EffectDisplayType;
        obj4.effectDisplayType = channelSelected ? EffectDisplayType.STATIC : EffectDisplayType.PLAIN;
        obj = Object.assign(obj);
        callback(importDefault(dependencyMap[25]), obj4);
        const tmp23 = callback;
        const tmp26 = importDefault(dependencyMap[25]);
      }
    }
  }
  obj5 = {};
  const merged = Object.assign(obj);
  obj5["children"] = tmp18;
  const items2 = [callback(arg1(dependencyMap[27]).Text, obj5), , ];
  let tmp32 = null;
  if (tmp17) {
    const obj6 = { userId: channel.recipients[0], disabledTooltip: true };
    tmp32 = callback(importDefault(dependencyMap[28]), obj6);
  }
  items2[1] = tmp32;
  let tmp36 = null;
  if (channel.isSystemDM()) {
    obj7 = { style: tmp6.botTag, type: importDefault(dependencyMap[29]).Types.SYSTEM_DM, verified: true };
    tmp36 = callback(importDefault(dependencyMap[29]), obj7);
    const tmp40 = importDefault(dependencyMap[29]);
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
      const obj14 = {};
      const items7 = [, ];
      ({ channelText: arr8[0], timestamp: arr8[1] } = tmp7);
      obj14.style = items7;
      obj14.children = relativeTimestamp;
      tmp54 = callback(arg1(dependencyMap[27]).Text, obj14);
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
      obj16.layout = arg1(dependencyMap[31]).ChannelListLayoutTypes.COZY_DRAWER_SMOL;
      obj16.muted = muted;
      let tmp67Result = callback(arg1(dependencyMap[30]).ChannelRowPreview, obj16);
      const tmp72 = callback;
    } else if (channel.isDM()) {
      const obj17 = { textStyle: tmp7.channelText, userId: channel.getRecipientId() };
      let guild_id;
      if (null != channel) {
        guild_id = channel.guild_id;
      }
      obj17.guildId = guild_id;
      tmp67Result = callback(importDefault(dependencyMap[32]), obj17);
      const tmp67 = callback;
      const tmp70 = importDefault(dependencyMap[32]);
    } else {
      tmp67Result = null;
      if (importDefault(dependencyMap[19])(channel.id)) {
        const obj18 = { 1968435297: "10", 915925470: "channel-row", 1375298031: "11", style: tmp7.channelText };
        const intl = arg1(dependencyMap[33]).intl;
        obj18.children = intl.string(arg1(dependencyMap[33]).t.FL5T01);
        tmp67Result = callback(arg1(dependencyMap[27]).Text, obj18);
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
      tmp79 = callback(importDefault(dependencyMap[34]), obj20);
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
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelContent.tsx");

export default memoResult;
