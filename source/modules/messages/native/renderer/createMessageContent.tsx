// Module ID: 7717
// Function ID: 61388
// Name: createThreadEmbed
// Dependencies: [27, 4122, 4167, 3942, 4991, 7716, 7718, 3759, 7719, 6829, 3760, 5683, 1278, 1194, 1348, 1917, 1838, 3767, 7079, 1849, 4123, 7711, 653, 7721, 4320, 7722, 21, 7723, 5723, 1212, 7724, 7725, 7726, 4466, 1360, 7002, 7731, 4571, 7732, 7734, 5651, 7736, 7857, 7858, 7877, 5670, 6834, 3803, 7878, 7883, 7809, 7924, 4360, 1395, 1392, 7927, 1273, 5486, 7982, 1327, 7983, 3747, 4939, 7984, 7985, 3800, 7988, 7996, 7934, 5648, 689, 7997, 7739, 7999, 8000, 7854, 8003, 8236, 12308, 12327, 12329, 12343, 7742, 7743, 12344, 12347, 12348, 12349, 7744, 12350, 2]

// Module 7717 (createThreadEmbed)
import { processColor } from "shouldUseOldMaxMessageCount";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import { ReferencedMessageState } from "_isNativeReflectConstruct";
import closure_14 from "_isNativeReflectConstruct";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import closure_17 from "_isNativeReflectConstruct";
import closure_18 from "_isNativeReflectConstruct";
import closure_19 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_21 from "_isNativeReflectConstruct";
import closure_22 from "_isNativeReflectConstruct";
import closure_23 from "_isNativeReflectConstruct";
import MESSAGE_GROUP_SPACING from "MESSAGE_GROUP_SPACING";
import { ReferencedMessageRowState } from "Changeset";
import ME from "ME";
import { GuildTagBadgeSize } from "items";

let closure_24;
let closure_25;
let closure_26;
let closure_28;
let closure_29;
let closure_30;
let closure_31;
function createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme) {
  if (!isInlineReplyPreview) {
    if (message.hasFlag(closure_30.HAS_THREAD)) {
      if (null != channel1) {
        let channelName = require(4320) /* computeDefaultGroupDmNameFromUserIds */.computeChannelName(channel1, closure_23, closure_21);
        const backgroundColor = importDefault(7722)(forcedTheme).baseColors.backgroundColor;
        const obj11 = require(4320) /* computeDefaultGroupDmNameFromUserIds */;
        const mostRecentMessage = store3.getMostRecentMessage(importDefault(21).castMessageIdAsChannelId(message.id));
        const obj12 = importDefault(21);
        const count = store3.getCount(importDefault(21).castMessageIdAsChannelId(message.id));
        const obj13 = importDefault(21);
        let intl5 = require(7723) /* shouldUseOldMaxMessageCount */.formatMobileMessageCountLabel(count, channel1.id);
        const obj14 = require(7723) /* shouldUseOldMaxMessageCount */;
        let string2 = require(7723) /* shouldUseOldMaxMessageCount */.formatMessageCountLabel(count, channel1.id);
        if (null != count) {
          if (count > 0) {
            let obj1 = require(5723) /* getSpoilerGatingChannelId */;
            if (obj1.isChannelSpoilerGated(channel1)) {
              let obj = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2 };
              channelName = require;
              intl5 = require(1212) /* getSystemLocale */.intl;
              string2 = intl5.string;
              obj.messagePreviewString = string2(require(1212) /* getSystemLocale */.t["5uaI/7"]);
              obj.archived = false;
              obj.backgroundColor = backgroundColor;
              obj1 = obj;
            } else {
              const threadMetadata = channel1.threadMetadata;
              if (null != threadMetadata) {
                if (threadMetadata.archived) {
                  obj = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2 };
                  const intl4 = require(1212) /* getSystemLocale */.intl;
                  obj.messagePreviewString = intl4.string(require(1212) /* getSystemLocale */.t.ZTo4HS);
                  obj.archived = true;
                  obj.archivedIconUrl = require(7724) /* frozen */.getAssetUriForEmbed(importDefault(7725));
                  obj.backgroundColor = backgroundColor;
                  obj1 = obj;
                  const obj9 = require(7724) /* frozen */;
                }
              }
              if (null != mostRecentMessage) {
                if (mostRecentMessage.type !== constants.CHANNEL_NAME_CHANGE) {
                  if (mostRecentMessage.type !== constants.THREAD_STARTER_MESSAGE) {
                    if (!mostRecentMessage.blocked) {
                      if (!mostRecentMessage.ignored) {
                        obj1 = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2 };
                        const obj2 = { state: ReferencedMessageRowState.LOADED };
                        const obj3 = { message: mostRecentMessage, roleStyle, options, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true };
                        obj2.message = createMessageContent(obj3);
                        obj1.referencedMessage = obj2;
                        obj1.backgroundColor = backgroundColor;
                      }
                    }
                    const obj4 = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2 };
                    const intl2 = require(1212) /* getSystemLocale */.intl;
                    const string = intl2.string;
                    let XAkOo2 = require(1212) /* getSystemLocale */.t;
                    if (mostRecentMessage.blocked) {
                      XAkOo2 = XAkOo2.XAkOo2;
                      let stringResult = string(XAkOo2);
                    } else {
                      stringResult = string(XAkOo2["G7p6v/"]);
                    }
                    obj4.messagePreviewString = stringResult;
                    obj4.archived = false;
                    obj4.backgroundColor = backgroundColor;
                  }
                }
              }
              const obj5 = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2 };
              const intl3 = require(1212) /* getSystemLocale */.intl;
              obj5.messagePreviewString = intl3.string(require(1212) /* getSystemLocale */.t.ZTo4HS);
              obj5.archived = false;
              obj5.backgroundColor = backgroundColor;
              obj1 = obj5;
            }
          }
        }
        obj = { title: channelName, messageCountLabel: intl5, messageCountAccessibilityLabel: string2 };
        const intl = require(1212) /* getSystemLocale */.intl;
        obj.messagePreviewString = intl.string(require(1212) /* getSystemLocale */.t.HYtNyE);
        obj.archived = false;
        obj.backgroundColor = backgroundColor;
        return obj;
      }
    }
  }
}
function getForumPostActions(message, channel) {
  if (message.id === message.channel_id) {
    const guildId = channel.getGuildId();
    let defaultReaction;
    if (0 === message.reactions.length) {
      channel = store4.getChannel(channel.parent_id);
      let defaultReactionEmoji;
      if (null != channel) {
        defaultReactionEmoji = channel.defaultReactionEmoji;
      }
      let emojiId;
      if (null != defaultReactionEmoji) {
        emojiId = defaultReactionEmoji.emojiId;
      }
      let usableCustomEmojiById = null;
      if (null != emojiId) {
        usableCustomEmojiById = usableCustomEmojiById.getUsableCustomEmojiById(defaultReactionEmoji.emojiId);
      }
      let obj = require(7726) /* createDefaultReaction */;
      obj = { defaultReactionEmoji, customGuildEmoji: usableCustomEmojiById };
      defaultReaction = obj.createDefaultReaction(obj);
    }
    const hasJoinedResult = closure_14.hasJoined(message.channel_id);
    const shouldDisplayPromptResult = closure_11.shouldDisplayPrompt(channel.id);
    obj = { isFollowing: hasJoinedResult, hasReactions: 0 !== message.reactions.length, defaultReaction, showMediaPostSharePrompt: shouldDisplayPromptResult };
    return require(7726) /* createDefaultReaction */.createForumPostActions(obj);
  }
}
function createMessageContent(message) {
  let animateEmoji;
  let animatingStickerMessageId;
  let canShowImages;
  let colorString;
  let colorString2;
  let constrainedWidth;
  let forceHideSimpleEmbedContent;
  let forcedTheme;
  let gifAutoPlay;
  let guildId;
  let guildMemberAvatar;
  let guildMemberAvatarDecoration;
  let hasBailedAst;
  let hasSpoilerEmbeds;
  let iconRoleId;
  let ignoreEmbedDescriptionCache;
  let ignoreMentioned;
  let inlineAttachmentMedia;
  let inlineEmbedMedia;
  let isEditing;
  let isFirst;
  let isInlineReplyPreview;
  let isSystemDM;
  let messageForward;
  let nick;
  let nick2;
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
  let tag;
  let tagAccessibilityLabel;
  let tagBackgroundColor;
  let tagIconUrl;
  let tagText;
  let tagTextColor;
  let tagType;
  let tagVerified;
  let timestampHourCycle;
  let useAlternateEmbedColors;
  message = message.message;
  ({ messageForward, roleStyle, isFirst, isEditing, canShowImages, isSystemDM, isInlineReplyPreview } = message);
  if (isInlineReplyPreview === undefined) {
    isInlineReplyPreview = false;
  }
  ({ options, pushFeedbackType, renderContentOnly } = message);
  gifAutoPlay = undefined;
  shouldObscureSpoiler = undefined;
  let shouldDisableInteractiveComponents;
  let c4;
  let store;
  guildId = undefined;
  let enabledHarmTypesForMessage;
  let result1;
  let setting;
  let interaction;
  ({ animateEmoji, gifAutoPlay } = options);
  ({ renderCommunicationDisabled, renderAttachments, renderPolls, forcedTheme, forceHideSimpleEmbedContent, shouldObscureSpoiler } = options);
  shouldDisableInteractiveComponents = options.shouldDisableInteractiveComponents;
  const restrictedPreview = options.restrictedPreview;
  ({ renderEmbeds, renderReactions, inlineEmbedMedia, inlineAttachmentMedia, constrainedWidth, ignoreMentioned, animatingStickerMessageId, timestampHourCycle, renderCodedLinks, renderGiftCode, renderActivityInstanceEmbed, renderActivityInviteEmbed, renderComponents, renderThreadEmbeds, renderReplies, renderExecutedCommands, renderSharedClientTheme, renderForumPostActions, ignoreEmbedDescriptionCache, useAlternateEmbedColors } = options);
  if (null == forcedTheme) {
    let merged = theme;
    forcedTheme = theme.theme;
  }
  const tmp2 = gifAutoPlay(shouldObscureSpoiler[36])(forcedTheme, useAlternateEmbedColors);
  c4 = tmp2;
  store = tmp3;
  let tmp4 = tmp3;
  if (true === canShowImages) {
    tmp4 = renderEmbeds;
  }
  if (tmp4) {
    tmp4 = message.type !== constants.CUSTOM_GIFT;
  }
  let tmp6 = tmp3;
  if (true === canShowImages) {
    tmp6 = inlineEmbedMedia;
  }
  let tmp7 = tmp3;
  if (true === canShowImages) {
    tmp7 = inlineAttachmentMedia;
  }
  const channel = store4.getChannel(message.getChannelId());
  let obj1 = gifAutoPlay(shouldObscureSpoiler[26]);
  const channel1 = store4.getChannel(obj1.castMessageIdAsChannelId(message.id));
  guildId = undefined;
  if (null != channel) {
    guildId = channel.getGuildId();
  }
  let obj2 = message(shouldObscureSpoiler[37]);
  const hasEnhancedRoleColors = obj2.getHasEnhancedRoleColors(guildId, message.author.id);
  if (null == messageForward) {
    let obj3 = message(shouldObscureSpoiler[38]);
    messageForward = obj3.maybeCreateSingleForwardForMessage(message);
  }
  let message2 = message;
  if (null != messageForward) {
    message2 = messageForward.messageSnapshot.message;
  }
  let items = [];
  if (renderReactions) {
    let obj = { reactions: message.reactions, animateEmoji };
    items = gifAutoPlay(shouldObscureSpoiler[39])(obj);
  }
  let tmp15 = null;
  if (message.type === constants.THREAD_STARTER_MESSAGE) {
    const messageByReference = store2.getMessageByReference(message.messageReference);
    message = null;
    if (messageByReference.state === ReferencedMessageState.LOADED) {
      message = messageByReference.message;
    }
    tmp15 = message;
  }
  if (null != tmp15) {
    obj = {};
    merged = createMessageContent;
    obj1 = { message: tmp15, roleStyle, isFirst, isEditing, canShowImages, isSystemDM, isInlineReplyPreview };
    obj2 = {};
    merged = obj2;
    merged = options;
    merged = Object.assign(options);
    obj2["renderThreadEmbeds"] = false;
    obj2["renderReactions"] = false;
    obj2["shouldDisableInteractiveComponents"] = true;
    obj1.options = obj2;
    merged = obj;
    merged = Object.assign(createMessageContent(obj1));
    obj["id"] = message.id;
    return obj;
  } else {
    merged = gifAutoPlay;
    merged = shouldObscureSpoiler;
    if (gifAutoPlay(shouldObscureSpoiler[40])(message)) {
      merged = constants;
      if (message.type === constants.THREAD_CREATED) {
        obj3 = {};
        merged = createThreadEmbed;
        merged = message;
        merged = roleStyle;
        merged = isInlineReplyPreview;
        merged = channel1;
        merged = options;
        merged = forcedTheme;
        obj3.threadEmbed = createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme);
        merged = message;
        merged = shouldObscureSpoiler;
        const obj4 = { message, theme: forcedTheme, reactions: items, roleStyle };
        merged = obj3;
        merged = Object.assign(message(shouldObscureSpoiler[41]).createSystemMessageContent(obj4));
        merged = obj3;
        const obj92 = message(shouldObscureSpoiler[41]);
      } else {
        merged = message;
        merged = shouldObscureSpoiler;
        let obj5 = { message, theme: forcedTheme, reactions: items, roleStyle };
        merged = undefined;
        if (null != channel) {
          merged = channel.isForumPost();
        }
        obj5.isForumPost = merged;
        merged = message(shouldObscureSpoiler[41]).createSystemMessageContent(obj5);
        const obj89 = message(shouldObscureSpoiler[41]);
      }
      return merged;
    } else {
      const author = message.author;
      obj5 = message(shouldObscureSpoiler[42]);
      let timestamp = message.editedTimestamp;
      if (null == timestamp) {
        timestamp = message.timestamp;
      }
      const result = obj5.isMessageNewerThanImprovedMarkdownEpoch(timestamp.valueOf());
      if (null != message2.content) {
        if ("" !== message2.content) {
          let obj7 = message(shouldObscureSpoiler[43]);
          if (!forceHideSimpleEmbedContent) {
            let tmp26 = tmp4;
            if (tmp4) {
              tmp26 = tmp6;
            }
            forceHideSimpleEmbedContent = tmp26;
          }
          const tmp27 = null != channel1 && message.isFirstMessageInForumPost(channel1);
          let parseMessageMarkupResult = obj7.parseMessageMarkup(message, message2, forceHideSimpleEmbedContent, isInlineReplyPreview, tmp27, result, result);
        }
        const content = parseMessageMarkupResult.content;
        let tmp36 = restrictedPreview;
        ({ hasSpoilerEmbeds, hasBailedAst } = parseMessageMarkupResult);
        if (restrictedPreview) {
          tmp36 = null != content;
        }
        let stringResult = content;
        if (tmp36) {
          stringResult = gifAutoPlay(shouldObscureSpoiler[44])(content);
        }
        let obj8 = message(shouldObscureSpoiler[45]);
        enabledHarmTypesForMessage = obj8.getEnabledHarmTypesForMessage(message);
        let obj9 = message(shouldObscureSpoiler[46]);
        result1 = obj9.shouldAgeVerifyForExplicitMedia();
        const ViewImageDescriptions = message(shouldObscureSpoiler[47]).ViewImageDescriptions;
        setting = ViewImageDescriptions.getSetting();
        if (tmp4) {
          tmp4 = !hasBailedAst;
        }
        if (tmp4) {
          tmp4 = !restrictedPreview;
        }
        interaction = setting.getInteraction(message);
        let tmp47;
        if (tmp4) {
          const obj6 = {
            embeds: message2.embeds,
            channelId: message.channel_id,
            gifAutoPlay,
            hasSpoilerEmbeds,
            ignoreEmbedDescriptionCache,
            shouldInlineEmbedMedia: tmp6,
            colors: tmp2,
            showListsAndHeaders: result,
            showMaskedLinks: result,
            themedBackgroundColor: tmp2.embedBackgroundColor,
            enabledContentHarmTypeFlags: enabledHarmTypesForMessage,
            shouldAgeVerify: result1,
            authorIsBot: message.author.bot,
            showContentInventoryEntryFallbackEmbed: message.showContentInventoryEntryFallbackEmbed,
            transformComponents(arg0) {
                      return gifAutoPlay(shouldObscureSpoiler[49])({ message, guildId, interaction, shouldDisableInteractiveComponents, shouldShowMedia: c5, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors: c4 }, arg0);
                    }
          };
          tmp47 = gifAutoPlay(shouldObscureSpoiler[48])(obj6);
        }
        obj7 = { message, isSystemDM, channel, colors: tmp2 };
        ({ tagText, tagAccessibilityLabel, tagVerified, tagTextColor, tagBackgroundColor, tagType, tagIconUrl, opTagText, opTagTextColor, opTagBackgroundColor } = gifAutoPlay(shouldObscureSpoiler[50])(obj7));
        const uploaderFileForMessageId = store5.getUploaderFileForMessageId(message.id);
        const tmp52 = gifAutoPlay(shouldObscureSpoiler[50])(obj7);
        let tmp58 = tmp47;
        if (!tmp57) {
          let items1 = tmp47;
          if (null == tmp47) {
            items1 = [];
          }
          obj8 = { uploaderFile: uploaderFileForMessageId, useAttachmentUploadPreview: tmp55, colors: tmp2 };
          items1.push(gifAutoPlay(shouldObscureSpoiler[51])(obj8));
          tmp58 = items1;
        }
        const message1 = result1.getMessage(message.id);
        let tmp64 = tmp58;
        if (null != message1) {
          let items2 = tmp58;
          if (null == tmp58) {
            items2 = [];
          }
          let obj13 = message(shouldObscureSpoiler[51]);
          obj9 = { errorMessage: message1.errorMessage, colors: tmp2 };
          items2.push(obj13.createAutomodBlockedMessageEmbed(obj9));
          tmp64 = items2;
        }
        let obj15 = message(shouldObscureSpoiler[52]);
        const userAuthor = obj15.getUserAuthor(message.author, channel);
        ({ guildMemberAvatar, guildMemberAvatarDecoration, iconRoleId } = userAuthor);
        let obj16 = message(shouldObscureSpoiler[53]);
        if (message.isInteractionPlaceholder()) {
          if (null == message.author.avatar) {
            if (null == guildMemberAvatar) {
              const application = message.application;
              let icon;
              if (null != application) {
                icon = application.icon;
              }
              if (null != icon) {
                let obj19 = gifAutoPlay(shouldObscureSpoiler[54]);
                const obj10 = { id: message.application.id, icon: message.application.icon, bot: message.application.bot };
                let applicationIconSource = obj19.getApplicationIconSource(obj10);
              }
              const ensureAvatarSourceResult = obj16.ensureAvatarSource(applicationIconSource);
              let obj21 = message(shouldObscureSpoiler[54]);
              const obj11 = {};
              if (null == guildMemberAvatarDecoration) {
                guildMemberAvatarDecoration = author.avatarDecoration;
              }
              obj11.avatarDecoration = guildMemberAvatarDecoration;
              let obj23 = message(shouldObscureSpoiler[55]);
              obj11.size = obj23.getDecorationSizeForAvatarSize(message(shouldObscureSpoiler[56]).AvatarSizes.NORMAL);
              const avatarDecorationURL = obj21.getAvatarDecorationURL(obj11);
              if (null != iconRoleId) {
                if (null != guildId) {
                  let obj24 = message(shouldObscureSpoiler[57]);
                  const obj12 = { guildId, roleId: iconRoleId, size: 18 };
                  const roleIcon = obj24.getRoleIcon(obj12);
                }
              }
              if (message.hasFlag(closure_30.SOURCE_MESSAGE_DELETED)) {
                const intl = message(shouldObscureSpoiler[29]).intl;
                stringResult = intl.string(message(shouldObscureSpoiler[29]).t.JOtgSw);
              }
              let obj26 = message(shouldObscureSpoiler[52]);
              const messageAuthor = obj26.getMessageAuthor(message);
              ({ nick, colorString } = messageAuthor);
              if (message.type === constants.INTERACTION_PREMIUM_UPSELL) {
                const intl2 = message(shouldObscureSpoiler[29]).intl;
                obj13 = { appName: nick };
                stringResult = intl2.formatToPlainString(message(shouldObscureSpoiler[29]).t["u4A+xK"], obj13);
              }
              if (message.type === constants.REPLY) {
                if (renderReplies) {
                  const messageByReference1 = store2.getMessageByReference(message.messageReference);
                  const state = messageByReference1.state;
                  if (ReferencedMessageState.LOADED === state) {
                    const message3 = messageByReference1.message;
                    merged = message;
                    merged = shouldObscureSpoiler;
                    merged = message(shouldObscureSpoiler[38]).maybeCreateSingleForwardForMessage(message3);
                    merged = closure_21;
                    if (closure_21.isBlockedForMessage(message3)) {
                      const obj14 = {};
                      merged = ReferencedMessageRowState;
                      obj14.state = ReferencedMessageRowState.SYSTEM;
                      merged = message;
                      merged = shouldObscureSpoiler;
                      const intl12 = message(shouldObscureSpoiler[29]).intl;
                      obj14.content = intl12.string(message(shouldObscureSpoiler[29]).t.XAkOo2);
                      let tmp96 = obj14;
                    } else {
                      merged = closure_21;
                      if (closure_21.isIgnoredForMessage(message3)) {
                        obj15 = {};
                        merged = ReferencedMessageRowState;
                        obj15.state = ReferencedMessageRowState.SYSTEM;
                        merged = message;
                        merged = shouldObscureSpoiler;
                        const intl11 = message(shouldObscureSpoiler[29]).intl;
                        obj15.content = intl11.string(message(shouldObscureSpoiler[29]).t["G7p6v/"]);
                        tmp96 = obj15;
                      } else {
                        merged = createMessageContent;
                        obj16 = { message: message3, messageForward: merged, roleStyle, isFirst: true, isEditing: false, canShowImages: true, isSystemDM: false, isInlineReplyPreview: true };
                        let obj17 = {};
                        merged = obj17;
                        merged = options;
                        merged = Object.assign(options);
                        obj17["renderReplies"] = false;
                        obj16.options = obj17;
                        merged = createMessageContent(obj16);
                        if (null == merged) {
                          const obj18 = {};
                          merged = ReferencedMessageRowState;
                          obj18.state = ReferencedMessageRowState.SYSTEM;
                          merged = message;
                          merged = shouldObscureSpoiler;
                          const intl10 = message(shouldObscureSpoiler[29]).intl;
                          obj18.content = intl10.string(message(shouldObscureSpoiler[29]).t["1i+hMi"]);
                          tmp96 = obj18;
                        } else {
                          if ("username" in merged) {
                            merged = message;
                            merged = shouldObscureSpoiler;
                            merged = message(shouldObscureSpoiler[52]).getMessageAuthor(message3);
                            ({ nick: nick2, colorString: colorString2 } = merged);
                            if (null == nick2) {
                              nick2 = message3.author.username;
                            }
                            merged = undefined;
                            if (null != nick2) {
                              merged = nick2;
                            }
                            merged.username = merged;
                            if (tmp20) {
                              let colorString3 = merged.colorString;
                            } else {
                              merged = undefined;
                              merged = shouldDisableInteractiveComponents;
                              if (null != colorString2) {
                                merged = colorString2;
                              }
                              colorString3 = merged(merged);
                              if (null == colorString3) {
                                colorString3 = merged.colorString;
                              }
                            }
                            merged.colorString = colorString3;
                            merged = gifAutoPlay;
                            merged = shouldObscureSpoiler;
                            if (gifAutoPlay(shouldObscureSpoiler[58])(message, message3)) {
                              merged.username = `@${tmp.username}`;
                            }
                            const obj35 = message(shouldObscureSpoiler[52]);
                          }
                          merged = globalThis;
                          const _Array = Array;
                          merged = Array.isArray(merged.content);
                          if (merged) {
                            merged = 0 === merged.content.length;
                          }
                          if (merged) {
                            merged.content = undefined;
                          }
                          merged = undefined;
                          if (null != merged) {
                            merged = merged.messageSnapshot.message;
                          }
                          merged = message3;
                          if ("stickers" in merged) {
                            merged = message;
                            merged = shouldObscureSpoiler;
                            let messageStickers = message(shouldObscureSpoiler[33]).getMessageStickers(merged);
                            const obj36 = message(shouldObscureSpoiler[33]);
                          } else {
                            messageStickers = [];
                          }
                          if (messageStickers.length > 0) {
                            merged = message;
                            merged = shouldObscureSpoiler;
                            const intl9 = message(shouldObscureSpoiler[29]).intl;
                            merged = intl9.string(message(shouldObscureSpoiler[29]).t["7K5Lma"]);
                          } else {
                            if ("interaction" in merged) {
                              if (null != merged.interaction) {
                                if ("" === merged.content) {
                                  merged = message;
                                  merged = shouldObscureSpoiler;
                                  const intl8 = message(shouldObscureSpoiler[29]).intl;
                                  merged = intl8.string(message(shouldObscureSpoiler[29]).t["2v7kfl"]);
                                }
                              }
                            }
                            merged = message;
                            merged = shouldObscureSpoiler;
                            merged = closure_30;
                            if (obj37.hasFlag(merged.flags, closure_30.IS_VOICE_MESSAGE)) {
                              merged = message;
                              merged = shouldObscureSpoiler;
                              const intl7 = message(shouldObscureSpoiler[29]).intl;
                              merged = intl7.string(message(shouldObscureSpoiler[29]).t["6bhHrc"]);
                            } else {
                              merged = constants;
                              if (merged.type === constants.POLL_RESULT) {
                                merged = message;
                                merged = shouldObscureSpoiler;
                                merged = message(shouldObscureSpoiler[35]).getPollResultsReplyPreviewMobile(merged);
                                const obj38 = message(shouldObscureSpoiler[35]);
                              } else {
                                merged = message;
                                merged = shouldObscureSpoiler;
                                merged = closure_30;
                                if (obj97.hasFlag(merged.flags, closure_30.IS_COMPONENTS_V2)) {
                                  merged = message;
                                  merged = shouldObscureSpoiler;
                                  const intl6 = message(shouldObscureSpoiler[29]).intl;
                                  merged = intl6.string(message(shouldObscureSpoiler[29]).t.Xxm5i3);
                                } else if ("" === merged.content) {
                                  merged = message;
                                  merged = shouldObscureSpoiler;
                                  const intl5 = message(shouldObscureSpoiler[29]).intl;
                                  merged = intl5.string(message(shouldObscureSpoiler[29]).t.JAKsM8);
                                } else {
                                  merged = null;
                                }
                                obj97 = message(shouldObscureSpoiler[34]);
                              }
                            }
                            obj37 = message(shouldObscureSpoiler[34]);
                          }
                          merged = constants;
                          if (message3.type === constants.POLL_RESULT) {
                            merged.content = merged;
                          }
                          obj19 = {};
                          merged = ReferencedMessageRowState;
                          obj19.state = ReferencedMessageRowState.LOADED;
                          obj19.message = merged;
                          tmp96 = obj19;
                          if (null != merged) {
                            obj19.systemContent = merged;
                            tmp96 = obj19;
                          }
                        }
                      }
                    }
                    const obj32 = message(shouldObscureSpoiler[38]);
                  } else {
                    merged = ReferencedMessageState;
                    if (ReferencedMessageState.NOT_LOADED === state) {
                      const obj20 = {};
                      merged = ReferencedMessageRowState;
                      obj20.state = ReferencedMessageRowState.SYSTEM;
                      merged = message;
                      merged = shouldObscureSpoiler;
                      const intl4 = message(shouldObscureSpoiler[29]).intl;
                      obj20.content = intl4.string(message(shouldObscureSpoiler[29]).t["1i+hMi"]);
                      tmp96 = obj20;
                    } else {
                      merged = ReferencedMessageState;
                      if (ReferencedMessageState.DELETED === state) {
                        obj21 = {};
                        merged = ReferencedMessageRowState;
                        obj21.state = ReferencedMessageRowState.SYSTEM;
                        merged = message;
                        merged = shouldObscureSpoiler;
                        const intl3 = message(shouldObscureSpoiler[29]).intl;
                        obj21.content = intl3.string(message(shouldObscureSpoiler[29]).t.mE3KJN);
                        tmp96 = obj21;
                      } else {
                        merged = message;
                        merged = shouldObscureSpoiler;
                        let obj28 = message(shouldObscureSpoiler[59]);
                        merged = obj28.assertNever(messageByReference1);
                      }
                    }
                  }
                }
              }
              if (renderThreadEmbeds) {
                merged = createThreadEmbed;
                merged = message;
                merged = roleStyle;
                merged = isInlineReplyPreview;
                merged = channel1;
                merged = options;
                merged = forcedTheme;
                merged = createThreadEmbed(message, roleStyle, isInlineReplyPreview, channel1, options, forcedTheme);
              }
              merged = message;
              merged = shouldObscureSpoiler;
              merged = null;
              merged = message(shouldObscureSpoiler[60]).createInteractionStatus(message, interaction);
              if (null != guildId) {
                merged = member;
                merged = member.getMember(guildId, author.id);
              }
              merged = message;
              merged = shouldObscureSpoiler;
              const obj43 = message(shouldObscureSpoiler[60]);
              merged = c4;
              const useReducedMotion = c4.useReducedMotion;
              merged = c4;
              merged = undefined;
              merged = message(shouldObscureSpoiler[61]).isMemberCommunicationDisabled(merged);
              if (null != channel) {
                merged = channel.parent_id;
              }
              merged = channel;
              if (null != merged) {
                merged = channel;
                if (null != channel) {
                  merged = channel;
                  if (channel.isThread()) {
                    merged = store4;
                    merged = store4.getChannel(channel.parent_id);
                  }
                }
              }
              merged = message;
              merged = shouldObscureSpoiler;
              const obj44 = message(shouldObscureSpoiler[61]);
              const obj22 = { guildMember: merged, channel: merged, onlyChannelConnectionRoles: true };
              merged = message(shouldObscureSpoiler[62]).getVisibleConnectionsRole(obj22);
              merged = 0 !== message2.attachments.length;
              merged = tmp55;
              merged = 0 !== message2.embeds.length;
              if (tmp55) {
                merged = 0 === message.attachments.length;
              }
              if (merged) {
                merged = null != uploaderFileForMessageId;
              }
              let items3 = [];
              if (merged) {
                merged = gifAutoPlay;
                merged = shouldObscureSpoiler;
                obj23 = { uploaderFile: uploaderFileForMessageId };
                merged = constants2;
                obj23.isFailedMessage = message.state === constants2.SEND_FAILED;
                obj23.shouldInlineAttachmentMedia = tmp7;
                items3 = gifAutoPlay(shouldObscureSpoiler[63])(obj23);
              } else if (renderAttachments) {
                merged = gifAutoPlay;
                merged = shouldObscureSpoiler;
                obj24 = { attachments: message2.attachments };
                merged = store5;
                merged = gifAutoPlay(shouldObscureSpoiler[64]);
                obj24.uploadAttachments = store5.getUploadAttachments(message.nonce);
                obj24.shouldInlineAttachmentMedia = tmp7;
                obj24.gifAutoPlay = gifAutoPlay;
                obj24.viewImageDescriptions = setting;
                obj24.useReducedMotion = useReducedMotion;
                obj24.shouldObscureSpoiler = shouldObscureSpoiler;
                obj24.themedBackgroundColor = tmp2.embedBackgroundColor;
                obj24.enabledContentHarmTypeFlags = enabledHarmTypesForMessage;
                obj24.shouldAgeVerify = result1;
                obj24.colors = tmp2;
                items3 = merged(obj24);
              }
              if (merged) {
                merged = constants2;
                if (message.state !== constants2.SEND_FAILED) {
                  merged = message;
                  merged = shouldObscureSpoiler;
                  const intl13 = message(shouldObscureSpoiler[29]).intl;
                  merged = intl13.string(message(shouldObscureSpoiler[29]).t["yXY+5J"]);
                }
                if (merged) {
                  merged = constants2;
                  if (message.state !== constants2.SEND_FAILED) {
                    merged = message;
                    merged = shouldObscureSpoiler;
                    const intl14 = message(shouldObscureSpoiler[29]).intl;
                    merged = intl14.string(message(shouldObscureSpoiler[29]).t["yXY+5J"]);
                  }
                  merged = id;
                  merged = stringResult;
                  merged = id.getId();
                  if (message.isUnsupported) {
                    merged = message;
                    merged = shouldObscureSpoiler;
                    const intl15 = message(shouldObscureSpoiler[29]).intl;
                    merged = intl15.string(message(shouldObscureSpoiler[29]).t.sWi5EU);
                  }
                  merged = !message.isPoll();
                  if (!merged) {
                    merged = !isInlineReplyPreview && renderPolls;
                  }
                  if (!merged) {
                    merged = null != stringResult;
                    if (merged) {
                      merged = "" !== stringResult;
                    }
                  }
                  if (!merged) {
                    merged = message;
                    merged = shouldObscureSpoiler;
                    merged = message(shouldObscureSpoiler[35]).getPollReplyPreview(message);
                    const obj51 = message(shouldObscureSpoiler[35]);
                  }
                  if (renderPolls) {
                    merged = gifAutoPlay;
                    merged = shouldObscureSpoiler;
                    const obj25 = { theme: forcedTheme, animateEmoji };
                    merged = gifAutoPlay(shouldObscureSpoiler[66])(message, undefined, obj25);
                  }
                  if (renderSharedClientTheme) {
                    merged = message;
                    merged = shouldObscureSpoiler;
                    merged = message(shouldObscureSpoiler[67]).formatSharedClientThemeData(message, ensureAvatarSourceResult, nick);
                    const obj53 = message(shouldObscureSpoiler[67]);
                  }
                  merged = message;
                  merged = shouldObscureSpoiler;
                  merged = undefined;
                  if (null != guildId) {
                    merged = guildId;
                  }
                  if (obj54.shouldDisplayGuildTag(author.id, merged)) {
                    merged = message;
                    merged = shouldObscureSpoiler;
                    merged = message(shouldObscureSpoiler[68]).getUserPrimaryGuild(author.primaryGuild);
                    merged = undefined;
                    ({ guildId, tag } = merged);
                    if (null != merged.guildId) {
                      merged = message;
                      merged = shouldObscureSpoiler;
                      merged = GuildTagBadgeSize;
                      merged = message(shouldObscureSpoiler[68]).getGuildTagBadgeUrl(merged.guildId, merged.badge, GuildTagBadgeSize.SIZE_12);
                      const obj56 = message(shouldObscureSpoiler[68]);
                    }
                    merged = guildId;
                    merged = tag;
                    const obj55 = message(shouldObscureSpoiler[68]);
                  }
                  merged = undefined;
                  if (null != channel) {
                    merged = channel.linkedLobby;
                  }
                  if (null != merged) {
                    if (null != message.additionalName) {
                      if ("" !== message.additionalName) {
                        merged = store;
                        merged = store.getApplication(merged.application_id);
                        merged = undefined;
                        if (null != merged) {
                          merged = merged.icon;
                        }
                        merged = undefined;
                        if (null != merged) {
                          merged = gifAutoPlay;
                          merged = shouldObscureSpoiler;
                          obj26 = {};
                          ({ id: obj58.id, icon: obj58.icon } = merged);
                          obj26.size = 16;
                          merged = gifAutoPlay(shouldObscureSpoiler[54]).getApplicationIconURL(obj26);
                          const obj57 = gifAutoPlay(shouldObscureSpoiler[54]);
                        }
                        const additionalName = message.additionalName;
                      }
                    }
                  }
                  merged = message;
                  merged = shouldObscureSpoiler;
                  obj54 = message(shouldObscureSpoiler[68]);
                  merged = message;
                  if (null != message2) {
                    merged = message2;
                  }
                  merged = closure_30;
                  const applicationId = message.applicationId;
                  let str10 = "";
                  merged = message(shouldObscureSpoiler[34]).hasFlag(merged.flags, closure_30.IS_VOICE_MESSAGE);
                  merged = store;
                  if (null != applicationId) {
                    str10 = applicationId;
                  }
                  merged = store.getApplication(str10);
                  merged = null != merged;
                  if (merged) {
                    merged = message;
                    merged = shouldObscureSpoiler;
                    merged = closure_30;
                    merged = message(shouldObscureSpoiler[34]).hasFlag(message.flags, closure_30.SENT_BY_SOCIAL_LAYER_INTEGRATION);
                    const obj60 = message(shouldObscureSpoiler[34]);
                  }
                  if (merged) {
                    id = merged.id;
                  }
                  if (null != message2) {
                    merged = closure_30;
                    if (message2.hasFlag(closure_30.IS_GUILD_OFFICIAL)) {
                      merged = guild;
                      merged = guild.getGuild(guildId);
                      if (null != merged) {
                        merged = message;
                        merged = shouldObscureSpoiler;
                        if (obj61.isGuildOfficialMessagesEnabled(merged, "createMessageContent")) {
                          let officialMessageColor = merged.officialMessageColor;
                          if (null == officialMessageColor) {
                            officialMessageColor = closure_24;
                          }
                          merged = c4;
                          const officialMessageStyle = c4.officialMessageStyle;
                          merged = message;
                          merged = shouldObscureSpoiler;
                          merged = message(shouldObscureSpoiler[69]).showGuildOfficialMessageGradient(officialMessageStyle);
                          merged = undefined;
                          if (merged) {
                            merged = closure_26;
                            merged = officialMessageColor | closure_26;
                          }
                          merged = message;
                          merged = shouldObscureSpoiler;
                          const obj62 = message(shouldObscureSpoiler[69]);
                          merged = undefined;
                          if (obj63.showGuildOfficialMessageTextColor(officialMessageStyle)) {
                            merged = gifAutoPlay;
                            merged = shouldObscureSpoiler;
                            const internal = gifAutoPlay(shouldObscureSpoiler[70]).internal;
                            merged = internal.resolveSemanticColor(forcedTheme, gifAutoPlay(shouldObscureSpoiler[70]).colors.BACKGROUND_BASE_LOWER);
                            merged = c4;
                            let num61 = 1;
                            if (c4.desaturateUserColors) {
                              merged = c4;
                              num61 = c4.saturation;
                            }
                            merged = message;
                            merged = shouldObscureSpoiler;
                            const obj64 = message(shouldObscureSpoiler[69]);
                            let num62 = 0;
                            if (merged) {
                              num62 = closure_25;
                            }
                            merged = obj64;
                            merged = officialMessageColor;
                            merged = num61;
                            merged = num62;
                            const accessibleGuildOfficialTextColor = obj64.getAccessibleGuildOfficialTextColor(officialMessageColor, merged, num61, num62);
                            merged = accessibleGuildOfficialTextColor.num();
                          }
                          merged = message;
                          merged = shouldObscureSpoiler;
                          const intl16 = message(shouldObscureSpoiler[29]).intl;
                          merged = intl16.string(message(shouldObscureSpoiler[29]).t.GzDTxY);
                          obj63 = message(shouldObscureSpoiler[69]);
                        }
                        obj61 = message(shouldObscureSpoiler[69]);
                      }
                    }
                  }
                  merged = message;
                  merged = shouldObscureSpoiler;
                  const obj59 = message(shouldObscureSpoiler[34]);
                  const obj27 = {};
                  ({ id: obj67.id, channel_id: obj67.channelId } = message);
                  merged = undefined;
                  merged = message(shouldObscureSpoiler[71]).createVoiceChannelBadge(message.author.id, guildId);
                  if (null != guildId) {
                    merged = guildId;
                  }
                  obj27.guildId = merged;
                  merged = message;
                  if (null != message2) {
                    merged = message2;
                  }
                  obj27.flags = merged.flags;
                  obj27.type = message.type;
                  if (null != message.nonce) {
                    if ("string" !== typeof message.nonce) {
                      merged = globalThis;
                      const _String = String;
                      let nonce = String(message.nonce);
                    }
                    obj27.nonce = nonce;
                    obj27.state = message.state;
                    obj27.reactions = items;
                    merged = undefined;
                    if (!renderContentOnly) {
                      merged = tmp96;
                    }
                    obj27.referencedMessage = merged;
                    obj27.threadEmbed = merged;
                    merged = undefined;
                    if (null != messageForward) {
                      merged = messageForward.getForwardInfo();
                    }
                    obj27.forwardInfo = merged;
                    obj27.mentioned = !ignoreMentioned && message.mentioned;
                    let str13 = "";
                    if (message.isEdited()) {
                      str13 = "";
                      if (!renderContentOnly) {
                        merged = message;
                        merged = shouldObscureSpoiler;
                        const intl17 = message(shouldObscureSpoiler[29]).intl;
                        str13 = intl17.string(message(shouldObscureSpoiler[29]).t.C8sXIM);
                      }
                    }
                    obj27.edited = str13;
                    merged = undefined;
                    if (message.isEdited()) {
                      if (!renderContentOnly) {
                        if (null != message.editedTimestamp) {
                          merged = message;
                          merged = shouldObscureSpoiler;
                          merged = message(shouldObscureSpoiler[65]).dateFormat(message.editedTimestamp, "LLLL");
                          const obj68 = message(shouldObscureSpoiler[65]);
                        }
                      }
                    }
                    obj27.editedTimestamp = merged;
                    obj27.editedColor = tmp2.editedColor;
                    if (message.isUnsupported) {
                      let textColor = tmp2.unsupportedColor;
                    } else if (null != merged) {
                      textColor = 4278190080 | merged;
                    } else {
                      textColor = tmp2.textColor;
                    }
                    obj27.textColor = textColor;
                    obj27.officialMessageColor = merged;
                    obj27.linkColor = tmp2.linkColor;
                    obj27.tagText = tagText;
                    obj27.tagAccessibilityLabel = tagAccessibilityLabel;
                    obj27.tagVerified = tagVerified;
                    obj27.tagTextColor = tagTextColor;
                    obj27.tagBackgroundColor = tagBackgroundColor;
                    obj27.tagType = tagType;
                    obj27.tagIconUrl = tagIconUrl;
                    obj27.opTagText = opTagText;
                    obj27.opTagTextColor = opTagTextColor;
                    obj27.opTagBackgroundColor = opTagBackgroundColor;
                    obj27.stateAccessibilityLabel = merged;
                    obj27.constrainedWidth = constrainedWidth;
                    obj27.gifAutoPlay = gifAutoPlay;
                    obj27.animateEmoji = animateEmoji;
                    let username = nick;
                    if (tmp20) {
                      username = author.username;
                    }
                    merged = undefined;
                    if (null != username) {
                      merged = username;
                    }
                    obj27.username = merged;
                    merged = undefined;
                    if (!tmp20) {
                      merged = ensureAvatarSourceResult.uri;
                    }
                    obj27.avatarURL = merged;
                    merged = null;
                    if (!tmp20) {
                      merged = avatarDecorationURL;
                    }
                    obj27.avatarDecorationURL = merged;
                    obj27.authorId = author.id;
                    if (!tmp20) {
                      if ("username" === roleStyle) {
                        merged = undefined;
                        merged = shouldDisableInteractiveComponents;
                        if (null != colorString) {
                          merged = colorString;
                        }
                        let defaultUsernameColor = merged(merged);
                        if (null == defaultUsernameColor) {
                          defaultUsernameColor = tmp2.defaultUsernameColor;
                        }
                      }
                      obj27.usernameColor = defaultUsernameColor;
                      merged = null;
                      if (!tmp20) {
                        merged = undefined;
                        merged = shouldDisableInteractiveComponents;
                        if (null != colorString) {
                          merged = colorString;
                        }
                        merged = merged(merged);
                        merged = null;
                      }
                      obj27.roleColor = merged;
                      merged = null;
                      if (hasEnhancedRoleColors) {
                        merged = null;
                        if (!tmp20) {
                          merged = message;
                          merged = shouldObscureSpoiler;
                          merged = message(shouldObscureSpoiler[72]).processColorStrings(messageAuthor.colorStrings);
                          const obj69 = message(shouldObscureSpoiler[72]);
                        }
                      }
                      obj27.roleColors = merged;
                      obj27.shouldShowRoleDot = "dot" === roleStyle;
                      obj27.shouldShowRoleOnName = "username" === roleStyle;
                      obj27.showLinkDecorations = c4.alwaysShowLinkDecorations;
                      if (tmp20) {
                        let defaultUsernameColor2 = tmp2.defaultUsernameColor;
                      } else {
                        merged = undefined;
                        merged = shouldDisableInteractiveComponents;
                        if (null != colorString) {
                          merged = colorString;
                        }
                        defaultUsernameColor2 = merged(merged);
                        if (null == defaultUsernameColor2) {
                          defaultUsernameColor2 = tmp2.defaultUsernameColor;
                        }
                      }
                      obj27.colorString = defaultUsernameColor2;
                      merged = undefined;
                      if (!tmp20) {
                        merged = roleIcon;
                      }
                      obj27.roleIcon = merged;
                      merged = undefined;
                      if (null != merged) {
                        merged = message;
                        merged = shouldObscureSpoiler;
                        merged = message(shouldObscureSpoiler[73]).createConnectionsRoleTag(merged);
                        const obj70 = message(shouldObscureSpoiler[73]);
                      }
                      obj27.connectionsRoleTag = merged;
                      merged = undefined;
                      obj27.timestamp = merged;
                      merged = undefined;
                      if (!tmp20) {
                        merged = message;
                        merged = shouldObscureSpoiler;
                        merged = message(shouldObscureSpoiler[65]).dateFormat(message.timestamp, "LLLL");
                        const obj71 = message(shouldObscureSpoiler[65]);
                      }
                      obj27.timestampTooltip = merged;
                      merged = undefined;
                      if (!tmp20) {
                        merged = tmp2.timestampColor;
                      }
                      obj27.timestampColor = merged;
                      merged = undefined;
                      obj27.timestampAccessibilityLabel = merged;
                      obj27.content = merged;
                      obj27.isEditing = isEditing;
                      obj27.renderContentOnly = renderContentOnly;
                      merged = undefined;
                      if (undefined !== pushFeedbackType) {
                        merged = message;
                        merged = shouldObscureSpoiler;
                        merged = message(shouldObscureSpoiler[74]).createSurveyIndication(message, forcedTheme, pushFeedbackType);
                        const obj72 = message(shouldObscureSpoiler[74]);
                      }
                      obj27.surveyIndication = merged;
                      merged = message;
                      merged = shouldObscureSpoiler;
                      obj27.ephemeralIndication = message(shouldObscureSpoiler[75]).createEphemeralIndication(message);
                      obj27.interactionStatus = merged;
                      merged = undefined;
                      if (renderExecutedCommands) {
                        merged = message;
                        merged = shouldObscureSpoiler;
                        const obj74 = message(shouldObscureSpoiler[76]);
                        merged = obj74;
                        merged = message;
                        merged = channel;
                        merged = roleStyle;
                        merged = forcedTheme;
                        merged = obj74.createExecutedCommand(message, channel, roleStyle, forcedTheme, tmp2.defaultUsernameColor);
                      }
                      obj27.executedCommand = merged;
                      merged = undefined;
                      if (message2.components.length > 0) {
                        if (renderComponents) {
                          merged = gifAutoPlay;
                          merged = shouldObscureSpoiler;
                          obj28 = { message, guildId, interaction, shouldDisableInteractiveComponents, shouldShowMedia: tmp3, shouldObscureSpoiler, enabledContentHarmTypeFlags: enabledHarmTypesForMessage, shouldAgeVerify: result1, shouldShowMosaicMediaDescriptions: setting, shouldAutoPlayGifs: gifAutoPlay, colors: tmp2 };
                          merged = gifAutoPlay(shouldObscureSpoiler[49])(obj28, message2.components);
                        }
                      }
                      obj27.components = merged;
                      let num75 = 0;
                      if (!renderContentOnly) {
                        num75 = tmp2.feedbackColor;
                      }
                      obj27.feedbackColor = num75;
                      let num76 = 0;
                      if (!renderContentOnly) {
                        num76 = tmp2.highlightColor;
                      }
                      obj27.highlightColor = num76;
                      merged = undefined;
                      if (null != tmp64) {
                        merged = tmp64;
                      }
                      obj27.embeds = merged;
                      if (renderGiftCode) {
                        merged = message;
                        merged = shouldObscureSpoiler;
                        let giftCodeEmbed = message(shouldObscureSpoiler[77]).createGiftCodeEmbed(message, forcedTheme);
                        const obj76 = message(shouldObscureSpoiler[77]);
                      } else {
                        giftCodeEmbed = [];
                      }
                      obj27.giftCodes = giftCodeEmbed;
                      if (renderCodedLinks) {
                        merged = message;
                        merged = shouldObscureSpoiler;
                        const obj77 = message(shouldObscureSpoiler[78]);
                        merged = obj77;
                        merged = message;
                        merged = message2;
                        merged = channel;
                        merged = forcedTheme;
                        let codedLinkEmbeds = obj77.createCodedLinkEmbeds(message, message2, channel, forcedTheme);
                      } else {
                        codedLinkEmbeds = [];
                      }
                      obj27.codedLinks = codedLinkEmbeds;
                      merged = undefined;
                      if (renderActivityInstanceEmbed) {
                        merged = message;
                        merged = shouldObscureSpoiler;
                        merged = message(shouldObscureSpoiler[79]).createActivityInstanceEmbed(message);
                        const obj78 = message(shouldObscureSpoiler[79]);
                      }
                      obj27.activityInstanceEmbed = merged;
                      merged = undefined;
                      if (renderActivityInviteEmbed) {
                        merged = message;
                        merged = shouldObscureSpoiler;
                        merged = message(shouldObscureSpoiler[80]).createActivityRichPresenceInviteEmbed(message, channel);
                        const obj79 = message(shouldObscureSpoiler[80]);
                      }
                      obj27.activityRichPresenceInviteEmbed = merged;
                      if (tmp7) {
                        if (renderAttachments) {
                          renderAttachments = merged;
                        }
                        if (!renderAttachments) {
                          renderAttachments = tmp55;
                        }
                        tmp7 = renderAttachments;
                      }
                      obj27.useAttachmentGridLayout = tmp7;
                      obj27.useAttachmentUploadPreview = tmp55;
                      obj27.attachments = items3;
                      let num82 = 1;
                      if (tmp55) {
                        merged = constants2;
                        num82 = 1;
                        if (message.state === constants2.SEND_FAILED) {
                          num82 = 0.2;
                        }
                      }
                      obj27.attachmentsOpacity = num82;
                      if (restrictedPreview) {
                        let items4 = [];
                      } else {
                        merged = gifAutoPlay;
                        merged = shouldObscureSpoiler;
                        const obj29 = { message: message2 };
                        merged = message;
                        merged = gifAutoPlay(shouldObscureSpoiler[81]);
                        const AnimateStickers = message(shouldObscureSpoiler[47]).AnimateStickers;
                        obj29.animateStickersSetting = AnimateStickers.getSetting();
                        obj29.isUserInteracting = message.id === animatingStickerMessageId;
                        items4 = merged(obj29);
                      }
                      obj27.stickers = items4;
                      if (renderCommunicationDisabled) {
                        renderCommunicationDisabled = merged;
                      }
                      obj27.communicationDisabled = renderCommunicationDisabled;
                      merged = null == channel || !channel.isForumPost();
                      merged = !merged;
                      if (!merged) {
                        merged = message.id === message.channel_id;
                      }
                      obj27.isFirstForumPostMessage = merged;
                      merged = undefined;
                      if (null != channel) {
                        if (channel.isForumPost()) {
                          if (renderForumPostActions) {
                            merged = getForumPostActions;
                            merged = getForumPostActions(message, channel);
                          }
                        }
                      }
                      obj27.postActions = merged;
                      obj27.isCurrentUserMessageAuthor = message.author.id === merged;
                      merged = guildId;
                      obj27.usingGradientTheme = null != guildId.gradientPreset;
                      merged = message;
                      merged = shouldObscureSpoiler;
                      const obj73 = message(shouldObscureSpoiler[75]);
                      merged = gifAutoPlay;
                      obj27.swipeToReplyIconUrl = message(shouldObscureSpoiler[30]).getAssetUriForEmbed(gifAutoPlay(shouldObscureSpoiler[82]));
                      const obj81 = message(shouldObscureSpoiler[30]);
                      obj27.swipeToEditIconUrl = message(shouldObscureSpoiler[30]).getAssetUriForEmbed(gifAutoPlay(shouldObscureSpoiler[83]));
                      if (tmp4) {
                        merged = message;
                        merged = shouldObscureSpoiler;
                        let postPreviewEmbeds = message(shouldObscureSpoiler[84]).createPostPreviewEmbeds(message, roleStyle, useReducedMotion);
                        const obj83 = message(shouldObscureSpoiler[84]);
                      } else {
                        postPreviewEmbeds = [];
                      }
                      obj27.postPreviewEmbeds = postPreviewEmbeds;
                      merged = message;
                      merged = shouldObscureSpoiler;
                      const intl18 = message(shouldObscureSpoiler[29]).intl;
                      obj27.obscureLearnMoreLabel = intl18.string(message(shouldObscureSpoiler[29]).t["2aXnfa"]);
                      const obj82 = message(shouldObscureSpoiler[30]);
                      obj27.safetyPolicyNoticeEmbed = message(shouldObscureSpoiler[85]).createSafetyPolicyNoticeEmbed(message);
                      obj27.pollData = merged;
                      obj27.sharedClientTheme = merged;
                      const obj84 = message(shouldObscureSpoiler[85]);
                      obj27.safetySystemNotificationEmbed = message(shouldObscureSpoiler[86]).createSafetySystemNotificationEmbed(message);
                      const obj85 = message(shouldObscureSpoiler[86]);
                      obj27.ctaButton = message(shouldObscureSpoiler[87]).createCtaButton(message.id, message.channel_id, tmp2);
                      merged = undefined;
                      if (merged) {
                        merged = tmp2.embedBackgroundColor;
                      }
                      obj27.audioAttachmentBackgroundColor = merged;
                      merged = message;
                      merged = shouldObscureSpoiler;
                      const obj86 = message(shouldObscureSpoiler[87]);
                      obj27.accessibilityActions = message(shouldObscureSpoiler[88]).createMessageAccessibilityActions(message, channel);
                      obj27.clanTagGuildId = merged;
                      obj27.clanTag = merged;
                      obj27.clanBadgeUrl = merged;
                      obj27.lobbyAdditionalName = additionalName;
                      obj27.lobbyTagIconUrl = merged;
                      obj27.isFirst = isFirst;
                      obj27.gameApplicationId = id;
                      merged = undefined;
                      if (null != channel) {
                        merged = channel.type;
                      }
                      merged = constants3;
                      obj27.isAnnouncementChannel = merged === constants3.GUILD_ANNOUNCEMENT;
                      merged = message;
                      merged = shouldObscureSpoiler;
                      const obj87 = message(shouldObscureSpoiler[88]);
                      obj27.displayNameStyles = message(shouldObscureSpoiler[89]).createDisplayNameStylesMobile(message.author, merged);
                      obj27.voiceChannelBadge = merged;
                      return obj27;
                    }
                    defaultUsernameColor = tmp2.defaultUsernameColor;
                  }
                  nonce = message.nonce;
                  const obj66 = message(shouldObscureSpoiler[71]);
                }
                merged = message;
                merged = shouldObscureSpoiler;
                merged = message(shouldObscureSpoiler[65]).accessibilityLabelCalendarFormat(message.timestamp);
                const obj50 = message(shouldObscureSpoiler[65]);
              }
              merged = message;
              merged = shouldObscureSpoiler;
              const obj45 = message(shouldObscureSpoiler[62]);
              merged = message(shouldObscureSpoiler[65]).calendarFormat(message.timestamp, true, timestampHourCycle);
              const obj49 = message(shouldObscureSpoiler[65]);
            }
          }
        }
        if (null != guildMemberAvatar) {
          if (null != guildId) {
            obj17 = gifAutoPlay(shouldObscureSpoiler[54]);
            const obj30 = { userId: author.id, avatar: guildMemberAvatar, guildId };
            applicationIconSource = obj17.getGuildMemberAvatarSource(obj30, author);
          }
        }
        applicationIconSource = author.getAvatarSource(undefined);
        tmp57 = message.state !== constants2.SEND_FAILED || message.isCommandType();
      }
      parseMessageMarkupResult = { content: undefined, hasSpoilerEmbeds: false, hasBailedAst: false };
    }
  }
}
({ DEFAULT_GUILD_OFFICIAL_COLOR: closure_24, GUILD_OFFICIAL_HIGHLIGHT_ALPHA: closure_25, GUILD_OFFICIAL_HIGHLIGHT_ALPHA_COLOR: closure_26 } = MESSAGE_GROUP_SPACING);
({ MessageTypes: closure_28, MessageStates: closure_29, MessageFlags: closure_30, ChannelTypes: closure_31 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/renderer/createMessageContent.tsx");

export default createMessageContent;
