// Module ID: 9476
// Function ID: 73823
// Name: handleMessagesTapURLLink
// Dependencies: []
// Exports: handleMessagesTapLink

// Module 9476 (handleMessagesTapURLLink)
function handleMessagesTapURLLink(data, channelId) {
  let flag = null != data.url;
  if (flag) {
    flag = "" !== data.url;
  }
  if (flag) {
    const node = data.node;
    let flag2 = false;
    if (null != node) {
      let obj = require(dependencyMap[14]);
      flag2 = false;
      if (obj.isLinkTrusted(node)) {
        const payload = importDefault(dependencyMap[15])(tmp).payload;
        flag2 = false;
        if (payload.type === constants2.INVITE) {
          flag2 = false;
          if (null != payload.inviteCode) {
            const invite = invite.getInvite(payload.inviteCode);
            let num3 = null == invite;
            if (!num3) {
              let obj1 = require(dependencyMap[16]);
              num3 = !obj1.isGuildScheduledEventInviteEmbed(invite);
            }
            if (!num3) {
              importDefault(dependencyMap[17])(invite);
              num3 = 0;
            }
            flag2 = !num3;
          }
        }
      }
    }
    if (!flag2) {
      const payload2 = importDefault(dependencyMap[15])(data.url).payload;
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
        obj = { gameId, source: require(dependencyMap[18]).GameProfileSources.Deeplink, sourceUserId: tmp17 };
        obj = { shouldOpenGameProfile: true, gameId };
        obj.gameProfileModalChecks = obj;
        require(dependencyMap[19]).default.openGameProfileModal(obj);
        flag3 = true;
        const _default = require(dependencyMap[19]).default;
      }
      flag2 = flag3;
    }
    flag = true;
    if (!flag2) {
      obj1 = { href: data.url };
      let isLinkTrustedResult = null != data.node;
      if (isLinkTrustedResult) {
        isLinkTrustedResult = require(dependencyMap[14]).isLinkTrusted(data.node);
        const obj7 = require(dependencyMap[14]);
      }
      obj1.trusted = isLinkTrustedResult;
      obj1.messageId = data.messageId;
      obj1.channelId = channelId;
      require(dependencyMap[20]).handleClick(obj1);
      flag = true;
      const obj5 = require(dependencyMap[20]);
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
const NotificationTypes = require(dependencyMap[12]).NotificationTypes;
let closure_18 = require(dependencyMap[13]).OpenThreadAnalyticsLocations;
const _module1 = require(dependencyMap[41]);
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
          ({ userId: obj30.userId, messageChannelId: obj30.channelId, messageId: obj30.messageId } = data);
          openLazyResult = importDefault(dependencyMap[22])(obj);
        } else if ("bindGuildMenu" === action) {
          if (null != data.messageReference) {
            let guild_id = data.messageReference.guild_id;
            if (null != guild_id) {
              openLazyResult = importDefault;
              openLazyResult = dependencyMap;
              openLazyResult = require;
              openLazyResult = globalThis;
              const _HermesInternal = HermesInternal;
              openLazyResult = require(dependencyMap[25])(dependencyMap[24], dependencyMap.paths);
              obj = { guildId: guild_id };
              openLazyResult = importDefault(dependencyMap[23]).openLazy(openLazyResult, "GuildProfileActionSheet:" + guild_id, obj);
              const obj28 = importDefault(dependencyMap[23]);
            }
          }
        } else if ("bindJoinStream" === action) {
          const stream = data.stream;
          if (null != stream) {
            openLazyResult = importDefault;
            openLazyResult = dependencyMap;
            openLazyResult = importDefault(dependencyMap[26]).selectVoiceChannel(stream.channelId);
            openLazyResult = require;
            const obj26 = importDefault(dependencyMap[26]);
            openLazyResult = require(dependencyMap[27]).watchStreamAndTransitionToStream(stream);
            const obj27 = require(dependencyMap[27]);
          }
        } else if ("bindOpenPins" === action) {
          openLazyResult = importDefault;
          openLazyResult = dependencyMap;
          openLazyResult = importDefault(dependencyMap[28])(data.messageChannelId, "pinned-message-system-message");
        } else if ("bindOpenGdmCustomizeActionSheet" === action) {
          let obj1 = { channelId: data.messageChannelId };
          openLazyResult = importDefault(dependencyMap[29])(obj1);
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
              const result = require(dependencyMap[30]).removeAutomodMessageNotice(id2);
              const obj24 = require(dependencyMap[30]);
            }
          }
          const result1 = importDefault(dependencyMap[31]).dismissAutomatedMessage(data.message);
          const obj23 = importDefault(dependencyMap[31]);
        } else if ("bindTapUsername" === action) {
          let obj2 = {};
          ({ userId: obj22.userId, messageChannelId: obj22.channelId, messageId: obj22.messageId } = data);
          const items = [importDefault(dependencyMap[32]).USERNAME];
          obj2.sourceAnalyticsLocations = items;
          importDefault(dependencyMap[22])(obj2);
          const tmp86 = importDefault(dependencyMap[22]);
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
                          const obj4 = { type: require(dependencyMap[34]).KeyboardTypes.APP_LAUNCHER };
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
                          let obj6 = { type: require(dependencyMap[34]).KeyboardTypes.APP_LAUNCHER };
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
                    openLazyResult = importDefault(dependencyMap[35]);
                    obj8.author = require(dependencyMap[36]).getUserAuthor(message.interaction.user, messageChannel);
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
                    const obj35 = require(dependencyMap[36]);
                  }
                }
                const obj33 = require(dependencyMap[33]);
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
              let obj9 = { type: require(dependencyMap[34]).KeyboardTypes.APP_LAUNCHER };
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
              const obj11 = { type: require(dependencyMap[34]).KeyboardTypes.APP_LAUNCHER };
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
          obj7 = importDefault(dependencyMap[31]);
          const obj13 = {};
          ({ targetChannelId: obj9.channelId, targetMessageId: obj9.messageId } = data);
          obj13.flash = true;
          obj13.returnMessageId = data.messageId;
          obj7.jumpToMessage(obj13);
        } else if ("bindOpenRoleSubscriptionOverview" === action) {
          obj5 = require(dependencyMap[37]);
          obj5.transitionTo(closure_14.CHANNEL(data.guildId, StaticChannelRoute.ROLE_SUBSCRIPTIONS));
          obj6 = require(dependencyMap[38]);
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
              obj3 = require(dependencyMap[39]);
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
                obj2 = require(dependencyMap[39]);
                const result4 = obj2.openGuildHighlightNotificationForPush(guild_id1, data.message, data.notificationType, constants.MESSAGE_EMBED);
              } else {
                openLazyResult = require;
                openLazyResult = dependencyMap;
                openLazyResult = importDefault;
                openLazyResult = require(dependencyMap[25])(dependencyMap[40], dependencyMap.paths);
                obj15 = {};
                openLazyResult = constants;
                obj15.location = constants.MESSAGE_EMBED;
                obj15.messageId = data.message.id;
                let TOP_MESSAGE_PUSH = data.notificationType;
                if (null == TOP_MESSAGE_PUSH) {
                  TOP_MESSAGE_PUSH = NotificationTypes.TOP_MESSAGE_PUSH;
                }
                obj15.notificationType = TOP_MESSAGE_PUSH;
                importDefault(dependencyMap[23]).openLazy(openLazyResult, "NotificationSurvey", obj15);
                const obj31 = importDefault(dependencyMap[23]);
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
    obj = require(dependencyMap[21]);
  }
};
