// Module ID: 7949
// Function ID: 7950
// Name: SystemMessage
// Dependencies: [1085, 7950, 7969, 7970, 7973, 7974, 7975, 7976, 7995, 7997, 8008, 8009, 8010, 8011, 8013, 8014, 8015, 8025, 8026, 8028, 8029, 8030, 8031, 8032, 8033, 8034, 8035, 8042, 8043, 8044, 8046, 8047, 8048, 8049, 8055, 8072, 8076, 8078, 8089, 2]
// Exports: createSystemMessageContent

// Module 7949 (SystemMessage)
import AddRecipientSystemMessage from "AddRecipientSystemMessage" /* 7950 */;
import RemoveRecipientSystemMessage from "RemoveRecipientSystemMessage" /* 7969 */;
import CallSystemMessage from "CallSystemMessage" /* 7970 */;
import ChangeChannelNameSystemMessage from "ChangeChannelNameSystemMessage" /* 7973 */;
import ChangeChannelIconSystemMessage from "ChangeChannelIconSystemMessage" /* 7974 */;
import ChannelPinnedMessageSystemMessage from "ChannelPinnedMessageSystemMessage" /* 7975 */;
import UserJoinSystemMessage from "UserJoinSystemMessage" /* 7976 */;
import UserPremiumGuildSubscriptionSystemMessage from "UserPremiumGuildSubscriptionSystemMessage" /* 7995 */;
import UserPremiumGuildSubscriptionTierAchievedSystemMessage from "UserPremiumGuildSubscriptionTierAchievedSystemMessage" /* 7997 */;
import ChannelFollowAddSystemMessage from "ChannelFollowAddSystemMessage" /* 8008 */;
import GuildStreamSystemMessage from "GuildStreamSystemMessage" /* 8009 */;
import GuildDiscoverySystemMessage from "GuildDiscoverySystemMessage" /* 8010 */;
import ApplicationCommandSourceSystemMessage from "ApplicationCommandSourceSystemMessage" /* 8011 */;
import NewThreadSystemMessage from "NewThreadSystemMessage" /* 8013 */;
import ThreadStarterSystemMessage from "ThreadStarterSystemMessage" /* 8014 */;
import AutoModerationActionSystemMessage from "AutoModerationActionSystemMessage" /* 8015 */;
import RoleSubscriptionPurchaseSystemMessage from "RoleSubscriptionPurchaseSystemMessage" /* 8025 */;
import PurchaseNotificationSystemMessage from "PurchaseNotificationSystemMessage" /* 8026 */;
import StageStartSystemMessage from "StageStartSystemMessage" /* 8028 */;
import StageEndSystemMessage from "StageEndSystemMessage" /* 8029 */;
import StageTopicSystemMessage from "StageTopicSystemMessage" /* 8030 */;
import StageSpeakerSystemMessage from "StageSpeakerSystemMessage" /* 8031 */;
import StageRaiseHandSystemMessage from "StageRaiseHandSystemMessage" /* 8032 */;
import ApplicationSubscriptionPurchaseSystemMessage from "ApplicationSubscriptionPurchaseSystemMessage" /* 8033 */;
import PrivateChannelIntegrationSystemMessage from "PrivateChannelIntegrationSystemMessage" /* 8034 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 8035 */;
import GuildReportRaidSystemMessage from "GuildReportRaidSystemMessage" /* 8042 */;
import GuildReportFalseAlarmSystemMessage from "GuildReportFalseAlarmSystemMessage" /* 8043 */;
import PollResultSystemMessage from "PollResultSystemMessage" /* 8044 */;
import ChannelLinkedToLobbySystemMessage from "ChannelLinkedToLobbySystemMessage" /* 8046 */;
import InGameMessageNuxSystemMessage from "InGameMessageNuxSystemMessage" /* 8047 */;
import JoinRequestNotificationSystemMessage from "JoinRequestNotificationSystemMessage" /* 8048 */;
import PremiumGroupInviteSystemMessage from "PremiumGroupInviteSystemMessage" /* 8049 */;
import ReferralSystemMessage from "ReferralSystemMessage" /* 8055 */;
import VoiceSessionSystemMessage from "VoiceSessionSystemMessage" /* 8072 */;
import FriendRequestAcceptedSystemMessage from "FriendRequestAcceptedSystemMessage" /* 8076 */;
import GiftIntentSystemMessage from "GiftIntentSystemMessage" /* 8078 */;
import GuildSpaceSystemMessage from "GuildSpaceSystemMessage" /* 8089 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ MessageTypes: c2, BoostedGuildTiers: c3 } = Constants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/SystemMessage.tsx");

export const createSystemMessageContent = function createSystemMessageContent(message) {
  const type = message.message.type;
  if (constants.RECIPIENT_ADD === type) {
    const obj44 = AddRecipientSystemMessage;
    return obj44.createAddRecipientSystemMessage(message);
  } else if (constants.RECIPIENT_REMOVE === type) {
    const obj43 = RemoveRecipientSystemMessage;
    return obj43.createRemoveRecipientSystemMessage(message);
  } else if (constants.CALL === type) {
    const obj42 = CallSystemMessage;
    return obj42.createCallSystemMessage(message);
  } else if (constants.CHANNEL_NAME_CHANGE === type) {
    const obj41 = ChangeChannelNameSystemMessage;
    return obj41.createChangeChannelNameSystemMessage(message);
  } else if (constants.CHANNEL_ICON_CHANGE === type) {
    const obj40 = ChangeChannelIconSystemMessage;
    return obj40.createChangeChannelIconSystemMessage(message);
  } else if (constants.CHANNEL_PINNED_MESSAGE === type) {
    const obj39 = ChannelPinnedMessageSystemMessage;
    return obj39.createChannelPinnedMessageSystemMessage(message);
  } else if (constants.USER_JOIN === type) {
    const obj38 = UserJoinSystemMessage;
    return obj38.createUserJoinSystemMessage(message);
  } else if (constants.GUILD_BOOST === type) {
    const obj37 = UserPremiumGuildSubscriptionSystemMessage;
    return obj37.createUserPremiumGuildSubscriptionSystemMessage(message);
  } else if (constants.GUILD_BOOST_TIER_1 === type) {
    const obj36 = UserPremiumGuildSubscriptionTierAchievedSystemMessage;
    return obj36.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, _false.TIER_1);
  } else if (constants.GUILD_BOOST_TIER_2 === type) {
    const obj35 = UserPremiumGuildSubscriptionTierAchievedSystemMessage;
    return obj35.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, _false.TIER_2);
  } else if (constants.GUILD_BOOST_TIER_3 === type) {
    const obj34 = UserPremiumGuildSubscriptionTierAchievedSystemMessage;
    return obj34.createUserPremiumGuildSubscriptionTierAchievedSystemMessage(message, _false.TIER_3);
  } else if (constants.CHANNEL_FOLLOW_ADD === type) {
    const obj33 = ChannelFollowAddSystemMessage;
    return obj33.createChannelFollowAddSystemMessage(message);
  } else if (constants.GUILD_STREAM === type) {
    const obj32 = GuildStreamSystemMessage;
    return obj32.createGuildStreamSystemMessage(message);
  } else if (constants.GUILD_DISCOVERY_DISQUALIFIED === type) {
    const obj31 = GuildDiscoverySystemMessage;
    return obj31.createGuildDiscoveryDisqualifiedSystemMessage(message);
  } else if (constants.GUILD_DISCOVERY_REQUALIFIED === type) {
    const obj30 = GuildDiscoverySystemMessage;
    return obj30.createGuildDiscoveryRequalifiedSystemMessage(message);
  } else if (constants.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING === type) {
    const obj29 = GuildDiscoverySystemMessage;
    return obj29.createGuildDiscoveryGracePeriodInitialWarningSystemMessage(message);
  } else if (constants.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING === type) {
    const obj28 = GuildDiscoverySystemMessage;
    return obj28.createGuildDiscoveryGracePeriodFinalWarningSystemMessage(message);
  } else {
    if (constants.CHAT_INPUT_COMMAND !== type) {
      if (constants.CONTEXT_MENU_COMMAND !== type) {
        if (constants.GUILD_INVITE_REMINDER === type) {
          return null;
        } else if (constants.THREAD_CREATED === type) {
          const obj26 = NewThreadSystemMessage;
          return obj26.createNewThreadSystemMessage(message);
        } else if (constants.THREAD_STARTER_MESSAGE === type) {
          const obj25 = ThreadStarterSystemMessage;
          return obj25.createThreadStarterSystemMessage(message);
        } else if (constants.AUTO_MODERATION_ACTION === type) {
          const obj24 = AutoModerationActionSystemMessage;
          return obj24.createAutoModerationActionSystemMessage(message);
        } else if (constants.ROLE_SUBSCRIPTION_PURCHASE === type) {
          const obj23 = RoleSubscriptionPurchaseSystemMessage;
          return obj23.createRoleSubscriptionPurchaseSystemMessage(message);
        } else if (constants.PURCHASE_NOTIFICATION === type) {
          const obj22 = PurchaseNotificationSystemMessage;
          return obj22.createPurchaseNotificationSystemMessage(message);
        } else if (constants.STAGE_START === type) {
          const obj21 = StageStartSystemMessage;
          return obj21.createStageStartSystemMessage(message);
        } else if (constants.STAGE_END === type) {
          const obj20 = StageEndSystemMessage;
          return obj20.createStageEndSystemMessage(message);
        } else if (constants.STAGE_TOPIC === type) {
          const obj19 = StageTopicSystemMessage;
          return obj19.createStageTopicSystemMessage(message);
        } else if (constants.STAGE_SPEAKER === type) {
          const obj18 = StageSpeakerSystemMessage;
          return obj18.createStageSpeakerSystemMessage(message);
        } else if (constants.STAGE_RAISE_HAND === type) {
          const obj17 = StageRaiseHandSystemMessage;
          return obj17.createStageRaiseHandSystemMessage(message);
        } else if (constants.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION === type) {
          const obj16 = ApplicationSubscriptionPurchaseSystemMessage;
          return obj16.createApplicationSubscriptionPurchaseSystemMessage(message);
        } else {
          if (constants.PRIVATE_CHANNEL_INTEGRATION_ADDED !== type) {
            if (constants.PRIVATE_CHANNEL_INTEGRATION_REMOVED !== type) {
              if (constants.GUILD_INCIDENT_ALERT_MODE_ENABLED === type) {
                const obj14 = GuildAlertModeSystemMessage;
                return obj14.createGuildAlertModeEnabledSystemMessage(message);
              } else if (constants.GUILD_INCIDENT_ALERT_MODE_DISABLED === type) {
                const obj13 = GuildAlertModeSystemMessage;
                return obj13.createGuildAlertModeDisabledSystemMessage(message);
              } else if (constants.GUILD_INCIDENT_REPORT_RAID === type) {
                const obj12 = GuildReportRaidSystemMessage;
                return obj12.createGuildReportRaidSystemMessage(message);
              } else if (constants.GUILD_INCIDENT_REPORT_FALSE_ALARM === type) {
                const obj11 = GuildReportFalseAlarmSystemMessage;
                return obj11.createGuildReportFalseAlarmSystemMessage(message);
              } else if (constants.POLL_RESULT === type) {
                const obj10 = PollResultSystemMessage;
                return obj10.createPollResultSystemMessage(message);
              } else if (constants.CHANNEL_LINKED_TO_LOBBY === type) {
                const obj9 = ChannelLinkedToLobbySystemMessage;
                return obj9.createChannelLinkedToLobbySystemMessage(message);
              } else if (constants.IN_GAME_MESSAGE_NUX === type) {
                const obj8 = InGameMessageNuxSystemMessage;
                return obj8.createInGameMessageNuxSystemMessage(message);
              } else {
                if (constants.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION !== type) {
                  if (constants.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION !== type) {
                    if (constants.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION !== type) {
                      if (constants.PREMIUM_GROUP_INVITE === type) {
                        const obj6 = PremiumGroupInviteSystemMessage;
                        return obj6.createPremiumGroupInviteSystemMessage(message);
                      } else if (constants.PREMIUM_REFERRAL === type) {
                        const obj5 = ReferralSystemMessage;
                        return obj5.createReferralSystemMessage(message);
                      } else if (constants.VOICE_SESSION === type) {
                        const obj4 = VoiceSessionSystemMessage;
                        return obj4.createVoiceSessionSystemMessage(message);
                      } else if (constants.FRIEND_REQUEST_ACCEPTED === type) {
                        const obj3 = FriendRequestAcceptedSystemMessage;
                        return obj3.createFriendRequestAcceptedSystemMessage(message);
                      } else if (constants.GIFTING_PROMPT === type) {
                        const obj2 = GiftIntentSystemMessage;
                        return obj2.createGiftIntentSystemMessage(message);
                      } else if (constants.GUILD_SPACE_MESSAGE === type) {
                        const obj = GuildSpaceSystemMessage;
                        return obj.createGuildSpaceSystemMessage(message);
                      } else {
                        return null;
                      }
                    }
                  }
                }
                const obj7 = JoinRequestNotificationSystemMessage;
                return obj7.createJoinRequestNotificationSystemMessage(message);
              }
            }
          }
          const obj15 = PrivateChannelIntegrationSystemMessage;
          return obj15.createPrivateChannelIntegrationSystemMessage(message, message.message.type);
        }
      }
    }
    const obj27 = ApplicationCommandSourceSystemMessage;
    return obj27.createApplicationCommandSourceSystemMessage(message);
  }
};
