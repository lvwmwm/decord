// Module ID: 7738
// Function ID: 7739
// Name: createSystemMessageContent
// Dependencies: [676, 7739, 7756, 7757, 7760, 7761, 7762, 7763, 7782, 7784, 7785, 7786, 7787, 7788, 7790, 7791, 7792, 7801, 7802, 7804, 7805, 7806, 7807, 7808, 7809, 7810, 7811, 7818, 7819, 7820, 7822, 7823, 7824, 7825, 7830, 7842, 7846, 7848, 2]
// Exports: createSystemMessageContent

// Module 7738 (createSystemMessageContent)
import ME from "ME";

let c3;
let obj1;
({ MessageTypes: obj1, BoostedGuildTiers: c3 } = ME);
const result = require("createRemoveRecipientSystemMessage").fileFinishedImporting("modules/messages/native/renderer/system_messages/SystemMessage.tsx");

export const createSystemMessageContent = function createSystemMessageContent(message) {
  const type = message.message.type;
  if (constants.RECIPIENT_ADD === type) {
    return require(7739) /* createAddRecipientSystemMessage */.createAddRecipientSystemMessage(message);
  } else if (tmp.RECIPIENT_REMOVE === type) {
    return require(7756) /* createRemoveRecipientSystemMessage */.createRemoveRecipientSystemMessage(message);
  } else if (tmp.CALL === type) {
    return require(7757) /* createCallSystemMessage */.createCallSystemMessage(message);
  } else if (tmp.CHANNEL_NAME_CHANGE === type) {
    return require(7760) /* createChangeChannelNameSystemMessage */.createChangeChannelNameSystemMessage(message);
  } else if (tmp.CHANNEL_ICON_CHANGE === type) {
    return require(7761) /* createChangeChannelIconSystemMessage */.createChangeChannelIconSystemMessage(message);
  } else if (tmp.CHANNEL_PINNED_MESSAGE === type) {
    return require(7762) /* createChannelPinnedMessageSystemMessage */.createChannelPinnedMessageSystemMessage(message);
  } else if (tmp.USER_JOIN === type) {
    return require(7763) /* createUserJoinSystemMessage */.createUserJoinSystemMessage(message);
  } else if (tmp.GUILD_BOOST === type) {
    return require(7782) /* createUserPremiumGuildSubscriptionSystemMessage */.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else if (tmp.GUILD_BOOST_TIER_1 === type) {
    return require(7784) /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_1);
  } else if (tmp.GUILD_BOOST_TIER_2 === type) {
    return require(7784) /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_2);
  } else if (tmp.GUILD_BOOST_TIER_3 === type) {
    return require(7784) /* createUserPremiumGuildSubscriptionTierAchievedSystemMessage */.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, closure_3.TIER_3);
  } else if (tmp.CHANNEL_FOLLOW_ADD === type) {
    return require(7785) /* createChannelFollowAddSystemMessage */.createChannelFollowAddSystemMessage(message);
  } else if (tmp.GUILD_STREAM === type) {
    return require(7786) /* createGuildStreamSystemMessage */.createGuildStreamSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_DISQUALIFIED === type) {
    return require(7787) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryDisqualifiedSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_REQUALIFIED === type) {
    return require(7787) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryRequalifiedSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING === type) {
    return require(7787) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING === type) {
    return require(7787) /* createGuildDiscoveryDisqualifiedSystemMessage */.createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message);
  } else {
    if (tmp.CHAT_INPUT_COMMAND !== type) {
      if (tmp.CONTEXT_MENU_COMMAND !== type) {
        if (tmp.GUILD_INVITE_REMINDER === type) {
          return null;
        } else if (tmp.THREAD_CREATED === type) {
          return require(7790) /* createNewThreadSystemMessage */.createNewThreadSystemMessage(message);
        } else if (tmp.THREAD_STARTER_MESSAGE === type) {
          return require(7791) /* createThreadStarterSystemMessage */.createThreadStarterSystemMessage(message);
        } else if (tmp.AUTO_MODERATION_ACTION === type) {
          return require(7792) /* createAutoModerationActionSystemMessage */.createAutoModerationActionSystemMessage(message);
        } else if (tmp.ROLE_SUBSCRIPTION_PURCHASE === type) {
          return require(7801) /* createRoleSubscriptionPurchaseSystemMessage */.createRoleSubscriptionPurchaseSystemMessage(message);
        } else if (tmp.PURCHASE_NOTIFICATION === type) {
          return require(7802) /* createPurchaseNotificationSystemMessage */.createPurchaseNotificationSystemMessage(message);
        } else if (tmp.STAGE_START === type) {
          return require(7804) /* createStageStartSystemMessage */.createStageStartSystemMessage(message);
        } else if (tmp.STAGE_END === type) {
          return require(7805) /* createStageEndSystemMessage */.createStageEndSystemMessage(message);
        } else if (tmp.STAGE_TOPIC === type) {
          return require(7806) /* createStageTopicSystemMessage */.createStageTopicSystemMessage(message);
        } else if (tmp.STAGE_SPEAKER === type) {
          return require(7807) /* createStageSpeakerSystemMessage */.createStageSpeakerSystemMessage(message);
        } else if (tmp.STAGE_RAISE_HAND === type) {
          return require(7808) /* createStageRaiseHandSystemMessage */.createStageRaiseHandSystemMessage(message);
        } else if (tmp.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
          return require(7809) /* createApplicationSubscriptionPurchaseSystemMessage */.createApplicationSubscriptionPurchaseSystemMessage(message);
        } else {
          if (tmp.PRIVATE_CHANNEL_INTEGRATION_ADDED !== type) {
            if (tmp.PRIVATE_CHANNEL_INTEGRATION_REMOVED !== type) {
              if (tmp.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                return require(7811) /* nativeStyleProperties */.createGuildAlertModeEnabledSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                return require(7811) /* nativeStyleProperties */.createGuildAlertModeDisabledSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_REPORT_RAID === type) {
                return require(7818) /* createGuildReportRaidSystemMessage */.createGuildReportRaidSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_REPORT_FALSE_ALARM === type) {
                return require(7819) /* createGuildReportFalseAlarmSystemMessage */.createGuildReportFalseAlarmSystemMessage(message);
              } else if (tmp.POLL_RESULT === type) {
                return require(7820) /* createPollResultSystemMessage */.createPollResultSystemMessage(message);
              } else if (tmp.CHANNEL_LINKED_TO_LOBBY === type) {
                return require(7822) /* createChannelLinkedToLobbySystemMessage */.createChannelLinkedToLobbySystemMessage(message);
              } else if (tmp.IN_GAME_MESSAGE_NUX === type) {
                return require(7823) /* createInGameMessageNuxSystemMessage */.createInGameMessageNuxSystemMessage(message);
              } else {
                if (tmp.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION !== type) {
                  if (tmp.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION !== type) {
                    if (tmp.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION !== type) {
                      if (tmp.PREMIUM_GROUP_INVITE === type) {
                        return require(7825) /* createPremiumGroupInviteSystemMessage */.createPremiumGroupInviteSystemMessage(message);
                      } else if (tmp.PREMIUM_REFERRAL === type) {
                        return require(7830) /* createReferralSystemMessage */.createReferralSystemMessage(message);
                      } else if (tmp.VOICE_SESSION === type) {
                        return require(7842) /* createVoiceSessionSystemMessage */.createVoiceSessionSystemMessage(message);
                      } else if (tmp.FRIEND_REQUEST_ACCEPTED === type) {
                        return require(7846) /* createFriendRequestAcceptedSystemMessage */.createFriendRequestAcceptedSystemMessage(message);
                      } else if (tmp.GIFTING_PROMPT === type) {
                        return require(7848) /* createGiftIntentSystemMessage */.createGiftIntentSystemMessage(message);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                return require(7824) /* createJoinRequestNotificationSystemMessage */.createJoinRequestNotificationSystemMessage(message);
              }
            }
          }
          return require(7810) /* createPrivateChannelIntegrationSystemMessage */.createPrivateChannelIntegrationSystemMessage(message, message.message.type);
        }
      }
    }
    return require(7788) /* createApplicationCommandSourceSystemMessage */.createApplicationCommandSourceSystemMessage(message);
  }
};
