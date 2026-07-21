// Module ID: 7640
// Function ID: 61161
// Name: createSystemMessageContent
// Dependencies: []
// Exports: createSystemMessageContent

// Module 7640 (createSystemMessageContent)
const _module = require(dependencyMap[0]);
({ MessageTypes: closure_2, BoostedGuildTiers: closure_3 } = _module);
const _module1 = require(dependencyMap[38]);
const result = _module1.fileFinishedImporting("modules/messages/native/renderer/system_messages/SystemMessage.tsx");

export const createSystemMessageContent = function createSystemMessageContent(message) {
  const type = message.message.type;
  if (closure_2.RECIPIENT_ADD === type) {
    return require(dependencyMap[1]).createAddRecipientSystemMessage(message);
  } else if (closure_2.RECIPIENT_REMOVE === type) {
    return require(dependencyMap[2]).createRemoveRecipientSystemMessage(message);
  } else if (closure_2.CALL === type) {
    return require(dependencyMap[3]).createCallSystemMessage(message);
  } else if (closure_2.CHANNEL_NAME_CHANGE === type) {
    return require(dependencyMap[4]).createChangeChannelNameSystemMessage(message);
  } else if (closure_2.CHANNEL_ICON_CHANGE === type) {
    return require(dependencyMap[5]).createChangeChannelIconSystemMessage(message);
  } else if (closure_2.CHANNEL_PINNED_MESSAGE === type) {
    return require(dependencyMap[6]).createChannelPinnedMessageSystemMessage(message);
  } else if (closure_2.USER_JOIN === type) {
    return require(dependencyMap[7]).createUserJoinSystemMessage(message);
  } else if (closure_2.GUILD_BOOST === type) {
    return require(dependencyMap[8]).createUserPremiumGuildSubscriptionSystemMessage(message);
  } else if (closure_2.GUILD_BOOST_TIER_1 === type) {
    return require(dependencyMap[9]).createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_1);
  } else if (closure_2.GUILD_BOOST_TIER_2 === type) {
    return require(dependencyMap[9]).createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_2);
  } else if (closure_2.GUILD_BOOST_TIER_3 === type) {
    return require(dependencyMap[9]).createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_3);
  } else if (closure_2.CHANNEL_FOLLOW_ADD === type) {
    return require(dependencyMap[10]).createChannelFollowAddSystemMessage(message);
  } else if (closure_2.GUILD_STREAM === type) {
    return require(dependencyMap[11]).createGuildStreamSystemMessage(message);
  } else if (closure_2.GUILD_DISCOVERY_DISQUALIFIED === type) {
    return require(dependencyMap[12]).createGuildDiscoveryDisqualifiedSystemMessage(message);
  } else if (closure_2.GUILD_DISCOVERY_REQUALIFIED === type) {
    return require(dependencyMap[12]).createGuildDiscoveryRequalifiedSystemMessage(message);
  } else if (closure_2.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING === type) {
    return require(dependencyMap[12]).createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message);
  } else if (closure_2.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING === type) {
    return require(dependencyMap[12]).createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message);
  } else {
    if (closure_2.CHAT_INPUT_COMMAND !== type) {
      if (closure_2.CONTEXT_MENU_COMMAND !== type) {
        if (closure_2.GUILD_INVITE_REMINDER === type) {
          return null;
        } else if (closure_2.THREAD_CREATED === type) {
          return require(dependencyMap[14]).createNewThreadSystemMessage(message);
        } else if (closure_2.THREAD_STARTER_MESSAGE === type) {
          return require(dependencyMap[15]).createThreadStarterSystemMessage(message);
        } else if (closure_2.AUTO_MODERATION_ACTION === type) {
          return require(dependencyMap[16]).createAutoModerationActionSystemMessage(message);
        } else if (closure_2.ROLE_SUBSCRIPTION_PURCHASE === type) {
          return require(dependencyMap[17]).createRoleSubscriptionPurchaseSystemMessage(message);
        } else if (closure_2.PURCHASE_NOTIFICATION === type) {
          return require(dependencyMap[18]).createPurchaseNotificationSystemMessage(message);
        } else if (closure_2.STAGE_START === type) {
          return require(dependencyMap[19]).createStageStartSystemMessage(message);
        } else if (closure_2.STAGE_END === type) {
          return require(dependencyMap[20]).createStageEndSystemMessage(message);
        } else if (closure_2.STAGE_TOPIC === type) {
          return require(dependencyMap[21]).createStageTopicSystemMessage(message);
        } else if (closure_2.STAGE_SPEAKER === type) {
          return require(dependencyMap[22]).createStageSpeakerSystemMessage(message);
        } else if (closure_2.STAGE_RAISE_HAND === type) {
          return require(dependencyMap[23]).createStageRaiseHandSystemMessage(message);
        } else if (closure_2.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
          return require(dependencyMap[24]).createApplicationSubscriptionPurchaseSystemMessage(message);
        } else {
          if (closure_2.PRIVATE_CHANNEL_INTEGRATION_ADDED !== type) {
            if (closure_2.PRIVATE_CHANNEL_INTEGRATION_REMOVED !== type) {
              if (closure_2.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                return require(dependencyMap[26]).createGuildAlertModeEnabledSystemMessage(message);
              } else if (closure_2.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                return require(dependencyMap[26]).createGuildAlertModeDisabledSystemMessage(message);
              } else if (closure_2.GUILD_INCIDENT_REPORT_RAID === type) {
                return require(dependencyMap[27]).createGuildReportRaidSystemMessage(message);
              } else if (closure_2.GUILD_INCIDENT_REPORT_FALSE_ALARM === type) {
                return require(dependencyMap[28]).createGuildReportFalseAlarmSystemMessage(message);
              } else if (closure_2.POLL_RESULT === type) {
                return require(dependencyMap[29]).createPollResultSystemMessage(message);
              } else if (closure_2.CHANNEL_LINKED_TO_LOBBY === type) {
                return require(dependencyMap[30]).createChannelLinkedToLobbySystemMessage(message);
              } else if (closure_2.IN_GAME_MESSAGE_NUX === type) {
                return require(dependencyMap[31]).createInGameMessageNuxSystemMessage(message);
              } else {
                if (closure_2.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION !== type) {
                  if (closure_2.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION !== type) {
                    if (closure_2.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION !== type) {
                      if (closure_2.PREMIUM_GROUP_INVITE === type) {
                        return require(dependencyMap[33]).createPremiumGroupInviteSystemMessage(message);
                      } else if (closure_2.PREMIUM_REFERRAL === type) {
                        return require(dependencyMap[34]).createReferralSystemMessage(message);
                      } else if (closure_2.VOICE_SESSION === type) {
                        return require(dependencyMap[35]).createVoiceSessionSystemMessage(message);
                      } else if (closure_2.FRIEND_REQUEST_ACCEPTED === type) {
                        return require(dependencyMap[36]).createFriendRequestAcceptedSystemMessage(message);
                      } else if (closure_2.GIFTING_PROMPT === type) {
                        return require(dependencyMap[37]).createGiftIntentSystemMessage(message);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                return require(dependencyMap[32]).createJoinRequestNotificationSystemMessage(message);
              }
            }
          }
          return require(dependencyMap[25]).createPrivateChannelIntegrationSystemMessage(message, message.message.type);
        }
      }
    }
    return require(dependencyMap[13]).createApplicationCommandSourceSystemMessage(message);
  }
};
