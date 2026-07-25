// Module ID: 7682
// Function ID: 61474
// Name: createSystemMessageContent
// Dependencies: [653, 7683, 7700, 7701, 7704, 7705, 7706, 7707, 7726, 7728, 7729, 7730, 7731, 7732, 7734, 7735, 7736, 7745, 7746, 7748, 7749, 7750, 7751, 7752, 7753, 7754, 7755, 7762, 7763, 7764, 7766, 7767, 7768, 7769, 7774, 7786, 7790, 7792, 2]
// Exports: createSystemMessageContent

// Module 7682 (createSystemMessageContent)
import ME from "ME";

let closure_2;
let closure_3;
({ MessageTypes: closure_2, BoostedGuildTiers: closure_3 } = ME);
const result = require("createRemoveRecipientSystemMessage").fileFinishedImporting("modules/messages/native/renderer/system_messages/SystemMessage.tsx");

export const createSystemMessageContent = function createSystemMessageContent(message) {
  const type = message.message.type;
  if (closure_2.RECIPIENT_ADD === type) {
    return require(7683) /* createAddRecipientSystemMessage */.createAddRecipientSystemMessage(message);
  } else if (closure_2.RECIPIENT_REMOVE === type) {
    return require(7700) /* createRemoveRecipientSystemMessage */.createRemoveRecipientSystemMessage(message);
  } else if (closure_2.CALL === type) {
    return require(7701) /* createCallSystemMessage */.createCallSystemMessage(message);
  } else if (closure_2.CHANNEL_NAME_CHANGE === type) {
    return require(7704) /* createChangeChannelNameSystemMessage */.createChangeChannelNameSystemMessage(message);
  } else if (closure_2.CHANNEL_ICON_CHANGE === type) {
    return require(7705) /* createChangeChannelIconSystemMessage */.createChangeChannelIconSystemMessage(message);
  } else if (closure_2.CHANNEL_PINNED_MESSAGE === type) {
    return require(7706) /* createChannelPinnedMessageSystemMessage */.createChannelPinnedMessageSystemMessage(message);
  } else if (closure_2.USER_JOIN === type) {
    return require(7707) /* createUserJoinSystemMessage */.createUserJoinSystemMessage(message);
  } else if (closure_2.GUILD_BOOST === type) {
    return require(7726) /* createUserPremiumGuildSubscriptionSystemMessage */.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else if (closure_2.GUILD_BOOST_TIER_1 === type) {
    return require(7728) /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_1);
  } else if (closure_2.GUILD_BOOST_TIER_2 === type) {
    return require(7728) /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_2);
  } else if (closure_2.GUILD_BOOST_TIER_3 === type) {
    return require(7728) /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_3);
  } else if (closure_2.CHANNEL_FOLLOW_ADD === type) {
    return require(7729) /* createChannelFollowAddSystemMessage */.createChannelFollowAddSystemMessage(message);
  } else if (closure_2.GUILD_STREAM === type) {
    return require(7730) /* createGuildStreamSystemMessage */.createGuildStreamSystemMessage(message);
  } else if (closure_2.GUILD_DISCOVERY_DISQUALIFIED === type) {
    return require(7731) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryDisqualifiedSystemMessage(message);
  } else if (closure_2.GUILD_DISCOVERY_REQUALIFIED === type) {
    return require(7731) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryRequalifiedSystemMessage(message);
  } else if (closure_2.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING === type) {
    return require(7731) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message);
  } else if (closure_2.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING === type) {
    return require(7731) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message);
  } else {
    if (closure_2.CHAT_INPUT_COMMAND !== type) {
      if (closure_2.CONTEXT_MENU_COMMAND !== type) {
        if (closure_2.GUILD_INVITE_REMINDER === type) {
          return null;
        } else if (closure_2.THREAD_CREATED === type) {
          return require(7734) /* createNewThreadSystemMessage */.createNewThreadSystemMessage(message);
        } else if (closure_2.THREAD_STARTER_MESSAGE === type) {
          return require(7735) /* createThreadStarterSystemMessage */.createThreadStarterSystemMessage(message);
        } else if (closure_2.AUTO_MODERATION_ACTION === type) {
          return require(7736) /* createAutoModerationActionSystemMessage */.createAutoModerationActionSystemMessage(message);
        } else if (closure_2.ROLE_SUBSCRIPTION_PURCHASE === type) {
          return require(7745) /* createRoleSubscriptionPurchaseSystemMessage */.createRoleSubscriptionPurchaseSystemMessage(message);
        } else if (closure_2.PURCHASE_NOTIFICATION === type) {
          return require(7746) /* createPurchaseNotificationSystemMessage */.createPurchaseNotificationSystemMessage(message);
        } else if (closure_2.STAGE_START === type) {
          return require(7748) /* createStageStartSystemMessage */.createStageStartSystemMessage(message);
        } else if (closure_2.STAGE_END === type) {
          return require(7749) /* createStageEndSystemMessage */.createStageEndSystemMessage(message);
        } else if (closure_2.STAGE_TOPIC === type) {
          return require(7750) /* createStageTopicSystemMessage */.createStageTopicSystemMessage(message);
        } else if (closure_2.STAGE_SPEAKER === type) {
          return require(7751) /* createStageSpeakerSystemMessage */.createStageSpeakerSystemMessage(message);
        } else if (closure_2.STAGE_RAISE_HAND === type) {
          return require(7752) /* createRequestToSpeakEphemeralIndication */.createStageRaiseHandSystemMessage(message);
        } else if (closure_2.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
          return require(7753) /* createApplicationSubscriptionPurchaseSystemMessage */.createApplicationSubscriptionPurchaseSystemMessage(message);
        } else {
          if (closure_2.PRIVATE_CHANNEL_INTEGRATION_ADDED !== type) {
            if (closure_2.PRIVATE_CHANNEL_INTEGRATION_REMOVED !== type) {
              if (closure_2.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                return require(7755) /* nativeStyleProperties */.createGuildAlertModeEnabledSystemMessage(message);
              } else if (closure_2.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                return require(7755) /* nativeStyleProperties */.createGuildAlertModeDisabledSystemMessage(message);
              } else if (closure_2.GUILD_INCIDENT_REPORT_RAID === type) {
                return require(7762) /* createGuildReportRaidSystemMessage */.createGuildReportRaidSystemMessage(message);
              } else if (closure_2.GUILD_INCIDENT_REPORT_FALSE_ALARM === type) {
                return require(7763) /* createGuildReportFalseAlarmSystemMessage */.createGuildReportFalseAlarmSystemMessage(message);
              } else if (closure_2.POLL_RESULT === type) {
                return require(7764) /* castHook */.createPollResultSystemMessage(message);
              } else if (closure_2.CHANNEL_LINKED_TO_LOBBY === type) {
                return require(7766) /* createChannelLinkedToLobbySystemMessage */.createChannelLinkedToLobbySystemMessage(message);
              } else if (closure_2.IN_GAME_MESSAGE_NUX === type) {
                return require(7767) /* createInGameMessageNuxSystemMessage */.createInGameMessageNuxSystemMessage(message);
              } else {
                if (closure_2.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION !== type) {
                  if (closure_2.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION !== type) {
                    if (closure_2.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION !== type) {
                      if (closure_2.PREMIUM_GROUP_INVITE === type) {
                        return require(7769) /* createPremiumGroupInviteSystemMessage */.createPremiumGroupInviteSystemMessage(message);
                      } else if (closure_2.PREMIUM_REFERRAL === type) {
                        return require(7774) /* createReferralSystemMessage */.createReferralSystemMessage(message);
                      } else if (closure_2.VOICE_SESSION === type) {
                        return require(7786) /* getMessageContent */.createVoiceSessionSystemMessage(message);
                      } else if (closure_2.FRIEND_REQUEST_ACCEPTED === type) {
                        return require(7790) /* createFriendRequestAcceptedSystemMessage */.createFriendRequestAcceptedSystemMessage(message);
                      } else if (closure_2.GIFTING_PROMPT === type) {
                        return require(7792) /* createGiftIntentSystemMessage */.createGiftIntentSystemMessage(message);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                return require(7768) /* getMessageContent */.createJoinRequestNotificationSystemMessage(message);
              }
            }
          }
          return require(7754) /* createPrivateChannelIntegrationSystemMessage */.createPrivateChannelIntegrationSystemMessage(message, message.message.type);
        }
      }
    }
    return require(7732) /* createApplicationCommandSourceSystemMessage */.createApplicationCommandSourceSystemMessage(message);
  }
};
