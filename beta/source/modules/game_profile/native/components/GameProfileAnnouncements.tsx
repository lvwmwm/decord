// Module ID: 8212
// Function ID: 8213
// Name: GameProfileAnnouncements
// Dependencies: [19, 17, 8167, 21, 1364, 5301, 1115, 4836, 576, 8195, 6364, 8194, 8213, 8214, 4832, 8217, 4512, 8219, 6583, 8221, 8139, 8133, 8224, 8180, 2]
// Exports: default

// Module 8212 (GameProfileAnnouncements)
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import DateUtils from "DateUtils" /* 4512 */;
import Text_Text from "Text/Text" /* 4832 */;
import CustomMarkupAll from "CustomMarkup" /* 5301 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6364 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8133 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import GameProfileConstants from "GameProfileConstants" /* 8167 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 8195 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 8213 */;
import AnnouncementMessageUtils from "AnnouncementMessageUtils" /* 8214 */;
import ImageWithPlaceholder from "ImageWithPlaceholder" /* 8217 */;
import navigateToGameAnnouncementDefault from "navigateToGameAnnouncement" /* 8224 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const GameProfileSkeletonDefault = GameProfileSkeleton;
let _require;

let c10;
let c9;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj12;
let obj13;
let obj15;
let obj16;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let size2;
function EmbedAnnouncementCard(message) {
  let channelId;
  let format;
  let guildId;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let numberFormat;
  let obj11;
  let obj19;
  let obj6;
  let parser;
  message = message.message;
  const onPress = message.onPress;
  ({ guildId, channelId } = message);
  const tmp = closure_14();
  if (null == parser) {
    const obj = CustomMarkupAll;
    parser = obj.getParser();
  }
  const obj2 = { guildId, channelId, mentionPillOffsetY: num };
  const media = message.media;
  let proxyUrl;
  if (media != null) {
    proxyUrl = media.proxyUrl;
  }
  if (proxyUrl == null) {
    const media2 = message.media;
    let url;
    if (media2 != null) {
      url = media2.url;
    }
    proxyUrl = url;
  }
  let posterUrl = null;
  if (null != proxyUrl) {
    const obj3 = AnnouncementMessageUtils;
    posterUrl = obj3.getPosterUrl(proxyUrl, 160, 120);
  }
  if (posterUrl == null) {
    posterUrl = proxyUrl;
  }
  const embedSource = message.embedSource;
  if (null == embedSource) {
    return null;
  } else {
    let tmp10;
    if (null != embedSource.color) {
      tmp10 = { borderLeftColor: embedSource.color };
      const obj4 = { borderLeftColor: embedSource.color };
    }
    const obj5 = {
      style: tmp.card,
      onPress() {
          return onPress(message.id);
        },
      accessibilityRole: "button",
      accessibilityLabel: message.title,
      children: authStore(metroRequire, obj6)
    };
    let tmp11Result = null != embedSource.url;
    obj6 = { style: tmp.cardBody, children: items };
    const tmp12 = metroImportDefault;
    if (tmp11Result) {
      const obj7 = { variant: "text-xs/medium", color: "text-link", lineClamp: 1, children: embedSource.url };
      tmp11Result = tmp11(Text_Text.Text, obj7);
    }
    items = [tmp11Result, ];
    const obj8 = { style: items1, children: items3 };
    items1 = [tmp.embedContentArea, tmp10];
    let tmp13Result = null != embedSource.authorName;
    if (tmp13Result) {
      let tmp11Result6 = null != embedSource.authorIconUrl;
      const obj9 = { style: tmp.embedAuthorRow, children: items2 };
      if (tmp11Result6) {
        const obj10 = { source: obj11, style: tmp.embedAuthorIcon };
        obj11 = { uri: embedSource.authorIconUrl };
        tmp11Result6 = tmp11(hasOwnProperty, obj10);
      }
      items2 = [tmp11Result6, ];
      const obj12 = { variant: "text-xs/semibold", color: "text-strong", lineClamp: 1, children: embedSource.authorName };
      items2[1] = React4(Text_Text.Text, obj12);
      tmp13Result = tmp13(tmp14, obj9);
    }
    items3 = [tmp13Result, , , , ];
    let tmp11Result7 = null != message.media && null != posterUrl;
    if (tmp11Result7) {
      const obj13 = { style: tmp.embedMedia, children: React4(ImageWithPlaceholder.ImageWithPlaceholder, obj14) };
      obj14 = { uri: posterUrl, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
      tmp11Result7 = tmp11(tmp14, obj13);
    }
    items3[1] = tmp11Result7;
    let tmp11Result8 = null != message.title;
    if (tmp11Result8) {
      const obj15 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: parser(message.title, true, obj2) };
      const Text = Text_Text.Text;
      tmp11Result8 = tmp11(Text, obj15);
    }
    items3[2] = tmp11Result8;
    let tmp11Result9 = message.body.length > 0;
    if (tmp11Result9) {
      const obj16 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: parser(message.body, true, obj2) };
      const Text2 = Text_Text.Text;
      tmp11Result9 = tmp11(Text2, obj16);
    }
    items3[3] = tmp11Result9;
    let tmp11Result10 = null != embedSource.providerIconUrl;
    const obj17 = { style: tmp.metadataRow, children: items4 };
    if (tmp11Result10) {
      const obj18 = { source: obj19, style: tmp.embedProviderIcon };
      obj19 = { uri: embedSource.providerIconUrl };
      tmp11Result10 = tmp11(hasOwnProperty, obj18);
    }
    items4 = [tmp11Result10, , ];
    let str2 = "";
    const Text3 = Text_Text.Text;
    if (null != embedSource.providerName) {
      const _HermesInternal = HermesInternal;
      str2 = "" + embedSource.providerName + " \u00B7 ";
    }
    const obj20 = { variant: "text-xs/medium", color: "text-muted", children: items5 };
    items5 = [str2, ];
    const _Date = Date;
    const self = this;
    const self2 = this;
    const dateFormat = DateUtils.dateFormat;
    DateUtils;
    const date = new Date(message.timestamp);
    items5[1] = dateFormat(date, "LL");
    items4[1] = authStore(Text3, obj20);
    let tmp13Result2 = message.reactionCount > 0;
    if (tmp13Result2) {
      const obj21 = { style: tmp.reactionInfo, children: items6 };
      const obj22 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      const ReactionIcon = tmp34(8219).ReactionIcon;
      items6 = [React4(ReactionIcon, obj22), ];
      let tmp44 = null != obj14;
      const Text4 = tmp34(4832).Text;
      const reactionCount = message.reactionCount;
      if (tmp44) {
        tmp44 = obj14.locale === tmp34(1115).intl.currentLocale;
      }
      if (!tmp44) {
        const _Intl = Intl;
        const self3 = this;
        const self4 = this;
        const obj23 = { locale: intl3.intl.currentLocale, format: numberFormat };
        numberFormat = new Intl.NumberFormat(tmp34(1115).intl.currentLocale);
        obj14 = obj23;
      }
      const obj24 = { variant: "text-xs/medium", color: "text-muted", children: format.format(reactionCount) };
      format = obj14.format;
      items6[1] = React4(Text4, obj24);
      tmp13Result2 = tmp13(tmp14, obj21);
    }
    items4[2] = tmp13Result2;
    items3[4] = authStore(metroRequire, obj17);
    items[1] = authStore(metroRequire, obj8);
    return React4(tmp12, obj5);
  }
}
function MessageAnnouncementCard(message) {
  let channelId;
  let date;
  let dateFormat;
  let format;
  let guildId;
  let items;
  let items1;
  let items2;
  let items3;
  let numberFormat;
  let obj6;
  let parser;
  message = message.message;
  const onPress = message.onPress;
  ({ guildId, channelId } = message);
  const tmp = closure_14();
  if (null == parser) {
    const obj = CustomMarkupAll;
    parser = obj.getParser();
  }
  const obj2 = { guildId, channelId, mentionPillOffsetY: num };
  const media = message.media;
  let proxyUrl;
  if (media != null) {
    proxyUrl = media.proxyUrl;
  }
  if (proxyUrl == null) {
    const media2 = message.media;
    let url;
    if (media2 != null) {
      url = media2.url;
    }
    proxyUrl = url;
  }
  let posterUrl = null;
  if (null != proxyUrl) {
    const obj3 = AnnouncementMessageUtils;
    posterUrl = obj3.getPosterUrl(proxyUrl, 160, 120);
  }
  if (posterUrl == null) {
    posterUrl = proxyUrl;
  }
  let tmp12 = null != message.media;
  const obj4 = {
    style: tmp.card,
    onPress() {
      return onPress(message.id);
    },
    accessibilityRole: "button",
    accessibilityLabel: message.title,
    children: items
  };
  const tmp11 = metroImportDefault;
  if (tmp12) {
    tmp12 = null != posterUrl;
  }
  if (tmp12) {
    const obj5 = { style: tmp.smallCardMedia, children: React4(ImageWithPlaceholder.ImageWithPlaceholder, obj6) };
    obj6 = { uri: posterUrl, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
    tmp12 = React4(metroRequire, obj5);
  }
  items = [tmp12, ];
  let tmp18 = null != message.title;
  const obj7 = { style: tmp.cardBody, children: items1 };
  if (tmp18) {
    const obj8 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: parser(message.title, true, obj2) };
    const Text = Text_Text.Text;
    tmp18 = React4(Text, obj8);
  }
  items1 = [tmp18, , ];
  let tmp22 = message.body.length > 0;
  if (tmp22) {
    const obj9 = { variant: "text-sm/medium", color: "text-default", lineClamp: 3, children: parser(message.body, true, obj2) };
    const Text2 = Text_Text.Text;
    tmp22 = React4(Text2, obj9);
  }
  items1[1] = tmp22;
  const obj10 = { style: tmp.metadataRow, children: items2 };
  const obj11 = { variant: "text-xs/medium", color: "text-muted", children: dateFormat(date, "LL") };
  const Text3 = Text_Text.Text;
  dateFormat = DateUtils.dateFormat;
  DateUtils;
  date = new Date(message.timestamp);
  items2 = [React4(Text3, obj11), ];
  let tmp10Result = message.reactionCount > 0;
  if (tmp10Result) {
    const obj12 = { style: tmp.reactionInfo, children: items3 };
    const obj13 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
    const ReactionIcon = tmp27(8219).ReactionIcon;
    items3 = [React4(ReactionIcon, obj13), ];
    let tmp34 = null != obj14;
    const Text4 = tmp27(4832).Text;
    const reactionCount = message.reactionCount;
    if (tmp34) {
      tmp34 = obj14.locale === tmp27(1115).intl.currentLocale;
    }
    if (!tmp34) {
      obj14 = { locale: intl3.intl.currentLocale, format: numberFormat };
      const _Intl = Intl;
      const self = this;
      const self2 = this;
      numberFormat = new Intl.NumberFormat(tmp27(1115).intl.currentLocale);
    }
    const obj15 = { variant: "text-xs/medium", color: "text-muted", children: format.format(reactionCount) };
    format = obj14.format;
    items3[1] = React4(Text4, obj15);
    tmp10Result = tmp10(tmp17, obj12);
  }
  items2[1] = tmp10Result;
  items1[2] = authStore(metroRequire, obj10);
  items[1] = authStore(metroRequire, obj7);
  return authStore(tmp11, obj4);
}
function PollAnnouncementCard(message) {
  let Text2;
  let date;
  let format;
  let intl;
  let items;
  let items1;
  let obj3;
  let obj6;
  let obj8;
  let obj9;
  let t0FTsH;
  let tmp11Result;
  message = message.message;
  const onPress = message.onPress;
  const tmp = closure_14();
  const pollAnswerOption = tmp;
  const poll = message.poll;
  if (null == poll) {
    return null;
  } else {
    const answers = poll.answers;
    const substr = answers.slice(0, 3);
    const diff = poll.answers.length - substr.length;
    const obj2 = {
      style: tmp.card,
      onPress() {
          return onPress(message.id);
        },
      accessibilityRole: "button",
      accessibilityLabel: poll.question.text,
      children: closure_10(closure_6, obj3)
    };
    obj3 = { style: tmp.cardBody, children: items };
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: poll.question.text };
    items = [closure_9(message(4832).Text, obj4), , ];
    const obj5 = { style: tmp.pollAnswers, children: items1 };
    items1 = [
      substr.map((poll_media) => {
          let Text;
          let str;
          const obj = { style: pollAnswerOption.pollAnswerOption, children: React4(Text, { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: str }) };
          str = poll_media.poll_media.text;
          Text = Text_Text.Text;
          const tmp2 = metroRequire;
          if (str == null) {
            str = "";
          }
          return React4(tmp2, obj, poll_media.answer_id);
        }),

    ];
    let tmp7Result = diff > 0;
    const tmp8 = closure_7;
    if (tmp7Result) {
      let obj = { variant: "text-xs/medium", color: "text-muted", style: tmp.pollMoreOptions, children: intl.format(message(1115).t["mv/nIa"], obj6) };
      let Text = tmp11(4832).Text;
      intl = tmp11(1115).intl;
      obj6 = { count: diff };
      tmp7Result = tmp7(Text, obj);
    }
    items1[1] = tmp7Result;
    items[1] = closure_10(closure_6, obj5);
    const obj7 = { style: tmp.metadataRow, children: closure_9(Text2, obj8) };
    obj8 = { variant: "text-xs/medium", color: "text-muted", children: format(t0FTsH, obj9) };
    Text2 = tmp11(4832).Text;
    const intl2 = tmp11(1115).intl;
    format = intl2.format;
    const _Date = Date;
    const self = this;
    const self2 = this;
    obj9 = { createdAt: date, expiryLabel: tmp11Result.getPollExpiryLabel(poll) };
    t0FTsH = tmp11(1115).t.t0FTsH;
    date = new Date(message.timestamp);
    tmp11Result = message(8214);
    items[2] = closure_9(closure_6, obj7);
    return closure_9(tmp8, obj2);
  }
}
({ Image: hasOwnProperty, View: metroRequire, Pressable: metroImportDefault } = react_native);
const MAX_VISIBLE_ANNOUNCEMENTS = GameProfileConstants.MAX_VISIBLE_ANNOUNCEMENTS;
({ jsx: c9, jsxs: c10 } = Fragment);
let num;
if (PlatformUtils.isAndroid()) {
  num = 5;
}
let closure_12 = null;
let obj14 = null;
let createStyles = createStyles_mod;
let obj = { smallCardsScroller: obj2, skeletonCardsScroller: obj3, smallCardsContainer: obj4, skeletonCardsContainer: obj5, card: obj6, cardBody: obj7, smallCardMedia: { height: 120, overflow: "hidden", flexShrink: 0 }, mediaImage: { width: "100%", height: "100%", resizeMode: "cover" }, metadataRow: obj8, reactionInfo: obj9, embedContentArea: obj10, embedAuthorRow: obj11, embedAuthorIcon: size, embedProviderIcon: { width: 16, height: 16 }, embedMedia: obj12, pollAnswers: obj13, pollAnswerOption: obj14, pollMoreOptions: obj15, skeletonCard: { height: 282 }, skeletonCardLarge: { height: 264 }, skeletonAnimationRoot: { flex: 1 }, skeletonCardImage: { width: "100%" }, skeletonCardBody: obj16, skeletonCardContent: size1, skeletonCardMetadata: size2 };
obj2 = { marginHorizontal: -nativeDefault.space.PX_16, overflow: "visible" };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: -nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj5 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj6 = { flexDirection: "column", borderRadius: nativeDefault.radii.lg, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, width: 160 };
obj7 = { flex: 1, flexDirection: "column", gap: nativeDefault.space.PX_4, overflow: "hidden", padding: nativeDefault.space.PX_12 };
obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: "auto" };
obj9 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj10 = { flex: 1, gap: nativeDefault.space.PX_4, borderLeftWidth: 4, borderLeftColor: nativeDefault.colors.BORDER_SUBTLE, borderTopLeftRadius: nativeDefault.radii.xs, borderBottomLeftRadius: nativeDefault.radii.xs, paddingLeft: nativeDefault.space.PX_8 };
obj11 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
size = { width: 20, height: 20, borderRadius: nativeDefault.radii.round };
obj12 = { overflow: "hidden", borderRadius: nativeDefault.radii.sm, aspectRatio: 1.7777777777777777 };
obj13 = { flexDirection: "column", gap: nativeDefault.space.PX_4, flex: 1 };
obj14 = { paddingVertical: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj15 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj16 = { gap: nativeDefault.space.PX_8 };
size1 = { height: nativeDefault.space.PX_48, borderRadius: nativeDefault.radii.xs, width: "88%" };
size2 = { width: "60%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs, marginTop: "auto" };
let closure_14 = createStyles(obj);
let closure_15 = react.memo((arg0) => {
  let GameProfileSkeletonContainer;
  let index;
  let isWindowLarge;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj2;
  ({ index, isWindowLarge } = arg0);
  const tmp = closure_14();
  const items = [tmp.card, ];
  items[1] = isWindowLarge ? tmp.skeletonCardLarge : tmp.skeletonCard;
  const obj = { style: items, children: authStore(GameProfileSkeletonContainer, obj2) };
  obj2 = { animationDelayMs: index * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS, style: tmp.skeletonAnimationRoot, children: items2 };
  GameProfileSkeletonContainer = GameProfileSkeleton.GameProfileSkeletonContainer;
  const obj3 = { style: items1 };
  items1 = [, ];
  ({ smallCardMedia: arr2[0], skeletonCardImage: arr2[1] } = tmp);
  items2 = [React4(GameProfileSkeletonDefault, obj3), ];
  const obj4 = { style: items3, children: items4 };
  items3 = [, ];
  ({ cardBody: arr4[0], skeletonCardBody: arr4[1] } = tmp);
  items4 = [, ];
  const obj5 = { style: tmp.skeletonCardContent };
  items4[0] = React4(GameProfileSkeletonDefault, obj5);
  const obj6 = { style: tmp.skeletonCardMetadata };
  items4[1] = React4(GameProfileSkeletonDefault, obj6);
  items2[1] = authStore(metroRequire, obj4);
  return React4(metroRequire, obj);
});
let closure_16 = react.memo(() => {
  let isWindowLarge;
  let obj2;
  let tmp2;
  const tmp = closure_14();
  _require = useIsWindowLargeDefault();
  let obj = { showViewAllSkeleton: true, skeletonTitleWidth: 200, children: closure_9(tmp2, obj2) };
  const GameProfileSectionSkeleton = require("GameProfileSection").GameProfileSectionSkeleton;
  obj2 = {
    style: tmp.skeletonCardsScroller,
    contentContainerStyle: tmp.skeletonCardsContainer,
    children: Array.from({ length: 3 }, (arg0, index) => {
      const obj = { index, isWindowLarge };
      return React4(closure_15, obj, index);
    })
  };
  tmp2 = GameProfileSkeletonCardRowDefault;
  return closure_9(GameProfileSectionSkeleton, obj);
});
let closure_20 = react.memo((message) => {
  let tmp6;
  if (null != message.message.poll) {
    const obj2 = {};
    const merged = Object.assign(message);
    tmp6 = React4(PollAnnouncementCard, obj2);
  } else if (null != message.message.embedSource) {
    const obj3 = {};
    const merged1 = Object.assign(message);
    tmp6 = React4(EmbedAnnouncementCard, obj3);
  } else {
    const obj = {};
    const merged2 = Object.assign(message);
    tmp6 = React4(MessageAnnouncementCard, obj);
  }
  return tmp6;
});
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileAnnouncements.tsx");

export default function GameProfileAnnouncements(gameId) {
  let channelId;
  let hasFetched;
  let intl;
  let loading;
  let messages;
  let obj3;
  let tmp2Result2;
  let tmp6;
  gameId = gameId.gameId;
  const invite = gameId.invite;
  const closeModal = gameId.closeModal;
  const trackAction = gameId.trackAction;
  const scrollY = gameId.scrollY;
  channelId = undefined;
  let onPress;
  const hasDiscordWebsite = gameId.hasDiscordWebsite;
  const tmp = closure_14();
  let tmp3 = trackAction;
  const analyticsLocations = invite(trackAction[18])().analyticsLocations;
  const tmp4 = invite(trackAction[19])(gameId, onPress);
  ({ messages, channelId } = tmp4);
  const guildId = tmp4.guildId;
  const items = [trackAction, scrollY, closeModal, invite, guildId, channelId, analyticsLocations, gameId];
  ({ loading, hasFetched } = tmp4);
  const items1 = [trackAction, scrollY, closeModal, invite, guildId, channelId, analyticsLocations, gameId];
  const callback = scrollY.useCallback(() => {
    let id;
    if (invite != null) {
      const guild = tmp.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    if (id == null) {
      id = guildId;
    }
    const tmp3 = null != id && null != channelId;
    if (tmp3) {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.Announcements);
      const obj = { gameId, channelId, initialScrollOffset: scrollY.get() };
      const setGameProfilePendingReturn = GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
      const result = setGameProfilePendingReturn(obj);
      closeModal();
      const obj2 = { invite, guildId: id, channelId, analyticsLocationStack: analyticsLocations };
      navigateToGameAnnouncementDefault(obj2);
    }
  }, items);
  onPress = scrollY.useCallback((messageId) => {
    let id;
    if (invite != null) {
      const guild = tmp.guild;
      if (guild != null) {
        id = guild.id;
      }
    }
    if (id == null) {
      id = guildId;
    }
    const tmp3 = null != id && null != channelId;
    if (tmp3) {
      trackAction(GameProfileAnalyticUtils.GameProfileTrackActionActions.AnnouncementsItem);
      const obj = { gameId, channelId, initialScrollOffset: scrollY.get() };
      const setGameProfilePendingReturn = GameProfileActionCreatorsDefault.setGameProfilePendingReturn;
      const result = setGameProfilePendingReturn(obj);
      closeModal();
      const obj2 = { invite, guildId: id, channelId, messageId, analyticsLocationStack: analyticsLocations };
      navigateToGameAnnouncementDefault(obj2);
    }
  }, items1);
  if (!hasFetched) {
    if (hasDiscordWebsite) {
      tmp6 = closure_9(closure_16, {});
    }
    return tmp6;
  }
  tmp6 = null;
  if (null != channelId) {
    tmp6 = null;
    if (0 !== messages.length) {
      let obj = { title: intl.string(gameId(tmp3[6]).t.B0BV3Y), onPressViewAll: callback, children: closure_9(tmp2Result2, obj3) };
      const tmp2Result = invite(tmp3[11]);
      intl = gameId(tmp3[6]).intl;
      ({ smallCardsScroller: obj2.style, smallCardsContainer: obj2.contentContainerStyle } = tmp);
      obj3 = {
        showsHorizontalScrollIndicator: false,
        style: null,
        contentContainerStyle: null,
        decelerationRate: "fast",
        snapToInterval: 172,
        snapToStart: false,
        snapToEnd: false,
        children: messages.map((message) => {
              const obj = { message, onPress, guildId, channelId };
              return React4(closure_20, obj, message.id);
            })
      };
      tmp2Result2 = invite(tmp3[23]);
      tmp6 = closure_9(tmp2Result, obj);
    }
  }
};
