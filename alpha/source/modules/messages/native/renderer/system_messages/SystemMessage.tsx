// Module ID: 8220
// Function ID: 8221
// Name: SystemMessage
// Dependencies: [1074, 8221, 8240, 8241, 8244, 8245, 8246, 8247, 8265, 8267, 8268, 8269, 8270, 8271, 8273, 8274, 8275, 8285, 8286, 8288, 8289, 8290, 8291, 8292, 8293, 8294, 8295, 8302, 8303, 8304, 8306, 8307, 8308, 8309, 8315, 8332, 8336, 8338, 2]
// Exports: createSystemMessageContent

// Module 8220 (SystemMessage)
import AddRecipientSystemMessage from "AddRecipientSystemMessage" /* 8221 */;
import RemoveRecipientSystemMessage from "RemoveRecipientSystemMessage" /* 8240 */;
import CallSystemMessage from "CallSystemMessage" /* 8241 */;
import ChangeChannelNameSystemMessage from "ChangeChannelNameSystemMessage" /* 8244 */;
import ChangeChannelIconSystemMessage from "ChangeChannelIconSystemMessage" /* 8245 */;
import ChannelPinnedMessageSystemMessage from "ChannelPinnedMessageSystemMessage" /* 8246 */;
import UserJoinSystemMessage from "UserJoinSystemMessage" /* 8247 */;
import UserPremiumGuildSubscriptionSystemMessage from "UserPremiumGuildSubscriptionSystemMessage" /* 8265 */;
import UserPremiumGuildSubscriptionTierAchievedSystemMessage from "UserPremiumGuildSubscriptionTierAchievedSystemMessage" /* 8267 */;
import ChannelFollowAddSystemMessage from "ChannelFollowAddSystemMessage" /* 8268 */;
import GuildStreamSystemMessage from "GuildStreamSystemMessage" /* 8269 */;
import GuildDiscoverySystemMessage from "GuildDiscoverySystemMessage" /* 8270 */;
import ApplicationCommandSourceSystemMessage from "ApplicationCommandSourceSystemMessage" /* 8271 */;
import NewThreadSystemMessage from "NewThreadSystemMessage" /* 8273 */;
import ThreadStarterSystemMessage from "ThreadStarterSystemMessage" /* 8274 */;
import AutoModerationActionSystemMessage from "AutoModerationActionSystemMessage" /* 8275 */;
import RoleSubscriptionPurchaseSystemMessage from "RoleSubscriptionPurchaseSystemMessage" /* 8285 */;
import PurchaseNotificationSystemMessage from "PurchaseNotificationSystemMessage" /* 8286 */;
import StageStartSystemMessage from "StageStartSystemMessage" /* 8288 */;
import StageEndSystemMessage from "StageEndSystemMessage" /* 8289 */;
import StageTopicSystemMessage from "StageTopicSystemMessage" /* 8290 */;
import StageSpeakerSystemMessage from "StageSpeakerSystemMessage" /* 8291 */;
import StageRaiseHandSystemMessage from "StageRaiseHandSystemMessage" /* 8292 */;
import ApplicationSubscriptionPurchaseSystemMessage from "ApplicationSubscriptionPurchaseSystemMessage" /* 8293 */;
import PrivateChannelIntegrationSystemMessage from "PrivateChannelIntegrationSystemMessage" /* 8294 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 8295 */;
import GuildReportRaidSystemMessage from "GuildReportRaidSystemMessage" /* 8302 */;
import GuildReportFalseAlarmSystemMessage from "GuildReportFalseAlarmSystemMessage" /* 8303 */;
import PollResultSystemMessage from "PollResultSystemMessage" /* 8304 */;
import ChannelLinkedToLobbySystemMessage from "ChannelLinkedToLobbySystemMessage" /* 8306 */;
import InGameMessageNuxSystemMessage from "InGameMessageNuxSystemMessage" /* 8307 */;
import JoinRequestNotificationSystemMessage from "JoinRequestNotificationSystemMessage" /* 8308 */;
import PremiumGroupInviteSystemMessage from "PremiumGroupInviteSystemMessage" /* 8309 */;
import ReferralSystemMessage from "ReferralSystemMessage" /* 8315 */;
import VoiceSessionSystemMessage from "VoiceSessionSystemMessage" /* 8332 */;
import FriendRequestAcceptedSystemMessage from "FriendRequestAcceptedSystemMessage" /* 8336 */;
import GiftIntentSystemMessage from "GiftIntentSystemMessage" /* 8338 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ MessageTypes: c2, BoostedGuildTiers: c3 } = Constants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/SystemMessage.tsx");

export const createSystemMessageContent = function createSystemMessageContent(message) {
  const type = message.message.type;
  if (constants.RECIPIENT_ADD === type) {
    return AddRecipientSystemMessage.createAddRecipientSystemMessage(message);
  } else if (tmp.RECIPIENT_REMOVE === type) {
    return RemoveRecipientSystemMessage.createRemoveRecipientSystemMessage(message);
  } else if (tmp.CALL === type) {
    return CallSystemMessage.createCallSystemMessage(message);
  } else if (tmp.CHANNEL_NAME_CHANGE === type) {
    return ChangeChannelNameSystemMessage.createChangeChannelNameSystemMessage(message);
  } else if (tmp.CHANNEL_ICON_CHANGE === type) {
    return ChangeChannelIconSystemMessage.createChangeChannelIconSystemMessage(message);
  } else if (tmp.CHANNEL_PINNED_MESSAGE === type) {
    return ChannelPinnedMessageSystemMessage.createChannelPinnedMessageSystemMessage(message);
  } else if (tmp.USER_JOIN === type) {
    return UserJoinSystemMessage.createUserJoinSystemMessage(message);
  } else if (tmp.GUILD_BOOST === type) {
    return UserPremiumGuildSubscriptionSystemMessage.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else if (tmp.GUILD_BOOST_TIER_1 === type) {
    return UserPremiumGuildSubscriptionTierAchievedSystemMessage.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, React3.TIER_1);
  } else if (tmp.GUILD_BOOST_TIER_2 === type) {
    return UserPremiumGuildSubscriptionTierAchievedSystemMessage.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, React3.TIER_2);
  } else if (tmp.GUILD_BOOST_TIER_3 === type) {
    return UserPremiumGuildSubscriptionTierAchievedSystemMessage.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, React3.TIER_3);
  } else if (tmp.CHANNEL_FOLLOW_ADD === type) {
    return ChannelFollowAddSystemMessage.createChannelFollowAddSystemMessage(message);
  } else if (tmp.GUILD_STREAM === type) {
    return GuildStreamSystemMessage.createGuildStreamSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_DISQUALIFIED === type) {
    return GuildDiscoverySystemMessage.createGuildDiscoveryDisqualifiedSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_REQUALIFIED === type) {
    return GuildDiscoverySystemMessage.createGuildDiscoveryRequalifiedSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING === type) {
    return GuildDiscoverySystemMessage.createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message);
  } else if (tmp.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING === type) {
    return GuildDiscoverySystemMessage.createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message);
  } else {
    if (tmp.CHAT_INPUT_COMMAND !== type) {
      if (tmp.CONTEXT_MENU_COMMAND !== type) {
        if (tmp.GUILD_INVITE_REMINDER === type) {
          return null;
        } else if (tmp.THREAD_CREATED === type) {
          return NewThreadSystemMessage.createNewThreadSystemMessage(message);
        } else if (tmp.THREAD_STARTER_MESSAGE === type) {
          return ThreadStarterSystemMessage.createThreadStarterSystemMessage(message);
        } else if (tmp.AUTO_MODERATION_ACTION === type) {
          return AutoModerationActionSystemMessage.createAutoModerationActionSystemMessage(message);
        } else if (tmp.ROLE_SUBSCRIPTION_PURCHASE === type) {
          return RoleSubscriptionPurchaseSystemMessage.createRoleSubscriptionPurchaseSystemMessage(message);
        } else if (tmp.PURCHASE_NOTIFICATION === type) {
          return PurchaseNotificationSystemMessage.createPurchaseNotificationSystemMessage(message);
        } else if (tmp.STAGE_START === type) {
          return StageStartSystemMessage.createStageStartSystemMessage(message);
        } else if (tmp.STAGE_END === type) {
          return StageEndSystemMessage.createStageEndSystemMessage(message);
        } else if (tmp.STAGE_TOPIC === type) {
          return StageTopicSystemMessage.createStageTopicSystemMessage(message);
        } else if (tmp.STAGE_SPEAKER === type) {
          return StageSpeakerSystemMessage.createStageSpeakerSystemMessage(message);
        } else if (tmp.STAGE_RAISE_HAND === type) {
          return StageRaiseHandSystemMessage.createStageRaiseHandSystemMessage(message);
        } else if (tmp.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
          return ApplicationSubscriptionPurchaseSystemMessage.createApplicationSubscriptionPurchaseSystemMessage(message);
        } else {
          if (tmp.PRIVATE_CHANNEL_INTEGRATION_ADDED !== type) {
            if (tmp.PRIVATE_CHANNEL_INTEGRATION_REMOVED !== type) {
              if (tmp.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                return GuildAlertModeSystemMessage.createGuildAlertModeEnabledSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                return GuildAlertModeSystemMessage.createGuildAlertModeDisabledSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_REPORT_RAID === type) {
                return GuildReportRaidSystemMessage.createGuildReportRaidSystemMessage(message);
              } else if (tmp.GUILD_INCIDENT_REPORT_FALSE_ALARM === type) {
                return GuildReportFalseAlarmSystemMessage.createGuildReportFalseAlarmSystemMessage(message);
              } else if (tmp.POLL_RESULT === type) {
                return PollResultSystemMessage.createPollResultSystemMessage(message);
              } else if (tmp.CHANNEL_LINKED_TO_LOBBY === type) {
                return ChannelLinkedToLobbySystemMessage.createChannelLinkedToLobbySystemMessage(message);
              } else if (tmp.IN_GAME_MESSAGE_NUX === type) {
                return InGameMessageNuxSystemMessage.createInGameMessageNuxSystemMessage(message);
              } else {
                if (tmp.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION !== type) {
                  if (tmp.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION !== type) {
                    if (tmp.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION !== type) {
                      if (tmp.PREMIUM_GROUP_INVITE === type) {
                        return PremiumGroupInviteSystemMessage.createPremiumGroupInviteSystemMessage(message);
                      } else if (tmp.PREMIUM_REFERRAL === type) {
                        return ReferralSystemMessage.createReferralSystemMessage(message);
                      } else if (tmp.VOICE_SESSION === type) {
                        return VoiceSessionSystemMessage.createVoiceSessionSystemMessage(message);
                      } else if (tmp.FRIEND_REQUEST_ACCEPTED === type) {
                        return FriendRequestAcceptedSystemMessage.createFriendRequestAcceptedSystemMessage(message);
                      } else if (tmp.GIFTING_PROMPT === type) {
                        return GiftIntentSystemMessage.createGiftIntentSystemMessage(message);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                return JoinRequestNotificationSystemMessage.createJoinRequestNotificationSystemMessage(message);
              }
            }
          }
          return PrivateChannelIntegrationSystemMessage.createPrivateChannelIntegrationSystemMessage(message, message.message.type);
        }
      }
    }
    return ApplicationCommandSourceSystemMessage.createApplicationCommandSourceSystemMessage(message);
  }
};
