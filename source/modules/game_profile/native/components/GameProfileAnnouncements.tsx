// Module ID: 8653
// Function ID: 68478
// Name: getSharedMarkdownParser
// Dependencies: [31, 27, 33, 4562, 1212, 4130, 689, 8654, 4126, 8656, 3800, 8007, 5464, 8658, 8600, 8594, 8661, 4543, 5514, 2]
// Exports: default

// Module 8653 (getSharedMarkdownParser)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getSharedMarkdownParser() {
  if (null == parser) {
    parser = importAll(4562).getParser();
    const obj = importAll(4562);
  }
  return parser;
}
function formatReactionCount(reactionCount) {
  let tmp = null != obj;
  if (tmp) {
    tmp = obj.locale === require(1212) /* getSystemLocale */.intl.currentLocale;
  }
  if (!tmp) {
    obj = { locale: require(1212) /* getSystemLocale */.intl.currentLocale };
    const _Intl = Intl;
    const prototype = NumberFormat.prototype;
    const numberFormat = new NumberFormat(require(1212) /* getSystemLocale */.intl.currentLocale);
    obj.format = numberFormat;
  }
  const format = obj.format;
  return format.format(reactionCount);
}
function EmbedAnnouncementCard(message) {
  let channelId;
  let guildId;
  let importDefault;
  message = message.message;
  ({ onPress: importDefault, guildId, channelId } = message);
  const tmp = callback3();
  const tmp2 = getSharedMarkdownParser();
  const media = message.media;
  let proxyUrl;
  if (null != media) {
    proxyUrl = media.proxyUrl;
  }
  if (null == proxyUrl) {
    const media2 = message.media;
    let url;
    if (null != media2) {
      url = media2.url;
    }
    proxyUrl = url;
  }
  let posterUrl = null;
  if (null != proxyUrl) {
    let obj = message(8654);
    posterUrl = obj.getPosterUrl(proxyUrl, 160, c12);
  }
  let tmp9 = proxyUrl;
  if (null != posterUrl) {
    tmp9 = posterUrl;
  }
  const embedSource = message.embedSource;
  if (null == embedSource) {
    return null;
  } else {
    let tmp10;
    if (null != embedSource.color) {
      obj = { borderLeftColor: embedSource.color };
      tmp10 = obj;
    }
    obj = {
      style: tmp.card,
      onPress() {
          return callback(message.id);
        },
      accessibilityRole: "button",
      accessibilityLabel: message.title
    };
    const obj1 = { style: tmp.cardBody };
    let tmp15 = null != embedSource.url;
    if (tmp15) {
      const obj2 = { variant: "text-xs/medium", color: "text-link", lineClamp: 1, children: embedSource.url };
      tmp15 = callback(message(4126).Text, obj2);
    }
    const items = [tmp15, ];
    const obj3 = {};
    const items1 = [tmp.embedContentArea, tmp10];
    obj3.style = items1;
    let tmp22Result = null != embedSource.authorName;
    if (tmp22Result) {
      const obj4 = { style: tmp.embedAuthorRow };
      let tmp24 = null != embedSource.authorIconUrl;
      if (tmp24) {
        const obj5 = {};
        const obj6 = { uri: embedSource.authorIconUrl };
        obj5.source = obj6;
        obj5.style = tmp.embedAuthorIcon;
        tmp24 = callback(closure_5, obj5);
      }
      const items2 = [tmp24, ];
      const obj7 = { variant: "text-xs/semibold", color: "text-strong", lineClamp: 1, children: embedSource.authorName };
      items2[1] = callback(message(4126).Text, obj7);
      obj4.children = items2;
      tmp22Result = callback2(closure_7, obj4);
      const tmp22 = callback2;
      const tmp23 = closure_7;
    }
    const items3 = [tmp22Result, , , , ];
    let tmp30 = null != message.media && null != tmp9;
    if (tmp30) {
      const obj8 = { style: tmp.embedMedia };
      const obj9 = { uri: tmp9, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
      obj8.children = callback(message(8656).ImageWithPlaceholder, obj9);
      tmp30 = callback(closure_7, obj8);
    }
    items3[1] = tmp30;
    let tmp36 = null != message.title;
    if (tmp36) {
      const obj10 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2 };
      const obj11 = { guildId, channelId };
      obj10.children = tmp2(message.title, true, obj11);
      tmp36 = callback(message(4126).Text, obj10);
    }
    items3[2] = tmp36;
    let tmp40 = message.body.length > 0;
    if (tmp40) {
      const obj12 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3 };
      const obj13 = { guildId, channelId };
      obj12.children = tmp2(message.body, true, obj13);
      tmp40 = callback(message(4126).Text, obj12);
    }
    items3[3] = tmp40;
    const obj14 = { style: tmp.metadataRow };
    let tmp46 = null != embedSource.providerIconUrl;
    if (tmp46) {
      const obj15 = {};
      const obj16 = { uri: embedSource.providerIconUrl };
      obj15.source = obj16;
      obj15.style = tmp.embedProviderIcon;
      tmp46 = callback(closure_5, obj15);
    }
    const items4 = [tmp46, , ];
    const obj17 = { variant: "text-xs/medium", color: "text-muted" };
    let str3 = "";
    if (null != embedSource.providerName) {
      const _HermesInternal = HermesInternal;
      str3 = "" + embedSource.providerName + " \u00B7 ";
    }
    const items5 = [str3, ];
    let obj20 = message(3800);
    const _Date = Date;
    const date = new Date(message.timestamp);
    items5[1] = obj20.dateFormat(date, "LL");
    obj17.children = items5;
    items4[1] = callback2(message(4126).Text, obj17);
    let tmp60 = message.reactionCount > 0;
    if (tmp60) {
      const obj18 = { style: tmp.reactionInfo };
      const obj19 = { size: "xs", color: importDefault(689).colors.TEXT_MUTED };
      const items6 = [callback(message(8007).ReactionIcon, obj19), ];
      obj20 = { variant: "text-xs/medium", color: "text-muted", children: formatReactionCount(message.reactionCount) };
      items6[1] = callback(message(4126).Text, obj20);
      obj18.children = items6;
      tmp60 = callback2(closure_7, obj18);
    }
    items4[2] = tmp60;
    obj14.children = items4;
    items3[4] = callback2(closure_7, obj14);
    obj3.children = items3;
    items[1] = callback2(closure_7, obj3);
    obj1.children = items;
    obj.children = callback2(closure_7, obj1);
    return callback(closure_8, obj);
  }
}
function MessageAnnouncementCard(message) {
  let channelId;
  let guildId;
  let importDefault;
  message = message.message;
  ({ onPress: importDefault, guildId, channelId } = message);
  const tmp = callback3();
  const tmp2 = getSharedMarkdownParser();
  const media = message.media;
  let proxyUrl;
  if (null != media) {
    proxyUrl = media.proxyUrl;
  }
  if (null == proxyUrl) {
    const media2 = message.media;
    let url;
    if (null != media2) {
      url = media2.url;
    }
    proxyUrl = url;
  }
  let posterUrl = null;
  if (null != proxyUrl) {
    let obj = message(8654);
    posterUrl = obj.getPosterUrl(proxyUrl, 160, c12);
  }
  let tmp9 = proxyUrl;
  if (null != posterUrl) {
    tmp9 = posterUrl;
  }
  obj = {
    style: tmp.card,
    onPress() {
      return callback(message.id);
    },
    accessibilityRole: "button",
    accessibilityLabel: message.title
  };
  let tmp12 = null != message.media;
  if (tmp12) {
    tmp12 = null != tmp9;
  }
  if (tmp12) {
    obj = { style: tmp.smallCardMedia };
    const obj1 = { uri: tmp9, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
    obj.children = callback(message(8656).ImageWithPlaceholder, obj1);
    tmp12 = callback(closure_7, obj);
  }
  const items = [tmp12, ];
  const obj2 = { style: tmp.cardBody };
  let tmp20 = null != message.title;
  if (tmp20) {
    const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2 };
    const obj4 = { guildId, channelId };
    obj3.children = tmp2(message.title, true, obj4);
    tmp20 = callback(message(4126).Text, obj3);
  }
  const items1 = [tmp20, , ];
  let tmp24 = message.body.length > 0;
  if (tmp24) {
    const obj5 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3 };
    const obj6 = { guildId, channelId };
    obj5.children = tmp2(message.body, true, obj6);
    tmp24 = callback(message(4126).Text, obj5);
  }
  items1[1] = tmp24;
  const obj7 = { style: tmp.metadataRow };
  const obj8 = { variant: "text-xs/medium", color: "text-muted" };
  let obj11 = message(3800);
  obj8.children = obj11.dateFormat(new Date(message.timestamp), "LL");
  const items2 = [callback(message(4126).Text, obj8), ];
  let tmp31 = message.reactionCount > 0;
  if (tmp31) {
    const obj9 = { style: tmp.reactionInfo };
    const obj10 = { size: "xs", color: importDefault(689).colors.TEXT_MUTED };
    const items3 = [callback(message(8007).ReactionIcon, obj10), ];
    obj11 = { variant: "text-xs/medium", color: "text-muted", children: formatReactionCount(message.reactionCount) };
    items3[1] = callback(message(4126).Text, obj11);
    obj9.children = items3;
    tmp31 = callback2(closure_7, obj9);
  }
  items2[1] = tmp31;
  obj7.children = items2;
  items1[2] = callback2(closure_7, obj7);
  obj2.children = items1;
  items[1] = callback2(closure_7, obj2);
  obj.children = items;
  return callback2(closure_8, obj);
}
function PollAnnouncementCard(message) {
  message = message.message;
  const onPress = message.onPress;
  const tmp = callback3();
  const importAll = tmp;
  const poll = message.poll;
  if (null == poll) {
    return null;
  } else {
    const answers = poll.answers;
    const substr = answers.slice(0, 3);
    const diff = poll.answers.length - substr.length;
    let obj = {
      style: tmp.card,
      onPress() {
          return onPress(message.id);
        },
      accessibilityRole: "button",
      accessibilityLabel: poll.question.text
    };
    obj = { style: tmp.cardBody };
    const obj1 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: poll.question.text };
    const items = [callback(message(4126).Text, obj1), , ];
    const obj2 = { style: tmp.pollAnswers };
    const items1 = [
      substr.map((poll_media) => {
          let obj = { style: tmp.pollAnswerOption };
          obj = { variant: "text-sm/medium", color: "text-default", lineClamp: 1 };
          const text = poll_media.poll_media.text;
          let str = "";
          if (null != text) {
            str = text;
          }
          obj.children = str;
          obj.children = outer1_10(message(outer1_3[8]).Text, obj);
          return outer1_10(outer1_7, obj, poll_media.answer_id);
        }),

    ];
    let tmp5 = diff > 0;
    if (tmp5) {
      obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.pollMoreOptions };
      const intl = message(1212).intl;
      const obj3 = { count: diff };
      obj.children = intl.format(message(1212).t["mv/nIa"], obj3);
      tmp5 = callback(message(4126).Text, obj);
    }
    items1[1] = tmp5;
    obj2.children = items1;
    items[1] = closure_11(closure_7, obj2);
    const obj4 = { style: tmp.metadataRow };
    let obj5 = { variant: "text-xs/medium", color: "text-muted" };
    const intl2 = message(1212).intl;
    const obj6 = {};
    const _Date = Date;
    const date = new Date(message.timestamp);
    obj6.createdAt = date;
    obj5 = message(8654);
    obj6.expiryLabel = obj5.getPollExpiryLabel(poll);
    obj5.children = intl2.format(message(1212).t.t0FTsH, obj6);
    obj4.children = callback(message(4126).Text, obj5);
    items[2] = callback(closure_7, obj4);
    obj.children = items;
    obj.children = closure_11(closure_7, obj);
    return callback(closure_8, obj);
  }
}
({ Image: closure_5, ScrollView: closure_6, View: closure_7, Pressable: closure_8, ActivityIndicator: closure_9 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let c12 = 120;
let c13 = null;
let c14 = null;
let obj = {};
obj = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.container = obj;
_createForOfIteratorHelperLoose = { marginHorizontal: -require("_createForOfIteratorHelperLoose").space.PX_16, overflow: "visible" };
obj.smallCardsScroller = _createForOfIteratorHelperLoose;
obj.smallCardsContainer = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj3 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.sectionHeader = obj3;
obj.loadingContainer = { height: 120, alignItems: "center", justifyContent: "center" };
let obj4 = { flexDirection: "column", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, overflow: "hidden", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, width: 160 };
obj.card = obj4;
let obj5 = { flex: 1, flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_4, overflow: "hidden", padding: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.cardBody = obj5;
obj.smallCardMedia = { height: 120, overflow: "hidden", flexShrink: 0 };
obj.mediaImage = { width: "100%", height: "100%", resizeMode: "cover" };
let obj6 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, marginTop: "auto" };
obj.metadataRow = obj6;
let obj7 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.reactionInfo = obj7;
let obj8 = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_4, borderLeftWidth: 4, borderLeftColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderTopLeftRadius: require("_createForOfIteratorHelperLoose").radii.xs, borderBottomLeftRadius: require("_createForOfIteratorHelperLoose").radii.xs, paddingLeft: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.embedContentArea = obj8;
let obj9 = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.embedAuthorRow = obj9;
let obj10 = { width: 20, height: 20, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
obj.embedAuthorIcon = obj10;
obj.embedProviderIcon = { width: 16, height: 16 };
let obj11 = { overflow: "hidden", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, aspectRatio: 1.7777777777777777 };
obj.embedMedia = obj11;
let obj12 = { flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_4, flex: 1 };
obj.pollAnswers = obj12;
let obj2 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.pollAnswerOption = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
let obj13 = { paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_8, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST };
obj.pollMoreOptions = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
let closure_15 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_16 = importAllResult.memo((message) => {
  if (null != message.message.poll) {
    let obj = {};
    const merged = Object.assign(message);
    let tmp6 = callback(PollAnnouncementCard, obj);
  } else if (null != message.message.embedSource) {
    obj = {};
    const merged1 = Object.assign(message);
    tmp6 = callback(EmbedAnnouncementCard, obj);
  } else {
    obj = {};
    const merged2 = Object.assign(message);
    tmp6 = callback(MessageAnnouncementCard, obj);
  }
  return tmp6;
});
let obj14 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
let result = require("jsxProd").fileFinishedImporting("modules/game_profile/native/components/GameProfileAnnouncements.tsx");

export default function GameProfileAnnouncements(gameId) {
  let channelId;
  let messages;
  gameId = gameId.gameId;
  const invite = gameId.invite;
  const closeModal = gameId.closeModal;
  const trackAction = gameId.trackAction;
  const scrollOffsetRef = gameId.scrollOffsetRef;
  const tmp = callback3();
  const analyticsLocations = invite(trackAction[12])().analyticsLocations;
  const tmp2 = invite(trackAction[13])(gameId, 10);
  ({ messages, channelId } = tmp2);
  const guildId = tmp2.guildId;
  const items = [trackAction, closeModal, invite, guildId, channelId, analyticsLocations, gameId, scrollOffsetRef];
  const items1 = [trackAction, closeModal, invite, guildId, channelId, analyticsLocations, gameId, scrollOffsetRef];
  const callback = scrollOffsetRef.useCallback(() => {
    let id;
    if (null != invite) {
      const guild = invite.guild;
      if (null != guild) {
        id = guild.id;
      }
    }
    if (null == id) {
      id = guildId;
    }
    let tmp3 = null != id;
    if (tmp3) {
      tmp3 = null != channelId;
    }
    if (tmp3) {
      trackAction(gameId(trackAction[14]).GameProfileTrackActionActions.Announcements);
      let obj = invite(trackAction[15]);
      obj = { gameId, channelId, initialScrollOffset: scrollOffsetRef.current };
      const result = obj.setGameProfilePendingReturn(obj);
      closeModal();
      obj = { invite, guildId: id, channelId, analyticsLocationStack: analyticsLocations };
      invite(trackAction[16])(obj);
    }
  }, items);
  let closure_8 = scrollOffsetRef.useCallback((messageId) => {
    let id;
    if (null != invite) {
      const guild = invite.guild;
      if (null != guild) {
        id = guild.id;
      }
    }
    if (null == id) {
      id = guildId;
    }
    let tmp3 = null != id;
    if (tmp3) {
      tmp3 = null != channelId;
    }
    if (tmp3) {
      trackAction(gameId(trackAction[14]).GameProfileTrackActionActions.AnnouncementsItem);
      let obj = invite(trackAction[15]);
      obj = { gameId, channelId, initialScrollOffset: scrollOffsetRef.current };
      const result = obj.setGameProfilePendingReturn(obj);
      closeModal();
      obj = { invite, guildId: id, channelId, messageId, analyticsLocationStack: analyticsLocations };
      invite(trackAction[16])(obj);
    }
  }, items1);
  if (tmp2.loading) {
    let obj = { style: tmp.container };
    obj = { style: tmp.sectionHeader };
    obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary" };
    const intl = gameId(trackAction[4]).intl;
    obj.children = intl.string(gameId(trackAction[4]).t.B0BV3Y);
    obj.children = callback(gameId(trackAction[8]).Text, obj);
    const items2 = [callback(guildId, obj), ];
    const obj1 = { style: tmp.loadingContainer, children: callback(closure_9, {}) };
    items2[1] = callback(guildId, obj1);
    obj.children = items2;
    let tmp5 = callback2(guildId, obj);
  } else {
    tmp5 = null;
    if (null != channelId) {
      tmp5 = null;
      if (0 !== messages.length) {
        const obj2 = { style: tmp.container };
        const obj3 = { style: tmp.sectionHeader };
        const obj4 = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary" };
        const intl2 = gameId(trackAction[4]).intl;
        obj4.children = intl2.string(gameId(trackAction[4]).t.B0BV3Y);
        const items3 = [callback(gameId(trackAction[8]).Text, obj4), ];
        const obj5 = { text: null, variant: "tertiary", size: "sm", icon: null, iconPosition: "end" };
        const intl3 = gameId(trackAction[4]).intl;
        obj5.text = intl3.string(gameId(trackAction[4]).t.budhsM);
        const obj6 = { size: "sm" };
        obj5.icon = callback(gameId(trackAction[18]).ChevronSmallRightIcon, obj6);
        obj5.onPress = callback;
        items3[1] = callback(gameId(trackAction[17]).Button, obj5);
        obj3.children = items3;
        const items4 = [callback2(guildId, obj3), ];
        const obj7 = { horizontal: true, showsHorizontalScrollIndicator: false, style: null, contentContainerStyle: null, decelerationRate: "fast", snapToInterval: 172, snapToStart: false, snapToEnd: false };
        ({ smallCardsScroller: obj10.style, smallCardsContainer: obj10.contentContainerStyle } = tmp);
        obj7.children = messages.map((id) => outer1_10(outer1_16, { message: id, onPress: closure_8, guildId, channelId }, id.id));
        items4[1] = callback(channelId, obj7);
        obj2.children = items4;
        tmp5 = callback2(guildId, obj2);
      }
    }
  }
  return tmp5;
};
