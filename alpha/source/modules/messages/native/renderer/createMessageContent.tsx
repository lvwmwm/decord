// Module ID: 8380
// Function ID: 8381
// Name: createMessageContent
// Dependencies: [17, 5010, 2040, 5033, 6790, 8375, 8381, 4942, 8382, 7759, 4943, 7471, 1193, 502, 4858, 4921, 4880, 4951, 8384, 1384, 5014, 8370, 1072, 8385, 5647, 8386, 11, 8387, 6747, 1114, 8388, 8389, 8390, 6554, 1397, 8395, 8399, 4834, 8403, 6035, 8404, 8406, 6882, 8408, 8551, 8552, 8678, 7457, 8679, 8680, 8686, 8493, 8717, 6432, 1413, 1410, 8720, 1188, 10762, 10771, 10775, 10763, 10767, 8479, 15040, 1380, 15041, 4928, 7342, 15042, 15043, 4831, 12367, 15044, 8728, 7435, 575, 15045, 8411, 15047, 15048, 8543, 15051, 15052, 15069, 15090, 15092, 15106, 8415, 8416, 15107, 15110, 15111, 15112, 8417, 8413, 2]

// Module 8380 (createMessageContent)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import intl20 from "intl" /* 1114 */;
import useChannelName from "useChannelName" /* 5647 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6747 */;
import ReferencedMessageStore2 from "ReferencedMessageStore" /* 7759 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8370 */;
import GuildTagConstants from "GuildTagConstants" /* 8385 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8386 */;
import MessageCountUtils from "MessageCountUtils" /* 8387 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8388 */;
import transformMessageComponentsDefault from "transformMessageComponents" /* 8686 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 5010 */;
import ApplicationStore_mod from "ApplicationStore" /* 2040 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5033 */;
import EmojiStore from "EmojiStore" /* 6790 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 8375 */;
import InteractionStore from "InteractionStore" /* 8381 */;
import LurkingStore from "LurkingStore" /* 4942 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 8382 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4943 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7471 */;
import ThemeStore from "ThemeStore" /* 1193 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import GuildMemberStore from "GuildMemberStore" /* 4921 */;
import GuildStore from "GuildStore" /* 4880 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UploadStore from "UploadStore" /* 8384 */;
import UserStore from "UserStore" /* 1384 */;
import MessageConstants from "MessageConstants" /* 5014 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const ReferencedMessageStore = ReferencedMessageStore2;

let closure_24;
let closure_25;
let closure_26;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
function createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme) {
  let intl;
  let intl3;
  let intl4;
  let intl5;
  let obj5;
  let obj6;
  let stringResult;
  let tmp13Result2;
  const tmp = isInlineReplyPreview;
  if (!tmp) {
    if (message.hasFlag(constants3.HAS_THREAD)) {
      if (null != channel1) {
        const obj11 = useChannelName;
        const channelName = obj11.computeChannelName(channel1, UserStore, RelationshipStore);
        const backgroundColor = getEmbedThemeColorsDefault(forcedTheme).baseColors.backgroundColor;
        const getMostRecentMessage = ThreadMessageStore.getMostRecentMessage;
        const obj12 = SnowflakeUtilsDefault;
        const mostRecentMessage = getMostRecentMessage(obj12.castMessageIdAsChannelId(message.id));
        const getCount = ThreadMessageStore.getCount;
        const obj13 = SnowflakeUtilsDefault;
        const count = getCount(obj13.castMessageIdAsChannelId(message.id));
        const obj14 = MessageCountUtils;
        const result = obj14.formatMobileMessageCountLabel(count, channel1.id);
        const obj15 = MessageCountUtils;
        const result1 = obj15.formatMessageCountLabel(count, channel1.id);
        const tmp18 = importDefault;
        if (null != count) {
          let obj;
          if (count > 0) {
            let obj4;
            const tmp13Result = SpoilerChannelUtils;
            if (tmp13Result.isChannelSpoilerGated(channel1)) {
              const obj2 = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, messagePreviewString: intl5.string(intl20.t["5uaI/7"]), archived: false, backgroundColor };
              intl5 = tmp13(1114).intl;
              obj4 = obj2;
            } else {
              const threadMetadata = channel1.threadMetadata;
              let archived;
              if (threadMetadata != null) {
                archived = threadMetadata.archived;
              }
              if (archived) {
                const obj3 = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, messagePreviewString: intl4.string(intl20.t.ZTo4HS), archived: true, archivedIconUrl: tmp13Result2.getAssetUriForEmbed(tmp18(8389)), backgroundColor };
                intl4 = tmp13(1114).intl;
                obj4 = obj3;
                tmp13Result2 = renderer_EmbedUtils;
              } else {
                if (null != mostRecentMessage) {
                  if (mostRecentMessage.type !== constants.CHANNEL_NAME_CHANGE) {
                    if (mostRecentMessage.type !== tmp24.THREAD_STARTER_MESSAGE) {
                      if (!mostRecentMessage.blocked) {
                        if (!mostRecentMessage.ignored) {
                          obj4 = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, referencedMessage: obj5, backgroundColor };
                          obj5 = { state: ReferencedMessageRowState.LOADED, message: createMessageContent(obj6) };
                          obj6 = { message: mostRecentMessage, roleStyle, options, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true };
                        }
                      }
                      const blocked = mostRecentMessage.blocked;
                      const obj7 = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, messagePreviewString: stringResult, archived: false, backgroundColor };
                      const intl2 = tmp13(1114).intl;
                      const string = intl2.string;
                      const t = tmp13(1114).t;
                      if (blocked) {
                        stringResult = string(t.XAkOo2);
                      } else {
                        stringResult = string(t["G7p6v/"]);
                      }
                      obj4 = obj7;
                    }
                  }
                }
                const obj8 = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, messagePreviewString: intl3.string(intl20.t.ZTo4HS), archived: false, backgroundColor };
                intl3 = tmp13(1114).intl;
                obj4 = obj8;
              }
            }
            obj = obj4;
          }
          return obj;
        }
        obj = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, messagePreviewString: intl.string(intl20.t.HYtNyE), archived: false, backgroundColor };
        intl = tmp13(1114).intl;
      }
    }
  }
}
function createMessageContent(message) {
  let AnimateStickers;
  let LEADERBOARD_LEADER_ROLE_NAME_PREFIX;
  let LEADERBOARD_WINNER_ROLE_NAME_PREFIX;
  let animateEmoji;
  let animatingStickerMessageId;
  let canShowImages;
  let colorString;
  let colorString2;
  let colorStrings;
  let colors;
  let constrainedWidth;
  let content;
  let forceHideSimpleEmbedContent;
  let forcedTheme;
  let gifAutoPlay;
  let guildId;
  let guildMemberAvatar;
  let guildMemberAvatarDecoration;
  let hasSpoilerEmbeds;
  let iconRoleId;
  let ignoreEmbedDescriptionCache;
  let ignoreMentioned;
  let inlineAttachmentMedia;
  let inlineEmbedMedia;
  let intl10;
  let intl11;
  let intl12;
  let intl3;
  let intl4;
  let isEditing;
  let isFirst;
  let isForumPostResult;
  let isInlineReplyPreview;
  let isSystemDM;
  let messageForward;
  let nick;
  let nick2;
  let num;
  let obj24;
  let obj6;
  let opTagBackgroundColor;
  let opTagText;
  let opTagTextColor;
  let options;
  let pushFeedbackType;
  let renderActivityInstanceEmbed;
  let renderActivityInviteEmbed;
  let renderAttachments;
  let renderCodedLinks;
  let renderCommunicationDisabled;
  let renderComponents;
  let renderContentOnly;
  let renderEmbeds;
  let renderExecutedCommands;
  let renderForumPostActions;
  let renderGiftCode;
  let renderPolls;
  let renderReactions;
  let renderReplies;
  let renderSharedClientTheme;
  let renderThreadEmbeds;
  let roleStyle;
  let shouldObscureSpoiler;
  let shouldShowMedia;
  let tag;
  let tagAccessibilityLabel;
  let tagBackgroundColor;
  let tagIconUrl;
  let tagText;
  let tagTextColor;
  let tagType;
  let tagVerified;
  let timestampHourCycle;
  let tmp15Result75;
  let tmp15Result78;
  let tmp15Result79;
  let tmp15Result80;
  let tmp170;
  let tmp171;
  let useAlternateEmbedColors;
  message = message.message;
  ({ messageForward, roleStyle, isFirst, isEditing, canShowImages, isSystemDM, isInlineReplyPreview } = message);
  if (isInlineReplyPreview === undefined) {
    isInlineReplyPreview = false;
  }
  ({ options, pushFeedbackType, renderContentOnly } = message);
  gifAutoPlay = undefined;
  shouldObscureSpoiler = undefined;
  AccessibilityStore = undefined;
  ApplicationStore = undefined;
  let guildId1;
  let enabledHarmTypesForMessage;
  let result1;
  let setting;
  let interaction;
  ({ ignoreMentioned, animateEmoji, gifAutoPlay } = options);
  ({ renderCommunicationDisabled, renderAttachments, renderPolls, forcedTheme, forceHideSimpleEmbedContent, shouldObscureSpoiler } = options);
  const shouldDisableInteractiveComponents = options.shouldDisableInteractiveComponents;
  const restrictedPreview = options.restrictedPreview;
  const showContentInventoryEntryFallbackEmbed = message.showContentInventoryEntryFallbackEmbed;
  ({ renderEmbeds, renderReactions, inlineEmbedMedia, inlineAttachmentMedia, constrainedWidth, animatingStickerMessageId, timestampHourCycle, renderCodedLinks, renderGiftCode, renderActivityInstanceEmbed, renderActivityInviteEmbed, renderComponents, renderThreadEmbeds, renderReplies, renderExecutedCommands, renderSharedClientTheme, renderForumPostActions, ignoreEmbedDescriptionCache, useAlternateEmbedColors } = options);
  if (animateEmoji) {
    const AnimateEmoji = message(shouldObscureSpoiler[37]).AnimateEmoji;
    animateEmoji = AnimateEmoji.getSetting();
  }
  if (forcedTheme == null) {
    forcedTheme = ThemeStore.theme;
  }
  const tmp5 = shouldObscureSpoiler;
  const tmp6 = gifAutoPlay(shouldObscureSpoiler[38])(forcedTheme, useAlternateEmbedColors);
  AccessibilityStore = tmp6;
  ApplicationStore = tmp7;
  let tmp9 = tmp7 && renderEmbeds && message.type !== constants.CUSTOM_GIFT;
  let tmp12 = tmp7 && inlineAttachmentMedia;
  let obj = ChannelStore;
  const channel = ChannelStore.getChannel(message.getChannelId());
  const getChannel = ChannelStore.getChannel;
  const tmp4Result = gifAutoPlay(tmp5[26]);
  const channel1 = getChannel(tmp4Result.castMessageIdAsChannelId(message.id));
  guildId1 = undefined;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  const tmp15 = message;
  const id = message.author.id;
  const obj4 = message(tmp5[39]);
  const hasEnhancedRoleColors = obj4.getHasEnhancedRoleColors(guildId1, id);
  if (messageForward == null) {
    const tmp15Result = tmp15(tmp5[40]);
    messageForward = tmp15Result.maybeCreateSingleForwardForMessage(message);
  }
  let message2 = message;
  if (null != messageForward) {
    message2 = messageForward.messageSnapshot.message;
  }
  let items = [];
  if (renderReactions) {
    const obj2 = { reactions: message.reactions, animateEmoji };
    items = tmp4(tmp5[41])(obj2);
  }
  let tmp18 = null;
  if (message.type === constants.THREAD_STARTER_MESSAGE) {
    const messageByReference = ReferencedMessageStore.getMessageByReference(message.messageReference);
    let message1 = null;
    if (messageByReference.state === ReferencedMessageState.LOADED) {
      message1 = messageByReference.message;
    }
    tmp18 = message1;
  }
  if (null != tmp18) {
    const obj5 = { message: tmp18, roleStyle, isFirst, isEditing, canShowImages, isSystemDM, isInlineReplyPreview, options: obj6 };
    const obj3 = { id: message.id };
    obj6 = { renderThreadEmbeds: false, renderReactions: false, shouldDisableInteractiveComponents: true };
    const merged = Object.assign(options);
    const merged1 = Object.assign(createMessageContent(obj5));
    return obj3;
  } else if (gifAutoPlay(tmp5[42])(message)) {
    let systemMessageContent;
    if (message.type === constants.THREAD_CREATED) {
      const obj7 = { threadEmbed: createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme) };
      const obj8 = { message, theme: forcedTheme, reactions: items, roleStyle };
      const tmp15Result65 = tmp15(tmp5[43]);
      const merged2 = Object.assign(tmp15Result65.createSystemMessageContent(obj8));
      systemMessageContent = obj7;
    } else {
      const obj9 = { message, theme: forcedTheme, reactions: items, roleStyle, isForumPost: isForumPostResult };
      isForumPostResult = undefined;
      const createSystemMessageContent = tmp15(tmp5[43]).createSystemMessageContent;
      tmp15(tmp5[43]);
      if (channel != null) {
        isForumPostResult = channel.isForumPost();
      }
      systemMessageContent = createSystemMessageContent(obj9);
    }
    return systemMessageContent;
  } else {
    let tmp23 = !isFirst;
    if (isFirst) {
      tmp23 = renderContentOnly;
    }
    const author = message.author;
    let timestamp = message.editedTimestamp;
    const isMessageNewerThanImprovedMarkdownEpoch = tmp15(tmp5[44]).isMessageNewerThanImprovedMarkdownEpoch;
    tmp15(tmp5[44]);
    if (timestamp == null) {
      timestamp = message.timestamp;
    }
    const result = isMessageNewerThanImprovedMarkdownEpoch(timestamp.valueOf());
    if (null != message2.content) {
      let parseMessageMarkupResult;
      let applicationIconSource;
      if ("" !== message2.content) {
        const parseMessageMarkup = tmp15(tmp5[45]).parseMessageMarkup;
        const tmp15Result68 = tmp15(tmp5[45]);
        if (!forceHideSimpleEmbedContent) {
          forceHideSimpleEmbedContent = tmp9 && (true === canShowImages && inlineEmbedMedia);
        }
        const tmp28 = null != channel1 && message.isFirstMessageInForumPost(channel1);
        parseMessageMarkupResult = parseMessageMarkup(message, message2, forceHideSimpleEmbedContent, isInlineReplyPreview, tmp28, result, result);
      }
      ({ content, hasSpoilerEmbeds } = parseMessageMarkupResult);
      let tmp37 = restrictedPreview;
      const hasBailedAst = parseMessageMarkupResult.hasBailedAst;
      if (restrictedPreview) {
        tmp37 = null != content;
      }
      let stringResult = content;
      if (tmp37) {
        stringResult = tmp4(tmp5[46])(content);
      }
      const tmp15Result69 = tmp15(tmp5[47]);
      enabledHarmTypesForMessage = tmp15Result69.getEnabledHarmTypesForMessage(message);
      const tmp15Result70 = tmp15(tmp5[48]);
      result1 = tmp15Result70.shouldAgeVerifyForExplicitMedia();
      const ViewImageDescriptions = tmp15(tmp5[37]).ViewImageDescriptions;
      setting = ViewImageDescriptions.getSetting();
      if (tmp9) {
        tmp9 = !hasBailedAst;
      }
      if (tmp9) {
        tmp9 = !restrictedPreview;
      }
      interaction = setting.getInteraction(message);
      let tmp4Result1Result;
      if (tmp9) {
        const obj10 = {
          embeds: message2.embeds,
          channelId: message.channel_id,
          gifAutoPlay,
          hasSpoilerEmbeds,
          ignoreEmbedDescriptionCache,
          shouldInlineEmbedMedia: true === canShowImages && inlineEmbedMedia,
          colors: tmp6,
          showListsAndHeaders: result,
          showMaskedLinks: result,
          themedBackgroundColor: tmp6.embedBackgroundColor,
          enabledContentHarmTypeFlags: enabledHarmTypesForMessage,
          shouldAgeVerify: result1,
          authorIsBot: message.author.bot,
          showContentInventoryEntryFallbackEmbed,
          transformComponents(arg0) {
                  const obj = { message, guildId: guildId1, interaction, shouldDisableInteractiveComponents, shouldShowMedia, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors };
                  return transformMessageComponentsDefault(obj, arg0);
                }
        };
        const tmp4Result8 = gifAutoPlay(tmp5[49]);
        if (hasSpoilerEmbeds) {
          hasSpoilerEmbeds = shouldObscureSpoiler;
        }
        tmp4Result1Result = tmp4Result8(obj10);
      }
      const obj11 = { message, isSystemDM, channel, colors: tmp6 };
      ({ tagText, tagAccessibilityLabel, tagVerified, tagTextColor, tagBackgroundColor, tagType, tagIconUrl, opTagText, opTagTextColor, opTagBackgroundColor } = gifAutoPlay(tmp5[51])(obj11));
      gifAutoPlay(tmp5[51])(obj11);
      const uploaderFileForMessageId = UploadStore.getUploaderFileForMessageId(message.id);
      let tmp51 = tmp4Result1Result;
      const obj12 = UploadStore;
      const tmp50 = message.state !== constants2.SEND_FAILED || message.isCommandType();
      if (!tmp50) {
        let items1 = tmp4Result1Result;
        if (tmp4Result1Result == null) {
          items1 = [];
        }
        const obj13 = { uploaderFile: uploaderFileForMessageId, useAttachmentUploadPreview: null != uploaderFileForMessageId, colors: tmp6 };
        items1.push(gifAutoPlay(tmp5[52])(obj13));
        tmp51 = items1;
      }
      const message4 = result1.getMessage(message.id);
      let tmp55 = tmp51;
      if (null != message4) {
        let items2 = tmp51;
        if (tmp51 == null) {
          items2 = [];
        }
        const errorMessage = message4.errorMessage;
        const push = items2.push;
        const obj14 = { errorMessage, colors: tmp6 };
        const tmp15Result71 = tmp15(tmp5[52]);
        push(tmp15Result71.createAutomodBlockedMessageEmbed(obj14));
        tmp55 = items2;
      }
      const tmp15Result72 = tmp15(tmp5[53]);
      const userAuthor = tmp15Result72.getUserAuthor(message.author, channel);
      ({ guildMemberAvatar, guildMemberAvatarDecoration, iconRoleId } = userAuthor);
      const ensureAvatarSource = tmp15(tmp5[54]).ensureAvatarSource;
      tmp15(tmp5[54]);
      if (message.isInteractionPlaceholder()) {
        if (null == message.author.avatar) {
          if (null == guildMemberAvatar) {
            let roleIcon;
            let tmp77;
            let tmp101;
            let items3;
            const application = message.application;
            let icon;
            if (application != null) {
              icon = application.icon;
            }
            if (null != icon) {
              const obj15 = { id: message.application.id, icon: message.application.icon, bot: message.application.bot };
              const tmp4Result9 = gifAutoPlay(tmp5[55]);
              applicationIconSource = tmp4Result9.getApplicationIconSource(obj15);
            }
            const ensureAvatarSourceResult = ensureAvatarSource(applicationIconSource);
            const getAvatarDecorationURL = tmp15(tmp5[55]).getAvatarDecorationURL;
            tmp15(tmp5[55]);
            if (null == guildMemberAvatarDecoration) {
              guildMemberAvatarDecoration = author.avatarDecoration;
            }
            const obj16 = { avatarDecoration: guildMemberAvatarDecoration, size: tmp15Result75.getDecorationSizeForAvatarSize(tmp15(tmp5[57]).AvatarSizes.NORMAL) };
            let member = null;
            tmp15Result75 = tmp15(tmp5[56]);
            const avatarDecorationURL = getAvatarDecorationURL(obj16);
            if (null != guildId1) {
              member = GuildMemberStore.getMember(guildId1, author.id);
            }
            let prop;
            const getActiveLeaderboardWinnerData = tmp15(tmp5[58]).getActiveLeaderboardWinnerData;
            tmp15(tmp5[58]);
            if (member != null) {
              prop = member.gamingLeaderboardData;
            }
            const activeLeaderboardWinnerData = getActiveLeaderboardWinnerData(prop);
            let tmp69;
            if (null != activeLeaderboardWinnerData) {
              if (null != activeLeaderboardWinnerData.winningStreak) {
                if (null != activeLeaderboardWinnerData.winningWeek) {
                  if (null != activeLeaderboardWinnerData.winningStat) {
                    tmp69 = activeLeaderboardWinnerData;
                  }
                }
              }
            }
            let prop1;
            const getActiveLeaderboardLeaderData = tmp15(tmp5[58]).getActiveLeaderboardLeaderData;
            tmp15(tmp5[58]);
            if (member != null) {
              prop1 = member.gamingLeaderboardData;
            }
            const activeLeaderboardLeaderData = getActiveLeaderboardLeaderData(prop1);
            if (null != tmp69) {
              let tmp4Result10;
              let num2 = tmp69.winningStreak;
              if (num2 == null) {
                num2 = 0;
              }
              if (num2 > 1) {
                tmp4Result10 = tmp4(tmp5[59]);
              } else {
                tmp4Result10 = tmp4(tmp5[60]);
              }
              const obj17 = { source: tmp4Result10, name: LEADERBOARD_WINNER_ROLE_NAME_PREFIX + tmp15Result78.encodeWinnerData(tmp69), size: 18, alt: tmp15Result79.getLeaderboardWinnerBadgeText(tmp69) };
              LEADERBOARD_WINNER_ROLE_NAME_PREFIX = tmp15(tmp5[61]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX;
              tmp15Result78 = tmp15(tmp5[61]);
              roleIcon = obj17;
              tmp15Result79 = tmp15(tmp5[61]);
            } else if (null != activeLeaderboardLeaderData) {
              const obj18 = { source: gifAutoPlay(tmp5[62]), name: LEADERBOARD_LEADER_ROLE_NAME_PREFIX + num, size: 18, alt: tmp15Result80.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData) };
              num = activeLeaderboardLeaderData.currentLeaderStat;
              LEADERBOARD_LEADER_ROLE_NAME_PREFIX = tmp15(tmp5[61]).LEADERBOARD_LEADER_ROLE_NAME_PREFIX;
              if (num == null) {
                num = 0;
              }
              roleIcon = obj18;
              tmp15Result80 = tmp15(tmp5[61]);
            } else if (null != iconRoleId) {
              if (null != guildId1) {
                const obj19 = { guildId: guildId1, roleId: iconRoleId, size: 18 };
                const tmp15Result81 = tmp15(tmp5[63]);
                roleIcon = tmp15Result81.getRoleIcon(obj19);
              }
            }
            if (message.hasFlag(constants3.SOURCE_MESSAGE_DELETED)) {
              const intl = tmp15(tmp5[29]).intl;
              stringResult = intl.string(tmp15(tmp5[29]).t.JOtgSw);
            }
            const tmp15Result82 = tmp15(tmp5[53]);
            const messageAuthor = tmp15Result82.getMessageAuthor(message);
            ({ nick, colorString, colorStrings } = messageAuthor);
            if (message.type === constants.INTERACTION_PREMIUM_UPSELL) {
              const intl2 = tmp15(tmp5[29]).intl;
              const obj20 = { appName: nick };
              stringResult = intl2.formatToPlainString(tmp15(tmp5[29]).t["u4A+xK"], obj20);
            }
            if (message.type === constants.REPLY) {
              if (renderReplies) {
                const messageByReference1 = ReferencedMessageStore.getMessageByReference(message.messageReference);
                const state = messageByReference1.state;
                if (ReferencedMessageState.LOADED === state) {
                  const message3 = messageByReference1.message;
                  const tmp15Result83 = tmp15(tmp5[40]);
                  const result2 = tmp15Result83.maybeCreateSingleForwardForMessage(message3);
                  const obj36 = RelationshipStore;
                  if (RelationshipStore.isBlockedForMessage(message3)) {
                    const obj21 = { state: ReferencedMessageRowState.SYSTEM, content: intl12.string(tmp15(tmp5[29]).t.XAkOo2) };
                    intl12 = tmp15(tmp5[29]).intl;
                    tmp77 = obj21;
                  } else if (obj36.isIgnoredForMessage(message3)) {
                    const obj22 = { state: ReferencedMessageRowState.SYSTEM, content: intl11.string(tmp15(tmp5[29]).t["G7p6v/"]) };
                    intl11 = tmp15(tmp5[29]).intl;
                    tmp77 = obj22;
                  } else {
                    const obj23 = { message: message3, messageForward: result2, roleStyle, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true, options: obj24 };
                    obj24 = { renderReplies: false };
                    const merged3 = Object.assign(options);
                    const tmp89 = createMessageContent(obj23);
                    if (null == tmp89) {
                      const obj25 = { state: ReferencedMessageRowState.SYSTEM, content: intl10.string(tmp15(tmp5[29]).t["1i+hMi"]) };
                      intl10 = tmp15(tmp5[29]).intl;
                      tmp77 = obj25;
                    } else {
                      let messageStickers;
                      let stringResult1;
                      if ("username" in tmp89) {
                        let colorString3;
                        const tmp15Result84 = tmp15(tmp5[53]);
                        const messageAuthor1 = tmp15Result84.getMessageAuthor(message3);
                        ({ nick: nick2, colorString: colorString2 } = messageAuthor1);
                        if (nick2 == null) {
                          nick2 = message3.author.username;
                        }
                        tmp89.username = nick2;
                        if (tmp23) {
                          colorString3 = tmp89.colorString;
                        } else {
                          colorString3 = shouldDisableInteractiveComponents(colorString2);
                          if (colorString3 == null) {
                            colorString3 = tmp89.colorString;
                          }
                        }
                        tmp89.colorString = colorString3;
                        if (gifAutoPlay(tmp5[64])(message, message3)) {
                          tmp89.username = `@${tmp89.username}`;
                        }
                      }
                      const _Array = Array;
                      const isArray = Array.isArray(tmp89.content) && 0 === tmp89.content.length;
                      if (isArray) {
                        tmp89.content = undefined;
                      }
                      let message5;
                      if (result2 != null) {
                        message5 = result2.messageSnapshot.message;
                      }
                      if (message5 == null) {
                        message5 = message3;
                      }
                      const content2 = tmp89.content;
                      if ("stickers" in message5) {
                        const tmp15Result85 = tmp15(tmp5[33]);
                        messageStickers = tmp15Result85.getMessageStickers(message5);
                      } else {
                        messageStickers = [];
                      }
                      if (messageStickers.length > 0) {
                        const intl9 = tmp15(tmp5[29]).intl;
                        stringResult1 = intl9.string(tmp15(tmp5[29]).t["7K5Lma"]);
                      } else {
                        if ("interaction" in message5) {
                          if (null != message5.interaction) {
                            if ("" === message5.content) {
                              const intl8 = tmp15(tmp5[29]).intl;
                              stringResult1 = intl8.string(tmp15(tmp5[29]).t["2v7kfl"]);
                            }
                          }
                        }
                        const tmp15Result86 = tmp15(tmp5[34]);
                        if (tmp15Result86.hasFlag(message5.flags, constants3.IS_VOICE_MESSAGE)) {
                          const intl7 = tmp15(tmp5[29]).intl;
                          stringResult1 = intl7.string(tmp15(tmp5[29]).t["6bhHrc"]);
                        } else if (message5.type === constants.POLL_RESULT) {
                          const tmp15Result87 = tmp15(tmp5[35]);
                          stringResult1 = tmp15Result87.getPollResultsReplyPreviewMobile(message5);
                        } else {
                          const tmp15Result88 = tmp15(tmp5[34]);
                          if (tmp15Result88.hasFlag(message5.flags, constants3.IS_COMPONENTS_V2)) {
                            const intl6 = tmp15(tmp5[29]).intl;
                            stringResult1 = intl6.string(tmp15(tmp5[29]).t.Xxm5i3);
                          } else {
                            let stringResult2;
                            if (message5.type === constants.GUILD_SPACE_MESSAGE) {
                              if ("guildSpaceData" in message5) {
                                if (null != channel) {
                                  const tmp15Result89 = tmp15(tmp5[36]);
                                  stringResult1 = tmp15Result89.stringifyGuildSpaceSystemMessage(message5, channel);
                                }
                              }
                            }
                            if ("" === message5.content) {
                              const intl5 = tmp15(tmp5[29]).intl;
                              stringResult2 = intl5.string(tmp15(tmp5[29]).t.JAKsM8);
                            } else {
                              stringResult2 = null;
                            }
                            stringResult1 = stringResult2;
                          }
                        }
                      }
                      if (message3.type === constants.POLL_RESULT) {
                        tmp89.content = stringResult1;
                      }
                      const obj26 = { state: ReferencedMessageRowState.LOADED, message: tmp89 };
                      tmp77 = obj26;
                      if (null != stringResult1) {
                        obj26.systemContent = stringResult1;
                        tmp77 = obj26;
                      }
                    }
                  }
                } else if (ReferencedMessageState.NOT_LOADED === state) {
                  const obj27 = { state: ReferencedMessageRowState.SYSTEM, content: intl4.string(tmp15(tmp5[29]).t["1i+hMi"]) };
                  intl4 = tmp15(tmp5[29]).intl;
                  tmp77 = obj27;
                } else if (ReferencedMessageState.DELETED === state) {
                  const obj28 = { state: ReferencedMessageRowState.SYSTEM, content: intl3.string(tmp15(tmp5[29]).t.mE3KJN) };
                  intl3 = tmp15(tmp5[29]).intl;
                  tmp77 = obj28;
                } else {
                  const tmp15Result90 = tmp15(tmp5[65]);
                  tmp15Result90.assertNever(messageByReference1);
                }
              }
            }
            if (renderThreadEmbeds) {
              tmp101 = createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme);
            }
            const tmp15Result91 = tmp15(tmp5[66]);
            const interactionStatus = tmp15Result91.createInteractionStatus(message, interaction);
            const useReducedMotion = AccessibilityStore.useReducedMotion;
            let parent_id;
            const tmp15Result92 = tmp15(tmp5[67]);
            const result3 = tmp15Result92.isMemberCommunicationDisabled(member);
            const alwaysShowLinkDecorations = AccessibilityStore.alwaysShowLinkDecorations;
            if (channel != null) {
              parent_id = channel.parent_id;
            }
            let channel2 = channel;
            if (null != parent_id) {
              let isThreadResult;
              if (channel != null) {
                isThreadResult = channel.isThread();
              }
              channel2 = channel;
              if (isThreadResult) {
                channel2 = obj.getChannel(channel.parent_id);
              }
            }
            const obj29 = { guildMember: member, channel: channel2, onlyChannelConnectionRoles: true };
            const tmp15Result93 = tmp15(tmp5[68]);
            const visibleConnectionsRole = tmp15Result93.getVisibleConnectionsRole(obj29);
            let tmp116 = tmp48;
            if (null != uploaderFileForMessageId) {
              tmp116 = 0 === message.attachments.length;
            }
            if (tmp116) {
              tmp116 = null != uploaderFileForMessageId;
            }
            if (tmp116) {
              const obj30 = { uploaderFile: uploaderFileForMessageId, isFailedMessage: message.state === constants2.SEND_FAILED, shouldInlineAttachmentMedia: tmp12 };
              items3 = tmp4(tmp5[69])(obj30);
            } else {
              items3 = [];
              if (renderAttachments) {
                const obj31 = { attachments: message2.attachments, uploadAttachments: obj12.getUploadAttachments(message.nonce), shouldInlineAttachmentMedia: tmp12, gifAutoPlay, viewImageDescriptions: setting, useReducedMotion, shouldObscureSpoiler, themedBackgroundColor: tmp6.embedBackgroundColor, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, colors: tmp6 };
                const tmp4Result11 = gifAutoPlay(tmp5[70]);
                items3 = tmp4Result11(obj31);
              }
            }
            if (tmp116) {
              let stringResult3;
              if (message.state !== constants2.SEND_FAILED) {
                const intl13 = tmp15(tmp5[29]).intl;
                stringResult3 = intl13.string(tmp15(tmp5[29]).t["yXY+5J"]);
              }
              if (tmp116) {
                let stringResult4;
                let tmp127;
                let result4;
                let tmp131;
                let tmp132;
                let tmp133;
                let tmp138;
                let tmp139;
                let id3;
                let tmp152;
                let joined;
                if (message.state !== constants2.SEND_FAILED) {
                  const intl14 = tmp15(tmp5[29]).intl;
                  stringResult4 = intl14.string(tmp15(tmp5[29]).t["yXY+5J"]);
                }
                let stringResult5 = stringResult;
                const id1 = AuthenticationStore.getId();
                if (message.isUnsupported) {
                  const intl15 = tmp15(tmp5[29]).intl;
                  stringResult5 = intl15.string(tmp15(tmp5[29]).t.sWi5EU);
                }
                const isPollResult = message.isPoll();
                let tmp124 = !isPollResult;
                if (isPollResult) {
                  tmp124 = !isInlineReplyPreview && renderPolls;
                }
                if (!tmp124) {
                  tmp124 = null != stringResult && "" !== stringResult;
                  const tmp126 = null != stringResult && "" !== stringResult;
                }
                if (!tmp124) {
                  const tmp15Result94 = tmp15(tmp5[35]);
                  stringResult5 = tmp15Result94.getPollReplyPreview(message);
                }
                if (renderPolls) {
                  const obj32 = { theme: forcedTheme, animateEmoji };
                  tmp127 = gifAutoPlay(tmp5[72])(message, undefined, obj32);
                }
                if (renderSharedClientTheme) {
                  const tmp15Result95 = tmp15(tmp5[73]);
                  result4 = tmp15Result95.formatSharedClientThemeData(message, ensureAvatarSourceResult, nick);
                }
                const shouldDisplayGuildTag = tmp15(tmp5[74]).shouldDisplayGuildTag;
                const id2 = author.id;
                tmp15(tmp5[74]);
                const tmp130 = guildId1;
                if (shouldDisplayGuildTag(id2, tmp130)) {
                  const tmp15Result97 = tmp15(tmp5[74]);
                  const userPrimaryGuild = tmp15Result97.getUserPrimaryGuild(author.primaryGuild);
                  let guildTagBadgeUrl;
                  ({ guildId, tag } = userPrimaryGuild);
                  if (null != userPrimaryGuild.guildId) {
                    const tmp15Result98 = tmp15(tmp5[74]);
                    guildTagBadgeUrl = tmp15Result98.getGuildTagBadgeUrl(userPrimaryGuild.guildId, userPrimaryGuild.badge, GuildTagBadgeSize.SIZE_12);
                  }
                  tmp131 = guildTagBadgeUrl;
                  tmp132 = tag;
                  tmp133 = guildId;
                }
                let linkedLobby;
                if (channel != null) {
                  linkedLobby = channel.linkedLobby;
                }
                if (null != linkedLobby) {
                  if (null != message.additionalName) {
                    if ("" !== message.additionalName) {
                      const additionalName = message.additionalName;
                      const application1 = ApplicationStore.getApplication(linkedLobby.application_id);
                      let icon1;
                      if (application1 != null) {
                        icon1 = application1.icon;
                      }
                      let applicationIconURL;
                      if (null != icon1) {
                        const obj33 = { id: null, icon: null, size: 16 };
                        ({ id: obj62.id, icon: obj62.icon } = application1);
                        const tmp4Result12 = gifAutoPlay(tmp5[55]);
                        applicationIconURL = tmp4Result12.getApplicationIconURL(obj33);
                      }
                      tmp138 = applicationIconURL;
                      tmp139 = additionalName;
                    }
                  }
                }
                let tmp145 = message2;
                const hasFlag = tmp15(tmp5[34]).hasFlag;
                tmp15(tmp5[34]);
                if (message2 == null) {
                  tmp145 = message;
                }
                let str10 = message.applicationId;
                const getApplication = ApplicationStore.getApplication;
                const hasFlagResult = hasFlag(tmp145.flags, constants3.IS_VOICE_MESSAGE);
                if (str10 == null) {
                  str10 = "";
                }
                const application2 = getApplication(str10);
                let hasFlagResult1 = null != application2;
                if (hasFlagResult1) {
                  const tmp15Result100 = tmp15(tmp5[34]);
                  hasFlagResult1 = tmp15Result100.hasFlag(message.flags, tmp75.SENT_BY_SOCIAL_LAYER_INTEGRATION);
                }
                if (hasFlagResult1) {
                  id3 = application2.id;
                }
                let hasFlagResult2;
                if (message2 != null) {
                  hasFlagResult2 = message2.hasFlag(tmp75.IS_GUILD_OFFICIAL);
                }
                const items4 = [];
                if (hasFlagResult2) {
                  const guild = GuildStore.getGuild(guildId1);
                  if (null != guild) {
                    const tmp15Result101 = tmp15(tmp5[75]);
                    if (tmp15Result101.isGuildOfficialMessagesEnabled(guild, "createMessageContent")) {
                      let officialMessageColor = guild.officialMessageColor;
                      if (officialMessageColor == null) {
                        officialMessageColor = closure_24;
                      }
                      const officialMessageStyle = tmp111.officialMessageStyle;
                      const tmp15Result102 = tmp15(tmp5[75]);
                      const result5 = tmp15Result102.showGuildOfficialMessageGradient(officialMessageStyle);
                      let tmp156;
                      if (result5) {
                        tmp156 = officialMessageColor | closure_26;
                      }
                      const tmp15Result103 = tmp15(tmp5[75]);
                      if (tmp15Result103.showGuildOfficialMessageTextColor(officialMessageStyle)) {
                        const internal = tmp4(tmp5[76]).internal;
                        const semanticColor = internal.resolveSemanticColor(forcedTheme, tmp4(tmp5[76]).colors.BACKGROUND_BASE_LOWER);
                        let num8 = 1;
                        if (AccessibilityStore.desaturateUserColors) {
                          num8 = tmp111.saturation;
                        }
                        let num9 = 0;
                        const getAccessibleGuildOfficialTextColor = tmp15(tmp5[75]).getAccessibleGuildOfficialTextColor;
                        const tmp15Result104 = tmp15(tmp5[75]);
                        if (result5) {
                          num9 = closure_25;
                        }
                        const accessibleGuildOfficialTextColor = getAccessibleGuildOfficialTextColor(officialMessageColor, semanticColor, num8, num9);
                        accessibleGuildOfficialTextColor.num();
                      }
                      const push2 = items4.push;
                      const intl16 = tmp15(tmp5[29]).intl;
                      push2(intl16.string(tmp15(tmp5[29]).t.GzDTxY));
                      tmp152 = tmp156;
                    }
                  }
                }
                let obj68 = message2;
                if (message2 == null) {
                  obj68 = message;
                }
                if (obj68.hasFlag(constants3.SUPPRESS_NOTIFICATIONS)) {
                  const push3 = items4.push;
                  const intl17 = tmp15(tmp5[29]).intl;
                  push3(intl17.string(tmp15(tmp5[29]).t.t0MA8g));
                }
                if (items4.length > 0) {
                  joined = items4.join(", ");
                }
                const obj34 = { id: null, channelId: null, guildId: tmp170, flags: tmp171.flags, type: message.type, nonce: null, state: null, reactions: null, referencedMessage: null, threadEmbed: null, forwardInfo: null, mentioned: null, edited: null, editedTimestamp: null, editedColor: null, textColor: null, officialMessageColor: null, linkColor: null, tagText: null, tagAccessibilityLabel: null, tagVerified: null, tagTextColor: null, tagBackgroundColor: null, tagType: null, tagIconUrl: null, opTagText: null, opTagTextColor: null, opTagBackgroundColor: null, stateAccessibilityLabel: null, constrainedWidth: null, gifAutoPlay: null, animateEmoji: null, username: null, avatarURL: null, avatarDecorationURL: null, authorId: null, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, shouldShowRoleOnName: null, showLinkDecorations: null, forceRevealSpoilers: null, colorString: null, roleIcon: null, connectionsRoleTag: null, timestamp: null, timestampTooltip: null, timestampColor: null, timestampAccessibilityLabel: null, content: null, isEditing: null, renderContentOnly: null, surveyIndication: null, ephemeralIndication: null, interactionStatus: null, executedCommand: null, components: null, feedbackColor: null, highlightColor: null, embeds: null, giftCodes: null, codedLinks: null, activityInstanceEmbed: null, activityRichPresenceInviteEmbed: null, useAttachmentGridLayout: null, useAttachmentUploadPreview: null, attachments: null, attachmentsOpacity: null, stickers: null, communicationDisabled: null, isFirstForumPostMessage: null, postActions: null, isCurrentUserMessageAuthor: null, usingGradientTheme: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, postPreviewEmbeds: null, obscureLearnMoreLabel: null, safetyPolicyNoticeEmbed: null, pollData: null, sharedClientTheme: null, safetySystemNotificationEmbed: null };
                ({ id: obj70.id, channel_id: obj70.channelId } = message);
                const tmp15Result105 = tmp15(tmp5[77]);
                const voiceChannelBadge = tmp15Result105.createVoiceChannelBadge(message.author.id, guildId1);
                tmp171 = message2;
                tmp170 = guildId1;
                if (message2 == null) {
                  tmp171 = message;
                }
                if (null != message.nonce) {
                  let nonce;
                  let textColor;
                  if (typeof message.nonce !== "string") {
                    const _String = String;
                    nonce = String(message.nonce);
                  }
                  obj34.nonce = nonce;
                  obj34.state = message.state;
                  obj34.reactions = items;
                  let tmp173;
                  if (!renderContentOnly) {
                    tmp173 = tmp77;
                  }
                  obj34.referencedMessage = tmp173;
                  obj34.threadEmbed = tmp101;
                  let forwardInfo;
                  if (null != messageForward) {
                    forwardInfo = messageForward.getForwardInfo();
                  }
                  obj34.forwardInfo = forwardInfo;
                  obj34.mentioned = !ignoreMentioned && message.mentioned;
                  let str14 = "";
                  if (message.isEdited()) {
                    str14 = "";
                    if (!renderContentOnly) {
                      const intl18 = tmp15(tmp5[29]).intl;
                      str14 = intl18.string(tmp15(tmp5[29]).t.C8sXIM);
                    }
                  }
                  obj34.edited = str14;
                  let dateFormatResult;
                  if (message.isEdited()) {
                    if (!renderContentOnly) {
                      if (null != message.editedTimestamp) {
                        const tmp15Result106 = tmp15(tmp5[71]);
                        dateFormatResult = tmp15Result106.dateFormat(message.editedTimestamp, "LLLL");
                      }
                    }
                  }
                  obj34.editedTimestamp = dateFormatResult;
                  obj34.editedColor = tmp6.editedColor;
                  if (message.isUnsupported) {
                    textColor = tmp6.unsupportedColor;
                  } else if (null != tmp151) {
                    textColor = 4278190080 | tmp151;
                  } else {
                    textColor = tmp6.textColor;
                  }
                  obj34.textColor = textColor;
                  obj34.officialMessageColor = tmp152;
                  obj34.linkColor = tmp6.linkColor;
                  obj34.tagText = tagText;
                  obj34.tagAccessibilityLabel = tagAccessibilityLabel;
                  obj34.tagVerified = tagVerified;
                  obj34.tagTextColor = tagTextColor;
                  obj34.tagBackgroundColor = tagBackgroundColor;
                  obj34.tagType = tagType;
                  obj34.tagIconUrl = tagIconUrl;
                  obj34.opTagText = opTagText;
                  obj34.opTagTextColor = opTagTextColor;
                  obj34.opTagBackgroundColor = opTagBackgroundColor;
                  obj34.stateAccessibilityLabel = joined;
                  obj34.constrainedWidth = constrainedWidth;
                  obj34.gifAutoPlay = gifAutoPlay;
                  obj34.animateEmoji = animateEmoji;
                  if (tmp23) {
                    nick = author.username;
                  }
                  obj34.username = nick;
                  let uri;
                  if (!tmp23) {
                    uri = ensureAvatarSourceResult.uri;
                  }
                  obj34.avatarURL = uri;
                  let tmp177 = null;
                  if (!tmp23) {
                    tmp177 = avatarDecorationURL;
                  }
                  obj34.avatarDecorationURL = tmp177;
                  obj34.authorId = author.id;
                  if (!tmp23) {
                    let defaultUsernameColor;
                    let defaultUsernameColor2;
                    let giftCodeEmbed;
                    let codedLinkEmbeds;
                    let items5;
                    let postPreviewEmbeds;
                    if ("username" === roleStyle) {
                      defaultUsernameColor = shouldDisableInteractiveComponents(colorString);
                      if (defaultUsernameColor == null) {
                        defaultUsernameColor = tmp6.defaultUsernameColor;
                      }
                    }
                    obj34.usernameColor = defaultUsernameColor;
                    let tmp180 = null;
                    if (!tmp23) {
                      let tmp181Result = shouldDisableInteractiveComponents(colorString);
                      if (tmp181Result == null) {
                        tmp181Result = null;
                      }
                      tmp180 = tmp181Result;
                    }
                    obj34.roleColor = tmp180;
                    let processColorStringsResult = null;
                    if (hasEnhancedRoleColors) {
                      processColorStringsResult = null;
                      if (!tmp23) {
                        const tmp15Result107 = tmp15(tmp5[78]);
                        processColorStringsResult = tmp15Result107.processColorStrings(colorStrings);
                      }
                    }
                    obj34.roleColors = processColorStringsResult;
                    obj34.shouldShowRoleDot = "dot" === roleStyle;
                    obj34.shouldShowRoleOnName = "username" === roleStyle;
                    obj34.showLinkDecorations = alwaysShowLinkDecorations;
                    obj34.forceRevealSpoilers = !shouldObscureSpoiler;
                    if (tmp23) {
                      defaultUsernameColor2 = tmp6.defaultUsernameColor;
                    } else {
                      defaultUsernameColor2 = shouldDisableInteractiveComponents(colorString);
                      if (defaultUsernameColor2 == null) {
                        defaultUsernameColor2 = tmp6.defaultUsernameColor;
                      }
                    }
                    obj34.colorString = defaultUsernameColor2;
                    let tmp186;
                    if (!tmp23) {
                      tmp186 = roleIcon;
                    }
                    obj34.roleIcon = tmp186;
                    let connectionsRoleTag;
                    if (null != visibleConnectionsRole) {
                      const tmp15Result108 = tmp15(tmp5[79]);
                      connectionsRoleTag = tmp15Result108.createConnectionsRoleTag(visibleConnectionsRole);
                    }
                    obj34.connectionsRoleTag = connectionsRoleTag;
                    let tmp188;
                    if (!tmp23) {
                      tmp188 = stringResult3;
                    }
                    obj34.timestamp = tmp188;
                    let dateFormatResult1;
                    if (!tmp23) {
                      const tmp15Result109 = tmp15(tmp5[71]);
                      dateFormatResult1 = tmp15Result109.dateFormat(message.timestamp, "LLLL");
                    }
                    obj34.timestampTooltip = dateFormatResult1;
                    let timestampColor;
                    if (!tmp23) {
                      timestampColor = tmp6.timestampColor;
                    }
                    obj34.timestampColor = timestampColor;
                    let tmp191;
                    if (!tmp23) {
                      tmp191 = stringResult4;
                    }
                    obj34.timestampAccessibilityLabel = tmp191;
                    obj34.content = stringResult5;
                    obj34.isEditing = isEditing;
                    obj34.renderContentOnly = renderContentOnly;
                    let surveyIndication;
                    if (undefined !== pushFeedbackType) {
                      const tmp15Result110 = tmp15(tmp5[80]);
                      surveyIndication = tmp15Result110.createSurveyIndication(message, forcedTheme, pushFeedbackType);
                    }
                    obj34.surveyIndication = surveyIndication;
                    const tmp15Result111 = tmp15(tmp5[81]);
                    obj34.ephemeralIndication = tmp15Result111.createEphemeralIndication(message);
                    obj34.interactionStatus = interactionStatus;
                    let executedCommand;
                    if (renderExecutedCommands) {
                      const tmp15Result112 = tmp15(tmp5[82]);
                      executedCommand = tmp15Result112.createExecutedCommand(message, channel, roleStyle, tmp8, tmp6.defaultUsernameColor);
                    }
                    obj34.executedCommand = executedCommand;
                    let tmp199;
                    if (message2.components.length > 0) {
                      if (renderComponents) {
                        const obj35 = { message, guildId: guildId1, interaction, shouldDisableInteractiveComponents, shouldShowMedia: true === canShowImages, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors: tmp6 };
                        tmp199 = tmp4(tmp5[50])(obj35, message2.components);
                      }
                    }
                    obj34.components = tmp199;
                    let num12 = 0;
                    if (!renderContentOnly) {
                      num12 = tmp6.feedbackColor;
                    }
                    obj34.feedbackColor = num12;
                    let num13 = 0;
                    if (!renderContentOnly) {
                      num13 = tmp6.highlightColor;
                    }
                    obj34.highlightColor = num13;
                    obj34.embeds = tmp55;
                    if (renderGiftCode) {
                      const tmp15Result113 = tmp15(tmp5[83]);
                      giftCodeEmbed = tmp15Result113.createGiftCodeEmbed(message, forcedTheme);
                    } else {
                      giftCodeEmbed = [];
                    }
                    obj34.giftCodes = giftCodeEmbed;
                    if (renderCodedLinks) {
                      const tmp15Result114 = tmp15(tmp5[84]);
                      codedLinkEmbeds = tmp15Result114.createCodedLinkEmbeds(message, message2, channel, tmp8);
                    } else {
                      codedLinkEmbeds = [];
                    }
                    obj34.codedLinks = codedLinkEmbeds;
                    let activityInstanceEmbed;
                    if (renderActivityInstanceEmbed) {
                      const tmp15Result115 = tmp15(tmp5[85]);
                      activityInstanceEmbed = tmp15Result115.createActivityInstanceEmbed(message);
                    }
                    obj34.activityInstanceEmbed = activityInstanceEmbed;
                    let activityRichPresenceInviteEmbed;
                    if (renderActivityInviteEmbed) {
                      const tmp15Result116 = tmp15(tmp5[86]);
                      activityRichPresenceInviteEmbed = tmp15Result116.createActivityRichPresenceInviteEmbed(message, channel, forcedTheme);
                    }
                    obj34.activityRichPresenceInviteEmbed = activityRichPresenceInviteEmbed;
                    if (tmp12) {
                      if (renderAttachments) {
                        renderAttachments = 0 !== length || 0 !== length2;
                      }
                      if (!renderAttachments) {
                        renderAttachments = tmp48;
                      }
                      tmp12 = renderAttachments;
                    }
                    obj34.useAttachmentGridLayout = tmp12;
                    obj34.useAttachmentUploadPreview = null != uploaderFileForMessageId;
                    obj34.attachments = items3;
                    let num15 = 1;
                    if (null != uploaderFileForMessageId) {
                      num15 = 1;
                      if (message.state === constants2.SEND_FAILED) {
                        num15 = 0.2;
                      }
                    }
                    obj34.attachmentsOpacity = num15;
                    if (restrictedPreview) {
                      items5 = [];
                    } else {
                      const obj37 = { message: message2, animateStickersSetting: AnimateStickers.getSetting(), isUserInteracting: message.id === animatingStickerMessageId };
                      const tmp4Result13 = gifAutoPlay(tmp5[87]);
                      AnimateStickers = tmp15(tmp5[37]).AnimateStickers;
                      items5 = tmp4Result13(obj37);
                    }
                    obj34.stickers = items5;
                    if (renderCommunicationDisabled) {
                      renderCommunicationDisabled = result3;
                    }
                    obj34.communicationDisabled = renderCommunicationDisabled;
                    let isForumPostResult1;
                    if (channel != null) {
                      isForumPostResult1 = channel.isForumPost();
                    }
                    obj34.isFirstForumPostMessage = isForumPostResult1 && message.id === message.channel_id;
                    let isForumPostResult2;
                    if (channel != null) {
                      isForumPostResult2 = channel.isForumPost();
                    }
                    let tmp211;
                    if (isForumPostResult2) {
                      if (renderForumPostActions) {
                        let forumPostActions;
                        if (message.id === message.channel_id) {
                          const guildId2 = channel.getGuildId();
                          if (null == guildId2) {
                            let defaultReaction;
                            const hasJoinedResult = JoinedThreadsStore.hasJoined(message.channel_id);
                            if (0 === message.reactions.length) {
                              const channel3 = obj.getChannel(channel.parent_id);
                              let defaultReactionEmoji;
                              if (channel3 != null) {
                                defaultReactionEmoji = channel3.defaultReactionEmoji;
                              }
                              let emojiId;
                              if (defaultReactionEmoji != null) {
                                emojiId = defaultReactionEmoji.emojiId;
                              }
                              let usableCustomEmojiById = null;
                              if (null != emojiId) {
                                usableCustomEmojiById = enabledHarmTypesForMessage.getUsableCustomEmojiById(defaultReactionEmoji.emojiId);
                              }
                              const obj38 = { defaultReactionEmoji, customGuildEmoji: usableCustomEmojiById };
                              const tmp15Result117 = tmp15(tmp5[32]);
                              defaultReaction = tmp15Result117.createDefaultReaction(obj38);
                            }
                            const obj39 = { isFollowing: hasJoinedResult, hasReactions: 0 !== message.reactions.length, defaultReaction, showMediaPostSharePrompt: MediaPostSharePromptStore.shouldDisplayPrompt(channel.id) };
                            const tmp15Result118 = tmp15(tmp5[32]);
                            forumPostActions = tmp15Result118.createForumPostActions(obj39);
                          }
                        }
                        tmp211 = forumPostActions;
                      }
                    }
                    obj34.postActions = tmp211;
                    obj34.isCurrentUserMessageAuthor = message.author.id === id1;
                    obj34.usingGradientTheme = null != guildId1.gradientPreset;
                    const tmp15Result119 = tmp15(tmp5[30]);
                    obj34.swipeToReplyIconUrl = tmp15Result119.getAssetUriForEmbed(gifAutoPlay(tmp5[88]));
                    const tmp15Result120 = tmp15(tmp5[30]);
                    obj34.swipeToEditIconUrl = tmp15Result120.getAssetUriForEmbed(gifAutoPlay(tmp5[89]));
                    if (tmp9) {
                      const tmp15Result121 = tmp15(tmp5[90]);
                      postPreviewEmbeds = tmp15Result121.createPostPreviewEmbeds(message, roleStyle, useReducedMotion);
                    } else {
                      postPreviewEmbeds = [];
                    }
                    obj34.postPreviewEmbeds = postPreviewEmbeds;
                    const intl19 = tmp15(tmp5[29]).intl;
                    obj34.obscureLearnMoreLabel = intl19.string(tmp15(tmp5[29]).t["2aXnfa"]);
                    const tmp15Result122 = tmp15(tmp5[91]);
                    obj34.safetyPolicyNoticeEmbed = tmp15Result122.createSafetyPolicyNoticeEmbed(message);
                    obj34.pollData = tmp127;
                    obj34.sharedClientTheme = result4;
                    const tmp15Result123 = tmp15(tmp5[92]);
                    obj34.safetySystemNotificationEmbed = tmp15Result123.createSafetySystemNotificationEmbed(message);
                    const tmp15Result124 = tmp15(tmp5[93]);
                    const merged4 = Object.assign(tmp15Result124.createCtaButtons(message.id, message.channel_id, tmp6));
                    let embedBackgroundColor;
                    if (hasFlagResult) {
                      embedBackgroundColor = tmp6.embedBackgroundColor;
                    }
                    obj34.audioAttachmentBackgroundColor = embedBackgroundColor;
                    const tmp15Result125 = tmp15(tmp5[94]);
                    obj34.accessibilityActions = tmp15Result125.createMessageAccessibilityActions(message, channel);
                    obj34.clanTagGuildId = tmp133;
                    obj34.clanTag = tmp132;
                    obj34.clanBadgeUrl = tmp131;
                    obj34.lobbyAdditionalName = tmp139;
                    obj34.lobbyTagIconUrl = tmp138;
                    obj34.isFirst = isFirst;
                    obj34.gameApplicationId = id3;
                    let type;
                    if (channel != null) {
                      type = channel.type;
                    }
                    obj34.isAnnouncementChannel = type === constants4.GUILD_ANNOUNCEMENT;
                    const tmp15Result126 = tmp15(tmp5[95]);
                    obj34.displayNameStyles = tmp15Result126.createDisplayNameStylesMobile(message.author, member);
                    obj34.voiceChannelBadge = voiceChannelBadge;
                    return obj34;
                  }
                  defaultUsernameColor = tmp6.defaultUsernameColor;
                }
                nonce = message.nonce;
              }
              const tmp15Result127 = tmp15(tmp5[71]);
              stringResult4 = tmp15Result127.accessibilityLabelCalendarFormat(message.timestamp);
            }
            const tmp15Result128 = tmp15(tmp5[71]);
            stringResult3 = tmp15Result128.calendarFormat(message.timestamp, true, timestampHourCycle);
          }
        }
      }
      if (null != guildMemberAvatar) {
        if (null != guildId1) {
          const obj40 = { userId: author.id, avatar: guildMemberAvatar, guildId: guildId1 };
          const tmp4Result14 = gifAutoPlay(tmp5[55]);
          applicationIconSource = tmp4Result14.getGuildMemberAvatarSource(obj40, author);
        }
      }
      applicationIconSource = author.getAvatarSource(undefined);
    }
    parseMessageMarkupResult = { content: "PX_8", hasSpoilerEmbeds: "auto", hasBailedAst: 0 };
  }
}
const processColor = react_native.processColor;
let AccessibilityStore = AccessibilityStore_mod;
let ApplicationStore = ApplicationStore_mod;
const ReferencedMessageState = ReferencedMessageStore2.ReferencedMessageState;
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_24, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: closure_25, GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR: closure_26 } = MessageConstants);
const ReferencedMessageRowState = RowGeneratorConstants.ReferencedMessageRowState;
({ MessageTypes: closure_28, MessageStates: closure_29, MessageFlags: closure_30, ChannelTypes: closure_31 } = Constants);
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
let result = size.fileFinishedImporting("modules/messages/native/renderer/createMessageContent.tsx");

export default createMessageContent;
