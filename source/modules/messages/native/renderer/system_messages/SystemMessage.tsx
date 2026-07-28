// Module ID: 7718
// Function ID: 61565
// Name: createSystemMessageContent
// Dependencies: [653, 7719, 7736, 7737, 7740, 7741, 7742, 7743, 7762, 7764, 7765, 7766, 7767, 7768, 7770, 7771, 7772, 7781, 7782, 7784, 7785, 7786, 7787, 7788, 7789, 7790, 7791, 7798, 7799, 7800, 7802, 7803, 7804, 7805, 7810, 7822, 7826, 7828, 2]
// Exports: createSystemMessageContent

// Module 7718 (createSystemMessageContent)
import ME from "ME";

let closure_2;
let closure_3;
({ MessageTypes: closure_2, BoostedGuildTiers: closure_3 } = ME);
const result = require("createRemoveRecipientSystemMessage").fileFinishedImporting("modules/messages/native/renderer/system_messages/SystemMessage.tsx");

export const createSystemMessageContent = function createSystemMessageContent(message) {
  const type = message.message.type;
  if (closure_2.RECIPIENT_ADD === type) {
    return require(7719) /* createAddRecipientSystemMessage */.createAddRecipientSystemMessage(message);
  } else if (closure_2.RECIPIENT_REMOVE === type) {
    return require(7736) /* createRemoveRecipientSystemMessage */.createRemoveRecipientSystemMessage(message);
  } else if (closure_2.CALL === type) {
    return require(7737) /* createCallSystemMessage */.createCallSystemMessage(message);
  } else if (closure_2.CHANNEL_NAME_CHANGE === type) {
    return require(7740) /* createChangeChannelNameSystemMessage */.createChangeChannelNameSystemMessage(message);
  } else if (closure_2.CHANNEL_ICON_CHANGE === type) {
    return require(7741) /* createChangeChannelIconSystemMessage */.createChangeChannelIconSystemMessage(message);
  } else if (closure_2.CHANNEL_PINNED_MESSAGE === type) {
    return require(7742) /* createChannelPinnedMessageSystemMessage */.createChannelPinnedMessageSystemMessage(message);
  } else if (closure_2.USER_JOIN === type) {
    return require(7743) /* createUserJoinSystemMessage */.createUserJoinSystemMessage(message);
  } else if (closure_2.GUILD_BOOST === type) {
    return require(7762) /* createUserPremiumGuildSubscriptionSystemMessage */.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else if (closure_2.GUILD_BOOST_TIER_1 === type) {
    return require(7764) /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_1);
  } else if (closure_2.GUILD_BOOST_TIER_2 === type) {
    return require(7764) /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_2);
  } else if (closure_2.GUILD_BOOST_TIER_3 === type) {
    return require(7764) /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_3);
  } else if (closure_2.CHANNEL_FOLLOW_ADD === type) {
    return require(7765) /* createChannelFollowAddSystemMessage */.createChannelFollowAddSystemMessage(message);
  } else if (closure_2.GUILD_STREAM === type) {
    return require(7766) /* createGuildStreamSystemMessage */.createGuildStreamSystemMessage(message);
  } else if (closure_2.GUILD_DISCOVERY_DISQUALIFIED === type) {
    return require(7767) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryDisqualifiedSystemMessage(message);
  } else if (closure_2.GUILD_DISCOVERY_REQUALIFIED === type) {
    return require(7767) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryRequalifiedSystemMessage(message);
  } else if (closure_2.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING === type) {
    return require(7767) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message);
  } else if (closure_2.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING === type) {
    return require(7767) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message);
  } else {
    if (closure_2.CHAT_INPUT_COMMAND !== type) {
      if (closure_2.CONTEXT_MENU_COMMAND !== type) {
        if (closure_2.GUILD_INVITE_REMINDER === type) {
          return null;
        } else if (closure_2.THREAD_CREATED === type) {
          return require(7770) /* createNewThreadSystemMessage */.createNewThreadSystemMessage(message);
        } else if (closure_2.THREAD_STARTER_MESSAGE === type) {
          return require(7771) /* createThreadStarterSystemMessage */.createThreadStarterSystemMessage(message);
        } else if (closure_2.AUTO_MODERATION_ACTION === type) {
          return require(7772) /* createAutoModerationActionSystemMessage */.createAutoModerationActionSystemMessage(message);
        } else if (closure_2.ROLE_SUBSCRIPTION_PURCHASE === type) {
          return require(7781) /* createRoleSubscriptionPurchaseSystemMessage */.createRoleSubscriptionPurchaseSystemMessage(message);
        } else if (closure_2.PURCHASE_NOTIFICATION === type) {
          return require(7782) /* createPurchaseNotificationSystemMessage */.createPurchaseNotificationSystemMessage(message);
        } else if (closure_2.STAGE_START === type) {
          return require(7784) /* createStageStartSystemMessage */.createStageStartSystemMessage(message);
        } else if (closure_2.STAGE_END === type) {
          return require(7785) /* createStageEndSystemMessage */.createStageEndSystemMessage(message);
        } else if (closure_2.STAGE_TOPIC === type) {
          return require(7786) /* createStageTopicSystemMessage */.createStageTopicSystemMessage(message);
        } else if (closure_2.STAGE_SPEAKER === type) {
          return require(7787) /* createStageSpeakerSystemMessage */.createStageSpeakerSystemMessage(message);
        } else if (closure_2.STAGE_RAISE_HAND === type) {
          return require(7788) /* createRequestToSpeakEphemeralIndication */.createStageRaiseHandSystemMessage(message);
        } else if (closure_2.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
          return require(7789) /* createApplicationSubscriptionPurchaseSystemMessage */.createApplicationSubscriptionPurchaseSystemMessage(message);
        } else {
          if (closure_2.PRIVATE_CHANNEL_INTEGRATION_ADDED !== type) {
            if (closure_2.PRIVATE_CHANNEL_INTEGRATION_REMOVED !== type) {
              if (closure_2.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                return require(7791) /* nativeStyleProperties */.createGuildAlertModeEnabledSystemMessage(message);
              } else if (closure_2.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                return require(7791) /* nativeStyleProperties */.createGuildAlertModeDisabledSystemMessage(message);
              } else if (closure_2.GUILD_INCIDENT_REPORT_RAID === type) {
                return require(7798) /* createGuildReportRaidSystemMessage */.createGuildReportRaidSystemMessage(message);
              } else if (closure_2.GUILD_INCIDENT_REPORT_FALSE_ALARM === type) {
                return require(7799) /* createGuildReportFalseAlarmSystemMessage */.createGuildReportFalseAlarmSystemMessage(message);
              } else if (closure_2.POLL_RESULT === type) {
                return require(7800) /* castHook */.createPollResultSystemMessage(message);
              } else if (closure_2.CHANNEL_LINKED_TO_LOBBY === type) {
                return require(7802) /* createChannelLinkedToLobbySystemMessage */.createChannelLinkedToLobbySystemMessage(message);
              } else if (closure_2.IN_GAME_MESSAGE_NUX === type) {
                return require(7803) /* createInGameMessageNuxSystemMessage */.createInGameMessageNuxSystemMessage(message);
              } else {
                if (closure_2.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION !== type) {
                  if (closure_2.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION !== type) {
                    if (closure_2.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION !== type) {
                      if (closure_2.PREMIUM_GROUP_INVITE === type) {
                        return require(7805) /* createPremiumGroupInviteSystemMessage */.createPremiumGroupInviteSystemMessage(message);
                      } else if (closure_2.PREMIUM_REFERRAL === type) {
                        return require(7810) /* createReferralSystemMessage */.createReferralSystemMessage(message);
                      } else if (closure_2.VOICE_SESSION === type) {
                        return require(7822) /* getMessageContent */.createVoiceSessionSystemMessage(message);
                      } else if (closure_2.FRIEND_REQUEST_ACCEPTED === type) {
                        return require(7826) /* createFriendRequestAcceptedSystemMessage */.createFriendRequestAcceptedSystemMessage(message);
                      } else if (closure_2.GIFTING_PROMPT === type) {
                        return require(7828) /* createGiftIntentSystemMessage */.createGiftIntentSystemMessage(message);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                return require(7804) /* getMessageContent */.createJoinRequestNotificationSystemMessage(message);
              }
            }
          }
          return require(7790) /* createPrivateChannelIntegrationSystemMessage */.createPrivateChannelIntegrationSystemMessage(message, message.message.type);
        }
      }
    }
    return require(7768) /* createApplicationCommandSourceSystemMessage */.createApplicationCommandSourceSystemMessage(message);
  }
};
