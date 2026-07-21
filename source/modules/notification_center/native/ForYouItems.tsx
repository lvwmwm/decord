// Module ID: 15019
// Function ID: 113132
// Name: ForYouFooter
// Dependencies: []

// Module 15019 (ForYouFooter)
function ForYouFooter(loading) {
  let tmp = null;
  if (loading.loading) {
    tmp = callback2(arg1(dependencyMap[17]).ForYouMentionPlaceholder, {});
  }
  return tmp;
}
function getMessagePreviewIcon(iconType) {
  if (constants2.ATTACHMENT === iconType) {
    return importDefault(dependencyMap[22]);
  } else if (constants2.STICKER === iconType) {
    return importDefault(dependencyMap[23]);
  } else if (constants2.VOICE_MESSAGE === iconType) {
    return importDefault(dependencyMap[24]);
  } else {
    return null;
  }
}
function Callout(arg0) {
  let acked;
  let compactMode;
  let item;
  ({ item, acked, compactMode } = arg0);
  const tmp = callback7();
  let obj = importAll(dependencyMap[16]);
  obj = { style: tmp.calloutContainer, pointerEvents: "none" };
  obj = { style: tmp.messagePreviewBarV2 };
  const parser = obj.getParser(callback5());
  const items = [callback2(closure_7, obj), ];
  const obj1 = { style: items1, variant: "redesign/message-preview/medium" };
  const items1 = [acked ? tmp.calloutTextAcked : tmp.calloutTextNotAcked];
  let num = 10;
  if (compactMode) {
    num = 3;
  }
  obj1.lineClamp = num;
  obj1.children = parser(item.callout);
  items[1] = callback2(arg1(dependencyMap[14]).Text, obj1);
  obj.children = items;
  return closure_22(closure_7, obj);
}
function ForYouMessagePreviewV2(item) {
  let acked;
  let compactMode;
  let content;
  let isSystemMessage;
  let roleStyle;
  item = item.item;
  const arg1 = item;
  ({ acked, compactMode, roleStyle } = item);
  const tmp = callback7();
  let obj = importAll(dependencyMap[16]);
  const item2 = { item }.item;
  const notifCenterV2MessagePreviewParser = obj.getNotifCenterV2MessagePreviewParser(callback6(), closure_28, roleStyle);
  const intl = arg1(dependencyMap[18]).intl;
  const stringResult = intl.string(arg1(dependencyMap[18]).t.BOi07B);
  let obj1 = arg1(dependencyMap[19]);
  const message = item2.message;
  let flags;
  if (null != message) {
    flags = message.flags;
  }
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  const message2 = item2.message;
  let type;
  if (null != message2) {
    type = message2.type;
  }
  const message3 = item2.message;
  let attachments;
  if (null != message3) {
    attachments = message3.attachments;
  }
  if (null == attachments) {
    attachments = [];
  }
  const message4 = item2.message;
  let stickers;
  if (null != message4) {
    stickers = message4.stickers;
  }
  if (null == stickers) {
    stickers = [];
  }
  const message5 = item2.message;
  let embeds;
  if (null != message5) {
    embeds = message5.embeds;
  }
  if (null == embeds) {
    embeds = [];
  }
  const message6 = item2.message;
  if (null != message6) {
    const interaction = message6.interaction;
  }
  if (type === constants.POLL_RESULT) {
    const message8 = item2.message;
    let first;
    if (null != message8) {
      embeds = message8.embeds;
      if (null != embeds) {
        first = embeds[0];
      }
    }
    const tmp25 = importDefault(dependencyMap[20])(first);
    let result = stringResult;
    if (null != tmp25) {
      let obj3 = arg1(dependencyMap[21]);
      result = obj3.formatPollResultNotificationCenterText(tmp25);
    }
  } else if (stickers.length > 0) {
    const intl6 = arg1(dependencyMap[18]).intl;
    result = intl6.string(arg1(dependencyMap[18]).t.7K5Lma);
    let ATTACHMENT = constants2.STICKER;
  } else if (tmp8) {
    const intl5 = tmp45(tmp46[18]).intl;
    result = intl5.string(tmp45(tmp46[18]).t.2v7kfl);
  } else if (hasFlagResult) {
    const intl4 = tmp45(tmp46[18]).intl;
    result = intl4.string(tmp45(tmp46[18]).t.6bhHrc);
    ATTACHMENT = constants2.VOICE_MESSAGE;
  } else {
    const message7 = item2.message;
    let flags1;
    if (null != message7) {
      flags1 = message7.flags;
    }
    let num2 = 0;
    if (null != flags1) {
      num2 = flags1;
    }
    if (tmp45Result.hasFlag(num2, closure_16.IS_COMPONENTS_V2)) {
      const intl3 = arg1(dependencyMap[18]).intl;
      result = intl3.string(arg1(dependencyMap[18]).t.Xxm5i3);
    } else {
      result = stringResult;
      if (tmp11) {
        const intl2 = arg1(dependencyMap[18]).intl;
        result = intl2.string(arg1(dependencyMap[18]).t.JAKsM8);
        ATTACHMENT = constants2.ATTACHMENT;
      }
      const tmp11 = attachments.length > 0 || embeds.length > 0;
    }
    const tmp45Result = tmp45(tmp46[19]);
  }
  const message9 = item2.message;
  content = undefined;
  if (null != message9) {
    content = message9.content;
  }
  let tmp29 = null != content;
  if (tmp29) {
    tmp29 = "" !== content;
  }
  obj = {};
  if (tmp29) {
    result = content;
  }
  obj.content = result;
  obj.isSystemMessage = !tmp29;
  obj.iconType = ATTACHMENT;
  const iconType = obj.iconType;
  const guild_id = item.guild_id;
  const importDefault = guild_id;
  const message_channel_id = item.message_channel_id;
  const importAll = message_channel_id;
  ({ content, isSystemMessage } = obj);
  let obj5 = arg1(tmp2[25]);
  const items = [closure_12];
  const stateFromStores = obj5.useStateFromStores(items, () => guild.getGuild(guild_id));
  const hasFlagResult = obj1.hasFlag(num, closure_16.IS_VOICE_MESSAGE);
  const items1 = [closure_11];
  const stateFromStores1 = arg1(dependencyMap[25]).useStateFromStores(items1, () => channel.getChannel(message_channel_id));
  const obj7 = arg1(dependencyMap[25]);
  const items2 = [closure_13];
  const stateFromStoresArray = arg1(dependencyMap[25]).useStateFromStoresArray(items2, () => {
    const message = item.message;
    let id;
    if (null != message) {
      id = message.author.id;
    }
    const items = [user.getUser(id)];
    const message2 = item.message;
    let mapped;
    if (null != message2) {
      const mentions = message2.mentions;
      if (null != mentions) {
        mapped = mentions.map((arg0) => user.getUser(arg0));
      }
    }
    if (null == mapped) {
      mapped = [];
    }
    HermesBuiltin.arraySpread(mapped, 1);
    return items;
  });
  obj = { style: tmp.messagePreviewContainerV2, pointerEvents: "none" };
  obj1 = { style: tmp.messagePreviewBarV2 };
  const items3 = [callback2(closure_7, obj1), ];
  const obj2 = {};
  const items4 = [acked ? tmp.messagePreviewTextV2Acked : tmp.messagePreviewTextV2NotAcked, ];
  let prop;
  if (isSystemMessage) {
    prop = tmp.messagePreviewSystemTextV2;
  }
  items4[1] = prop;
  obj2.style = items4;
  obj2.variant = "redesign/message-preview/medium";
  let num5 = 10;
  if (compactMode) {
    num5 = 3;
  }
  obj2.lineClamp = num5;
  const obj8 = arg1(dependencyMap[25]);
  const tmp33 = closure_22;
  const tmp34 = closure_7;
  const tmp35 = closure_22;
  obj3 = { content, guildId: guild_id, channelId: message_channel_id, messageId: item.message_id };
  const message10 = item.message;
  let id;
  if (null != message10) {
    id = message10.author.id;
  }
  obj3.authorId = id;
  const items5 = [arg1(dependencyMap[26]).renderMessageContentMarkup(notifCenterV2MessagePreviewParser, obj3, {}), ];
  let tmp38 = null != iconType;
  if (tmp38) {
    const obj4 = { style: tmp.messagePreviewIconV2Container };
    obj5 = { source: getMessagePreviewIcon(iconType), size: arg1(dependencyMap[27]).IconSizes.SMALL, style: tmp.messagePreviewIconV2 };
    obj4.children = callback2(arg1(dependencyMap[27]).Icon, obj5);
    tmp38 = callback2(closure_7, obj4);
  }
  items5[1] = tmp38;
  obj2.children = items5;
  items3[1] = tmp35(arg1(dependencyMap[14]).Text, obj2);
  obj.children = items3;
  return tmp33(tmp34, obj);
}
function ApplicationName(applicationId) {
  const arg1 = applicationId.applicationId;
  let obj = arg1(dependencyMap[25]);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => application.getApplication(applicationId));
  if (null == stateFromStores) {
    let tmp5 = callback2(closure_7, {});
  } else {
    obj = { application: stateFromStores, textVariant: applicationId.textVariant, iconSize: 16 };
    tmp5 = callback2(importDefault(dependencyMap[28]), obj, stateFromStores.id);
  }
  return tmp5;
}
function ScrollToTopRef(scrollRef) {
  const arg1 = scrollRef.scrollRef;
  const obj = {
    scrollToTop() {
      const current = scrollRef.current;
      let scrollToTopResult;
      if (null != current) {
        scrollToTopResult = current.scrollToTop();
      }
      return scrollToTopResult;
    }
  };
  const ref = importAllResult.useRef({
    scrollToTop() {
      const current = scrollRef.current;
      let scrollToTopResult;
      if (null != current) {
        scrollToTopResult = current.scrollToTop();
      }
      return scrollToTopResult;
    }
  });
  const scrollToTop = arg1(dependencyMap[53]).useScrollToTop(ref);
  return null;
}
function extractKey(id) {
  return id.id;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[3]);
({ View: closure_7, RefreshControl: closure_8 } = tmp2);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
let closure_11 = importDefault(dependencyMap[6]);
let closure_12 = importDefault(dependencyMap[7]);
let closure_13 = importDefault(dependencyMap[8]);
let closure_14 = importDefault(dependencyMap[9]);
({ AnalyticEvents: closure_15, MessageFlags: closure_16, AnalyticsLocations: closure_17, MessageTypes: closure_18, EMPTY_STRING_SNOWFLAKE_ID: closure_19 } = arg1(dependencyMap[10]));
const NotificationTypes = arg1(dependencyMap[11]).NotificationTypes;
const tmp3 = arg1(dependencyMap[10]);
({ jsx: closure_21, jsxs: closure_22 } = arg1(dependencyMap[12]));
let closure_23 = {};
let obj1 = arg1(dependencyMap[13]);
let obj = {};
obj = {};
const merged = Object.assign(arg1(dependencyMap[14]).TextStyleSheet.text-md/medium);
obj["color"] = importDefault(dependencyMap[15]).colors.MOBILE_TEXT_HEADING_PRIMARY;
obj.strong = obj;
let closure_24 = obj1.createStyles(obj);
let obj4 = arg1(dependencyMap[13]);
obj1 = {};
const obj2 = {};
const merged1 = Object.assign(arg1(dependencyMap[14]).TextStyleSheet.text-md/medium);
obj2["color"] = importDefault(dependencyMap[15]).colors.TEXT_MUTED;
obj1.strong = obj2;
let closure_25 = obj4.createStyles(obj1);
let obj7 = arg1(dependencyMap[13]);
const obj3 = {};
obj4 = { color: importDefault(dependencyMap[15]).colors.MENTION_FOREGROUND, backgroundColor: importDefault(dependencyMap[15]).colors.MENTION_BACKGROUND };
obj3.mention = obj4;
let closure_26 = obj7.createStyles(obj3);
let obj10 = arg1(dependencyMap[13]);
const obj5 = {};
const tmp4 = arg1(dependencyMap[12]);
obj5.mention = { color: importDefault(dependencyMap[15]).colors.MENTION_FOREGROUND, backgroundColor: "transparent" };
obj5.em = { fontStyle: "normal" };
let closure_27 = obj10.createStyles(obj5);
let closure_28 = { channelMentionText: "redesign/message-preview/medium" };
let obj13 = arg1(dependencyMap[13]);
obj7 = { container: { flex: 1 } };
const obj8 = { -77461994: "Promise", 1446667498: "Array", 2007798867: "isArray", 1733202604: "constructor", 1650218555: "toString", -1399565386: "isArray", 2075700371: "isArray", borderRadius: importDefault(dependencyMap[15]).radii.lg };
obj7.row = obj8;
obj7.rowCompact = { paddingVertical: 6 };
const obj6 = { color: importDefault(dependencyMap[15]).colors.MENTION_FOREGROUND, backgroundColor: "transparent" };
obj7.rowActive = { backgroundColor: importDefault(dependencyMap[15]).colors.BACKGROUND_MOD_MUTED };
obj7.col = { padding: true, T: "/assets/.cache/intl/bW9kdWxlcy9nb19saXZlL3dlYi9tb2RhbA==" };
obj10 = { backgroundColor: importDefault(dependencyMap[15]).colors.BACKGROUND_BRAND, borderRadius: importDefault(dependencyMap[15]).radii.xs };
obj7.unreadIndicatorV2 = obj10;
obj7.unreadIndicatorCompactV2 = { top: 18 };
obj7.rowText = { flex: 1 };
obj7.rowTextV2 = { 1449229240: "row", 371666258: "center" };
obj7.rowBody = { lineHeight: 20 };
obj7.rowBodyV2 = { marginRight: 30 };
const obj9 = { backgroundColor: importDefault(dependencyMap[15]).colors.BACKGROUND_MOD_MUTED };
obj7.rowBodyAcked = { color: importDefault(dependencyMap[15]).colors.TEXT_MUTED };
obj7.rowTime = { lineHeight: 20 };
obj7.rowTimeV2 = { marginLeft: -24 };
obj7.itemV2 = {};
obj7.calloutContainer = {};
const obj11 = { color: importDefault(dependencyMap[15]).colors.TEXT_MUTED };
obj7.calloutTextAcked = { color: importDefault(dependencyMap[15]).colors.TEXT_MUTED };
obj13 = { color: importDefault(dependencyMap[15]).colors.TEXT_DEFAULT };
obj7.calloutTextNotAcked = obj13;
obj7.messagePreviewContainerV2 = {};
const obj12 = { color: importDefault(dependencyMap[15]).colors.TEXT_MUTED };
obj7.messagePreviewBarV2 = { borderLeftColor: importDefault(dependencyMap[15]).colors.BORDER_SUBTLE };
obj7.messagePreviewIconV2Container = { paddingTop: 4 };
const obj14 = { borderLeftColor: importDefault(dependencyMap[15]).colors.BORDER_SUBTLE };
obj7.messagePreviewIconV2 = { marginLeft: 4, tintColor: importDefault(dependencyMap[15]).colors.TEXT_SUBTLE };
const obj15 = { marginLeft: 4, tintColor: importDefault(dependencyMap[15]).colors.TEXT_SUBTLE };
obj7.messagePreviewTextV2Acked = { color: importDefault(dependencyMap[15]).colors.TEXT_MUTED };
const obj16 = { color: importDefault(dependencyMap[15]).colors.TEXT_MUTED };
obj7.messagePreviewTextV2NotAcked = { color: importDefault(dependencyMap[15]).colors.TEXT_DEFAULT };
obj7.messagePreviewSystemTextV2 = { "Bool(false)": "category", "Bool(false)": "Array" };
const obj17 = { color: importDefault(dependencyMap[15]).colors.TEXT_DEFAULT };
obj7.refreshSpinner = { color: importDefault(dependencyMap[15]).colors.INTERACTIVE_TEXT_DEFAULT };
const obj18 = { color: importDefault(dependencyMap[15]).colors.INTERACTIVE_TEXT_DEFAULT };
obj7.forYouDivider = { borderTopWidth: tmp2.StyleSheet.hairlineWidth, borderTopColor: importDefault(dependencyMap[15]).colors.BORDER_SUBTLE, marginTop: importDefault(dependencyMap[15]).space.PX_12, marginBottom: importDefault(dependencyMap[15]).space.PX_8 };
const obj19 = { borderTopWidth: tmp2.StyleSheet.hairlineWidth, borderTopColor: importDefault(dependencyMap[15]).colors.BORDER_SUBTLE, marginTop: importDefault(dependencyMap[15]).space.PX_12, marginBottom: importDefault(dependencyMap[15]).space.PX_8 };
obj7.friendRequestNoteContainer = { marginTop: 4, backgroundColor: importDefault(dependencyMap[15]).colors.BACKGROUND_MOD_SUBTLE };
let closure_29 = obj13.createStyles(obj7);
let closure_30 = { STICKER: "sticker", VOICE_MESSAGE: "voice_message", ATTACHMENT: "attachment" };
let closure_31 = importAllResult.memo((item) => {
  let accessibilityActions;
  let ackedBeforeId;
  let actionButtons;
  let actionsNode;
  let compactMode;
  let forceHoistItem;
  let isForceHoisted;
  let isSoftAcked;
  let onAccessibilityAction;
  let onSoftAckItem;
  let roleStyle;
  item = item.item;
  const arg1 = item;
  const rowIndex = item.rowIndex;
  const importDefault = rowIndex;
  ({ isSoftAcked, onSoftAckItem } = item);
  const importAll = onSoftAckItem;
  ({ forceHoistItem, isForceHoisted, compactMode } = item);
  let closure_4;
  let callback;
  let importAllResult;
  ({ ackedBeforeId, roleStyle } = item);
  const tmp = callback7();
  let obj = arg1(dependencyMap[29]);
  let notificationCenterItemAcked = obj.useNotificationCenterItemAcked(item, ackedBeforeId);
  const dependencyMap = notificationCenterItemAcked;
  if (!isSoftAcked) {
    isSoftAcked = notificationCenterItemAcked;
  }
  let obj1 = arg1(dependencyMap[30]);
  const navigation = obj1.useNavigation();
  closure_4 = navigation;
  const items = [item];
  callback = importAllResult.useCallback(() => {
    if (null != item.deeplink) {
      const obj = { <string:3428996705>: "ERROR", <string:1318212076>: "ERROR", <string:1640435025>: "NOT_RESPONDER", payload: rowIndex(notificationCenterItemAcked[31])(item.deeplink).payload };
      rowIndex(notificationCenterItemAcked[32])(obj);
    }
  }, items);
  const items1 = [notificationCenterItemAcked, item, callback, rowIndex, onSoftAckItem, navigation];
  const callback1 = importAllResult.useCallback(() => {
    if (!notificationCenterItemAcked) {
      onSoftAckItem(item);
    }
    if (item.type === item(notificationCenterItemAcked[33]).NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED) {
      if (null != navigation) {
        let obj = { screen: "requests" };
        navigation.navigate("friends", obj);
      }
    }
    callback();
    obj = { action_type: item(notificationCenterItemAcked[33]).NotificationCenterActionTypes.CLICKED, notification_center_id: item.id, item_type: item.type, acked: notificationCenterItemAcked, item_index: rowIndex, deeplink: item.deeplink };
    rowIndex(notificationCenterItemAcked[34]).track(constants.NOTIFICATION_CENTER_ACTION, obj);
  }, items1);
  const items2 = [item];
  const callback2 = importAllResult.useCallback(() => {
    const items = [];
    if (item.type === item(notificationCenterItemAcked[33]).NotificationCenterItems.TRENDING_CONTENT) {
      let obj = {};
      const intl = item(notificationCenterItemAcked[18]).intl;
      obj.label = intl.string(item(notificationCenterItemAcked[18]).t.gSMz/x);
      obj.icon = rowIndex(notificationCenterItemAcked[35]);
      obj.IconComponent = item(notificationCenterItemAcked[36]).LightbulbIcon;
      obj.onPress = function onPress() {
        const deeplink = lib.deeplink;
        let str = "";
        if (null != deeplink) {
          str = deeplink;
        }
        const match = str.match(/channels\/(\d*)\/(\d*)\/(\d*)\?summaryId=(\d*)/);
        if (null == match) {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("Invalid deeplink: " + lib.deeplink);
          throw error;
        } else {
          const tmp11 = callback2(tmp2, 5);
          const first = tmp11[0];
          let obj = lib(closure_3[37]);
          obj = { id: tmp11[3], channel_id: tmp11[2] };
          obj = { summary_id: tmp11[4] };
          const result = obj.openGuildHighlightNotificationForPush(tmp13, obj, constants2.TRENDING_CONTENT_PUSH, constants.NOTIFICATION_CENTER, obj);
        }
      };
      items.push(obj);
    } else {
      obj = {};
      const intl2 = item(notificationCenterItemAcked[18]).intl;
      obj.label = intl2.string(item(notificationCenterItemAcked[18]).t.08rqg5);
      obj.icon = rowIndex(notificationCenterItemAcked[35]);
      obj.IconComponent = item(notificationCenterItemAcked[36]).LightbulbIcon;
      obj.onPress = function onPress() {
        let obj = callback(paths[41]);
        obj = { notificationType: lib.type, location: constants.NOTIFICATION_CENTER };
        obj.openLazy(lib(paths[40])(paths[39], paths.paths), "NotificationSurvey", obj);
      };
      items.push(obj);
    }
    if (null == item.local_id) {
      obj = {};
      const intl3 = item(notificationCenterItemAcked[18]).intl;
      obj.label = intl3.string(item(notificationCenterItemAcked[18]).t.D8z9ju);
      obj.icon = rowIndex(notificationCenterItemAcked[42]);
      const TrashIcon = item(notificationCenterItemAcked[43]).TrashIcon;
      obj.IconComponent = TrashIcon;
      // CreateGeneratorClosureLongIndex (0x67)
      const item = navigation(TrashIcon);
      obj.onPress = function() {
        return lib(...arguments);
      };
      items.unshift(obj);
    }
    const result = item(notificationCenterItemAcked[45]).showSimpleActionSheet({ options: items });
  }, items2);
  const tmp7 = callback(importAllResult.useState(undefined), 2);
  let first = tmp7[0];
  let obj2 = arg1(dependencyMap[46]);
  const itemActionButtonPropsV2 = obj2.useItemActionButtonPropsV2(item, callback, navigation, forceHoistItem, isForceHoisted, onSoftAckItem, tmp7[1], compactMode);
  ({ actionButtons, actionsNode, accessibilityActions, onAccessibilityAction } = itemActionButtonPropsV2);
  let obj3 = importAll(dependencyMap[16]);
  const parserWithoutLinks = obj3.getParserWithoutLinks(callback4());
  let obj4 = importAll(dependencyMap[16]);
  const parserWithoutLinks1 = obj4.getParserWithoutLinks(callback3());
  let tmp12 = item.type === arg1(dependencyMap[33]).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED;
  if (!tmp12) {
    tmp12 = item.type === arg1(dependencyMap[33]).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED;
  }
  if (notificationCenterItemAcked) {
    notificationCenterItemAcked = !tmp12;
  }
  let tmp15 = null;
  if (!notificationCenterItemAcked) {
    obj = { item, rowIndex, onSoftAckItem, actionButtons, actionsNode, compactMode };
    tmp15 = callback2(arg1(dependencyMap[46]).ForYouItemActionButtons, obj);
  }
  let str = "text-md/semibold";
  if (isSoftAcked) {
    str = "text-md/medium";
  }
  importAllResult = str;
  if (null == first) {
    obj = {
      item,
      renderApplication(applicationId) {
          return callback(closure_36, { applicationId, textVariant: str });
        }
    };
    first = importDefault(dependencyMap[47])(obj);
  }
  let obj7 = importDefault(dependencyMap[48]);
  const extractTimestampResult = obj7.extractTimestamp(item.id);
  obj1 = { accessibilityRole: "button", accessibilityActions, onAccessibilityAction };
  const items3 = [tmp.row, ];
  let rowCompact = !tmp23;
  if (!!compactMode) {
    rowCompact = tmp.rowCompact;
  }
  items3[1] = rowCompact;
  obj1.style = items3;
  obj1.onPress = callback1;
  obj1.onAccessibilityTap = callback1;
  obj1.onLongPress = callback2;
  obj1.underlayColor = tmp.rowActive.backgroundColor;
  let tmp25Result = null;
  if (item.enableBadge) {
    tmp25Result = null;
    if (!isSoftAcked) {
      obj2 = {};
      const items4 = [tmp.unreadIndicatorV2, ];
      let unreadIndicatorCompactV2 = !tmp27;
      if (!!compactMode) {
        unreadIndicatorCompactV2 = tmp.unreadIndicatorCompactV2;
      }
      items4[1] = unreadIndicatorCompactV2;
      obj2.style = items4;
      tmp25Result = callback2(closure_7, obj2);
      const tmp25 = callback2;
      const tmp26 = closure_7;
    }
  }
  const items5 = [tmp25Result, , ];
  obj3 = { style: tmp.itemV2, children: callback2(arg1(dependencyMap[50]).ForYouItemImage, { item, compactMode }) };
  items5[1] = callback2(closure_7, obj3);
  obj4 = { style: {} };
  const obj5 = { style: tmp.col };
  const obj6 = { style: items6 };
  const items6 = [, ];
  ({ rowText: arr7[0], rowTextV2: arr7[1] } = tmp);
  obj7 = { variant: str };
  const items7 = [, , ];
  ({ rowBody: arr8[0], rowBodyV2: arr8[1] } = tmp);
  let rowBodyAcked = !tmp35;
  if (!!isSoftAcked) {
    rowBodyAcked = tmp.rowBodyAcked;
  }
  items7[2] = rowBodyAcked;
  obj7.style = items7;
  obj7.color = "text-default";
  if ("string" !== typeof first) {
    obj7.children = first;
    const items8 = [callback2(arg1(dependencyMap[14]).Text, obj7), ];
    const obj8 = { 0: true, 0: true, 0: true };
    const items9 = [, , ];
    ({ rowTime: arr10[0], rowTimeV2: arr10[1] } = tmp);
    let rowBodyAcked2 = !tmp40;
    if (!!isSoftAcked) {
      rowBodyAcked2 = tmp.rowBodyAcked;
    }
    items9[2] = rowBodyAcked2;
    obj8.style = items9;
    obj8.accessibilityLabel = arg1(dependencyMap[51]).getRelativeTimestamp(extractTimestampResult, false);
    const obj17 = arg1(dependencyMap[51]);
    const tmp37 = callback2;
    obj8.children = arg1(dependencyMap[51]).getRelativeTimestamp(extractTimestampResult);
    items8[1] = tmp37(arg1(dependencyMap[14]).Text, obj8);
    obj6.children = items8;
    const items10 = [closure_22(closure_7, obj6), , , , ];
    let tmp44Result = item.type === arg1(dependencyMap[33]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
    if (tmp44Result) {
      const obj9 = { styles: tmp.friendRequestNoteContainer, backgroundColor: tmp.friendRequestNoteContainer.backgroundColor };
      const other_user = item.other_user;
      let id;
      if (null != other_user) {
        id = other_user.id;
      }
      if (null == id) {
        id = closure_19;
      }
      obj9.userId = id;
      obj9.analyticsLocation = "Notifications Tab";
      tmp44Result = callback2(importDefault(dependencyMap[52]), obj9);
      const tmp44 = callback2;
      const tmp47 = importDefault(dependencyMap[52]);
    }
    items10[1] = tmp44Result;
    const message = item.message;
    let content;
    if (null != message) {
      content = message.content;
    }
    let tmp50 = null;
    if (null != content) {
      const obj10 = { item, acked: isSoftAcked, compactMode, roleStyle };
      tmp50 = callback2(ForYouMessagePreviewV2, obj10);
    }
    items10[2] = tmp50;
    let tmp53 = null;
    if (null != item.callout) {
      const obj11 = { item, acked: isSoftAcked, compactMode };
      tmp53 = callback2(Callout, obj11);
    }
    items10[3] = tmp53;
    const obj12 = { children: tmp15 };
    items10[4] = callback2(closure_7, obj12);
    obj5.children = items10;
    obj4.children = closure_22(closure_7, obj5);
    items5[2] = callback2(closure_7, obj4);
    obj1.children = items5;
    return closure_22(arg1(dependencyMap[49]).PressableHighlight, obj1);
  } else {
    isSoftAcked ? parserWithoutLinks(first) : parserWithoutLinks1(first);
  }
});
const obj20 = { marginTop: 4, backgroundColor: importDefault(dependencyMap[15]).colors.BACKGROUND_MOD_SUBTLE };
const memoResult = importAllResult.memo((loadMore) => {
  let items;
  let loadingMore;
  let nestedInLaunchPad;
  let onScroll;
  loadMore = loadMore.loadMore;
  const arg1 = loadMore;
  const shouldScrollToTop = loadMore.shouldScrollToTop;
  const importDefault = shouldScrollToTop;
  const isSoftAcked = loadMore.isSoftAcked;
  const importAll = isSoftAcked;
  const onSoftAckItem = loadMore.onSoftAckItem;
  const dependencyMap = onSoftAckItem;
  const forceHoistItem = loadMore.forceHoistItem;
  let closure_4 = forceHoistItem;
  const isForceHoisted = loadMore.isForceHoisted;
  let callback = isForceHoisted;
  const suggestedFriendAdded = loadMore.suggestedFriendAdded;
  const onAddSuggestionAnimationFinish = loadMore.onAddSuggestionAnimationFinish;
  let flag = loadMore.panelVariant;
  ({ items, onScroll, loadingMore, nestedInLaunchPad } = loadMore);
  if (flag === undefined) {
    flag = false;
  }
  let closure_9;
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let ref;
  let closure_16;
  const tmp = callback7();
  closure_9 = tmp;
  const NotificationCenterAckedBeforeId = arg1(dependencyMap[54]).NotificationCenterAckedBeforeId;
  const setting = NotificationCenterAckedBeforeId.useSetting();
  closure_10 = setting;
  let obj = arg1(dependencyMap[25]);
  items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => tmp.roleStyle);
  closure_11 = stateFromStores;
  let obj1 = arg1(dependencyMap[25]);
  const items1 = [closure_14];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => callback.isRefreshing());
  closure_12 = stateFromStores1;
  const ChannelListLayoutSetting = arg1(dependencyMap[54]).ChannelListLayoutSetting;
  const setting1 = ChannelListLayoutSetting.useSetting();
  const tmp6 = setting1 === arg1(dependencyMap[55]).ChannelListLayoutTypes.COMPACT;
  closure_13 = tmp6;
  const items2 = [loadMore];
  callback = importAllResult.useCallback(() => {
    loadMore(true);
  }, items2);
  closure_14 = callback;
  const items3 = [tmp.forYouDivider, suggestedFriendAdded, onAddSuggestionAnimationFinish, stateFromStores, setting, isSoftAcked, onSoftAckItem, forceHoistItem, isForceHoisted, tmp6, callback, flag];
  const callback1 = importAllResult.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("read-section-header" === kind) {
      return callback2(loadMore(onSoftAckItem[56]).ForYouReadSectionHeader, {});
    } else if ("recent-activity-section-header" === kind) {
      return callback2(loadMore(onSoftAckItem[57]).ForYouRecentActivitySectionHeader, {});
    } else if ("hoisted-items-header" === kind) {
      return callback2(loadMore(onSoftAckItem[58]).ForYouHoistedItemsHeader, {});
    } else if ("suggested-friends-header" === kind) {
      let obj = { showDivider: item.showDivider };
      return callback2(shouldScrollToTop(onSoftAckItem[59]), obj);
    } else if ("suggested-friends-row" === kind) {
      obj = { suggestedFriend: item.suggestedFriend, onAddSuggestion: suggestedFriendAdded, onAddSuggestionAnimationFinish, panelVariant: flag };
      return callback2(shouldScrollToTop(onSoftAckItem[60]), obj);
    } else if ("suggested-friends-show-all-row" === kind) {
      const obj1 = { suggestedFriends: item.suggestedFriends, panelVariant: flag };
      return callback2(loadMore(onSoftAckItem[61]).ForYouSuggestedFriendShowAllRow, obj1);
    } else if ("for-you-divider" === kind) {
      const obj2 = { style: tmp.forYouDivider };
      return callback2(onAddSuggestionAnimationFinish, obj2);
    } else if ("notification-center-item" === kind) {
      const obj3 = {};
      const obj4 = { item, ackedBeforeId: setting, isSoftAcked: isSoftAcked(item.id), onSoftAckItem, forceHoistItem, isForceHoisted, rowIndex: tmp, compactMode: tmp6, roleStyle: stateFromStores };
      const _HermesInternal = HermesInternal;
      obj3.children = callback2(closure_31, obj4, "" + item.id + "-" + stateFromStores);
      return callback2(loadMore(onSoftAckItem[62]).ErrorBoundary, obj3);
    } else if ("mentions-placeholder" === kind) {
      return callback2(loadMore(onSoftAckItem[17]).ForYouMentionPlaceholder, {});
    } else if ("unread-cleared-placeholder" === kind) {
      return callback2(loadMore(onSoftAckItem[63]).ForYouUnreadClearedState, {});
    } else if ("load-more" === kind) {
      const obj5 = { onPressLoad: callback };
      return callback2(loadMore(onSoftAckItem[64]).ForYouLoadMore, obj5);
    } else {
      obj = loadMore(onSoftAckItem[65]);
      obj.assertNever(item);
    }
  }, items3);
  ref = importAllResult.useRef(null);
  const items4 = [shouldScrollToTop];
  const effect = importAllResult.useEffect(() => {
    if (shouldScrollToTop) {
      const current = ref.current;
      if (null != current) {
        current.scrollToOffset({ overflow: "<string:1196490754>", fileName: "<string:3310486038>" });
      }
    }
  }, items4);
  const items5 = [stateFromStores1];
  const callback2 = importAllResult.useCallback(() => {
    if (!stateFromStores1) {
      loadMore(onSoftAckItem[66]).refreshNotifications();
      const obj = loadMore(onSoftAckItem[66]);
    }
  }, items5);
  const tmp12 = callback(suggestedFriendAdded.useState(0), 2);
  closure_16 = tmp12[1];
  obj = {
    style: tmp.container,
    onLayout(nativeEvent) {
      return callback(nativeEvent.nativeEvent.layout.height);
    }
  };
  let tmp15 = !nestedInLaunchPad;
  if (tmp15) {
    obj = { scrollRef: ref };
    tmp15 = callback2(ScrollToTopRef, obj);
  }
  const items6 = [tmp15, ];
  obj1 = { ref, data: items, ListEmptyComponent: callback2(arg1(dependencyMap[68]).ForYouEmptyState, { height: tmp12[0] }), onScroll, refreshControl: callback2(flag, { onRefresh: callback2, refreshing: stateFromStores1, tintColor: tmp.refreshSpinner.color }), keyExtractor: extractKey, renderItem: callback1, extraData: setting, onEndReached: loadMore, onEndReachedThreshold: 0.8, ListFooterComponent: callback2(ForYouFooter, { loading: loadingMore }), viewabilityConfig: closure_23 };
  items6[1] = callback2(arg1(dependencyMap[67]).FlashList, obj1);
  obj.children = items6;
  return closure_22(onAddSuggestionAnimationFinish, obj);
});
const result = arg1(dependencyMap[69]).fileFinishedImporting("modules/notification_center/native/ForYouItems.tsx");

export const ForYouItems = memoResult;
