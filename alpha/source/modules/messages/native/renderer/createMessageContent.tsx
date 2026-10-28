// Module ID: 8301
// Function ID: 8302
// Name: createMessageContent
// Dependencies: [17, 5005, 2042, 5028, 6760, 8171, 8302, 4937, 8303, 7731, 4938, 7440, 1204, 502, 4856, 4916, 4878, 4946, 8305, 1389, 5009, 8166, 1084, 8306, 5640, 8307, 11, 8308, 6717, 1125, 8309, 8310, 8311, 6523, 1402, 8316, 4832, 8344, 6024, 8345, 8347, 6852, 8349, 8495, 8496, 8622, 7426, 8623, 8624, 8630, 8437, 8680, 6401, 1417, 1414, 8683, 1199, 10706, 10715, 10719, 10707, 10711, 8423, 14761, 1385, 14762, 4923, 7311, 14763, 14764, 4829, 12157, 14765, 8691, 7404, 587, 14766, 8352, 14768, 14769, 8487, 14772, 14773, 14790, 14811, 14813, 14827, 8356, 8357, 14828, 14831, 14832, 14833, 8358, 8354, 2]

// Module 8301 (createMessageContent)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import intl20 from "intl" /* 1125 */;
import useChannelName from "useChannelName" /* 5640 */;
import SpoilerChannelUtils from "SpoilerChannelUtils" /* 6717 */;
import ReferencedMessageStore2 from "ReferencedMessageStore" /* 7731 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 8166 */;
import GuildTagConstants from "GuildTagConstants" /* 8306 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8307 */;
import MessageCountUtils from "MessageCountUtils" /* 8308 */;
import renderer_EmbedUtils from "renderer/EmbedUtils" /* 8309 */;
import transformMessageComponentsDefault from "transformMessageComponents" /* 8630 */;
import AccessibilityStore_mod from "AccessibilityStore" /* 5005 */;
import ApplicationStore_mod from "ApplicationStore" /* 2042 */;
import ClientThemesBackgroundStore from "ClientThemesBackgroundStore" /* 5028 */;
import EmojiStore from "EmojiStore" /* 6760 */;
import GuildAutomodMessageStore from "GuildAutomodMessageStore" /* 8171 */;
import InteractionStore from "InteractionStore" /* 8302 */;
import LurkingStore from "LurkingStore" /* 4937 */;
import MediaPostSharePromptStore from "MediaPostSharePromptStore" /* 8303 */;
import JoinedThreadsStore from "JoinedThreadsStore" /* 4938 */;
import ThreadMessageStore from "ThreadMessageStore" /* 7440 */;
import ThemeStore from "ThemeStore" /* 1204 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import GuildMemberStore from "GuildMemberStore" /* 4916 */;
import GuildStore from "GuildStore" /* 4878 */;
import RelationshipStore from "RelationshipStore" /* 4946 */;
import UploadStore from "UploadStore" /* 8305 */;
import UserStore from "UserStore" /* 1389 */;
import MessageConstants from "MessageConstants" /* 5009 */;
import Constants from "Constants" /* 1084 */;
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
              intl5 = tmp13(1125).intl;
              obj4 = obj2;
            } else {
              const threadMetadata = channel1.threadMetadata;
              let archived;
              if (threadMetadata != null) {
                archived = threadMetadata.archived;
              }
              if (archived) {
                const obj3 = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, messagePreviewString: intl4.string(intl20.t.ZTo4HS), archived: true, archivedIconUrl: tmp13Result2.getAssetUriForEmbed(tmp18(8310)), backgroundColor };
                intl4 = tmp13(1125).intl;
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
                      const intl2 = tmp13(1125).intl;
                      const string = intl2.string;
                      const t = tmp13(1125).t;
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
                intl3 = tmp13(1125).intl;
                obj4 = obj8;
              }
            }
            obj = obj4;
          }
          return obj;
        }
        obj = { title: channelName, messageCountLabel: result, messageCountAccessibilityLabel: result1, messagePreviewString: intl.string(intl20.t.HYtNyE), archived: false, backgroundColor };
        intl = tmp13(1125).intl;
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
  let tmp15Result74;
  let tmp15Result77;
  let tmp15Result78;
  let tmp15Result79;
  let tmp169;
  let tmp170;
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
    const AnimateEmoji = message(shouldObscureSpoiler[36]).AnimateEmoji;
    animateEmoji = AnimateEmoji.getSetting();
  }
  if (forcedTheme == null) {
    forcedTheme = ThemeStore.theme;
  }
  const tmp5 = shouldObscureSpoiler;
  const tmp6 = gifAutoPlay(shouldObscureSpoiler[37])(forcedTheme, useAlternateEmbedColors);
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
  const obj4 = message(tmp5[38]);
  const hasEnhancedRoleColors = obj4.getHasEnhancedRoleColors(guildId1, id);
  if (messageForward == null) {
    const tmp15Result = tmp15(tmp5[39]);
    messageForward = tmp15Result.maybeCreateSingleForwardForMessage(message);
  }
  let message2 = message;
  if (null != messageForward) {
    message2 = messageForward.messageSnapshot.message;
  }
  let items = [];
  if (renderReactions) {
    const obj2 = { reactions: message.reactions, animateEmoji };
    items = tmp4(tmp5[40])(obj2);
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
  } else if (gifAutoPlay(tmp5[41])(message)) {
    let systemMessageContent;
    if (message.type === constants.THREAD_CREATED) {
      const obj7 = { threadEmbed: createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme) };
      const obj8 = { message, theme: forcedTheme, reactions: items, roleStyle };
      const tmp15Result64 = tmp15(tmp5[42]);
      const merged2 = Object.assign(tmp15Result64.createSystemMessageContent(obj8));
      systemMessageContent = obj7;
    } else {
      const obj9 = { message, theme: forcedTheme, reactions: items, roleStyle, isForumPost: isForumPostResult };
      isForumPostResult = undefined;
      const createSystemMessageContent = tmp15(tmp5[42]).createSystemMessageContent;
      tmp15(tmp5[42]);
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
    const isMessageNewerThanImprovedMarkdownEpoch = tmp15(tmp5[43]).isMessageNewerThanImprovedMarkdownEpoch;
    tmp15(tmp5[43]);
    if (timestamp == null) {
      timestamp = message.timestamp;
    }
    const result = isMessageNewerThanImprovedMarkdownEpoch(timestamp.valueOf());
    if (null != message2.content) {
      let parseMessageMarkupResult;
      let applicationIconSource;
      if ("" !== message2.content) {
        const parseMessageMarkup = tmp15(tmp5[44]).parseMessageMarkup;
        const tmp15Result67 = tmp15(tmp5[44]);
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
        stringResult = tmp4(tmp5[45])(content);
      }
      const tmp15Result68 = tmp15(tmp5[46]);
      enabledHarmTypesForMessage = tmp15Result68.getEnabledHarmTypesForMessage(message);
      const tmp15Result69 = tmp15(tmp5[47]);
      result1 = tmp15Result69.shouldAgeVerifyForExplicitMedia();
      const ViewImageDescriptions = tmp15(tmp5[36]).ViewImageDescriptions;
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
        const tmp4Result8 = gifAutoPlay(tmp5[48]);
        if (hasSpoilerEmbeds) {
          hasSpoilerEmbeds = shouldObscureSpoiler;
        }
        tmp4Result1Result = tmp4Result8(obj10);
      }
      const obj11 = { message, isSystemDM, channel, colors: tmp6 };
      ({ tagText, tagAccessibilityLabel, tagVerified, tagTextColor, tagBackgroundColor, tagType, tagIconUrl, opTagText, opTagTextColor, opTagBackgroundColor } = gifAutoPlay(tmp5[50])(obj11));
      gifAutoPlay(tmp5[50])(obj11);
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
        items1.push(gifAutoPlay(tmp5[51])(obj13));
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
        const tmp15Result70 = tmp15(tmp5[51]);
        push(tmp15Result70.createAutomodBlockedMessageEmbed(obj14));
        tmp55 = items2;
      }
      const tmp15Result71 = tmp15(tmp5[52]);
      const userAuthor = tmp15Result71.getUserAuthor(message.author, channel);
      ({ guildMemberAvatar, guildMemberAvatarDecoration, iconRoleId } = userAuthor);
      const ensureAvatarSource = tmp15(tmp5[53]).ensureAvatarSource;
      tmp15(tmp5[53]);
      if (message.isInteractionPlaceholder()) {
        if (null == message.author.avatar) {
          if (null == guildMemberAvatar) {
            let roleIcon;
            let tmp77;
            let tmp100;
            let items3;
            const application = message.application;
            let icon;
            if (application != null) {
              icon = application.icon;
            }
            if (null != icon) {
              const obj15 = { id: message.application.id, icon: message.application.icon, bot: message.application.bot };
              const tmp4Result9 = gifAutoPlay(tmp5[54]);
              applicationIconSource = tmp4Result9.getApplicationIconSource(obj15);
            }
            const ensureAvatarSourceResult = ensureAvatarSource(applicationIconSource);
            const getAvatarDecorationURL = tmp15(tmp5[54]).getAvatarDecorationURL;
            tmp15(tmp5[54]);
            if (null == guildMemberAvatarDecoration) {
              guildMemberAvatarDecoration = author.avatarDecoration;
            }
            const obj16 = { avatarDecoration: guildMemberAvatarDecoration, size: tmp15Result74.getDecorationSizeForAvatarSize(tmp15(tmp5[56]).AvatarSizes.NORMAL) };
            let member = null;
            tmp15Result74 = tmp15(tmp5[55]);
            const avatarDecorationURL = getAvatarDecorationURL(obj16);
            if (null != guildId1) {
              member = GuildMemberStore.getMember(guildId1, author.id);
            }
            let prop;
            const getActiveLeaderboardWinnerData = tmp15(tmp5[57]).getActiveLeaderboardWinnerData;
            tmp15(tmp5[57]);
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
            const getActiveLeaderboardLeaderData = tmp15(tmp5[57]).getActiveLeaderboardLeaderData;
            tmp15(tmp5[57]);
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
                tmp4Result10 = tmp4(tmp5[58]);
              } else {
                tmp4Result10 = tmp4(tmp5[59]);
              }
              const obj17 = { source: tmp4Result10, name: LEADERBOARD_WINNER_ROLE_NAME_PREFIX + tmp15Result77.encodeWinnerData(tmp69), size: 18, alt: tmp15Result78.getLeaderboardWinnerBadgeText(tmp69) };
              LEADERBOARD_WINNER_ROLE_NAME_PREFIX = tmp15(tmp5[60]).LEADERBOARD_WINNER_ROLE_NAME_PREFIX;
              tmp15Result77 = tmp15(tmp5[60]);
              roleIcon = obj17;
              tmp15Result78 = tmp15(tmp5[60]);
            } else if (null != activeLeaderboardLeaderData) {
              const obj18 = { source: gifAutoPlay(tmp5[61]), name: LEADERBOARD_LEADER_ROLE_NAME_PREFIX + num, size: 18, alt: tmp15Result79.getLeaderboardLeaderBadgeText(activeLeaderboardLeaderData) };
              num = activeLeaderboardLeaderData.currentLeaderStat;
              LEADERBOARD_LEADER_ROLE_NAME_PREFIX = tmp15(tmp5[60]).LEADERBOARD_LEADER_ROLE_NAME_PREFIX;
              if (num == null) {
                num = 0;
              }
              roleIcon = obj18;
              tmp15Result79 = tmp15(tmp5[60]);
            } else if (null != iconRoleId) {
              if (null != guildId1) {
                const obj19 = { guildId: guildId1, roleId: iconRoleId, size: 18 };
                const tmp15Result80 = tmp15(tmp5[62]);
                roleIcon = tmp15Result80.getRoleIcon(obj19);
              }
            }
            if (message.hasFlag(constants3.SOURCE_MESSAGE_DELETED)) {
              const intl = tmp15(tmp5[29]).intl;
              stringResult = intl.string(tmp15(tmp5[29]).t.JOtgSw);
            }
            const tmp15Result81 = tmp15(tmp5[52]);
            const messageAuthor = tmp15Result81.getMessageAuthor(message);
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
                  const tmp15Result82 = tmp15(tmp5[39]);
                  const result2 = tmp15Result82.maybeCreateSingleForwardForMessage(message3);
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
                        const tmp15Result83 = tmp15(tmp5[52]);
                        const messageAuthor1 = tmp15Result83.getMessageAuthor(message3);
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
                        if (gifAutoPlay(tmp5[63])(message, message3)) {
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
                        const tmp15Result84 = tmp15(tmp5[33]);
                        messageStickers = tmp15Result84.getMessageStickers(message5);
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
                        const tmp15Result85 = tmp15(tmp5[34]);
                        if (tmp15Result85.hasFlag(message5.flags, constants3.IS_VOICE_MESSAGE)) {
                          const intl7 = tmp15(tmp5[29]).intl;
                          stringResult1 = intl7.string(tmp15(tmp5[29]).t["6bhHrc"]);
                        } else if (message5.type === constants.POLL_RESULT) {
                          const tmp15Result86 = tmp15(tmp5[35]);
                          stringResult1 = tmp15Result86.getPollResultsReplyPreviewMobile(message5);
                        } else {
                          const tmp15Result87 = tmp15(tmp5[34]);
                          if (tmp15Result87.hasFlag(message5.flags, constants3.IS_COMPONENTS_V2)) {
                            const intl6 = tmp15(tmp5[29]).intl;
                            stringResult1 = intl6.string(tmp15(tmp5[29]).t.Xxm5i3);
                          } else if ("" === message5.content) {
                            const intl5 = tmp15(tmp5[29]).intl;
                            stringResult1 = intl5.string(tmp15(tmp5[29]).t.JAKsM8);
                          } else {
                            stringResult1 = null;
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
                  const tmp15Result88 = tmp15(tmp5[64]);
                  tmp15Result88.assertNever(messageByReference1);
                }
              }
            }
            if (renderThreadEmbeds) {
              tmp100 = createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme);
            }
            const tmp15Result89 = tmp15(tmp5[65]);
            const interactionStatus = tmp15Result89.createInteractionStatus(message, interaction);
            const useReducedMotion = AccessibilityStore.useReducedMotion;
            let parent_id;
            const tmp15Result90 = tmp15(tmp5[66]);
            const result3 = tmp15Result90.isMemberCommunicationDisabled(member);
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
            const tmp15Result91 = tmp15(tmp5[67]);
            const visibleConnectionsRole = tmp15Result91.getVisibleConnectionsRole(obj29);
            let tmp115 = tmp48;
            if (null != uploaderFileForMessageId) {
              tmp115 = 0 === message.attachments.length;
            }
            if (tmp115) {
              tmp115 = null != uploaderFileForMessageId;
            }
            if (tmp115) {
              const obj30 = { uploaderFile: uploaderFileForMessageId, isFailedMessage: message.state === constants2.SEND_FAILED, shouldInlineAttachmentMedia: tmp12 };
              items3 = tmp4(tmp5[68])(obj30);
            } else {
              items3 = [];
              if (renderAttachments) {
                const obj31 = { attachments: message2.attachments, uploadAttachments: obj12.getUploadAttachments(message.nonce), shouldInlineAttachmentMedia: tmp12, gifAutoPlay, viewImageDescriptions: setting, useReducedMotion, shouldObscureSpoiler, themedBackgroundColor: tmp6.embedBackgroundColor, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, colors: tmp6 };
                const tmp4Result11 = gifAutoPlay(tmp5[69]);
                items3 = tmp4Result11(obj31);
              }
            }
            if (tmp115) {
              let stringResult2;
              if (message.state !== constants2.SEND_FAILED) {
                const intl13 = tmp15(tmp5[29]).intl;
                stringResult2 = intl13.string(tmp15(tmp5[29]).t["yXY+5J"]);
              }
              if (tmp115) {
                let stringResult3;
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
                  const intl14 = tmp15(tmp5[29]).intl;
                  stringResult3 = intl14.string(tmp15(tmp5[29]).t["yXY+5J"]);
                }
                let stringResult4 = stringResult;
                const id1 = AuthenticationStore.getId();
                if (message.isUnsupported) {
                  const intl15 = tmp15(tmp5[29]).intl;
                  stringResult4 = intl15.string(tmp15(tmp5[29]).t.sWi5EU);
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
                  const tmp15Result92 = tmp15(tmp5[35]);
                  stringResult4 = tmp15Result92.getPollReplyPreview(message);
                }
                if (renderPolls) {
                  const obj32 = { theme: forcedTheme, animateEmoji };
                  tmp126 = gifAutoPlay(tmp5[71])(message, undefined, obj32);
                }
                if (renderSharedClientTheme) {
                  const tmp15Result93 = tmp15(tmp5[72]);
                  result4 = tmp15Result93.formatSharedClientThemeData(message, ensureAvatarSourceResult, nick);
                }
                const shouldDisplayGuildTag = tmp15(tmp5[73]).shouldDisplayGuildTag;
                const id2 = author.id;
                tmp15(tmp5[73]);
                const tmp129 = guildId1;
                if (shouldDisplayGuildTag(id2, tmp129)) {
                  const tmp15Result95 = tmp15(tmp5[73]);
                  const userPrimaryGuild = tmp15Result95.getUserPrimaryGuild(author.primaryGuild);
                  let guildTagBadgeUrl;
                  ({ guildId, tag } = userPrimaryGuild);
                  if (null != userPrimaryGuild.guildId) {
                    const tmp15Result96 = tmp15(tmp5[73]);
                    guildTagBadgeUrl = tmp15Result96.getGuildTagBadgeUrl(userPrimaryGuild.guildId, userPrimaryGuild.badge, GuildTagBadgeSize.SIZE_12);
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
                        const obj33 = { id: null, icon: null, size: 16 };
                        ({ id: obj61.id, icon: obj61.icon } = application1);
                        const tmp4Result12 = gifAutoPlay(tmp5[54]);
                        applicationIconURL = tmp4Result12.getApplicationIconURL(obj33);
                      }
                      tmp137 = applicationIconURL;
                      tmp138 = additionalName;
                    }
                  }
                }
                let tmp144 = message2;
                const hasFlag = tmp15(tmp5[34]).hasFlag;
                tmp15(tmp5[34]);
                if (message2 == null) {
                  tmp144 = message;
                }
                let str8 = message.applicationId;
                const getApplication = ApplicationStore.getApplication;
                const hasFlagResult = hasFlag(tmp144.flags, constants3.IS_VOICE_MESSAGE);
                if (str8 == null) {
                  str8 = "";
                }
                const application2 = getApplication(str8);
                let hasFlagResult1 = null != application2;
                if (hasFlagResult1) {
                  const tmp15Result98 = tmp15(tmp5[34]);
                  hasFlagResult1 = tmp15Result98.hasFlag(message.flags, tmp75.SENT_BY_SOCIAL_LAYER_INTEGRATION);
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
                    const tmp15Result99 = tmp15(tmp5[74]);
                    if (tmp15Result99.isGuildOfficialMessagesEnabled(guild, "createMessageContent")) {
                      let officialMessageColor = guild.officialMessageColor;
                      if (officialMessageColor == null) {
                        officialMessageColor = closure_24;
                      }
                      const officialMessageStyle = tmp110.officialMessageStyle;
                      const tmp15Result100 = tmp15(tmp5[74]);
                      const result5 = tmp15Result100.showGuildOfficialMessageGradient(officialMessageStyle);
                      let tmp155;
                      if (result5) {
                        tmp155 = officialMessageColor | closure_26;
                      }
                      const tmp15Result101 = tmp15(tmp5[74]);
                      if (tmp15Result101.showGuildOfficialMessageTextColor(officialMessageStyle)) {
                        const internal = tmp4(tmp5[75]).internal;
                        const semanticColor = internal.resolveSemanticColor(forcedTheme, tmp4(tmp5[75]).colors.BACKGROUND_BASE_LOWER);
                        let num8 = 1;
                        if (AccessibilityStore.desaturateUserColors) {
                          num8 = tmp110.saturation;
                        }
                        let num9 = 0;
                        const getAccessibleGuildOfficialTextColor = tmp15(tmp5[74]).getAccessibleGuildOfficialTextColor;
                        const tmp15Result102 = tmp15(tmp5[74]);
                        if (result5) {
                          num9 = closure_25;
                        }
                        const accessibleGuildOfficialTextColor = getAccessibleGuildOfficialTextColor(officialMessageColor, semanticColor, num8, num9);
                        accessibleGuildOfficialTextColor.num();
                      }
                      const push2 = items4.push;
                      const intl16 = tmp15(tmp5[29]).intl;
                      push2(intl16.string(tmp15(tmp5[29]).t.GzDTxY));
                      tmp151 = tmp155;
                    }
                  }
                }
                let obj67 = message2;
                if (message2 == null) {
                  obj67 = message;
                }
                if (obj67.hasFlag(constants3.SUPPRESS_NOTIFICATIONS)) {
                  const push3 = items4.push;
                  const intl17 = tmp15(tmp5[29]).intl;
                  push3(intl17.string(tmp15(tmp5[29]).t.t0MA8g));
                }
                if (items4.length > 0) {
                  joined = items4.join(", ");
                }
                const obj34 = { id: null, channelId: null, guildId: tmp169, flags: tmp170.flags, type: message.type, nonce: null, state: null, reactions: null, referencedMessage: null, threadEmbed: null, forwardInfo: null, mentioned: null, edited: null, editedTimestamp: null, editedColor: null, textColor: null, officialMessageColor: null, linkColor: null, tagText: null, tagAccessibilityLabel: null, tagVerified: null, tagTextColor: null, tagBackgroundColor: null, tagType: null, tagIconUrl: null, opTagText: null, opTagTextColor: null, opTagBackgroundColor: null, stateAccessibilityLabel: null, constrainedWidth: null, gifAutoPlay: null, animateEmoji: null, username: null, avatarURL: null, avatarDecorationURL: null, authorId: null, usernameColor: null, roleColor: null, roleColors: null, shouldShowRoleDot: null, shouldShowRoleOnName: null, showLinkDecorations: null, forceRevealSpoilers: null, colorString: null, roleIcon: null, connectionsRoleTag: null, timestamp: null, timestampTooltip: null, timestampColor: null, timestampAccessibilityLabel: null, content: null, isEditing: null, renderContentOnly: null, surveyIndication: null, ephemeralIndication: null, interactionStatus: null, executedCommand: null, components: null, feedbackColor: null, highlightColor: null, embeds: null, giftCodes: null, codedLinks: null, activityInstanceEmbed: null, activityRichPresenceInviteEmbed: null, useAttachmentGridLayout: null, useAttachmentUploadPreview: null, attachments: null, attachmentsOpacity: null, stickers: null, communicationDisabled: null, isFirstForumPostMessage: null, postActions: null, isCurrentUserMessageAuthor: null, usingGradientTheme: null, swipeToReplyIconUrl: null, swipeToEditIconUrl: null, postPreviewEmbeds: null, obscureLearnMoreLabel: null, safetyPolicyNoticeEmbed: null, pollData: null, sharedClientTheme: null, safetySystemNotificationEmbed: null };
                ({ id: obj69.id, channel_id: obj69.channelId } = message);
                const tmp15Result103 = tmp15(tmp5[76]);
                const voiceChannelBadge = tmp15Result103.createVoiceChannelBadge(message.author.id, guildId1);
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
                  obj34.nonce = nonce;
                  obj34.state = message.state;
                  obj34.reactions = items;
                  let tmp172;
                  if (!renderContentOnly) {
                    tmp172 = tmp77;
                  }
                  obj34.referencedMessage = tmp172;
                  obj34.threadEmbed = tmp100;
                  let forwardInfo;
                  if (null != messageForward) {
                    forwardInfo = messageForward.getForwardInfo();
                  }
                  obj34.forwardInfo = forwardInfo;
                  obj34.mentioned = !ignoreMentioned && message.mentioned;
                  let str12 = "";
                  if (message.isEdited()) {
                    str12 = "";
                    if (!renderContentOnly) {
                      const intl18 = tmp15(tmp5[29]).intl;
                      str12 = intl18.string(tmp15(tmp5[29]).t.C8sXIM);
                    }
                  }
                  obj34.edited = str12;
                  let dateFormatResult;
                  if (message.isEdited()) {
                    if (!renderContentOnly) {
                      if (null != message.editedTimestamp) {
                        const tmp15Result104 = tmp15(tmp5[70]);
                        dateFormatResult = tmp15Result104.dateFormat(message.editedTimestamp, "LLLL");
                      }
                    }
                  }
                  obj34.editedTimestamp = dateFormatResult;
                  obj34.editedColor = tmp6.editedColor;
                  if (message.isUnsupported) {
                    textColor = tmp6.unsupportedColor;
                  } else if (null != tmp150) {
                    textColor = 4278190080 | tmp150;
                  } else {
                    textColor = tmp6.textColor;
                  }
                  obj34.textColor = textColor;
                  obj34.officialMessageColor = tmp151;
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
                  let tmp176 = null;
                  if (!tmp23) {
                    tmp176 = avatarDecorationURL;
                  }
                  obj34.avatarDecorationURL = tmp176;
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
                    let tmp179 = null;
                    if (!tmp23) {
                      let tmp180Result = shouldDisableInteractiveComponents(colorString);
                      if (tmp180Result == null) {
                        tmp180Result = null;
                      }
                      tmp179 = tmp180Result;
                    }
                    obj34.roleColor = tmp179;
                    let processColorStringsResult = null;
                    if (hasEnhancedRoleColors) {
                      processColorStringsResult = null;
                      if (!tmp23) {
                        const tmp15Result105 = tmp15(tmp5[77]);
                        processColorStringsResult = tmp15Result105.processColorStrings(colorStrings);
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
                    let tmp185;
                    if (!tmp23) {
                      tmp185 = roleIcon;
                    }
                    obj34.roleIcon = tmp185;
                    let connectionsRoleTag;
                    if (null != visibleConnectionsRole) {
                      const tmp15Result106 = tmp15(tmp5[78]);
                      connectionsRoleTag = tmp15Result106.createConnectionsRoleTag(visibleConnectionsRole);
                    }
                    obj34.connectionsRoleTag = connectionsRoleTag;
                    let tmp187;
                    if (!tmp23) {
                      tmp187 = stringResult2;
                    }
                    obj34.timestamp = tmp187;
                    let dateFormatResult1;
                    if (!tmp23) {
                      const tmp15Result107 = tmp15(tmp5[70]);
                      dateFormatResult1 = tmp15Result107.dateFormat(message.timestamp, "LLLL");
                    }
                    obj34.timestampTooltip = dateFormatResult1;
                    let timestampColor;
                    if (!tmp23) {
                      timestampColor = tmp6.timestampColor;
                    }
                    obj34.timestampColor = timestampColor;
                    let tmp190;
                    if (!tmp23) {
                      tmp190 = stringResult3;
                    }
                    obj34.timestampAccessibilityLabel = tmp190;
                    obj34.content = stringResult4;
                    obj34.isEditing = isEditing;
                    obj34.renderContentOnly = renderContentOnly;
                    let surveyIndication;
                    if (undefined !== pushFeedbackType) {
                      const tmp15Result108 = tmp15(tmp5[79]);
                      surveyIndication = tmp15Result108.createSurveyIndication(message, forcedTheme, pushFeedbackType);
                    }
                    obj34.surveyIndication = surveyIndication;
                    const tmp15Result109 = tmp15(tmp5[80]);
                    obj34.ephemeralIndication = tmp15Result109.createEphemeralIndication(message);
                    obj34.interactionStatus = interactionStatus;
                    let executedCommand;
                    if (renderExecutedCommands) {
                      const tmp15Result110 = tmp15(tmp5[81]);
                      executedCommand = tmp15Result110.createExecutedCommand(message, channel, roleStyle, tmp8, tmp6.defaultUsernameColor);
                    }
                    obj34.executedCommand = executedCommand;
                    let tmp198;
                    if (message2.components.length > 0) {
                      if (renderComponents) {
                        const obj35 = { message, guildId: guildId1, interaction, shouldDisableInteractiveComponents, shouldShowMedia: true === canShowImages, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors: tmp6 };
                        tmp198 = tmp4(tmp5[49])(obj35, message2.components);
                      }
                    }
                    obj34.components = tmp198;
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
                      const tmp15Result111 = tmp15(tmp5[82]);
                      giftCodeEmbed = tmp15Result111.createGiftCodeEmbed(message, forcedTheme);
                    } else {
                      giftCodeEmbed = [];
                    }
                    obj34.giftCodes = giftCodeEmbed;
                    if (renderCodedLinks) {
                      const tmp15Result112 = tmp15(tmp5[83]);
                      codedLinkEmbeds = tmp15Result112.createCodedLinkEmbeds(message, message2, channel, tmp8);
                    } else {
                      codedLinkEmbeds = [];
                    }
                    obj34.codedLinks = codedLinkEmbeds;
                    let activityInstanceEmbed;
                    if (renderActivityInstanceEmbed) {
                      const tmp15Result113 = tmp15(tmp5[84]);
                      activityInstanceEmbed = tmp15Result113.createActivityInstanceEmbed(message);
                    }
                    obj34.activityInstanceEmbed = activityInstanceEmbed;
                    let activityRichPresenceInviteEmbed;
                    if (renderActivityInviteEmbed) {
                      const tmp15Result114 = tmp15(tmp5[85]);
                      activityRichPresenceInviteEmbed = tmp15Result114.createActivityRichPresenceInviteEmbed(message, channel, forcedTheme);
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
                      const tmp4Result13 = gifAutoPlay(tmp5[86]);
                      AnimateStickers = tmp15(tmp5[36]).AnimateStickers;
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
                              const obj38 = { defaultReactionEmoji, customGuildEmoji: usableCustomEmojiById };
                              const tmp15Result115 = tmp15(tmp5[32]);
                              defaultReaction = tmp15Result115.createDefaultReaction(obj38);
                            }
                            const obj39 = { isFollowing: hasJoinedResult, hasReactions: 0 !== message.reactions.length, defaultReaction, showMediaPostSharePrompt: MediaPostSharePromptStore.shouldDisplayPrompt(channel.id) };
                            const tmp15Result116 = tmp15(tmp5[32]);
                            forumPostActions = tmp15Result116.createForumPostActions(obj39);
                          }
                        }
                        tmp210 = forumPostActions;
                      }
                    }
                    obj34.postActions = tmp210;
                    obj34.isCurrentUserMessageAuthor = message.author.id === id1;
                    obj34.usingGradientTheme = null != guildId1.gradientPreset;
                    const tmp15Result117 = tmp15(tmp5[30]);
                    obj34.swipeToReplyIconUrl = tmp15Result117.getAssetUriForEmbed(gifAutoPlay(tmp5[87]));
                    const tmp15Result118 = tmp15(tmp5[30]);
                    obj34.swipeToEditIconUrl = tmp15Result118.getAssetUriForEmbed(gifAutoPlay(tmp5[88]));
                    if (tmp9) {
                      const tmp15Result119 = tmp15(tmp5[89]);
                      postPreviewEmbeds = tmp15Result119.createPostPreviewEmbeds(message, roleStyle, useReducedMotion);
                    } else {
                      postPreviewEmbeds = [];
                    }
                    obj34.postPreviewEmbeds = postPreviewEmbeds;
                    const intl19 = tmp15(tmp5[29]).intl;
                    obj34.obscureLearnMoreLabel = intl19.string(tmp15(tmp5[29]).t["2aXnfa"]);
                    const tmp15Result120 = tmp15(tmp5[90]);
                    obj34.safetyPolicyNoticeEmbed = tmp15Result120.createSafetyPolicyNoticeEmbed(message);
                    obj34.pollData = tmp126;
                    obj34.sharedClientTheme = result4;
                    const tmp15Result121 = tmp15(tmp5[91]);
                    obj34.safetySystemNotificationEmbed = tmp15Result121.createSafetySystemNotificationEmbed(message);
                    const tmp15Result122 = tmp15(tmp5[92]);
                    const merged4 = Object.assign(tmp15Result122.createCtaButtons(message.id, message.channel_id, tmp6));
                    let embedBackgroundColor;
                    if (hasFlagResult) {
                      embedBackgroundColor = tmp6.embedBackgroundColor;
                    }
                    obj34.audioAttachmentBackgroundColor = embedBackgroundColor;
                    const tmp15Result123 = tmp15(tmp5[93]);
                    obj34.accessibilityActions = tmp15Result123.createMessageAccessibilityActions(message, channel);
                    obj34.clanTagGuildId = tmp132;
                    obj34.clanTag = tmp131;
                    obj34.clanBadgeUrl = tmp130;
                    obj34.lobbyAdditionalName = tmp138;
                    obj34.lobbyTagIconUrl = tmp137;
                    obj34.isFirst = isFirst;
                    obj34.gameApplicationId = id3;
                    let type;
                    if (channel != null) {
                      type = channel.type;
                    }
                    obj34.isAnnouncementChannel = type === constants4.GUILD_ANNOUNCEMENT;
                    const tmp15Result124 = tmp15(tmp5[94]);
                    obj34.displayNameStyles = tmp15Result124.createDisplayNameStylesMobile(message.author, member);
                    obj34.voiceChannelBadge = voiceChannelBadge;
                    return obj34;
                  }
                  defaultUsernameColor = tmp6.defaultUsernameColor;
                }
                nonce = message.nonce;
              }
              const tmp15Result125 = tmp15(tmp5[70]);
              stringResult3 = tmp15Result125.accessibilityLabelCalendarFormat(message.timestamp);
            }
            const tmp15Result126 = tmp15(tmp5[70]);
            stringResult2 = tmp15Result126.calendarFormat(message.timestamp, true, timestampHourCycle);
          }
        }
      }
      if (null != guildMemberAvatar) {
        if (null != guildId1) {
          const obj40 = { userId: author.id, avatar: guildMemberAvatar, guildId: guildId1 };
          const tmp4Result14 = gifAutoPlay(tmp5[54]);
          applicationIconSource = tmp4Result14.getGuildMemberAvatarSource(obj40, author);
        }
      }
      applicationIconSource = author.getAvatarSource(undefined);
    }
    parseMessageMarkupResult = { content: "Set", hasSpoilerEmbeds: "none", hasBailedAst: "URL" };
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
