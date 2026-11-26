// Module ID: 19873
// Function ID: 19874
// Name: StageSpeakInviteNotificationManager
// Dependencies: [6965, 502, 4892, 4914, 4985, 4946, 1387, 4897, 1071, 10277, 1112, 5659, 10603, 10628, 10626, 7475, 6803, 10271, 2]

// Module 19873 (StageSpeakInviteNotificationManager)
import Constants from "Constants" /* 1071 */;
import useChannelName from "useChannelName" /* 5659 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 6803 */;
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 10271 */;
import PushNotificationDefault from "PushNotification" /* 10277 */;
import NotificationTextUtils from "NotificationTextUtils" /* 10603 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 10626 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 10628 */;
import VoicePanelStore from "VoicePanelStore" /* 6965 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import GuildStore from "GuildStore" /* 4914 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4946 */;
import UserStore from "UserStore" /* 1387 */;
import StageInstanceStore from "StageInstanceStore" /* 4897 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7475 */;
import size from "module_2" /* 2 */;

const InAppNotificationTypes = Constants.InAppNotificationTypes;
let c12 = null;
class StageSpeakInviteNotificationManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates };
    return applyArgumentsResult;
  }
  handleVoiceStateUpdates(voiceStates) {
    let closure_0;
    voiceStates = voiceStates.voiceStates;
    const id = AuthenticationStore.getId();
    const item = voiceStates.forEach((userId) => {
      let tmp2Result5;
      let tmp2Result7;
      let tmp2Result8;
      let topic;
      if (userId.userId === closure_0) {
        const channelId = userId.channelId;
        if (null != channelId) {
          if (channelId === SelectedChannelStore.getVoiceChannelId()) {
            let obj = useAudienceRequestToSpeakState;
            const audienceRequestToSpeakState = obj.getAudienceRequestToSpeakState(userId);
            if (audienceRequestToSpeakState === useAudienceRequestToSpeakState.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK) {
              if (c12 !== channelId) {
                c12 = channelId;
                const channel = ChannelStore.getChannel(channelId);
                let isStageUnifiedCallResult = null != channel;
                if (isStageUnifiedCallResult) {
                  const tmp2Result = StageChannelUnifiedCallExperiment;
                  isStageUnifiedCallResult = tmp2Result.isStageUnifiedCall(channel, "StageSpeakInviteNotification");
                }
                if (isStageUnifiedCallResult) {
                  const presentLocalNotification = PushNotificationDefault.presentLocalNotification;
                  PushNotificationDefault;
                  const intl = tmp2(1112).intl;
                  const formatToPlainString = intl.formatToPlainString;
                  const obj2 = { channelName: tmp2Result5.computeChannelName(channel, UserStore, RelationshipStore), channelTopic: topic };
                  const sqnsSP = tmp2(1112).t.sqnsSP;
                  tmp2Result5 = useChannelName;
                  const stageInstanceByChannel = StageInstanceStore.getStageInstanceByChannel(channel.id);
                  topic = undefined;
                  if (stageInstanceByChannel != null) {
                    topic = stageInstanceByChannel.topic;
                  }
                  const obj3 = { alertBody: formatToPlainString(sqnsSP, obj2) };
                  const result = presentLocalNotification(obj3);
                  const state = VoicePanelStore.getState();
                  if (!state.isChannelOpen(channel.id)) {
                    const tmp2Result6 = NotificationTextUtils;
                    if (tmp2Result6.allowInAppNotifications()) {
                      const STAGE_SPEAK_INVITE = InAppNotificationTypes.STAGE_SPEAK_INVITE;
                      const _HermesInternal = HermesInternal;
                      const obj4 = {
                        type: STAGE_SPEAK_INVITE,
                        key: "stage-speak-invite-" + channel.id,
                        duration: tmp2Result7.getNotificationDuration(STAGE_SPEAK_INVITE),
                        onDismiss() {
                                          const obj = closure_1_1(closure_1_2[13]);
                                          obj.clearNotification();
                                        },
                        channel,
                        guild: GuildStore.getGuild(channel.guild_id),
                        inAppNotificationId: tmp2Result8.generateInAppNotificationId()
                      };
                      const enqueueNotification = tmp7(10628).enqueueNotification;
                      InAppNotificationActionCreatorsDefault;
                      tmp2Result7 = InAppNotificationUtils;
                      tmp2Result8 = InAppNotificationUtils;
                      enqueueNotification(obj4);
                    }
                  }
                }
              }
            } else {
              c12 = null;
            }
          }
        }
        c12 = null;
      }
    });
  }
}
const prototype = StageSpeakInviteNotificationManager.prototype;
const stageSpeakInviteNotificationManager = new StageSpeakInviteNotificationManager();
let result = size.fileFinishedImporting("modules/stage_channels/native/StageSpeakInviteNotificationManager.tsx");

export default stageSpeakInviteNotificationManager;
