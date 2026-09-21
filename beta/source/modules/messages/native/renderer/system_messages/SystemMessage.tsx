// Module ID: 8216
// Function ID: 8217
// Name: SystemMessage
// Dependencies: [1074, 8217, 8236, 8237, 8240, 8241, 8242, 8243, 8261, 8263, 8264, 8265, 8266, 8267, 8269, 8270, 8271, 8281, 8282, 8284, 8285, 8286, 8287, 8288, 8289, 8290, 8291, 8298, 8299, 8300, 8302, 8303, 8304, 8305, 8311, 8328, 8332, 8334, 2]
// Exports: createSystemMessageContent

// Module 8216 (SystemMessage)
import AddRecipientSystemMessage from "AddRecipientSystemMessage" /* 8217 */;
import RemoveRecipientSystemMessage from "RemoveRecipientSystemMessage" /* 8236 */;
import CallSystemMessage from "CallSystemMessage" /* 8237 */;
import ChangeChannelNameSystemMessage from "ChangeChannelNameSystemMessage" /* 8240 */;
import ChangeChannelIconSystemMessage from "ChangeChannelIconSystemMessage" /* 8241 */;
import ChannelPinnedMessageSystemMessage from "ChannelPinnedMessageSystemMessage" /* 8242 */;
import UserJoinSystemMessage from "UserJoinSystemMessage" /* 8243 */;
import UserPremiumGuildSubscriptionSystemMessage from "UserPremiumGuildSubscriptionSystemMessage" /* 8261 */;
import UserPremiumGuildSubscriptionTierAchievedSystemMessage from "UserPremiumGuildSubscriptionTierAchievedSystemMessage" /* 8263 */;
import ChannelFollowAddSystemMessage from "ChannelFollowAddSystemMessage" /* 8264 */;
import GuildStreamSystemMessage from "GuildStreamSystemMessage" /* 8265 */;
import GuildDiscoverySystemMessage from "GuildDiscoverySystemMessage" /* 8266 */;
import ApplicationCommandSourceSystemMessage from "ApplicationCommandSourceSystemMessage" /* 8267 */;
import NewThreadSystemMessage from "NewThreadSystemMessage" /* 8269 */;
import ThreadStarterSystemMessage from "ThreadStarterSystemMessage" /* 8270 */;
import AutoModerationActionSystemMessage from "AutoModerationActionSystemMessage" /* 8271 */;
import RoleSubscriptionPurchaseSystemMessage from "RoleSubscriptionPurchaseSystemMessage" /* 8281 */;
import PurchaseNotificationSystemMessage from "PurchaseNotificationSystemMessage" /* 8282 */;
import StageStartSystemMessage from "StageStartSystemMessage" /* 8284 */;
import StageEndSystemMessage from "StageEndSystemMessage" /* 8285 */;
import StageTopicSystemMessage from "StageTopicSystemMessage" /* 8286 */;
import StageSpeakerSystemMessage from "StageSpeakerSystemMessage" /* 8287 */;
import StageRaiseHandSystemMessage from "StageRaiseHandSystemMessage" /* 8288 */;
import ApplicationSubscriptionPurchaseSystemMessage from "ApplicationSubscriptionPurchaseSystemMessage" /* 8289 */;
import PrivateChannelIntegrationSystemMessage from "PrivateChannelIntegrationSystemMessage" /* 8290 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 8291 */;
import GuildReportRaidSystemMessage from "GuildReportRaidSystemMessage" /* 8298 */;
import GuildReportFalseAlarmSystemMessage from "GuildReportFalseAlarmSystemMessage" /* 8299 */;
import PollResultSystemMessage from "PollResultSystemMessage" /* 8300 */;
import ChannelLinkedToLobbySystemMessage from "ChannelLinkedToLobbySystemMessage" /* 8302 */;
import InGameMessageNuxSystemMessage from "InGameMessageNuxSystemMessage" /* 8303 */;
import JoinRequestNotificationSystemMessage from "JoinRequestNotificationSystemMessage" /* 8304 */;
import PremiumGroupInviteSystemMessage from "PremiumGroupInviteSystemMessage" /* 8305 */;
import ReferralSystemMessage from "ReferralSystemMessage" /* 8311 */;
import VoiceSessionSystemMessage from "VoiceSessionSystemMessage" /* 8328 */;
import FriendRequestAcceptedSystemMessage from "FriendRequestAcceptedSystemMessage" /* 8332 */;
import GiftIntentSystemMessage from "GiftIntentSystemMessage" /* 8334 */;
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
