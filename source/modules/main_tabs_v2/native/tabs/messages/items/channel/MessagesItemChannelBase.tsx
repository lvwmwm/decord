// Module ID: 14765
// Function ID: 111325
// Name: MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING
// Dependencies: []

// Module 14765 (MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING)
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const ActivityTypes = arg1(dependencyMap[9]).ActivityTypes;
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[10]));
const tmp2 = arg1(dependencyMap[10]);
let closure_15 = arg1(dependencyMap[11]).createStyles((arg0) => {
  let obj = {};
  obj = { marginBottom: 1, borderRadius: importDefault(dependencyMap[12]).radii.md, marginHorizontal: importDefault(dependencyMap[12]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[12]).space.PX_8 };
  let num = 0;
  if (!arg0) {
    num = importDefault(dependencyMap[12]).space.PX_8;
  }
  obj.paddingVertical = num;
  let PX_4;
  if (arg0) {
    PX_4 = importDefault(dependencyMap[12]).space.PX_4;
  }
  obj.marginVertical = PX_4;
  obj.flexDirection = "row";
  obj.alignItems = "center";
  obj.flex = 1;
  obj.pressable = obj;
  obj = { borderRadius: importDefault(dependencyMap[12]).radii.md };
  obj.nameplate = obj;
  obj.rowDefault = { backgroundColor: importDefault(dependencyMap[12]).colors.PANEL_BG };
  const obj1 = { backgroundColor: importDefault(dependencyMap[12]).colors.PANEL_BG };
  obj.rowActive = { backgroundColor: importDefault(dependencyMap[12]).colors.INTERACTIVE_BACKGROUND_ACTIVE };
  const obj3 = { "Bool(false)": true, "Bool(false)": "/assets/modules/stage_channels/native/images", "Bool(false)": 25, "Bool(false)": 24, "Bool(false)": null, "Bool(false)": "b252f7dc065300671ba9347414eb0bad", borderColor: importDefault(dependencyMap[12]).colors.BORDER_MUTED, borderRadius: importDefault(dependencyMap[12]).radii.md };
  obj.selectedBorder = obj3;
  const obj2 = { backgroundColor: importDefault(dependencyMap[12]).colors.INTERACTIVE_BACKGROUND_ACTIVE };
  obj.rowSelected = { borderRadius: importDefault(dependencyMap[12]).radii.md, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_MOD_MUTED };
  return obj;
});
const obj2 = arg1(dependencyMap[11]);
const memoResult = importAllResult.memo(function MessagesItemChannelBase(channel) {
  let activities;
  let blocked;
  let favorite;
  let ignored;
  let isIncomingCall;
  let isOngoingCall;
  let muted;
  let resolvedUnreadSetting;
  let status;
  channel = channel.channel;
  const arg1 = channel;
  const height = channel.height;
  const importDefault = height;
  const isGradientTheme = channel.isGradientTheme;
  const dependencyMap = isGradientTheme;
  let closure_7;
  let obj = arg1(dependencyMap[13]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let id;
    const channelId = channelId.getChannelId(null);
    if (null != channel) {
      id = channel.id;
    }
    return channelId === id;
  });
  let callback = stateFromStores;
  const tmp2 = callback3(importDefault(dependencyMap[14])("MessagesItemChannelBase"));
  const items1 = [height];
  const items2 = [tmp2, stateFromStores];
  const memo = importAllResult.useMemo(() => ({ height, overflow: "hidden" }), items1);
  const memo1 = importAllResult.useMemo(() => {
    const items = [tmp2.pressable, ];
    let rowSelected;
    if (stateFromStores) {
      rowSelected = tmp2.rowSelected;
    }
    items[1] = rowSelected;
    return items;
  }, items2);
  let obj1 = arg1(dependencyMap[13]);
  const items3 = [closure_6];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items3, () => {
    if (channel.isDM()) {
      const activities = store.getActivities(channel.getRecipientId());
    }
    const obj = {};
    if (channel.isDM()) {
      obj.status = store.getStatus(channel.getRecipientId());
      obj.activities = activities;
      let tmp4 = obj;
    } else {
      obj.status = undefined;
      obj.activities = undefined;
      tmp4 = obj;
    }
    return tmp4;
  });
  ({ status, activities } = stateFromStoresObject);
  let obj2 = arg1(dependencyMap[13]);
  const items4 = [closure_7];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items4, () => {
    const mentionCount = tmp14.getMentionCount(channel.id);
    const obj = { mentionCount };
    let tmp2 = mentionCount > 0;
    if (!tmp2) {
      let hasUnreadResult = null != channel.getGuildId();
      if (hasUnreadResult) {
        hasUnreadResult = tmp14.hasUnread(channel.id);
      }
      tmp2 = hasUnreadResult;
    }
    obj.hasUnreadMessages = tmp2;
    return obj;
  });
  const hasUnreadMessages = stateFromStoresObject1.hasUnreadMessages;
  ({ isIncomingCall, isOngoingCall } = importDefault(dependencyMap[15])(channel.id));
  let obj3 = arg1(dependencyMap[13]);
  const items5 = [closure_10];
  const stateFromStoresObject2 = obj3.useStateFromStoresObject(items5, () => ({ resolvedUnreadSetting: closure_10.resolveUnreadSetting(channel), muted: closure_10.isChannelMuted(channel.getGuildId(), channel.id), favorite: closure_10.isMessagesFavorite(channel.id) }));
  ({ resolvedUnreadSetting, muted, favorite } = stateFromStoresObject2);
  let obj4 = arg1(dependencyMap[13]);
  const items6 = [closure_8];
  const stateFromStoresObject3 = obj4.useStateFromStoresObject(items6, () => {
    const obj = {};
    const tmp = !channel.isDM();
    let isIgnoredResult = !tmp;
    if (!tmp) {
      isIgnoredResult = closure_8.isIgnored(channel.getRecipientId());
    }
    obj.ignored = isIgnoredResult;
    const tmp5 = !channel.isDM();
    let isBlockedResult = !tmp5;
    if (!tmp5) {
      isBlockedResult = closure_8.isBlocked(channel.getRecipientId());
    }
    obj.blocked = isBlockedResult;
    return obj;
  });
  ({ ignored, blocked } = stateFromStoresObject3);
  let obj5 = arg1(dependencyMap[13]);
  const items7 = [closure_11];
  const stateFromStores1 = obj5.useStateFromStores(items7, () => {
    let recipientId;
    if (true === channel.isDM()) {
      recipientId = channel.getRecipientId();
    }
    return user.getUser(recipientId);
  });
  const tmp11 = callback(tmp2.useState(false), 2);
  const first = tmp11[0];
  const View = first;
  closure_6 = tmp11[1];
  let obj6 = arg1(dependencyMap[16]);
  const nameplate = obj6.useNameplate({ user: stateFromStores1 });
  let tmp14 = null != nameplate;
  if (tmp14) {
    let tmp15 = stateFromStores;
    if (!stateFromStores) {
      tmp15 = first;
    }
    tmp14 = tmp15;
  }
  closure_7 = tmp14;
  const items8 = [stateFromStores, tmp14, isGradientTheme, first, tmp2];
  const items9 = [, ];
  ({ guild_id: arr10[0], id: arr10[1] } = channel);
  const memo2 = importAllResult.useMemo(() => {
    if (obj.isIOS()) {
      if (!isGradientTheme) {
        if (!tmp14) {
          if (first) {
            let backgroundColor = channel(isGradientTheme[18]).flattenColorOverOpaqueBackground(tmp2.rowActive.backgroundColor, tmp2.rowDefault.backgroundColor);
            const obj3 = channel(isGradientTheme[18]);
          } else if (stateFromStores) {
            backgroundColor = channel(isGradientTheme[18]).flattenColorOverOpaqueBackground(tmp2.rowSelected.backgroundColor, tmp2.rowDefault.backgroundColor);
            const obj2 = channel(isGradientTheme[18]);
          } else {
            backgroundColor = tmp2.rowDefault.backgroundColor;
          }
          return backgroundColor;
        }
      }
    }
  }, items8);
  callback = importAllResult.useCallback(() => {
    height(isGradientTheme[19]).preload(channel.guild_id, channel.id);
    store(true);
  }, items9);
  const items10 = [channel.id];
  const callback1 = importAllResult.useCallback(() => {
    store(false);
  }, []);
  const items11 = [channel.id];
  const callback2 = importAllResult.useCallback(() => {
    channel(isGradientTheme[20]).transitionToChannel(channel.id);
  }, items10);
  obj = { style: memo, collapsable: false };
  const callback3 = importAllResult.useCallback(() => {
    const result = channel(isGradientTheme[21]).openChannelLongPressActionSheet(channel.id);
  }, items11);
  obj = { onPressIn: callback, onPressOut: callback1, onPress: callback2, onLongPress: callback3, accessibilityRole: "button", accessibilityLabel: importDefault(dependencyMap[23])({ channel, unread: hasUnreadMessages, mentionCount: stateFromStoresObject1.mentionCount, isIncomingCall, isOngoingCall }) };
  const tmp22 = View;
  const tmp23 = closure_14;
  const tmp7 = importDefault(dependencyMap[15])(channel.id);
  obj.accessibilityHint = arg1(dependencyMap[23]).getChannelA11yHint({ channel, muted, userStatus: status, isFavorite: favorite });
  obj.underlayColor = tmp2.rowActive.backgroundColor;
  obj.style = memo1;
  obj1 = {};
  let tmp25;
  const obj10 = arg1(dependencyMap[23]);
  if (tmp14) {
    tmp25 = nameplate;
  }
  obj1.nameplate = tmp25;
  obj1.isFocused = stateFromStores;
  obj1.isPressed = first;
  let tmp26 = muted;
  if (!muted) {
    tmp26 = ignored;
  }
  if (!tmp26) {
    tmp26 = blocked;
  }
  obj1.isMuted = tmp26;
  obj1.fadeIn = first;
  obj1.style = tmp2.nameplate;
  const items12 = [callback2(importDefault(dependencyMap[24]), obj1), , , , ];
  let tmp27 = stateFromStores;
  if (stateFromStores) {
    obj2 = { style: tmp2.selectedBorder, pointerEvents: "none" };
    tmp27 = callback2(View, obj2);
  }
  items12[1] = tmp27;
  obj3 = { unread: hasUnreadMessages, resolvedUnreadSetting, muted };
  const tmp24 = importDefault(dependencyMap[24]);
  const tmp30 = callback2;
  obj3.layout = arg1(dependencyMap[26]).ChannelListLayoutTypes.COZY_DRAWER_SMOL;
  obj3.panelVariant = true;
  items12[2] = callback2(importDefault(dependencyMap[25]), obj3);
  obj4 = { value: memo2 };
  obj5 = { channel, channelSelected: stateFromStores, hasUnreadMessages, muted, ignored, blocked };
  const tmp31 = importDefault(dependencyMap[25]);
  obj5.isStreaming = importDefault(dependencyMap[29])(activities);
  obj5.status = status;
  obj4.children = callback2(importDefault(dependencyMap[28]), obj5);
  items12[3] = callback2(arg1(dependencyMap[27]).CutoutBackgroundContext.Provider, obj4);
  obj6 = { channel, channelSelected: stateFromStores, favorite, muted, ignored, blocked };
  let someResult;
  const tmp32 = importDefault(dependencyMap[28]);
  if (null != activities) {
    someResult = activities.some((type) => type.type !== constants.CUSTOM_STATUS);
  }
  obj6.hasActivity = true === someResult;
  obj6.hasUnreadMessages = hasUnreadMessages;
  obj6.resolvedUnreadSetting = resolvedUnreadSetting;
  obj6.hasNameplate = tmp14;
  items12[4] = tmp30(importDefault(dependencyMap[30]), obj6);
  obj.children = items12;
  obj.children = tmp23(arg1(dependencyMap[22]).PressableHighlight, obj);
  return callback2(tmp22, obj);
});
const result = arg1(dependencyMap[31]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/channel/MessagesItemChannelBase.tsx");

export default memoResult;
export const MESSAGES_ITEM_CHANNEL_PRESSABLE_PADDING = 1;
