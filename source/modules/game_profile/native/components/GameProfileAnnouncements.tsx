// Module ID: 8646
// Function ID: 68438
// Name: getSharedMarkdownParser
// Dependencies: [31, 27, 6769, 33, 4126, 689, 8656, 11837, 11838, 624, 8593, 6768, 5481, 4124, 1212, 4539, 5511, 7873, 2, 31]
// Exports: default

// Module 8646 (getSharedMarkdownParser)
import importAllResult from "module_31";
import get ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import module_31 from "module_31";

function getSharedMarkdownParser() {
  if (null == parser) {
    const parser = importAll(dependencyMap[3]).getParser();
    const obj = importAll(dependencyMap[3]);
  }
  return parser;
}
function formatReactionCount(reactionCount) {
  let tmp = null != _null;
  if (tmp) {
    tmp = _null.locale === arg1(dependencyMap[4]).intl.currentLocale;
  }
  if (!tmp) {
    const obj = { locale: arg1(dependencyMap[4]).intl.currentLocale };
    const _Intl = Intl;
    const prototype = NumberFormat.prototype;
    const numberFormat = new NumberFormat(arg1(dependencyMap[4]).intl.currentLocale);
    obj.format = numberFormat;
    const _null = obj;
  }
  const format = _null.format;
  return format.format(reactionCount);
}
function EmbedAnnouncementCard(message) {
  let channelId;
  let guildId;
  message = message.message;
  const arg1 = message;
  ({ onPress: closure_1, guildId, channelId } = message);
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
    let obj = arg1(dependencyMap[7]);
    posterUrl = obj.getPosterUrl(proxyUrl, 160, closure_12);
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
      const obj2 = { children: embedSource.url };
      tmp15 = callback(arg1(dependencyMap[8]).Text, obj2);
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
      const obj7 = { 803799044: true, 1269170180: true, 711589892: true, children: embedSource.authorName };
      items2[1] = callback(arg1(dependencyMap[8]).Text, obj7);
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
      obj8.children = callback(arg1(dependencyMap[9]).ImageWithPlaceholder, obj9);
      tmp30 = callback(closure_7, obj8);
    }
    items3[1] = tmp30;
    let tmp36 = null != message.title;
    if (tmp36) {
      const obj10 = {};
      const obj11 = { guildId, channelId };
      obj10.children = tmp2(message.title, true, obj11);
      tmp36 = callback(arg1(dependencyMap[8]).Text, obj10);
    }
    items3[2] = tmp36;
    let tmp40 = message.body.length > 0;
    if (tmp40) {
      const obj12 = { 803799044: -527220480, 1269170180: null, 711589892: null };
      const obj13 = { guildId, channelId };
      obj12.children = tmp2(message.body, true, obj13);
      tmp40 = callback(arg1(dependencyMap[8]).Text, obj12);
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
    const obj17 = { cachedAt: "center", edpbxy: "center" };
    let str3 = "";
    if (null != embedSource.providerName) {
      const _HermesInternal = HermesInternal;
      str3 = "" + embedSource.providerName + " \u00B7 ";
    }
    const items5 = [str3, ];
    let obj20 = arg1(dependencyMap[10]);
    const _Date = Date;
    const date = new Date(message.timestamp);
    items5[1] = obj20.dateFormat(date, "LL");
    obj17.children = items5;
    items4[1] = callback2(arg1(dependencyMap[8]).Text, obj17);
    let tmp60 = message.reactionCount > 0;
    if (tmp60) {
      const obj18 = { style: tmp.reactionInfo };
      const obj19 = { size: "xs", color: importDefault(dependencyMap[6]).colors.TEXT_MUTED };
      const items6 = [callback(arg1(dependencyMap[11]).ReactionIcon, obj19), ];
      obj20 = { cachedAt: "center", edpbxy: "center", children: formatReactionCount(message.reactionCount) };
      items6[1] = callback(arg1(dependencyMap[8]).Text, obj20);
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
  message = message.message;
  const arg1 = message;
  ({ onPress: closure_1, guildId, channelId } = message);
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
    let obj = arg1(dependencyMap[7]);
    posterUrl = obj.getPosterUrl(proxyUrl, 160, closure_12);
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
    obj.children = callback(arg1(dependencyMap[9]).ImageWithPlaceholder, obj1);
    tmp12 = callback(closure_7, obj);
  }
  const items = [tmp12, ];
  const obj2 = { style: tmp.cardBody };
  let tmp20 = null != message.title;
  if (tmp20) {
    const obj3 = {};
    const obj4 = { guildId, channelId };
    obj3.children = tmp2(message.title, true, obj4);
    tmp20 = callback(arg1(dependencyMap[8]).Text, obj3);
  }
  const items1 = [tmp20, , ];
  let tmp24 = message.body.length > 0;
  if (tmp24) {
    const obj5 = { 803799044: -527220480, 1269170180: null, 711589892: null };
    const obj6 = { guildId, channelId };
    obj5.children = tmp2(message.body, true, obj6);
    tmp24 = callback(arg1(dependencyMap[8]).Text, obj5);
  }
  items1[1] = tmp24;
  const obj7 = { style: tmp.metadataRow };
  const obj8 = { cachedAt: "center", edpbxy: "center" };
  let obj11 = arg1(dependencyMap[10]);
  obj8.children = obj11.dateFormat(new Date(message.timestamp), "LL");
  const items2 = [callback(arg1(dependencyMap[8]).Text, obj8), ];
  let tmp31 = message.reactionCount > 0;
  if (tmp31) {
    const obj9 = { style: tmp.reactionInfo };
    const obj10 = { size: "xs", color: importDefault(dependencyMap[6]).colors.TEXT_MUTED };
    const items3 = [callback(arg1(dependencyMap[11]).ReactionIcon, obj10), ];
    obj11 = { cachedAt: "center", edpbxy: "center", children: formatReactionCount(message.reactionCount) };
    items3[1] = callback(arg1(dependencyMap[8]).Text, obj11);
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
  const arg1 = message;
  const importDefault = message.onPress;
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
    const obj1 = { children: poll.question.text };
    const items = [callback(arg1(dependencyMap[8]).Text, obj1), , ];
    const obj2 = { style: tmp.pollAnswers };
    const items1 = [
      substr.map((poll_media) => {
          let obj = { style: tmp.pollAnswerOption };
          obj = {};
          const text = poll_media.poll_media.text;
          let str = "";
          if (null != text) {
            str = text;
          }
          obj.children = str;
          obj.children = closure_10(message(closure_3[8]).Text, obj);
          return closure_10(closure_7, obj, poll_media.answer_id);
        }),

    ];
    let tmp5 = diff > 0;
    if (tmp5) {
      obj = { cachedAt: "center", edpbxy: "center", style: tmp.pollMoreOptions };
      const intl = arg1(dependencyMap[4]).intl;
      const obj3 = { count: diff };
      obj.children = intl.format(arg1(dependencyMap[4]).t.mv/nIa, obj3);
      tmp5 = callback(arg1(dependencyMap[8]).Text, obj);
    }
    items1[1] = tmp5;
    obj2.children = items1;
    items[1] = closure_11(closure_7, obj2);
    const obj4 = { style: tmp.metadataRow };
    let obj5 = { cachedAt: "center", edpbxy: "center" };
    const intl2 = arg1(dependencyMap[4]).intl;
    const obj6 = {};
    const _Date = Date;
    const date = new Date(message.timestamp);
    obj6.createdAt = date;
    obj5 = arg1(dependencyMap[7]);
    obj6.expiryLabel = obj5.getPollExpiryLabel(poll);
    obj5.children = intl2.format(arg1(dependencyMap[4]).t.t0FTsH, obj6);
    obj4.children = callback(arg1(dependencyMap[8]).Text, obj5);
    items[2] = callback(closure_7, obj4);
    obj.children = items;
    obj.children = closure_11(closure_7, obj);
    return callback(closure_8, obj);
  }
}
({ Image: closure_5, ScrollView: closure_6, View: closure_7, Pressable: closure_8, ActivityIndicator: closure_9 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = _isNativeReflectConstruct);
let closure_12 = 120;
let closure_13 = null;
let closure_14 = null;
let obj = {};
obj = { gap: require("CollectiblesShopCardInternalV2").space.PX_8 };
obj.container = obj;
_createForOfIteratorHelperLoose = { marginHorizontal: -require("CollectiblesShopCardInternalV2").space.PX_16, overflow: "visible" };
obj.smallCardsScroller = _createForOfIteratorHelperLoose;
obj.smallCardsContainer = { flexDirection: "row", gap: require("CollectiblesShopCardInternalV2").space.PX_12, paddingHorizontal: require("CollectiblesShopCardInternalV2").space.PX_16 };
const obj3 = { "Null": "<string:3435973836>", "Null": "<string:1903247380>", "Null": "r", paddingHorizontal: require("CollectiblesShopCardInternalV2").space.PX_8 };
obj.sectionHeader = obj3;
obj.loadingContainer = {};
const obj2 = { flexDirection: "row", gap: require("CollectiblesShopCardInternalV2").space.PX_12, paddingHorizontal: require("CollectiblesShopCardInternalV2").space.PX_16 };
obj.card = { borderRadius: require("CollectiblesShopCardInternalV2").radii.lg, backgroundColor: require("CollectiblesShopCardInternalV2").colors.BACKGROUND_BASE_LOW, borderColor: require("CollectiblesShopCardInternalV2").colors.BORDER_SUBTLE };
const obj5 = { importantForAccessibility: -26815615859885486000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, accessibilityElementsHidden: 1324486990474795200000000000000000000000000000000, horizontal: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002005368856259376, alwaysBounceHorizontal: 83988768696647710000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, gap: require("CollectiblesShopCardInternalV2").space.PX_4, padding: require("CollectiblesShopCardInternalV2").space.PX_12 };
obj.cardBody = obj5;
obj.smallCardMedia = { -1806288029: true, 1652819537: true, 508665942: true };
obj.mediaImage = {};
const obj6 = { getChangelog: "_desired", useIsNewGamesCoachmarkEnabled: "hash", TRENDING_CONTENT: "container", Environments: "isArray", gap: require("CollectiblesShopCardInternalV2").space.PX_8 };
obj.metadataRow = obj6;
const obj7 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", gap: require("CollectiblesShopCardInternalV2").space.PX_4 };
obj.reactionInfo = obj7;
const obj4 = { borderRadius: require("CollectiblesShopCardInternalV2").radii.lg, backgroundColor: require("CollectiblesShopCardInternalV2").colors.BACKGROUND_BASE_LOW, borderColor: require("CollectiblesShopCardInternalV2").colors.BORDER_SUBTLE };
obj.embedContentArea = { gap: require("CollectiblesShopCardInternalV2").space.PX_4, borderLeftColor: require("CollectiblesShopCardInternalV2").colors.BORDER_SUBTLE, borderTopLeftRadius: require("CollectiblesShopCardInternalV2").radii.xs, borderBottomLeftRadius: require("CollectiblesShopCardInternalV2").radii.xs, paddingLeft: require("CollectiblesShopCardInternalV2").space.PX_8 };
const obj9 = { <string:3814666730>: null, <string:1280564396>: "\u{1F43F}\uFE0F", gap: require("CollectiblesShopCardInternalV2").space.PX_4 };
obj.embedAuthorRow = obj9;
const obj8 = { gap: require("CollectiblesShopCardInternalV2").space.PX_4, borderLeftColor: require("CollectiblesShopCardInternalV2").colors.BORDER_SUBTLE, borderTopLeftRadius: require("CollectiblesShopCardInternalV2").radii.xs, borderBottomLeftRadius: require("CollectiblesShopCardInternalV2").radii.xs, paddingLeft: require("CollectiblesShopCardInternalV2").space.PX_8 };
obj.embedAuthorIcon = { borderRadius: require("CollectiblesShopCardInternalV2").radii.round };
obj.embedProviderIcon = { "Null": null, "Null": null };
const obj11 = { <string:3169068119>: 49450240, <string:4269621713>: 49450240, <string:3952795264>: 54358528, borderRadius: require("CollectiblesShopCardInternalV2").radii.sm };
obj.embedMedia = obj11;
const obj10 = { borderRadius: require("CollectiblesShopCardInternalV2").radii.round };
obj.pollAnswers = { gap: require("CollectiblesShopCardInternalV2").space.PX_4 };
const obj12 = { gap: require("CollectiblesShopCardInternalV2").space.PX_4 };
obj.pollAnswerOption = { paddingVertical: require("CollectiblesShopCardInternalV2").space.PX_8, paddingHorizontal: require("CollectiblesShopCardInternalV2").space.PX_12, borderRadius: require("CollectiblesShopCardInternalV2").radii.sm, backgroundColor: require("CollectiblesShopCardInternalV2").colors.BACKGROUND_BASE_LOWEST };
const obj13 = { paddingVertical: require("CollectiblesShopCardInternalV2").space.PX_8, paddingHorizontal: require("CollectiblesShopCardInternalV2").space.PX_12, borderRadius: require("CollectiblesShopCardInternalV2").radii.sm, backgroundColor: require("CollectiblesShopCardInternalV2").colors.BACKGROUND_BASE_LOWEST };
obj.pollMoreOptions = { paddingHorizontal: require("CollectiblesShopCardInternalV2").space.PX_12 };
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
const result = module_31.fileFinishedImporting("modules/game_profile/native/components/GameProfileAnnouncements.tsx");

export default function GameProfileAnnouncements(gameId) {
  let channelId;
  let messages;
  gameId = gameId.gameId;
  const arg1 = gameId;
  const invite = gameId.invite;
  const importDefault = invite;
  const closeModal = gameId.closeModal;
  const importAll = closeModal;
  const trackAction = gameId.trackAction;
  const dependencyMap = trackAction;
  const scrollOffsetRef = gameId.scrollOffsetRef;
  const tmp = callback3();
  const analyticsLocations = importDefault(dependencyMap[12])().analyticsLocations;
  const tmp2 = importDefault(dependencyMap[13])(gameId, 10);
  ({ messages, channelId } = tmp2);
  const guildId = tmp2.guildId;
  const items = [trackAction, closeModal, invite, guildId, channelId, analyticsLocations, gameId, scrollOffsetRef];
  const items1 = [trackAction, closeModal, invite, guildId, channelId, analyticsLocations, gameId, scrollOffsetRef];
  const callback = importAllResult.useCallback(() => {
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
  let closure_8 = importAllResult.useCallback((messageId) => {
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
    obj = { cachedAt: "polite", edpbxy: "column" };
    const intl = arg1(dependencyMap[4]).intl;
    obj.children = intl.string(arg1(dependencyMap[4]).t.B0BV3Y);
    obj.children = callback(arg1(dependencyMap[8]).Text, obj);
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
        const obj4 = { cachedAt: "polite", edpbxy: "column" };
        const intl2 = arg1(dependencyMap[4]).intl;
        obj4.children = intl2.string(arg1(dependencyMap[4]).t.B0BV3Y);
        const items3 = [callback(arg1(dependencyMap[8]).Text, obj4), ];
        const obj5 = {};
        const intl3 = arg1(dependencyMap[4]).intl;
        obj5.text = intl3.string(arg1(dependencyMap[4]).t.budhsM);
        const obj6 = { size: "sm" };
        obj5.icon = callback(arg1(dependencyMap[18]).ChevronSmallRightIcon, obj6);
        obj5.onPress = callback;
        items3[1] = callback(arg1(dependencyMap[17]).Button, obj5);
        obj3.children = items3;
        const items4 = [callback2(guildId, obj3), ];
        const obj7 = {};
        ({ smallCardsScroller: obj10.style, smallCardsContainer: obj10.contentContainerStyle } = tmp);
        obj7.children = messages.map((id) => callback(closure_16, { message: id, onPress: closure_8, guildId, channelId }, id.id));
        items4[1] = callback(channelId, obj7);
        obj2.children = items4;
        tmp5 = callback2(guildId, obj2);
      }
    }
  }
  return tmp5;
};
