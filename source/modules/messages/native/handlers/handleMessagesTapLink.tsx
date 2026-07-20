// Module ID: 9471
// Function ID: 73785
// Name: handleMessagesTapURLLink
// Dependencies: []
// Exports: handleMessagesTapLink

// Module 9471 (handleMessagesTapURLLink)
function handleMessagesTapURLLink(data, channelId) {
  let flag = null != data.url;
  if (flag) {
    flag = "" !== data.url;
  }
  if (flag) {
    const node = data.node;
    let flag2 = false;
    if (null != node) {
      let obj = require(dependencyMap[15]);
      flag2 = false;
      if (obj.isLinkTrusted(node)) {
        const payload = importDefault(dependencyMap[16])(tmp).payload;
        flag2 = false;
        if (payload.type === constants2.INVITE) {
          flag2 = false;
          if (null != payload.inviteCode) {
            const invite = invite.getInvite(payload.inviteCode);
            let num3 = null == invite;
            if (!num3) {
              let obj1 = require(dependencyMap[17]);
              num3 = !obj1.isGuildScheduledEventInviteEmbed(invite);
            }
            if (!num3) {
              importDefault(dependencyMap[18])(invite);
              num3 = 0;
            }
            flag2 = !num3;
          }
        }
      }
    }
    if (!flag2) {
      const payload2 = importDefault(dependencyMap[16])(data.url).payload;
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
        obj = { gameId, source: require(dependencyMap[19]).GameProfileSources.Deeplink, sourceUserId: tmp17 };
        obj = { shouldOpenGameProfile: true, gameId };
        obj.gameProfileModalChecks = obj;
        require(dependencyMap[20]).default.openGameProfileModal(obj);
        flag3 = true;
        const _default = require(dependencyMap[20]).default;
      }
      flag2 = flag3;
    }
    flag = true;
    if (!flag2) {
      obj1 = { href: data.url };
      let isLinkTrustedResult = null != data.node;
      if (isLinkTrustedResult) {
        isLinkTrustedResult = require(dependencyMap[15]).isLinkTrusted(data.node);
        const obj7 = require(dependencyMap[15]);
      }
      obj1.trusted = isLinkTrustedResult;
      obj1.messageId = data.messageId;
      obj1.channelId = channelId;
      require(dependencyMap[21]).handleClick(obj1);
      flag = true;
      const obj5 = require(dependencyMap[21]);
    }
  }
  return flag;
}
const getSection = require(dependencyMap[0]).getSection;
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const _module = require(dependencyMap[9]);
({ AnalyticsLocations: closure_12, LinkingTypes: closure_13, Routes: closure_14 } = _module);
const AppLauncherRouteName = require(dependencyMap[10]).AppLauncherRouteName;
const StaticChannelRoute = require(dependencyMap[11]).StaticChannelRoute;
let closure_17 = require(dependencyMap[12]).ChannelDetailsNavigatorScreens;
const NotificationTypes = require(dependencyMap[13]).NotificationTypes;
let closure_19 = require(dependencyMap[14]).OpenThreadAnalyticsLocations;
const _module1 = require(dependencyMap[42]);
const result = _module1.fileFinishedImporting("modules/messages/native/handlers/handleMessagesTapLink.tsx");

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
          ({ userId: obj33.userId, messageChannelId: obj33.channelId, messageId: obj33.messageId } = data);
          openLazyResult = importDefault(dependencyMap[23])(obj);
        } else if ("bindGuildMenu" === action) {
          if (null != data.messageReference) {
            let guild_id = data.messageReference.guild_id;
            if (null != guild_id) {
              openLazyResult = importDefault;
              openLazyResult = dependencyMap;
              openLazyResult = require;
              openLazyResult = globalThis;
              const _HermesInternal = HermesInternal;
              openLazyResult = require(dependencyMap[26])(dependencyMap[25], dependencyMap.paths);
              obj = { guildId: guild_id };
              openLazyResult = importDefault(dependencyMap[24]).openLazy(openLazyResult, "GuildProfileActionSheet:" + guild_id, obj);
              const obj31 = importDefault(dependencyMap[24]);
            }
          }
        } else if ("bindJoinStream" === action) {
          const stream = data.stream;
          if (null != stream) {
            openLazyResult = importDefault;
            openLazyResult = dependencyMap;
            openLazyResult = importDefault(dependencyMap[27]).selectVoiceChannel(stream.channelId);
            openLazyResult = require;
            const obj29 = importDefault(dependencyMap[27]);
            openLazyResult = require(dependencyMap[28]).watchStreamAndTransitionToStream(stream);
            const obj30 = require(dependencyMap[28]);
          }
        } else if ("bindOpenPins" === action) {
          openLazyResult = require;
          openLazyResult = dependencyMap;
          const rootNavigationRef = require(dependencyMap[29]).getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              let obj1 = {};
              openLazyResult = constants3;
              obj1.initialRouteName = constants3.PINNED_MESSAGES;
              obj1.channelId = data.messageChannelId;
              obj1.source = "pinned-message-system-message";
              openLazyResult = rootNavigationRef.navigate("sidebar", obj1);
            }
          }
        } else if ("bindOpenGdmCustomizeActionSheet" === action) {
          let obj2 = { channelId: data.messageChannelId };
          openLazyResult = importDefault(dependencyMap[30])(obj2);
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
              const result = require(dependencyMap[31]).removeAutomodMessageNotice(id2);
              const obj24 = require(dependencyMap[31]);
            }
          }
          const result1 = importDefault(dependencyMap[32]).dismissAutomatedMessage(data.message);
          const obj23 = importDefault(dependencyMap[32]);
        } else if ("bindTapUsername" === action) {
          let obj3 = {};
          ({ userId: obj22.userId, messageChannelId: obj22.channelId, messageId: obj22.messageId } = data);
          const items = [importDefault(dependencyMap[33]).USERNAME];
          obj3.sourceAnalyticsLocations = items;
          importDefault(dependencyMap[23])(obj3);
          const tmp86 = importDefault(dependencyMap[23]);
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
                if (obj36.isPrimaryEntryPointCommandMessage(message)) {
                  if (null != message.applicationId) {
                    openLazyResult = store;
                    openLazyResult = store.getChannel(data.messageChannelId);
                    if (null != openLazyResult) {
                      openLazyResult = getSection;
                      const obj4 = { channel: openLazyResult, type: "channel" };
                      openLazyResult = getSection(obj4, message.applicationId);
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
                          let obj5 = { type: require(dependencyMap[35]).KeyboardTypes.APP_LAUNCHER };
                          let obj6 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, initiallyExpanded: true, application: openLazyResult.descriptor.application, installOnDemand: !openLazyResult.isGuildInstalled && !openLazyResult.isUserInstalled };
                          obj5.context = obj6;
                          obj19.openCustomKeyboard(obj5);
                        }
                      } else {
                        let tmp74 = null == chatInputRef;
                        if (!tmp74) {
                          const current4 = chatInputRef.current;
                          tmp74 = null == current4;
                          let obj15 = current4;
                        }
                        if (!tmp74) {
                          let obj7 = { type: require(dependencyMap[35]).KeyboardTypes.APP_LAUNCHER };
                          const obj8 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, initiallyExpanded: true, applicationId: message.applicationId, installOnDemand: true };
                          obj7.context = obj8;
                          obj15.openCustomKeyboard(obj7);
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
                    let obj9 = {};
                    openLazyResult = require;
                    openLazyResult = importDefault(dependencyMap[36]);
                    obj9.author = require(dependencyMap[37]).getUserAuthor(message.interaction.user, messageChannel);
                    obj9.channelId = data.messageChannelId;
                    obj9.chatInputRef = chatInputRef;
                    obj9.messageId = data.messageId;
                    obj9.user = openLazyResult;
                    openLazyResult = closure_7;
                    let author1;
                    if (null != message) {
                      author1 = message.author;
                    }
                    const prototype = openLazyResult.prototype;
                    openLazyResult = new openLazyResult(author1);
                    obj9.applicationUser = openLazyResult;
                    const guildId = messageChannel.getGuildId();
                    let tmp71;
                    if (null != guildId) {
                      tmp71 = guildId;
                    }
                    obj9.guildId = tmp71;
                    obj9.messageType = data.messageType;
                    openLazyResult(obj9);
                    const obj38 = require(dependencyMap[37]);
                  }
                }
                const obj36 = require(dependencyMap[34]);
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
              const obj10 = { type: require(dependencyMap[35]).KeyboardTypes.APP_LAUNCHER };
              const obj11 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, applicationId: data.applicationUserId, initiallyExpanded: true };
              obj10.context = obj11;
              obj12.openCustomKeyboard(obj10);
            }
          } else {
            let tmp52 = null == chatInputRef;
            if (!tmp52) {
              const current2 = chatInputRef.current;
              tmp52 = null == current2;
              obj9 = current2;
            }
            if (!tmp52) {
              obj12 = { type: require(dependencyMap[35]).KeyboardTypes.APP_LAUNCHER };
              const obj13 = { initialRouteName: AppLauncherRouteName.APPLICATION_VIEW, application: application1, initiallyExpanded: true };
              obj12.context = obj13;
              obj9.openCustomKeyboard(obj12);
            }
          }
        } else if ("bindOpenThreadChannel" === action) {
          const channel = store.getChannel(data.threadId);
          if (null != channel) {
            guild_id = undefined;
            if (null != channel) {
              guild_id = channel.guild_id;
            }
            openLazyResult(guild_id, channel.id, constants4.EMBED);
          }
        } else if ("bindJumpToMessage" === action) {
          obj7 = importDefault(dependencyMap[32]);
          const obj14 = {};
          ({ targetChannelId: obj9.channelId, targetMessageId: obj9.messageId } = data);
          obj14.flash = true;
          obj14.returnMessageId = data.messageId;
          obj7.jumpToMessage(obj14);
        } else if ("bindOpenRoleSubscriptionOverview" === action) {
          obj5 = require(dependencyMap[38]);
          obj5.transitionTo(closure_14.CHANNEL(data.guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
          obj6 = require(dependencyMap[39]);
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
              obj3 = require(dependencyMap[40]);
              ({ message: message2, notificationType } = data);
              const MESSAGE_EMBED = constants.MESSAGE_EMBED;
              obj15 = {};
              const selectedSummaryResult = closure_6.selectedSummary(data.message.channel_id);
              let id3;
              if (null != selectedSummaryResult) {
                id3 = selectedSummaryResult.id;
              }
              let str3 = "unknown";
              if (null != id3) {
                str3 = id3;
              }
              obj15.summary_id = str3;
              const result3 = obj3.openGuildHighlightNotificationForPush(guild_id1, message2, notificationType, MESSAGE_EMBED, obj15);
            } else {
              openLazyResult = NotificationTypes;
              if (NotificationTypes.TOP_MESSAGE_PUSH === notificationType2) {
                obj2 = require(dependencyMap[40]);
                const result4 = obj2.openGuildHighlightNotificationForPush(guild_id1, data.message, data.notificationType, constants.MESSAGE_EMBED);
              } else {
                openLazyResult = require;
                openLazyResult = dependencyMap;
                openLazyResult = importDefault;
                openLazyResult = require(dependencyMap[26])(dependencyMap[41], dependencyMap.paths);
                const obj16 = {};
                openLazyResult = constants;
                obj16.location = constants.MESSAGE_EMBED;
                obj16.messageId = data.message.id;
                let TOP_MESSAGE_PUSH = data.notificationType;
                if (null == TOP_MESSAGE_PUSH) {
                  TOP_MESSAGE_PUSH = NotificationTypes.TOP_MESSAGE_PUSH;
                }
                obj16.notificationType = TOP_MESSAGE_PUSH;
                importDefault(dependencyMap[24]).openLazy(openLazyResult, "NotificationSurvey", obj16);
                const obj34 = importDefault(dependencyMap[24]);
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
    const tmp5 = handleMessagesTapURLLink;
  } else {
    obj = require(dependencyMap[22]);
  }
};
