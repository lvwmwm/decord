// Module ID: 9483
// Function ID: 73864
// Name: handleMessagesTapURLLink
// Dependencies: [7920, 4167, 7627, 9484, 1857, 1348, 4115, 4349, 1849, 653, 1455, 1355, 5593, 1211, 9488, 4111, 6978, 9489, 8600, 8594, 8336, 9490, 8492, 4098, 8578, 1934, 4944, 4309, 9492, 9107, 9493, 6691, 5484, 7917, 1555, 9494, 4360, 1198, 7679, 9497, 9520, 2]
// Exports: handleMessagesTapLink

// Module 9483 (handleMessagesTapURLLink)
import { getSection } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { StaticChannelRoute } from "set";
import { NotificationTypes } from "str2";
import { OpenThreadAnalyticsLocations as closure_18 } from "AbortCodes";

let closure_12;
let closure_13;
let closure_14;
function handleMessagesTapURLLink(data, channelId) {
  let flag = null != data.url;
  if (flag) {
    flag = "" !== data.url;
  }
  if (flag) {
    const node = data.node;
    let flag2 = false;
    if (null != node) {
      let obj = require(9488) /* isLinkTrusted */;
      flag2 = false;
      if (obj.isLinkTrusted(node)) {
        const payload = importDefault(4111)(tmp).payload;
        flag2 = false;
        if (payload.type === constants2.INVITE) {
          flag2 = false;
          if (null != payload.inviteCode) {
            invite = invite.getInvite(payload.inviteCode);
            let num3 = null == invite;
            if (!num3) {
              let obj1 = require(6978) /* isGroupDMInvite */;
              num3 = !obj1.isGuildScheduledEventInviteEmbed(invite);
            }
            if (!num3) {
              importDefault(9489)(invite);
              num3 = 0;
            }
            flag2 = !num3;
          }
        }
      }
    }
    if (!flag2) {
      const payload2 = importDefault(4111)(data.url).payload;
      let flag3 = false;
      if (payload2.type === constants2.GAME_PROFILE) {
        const gameId = payload2.gameId;
        let tmp17;
        if (null != channelId) {
          if (null != data.messageId) {
            const message = message2.getMessage(channelId, data.messageId);
            let id;
            if (null != message) {
              id = message.author.id;
            }
            tmp17 = id;
          }
        }
        obj = { gameId, source: require(8600) /* GameProfileEmbedAction */.GameProfileSources.Deeplink, sourceUserId: tmp17 };
        obj = { shouldOpenGameProfile: true, gameId };
        obj.gameProfileModalChecks = obj;
        require(8594) /* clearGameProfilePendingReturn */.default.openGameProfileModal(obj);
        flag3 = true;
        const _default = require(8594) /* clearGameProfilePendingReturn */.default;
      }
      flag2 = flag3;
    }
    flag = true;
    if (!flag2) {
      obj1 = { href: data.url };
      let isLinkTrustedResult = null != data.node;
      if (isLinkTrustedResult) {
        isLinkTrustedResult = require(9488) /* isLinkTrusted */.isLinkTrusted(data.node);
        const obj7 = require(9488) /* isLinkTrusted */;
      }
      obj1.trusted = isLinkTrustedResult;
      obj1.messageId = data.messageId;
      obj1.channelId = channelId;
      require(8336) /* isLinkTrusted */.handleClick(obj1);
      flag = true;
      const obj5 = require(8336) /* isLinkTrusted */;
    }
  }
  return flag;
}
({ AnalyticsLocations: closure_12, LinkingTypes: closure_13, Routes: closure_14 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapLink.tsx");

export { handleMessagesTapURLLink };
export const handleMessagesTapLink = function handleMessagesTapLink(tapLinkData) {
  let chatInputRef;
  let message;
  let message2;
  let messageChannel;
  let notificationType;
  ({ chatInputRef, message, messageChannel } = tapLinkData);
  const data = tapLinkData.tapLinkData.data;
  if (true === tapLinkData.allowWithinModal) {
    let id;
    if (null != messageChannel) {
      id = messageChannel.id;
    }
    if (!tmp5(data, id)) {
      if (null != data.action) {
        const action = data.action;
        if ("bindUserMenu" === action) {
          let openLazyResult = importDefault;
          openLazyResult = dependencyMap;
          let obj = {};
          ({ userId: obj30.userId, messageChannelId: obj30.channelId, messageId: obj30.messageId } = data);
          openLazyResult = importDefault(8492)(obj);
        } else if ("bindGuildMenu" === action) {
          if (null != data.messageReference) {
            let guild_id = data.messageReference.guild_id;
            if (null != guild_id) {
              openLazyResult = importDefault;
              openLazyResult = dependencyMap;
              openLazyResult = require;
              openLazyResult = globalThis;
              const _HermesInternal = HermesInternal;
              openLazyResult = require(1934) /* maybeLoadBundle */(8578, dependencyMap.paths);
              obj = { guildId: guild_id };
              openLazyResult = importDefault(4098).openLazy(openLazyResult, "GuildProfileActionSheet:" + guild_id, obj);
              const obj28 = importDefault(4098);
            }
          }
        } else if ("bindJoinStream" === action) {
          const stream = data.stream;
          if (null != stream) {
            openLazyResult = importDefault;
            openLazyResult = dependencyMap;
            openLazyResult = importDefault(4944).selectVoiceChannel(stream.channelId);
            openLazyResult = require;
            const obj26 = importDefault(4944);
            openLazyResult = require(4309) /* isVoiceChannelFull */.watchStreamAndTransitionToStream(stream);
            const obj27 = require(4309) /* isVoiceChannelFull */;
          }
        } else if ("bindOpenPins" === action) {
          openLazyResult = importDefault;
          openLazyResult = dependencyMap;
          openLazyResult = importDefault(9492)(data.messageChannelId, "pinned-message-system-message");
        } else if ("bindOpenGdmCustomizeActionSheet" === action) {
          let obj1 = { channelId: data.messageChannelId };
          openLazyResult = importDefault(9107)(obj1);
        } else if ("bindDismissMessage" === action) {
          const message3 = data.message;
          let id1;
          if (null != message3) {
            id1 = message3.id;
          }
          message = message.getMessage(id1);
          if (null != message) {
            if (message.isBlockedEdit) {
              const message4 = data.message;
              let id2;
              if (null != message4) {
                id2 = message4.id;
              }
              const result = require(9493) /* removeAutomodMessageNotice */.removeAutomodMessageNotice(id2);
              const obj24 = require(9493) /* removeAutomodMessageNotice */;
            }
          }
          const result1 = importDefault(6691).dismissAutomatedMessage(data.message);
          const obj23 = importDefault(6691);
        } else if ("bindTapUsername" === action) {
          let obj2 = {};
          ({ userId: obj22.userId, messageChannelId: obj22.channelId, messageId: obj22.messageId } = data);
          const items = [importDefault(5484).USERNAME];
          obj2.sourceAnalyticsLocations = items;
          importDefault(8492)(obj2);
          const tmp86 = importDefault(8492);
        } else if ("bindTapCommandName" === action) {
          let interaction;
          if (null != message) {
            interaction = message.interaction;
          }
          if (null != interaction) {
            if (null != messageChannel) {
              openLazyResult = user;
              openLazyResult = user.getUser(data.userId);
              if (null != openLazyResult) {
                openLazyResult = require;
                openLazyResult = dependencyMap;
                if (obj33.isPrimaryEntryPointCommandMessage(message)) {
                  if (null != message.applicationId) {
                    openLazyResult = store;
                    openLazyResult = store.getChannel(data.messageChannelId);
                    if (null != openLazyResult) {
                      openLazyResult = getSection;
                      let obj3 = { channel: openLazyResult, type: "channel" };
                      openLazyResult = getSection(obj3, message.applicationId);
                      const descriptor = openLazyResult.descriptor;
                      let application;
                      if (null != descriptor) {
                        application = descriptor.application;
                      }
                      if (null != application) {
                        let tmp79 = null == chatInputRef;
                        if (!tmp79) {
                          const current5 = chatInputRef.current;
                          tmp79 = null == current5;
                          const obj19 = current5;
                        }
                        if (!tmp79) {
                          const obj4 = { type: require(1555) /* KeyboardTypes */.KeyboardTypes.APP_LAUNCHER };
                          let obj5 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, initiallyExpanded: true, application: openLazyResult.descriptor.application, installOnDemand: !openLazyResult.isGuildInstalled && !openLazyResult.isUserInstalled };
                          obj4.context = obj5;
                          obj19.openCustomKeyboard(obj4);
                        }
                      } else {
                        let tmp74 = null == chatInputRef;
                        if (!tmp74) {
                          const current4 = chatInputRef.current;
                          tmp74 = null == current4;
                          let obj15 = current4;
                        }
                        if (!tmp74) {
                          let obj6 = { type: require(1555) /* KeyboardTypes */.KeyboardTypes.APP_LAUNCHER };
                          let obj7 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, initiallyExpanded: true, applicationId: message.applicationId, installOnDemand: true };
                          obj6.context = obj7;
                          obj15.openCustomKeyboard(obj6);
                        }
                      }
                    }
                  }
                } else {
                  let author;
                  if (null != message) {
                    author = message.author;
                  }
                  if (null != author) {
                    openLazyResult = importDefault;
                    openLazyResult = dependencyMap;
                    const obj8 = {};
                    openLazyResult = require;
                    openLazyResult = importDefault(9494);
                    obj8.author = require(4360) /* useNullableMessageAuthor */.getUserAuthor(message.interaction.user, messageChannel);
                    obj8.channelId = data.messageChannelId;
                    obj8.chatInputRef = chatInputRef;
                    obj8.messageId = data.messageId;
                    obj8.user = openLazyResult;
                    openLazyResult = closure_7;
                    let author1;
                    if (null != message) {
                      author1 = message.author;
                    }
                    const prototype = openLazyResult.prototype;
                    openLazyResult = new openLazyResult(author1);
                    obj8.applicationUser = openLazyResult;
                    const guildId = messageChannel.getGuildId();
                    let tmp71;
                    if (null != guildId) {
                      tmp71 = guildId;
                    }
                    obj8.guildId = tmp71;
                    obj8.messageType = data.messageType;
                    openLazyResult(obj8);
                    const obj35 = require(4360) /* useNullableMessageAuthor */;
                  }
                }
                obj33 = require(7917) /* canViewInteractionInfo */;
              }
            }
          }
        } else if ("bindTapActivityText" === action) {
          const application1 = application.getApplication(data.applicationUserId);
          if (null == application1) {
            let tmp57 = null == chatInputRef;
            if (!tmp57) {
              const current3 = chatInputRef.current;
              tmp57 = null == current3;
              let obj12 = current3;
            }
            if (!tmp57) {
              let obj9 = { type: require(1555) /* KeyboardTypes */.KeyboardTypes.APP_LAUNCHER };
              const obj10 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, applicationId: data.applicationUserId, initiallyExpanded: true };
              obj9.context = obj10;
              obj12.openCustomKeyboard(obj9);
            }
          } else {
            let tmp52 = null == chatInputRef;
            if (!tmp52) {
              const current2 = chatInputRef.current;
              tmp52 = null == current2;
              obj9 = current2;
            }
            if (!tmp52) {
              const obj11 = { type: require(1555) /* KeyboardTypes */.KeyboardTypes.APP_LAUNCHER };
              obj12 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, application: application1, initiallyExpanded: true };
              obj11.context = obj12;
              obj9.openCustomKeyboard(obj11);
            }
          }
        } else if ("bindOpenThreadChannel" === action) {
          const channel = store.getChannel(data.threadId);
          if (null != channel) {
            guild_id = undefined;
            if (null != channel) {
              guild_id = channel.guild_id;
            }
            openLazyResult(guild_id, channel.id, constants3.EMBED);
          }
        } else if ("bindJumpToMessage" === action) {
          obj7 = importDefault(6691);
          const obj13 = {};
          ({ targetChannelId: obj9.channelId, targetMessageId: obj9.messageId } = data);
          obj13.flash = true;
          obj13.returnMessageId = data.messageId;
          obj7.jumpToMessage(obj13);
        } else if ("bindOpenRoleSubscriptionOverview" === action) {
          obj5 = require(1198) /* shouldNavigate */;
          obj5.transitionTo(closure_14.CHANNEL(data.guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
          obj6 = require(7679) /* identityHook */;
          const result2 = obj6.trackRoleSubscriptionPurchaseMessageTierClick(data.guildId, data.channelId, data.messageId, data.roleSubscriptionListingId);
        } else if ("bindUserSurvey" === action) {
          const channel1 = store.getChannel(data.message.channel_id);
          let guild_id1;
          if (null != channel1) {
            guild_id1 = channel1.guild_id;
          }
          if (null != guild_id1) {
            const notificationType2 = data.notificationType;
            openLazyResult = NotificationTypes;
            if (NotificationTypes.TRENDING_CONTENT_PUSH === notificationType2) {
              obj3 = require(9497) /* openGuildHighlightNotificationForPush */;
              ({ message: message2, notificationType } = data);
              const MESSAGE_EMBED = constants.MESSAGE_EMBED;
              const obj14 = {};
              const selectedSummaryResult = closure_6.selectedSummary(data.message.channel_id);
              let id3;
              if (null != selectedSummaryResult) {
                id3 = selectedSummaryResult.id;
              }
              let str3 = "unknown";
              if (null != id3) {
                str3 = id3;
              }
              obj14.summary_id = str3;
              const result3 = obj3.openGuildHighlightNotificationForPush(guild_id1, message2, notificationType, MESSAGE_EMBED, obj14);
            } else {
              openLazyResult = NotificationTypes;
              if (NotificationTypes.TOP_MESSAGE_PUSH === notificationType2) {
                obj2 = require(9497) /* openGuildHighlightNotificationForPush */;
                const result4 = obj2.openGuildHighlightNotificationForPush(guild_id1, data.message, data.notificationType, constants.MESSAGE_EMBED);
              } else {
                openLazyResult = require;
                openLazyResult = dependencyMap;
                openLazyResult = importDefault;
                openLazyResult = require(1934) /* maybeLoadBundle */(9520, dependencyMap.paths);
                obj15 = {};
                openLazyResult = constants;
                obj15.location = constants.MESSAGE_EMBED;
                obj15.messageId = data.message.id;
                let TOP_MESSAGE_PUSH = data.notificationType;
                if (null == TOP_MESSAGE_PUSH) {
                  TOP_MESSAGE_PUSH = NotificationTypes.TOP_MESSAGE_PUSH;
                }
                obj15.notificationType = TOP_MESSAGE_PUSH;
                importDefault(4098).openLazy(openLazyResult, "NotificationSurvey", obj15);
                const obj31 = importDefault(4098);
              }
            }
          }
        } else if ("bindInsertText" === action) {
          let tmp8 = null == chatInputRef;
          if (!tmp8) {
            const current = chatInputRef.current;
            tmp8 = null == current;
            obj1 = current;
          }
          if (!tmp8) {
            const addSpace = data.addSpace;
            let tmp9 = null == addSpace;
            if (!tmp9) {
              tmp9 = addSpace;
            }
            obj1.insertText(data.text, null, tmp9);
          }
        }
      }
    }
    tmp5 = handleMessagesTapURLLink;
  } else {
    obj = require(9490) /* isAlertOrActionSheetOpen */;
  }
};
