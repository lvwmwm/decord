// Module ID: 9167
// Function ID: 9168
// Name: createMessageContent
// Dependencies: [17, 5307, 2165, 5330, 6969, 9165, 8659, 5239, 9168, 8744, 5240, 8871, 1192, 502, 5155, 5218, 5177, 5248, 9021, 1388, 5311, 9160, 1072, 8410, 5954, 9170, 11, 9110, 6858, 1113, 8655, 9171, 9172, 6792, 1406, 8861, 9177, 5131, 9181, 6350, 9182, 9184, 9186, 7062, 9205, 9343, 9344, 9384, 8634, 8853, 9385, 8656, 9274, 9391, 6749, 1417, 1414, 9394, 1187, 10874, 10883, 10887, 10875, 10879, 9260, 15533, 1255, 15534, 5225, 7467, 15535, 15536, 5128, 12656, 15537, 8409, 7285, 575, 15538, 9189, 15540, 15541, 9335, 15544, 15545, 15551, 15587, 15589, 15604, 9193, 9194, 15605, 15608, 15611, 15612, 9195, 9191, 2]

// Module 9167 (createMessageContent)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import intl20 from "intl" /* 1113 */;
import useChannelName from "useChannelName" /* 5954 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6858 */;
import GuildTagConstants from "GuildTagConstants" /* 8410 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8655 */;
import transformMessageComponentsDefault from "transformMessageComponents" /* 8656 */;
import ReferencedMessageStore2 from "ReferencedMessageStore" /* 8744 */;
import MessageCountUtils from "MessageCountUtils" /* 9110 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 9160 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 9170 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 5307 */;
import ApplicationStore_mod from "ApplicationStore" /* 2165 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5330 */;
import EmojiStore from "EmojiStore" /* 6969 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 9165 */;
import InteractionStore from "InteractionStore" /* 8659 */;
import LurkingStore from "LurkingStore" /* 5239 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 9168 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 5240 */;
import ThreadMessageStore from "ThreadMessageStore" /* 8871 */;
import ThemeStore from "ThemeStore" /* 1192 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import GuildMemberStore from "GuildMemberStore" /* 5218 */;
import GuildStore from "GuildStore" /* 5177 */;
import RelationshipStore from "RelationshipStore" /* 5248 */;
import UploadStore from "UploadStore" /* 9021 */;
import UserStore from "UserStore" /* 1388 */;
import MessageConstants from "MessageConstants" /* 5311 */;
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
              intl5 = tmp13(1113).intl;
              obj4 = obj2;
            } else {
              const threadMetadata = channel1.threadMetadata;
              let archived;
              if (threadMetadata != null) {
                archived = threadMetadata.archived;
              }
              if (archived) {
                const obj3 = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, messagePreviewString: intl4.string(intl20.t.ZTo4HS), archived: true, archivedIconUrl: tmp13Result2.getAssetUriForEmbed(tmp18(9171)), backgroundColor };
                intl4 = tmp13(1113).intl;
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
                      const intl2 = tmp13(1113).intl;
                      const string = intl2.string;
                      const t = tmp13(1113).t;
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
                intl3 = tmp13(1113).intl;
                obj4 = obj8;
              }
            }
            obj = obj4;
          }
          return obj;
        }
        obj = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, messagePreviewString: intl.string(intl20.t.HYtNyE), archived: false, backgroundColor };
        intl = tmp13(1113).intl;
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
  let obj25;
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
  let tmp14Result77;
  let tmp14Result80;
  let tmp14Result81;
  let tmp14Result82;
  let tmp169;
  let tmp170;
  let unlinkedGamePlayerPlaceholders;
  let useAlternateEmbedColors;
  message = message.message;
  ({ messageForward, roleStyle, isFirst, isEditing, canShowImages, isSystemDM, isInlineReplyPreview } = message);
  if (isInlineReplyPreview === undefined) {
    isInlineReplyPreview = false;
  }
  ({ options, pushFeedbackType, renderContentOnly, unlinkedGamePlayerPlaceholders } = message);
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
  let tmp8 = tmp7 && renderEmbeds && message.type !== constants.CUSTOM_GIFT;
  let tmp11 = tmp7 && inlineAttachmentMedia;
  let obj = ChannelStore;
  const channel = ChannelStore.getChannel(message.getChannelId());
  const getChannel = ChannelStore.getChannel;
  const tmp4Result = gifAutoPlay(tmp5[26]);
  const channel1 = getChannel(tmp4Result.castMessageIdAsChannelId(message.id));
  guildId1 = undefined;
  if (channel != null) {
    guildId1 = channel.getGuildId();
  }
  const tmp14 = message;
  const id = message.author.id;
  const obj4 = message(tmp5[39]);
  const hasEnhancedRoleColors = obj4.getHasEnhancedRoleColors(guildId1, id);
  if (messageForward == null) {
    const tmp14Result = tmp14(tmp5[40]);
    messageForward = tmp14Result.maybeCreateSingleForwardForMessage(message);
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
  let tmp17 = null;
  if (message.type === constants.THREAD_STARTER_MESSAGE) {
    const messageByReference = ReferencedMessageStore.getMessageByReference(message.messageReference);
    let message1 = null;
    if (messageByReference.state === ReferencedMessageState.LOADED) {
      message1 = messageByReference.message;
    }
    tmp17 = message1;
  }
  if (null != tmp17) {
    const obj5 = { message: tmp17, roleStyle, isFirst, isEditing, canShowImages, isSystemDM, isInlineReplyPreview, options: obj6 };
    const obj3 = { id: message.id };
    obj6 = { renderThreadEmbeds: false, renderReactions: false, shouldDisableInteractiveComponents: true };
    const merged = Object.assign(options);
    const merged1 = Object.assign(createMessageContent(obj5));
    return obj3;
  } else if (null != unlinkedGamePlayerPlaceholders) {
    const obj7 = { message, theme: forcedTheme, reactions: [], roleStyle };
    const tmp14Result66 = tmp14(tmp5[42]);
    return tmp14Result66.createUnlinkedGamePlayersSystemMessage(obj7, unlinkedGamePlayerPlaceholders);
  } else if (gifAutoPlay(tmp5[43])(message)) {
    let systemMessageContent;
    if (message.type === constants.THREAD_CREATED) {
      const obj8 = { threadEmbed: createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme) };
      const obj9 = { message, theme: forcedTheme, reactions: items, roleStyle };
      const tmp14Result67 = tmp14(tmp5[44]);
      const merged2 = Object.assign(tmp14Result67.createSystemMessageContent(obj9));
      systemMessageContent = obj8;
    } else {
      const obj10 = { message, theme: forcedTheme, reactions: items, roleStyle, isForumPost: isForumPostResult };
      isForumPostResult = undefined;
      const createSystemMessageContent = tmp14(tmp5[44]).createSystemMessageContent;
      tmp14(tmp5[44]);
      if (channel != null) {
        isForumPostResult = channel.isForumPost();
      }
      systemMessageContent = createSystemMessageContent(obj10);
    }
    return systemMessageContent;
  } else {
    let tmp22 = !isFirst;
    if (isFirst) {
      tmp22 = renderContentOnly;
    }
    const author = message.author;
    let timestamp = message.editedTimestamp;
    const isMessageNewerThanImprovedMarkdownEpoch = tmp14(tmp5[45]).isMessageNewerThanImprovedMarkdownEpoch;
    tmp14(tmp5[45]);
    if (timestamp == null) {
      timestamp = message.timestamp;
    }
    const result = isMessageNewerThanImprovedMarkdownEpoch(timestamp.valueOf());
    if (null != message2.content) {
      let parseMessageMarkupResult;
      let applicationIconSource;
      if ("" !== message2.content) {
        const parseMessageMarkup = tmp14(tmp5[46]).parseMessageMarkup;
        const tmp14Result70 = tmp14(tmp5[46]);
        if (!forceHideSimpleEmbedContent) {
          forceHideSimpleEmbedContent = tmp8 && (true === canShowImages && inlineEmbedMedia);
        }
        const tmp27 = null != channel1 && message.isFirstMessageInForumPost(channel1);
        parseMessageMarkupResult = parseMessageMarkup(message, message2, forceHideSimpleEmbedContent, isInlineReplyPreview, tmp27, result, result);
      }
      ({ content, hasSpoilerEmbeds } = parseMessageMarkupResult);
      let tmp36 = restrictedPreview;
      const hasBailedAst = parseMessageMarkupResult.hasBailedAst;
      if (restrictedPreview) {
        tmp36 = null != content;
      }
      let stringResult = content;
      if (tmp36) {
        stringResult = tmp4(tmp5[47])(content);
      }
      const tmp14Result71 = tmp14(tmp5[48]);
      enabledHarmTypesForMessage = tmp14Result71.getEnabledHarmTypesForMessage(message);
      const tmp14Result72 = tmp14(tmp5[49]);
      result1 = tmp14Result72.shouldAgeVerifyForExplicitMedia();
      const ViewImageDescriptions = tmp14(tmp5[37]).ViewImageDescriptions;
      setting = ViewImageDescriptions.getSetting();
      if (tmp8) {
        tmp8 = !hasBailedAst;
      }
      if (tmp8) {
        tmp8 = !restrictedPreview;
      }
      interaction = setting.getInteraction(message);
      let tmp4Result1Result;
      if (tmp8) {
        const obj11 = {
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
        const tmp4Result8 = gifAutoPlay(tmp5[50]);
        if (hasSpoilerEmbeds) {
          hasSpoilerEmbeds = shouldObscureSpoiler;
        }
        tmp4Result1Result = tmp4Result8(obj11);
      }
      const obj13 = { message, isSystemDM, channel, colors: tmp6 };
      ({ tagText, tagAccessibilityLabel, tagVerified, tagTextColor, tagBackgroundColor, tagType, tagIconUrl, opTagText, opTagTextColor, opTagBackgroundColor } = gifAutoPlay(tmp5[52])(obj13));
      gifAutoPlay(tmp5[52])(obj13);
      const uploaderFileForMessageId = UploadStore.getUploaderFileForMessageId(message.id);
      let tmp50 = tmp4Result1Result;
      const obj12 = UploadStore;
      const tmp49 = message.state !== constants2.SEND_FAILED || message.isCommandType();
      if (!tmp49) {
        let items1 = tmp4Result1Result;
        if (tmp4Result1Result == null) {
          items1 = [];
        }
        const obj14 = { uploaderFile: uploaderFileForMessageId, useAttachmentUploadPreview: null != uploaderFileForMessageId, colors: tmp6 };
        items1.push(gifAutoPlay(tmp5[53])(obj14));
        tmp50 = items1;
      }
      const message4 = result1.getMessage(message.id);
      let tmp54 = tmp50;
      if (null != message4) {
        let items2 = tmp50;
        if (tmp50 == null) {
          items2 = [];
        }
        const errorMessage = message4.errorMessage;
        const push = items2.push;
        const obj15 = { errorMessage, colors: tmp6 };
        const tmp14Result73 = tmp14(tmp5[53]);
        push(tmp14Result73.createAutomodBlockedMessageEmbed(obj15));
        tmp54 = items2;
      }
      const tmp14Result74 = tmp14(tmp5[54]);
      const userAuthor = tmp14Result74.getUserAuthor(message.author, channel);
      ({ guildMemberAvatar, guildMemberAvatarDecoration, iconRoleId } = userAuthor);
      const ensureAvatarSource = tmp14(tmp5[55]).ensureAvatarSource;
      tmp14(tmp5[55]);
      if (message.isInteractionPlaceholder()) {
        if (null == message.author.avatar) {
          if (null == guildMemberAvatar) {
            let roleIcon;
            let tmp76;
            let tmp100;
            let items3;
            const application = message.application;
            let icon;
            if (application != null) {
              icon = application.icon;
            }
            if (null != icon) {
              const obj16 = { id: message.application.id, icon: message.application.icon, bot: message.application.bot };
              const tmp4Result9 = gifAutoPlay(tmp5[56]);
              applicationIconSource = tmp4Result9.getApplicationIconSource(obj16);
            }
            const ensureAvatarSourceResult = ensureAvatarSource(applicationIconSource);
            const getAvatarDecorationURL = tmp14(tmp5[56]).getAvatarDecorationURL;
            tmp14(tmp5[56]);
            if (null == guildMemberAvatarDecoration) {
              guildMemberAvatarDecoration = author.avatarDecoration;
            }
            const obj17 = { avatarDecoration: guildMemberAvatarDecoration, size: tmp14Result77.getDecorationSizeForAvatarSize(tmp14(tmp5[58]).AvatarSizes.NORMAL) };
            let member = null;
            tmp14Result77 = tmp14(tmp5[57]);
            const avatarDecorationURL = getAvatarDecorationURL(obj17);
            if (null != guildId1) {
              member = GuildMemberStore.getMember(guildId1, author.id);
            }
            let prop;
            const getActiveLeaderboardWinnerData = tmp14(tmp5[59]).getActiveLeaderboardWinnerData;
            tmp14(tmp5[59]);
            if (member != null) {
              prop = member.gamingLeaderboardData;
            }
            const activeLeaderboardWinnerData = getActiveLeaderboardWinnerData(prop);
            let tmp68;
            if (null != activeLeaderboardWinnerData) {
              if (null != activeLeaderboardWinnerData.winningStreak) {
                if (null != activeLeaderboardWinnerData.winningWeek) {
                  if (null != activeLeaderboardWinnerData.winningStat) {
                    tmp68 = activeLeaderboardWinnerData;
                  }
                }
              }
            }
            let prop1;
            const getActiveLeaderboardLeaderData = tmp14(tmp5[59]).getActiveLeaderboardLeaderData;
            tmp14(tmp5[59]);
            if (member != null) {
              prop1 = member.gamingLeaderboardData;
            }
            const activeLeaderboardLeaderData = getActiveLeaderboardLeaderData(prop1);
            if (null != tmp68) {
              let tmp4Result10;
              let num2 = tmp68.winningStreak;
              if (num2 == null) {
                num2 = 0;
              }
              if (num2 > 1) {
                tmp4Result10 = tmp4(tmp5[60]);
              } else {
                tmp4Result10 = tmp4(tmp5[61]);
              }
              const obj18 = { source: tmp4Result10, name: LEADERBOARD_WINNER_ROLE_NAME_PREFIX + tmp14Result80.encodeWinnerData(tmp68), size: 18, alt: tmp14Result81.getLeaderboardWinnerBadgeText(tmp68) };
              LEADERBOARD_WINNER_ROLE_NAME_PREFIX = tmp14(tmp5[62]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX;
              tmp14Result80 = tmp14(tmp5[62]);
              roleIcon = obj18;
              tmp14Result81 = tmp14(tmp5[62]);
            } else if (null != activeLeaderboardLeaderData) {
              const obj19 = { source: gifAutoPlay(tmp5[63]), name: LEADERBOARD_LEADER_ROLE_NAME_PREFIX + num, size: 18, alt: tmp14Result82.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData) };
              num = activeLeaderboardLeaderData.currentLeaderStat;
              LEADERBOARD_LEADER_ROLE_NAME_PREFIX = tmp14(tmp5[62]).LEADERBOARD_LEADER_ROLE_NAME_PREFIX;
              if (num == null) {
                num = 0;
              }
              roleIcon = obj19;
              tmp14Result82 = tmp14(tmp5[62]);
            } else if (null != iconRoleId) {
              if (null != guildId1) {
                const obj20 = { guildId: guildId1, roleId: iconRoleId, size: 18 };
                const tmp14Result83 = tmp14(tmp5[64]);
                roleIcon = tmp14Result83.getRoleIcon(obj20);
              }
            }
            if (message.hasFlag(constants3.SOURCE_MESSAGE_DELETED)) {
              const intl = tmp14(tmp5[29]).intl;
              stringResult = intl.string(tmp14(tmp5[29]).t.JOtgSw);
            }
            const tmp14Result84 = tmp14(tmp5[54]);
            const messageAuthor = tmp14Result84.getMessageAuthor(message);
            ({ nick, colorString, colorStrings } = messageAuthor);
            if (message.type === constants.INTERACTION_PREMIUM_UPSELL) {
              const intl2 = tmp14(tmp5[29]).intl;
              const obj21 = { appName: nick };
              stringResult = intl2.formatToPlainString(tmp14(tmp5[29]).t["u4A+xK"], obj21);
            }
            if (message.type === constants.REPLY) {
              if (renderReplies) {
                const messageByReference1 = ReferencedMessageStore.getMessageByReference(message.messageReference);
                const state = messageByReference1.state;
                if (ReferencedMessageState.LOADED === state) {
                  const message3 = messageByReference1.message;
                  const tmp14Result85 = tmp14(tmp5[40]);
                  const result2 = tmp14Result85.maybeCreateSingleForwardForMessage(message3);
                  const obj36 = RelationshipStore;
                  if (RelationshipStore.isBlockedForMessage(message3)) {
                    const obj22 = { state: ReferencedMessageRowState.SYSTEM, content: intl12.string(tmp14(tmp5[29]).t.XAkOo2) };
                    intl12 = tmp14(tmp5[29]).intl;
                    tmp76 = obj22;
                  } else if (obj36.isIgnoredForMessage(message3)) {
                    const obj23 = { state: ReferencedMessageRowState.SYSTEM, content: intl11.string(tmp14(tmp5[29]).t["G7p6v/"]) };
                    intl11 = tmp14(tmp5[29]).intl;
                    tmp76 = obj23;
                  } else {
                    const obj24 = { message: message3, messageForward: result2, roleStyle, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true, options: obj25 };
                    obj25 = { renderReplies: false };
                    const merged3 = Object.assign(options);
                    const tmp88 = createMessageContent(obj24);
                    if (null == tmp88) {
                      const obj26 = { state: ReferencedMessageRowState.SYSTEM, content: intl10.string(tmp14(tmp5[29]).t["1i+hMi"]) };
                      intl10 = tmp14(tmp5[29]).intl;
                      tmp76 = obj26;
                    } else {
                      let messageStickers;
                      let stringResult1;
                      if ("username" in tmp88) {
                        let colorString3;
                        const tmp14Result86 = tmp14(tmp5[54]);
                        const messageAuthor1 = tmp14Result86.getMessageAuthor(message3);
                        ({ nick: nick2, colorString: colorString2 } = messageAuthor1);
                        if (nick2 == null) {
                          nick2 = message3.author.username;
                        }
                        tmp88.username = nick2;
                        if (tmp22) {
                          colorString3 = tmp88.colorString;
                        } else {
                          colorString3 = shouldDisableInteractiveComponents(colorString2);
                          if (colorString3 == null) {
                            colorString3 = tmp88.colorString;
                          }
                        }
                        tmp88.colorString = colorString3;
                        if (gifAutoPlay(tmp5[65])(message, message3)) {
                          tmp88.username = `@${tmp88.username}`;
                        }
                      }
                      const _Array = Array;
                      const isArray = Array.isArray(tmp88.content) && 0 === tmp88.content.length;
                      if (isArray) {
                        tmp88.content = undefined;
                      }
                      let message5;
                      if (result2 != null) {
                        message5 = result2.messageSnapshot.message;
                      }
                      if (message5 == null) {
                        message5 = message3;
                      }
                      const content2 = tmp88.content;
                      if ("stickers" in message5) {
                        const tmp14Result87 = tmp14(tmp5[33]);
                        messageStickers = tmp14Result87.getMessageStickers(message5);
                      } else {
                        messageStickers = [];
                      }
                      if (messageStickers.length > 0) {
                        const intl9 = tmp14(tmp5[29]).intl;
                        stringResult1 = intl9.string(tmp14(tmp5[29]).t["7K5Lma"]);
                      } else {
                        if ("interaction" in message5) {
                          if (null != message5.interaction) {
                            if ("" === message5.content) {
                              const intl8 = tmp14(tmp5[29]).intl;
                              stringResult1 = intl8.string(tmp14(tmp5[29]).t["2v7kfl"]);
                            }
                          }
                        }
                        const tmp14Result88 = tmp14(tmp5[34]);
                        if (tmp14Result88.hasFlag(message5.flags, constants3.IS_VOICE_MESSAGE)) {
                          const intl7 = tmp14(tmp5[29]).intl;
                          stringResult1 = intl7.string(tmp14(tmp5[29]).t["6bhHrc"]);
                        } else if (message5.type === constants.POLL_RESULT) {
                          const tmp14Result89 = tmp14(tmp5[35]);
                          stringResult1 = tmp14Result89.getPollResultsReplyPreviewMobile(message5);
                        } else {
                          const tmp14Result90 = tmp14(tmp5[34]);
                          if (tmp14Result90.hasFlag(message5.flags, constants3.IS_COMPONENTS_V2)) {
                            const intl6 = tmp14(tmp5[29]).intl;
                            stringResult1 = intl6.string(tmp14(tmp5[29]).t.Xxm5i3);
                          } else {
                            let stringResult2;
                            if (message5.type === constants.GUILD_SPACE_MESSAGE) {
                              if ("guildSpaceData" in message5) {
                                if (null != channel) {
                                  const tmp14Result91 = tmp14(tmp5[36]);
                                  stringResult1 = tmp14Result91.stringifyGuildSpaceSystemMessage(message5, channel);
                                }
                              }
                            }
                            if ("" === message5.content) {
                              const intl5 = tmp14(tmp5[29]).intl;
                              stringResult2 = intl5.string(tmp14(tmp5[29]).t.JAKsM8);
                            } else {
                              stringResult2 = null;
                            }
                            stringResult1 = stringResult2;
                          }
                        }
                      }
                      if (message3.type === constants.POLL_RESULT) {
                        tmp88.content = stringResult1;
                      }
                      const obj27 = { state: ReferencedMessageRowState.LOADED, message: tmp88 };
                      tmp76 = obj27;
                      if (null != stringResult1) {
                        obj27.systemContent = stringResult1;
                        tmp76 = obj27;
                      }
                    }
                  }
                } else if (ReferencedMessageState.NOT_LOADED === state) {
                  const obj28 = { state: ReferencedMessageRowState.SYSTEM, content: intl4.string(tmp14(tmp5[29]).t["1i+hMi"]) };
                  intl4 = tmp14(tmp5[29]).intl;
                  tmp76 = obj28;
                } else if (ReferencedMessageState.DELETED === state) {
                  const obj29 = { state: ReferencedMessageRowState.SYSTEM, content: intl3.string(tmp14(tmp5[29]).t.mE3KJN) };
                  intl3 = tmp14(tmp5[29]).intl;
                  tmp76 = obj29;
                } else {
                  const tmp14Result92 = tmp14(tmp5[66]);
                  tmp14Result92.assertNever(messageByReference1);
                }
              }
            }
            if (renderThreadEmbeds) {
              tmp100 = createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme);
            }
            const tmp14Result93 = tmp14(tmp5[67]);
            const interactionStatus = tmp14Result93.createInteractionStatus(message, interaction);
            const useReducedMotion = AccessibilityStore.useReducedMotion;
            let parent_id;
            const tmp14Result94 = tmp14(tmp5[68]);
            const result3 = tmp14Result94.isMemberCommunicationDisabled(member);
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
            const obj30 = { guildMember: member, channel: channel2, onlyChannelConnectionRoles: true };
            const tmp14Result95 = tmp14(tmp5[69]);
            const visibleConnectionsRole = tmp14Result95.getVisibleConnectionsRole(obj30);
            let tmp115 = tmp47;
            if (null != uploaderFileForMessageId) {
              tmp115 = 0 === message.attachments.length;
            }
            if (tmp115) {
              tmp115 = null != uploaderFileForMessageId;
            }
            if (tmp115) {
              const obj31 = { uploaderFile: uploaderFileForMessageId, isFailedMessage: message.state === constants2.SEND_FAILED, shouldInlineAttachmentMedia: tmp11 };
              items3 = tmp4(tmp5[70])(obj31);
            } else {
              items3 = [];
              if (renderAttachments) {
                const obj32 = { attachments: message2.attachments, uploadAttachments: obj12.getUploadAttachments(message.nonce), shouldInlineAttachmentMedia: tmp11, gifAutoPlay, viewImageDescriptions: setting, useReducedMotion, shouldObscureSpoiler, themedBackgroundColor: tmp6.embedBackgroundColor, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, colors: tmp6 };
                const tmp4Result11 = gifAutoPlay(tmp5[71]);
                items3 = tmp4Result11(obj32);
              }
            }
            if (tmp115) {
              let stringResult3;
              if (message.state !== constants2.SEND_FAILED) {
                const intl13 = tmp14(tmp5[29]).intl;
                stringResult3 = intl13.string(tmp14(tmp5[29]).t["yXY+5J"]);
              }
              if (tmp115) {
                let stringResult4;
                let tmp126;
                let result4;
                let tmp130;
                let tmp131;
                let tmp132;
                let tmp137;
                let tmp138;
                let id3;
                let tmp151;
                let joined;
                if (message.state !== constants2.SEND_FAILED) {
                  const intl14 = tmp14(tmp5[29]).intl;
                  stringResult4 = intl14.string(tmp14(tmp5[29]).t["yXY+5J"]);
                }
                let stringResult5 = stringResult;
                const id1 = AuthenticationStore.getId();
                if (message.isUnsupported) {
                  const intl15 = tmp14(tmp5[29]).intl;
                  stringResult5 = intl15.string(tmp14(tmp5[29]).t.sWi5EU);
                }
                const isPollResult = message.isPoll();
                let tmp123 = !isPollResult;
                if (isPollResult) {
                  tmp123 = !isInlineReplyPreview && renderPolls;
                }
                if (!tmp123) {
                  tmp123 = null != stringResult && "" !== stringResult;
                  const tmp125 = null != stringResult && "" !== stringResult;
                }
                if (!tmp123) {
                  const tmp14Result96 = tmp14(tmp5[35]);
                  stringResult5 = tmp14Result96.getPollReplyPreview(message);
                }
                if (renderPolls) {
                  const obj33 = { theme: forcedTheme, animateEmoji };
                  tmp126 = gifAutoPlay(tmp5[73])(message, undefined, obj33);
                }
                if (renderSharedClientTheme) {
                  const tmp14Result97 = tmp14(tmp5[74]);
                  result4 = tmp14Result97.formatSharedClientThemeData(message, ensureAvatarSourceResult, nick);
                }
                const shouldDisplayGuildTag = tmp14(tmp5[75]).shouldDisplayGuildTag;
                const id2 = author.id;
                tmp14(tmp5[75]);
                const tmp129 = guildId1;
                if (shouldDisplayGuildTag(id2, tmp129)) {
                  const tmp14Result99 = tmp14(tmp5[75]);
                  const userPrimaryGuild = tmp14Result99.getUserPrimaryGuild(author.primaryGuild);
                  let guildTagBadgeUrl;
                  ({ guildId, tag } = userPrimaryGuild);
                  if (null != userPrimaryGuild.guildId) {
                    const tmp14Result100 = tmp14(tmp5[75]);
                    guildTagBadgeUrl = tmp14Result100.getGuildTagBadgeUrl(userPrimaryGuild.guildId, userPrimaryGuild.badge, GuildTagBadgeSize.SIZE_12);
                  }
                  tmp130 = guildTagBadgeUrl;
                  tmp131 = tag;
                  tmp132 = guildId;
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
                        const obj34 = { id: null, icon: null, size: 16 };
                        ({ id: obj62.id, icon: obj62.icon } = application1);
                        const tmp4Result12 = gifAutoPlay(tmp5[56]);
                        applicationIconURL = tmp4Result12.getApplicationIconURL(obj34);
                      }
                      tmp137 = applicationIconURL;
                      tmp138 = additionalName;
                    }
                  }
                }
                let tmp144 = message2;
                const hasFlag = tmp14(tmp5[34]).hasFlag;
                tmp14(tmp5[34]);
                if (message2 == null) {
                  tmp144 = message;
                }
                let str10 = message.applicationId;
                const getApplication = ApplicationStore.getApplication;
                const hasFlagResult = hasFlag(tmp144.flags, constants3.IS_VOICE_MESSAGE);
                if (str10 == null) {
                  str10 = "";
                }
                const application2 = getApplication(str10);
                let hasFlagResult1 = null != application2;
                if (hasFlagResult1) {
                  const tmp14Result102 = tmp14(tmp5[34]);
                  hasFlagResult1 = tmp14Result102.hasFlag(message.flags, tmp74.SENT_BY_SOCIAL_LAYER_INTEGRATION);
                }
                if (hasFlagResult1) {
                  id3 = application2.id;
                }
                let hasFlagResult2;
                if (message2 != null) {
                  hasFlagResult2 = message2.hasFlag(tmp74.IS_GUILD_OFFICIAL);
                }
                const items4 = [];
                if (hasFlagResult2) {
                  const guild = GuildStore.getGuild(guildId1);
                  if (null != guild) {
                    const tmp14Result103 = tmp14(tmp5[76]);
                    if (tmp14Result103.isGuildOfficialMessagesEnabled(guild, "createMessageContent")) {
                      let officialMessageColor = guild.officialMessageColor;
                      if (officialMessageColor == null) {
                        officialMessageColor = closure_24;
                      }
                      const officialMessageStyle = tmp110.officialMessageStyle;
                      const tmp14Result104 = tmp14(tmp5[76]);
                      const result5 = tmp14Result104.showGuildOfficialMessageGradient(officialMessageStyle);
                      let tmp155;
                      if (result5) {
                        tmp155 = officialMessageColor | closure_26;
                      }
                      const tmp14Result105 = tmp14(tmp5[76]);
                      if (tmp14Result105.showGuildOfficialMessageTextColor(officialMessageStyle)) {
                        const internal = tmp4(tmp5[77]).internal;
                        const semanticColor = internal.resolveSemanticColor(forcedTheme, tmp4(tmp5[77]).colors.BACKGROUND_BASE_LOWER);
                        let num8 = 1;
                        if (AccessibilityStore.desaturateUserColors) {
                          num8 = tmp110.saturation;
                        }
                        let num9 = 0;
                        const getAccessibleGuildOfficialTextColor = tmp14(tmp5[76]).getAccessibleGuildOfficialTextColor;
                        const tmp14Result106 = tmp14(tmp5[76]);
                        if (result5) {
                          num9 = closure_25;
                        }
                        const accessibleGuildOfficialTextColor = getAccessibleGuildOfficialTextColor(officialMessageColor, semanticColor, num8, num9);
                        accessibleGuildOfficialTextColor.num();
                      }
                      const push2 = items4.push;
                      const intl16 = tmp14(tmp5[29]).intl;
                      push2(intl16.string(tmp14(tmp5[29]).t.GzDTxY));
                      tmp151 = tmp155;
                    }
                  }
                }
                let obj68 = message2;
                if (message2 == null) {
                  obj68 = message;
                }
                if (obj68.hasFlag(constants3.SUPPRESS_NOTIFICATIONS)) {
                  const push3 = items4.push;
                  const intl17 = tmp14(tmp5[29]).intl;
                  push3(intl17.string(tmp14(tmp5[29]).t.t0MA8g));
                }
                if (items4.length > 0) {
                  joined = items4.join(", ");
                }
                const obj35 = { id: null, channelId: null, guildId: tmp169, flags: tmp170.flags, type: message.type, nonce: null, state: null, reactions: null, referencedMessage: null, threadEmbed: null, forwardInfo: null, mentioned: null, edited: null, editedTimestamp: null, editedColor: null, textColor: null, officialMessageColor: null, linkColor: null, tagText: null, tagAccessibilityLabel: null, tagVerified: null, tagTextColor: null, tagBackgroundColor: null, tagType: null, tagIconUrl: null, opTagText: null, opTagTextColor: null, opTagBackgroundColor: null, stateAccessibilityLabel: null, constrainedWidth: null, gifAutoPlay: null, animateEmoji: null, username: null, avatarURL: null, avatarDecorationURL: null, authorId: null, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, shouldShowRoleOnName: null, showLinkDecorations: null, forceRevealSpoilers: null, colorString: null, roleIcon: null, connectionsRoleTag: null, timestamp: null, timestampTooltip: null, timestampColor: null, timestampAccessibilityLabel: null, content: null, isEditing: null, renderContentOnly: null, surveyIndication: null, ephemeralIndication: null, interactionStatus: null, executedCommand: null, components: null, feedbackColor: null, highlightColor: null, embeds: null, giftCodes: null, codedLinks: null, activityInstanceEmbed: null, activityRichPresenceInviteEmbed: null, useAttachmentGridLayout: null, useAttachmentUploadPreview: null, attachments: null, attachmentsOpacity: null, stickers: null, communicationDisabled: null, isFirstForumPostMessage: null, postActions: null, isCurrentUserMessageAuthor: null, usingGradientTheme: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, postPreviewEmbeds: null, obscureLearnMoreLabel: null, safetyPolicyNoticeEmbed: null, pollData: null, sharedClientTheme: null, safetySystemNotificationEmbed: null };
                ({ id: obj70.id, channel_id: obj70.channelId } = message);
                const tmp14Result107 = tmp14(tmp5[78]);
                const voiceChannelBadge = tmp14Result107.createVoiceChannelBadge(message.author.id, guildId1);
                tmp170 = message2;
                tmp169 = guildId1;
                if (message2 == null) {
                  tmp170 = message;
                }
                if (null != message.nonce) {
                  let nonce;
                  let textColor;
                  if (typeof message.nonce !== "string") {
                    const _String = String;
                    nonce = String(message.nonce);
                  }
                  obj35.nonce = nonce;
                  obj35.state = message.state;
                  obj35.reactions = items;
                  let tmp172;
                  if (!renderContentOnly) {
                    tmp172 = tmp76;
                  }
                  obj35.referencedMessage = tmp172;
                  obj35.threadEmbed = tmp100;
                  let forwardInfo;
                  if (null != messageForward) {
                    forwardInfo = messageForward.getForwardInfo();
                  }
                  obj35.forwardInfo = forwardInfo;
                  obj35.mentioned = !ignoreMentioned && message.mentioned;
                  let str14 = "";
                  if (message.isEdited()) {
                    str14 = "";
                    if (!renderContentOnly) {
                      const intl18 = tmp14(tmp5[29]).intl;
                      str14 = intl18.string(tmp14(tmp5[29]).t.C8sXIM);
                    }
                  }
                  obj35.edited = str14;
                  let dateFormatResult;
                  if (message.isEdited()) {
                    if (!renderContentOnly) {
                      if (null != message.editedTimestamp) {
                        const tmp14Result108 = tmp14(tmp5[72]);
                        dateFormatResult = tmp14Result108.dateFormat(message.editedTimestamp, "LLLL");
                      }
                    }
                  }
                  obj35.editedTimestamp = dateFormatResult;
                  obj35.editedColor = tmp6.editedColor;
                  if (message.isUnsupported) {
                    textColor = tmp6.unsupportedColor;
                  } else if (null != tmp150) {
                    textColor = 4278190080 | tmp150;
                  } else {
                    textColor = tmp6.textColor;
                  }
                  obj35.textColor = textColor;
                  obj35.officialMessageColor = tmp151;
                  obj35.linkColor = tmp6.linkColor;
                  obj35.tagText = tagText;
                  obj35.tagAccessibilityLabel = tagAccessibilityLabel;
                  obj35.tagVerified = tagVerified;
                  obj35.tagTextColor = tagTextColor;
                  obj35.tagBackgroundColor = tagBackgroundColor;
                  obj35.tagType = tagType;
                  obj35.tagIconUrl = tagIconUrl;
                  obj35.opTagText = opTagText;
                  obj35.opTagTextColor = opTagTextColor;
                  obj35.opTagBackgroundColor = opTagBackgroundColor;
                  obj35.stateAccessibilityLabel = joined;
                  obj35.constrainedWidth = constrainedWidth;
                  obj35.gifAutoPlay = gifAutoPlay;
                  obj35.animateEmoji = animateEmoji;
                  if (tmp22) {
                    nick = author.username;
                  }
                  obj35.username = nick;
                  let uri;
                  if (!tmp22) {
                    uri = ensureAvatarSourceResult.uri;
                  }
                  obj35.avatarURL = uri;
                  let tmp176 = null;
                  if (!tmp22) {
                    tmp176 = avatarDecorationURL;
                  }
                  obj35.avatarDecorationURL = tmp176;
                  obj35.authorId = author.id;
                  if (!tmp22) {
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
                    obj35.usernameColor = defaultUsernameColor;
                    let tmp179 = null;
                    if (!tmp22) {
                      let tmp180Result = shouldDisableInteractiveComponents(colorString);
                      if (tmp180Result == null) {
                        tmp180Result = null;
                      }
                      tmp179 = tmp180Result;
                    }
                    obj35.roleColor = tmp179;
                    let processColorStringsResult = null;
                    if (hasEnhancedRoleColors) {
                      processColorStringsResult = null;
                      if (!tmp22) {
                        const tmp14Result109 = tmp14(tmp5[79]);
                        processColorStringsResult = tmp14Result109.processColorStrings(colorStrings);
                      }
                    }
                    obj35.roleColors = processColorStringsResult;
                    obj35.shouldShowRoleDot = "dot" === roleStyle;
                    obj35.shouldShowRoleOnName = "username" === roleStyle;
                    obj35.showLinkDecorations = alwaysShowLinkDecorations;
                    obj35.forceRevealSpoilers = !shouldObscureSpoiler;
                    if (tmp22) {
                      defaultUsernameColor2 = tmp6.defaultUsernameColor;
                    } else {
                      defaultUsernameColor2 = shouldDisableInteractiveComponents(colorString);
                      if (defaultUsernameColor2 == null) {
                        defaultUsernameColor2 = tmp6.defaultUsernameColor;
                      }
                    }
                    obj35.colorString = defaultUsernameColor2;
                    let tmp185;
                    if (!tmp22) {
                      tmp185 = roleIcon;
                    }
                    obj35.roleIcon = tmp185;
                    let connectionsRoleTag;
                    if (null != visibleConnectionsRole) {
                      const tmp14Result110 = tmp14(tmp5[80]);
                      connectionsRoleTag = tmp14Result110.createConnectionsRoleTag(visibleConnectionsRole);
                    }
                    obj35.connectionsRoleTag = connectionsRoleTag;
                    let tmp187;
                    if (!tmp22) {
                      tmp187 = stringResult3;
                    }
                    obj35.timestamp = tmp187;
                    let dateFormatResult1;
                    if (!tmp22) {
                      const tmp14Result111 = tmp14(tmp5[72]);
                      dateFormatResult1 = tmp14Result111.dateFormat(message.timestamp, "LLLL");
                    }
                    obj35.timestampTooltip = dateFormatResult1;
                    let timestampColor;
                    if (!tmp22) {
                      timestampColor = tmp6.timestampColor;
                    }
                    obj35.timestampColor = timestampColor;
                    let tmp190;
                    if (!tmp22) {
                      tmp190 = stringResult4;
                    }
                    obj35.timestampAccessibilityLabel = tmp190;
                    obj35.content = stringResult5;
                    obj35.isEditing = isEditing;
                    obj35.renderContentOnly = renderContentOnly;
                    let surveyIndication;
                    if (undefined !== pushFeedbackType) {
                      const tmp14Result112 = tmp14(tmp5[81]);
                      surveyIndication = tmp14Result112.createSurveyIndication(message, forcedTheme, pushFeedbackType);
                    }
                    obj35.surveyIndication = surveyIndication;
                    const tmp14Result113 = tmp14(tmp5[82]);
                    obj35.ephemeralIndication = tmp14Result113.createEphemeralIndication(message);
                    obj35.interactionStatus = interactionStatus;
                    let executedCommand;
                    if (renderExecutedCommands) {
                      const tmp14Result114 = tmp14(tmp5[83]);
                      executedCommand = tmp14Result114.createExecutedCommand(message, channel, roleStyle, forcedTheme, tmp6.defaultUsernameColor);
                    }
                    obj35.executedCommand = executedCommand;
                    let tmp198;
                    if (message2.components.length > 0) {
                      if (renderComponents) {
                        const obj37 = { message, guildId: guildId1, interaction, shouldDisableInteractiveComponents, shouldShowMedia: true === canShowImages, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors: tmp6 };
                        tmp198 = tmp4(tmp5[51])(obj37, message2.components);
                      }
                    }
                    obj35.components = tmp198;
                    let num12 = 0;
                    if (!renderContentOnly) {
                      num12 = tmp6.feedbackColor;
                    }
                    obj35.feedbackColor = num12;
                    let num13 = 0;
                    if (!renderContentOnly) {
                      num13 = tmp6.highlightColor;
                    }
                    obj35.highlightColor = num13;
                    obj35.embeds = tmp54;
                    if (renderGiftCode) {
                      const tmp14Result115 = tmp14(tmp5[84]);
                      giftCodeEmbed = tmp14Result115.createGiftCodeEmbed(message, forcedTheme);
                    } else {
                      giftCodeEmbed = [];
                    }
                    obj35.giftCodes = giftCodeEmbed;
                    if (renderCodedLinks) {
                      const tmp14Result116 = tmp14(tmp5[85]);
                      codedLinkEmbeds = tmp14Result116.createCodedLinkEmbeds(message, message2, channel, forcedTheme);
                    } else {
                      codedLinkEmbeds = [];
                    }
                    obj35.codedLinks = codedLinkEmbeds;
                    let activityInstanceEmbed;
                    if (renderActivityInstanceEmbed) {
                      const tmp14Result117 = tmp14(tmp5[86]);
                      activityInstanceEmbed = tmp14Result117.createActivityInstanceEmbed(message);
                    }
                    obj35.activityInstanceEmbed = activityInstanceEmbed;
                    let activityRichPresenceInviteEmbed;
                    if (renderActivityInviteEmbed) {
                      const tmp14Result118 = tmp14(tmp5[87]);
                      activityRichPresenceInviteEmbed = tmp14Result118.createActivityRichPresenceInviteEmbed(message, channel, forcedTheme);
                    }
                    obj35.activityRichPresenceInviteEmbed = activityRichPresenceInviteEmbed;
                    if (tmp11) {
                      if (renderAttachments) {
                        renderAttachments = 0 !== length || 0 !== length2;
                      }
                      if (!renderAttachments) {
                        renderAttachments = tmp47;
                      }
                      tmp11 = renderAttachments;
                    }
                    obj35.useAttachmentGridLayout = tmp11;
                    obj35.useAttachmentUploadPreview = null != uploaderFileForMessageId;
                    obj35.attachments = items3;
                    let num15 = 1;
                    if (null != uploaderFileForMessageId) {
                      num15 = 1;
                      if (message.state === constants2.SEND_FAILED) {
                        num15 = 0.2;
                      }
                    }
                    obj35.attachmentsOpacity = num15;
                    if (restrictedPreview) {
                      items5 = [];
                    } else {
                      const obj38 = { message: message2, animateStickersSetting: AnimateStickers.getSetting(), isUserInteracting: message.id === animatingStickerMessageId };
                      const tmp4Result13 = gifAutoPlay(tmp5[88]);
                      AnimateStickers = tmp14(tmp5[37]).AnimateStickers;
                      items5 = tmp4Result13(obj38);
                    }
                    obj35.stickers = items5;
                    if (renderCommunicationDisabled) {
                      renderCommunicationDisabled = result3;
                    }
                    obj35.communicationDisabled = renderCommunicationDisabled;
                    let isForumPostResult1;
                    if (channel != null) {
                      isForumPostResult1 = channel.isForumPost();
                    }
                    obj35.isFirstForumPostMessage = isForumPostResult1 && message.id === message.channel_id;
                    let isForumPostResult2;
                    if (channel != null) {
                      isForumPostResult2 = channel.isForumPost();
                    }
                    let tmp210;
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
                              const obj39 = { defaultReactionEmoji, customGuildEmoji: usableCustomEmojiById };
                              const tmp14Result119 = tmp14(tmp5[32]);
                              defaultReaction = tmp14Result119.createDefaultReaction(obj39);
                            }
                            const obj40 = { isFollowing: hasJoinedResult, hasReactions: 0 !== message.reactions.length, defaultReaction, showMediaPostSharePrompt: MediaPostSharePromptStore.shouldDisplayPrompt(channel.id) };
                            const tmp14Result120 = tmp14(tmp5[32]);
                            forumPostActions = tmp14Result120.createForumPostActions(obj40);
                          }
                        }
                        tmp210 = forumPostActions;
                      }
                    }
                    obj35.postActions = tmp210;
                    obj35.isCurrentUserMessageAuthor = message.author.id === id1;
                    obj35.usingGradientTheme = null != guildId1.gradientPreset;
                    const tmp14Result121 = tmp14(tmp5[30]);
                    obj35.swipeToReplyIconUrl = tmp14Result121.getAssetUriForEmbed(gifAutoPlay(tmp5[89]));
                    const tmp14Result122 = tmp14(tmp5[30]);
                    obj35.swipeToEditIconUrl = tmp14Result122.getAssetUriForEmbed(gifAutoPlay(tmp5[90]));
                    if (tmp8) {
                      const tmp14Result123 = tmp14(tmp5[91]);
                      postPreviewEmbeds = tmp14Result123.createPostPreviewEmbeds(message, roleStyle, useReducedMotion);
                    } else {
                      postPreviewEmbeds = [];
                    }
                    obj35.postPreviewEmbeds = postPreviewEmbeds;
                    const intl19 = tmp14(tmp5[29]).intl;
                    obj35.obscureLearnMoreLabel = intl19.string(tmp14(tmp5[29]).t["2aXnfa"]);
                    const tmp14Result124 = tmp14(tmp5[92]);
                    obj35.safetyPolicyNoticeEmbed = tmp14Result124.createSafetyPolicyNoticeEmbed(message);
                    obj35.pollData = tmp126;
                    obj35.sharedClientTheme = result4;
                    const tmp14Result125 = tmp14(tmp5[93]);
                    obj35.safetySystemNotificationEmbed = tmp14Result125.createSafetySystemNotificationEmbed(message);
                    const tmp14Result126 = tmp14(tmp5[94]);
                    const merged4 = Object.assign(tmp14Result126.createCtaButtons(message.id, message.channel_id, tmp6));
                    let embedBackgroundColor;
                    if (hasFlagResult) {
                      embedBackgroundColor = tmp6.embedBackgroundColor;
                    }
                    obj35.audioAttachmentBackgroundColor = embedBackgroundColor;
                    const tmp14Result127 = tmp14(tmp5[95]);
                    obj35.accessibilityActions = tmp14Result127.createMessageAccessibilityActions(message, channel);
                    obj35.clanTagGuildId = tmp132;
                    obj35.clanTag = tmp131;
                    obj35.clanBadgeUrl = tmp130;
                    obj35.lobbyAdditionalName = tmp138;
                    obj35.lobbyTagIconUrl = tmp137;
                    obj35.isFirst = isFirst;
                    obj35.gameApplicationId = id3;
                    let type;
                    if (channel != null) {
                      type = channel.type;
                    }
                    obj35.isAnnouncementChannel = type === constants4.GUILD_ANNOUNCEMENT;
                    const tmp14Result128 = tmp14(tmp5[96]);
                    obj35.displayNameStyles = tmp14Result128.createDisplayNameStylesMobile(message.author, member);
                    obj35.voiceChannelBadge = voiceChannelBadge;
                    return obj35;
                  }
                  defaultUsernameColor = tmp6.defaultUsernameColor;
                }
                nonce = message.nonce;
              }
              const tmp14Result129 = tmp14(tmp5[72]);
              stringResult4 = tmp14Result129.accessibilityLabelCalendarFormat(message.timestamp);
            }
            const tmp14Result130 = tmp14(tmp5[72]);
            stringResult3 = tmp14Result130.calendarFormat(message.timestamp, true, timestampHourCycle);
          }
        }
      }
      if (null != guildMemberAvatar) {
        if (null != guildId1) {
          const obj41 = { userId: author.id, avatar: guildMemberAvatar, guildId: guildId1 };
          const tmp4Result14 = gifAutoPlay(tmp5[56]);
          applicationIconSource = tmp4Result14.getGuildMemberAvatarSource(obj41, author);
        }
      }
      applicationIconSource = author.getAvatarSource(undefined);
    }
    parseMessageMarkupResult = { content: "Promise", hasSpoilerEmbeds: "paddingVertical", hasBailedAst: true };
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
