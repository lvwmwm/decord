// Module ID: 19810
// Function ID: 19811
// Name: StageSpeakInviteNotificationManager
// Dependencies: [6934, 502, 4861, 4883, 4954, 4915, 1386, 4866, 1071, 10235, 1112, 5628, 10558, 10583, 10581, 7444, 6772, 10229, 2]

// Module 19810 (StageSpeakInviteNotificationManager)
import Constants from "Constants" /* 1071 */;
import useChannelName from "useChannelName" /* 5628 */;
import useAudienceRequestToSpeakState from "useAudienceRequestToSpeakState" /* 6772 */;
import StageChannelUnifiedCallExperiment from "StageChannelUnifiedCallExperiment" /* 10229 */;
import PushNotificationDefault from "PushNotification" /* 10235 */;
import NotificationTextUtils from "NotificationTextUtils" /* 10558 */;
import InAppNotificationUtils from "InAppNotificationUtils" /* 10581 */;
import InAppNotificationActionCreatorsDefault from "InAppNotificationActionCreators" /* 10583 */;
import VoicePanelStore from "VoicePanelStore" /* 6934 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import GuildStore from "GuildStore" /* 4883 */;
import RelationshipStore from "RelationshipStore" /* 4954 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4915 */;
import UserStore from "UserStore" /* 1386 */;
import StageInstanceStore from "StageInstanceStore" /* 4866 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7444 */;
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
                      const enqueueNotification = tmp7(10583).enqueueNotification;
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
