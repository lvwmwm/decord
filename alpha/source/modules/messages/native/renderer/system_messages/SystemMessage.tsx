// Module ID: 8508
// Function ID: 8509
// Name: SystemMessage
// Dependencies: [1072, 8509, 8527, 8528, 8531, 8532, 8533, 8534, 8552, 8554, 8565, 8566, 8567, 8568, 8570, 8571, 8572, 8582, 8583, 8585, 8586, 8587, 8588, 8589, 8590, 8591, 8592, 8599, 8600, 8601, 8603, 8604, 8605, 8606, 8612, 8629, 8633, 8635, 8646, 2]
// Exports: createSystemMessageContent

// Module 8508 (SystemMessage)
import AddRecipientSystemMessage from "AddRecipientSystemMessage" /* 8509 */;
import RemoveRecipientSystemMessage from "RemoveRecipientSystemMessage" /* 8527 */;
import CallSystemMessage from "CallSystemMessage" /* 8528 */;
import ChangeChannelNameSystemMessage from "ChangeChannelNameSystemMessage" /* 8531 */;
import ChangeChannelIconSystemMessage from "ChangeChannelIconSystemMessage" /* 8532 */;
import ChannelPinnedMessageSystemMessage from "ChannelPinnedMessageSystemMessage" /* 8533 */;
import UserJoinSystemMessage from "UserJoinSystemMessage" /* 8534 */;
import UserPremiumGuildSubscriptionSystemMessage from "UserPremiumGuildSubscriptionSystemMessage" /* 8552 */;
import UserPremiumGuildSubscriptionTierAchievedSystemMessage from "UserPremiumGuildSubscriptionTierAchievedSystemMessage" /* 8554 */;
import ChannelFollowAddSystemMessage from "ChannelFollowAddSystemMessage" /* 8565 */;
import GuildStreamSystemMessage from "GuildStreamSystemMessage" /* 8566 */;
import GuildDiscoverySystemMessage from "GuildDiscoverySystemMessage" /* 8567 */;
import ApplicationCommandSourceSystemMessage from "ApplicationCommandSourceSystemMessage" /* 8568 */;
import NewThreadSystemMessage from "NewThreadSystemMessage" /* 8570 */;
import ThreadStarterSystemMessage from "ThreadStarterSystemMessage" /* 8571 */;
import AutoModerationActionSystemMessage from "AutoModerationActionSystemMessage" /* 8572 */;
import RoleSubscriptionPurchaseSystemMessage from "RoleSubscriptionPurchaseSystemMessage" /* 8582 */;
import PurchaseNotificationSystemMessage from "PurchaseNotificationSystemMessage" /* 8583 */;
import StageStartSystemMessage from "StageStartSystemMessage" /* 8585 */;
import StageEndSystemMessage from "StageEndSystemMessage" /* 8586 */;
import StageTopicSystemMessage from "StageTopicSystemMessage" /* 8587 */;
import StageSpeakerSystemMessage from "StageSpeakerSystemMessage" /* 8588 */;
import StageRaiseHandSystemMessage from "StageRaiseHandSystemMessage" /* 8589 */;
import ApplicationSubscriptionPurchaseSystemMessage from "ApplicationSubscriptionPurchaseSystemMessage" /* 8590 */;
import PrivateChannelIntegrationSystemMessage from "PrivateChannelIntegrationSystemMessage" /* 8591 */;
import GuildAlertModeSystemMessage from "GuildAlertModeSystemMessage" /* 8592 */;
import GuildReportRaidSystemMessage from "GuildReportRaidSystemMessage" /* 8599 */;
import GuildReportFalseAlarmSystemMessage from "GuildReportFalseAlarmSystemMessage" /* 8600 */;
import PollResultSystemMessage from "PollResultSystemMessage" /* 8601 */;
import ChannelLinkedToLobbySystemMessage from "ChannelLinkedToLobbySystemMessage" /* 8603 */;
import InGameMessageNuxSystemMessage from "InGameMessageNuxSystemMessage" /* 8604 */;
import JoinRequestNotificationSystemMessage from "JoinRequestNotificationSystemMessage" /* 8605 */;
import PremiumGroupInviteSystemMessage from "PremiumGroupInviteSystemMessage" /* 8606 */;
import ReferralSystemMessage from "ReferralSystemMessage" /* 8612 */;
import VoiceSessionSystemMessage from "VoiceSessionSystemMessage" /* 8629 */;
import FriendRequestAcceptedSystemMessage from "FriendRequestAcceptedSystemMessage" /* 8633 */;
import GiftIntentSystemMessage from "GiftIntentSystemMessage" /* 8635 */;
import GuildSpaceSystemMessage from "GuildSpaceSystemMessage" /* 8646 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ MessageTypes: c2, BoostedGuildTiers: c3 } = Constants);
const result = size.fileFinishedImporting("modules/messages/native/renderer/system_messages/SystemMessage.tsx");

export function createSystemMessageContent(message) {
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
}
