// Module ID: 14141
// Function ID: 14142
// Name: GameProfileAnnouncements
// Dependencies: [19, 17, 8749, 21, 1112, 5012, 575, 14136, 7278, 14135, 14142, 14143, 5603, 5699, 14144, 14146, 4834, 9662, 6348, 14163, 8712, 8707, 14166, 14115, 2]
// Exports: default

// Module 14141 (GameProfileAnnouncements)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1112 */;
import DateUtils from "DateUtils" /* 4834 */;
import Text_Text from "Text/Text" /* 5603 */;
import FastImageDefault from "FastImage" /* 5699 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 7278 */;
import GameProfileActionCreatorsDefault from "GameProfileActionCreators" /* 8707 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8712 */;
import GameProfileConstants from "GameProfileConstants" /* 8749 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 14136 */;
import GameProfileSkeletonCardRowDefault from "GameProfileSkeletonCardRow" /* 14142 */;
import AnnouncementMessageUtils from "AnnouncementMessageUtils" /* 14143 */;
import ImageWithPlaceholder from "ImageWithPlaceholder" /* 14144 */;
import AnnouncementMarkupDefault from "AnnouncementMarkup" /* 14146 */;
import navigateToGameAnnouncementDefault from "navigateToGameAnnouncement" /* 14166 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5012 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
const GameProfileSkeletonDefault = GameProfileSkeleton;
let _require, dependencyMap;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
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
  let closure_129_1;
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
  let obj12;
  let obj16;
  let obj19;
  let obj4;
  let obj9;
  message = message.message;
  ({ onPress: closure_129_1, guildId, channelId } = message);
  const tmp = closure_10();
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
    const obj = AnnouncementMessageUtils;
    posterUrl = obj.getPosterUrl(proxyUrl, 160, 120);
  }
  if (posterUrl == null) {
    posterUrl = proxyUrl;
  }
  const embedSource = message.embedSource;
  if (null == embedSource) {
    return null;
  } else {
    let tmp7;
    if (null != embedSource.color) {
      tmp7 = { borderLeftColor: embedSource.color };
      const obj2 = { borderLeftColor: embedSource.color };
    }
    const obj3 = {
      style: tmp.card,
      onPress() {
          return closure_1_1(message.id);
        },
      accessibilityRole: "button",
      accessibilityLabel: message.title,
      children: metroImportAll(React3, obj4)
    };
    let tmp8Result = null != embedSource.url;
    obj4 = { style: tmp.cardBody, children: items };
    const tmp9 = hasOwnProperty;
    if (tmp8Result) {
      const obj5 = { variant: "body-xs/medium", color: "text-link", lineClamp: 1, children: embedSource.url };
      tmp8Result = tmp8(Text_Text.Text, obj5);
    }
    items = [tmp8Result, ];
    const obj6 = { style: items1, children: items3 };
    items1 = [tmp.embedContentArea, tmp7];
    let tmp10Result = null != embedSource.authorName;
    if (tmp10Result) {
      let tmp8Result6 = null != embedSource.authorIconUrl;
      const obj7 = { style: tmp.embedAuthorRow, children: items2 };
      if (tmp8Result6) {
        const obj8 = { source: obj9, style: tmp.embedAuthorIcon };
        obj9 = { uri: embedSource.authorIconUrl };
        tmp8Result6 = tmp8(FastImageDefault, obj8);
      }
      items2 = [tmp8Result6, ];
      const obj10 = { variant: "body-xs/semibold", color: "text-strong", lineClamp: 1, children: embedSource.authorName };
      items2[1] = metroImportDefault(Text_Text.Text, obj10);
      tmp10Result = tmp10(tmp11, obj7);
    }
    items3 = [tmp10Result, , , , ];
    let tmp8Result7 = null != message.media && null != posterUrl;
    if (tmp8Result7) {
      const obj11 = { style: tmp.embedMedia, children: metroImportDefault(ImageWithPlaceholder.ImageWithPlaceholder, obj12) };
      obj12 = { uri: posterUrl, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
      tmp8Result7 = tmp8(tmp11, obj11);
    }
    items3[1] = tmp8Result7;
    let tmp8Result8 = null != message.title;
    if (tmp8Result8) {
      const obj13 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: metroImportDefault(AnnouncementMarkupDefault, obj14) };
      const Text = Text_Text.Text;
      obj14 = { content: message.title, guildId, channelId };
      tmp8Result8 = tmp8(Text, obj13);
    }
    items3[2] = tmp8Result8;
    let tmp8Result9 = message.body.length > 0;
    if (tmp8Result9) {
      const obj15 = { variant: "body-sm/medium", color: "text-default", lineClamp: 3, children: metroImportDefault(AnnouncementMarkupDefault, obj16) };
      const Text2 = Text_Text.Text;
      obj16 = { content: message.body, guildId, channelId };
      tmp8Result9 = tmp8(Text2, obj15);
    }
    items3[3] = tmp8Result9;
    let tmp8Result10 = null != embedSource.providerIconUrl;
    const obj17 = { style: tmp.metadataRow, children: items4 };
    if (tmp8Result10) {
      const obj18 = { source: obj19, style: tmp.embedProviderIcon };
      obj19 = { uri: embedSource.providerIconUrl };
      tmp8Result10 = tmp8(FastImageDefault, obj18);
    }
    items4 = [tmp8Result10, , ];
    let str2 = "";
    const Text3 = Text_Text.Text;
    if (null != embedSource.providerName) {
      const _HermesInternal = HermesInternal;
      str2 = "" + embedSource.providerName + " \u00B7 ";
    }
    const obj20 = { variant: "body-xs/medium", color: "text-muted", children: items5 };
    items5 = [str2, ];
    const _Date = Date;
    const self = this;
    const self2 = this;
    const dateFormat = DateUtils.dateFormat;
    DateUtils;
    const date = new Date(message.timestamp);
    items5[1] = dateFormat(date, "LL");
    items4[1] = metroImportAll(Text3, obj20);
    let tmp10Result2 = message.reactionCount > 0;
    if (tmp10Result2) {
      const obj21 = { style: tmp.reactionInfo, children: items6 };
      const obj22 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      const ReactionIcon = tmp35(9662).ReactionIcon;
      items6 = [metroImportDefault(ReactionIcon, obj22), ];
      let tmp45 = null != obj14;
      const Text4 = tmp35(5603).Text;
      const reactionCount = message.reactionCount;
      if (tmp45) {
        tmp45 = obj14.locale === tmp35(1112).intl.currentLocale;
      }
      if (!tmp45) {
        const _Intl = Intl;
        const self3 = this;
        const self4 = this;
        const obj23 = { locale: intl3.intl.currentLocale, format: numberFormat };
        numberFormat = new Intl.NumberFormat(tmp35(1112).intl.currentLocale);
        obj14 = obj23;
      }
      const obj24 = { variant: "body-xs/medium", color: "text-muted", children: format.format(reactionCount) };
      format = obj14.format;
      items6[1] = metroImportDefault(Text4, obj24);
      tmp10Result2 = tmp10(tmp11, obj21);
    }
    items4[2] = tmp10Result2;
    items3[4] = metroImportAll(React3, obj17);
    items[1] = metroImportAll(React3, obj6);
    return metroImportDefault(tmp9, obj3);
  }
}
function MessageAnnouncementCard(message) {
  let channelId;
  let closure_129_1;
  let date;
  let dateFormat;
  let format;
  let guildId;
  let items;
  let items1;
  let items2;
  let items3;
  let numberFormat;
  let obj4;
  let obj7;
  let obj9;
  message = message.message;
  ({ onPress: closure_129_1, guildId, channelId } = message);
  const tmp = closure_10();
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
    const obj = AnnouncementMessageUtils;
    posterUrl = obj.getPosterUrl(proxyUrl, 160, 120);
  }
  if (posterUrl == null) {
    posterUrl = proxyUrl;
  }
  let tmp9 = null != message.media;
  const obj2 = {
    style: tmp.card,
    onPress() {
      return closure_1_1(message.id);
    },
    accessibilityRole: "button",
    accessibilityLabel: message.title,
    children: items
  };
  const tmp8 = hasOwnProperty;
  if (tmp9) {
    tmp9 = null != posterUrl;
  }
  if (tmp9) {
    const obj3 = { style: tmp.smallCardMedia, children: metroImportDefault(ImageWithPlaceholder.ImageWithPlaceholder, obj4) };
    obj4 = { uri: posterUrl, placeholder: message.media.placeholder, placeholderVersion: message.media.placeholderVersion, style: tmp.mediaImage };
    tmp9 = metroImportDefault(React3, obj3);
  }
  items = [tmp9, ];
  let tmp15 = null != message.title;
  const obj5 = { style: tmp.cardBody, children: items1 };
  if (tmp15) {
    const obj6 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", lineClamp: 2, children: metroImportDefault(AnnouncementMarkupDefault, obj7) };
    const Text = Text_Text.Text;
    obj7 = { content: message.title, guildId, channelId };
    tmp15 = metroImportDefault(Text, obj6);
  }
  items1 = [tmp15, , ];
  let tmp20 = message.body.length > 0;
  if (tmp20) {
    const obj8 = { variant: "body-sm/medium", color: "text-default", lineClamp: 3, children: metroImportDefault(AnnouncementMarkupDefault, obj9) };
    const Text2 = Text_Text.Text;
    obj9 = { content: message.body, guildId, channelId };
    tmp20 = metroImportDefault(Text2, obj8);
  }
  items1[1] = tmp20;
  const obj10 = { style: tmp.metadataRow, children: items2 };
  const obj11 = { variant: "body-xs/medium", color: "text-muted", children: dateFormat(date, "LL") };
  const Text3 = Text_Text.Text;
  dateFormat = DateUtils.dateFormat;
  DateUtils;
  date = new Date(message.timestamp);
  items2 = [metroImportDefault(Text3, obj11), ];
  let tmp7Result = message.reactionCount > 0;
  if (tmp7Result) {
    const obj12 = { style: tmp.reactionInfo, children: items3 };
    const obj13 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
    const ReactionIcon = tmp26(9662).ReactionIcon;
    items3 = [metroImportDefault(ReactionIcon, obj13), ];
    let tmp33 = null != obj14;
    const Text4 = tmp26(5603).Text;
    const reactionCount = message.reactionCount;
    if (tmp33) {
      tmp33 = obj14.locale === tmp26(1112).intl.currentLocale;
    }
    if (!tmp33) {
      obj14 = { locale: intl3.intl.currentLocale, format: numberFormat };
      const _Intl = Intl;
      const self = this;
      const self2 = this;
      numberFormat = new Intl.NumberFormat(tmp26(1112).intl.currentLocale);
    }
    const obj15 = { variant: "body-xs/medium", color: "text-muted", children: format.format(reactionCount) };
    format = obj14.format;
    items3[1] = metroImportDefault(Text4, obj15);
    tmp7Result = tmp7(tmp14, obj12);
  }
  items2[1] = tmp7Result;
  items1[2] = metroImportAll(React3, obj10);
  items[1] = metroImportAll(React3, obj5);
  return metroImportAll(tmp8, obj2);
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
  let pollAnswerOption;
  let t0FTsH;
  let tmp11Result;
  message = message.message;
  const onPress = message.onPress;
  const tmp = closure_10();
  dependencyMap = tmp;
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
      children: closure_8(closure_4, obj3)
    };
    obj3 = { style: tmp.cardBody, children: items };
    const obj4 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: poll.question.text };
    items = [closure_7(message(5603).Text, obj4), , ];
    const obj5 = { style: tmp.pollAnswers, children: items1 };
    items1 = [
      substr.map((poll_media) => {
          let Text;
          let str;
          const obj = { style: pollAnswerOption.pollAnswerOption, children: metroImportDefault(Text, { variant: "body-sm/medium", color: "text-default", lineClamp: 1, children: str }) };
          str = poll_media.poll_media.text;
          Text = Text_Text.Text;
          const tmp2 = React3;
          if (str == null) {
            str = "";
          }
          return metroImportDefault(tmp2, obj, poll_media.answer_id);
        }),

    ];
    let tmp7Result = diff > 0;
    const tmp8 = closure_5;
    if (tmp7Result) {
      let obj = { variant: "body-xs/medium", color: "text-muted", style: tmp.pollMoreOptions, children: intl.format(message(1112).t["mv/nIa"], obj6) };
      let Text = tmp11(5603).Text;
      intl = tmp11(1112).intl;
      obj6 = { count: diff };
      tmp7Result = tmp7(Text, obj);
    }
    items1[1] = tmp7Result;
    items[1] = closure_8(closure_4, obj5);
    const obj7 = { style: tmp.metadataRow, children: closure_7(Text2, obj8) };
    obj8 = { variant: "body-xs/medium", color: "text-muted", children: format(t0FTsH, obj9) };
    Text2 = tmp11(5603).Text;
    const intl2 = tmp11(1112).intl;
    format = intl2.format;
    const _Date = Date;
    const self = this;
    const self2 = this;
    obj9 = { createdAt: date, expiryLabel: tmp11Result.getPollExpiryLabel(poll) };
    t0FTsH = tmp11(1112).t.t0FTsH;
    date = new Date(message.timestamp);
    tmp11Result = message(14143);
    items[2] = closure_7(closure_4, obj7);
    return closure_7(tmp8, obj2);
  }
}
({ View: closure_4, Pressable: hasOwnProperty } = react_native);
const MAX_VISIBLE_ANNOUNCEMENTS = GameProfileConstants.MAX_VISIBLE_ANNOUNCEMENTS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
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
let closure_10 = createStyles(obj);
let closure_11 = react.memo(function GameProfileAnnouncementCardSkeleton(arg0) {
  let GameProfileSkeletonContainer;
  let index;
  let isWindowLarge;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj2;
  ({ index, isWindowLarge } = arg0);
  const tmp = closure_10();
  const items = [tmp.card, ];
  items[1] = isWindowLarge ? tmp.skeletonCardLarge : tmp.skeletonCard;
  const obj = { style: items, children: metroImportAll(GameProfileSkeletonContainer, obj2) };
  obj2 = { animationDelayMs: index * GameProfileSkeleton.SKELETON_CARD_ANIMATION_DELAY_MS, style: tmp.skeletonAnimationRoot, children: items2 };
  GameProfileSkeletonContainer = GameProfileSkeleton.GameProfileSkeletonContainer;
  const obj3 = { style: items1 };
  items1 = [, ];
  ({ smallCardMedia: arr2[0], skeletonCardImage: arr2[1] } = tmp);
  items2 = [metroImportDefault(GameProfileSkeletonDefault, obj3), ];
  const obj4 = { style: items3, children: items4 };
  items3 = [, ];
  ({ cardBody: arr4[0], skeletonCardBody: arr4[1] } = tmp);
  items4 = [, ];
  const obj5 = { style: tmp.skeletonCardContent };
  items4[0] = metroImportDefault(GameProfileSkeletonDefault, obj5);
  const obj6 = { style: tmp.skeletonCardMetadata };
  items4[1] = metroImportDefault(GameProfileSkeletonDefault, obj6);
  items2[1] = metroImportAll(React3, obj4);
  return metroImportDefault(React3, obj);
});
let closure_12 = react.memo(function GameProfileAnnouncementsSkeleton() {
  let isWindowLarge;
  let obj2;
  let tmp2;
  const tmp = closure_10();
  _require = useIsWindowLargeDefault();
  let obj = { showViewAllSkeleton: true, skeletonTitleWidth: 200, children: closure_7(tmp2, obj2) };
  const GameProfileSectionSkeleton = require("GameProfileSection").GameProfileSectionSkeleton;
  obj2 = {
    style: tmp.skeletonCardsScroller,
    contentContainerStyle: tmp.skeletonCardsContainer,
    children: Array.from({ length: 3 }, (arg0, index) => {
      const obj = { index, isWindowLarge };
      return metroImportDefault(closure_11, obj, index);
    })
  };
  tmp2 = GameProfileSkeletonCardRowDefault;
  return closure_7(GameProfileSectionSkeleton, obj);
});
let closure_16 = react.memo(function AnnouncementCard(message) {
  let tmp6;
  if (null != message.message.poll) {
    const obj2 = {};
    const merged = Object.assign(message);
    tmp6 = metroImportDefault(PollAnnouncementCard, obj2);
  } else if (null != message.message.embedSource) {
    const obj3 = {};
    const merged1 = Object.assign(message);
    tmp6 = metroImportDefault(EmbedAnnouncementCard, obj3);
  } else {
    const obj = {};
    const merged2 = Object.assign(message);
    tmp6 = metroImportDefault(MessageAnnouncementCard, obj);
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
  const hasDiscordWebsite = gameId.hasDiscordWebsite;
  const tmp = closure_10();
  let tmp3 = closeModal;
  const analyticsLocations = invite(closeModal[18])().analyticsLocations;
  const tmp4 = invite(closeModal[19])(gameId, channelId);
  ({ messages, channelId } = tmp4);
  const guildId = tmp4.guildId;
  const items = [trackAction, scrollY, closeModal, invite, guildId, channelId, analyticsLocations, gameId];
  ({ loading, hasFetched } = tmp4);
  const items1 = [trackAction, scrollY, closeModal, invite, guildId, channelId, analyticsLocations, gameId];
  const callback = trackAction.useCallback(() => {
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
  const onPress = trackAction.useCallback((messageId) => {
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
      tmp6 = guildId(closure_12, {});
    }
    return tmp6;
  }
  tmp6 = null;
  if (null != channelId) {
    tmp6 = null;
    if (0 !== messages.length) {
      let obj = { title: intl.string(gameId(tmp3[4]).t.B0BV3Y), onPressViewAll: callback, children: guildId(tmp2Result2, obj3) };
      const tmp2Result = invite(tmp3[9]);
      intl = gameId(tmp3[4]).intl;
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
              return metroImportDefault(closure_16, obj, message.id);
            })
      };
      tmp2Result2 = invite(tmp3[23]);
      tmp6 = guildId(tmp2Result, obj);
    }
  }
};
