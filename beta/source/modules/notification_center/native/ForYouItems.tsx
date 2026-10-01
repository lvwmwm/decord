// Module ID: 16055
// Function ID: 16056
// Name: ForYouItems
// Dependencies: [5, 32, 19, 17, 4825, 5063, 2045, 2067, 1372, 16049, 1074, 6013, 21, 4836, 4832, 576, 5301, 16054, 1115, 1385, 7486, 7180, 10815, 9883, 8079, 504, 7313, 1177, 12125, 16056, 1485, 4813, 13395, 7054, 1241, 12760, 16057, 11118, 4528, 11141, 1981, 4800, 16059, 4790, 16051, 6615, 16060, 16061, 11, 5435, 16062, 7055, 12691, 1486, 2021, 7304, 16072, 16073, 16074, 16075, 16076, 16082, 675, 16083, 16084, 1370, 16053, 8179, 16085, 2]

// Module 16055 (ForYouItems)
import nativeDefault from "native" /* 576 */;
import _mod675 from "module_675" /* 675 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import Link from "Link" /* 1486 */;
import parseURLDefault from "parseURL" /* 4813 */;
import Text_Text from "Text/Text" /* 4832 */;
import CustomMarkupAll from "CustomMarkup" /* 5301 */;
import PushNotificationConstants from "PushNotificationConstants" /* 6013 */;
import NotificationCenterItemsTypes from "NotificationCenterItemsTypes" /* 7054 */;
import ApplicationIconAndNameDefault from "ApplicationIconAndName" /* 12125 */;
import handleSupportedURLDefault from "handleSupportedURL" /* 13395 */;
import NotificationCenterStoreActions from "NotificationCenterStoreActions" /* 16053 */;
import ForYouMentionPlaceholder from "ForYouMentionPlaceholder" /* 16054 */;
import ForYouReadSectionHeader from "ForYouReadSectionHeader" /* 16072 */;
import ForYouRecentActivitySectionHeader from "ForYouRecentActivitySectionHeader" /* 16073 */;
import ForYouHoistedItemsHeader from "ForYouHoistedItemsHeader" /* 16074 */;
import ForYouSuggestedFriendsSectionHeaderDefault from "ForYouSuggestedFriendsSectionHeader" /* 16075 */;
import ForYouSuggestedFriendRowDefault from "ForYouSuggestedFriendRow" /* 16076 */;
import ForYouShowAllRow from "ForYouShowAllRow" /* 16082 */;
import ForYouUnreadClearedState from "ForYouUnreadClearedState" /* 16083 */;
import ForYouLoadMore from "ForYouLoadMore" /* 16084 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import NotificationCenterStore from "NotificationCenterStore" /* 16049 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c1, c4, loadMore, navigation;

let StyleSheet;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_21;
let closure_22;
let metroImportAll;
let metroImportDefault;
let obj10;
let obj11;
let obj12;
let obj13;
let obj14;
let obj15;
let obj16;
let obj17;
let obj2;
let obj4;
let obj6;
let obj8;
let size;
function ForYouFooter(loading) {
  let tmp = null;
  if (loading.loading) {
    tmp = closure_21(ForYouMentionPlaceholder.ForYouMentionPlaceholder, {});
  }
  return tmp;
}
function Callout(arg0) {
  let acked;
  let compactMode;
  let item;
  let items;
  let items1;
  let num;
  ({ item, acked, compactMode } = arg0);
  const tmp = closure_29();
  const obj2 = { style: tmp.calloutContainer, pointerEvents: "none", children: items };
  const obj = CustomMarkupAll;
  const obj3 = { style: tmp.messagePreviewBarV2 };
  const parser = obj.getParser(closure_26());
  items = [closure_21(metroImportDefault, obj3), ];
  const obj4 = { style: items1, variant: "redesign/message-preview/medium", lineClamp: num, children: parser(item.callout) };
  items1 = [acked ? tmp.calloutTextAcked : tmp.calloutTextNotAcked];
  num = 10;
  const Text = Text_Text.Text;
  const tmp3 = authStore5;
  const tmp4 = metroImportDefault;
  const tmp5 = closure_21;
  if (compactMode) {
    num = 3;
  }
  items[1] = tmp5(Text, obj4);
  return tmp3(tmp4, obj2);
}
function ForYouMessagePreviewV2(item) {
  let ATTACHMENT;
  let Icon;
  let compactMode;
  let id;
  let items3;
  let items5;
  let num3;
  let obj7;
  let result;
  let roleStyle;
  item = item.item;
  const acked = item.acked;
  let guild_id;
  let message_channel_id;
  ({ compactMode, roleStyle } = item);
  const tmp = closure_29();
  const obj = message_channel_id(5301);
  const notifCenterV2MessagePreviewParser = obj.getNotifCenterV2MessagePreviewParser(closure_27(), closure_28, roleStyle);
  const intl = item(1115).intl;
  const stringResult = intl.string(item(1115).t.BOi07B);
  let message = item.message;
  let num;
  const hasFlag = item(1385).hasFlag;
  item(1385);
  if (message != null) {
    num = message.flags;
  }
  if (num == null) {
    num = 0;
  }
  let message2 = item.message;
  let type;
  const hasFlagResult = hasFlag(num, constants2.IS_VOICE_MESSAGE);
  const tmp7 = constants2;
  if (message2 != null) {
    type = message2.type;
  }
  const message3 = item.message;
  let attachments;
  const POLL_RESULT = constants3.POLL_RESULT;
  if (message3 != null) {
    attachments = message3.attachments;
  }
  if (attachments == null) {
    attachments = [];
  }
  const message4 = item.message;
  let stickers;
  const length = attachments.length;
  if (message4 != null) {
    stickers = message4.stickers;
  }
  if (stickers == null) {
    stickers = [];
  }
  const message5 = item.message;
  let embeds1;
  const length2 = stickers.length;
  if (message5 != null) {
    embeds1 = message5.embeds;
  }
  if (embeds1 == null) {
    embeds1 = [];
  }
  const message6 = item.message;
  const length3 = embeds1.length;
  if (message6 != null) {
    const interaction = message6.interaction;
  }
  if (type === POLL_RESULT) {
    const message8 = item.message;
    let first;
    if (message8 != null) {
      const embeds = message8.embeds;
      if (embeds != null) {
        first = embeds[0];
      }
    }
    const tmp19 = guild_id(7486)(first);
    result = stringResult;
    if (null != tmp19) {
      const tmp4Result = item(7180);
      result = tmp4Result.formatPollResultNotificationCenterText(tmp19);
    }
  } else if (length2 > 0) {
    const intl6 = tmp4(1115).intl;
    result = intl6.string(tmp4(1115).t["7K5Lma"]);
    ATTACHMENT = constants4.STICKER;
  } else if (tmp10) {
    const intl5 = tmp4(1115).intl;
    result = intl5.string(tmp4(1115).t["2v7kfl"]);
  } else if (hasFlagResult) {
    const intl4 = tmp4(1115).intl;
    result = intl4.string(tmp4(1115).t["6bhHrc"]);
    ATTACHMENT = constants4.VOICE_MESSAGE;
  } else {
    const message7 = item.message;
    let num2;
    const hasFlag2 = item(1385).hasFlag;
    item(1385);
    if (message7 != null) {
      num2 = message7.flags;
    }
    if (num2 == null) {
      num2 = 0;
    }
    if (hasFlag2(num2, tmp7.IS_COMPONENTS_V2)) {
      const intl3 = tmp4(1115).intl;
      result = intl3.string(tmp4(1115).t.Xxm5i3);
    } else {
      result = stringResult;
      const tmp12 = length > 0 || length3 > 0;
      if (tmp12) {
        const intl2 = tmp4(1115).intl;
        result = intl2.string(tmp4(1115).t.JAKsM8);
        ATTACHMENT = constants4.ATTACHMENT;
      }
    }
  }
  const message9 = item.message;
  let content;
  if (message9 != null) {
    content = message9.content;
  }
  if (null != content && "" !== content) {
    result = content;
  }
  guild_id = item.guild_id;
  message_channel_id = item.message_channel_id;
  const message_id = item.message_id;
  let items = [GuildStore];
  const tmp4Result7 = item(504);
  const stateFromStores = tmp4Result7.useStateFromStores(items, () => GuildStore.getGuild(guild_id));
  const items1 = [ChannelStore];
  const tmp4Result8 = item(504);
  const stateFromStores1 = tmp4Result8.useStateFromStores(items1, () => ChannelStore.getChannel(message_channel_id));
  const items2 = [UserStore];
  const tmp4Result9 = item(504);
  const stateFromStoresArray = tmp4Result9.useStateFromStoresArray(items2, () => {
    let user;
    const message = item.message;
    let id;
    const getUser = UserStore.getUser;
    const tmp3 = item;
    if (message != null) {
      id = message.author.id;
    }
    const items = [getUser(id)];
    const message2 = tmp3.message;
    let mapped;
    if (message2 != null) {
      const mentions = message2.mentions;
      if (mentions != null) {
        mapped = mentions.map((item) => user.getUser(item));
      }
    }
    if (mapped == null) {
      mapped = [];
    }
    HermesBuiltin.arraySpread(items, mapped, 1);
    return items;
  });
  const obj2 = { style: tmp.messagePreviewContainerV2, pointerEvents: "none", children: items3 };
  items3 = [, ];
  const obj3 = { style: tmp.messagePreviewBarV2 };
  items3[0] = closure_21(closure_7, obj3);
  const items4 = [acked ? tmp.messagePreviewTextV2Acked : tmp.messagePreviewTextV2NotAcked, ];
  let prop;
  const Text = tmp4(4832).Text;
  if (!(null != content && "" !== content)) {
    prop = tmp.messagePreviewSystemTextV2;
  }
  const obj4 = { style: items4, variant: "redesign/message-preview/medium", lineClamp: num3, children: items5 };
  items4[1] = prop;
  num3 = 10;
  if (compactMode) {
    num3 = 3;
  }
  const message10 = item.message;
  const obj5 = { content: result, guildId: guild_id, channelId: message_channel_id, messageId: message_id, authorId: id };
  id = undefined;
  const renderMessageContentMarkup = item(7313).renderMessageContentMarkup;
  item(7313);
  if (message10 != null) {
    id = message10.author.id;
  }
  let str2 = "text-default";
  if (acked) {
    str2 = "text-muted";
  }
  items5 = [renderMessageContentMarkup(notifCenterV2MessagePreviewParser, obj5, { textColor: str2 }), ];
  let tmp27Result = null != ATTACHMENT;
  if (tmp27Result) {
    let tmp33;
    const obj6 = { style: tmp.messagePreviewIconV2Container, children: closure_21(Icon, obj7) };
    Icon = tmp4(1177).Icon;
    if (constants4.ATTACHMENT === ATTACHMENT) {
      tmp33 = guild_id(10815);
    } else if (constants4.STICKER === ATTACHMENT) {
      tmp33 = guild_id(9883);
    } else {
      tmp33 = null;
      if (constants4.VOICE_MESSAGE === ATTACHMENT) {
        tmp33 = guild_id(8079);
      }
    }
    obj7 = { source: tmp33, size: item(1177).IconSizes.SMALL, style: tmp.messagePreviewIconV2 };
    tmp27Result = tmp27(tmp26, obj6);
  }
  items5[1] = tmp27Result;
  items3[1] = closure_22(Text, obj4);
  return closure_22(closure_7, obj2);
}
function ApplicationName(applicationId) {
  let tmp5;
  applicationId = applicationId.applicationId;
  const textVariant = applicationId.textVariant;
  const items = [ApplicationStore];
  const obj = applicationId(504);
  const stateFromStores = obj.useStateFromStores(items, () => ApplicationStore.getApplication(applicationId));
  if (null == stateFromStores) {
    tmp5 = closure_21(closure_7, {});
  } else {
    const obj2 = { application: stateFromStores, textVariant, iconSize: 16 };
    tmp5 = closure_21(ApplicationIconAndNameDefault, obj2, stateFromStores.id);
  }
  return tmp5;
}
function ScrollToTopRef(scrollRef) {
  scrollRef = scrollRef.scrollRef;
  const obj = {
    scrollToTop() {
      const current = scrollRef.current;
      let scrollToTopResult;
      if (current != null) {
        scrollToTopResult = current.scrollToTop();
      }
      return scrollToTopResult;
    }
  };
  const ref = react.useRef(obj);
  const obj2 = Link;
  const scrollToTop = obj2.useScrollToTop(ref);
  return null;
}
function extractKey(id) {
  return id.id;
}
({ View: metroImportDefault, RefreshControl: metroImportAll, StyleSheet } = react_native);
({ AnalyticEvents: closure_15, MessageFlags: closure_16, AnalyticsLocations: closure_17, MessageTypes: closure_18, EMPTY_STRING_SNOWFLAKE_ID: closure_19 } = Constants);
const NotificationTypes = PushNotificationConstants.NotificationTypes;
({ jsx: closure_21, jsxs: closure_22 } = Fragment);
const viewabilityConfig = { waitForInteraction: false, viewAreaCoveragePercentThreshold: 100, minimumViewTime: 1000 };
let createStyles = createStyles_mod;
let obj = { strong: obj2 };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
const merged = Object.assign(Text_Text.TextStyleSheet["text-md/medium"]);
let closure_24 = createStyles(obj);
createStyles = createStyles_mod;
let obj3 = { strong: obj4 };
obj4 = { color: nativeDefault.colors.TEXT_MUTED };
const createStyles2 = createStyles.createStyles;
const merged1 = Object.assign(Text_Text.TextStyleSheet["text-md/medium"]);
let closure_25 = createStyles2(obj3);
createStyles = createStyles_mod;
let obj5 = { mention: obj6 };
obj6 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: nativeDefault.colors.MENTION_BACKGROUND };
let closure_26 = createStyles.createStyles(obj5);
createStyles = createStyles_mod;
let obj7 = { mention: obj8 };
obj8 = { color: nativeDefault.colors.MENTION_FOREGROUND, backgroundColor: "transparent" };
let closure_27 = createStyles.createStyles(obj7);
let closure_28 = { channelMentionText: "redesign/message-preview/medium" };
createStyles = createStyles_mod;
let obj9 = { container: { flex: 1 }, row: obj10, rowCompact: { paddingVertical: 6 }, rowActive: obj11, col: { flexDirection: "column", flex: 1 }, unreadIndicatorV2: size, unreadIndicatorCompactV2: { top: 18 }, rowText: { flex: 1 }, rowTextV2: { flexDirection: "row", justifyContent: "space-between" }, rowBody: { lineHeight: 20 }, rowBodyV2: { marginRight: 30 }, rowBodyAcked: obj12, rowTime: { lineHeight: 20 }, rowTimeV2: { marginLeft: -24 }, itemV2: { alignItems: "flex-start", marginRight: 4, marginLeft: 8 }, calloutContainer: { marginTop: 4, flexDirection: "row", marginRight: 16 }, calloutTextAcked: obj13, calloutTextNotAcked: obj14, messagePreviewContainerV2: { marginTop: 4, flexDirection: "row", marginRight: 16 }, messagePreviewBarV2: obj15, messagePreviewIconV2Container: { paddingTop: 4 }, messagePreviewIconV2: obj16, messagePreviewTextV2Acked: obj17, messagePreviewTextV2NotAcked: { color: nativeDefault.colors.TEXT_DEFAULT }, messagePreviewSystemTextV2: { fontStyle: "italic", fontWeight: "normal" }, refreshSpinner: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT }, forYouDivider: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 }, friendRequestNoteContainer: { marginTop: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE } };
obj10 = { marginHorizontal: 4, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 4, borderRadius: nativeDefault.radii.lg, flexDirection: "row", justifyContent: "space-between" };
const createStyles3 = createStyles.createStyles;
obj11 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
size = { top: 28, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 8, width: 8, borderRadius: nativeDefault.radii.xs, position: "absolute", left: 4 };
obj12 = { color: nativeDefault.colors.TEXT_MUTED };
obj13 = { color: nativeDefault.colors.TEXT_MUTED };
obj14 = { color: nativeDefault.colors.TEXT_DEFAULT };
obj15 = { marginRight: 8, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, borderLeftWidth: 3, borderRadius: 2, height: "auto" };
obj16 = { marginLeft: 4, tintColor: nativeDefault.colors.TEXT_SUBTLE };
obj17 = { color: nativeDefault.colors.TEXT_MUTED };
({ color: nativeDefault.colors.TEXT_DEFAULT });
({ color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
({ borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 });
({ marginTop: 4, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE });
let closure_29 = createStyles3(obj9);
const constants4 = { STICKER: "sticker", VOICE_MESSAGE: "voice_message", ATTACHMENT: "attachment" };
let closure_35 = react.memo((item) => {
  let accessibilityActions;
  let ackedBeforeId;
  let actionButtons;
  let actionsNode;
  let compactMode;
  let forceHoistItem;
  let id;
  let isForceHoisted;
  let isSoftAcked;
  let items10;
  let items3;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj11;
  let onAccessibilityAction;
  let onSoftAckItem;
  let roleStyle;
  let tmp10;
  let tmp11;
  let tmp27;
  let tmp2Result5;
  let tmp2Result6;
  item = item.item;
  const rowIndex = item.rowIndex;
  ({ isSoftAcked, onSoftAckItem } = item);
  ({ forceHoistItem, isForceHoisted, compactMode } = item);
  let notificationCenterItemAcked;
  navigation = undefined;
  let callback;
  let str;
  ({ ackedBeforeId, roleStyle } = item);
  let tmp = closure_29();
  const tmp2 = item;
  let tmp3 = notificationCenterItemAcked;
  let obj = item(notificationCenterItemAcked[29]);
  notificationCenterItemAcked = obj.useNotificationCenterItemAcked(item, ackedBeforeId);
  if (!isSoftAcked) {
    isSoftAcked = notificationCenterItemAcked;
  }
  let tmp2Result = tmp2(tmp3[30]);
  navigation = tmp2Result.useNavigation();
  let items = [item];
  callback = str.useCallback(() => {
    if (null != item.deeplink) {
      const obj = { payload: parseURLDefault(tmp.deeplink).payload, safe: true, navigationReplace: false };
      handleSupportedURLDefault(obj);
    }
  }, items);
  const items1 = [notificationCenterItemAcked, item, callback, rowIndex, onSoftAckItem, navigation];
  const callback1 = str.useCallback(() => {
    if (!notificationCenterItemAcked) {
      onSoftAckItem(item);
    }
    if (item.type === NotificationCenterItemsTypes.NotificationCenterLocalItems.FRIEND_REQUESTS_GROUPED) {
      const obj = navigation;
      if (navigation != null) {
        obj.navigate("friends", { screen: "requests" });
      }
    }
    callback();
    const obj2 = AnalyticsUtilsDefault;
    const obj3 = { action_type: NotificationCenterItemsTypes.NotificationCenterActionTypes.CLICKED, notification_center_id: item.id, item_type: item.type, acked: notificationCenterItemAcked, item_index: rowIndex, deeplink: item.deeplink };
    obj2.track(constants.NOTIFICATION_CENTER_ACTION, obj3);
  }, items1);
  const items2 = [item];
  const callback2 = str.useCallback(() => {
    let closure_0;
    let intl;
    let intl2;
    let intl3;
    let tmp6;
    const items = [];
    const tmp3 = notificationCenterItemAcked;
    let tmp = item;
    if (item.type === item(notificationCenterItemAcked[33]).NotificationCenterItems.TRENDING_CONTENT) {
      let obj = {
        label: intl.string(tmp2(tmp3[18]).t["gSMz/x"]),
        icon: rowIndex(tmp3[35]),
        IconComponent: tmp2(tmp3[36]).LightbulbIcon,
        onPress() {
            let intl;
            let tmp19;
            try {
              str = closure_0.deeplink;
              const tmp = closure_0;
              if (str == null) {
                str = "";
              }
              const match = str.match(/channels\/(\d*)\/(\d*)\/(\d*)\?summaryId=(\d*)/);
              if (null == match) {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("Invalid deeplink: " + tmp.deeplink);
                throw error;
              } else {
                const tmp18 = callback(tmp4, 5);
                [r10045, tmp19] = tmp18;
                const tmp20 = tmp18[2];
                const tmp21 = tmp18[3];
                const tmp22 = tmp18[4];
                const obj2 = item(notificationCenterItemAcked[37]);
                const obj3 = { id: tmp21, channel_id: tmp20 };
                const obj4 = { summary_id: tmp22 };
                const result = obj2.openGuildHighlightNotificationForPush(tmp19, obj3, constants2.TRENDING_CONTENT_PUSH, constants.NOTIFICATION_CENTER, obj4);
              }
            } catch (err) {
              const obj = { key: "USER_SURVEY_ERROR", content: intl.string(item(notificationCenterItemAcked[18]).t.HO9Lf2) };
              const open = rowIndex(notificationCenterItemAcked[38]).open;
              rowIndex(notificationCenterItemAcked[38]);
              intl = item(notificationCenterItemAcked[18]).intl;
              open(obj);
            }
          }
      };
      const push = items.push;
      intl = tmp2(tmp3[18]).intl;
      const tmp4 = rowIndex;
      push(obj);
      tmp6 = rowIndex;
    } else {
      let obj2 = {
        label: intl2.string(tmp2(tmp3[18]).t["08rqg5"]),
        icon: rowIndex(tmp3[35]),
        IconComponent: tmp2(tmp3[36]).LightbulbIcon,
        onPress() {
            let intl;
            try {
              const obj2 = { notificationType: closure_0.type, location: constants.NOTIFICATION_CENTER };
              const tmp5 = item(notificationCenterItemAcked[40])(notificationCenterItemAcked[39], notificationCenterItemAcked.paths);
              const obj = rowIndex(notificationCenterItemAcked[41]);
              obj.openLazy(tmp5, "NotificationSurvey", obj2);
            } catch (err) {
              const obj3 = { key: "USER_SURVEY_ERROR", content: intl.string(item(notificationCenterItemAcked[18]).t.HO9Lf2) };
              const open = rowIndex(notificationCenterItemAcked[38]).open;
              rowIndex(notificationCenterItemAcked[38]);
              intl = item(notificationCenterItemAcked[18]).intl;
              open(obj3);
            }
          }
      };
      const push2 = items.push;
      intl2 = tmp2(tmp3[18]).intl;
      push2(obj2);
      tmp6 = rowIndex;
    }
    if (null == tmp.local_id) {
      let obj3 = {
        label: intl3.string(tmp2(tmp3[18]).t.D8z9ju),
        icon: tmp6(tmp3[42]),
        IconComponent: tmp2(tmp3[43]).TrashIcon,
        onPress: function() {
            return closure_0(...arguments);
          }
      };
      const unshift = items.unshift;
      intl3 = tmp2(tmp3[18]).intl;
      item = navigation(function*(arg0, value) {
        let intl;
        let obj3;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c3;
          try {
            c4 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                c3 = 1;
                c1 = 2;
                c4 = 1;
                const obj5 = { value: obj3.deleteNotificationCenterItem(tmp), done: false };
                obj3 = tmp(notificationCenterItemAcked[44]);
                return obj5;
              }
            } else {
              if (1 === tmp4) {
                c3 = 0;
                const obj6 = { key: "REMOVE_NOTIFICATION_ERROR", content: intl.string(tmp(notificationCenterItemAcked[18]).t.WDxhvB) };
                const open = rowIndex(notificationCenterItemAcked[38]).open;
                const tmp9 = rowIndex(notificationCenterItemAcked[38]);
                intl = tmp(notificationCenterItemAcked[18]).intl;
                open(obj6);
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c4 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp18) {
            let closure_2 = tmp18;
            if (0 === c3) {
              c4 = 3;
              throw tmp18;
            } else {
              c1 = 1;
            }
          }
        }
      });
      unshift(obj3);
    }
    const tmp2Result = item(tmp3[45]);
    let result = tmp2Result.showSimpleActionSheet({ key: "ForYouItemLongPress", options: items, hasIcons: true });
  }, items2);
  let tmp9 = callback(str.useState(undefined), 2);
  [tmp10, tmp11] = tmp9;
  const tmp2Result4 = tmp2(tmp3[46]);
  const itemActionButtonPropsV2 = tmp2Result4.useItemActionButtonPropsV2(item, callback, navigation, forceHoistItem, isForceHoisted, onSoftAckItem, tmp11, compactMode);
  ({ actionButtons, actionsNode, accessibilityActions, onAccessibilityAction } = itemActionButtonPropsV2);
  let obj4 = onSoftAckItem(tmp3[16]);
  const parserWithoutLinks = obj4.getParserWithoutLinks(closure_25());
  let obj5 = onSoftAckItem(tmp3[16]);
  const parserWithoutLinks1 = obj5.getParserWithoutLinks(closure_24());
  const tmp15 = item.type === tmp2(tmp3[33]).NotificationCenterItems.FRIEND_REQUEST_ACCEPTED || item.type === tmp2(tmp3[33]).NotificationCenterItems.GAME_FRIEND_REQUEST_ACCEPTED;
  if (notificationCenterItemAcked) {
    notificationCenterItemAcked = !tmp15;
  }
  let tmp16 = null;
  if (!notificationCenterItemAcked) {
    let obj2 = { "aria-hidden": true, accessibilityLabel: "", item, rowIndex, onSoftAckItem, actionButtons, actionsNode, compactMode };
    tmp16 = closure_21(tmp2(tmp3[46]).ForYouItemActionButtons, obj2);
  }
  str = "text-md/semibold";
  if (isSoftAcked) {
    str = "text-md/medium";
  }
  if (tmp10 == null) {
    let tmp18 = rowIndex;
    let obj3 = {
      item,
      renderApplication(applicationId) {
          const obj = { applicationId, textVariant: str };
          return closure_21(ApplicationName, obj);
        }
    };
    tmp10 = rowIndex(tmp3[47])(obj3);
  }
  const tmp19 = rowIndex;
  const obj8 = rowIndex(tmp3[48]);
  const extractTimestampResult = obj8.extractTimestamp(item.id);
  let tmp21 = closure_22;
  let obj6 = { accessibilityRole: "button", accessibilityActions, onAccessibilityAction, style: items3, onPress: callback1, onAccessibilityTap: callback1, onLongPress: callback2, underlayColor: tmp.rowActive.backgroundColor, children: items5 };
  items3 = [tmp.row, ];
  let rowCompact = compactMode;
  const PressableHighlight = tmp2(tmp3[49]).PressableHighlight;
  if (rowCompact) {
    rowCompact = tmp.rowCompact;
  }
  items3[1] = rowCompact;
  let tmp23Result = null;
  if (item.enableBadge) {
    tmp23Result = null;
    if (!isSoftAcked) {
      const items4 = [tmp.unreadIndicatorV2, ];
      let unreadIndicatorCompactV2 = compactMode;
      const tmp23 = closure_21;
      const tmp24 = closure_7;
      if (unreadIndicatorCompactV2) {
        unreadIndicatorCompactV2 = tmp.unreadIndicatorCompactV2;
      }
      const obj7 = { style: items4 };
      items4[1] = unreadIndicatorCompactV2;
      tmp23Result = tmp23(tmp24, obj7);
    }
  }
  items5 = [tmp23Result, , ];
  const obj9 = { style: tmp.itemV2, children: closure_21(tmp2(tmp3[50]).ForYouItemImage, { item, compactMode }) };
  items5[1] = closure_21(closure_7, obj9);
  const obj10 = { style: { flex: 1, flexDirection: "row" }, children: tmp21(closure_7, obj11) };
  const obj12 = { style: items6, children: items8 };
  items6 = [, ];
  obj11 = { style: tmp.col, children: items10 };
  ({ rowText: arr7[0], rowTextV2: arr7[1] } = tmp);
  const obj13 = { variant: str, style: items7, color: "text-default", children: tmp27 };
  items7 = [, , ];
  ({ rowBody: arr8[0], rowBodyV2: arr8[1] } = tmp);
  let rowBodyAcked = isSoftAcked;
  const Text = tmp2(tmp3[14]).Text;
  if (rowBodyAcked) {
    rowBodyAcked = tmp.rowBodyAcked;
  }
  items7[2] = rowBodyAcked;
  tmp27 = tmp10;
  if (typeof tmp10 === "string") {
    tmp27 = isSoftAcked ? parserWithoutLinks(tmp10) : parserWithoutLinks1(tmp10);
  }
  items8 = [tmp25(Text, obj13), ];
  const items9 = [, , ];
  ({ rowTime: arr10[0], rowTimeV2: arr10[1] } = tmp);
  let rowBodyAcked2 = isSoftAcked;
  const Text2 = tmp2(tmp3[14]).Text;
  if (rowBodyAcked2) {
    rowBodyAcked2 = tmp.rowBodyAcked;
  }
  items9[2] = rowBodyAcked2;
  const obj14 = { variant: "text-xs/medium", style: items9, color: "text-default", accessibilityLabel: tmp2Result5.getRelativeTimestamp(extractTimestampResult, false), children: tmp2Result6.getRelativeTimestamp(extractTimestampResult) };
  tmp2Result5 = tmp2(tmp3[51]);
  tmp2Result6 = tmp2(tmp3[51]);
  items8[1] = closure_21(Text2, obj14);
  items10 = [tmp21(tmp26, obj12), , , , ];
  let tmp25Result = item.type === tmp2(tmp3[33]).NotificationCenterLocalItems.INCOMING_FRIEND_REQUESTS;
  if (tmp25Result) {
    const other_user = item.other_user;
    const obj15 = { styles: tmp.friendRequestNoteContainer, backgroundColor: tmp.friendRequestNoteContainer.backgroundColor, userId: id, analyticsLocation: "Notifications Tab" };
    id = undefined;
    const tmp19Result = tmp19(tmp3[52]);
    if (other_user != null) {
      id = other_user.id;
    }
    if (id == null) {
      id = closure_19;
    }
    tmp25Result = tmp25(tmp19Result, obj15);
  }
  items10[1] = tmp25Result;
  const message = item.message;
  let content;
  if (message != null) {
    content = message.content;
  }
  let tmp25Result3 = null;
  if (null != content) {
    const obj16 = { item, acked: isSoftAcked, compactMode, roleStyle };
    tmp25Result3 = tmp25(ForYouMessagePreviewV2, obj16);
  }
  items10[2] = tmp25Result3;
  let tmp25Result4 = null;
  if (null != item.callout) {
    const obj17 = { item, acked: isSoftAcked, compactMode };
    tmp25Result4 = tmp25(Callout, obj17);
  }
  items10[3] = tmp25Result4;
  items10[4] = closure_21(closure_7, { children: tmp16 });
  items5[2] = closure_21(closure_7, obj10);
  return tmp21(PressableHighlight, obj6);
});
const memoResult = react.memo((loadMore) => {
  let items;
  let items7;
  let loadingMore;
  let nestedInLaunchPad;
  let obj6;
  let onScroll;
  let shouldScrollToTop;
  loadMore = loadMore.loadMore;
  ({ nestedInLaunchPad, shouldScrollToTop } = loadMore);
  const isSoftAcked = loadMore.isSoftAcked;
  const onSoftAckItem = loadMore.onSoftAckItem;
  const forceHoistItem = loadMore.forceHoistItem;
  const isForceHoisted = loadMore.isForceHoisted;
  const suggestedFriendAdded = loadMore.suggestedFriendAdded;
  const onAddSuggestionAnimationFinish = loadMore.onAddSuggestionAnimationFinish;
  let flag = loadMore.panelVariant;
  ({ items, onScroll, loadingMore } = loadMore);
  if (flag === undefined) {
    flag = false;
  }
  let onPressLoad;
  let tmp = closure_29();
  let closure_9 = tmp;
  const NotificationCenterAckedBeforeId = loadMore(onSoftAckItem[54]).NotificationCenterAckedBeforeId;
  const setting = NotificationCenterAckedBeforeId.useSetting();
  let obj = loadMore(onSoftAckItem[25]);
  const items1 = [closure_9];
  const stateFromStores = obj.useStateFromStores(items1, () => closure_9.roleStyle);
  let obj2 = loadMore(onSoftAckItem[25]);
  const items2 = [onPressLoad];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => callback.isRefreshing());
  const ChannelListLayoutSetting = loadMore(onSoftAckItem[54]).ChannelListLayoutSetting;
  const setting1 = ChannelListLayoutSetting.useSetting();
  const tmp8 = setting1 === loadMore(onSoftAckItem[55]).ChannelListLayoutTypes.COMPACT;
  const compactMode = tmp8;
  const items3 = [loadMore];
  onPressLoad = suggestedFriendAdded.useCallback(() => {
    loadMore(true);
  }, items3);
  const items4 = [tmp.forYouDivider, suggestedFriendAdded, onAddSuggestionAnimationFinish, stateFromStores, setting, isSoftAcked, onSoftAckItem, forceHoistItem, isForceHoisted, tmp8, onPressLoad, flag];
  const callback1 = suggestedFriendAdded.useCallback((item) => {
    let obj7;
    item = item.item;
    switch (item.kind) {
      case "read-section-header":
      {
        return closure_21(ForYouReadSectionHeader.ForYouReadSectionHeader, {});
      }
      case "recent-activity-section-header":
      {
        return closure_21(ForYouRecentActivitySectionHeader.ForYouRecentActivitySectionHeader, {});
      }
      case "hoisted-items-header":
      {
        return closure_21(ForYouHoistedItemsHeader.ForYouHoistedItemsHeader, {});
      }
      case "suggested-friends-header":
      {
        const obj2 = { showDivider: item.showDivider };
        return closure_21(ForYouSuggestedFriendsSectionHeaderDefault, obj2);
      }
      case "suggested-friends-row":
      {
        const obj3 = { suggestedFriend: item.suggestedFriend, onAddSuggestion: suggestedFriendAdded, onAddSuggestionAnimationFinish, panelVariant: flag };
        return closure_21(ForYouSuggestedFriendRowDefault, obj3);
      }
      case "suggested-friends-show-all-row":
      {
        const obj4 = { suggestedFriends: item.suggestedFriends, panelVariant: flag };
        return closure_21(ForYouShowAllRow.ForYouSuggestedFriendShowAllRow, obj4);
      }
      case "for-you-divider":
      {
        const obj5 = { style: closure_9.forYouDivider };
        return closure_21(metroImportDefault, obj5);
      }
      case "notification-center-item":
      {
        const obj6 = { children: closure_21(closure_35, obj7, "" + item.id + "-" + stateFromStores) };
        obj7 = { item, ackedBeforeId: setting, isSoftAcked: isSoftAcked(item.id), onSoftAckItem, forceHoistItem, isForceHoisted, rowIndex: tmp, compactMode, roleStyle: stateFromStores };
        const ErrorBoundary = _mod675.ErrorBoundary;
        const _HermesInternal = HermesInternal;
        return closure_21(ErrorBoundary, obj6);
      }
      case "mentions-placeholder":
      {
        return closure_21(ForYouMentionPlaceholder.ForYouMentionPlaceholder, {});
      }
      case "unread-cleared-placeholder":
      {
        return closure_21(ForYouUnreadClearedState.ForYouUnreadClearedState, {});
      }
      case "load-more":
      {
        const obj = { onPressLoad };
        return closure_21(ForYouLoadMore.ForYouLoadMore, obj);
      }
      default:
      {
        const obj8 = GlobalUtils;
        obj8.assertNever(item);
        break;
      }
    }
  }, items4);
  const ref = suggestedFriendAdded.useRef(null);
  const items5 = [shouldScrollToTop];
  const effect = suggestedFriendAdded.useEffect(() => {
    const tmp = shouldScrollToTop;
    if (tmp) {
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ animated: false, offset: 0 });
      }
    }
  }, items5);
  const items6 = [stateFromStores1];
  const callback2 = suggestedFriendAdded.useCallback(() => {
    const tmp = stateFromStores1;
    if (!tmp) {
      const obj = NotificationCenterStoreActions;
      obj.refreshNotifications();
    }
  }, items6);
  const tmp14 = isForceHoisted(suggestedFriendAdded.useState(0), 2);
  let closure_16 = tmp14[1];
  let obj3 = {
    style: tmp.container,
    onLayout(nativeEvent) {
      return closure_16(nativeEvent.nativeEvent.layout.height);
    },
    children: items7
  };
  let tmp18 = !nestedInLaunchPad;
  const first = tmp14[0];
  const tmp16 = closure_22;
  const tmp17 = onAddSuggestionAnimationFinish;
  if (!nestedInLaunchPad) {
    let obj4 = { scrollRef: ref };
    tmp18 = closure_21(ScrollToTopRef, obj4);
  }
  items7 = [tmp18, ];
  let obj5 = { ref, data: items, ListEmptyComponent: closure_21(tmp2(tmp3[68]).ForYouEmptyState, { height: first }), onScroll, refreshControl: closure_21(flag, obj6), keyExtractor: extractKey, renderItem: callback1, extraData: setting, onEndReached: loadMore, onEndReachedThreshold: 0.8, ListFooterComponent: closure_21(ForYouFooter, { loading: loadingMore }), viewabilityConfig };
  const FlashList = tmp2(tmp3[67]).FlashList;
  obj6 = { onRefresh: callback2, refreshing: stateFromStores1, tintColor: tmp.refreshSpinner.color };
  items7[1] = closure_21(FlashList, obj5);
  return tmp16(tmp17, obj3);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouItems.tsx");

export const ForYouItems = memoResult;
