// Module ID: 15192
// Function ID: 115700
// Name: ForYouFooter
// Dependencies: [5, 57, 31, 27, 4122, 4167, 1348, 1838, 1849, 15186, 653, 5591, 33, 4130, 4126, 689, 4562, 15191, 1212, 1360, 7818, 7002, 9886, 9672, 7675, 566, 7870, 1273, 11688, 15193, 1456, 4111, 12909, 6882, 675, 8002, 15194, 9533, 3831, 9556, 1934, 4098, 15196, 4089, 15188, 5495, 15197, 15198, 21, 4660, 15199, 6883, 12175, 1457, 3803, 3808, 15209, 15210, 15211, 15212, 15213, 15219, 787, 15220, 15221, 1327, 15190, 7527, 15222, 2]

// Module 15192 (ForYouFooter)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ForYouRecentActivitySectionHeader from "ForYouRecentActivitySectionHeader";
import importAllResult from "parseQuery";
import get_ActivityIndicator from "Button";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_createForOfIteratorHelperLoose";
import closure_13 from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import ME from "ME";
import { NotificationTypes } from "str2";
import jsxProd from "NotificationCenterScenes";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_21;
let closure_22;
let closure_7;
let closure_8;
const require = arg1;
function ForYouFooter(loading) {
  let tmp = null;
  if (loading.loading) {
    tmp = callback(require(15191) /* ForYouMentionPlaceholder */.ForYouMentionPlaceholder, {});
  }
  return tmp;
}
function getMessagePreviewIcon(iconType) {
  if (constants2.ATTACHMENT === iconType) {
    return importDefault(9886);
  } else if (constants2.STICKER === iconType) {
    return importDefault(9672);
  } else if (constants2.VOICE_MESSAGE === iconType) {
    return importDefault(7675);
  } else {
    return null;
  }
}
function Callout(arg0) {
  let acked;
  let compactMode;
  let item;
  ({ item, acked, compactMode } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = importAll(4562);
  obj = { style: tmp.calloutContainer, pointerEvents: "none" };
  obj = { style: tmp.messagePreviewBarV2 };
  const parser = obj.getParser(callback3());
  const items = [callback(closure_7, obj), ];
  const obj1 = { style: items1, variant: "redesign/message-preview/medium" };
  items1 = [acked ? tmp.calloutTextAcked : tmp.calloutTextNotAcked];
  let num = 10;
  if (compactMode) {
    num = 3;
  }
  obj1.lineClamp = num;
  obj1.children = parser(item.callout);
  items[1] = callback(require(4126) /* Text */.Text, obj1);
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
  ({ acked, compactMode, roleStyle } = item);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = message_channel_id(4562);
  const item2 = { item }.item;
  const notifCenterV2MessagePreviewParser = obj.getNotifCenterV2MessagePreviewParser(callback4(), closure_28, roleStyle);
  const intl = item(1212).intl;
  const stringResult = intl.string(item(1212).t.BOi07B);
  let obj1 = item(1360);
  let message = item2.message;
  let flags;
  if (null != message) {
    flags = message.flags;
  }
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  let message2 = item2.message;
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
    const tmp25 = guild_id(7818)(first);
    let result = stringResult;
    if (null != tmp25) {
      let obj3 = item(7002);
      result = obj3.formatPollResultNotificationCenterText(tmp25);
    }
  } else if (stickers.length > 0) {
    const intl6 = item(1212).intl;
    result = intl6.string(item(1212).t["7K5Lma"]);
    let ATTACHMENT = constants2.STICKER;
  } else if (tmp8) {
    const intl5 = tmp45(1212).intl;
    result = intl5.string(tmp45(1212).t["2v7kfl"]);
  } else if (hasFlagResult) {
    const intl4 = tmp45(1212).intl;
    result = intl4.string(tmp45(1212).t["6bhHrc"]);
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
      const intl3 = item(1212).intl;
      result = intl3.string(item(1212).t.Xxm5i3);
    } else {
      result = stringResult;
      if (tmp11) {
        const intl2 = item(1212).intl;
        result = intl2.string(item(1212).t.JAKsM8);
        ATTACHMENT = constants2.ATTACHMENT;
      }
      tmp11 = attachments.length > 0 || embeds.length > 0;
    }
    tmp45Result = tmp45(1360);
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
  guild_id = item.guild_id;
  message_channel_id = item.message_channel_id;
  ({ content, isSystemMessage } = obj);
  let obj5 = item(566);
  let items = [closure_12];
  const stateFromStores = obj5.useStateFromStores(items, () => outer1_12.getGuild(guild_id));
  hasFlagResult = obj1.hasFlag(num, closure_16.IS_VOICE_MESSAGE);
  const items1 = [closure_11];
  const stateFromStores1 = item(566).useStateFromStores(items1, () => outer1_11.getChannel(message_channel_id));
  const obj7 = item(566);
  const items2 = [closure_13];
  const stateFromStoresArray = item(566).useStateFromStoresArray(items2, () => {
    const message = item.message;
    let id;
    if (null != message) {
      id = message.author.id;
    }
    const items = [outer1_13.getUser(id)];
    const message2 = item.message;
    let mapped;
    if (null != message2) {
      const mentions = message2.mentions;
      if (null != mentions) {
        mapped = mentions.map((arg0) => outer2_13.getUser(arg0));
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
  const items3 = [callback(closure_7, obj1), ];
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
  const obj8 = item(566);
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
  const items5 = [item(7870).renderMessageContentMarkup(notifCenterV2MessagePreviewParser, obj3, {}), ];
  let tmp38 = null != iconType;
  if (tmp38) {
    const obj4 = { style: tmp.messagePreviewIconV2Container };
    obj5 = { source: getMessagePreviewIcon(iconType), size: item(1273).IconSizes.SMALL, style: tmp.messagePreviewIconV2 };
    obj4.children = callback(item(1273).Icon, obj5);
    tmp38 = callback(closure_7, obj4);
  }
  items5[1] = tmp38;
  obj2.children = items5;
  items3[1] = tmp35(item(4126).Text, obj2);
  obj.children = items3;
  return tmp33(tmp34, obj);
}
function ApplicationName(applicationId) {
  applicationId = applicationId.applicationId;
  let obj = applicationId(566);
  const items = [closure_10];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getApplication(applicationId));
  if (null == stateFromStores) {
    let tmp5 = callback(closure_7, {});
  } else {
    obj = { application: stateFromStores, textVariant: applicationId.textVariant, iconSize: 16 };
    tmp5 = callback(importDefault(11688), obj, stateFromStores.id);
  }
  return tmp5;
}
function ScrollToTopRef(scrollRef) {
  scrollRef = scrollRef.scrollRef;
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
  const scrollToTop = scrollRef(1457).useScrollToTop(ref);
  return null;
}
function extractKey(id) {
  return id.id;
}
({ View: closure_7, RefreshControl: closure_8 } = get_ActivityIndicator);
({ AnalyticEvents: closure_15, MessageFlags: closure_16, AnalyticsLocations: closure_17, MessageTypes: closure_18, EMPTY_STRING_SNOWFLAKE_ID: closure_19 } = ME);
({ jsx: closure_21, jsxs: closure_22 } = jsxProd);
let closure_23 = { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 1000 };
let obj = {};
obj = {};
const merged = Object.assign(require("Text").TextStyleSheet["text-md/medium"]);
obj["color"] = require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY;
obj.strong = obj;
let closure_24 = _createForOfIteratorHelperLoose.createStyles(obj);
_createForOfIteratorHelperLoose = {};
let obj2 = {};
const merged1 = Object.assign(require("Text").TextStyleSheet["text-md/medium"]);
obj2["color"] = require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED;
_createForOfIteratorHelperLoose.strong = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = {};
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.MENTION_FOREGROUND, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MENTION_BACKGROUND };
obj3.mention = _createForOfIteratorHelperLoose;
let closure_26 = _createForOfIteratorHelperLoose.createStyles(obj3);
let obj5 = { mention: { color: require("_createForOfIteratorHelperLoose").colors.MENTION_FOREGROUND, backgroundColor: "transparent" }, em: { fontStyle: "normal" } };
let closure_27 = _createForOfIteratorHelperLoose.createStyles(obj5);
let closure_28 = { channelMentionText: "redesign/message-preview/medium" };
_createForOfIteratorHelperLoose = { container: { flex: 1 } };
let obj8 = { marginHorizontal: 4, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, flexDirection: "row", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.row = obj8;
_createForOfIteratorHelperLoose.rowCompact = { paddingVertical: 6 };
let obj6 = { color: require("_createForOfIteratorHelperLoose").colors.MENTION_FOREGROUND, backgroundColor: "transparent" };
_createForOfIteratorHelperLoose.rowActive = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.col = { flexDirection: "column", flex: 1 };
_createForOfIteratorHelperLoose = { top: 28, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, height: 8, width: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, position: "absolute", left: 4 };
_createForOfIteratorHelperLoose.unreadIndicatorV2 = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.unreadIndicatorCompactV2 = { top: 18 };
_createForOfIteratorHelperLoose.rowText = { flex: 1 };
_createForOfIteratorHelperLoose.rowTextV2 = { flexDirection: "row", justifyContent: "space-between" };
_createForOfIteratorHelperLoose.rowBody = { lineHeight: 20 };
_createForOfIteratorHelperLoose.rowBodyV2 = { marginRight: 30 };
let obj9 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_MUTED };
_createForOfIteratorHelperLoose.rowBodyAcked = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.rowTime = { lineHeight: 20 };
_createForOfIteratorHelperLoose.rowTimeV2 = { marginLeft: -24 };
_createForOfIteratorHelperLoose.itemV2 = { alignItems: "flex-start", marginRight: 4, marginLeft: 8 };
_createForOfIteratorHelperLoose.calloutContainer = { marginTop: 4, flexDirection: "row", marginRight: 16 };
let obj11 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.calloutTextAcked = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.calloutTextNotAcked = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.messagePreviewContainerV2 = { marginTop: 4, flexDirection: "row", marginRight: 16 };
const obj14 = { marginRight: 8, borderLeftColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderLeftWidth: 3, borderRadius: 2, height: "auto" };
_createForOfIteratorHelperLoose.messagePreviewBarV2 = obj14;
_createForOfIteratorHelperLoose.messagePreviewIconV2Container = { paddingTop: 4 };
let obj12 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.messagePreviewIconV2 = { marginLeft: 4, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
const obj15 = { marginLeft: 4, tintColor: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose.messagePreviewTextV2Acked = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
const obj16 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.messagePreviewTextV2NotAcked = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.messagePreviewSystemTextV2 = { fontStyle: "italic", fontWeight: "normal" };
let obj17 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT };
_createForOfIteratorHelperLoose.refreshSpinner = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
const obj18 = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose.forYouDivider = { borderTopWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
const obj19 = { borderTopWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.friendRequestNoteContainer = { marginTop: 4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
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
  const rowIndex = item.rowIndex;
  ({ isSoftAcked, onSoftAckItem } = item);
  ({ forceHoistItem, isForceHoisted, compactMode } = item);
  let navigation;
  let callback;
  let str;
  ({ ackedBeforeId, roleStyle } = item);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = item(notificationCenterItemAcked[29]);
  notificationCenterItemAcked = obj.useNotificationCenterItemAcked(item, ackedBeforeId);
  if (!isSoftAcked) {
    isSoftAcked = notificationCenterItemAcked;
  }
  let obj1 = item(notificationCenterItemAcked[30]);
  navigation = obj1.useNavigation();
  let items = [item];
  callback = str.useCallback(() => {
    if (null != item.deeplink) {
      const obj = { payload: rowIndex(notificationCenterItemAcked[31])(item.deeplink).payload, safe: true, navigationReplace: false };
      rowIndex(notificationCenterItemAcked[32])(obj);
    }
  }, items);
  const items1 = [notificationCenterItemAcked, item, callback, rowIndex, onSoftAckItem, navigation];
  const callback1 = str.useCallback(() => {
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
    rowIndex(notificationCenterItemAcked[34]).track(outer1_15.NOTIFICATION_CENTER_ACTION, obj);
  }, items1);
  const items2 = [item];
  const callback2 = str.useCallback(() => {
    const items = [];
    if (item.type === item(notificationCenterItemAcked[33]).NotificationCenterItems.TRENDING_CONTENT) {
      let obj = {};
      const intl = item(notificationCenterItemAcked[18]).intl;
      obj.label = intl.string(item(notificationCenterItemAcked[18]).t["gSMz/x"]);
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
          const tmp11 = callback(tmp2, 5);
          const first = tmp11[0];
          let obj = item(notificationCenterItemAcked[37]);
          obj = { id: tmp11[3], channel_id: tmp11[2] };
          obj = { summary_id: tmp11[4] };
          const result = obj.openGuildHighlightNotificationForPush(tmp13, obj, outer2_20.TRENDING_CONTENT_PUSH, outer2_17.NOTIFICATION_CENTER, obj);
        }
      };
      items.push(obj);
    } else {
      obj = {};
      const intl2 = item(notificationCenterItemAcked[18]).intl;
      obj.label = intl2.string(item(notificationCenterItemAcked[18]).t["08rqg5"]);
      obj.icon = rowIndex(notificationCenterItemAcked[35]);
      obj.IconComponent = item(notificationCenterItemAcked[36]).LightbulbIcon;
      obj.onPress = function onPress() {
        let obj = rowIndex(notificationCenterItemAcked[41]);
        obj = { notificationType: lib.type, location: outer2_17.NOTIFICATION_CENTER };
        obj.openLazy(item(notificationCenterItemAcked[40])(notificationCenterItemAcked[39], notificationCenterItemAcked.paths), "NotificationSurvey", obj);
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
      item = navigation(TrashIcon);
      obj.onPress = function() {
        return lib(...arguments);
      };
      items.unshift(obj);
    }
    let obj1 = item(notificationCenterItemAcked[45]);
    obj1 = { key: "ForYouItemLongPress", options: items, hasIcons: true };
    let result = obj1.showSimpleActionSheet(obj1);
  }, items2);
  const tmp7 = callback(str.useState(undefined), 2);
  let first = tmp7[0];
  let obj2 = item(notificationCenterItemAcked[46]);
  const itemActionButtonPropsV2 = obj2.useItemActionButtonPropsV2(item, callback, navigation, forceHoistItem, isForceHoisted, onSoftAckItem, tmp7[1], compactMode);
  ({ actionButtons, actionsNode, accessibilityActions, onAccessibilityAction } = itemActionButtonPropsV2);
  let obj3 = onSoftAckItem(notificationCenterItemAcked[16]);
  const parserWithoutLinks = obj3.getParserWithoutLinks(_createForOfIteratorHelperLoose());
  let obj4 = onSoftAckItem(notificationCenterItemAcked[16]);
  const parserWithoutLinks1 = obj4.getParserWithoutLinks(callback2());
  let tmp12 = item.type === item(notificationCenterItemAcked[33]).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED;
  if (!tmp12) {
    tmp12 = item.type === item(notificationCenterItemAcked[33]).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED;
  }
  if (notificationCenterItemAcked) {
    notificationCenterItemAcked = !tmp12;
  }
  let tmp15 = null;
  if (!notificationCenterItemAcked) {
    obj = { "aria-hidden": true, accessibilityLabel: "", item, rowIndex, onSoftAckItem, actionButtons, actionsNode, compactMode };
    tmp15 = callback(item(notificationCenterItemAcked[46]).ForYouItemActionButtons, obj);
  }
  str = "text-md/semibold";
  if (isSoftAcked) {
    str = "text-md/medium";
  }
  if (null == first) {
    obj = {
      item,
      renderApplication(applicationId) {
          return outer1_21(outer1_36, { applicationId, textVariant: str });
        }
    };
    first = rowIndex(notificationCenterItemAcked[47])(obj);
  }
  let obj7 = rowIndex(notificationCenterItemAcked[48]);
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
      tmp25Result = callback(closure_7, obj2);
      const tmp25 = callback;
      const tmp26 = closure_7;
    }
  }
  const items5 = [tmp25Result, , ];
  obj3 = { style: tmp.itemV2, children: callback(item(notificationCenterItemAcked[50]).ForYouItemImage, { item, compactMode }) };
  items5[1] = callback(closure_7, obj3);
  obj4 = { style: { flex: 1, flexDirection: "row" } };
  const obj5 = { style: tmp.col };
  const obj6 = { style: items6 };
  items6 = [, ];
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
    const items8 = [callback(item(notificationCenterItemAcked[14]).Text, obj7), ];
    const obj8 = { variant: "text-xs/medium", style: null, color: "text-default" };
    const items9 = [, , ];
    ({ rowTime: arr10[0], rowTimeV2: arr10[1] } = tmp);
    let rowBodyAcked2 = !tmp40;
    if (!!isSoftAcked) {
      rowBodyAcked2 = tmp.rowBodyAcked;
    }
    items9[2] = rowBodyAcked2;
    obj8.style = items9;
    obj8.accessibilityLabel = item(notificationCenterItemAcked[51]).getRelativeTimestamp(extractTimestampResult, false);
    const obj17 = item(notificationCenterItemAcked[51]);
    const tmp37 = callback;
    obj8.children = item(notificationCenterItemAcked[51]).getRelativeTimestamp(extractTimestampResult);
    items8[1] = tmp37(item(notificationCenterItemAcked[14]).Text, obj8);
    obj6.children = items8;
    const items10 = [closure_22(closure_7, obj6), , , , ];
    let tmp44Result = item.type === item(notificationCenterItemAcked[33]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
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
      tmp44Result = callback(rowIndex(notificationCenterItemAcked[52]), obj9);
      const tmp44 = callback;
      const tmp47 = rowIndex(notificationCenterItemAcked[52]);
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
      tmp50 = callback(ForYouMessagePreviewV2, obj10);
    }
    items10[2] = tmp50;
    let tmp53 = null;
    if (null != item.callout) {
      const obj11 = { item, acked: isSoftAcked, compactMode };
      tmp53 = callback(Callout, obj11);
    }
    items10[3] = tmp53;
    const obj12 = { children: tmp15 };
    items10[4] = callback(closure_7, obj12);
    obj5.children = items10;
    obj4.children = closure_22(closure_7, obj5);
    items5[2] = callback(closure_7, obj4);
    obj1.children = items5;
    return closure_22(item(notificationCenterItemAcked[49]).PressableHighlight, obj1);
  } else {
    isSoftAcked ? parserWithoutLinks(first) : parserWithoutLinks1(first);
  }
});
const obj20 = { marginTop: 4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE };
const memoResult = importAllResult.memo((loadMore) => {
  let items;
  let loadingMore;
  let nestedInLaunchPad;
  let onScroll;
  loadMore = loadMore.loadMore;
  const shouldScrollToTop = loadMore.shouldScrollToTop;
  const isSoftAcked = loadMore.isSoftAcked;
  const onSoftAckItem = loadMore.onSoftAckItem;
  const forceHoistItem = loadMore.forceHoistItem;
  const isForceHoisted = loadMore.isForceHoisted;
  const suggestedFriendAdded = loadMore.suggestedFriendAdded;
  const onAddSuggestionAnimationFinish = loadMore.onAddSuggestionAnimationFinish;
  let flag = loadMore.panelVariant;
  ({ items, onScroll, loadingMore, nestedInLaunchPad } = loadMore);
  if (flag === undefined) {
    flag = false;
  }
  let c9;
  let setting;
  let stateFromStores;
  let stateFromStores1;
  let c13;
  let callback;
  let ref;
  let closure_16;
  const tmp = _createForOfIteratorHelperLoose();
  c9 = tmp;
  const NotificationCenterAckedBeforeId = loadMore(onSoftAckItem[54]).NotificationCenterAckedBeforeId;
  setting = NotificationCenterAckedBeforeId.useSetting();
  let obj = loadMore(onSoftAckItem[25]);
  items = [c9];
  stateFromStores = obj.useStateFromStores(items, () => _undefined.roleStyle);
  let obj1 = loadMore(onSoftAckItem[25]);
  const items1 = [callback];
  stateFromStores1 = obj1.useStateFromStores(items1, () => callback.isRefreshing());
  const ChannelListLayoutSetting = loadMore(onSoftAckItem[54]).ChannelListLayoutSetting;
  const setting1 = ChannelListLayoutSetting.useSetting();
  const tmp6 = setting1 === loadMore(onSoftAckItem[55]).ChannelListLayoutTypes.COMPACT;
  c13 = tmp6;
  const items2 = [loadMore];
  callback = suggestedFriendAdded.useCallback(() => {
    loadMore(true);
  }, items2);
  const items3 = [tmp.forYouDivider, suggestedFriendAdded, onAddSuggestionAnimationFinish, stateFromStores, setting, isSoftAcked, onSoftAckItem, forceHoistItem, isForceHoisted, tmp6, callback, flag];
  const callback1 = suggestedFriendAdded.useCallback((item) => {
    item = item.item;
    const kind = item.kind;
    if ("read-section-header" === kind) {
      return outer1_21(loadMore(onSoftAckItem[56]).ForYouReadSectionHeader, {});
    } else if ("recent-activity-section-header" === kind) {
      return outer1_21(loadMore(onSoftAckItem[57]).ForYouRecentActivitySectionHeader, {});
    } else if ("hoisted-items-header" === kind) {
      return outer1_21(loadMore(onSoftAckItem[58]).ForYouHoistedItemsHeader, {});
    } else if ("suggested-friends-header" === kind) {
      let obj = { showDivider: item.showDivider };
      return outer1_21(shouldScrollToTop(onSoftAckItem[59]), obj);
    } else if ("suggested-friends-row" === kind) {
      obj = { suggestedFriend: item.suggestedFriend, onAddSuggestion: suggestedFriendAdded, onAddSuggestionAnimationFinish, panelVariant: flag };
      return outer1_21(shouldScrollToTop(onSoftAckItem[60]), obj);
    } else if ("suggested-friends-show-all-row" === kind) {
      const obj1 = { suggestedFriends: item.suggestedFriends, panelVariant: flag };
      return outer1_21(loadMore(onSoftAckItem[61]).ForYouSuggestedFriendShowAllRow, obj1);
    } else if ("for-you-divider" === kind) {
      const obj2 = { style: _undefined.forYouDivider };
      return outer1_21(onAddSuggestionAnimationFinish, obj2);
    } else if ("notification-center-item" === kind) {
      const obj3 = {};
      const obj4 = { item, ackedBeforeId: setting, isSoftAcked: isSoftAcked(item.id), onSoftAckItem, forceHoistItem, isForceHoisted, rowIndex: tmp, compactMode: c13, roleStyle: stateFromStores };
      const _HermesInternal = HermesInternal;
      obj3.children = outer1_21(outer1_31, obj4, "" + item.id + "-" + stateFromStores);
      return outer1_21(loadMore(onSoftAckItem[62]).ErrorBoundary, obj3);
    } else if ("mentions-placeholder" === kind) {
      return outer1_21(loadMore(onSoftAckItem[17]).ForYouMentionPlaceholder, {});
    } else if ("unread-cleared-placeholder" === kind) {
      return outer1_21(loadMore(onSoftAckItem[63]).ForYouUnreadClearedState, {});
    } else if ("load-more" === kind) {
      const obj5 = { onPressLoad: callback };
      return outer1_21(loadMore(onSoftAckItem[64]).ForYouLoadMore, obj5);
    } else {
      obj = loadMore(onSoftAckItem[65]);
      obj.assertNever(item);
    }
  }, items3);
  ref = suggestedFriendAdded.useRef(null);
  const items4 = [shouldScrollToTop];
  const effect = suggestedFriendAdded.useEffect(() => {
    if (shouldScrollToTop) {
      const current = ref.current;
      if (null != current) {
        current.scrollToOffset({ animated: false, offset: 0 });
      }
    }
  }, items4);
  const items5 = [stateFromStores1];
  const callback2 = suggestedFriendAdded.useCallback(() => {
    if (!stateFromStores1) {
      loadMore(onSoftAckItem[66]).refreshNotifications();
      const obj = loadMore(onSoftAckItem[66]);
    }
  }, items5);
  const tmp12 = isForceHoisted(suggestedFriendAdded.useState(0), 2);
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
    tmp15 = callback(ScrollToTopRef, obj);
  }
  const items6 = [tmp15, ];
  obj1 = { ref, data: items, ListEmptyComponent: callback(loadMore(onSoftAckItem[68]).ForYouEmptyState, { height: tmp12[0] }), onScroll, refreshControl: callback(flag, { onRefresh: callback2, refreshing: stateFromStores1, tintColor: tmp.refreshSpinner.color }), keyExtractor: extractKey, renderItem: callback1, extraData: setting, onEndReached: loadMore, onEndReachedThreshold: 0.8, ListFooterComponent: callback(ForYouFooter, { loading: loadingMore }), viewabilityConfig: closure_23 };
  items6[1] = callback(loadMore(onSoftAckItem[67]).FlashList, obj1);
  obj.children = items6;
  return closure_22(onAddSuggestionAnimationFinish, obj);
});
let result = require("result").fileFinishedImporting("modules/notification_center/native/ForYouItems.tsx");

export const ForYouItems = memoResult;
