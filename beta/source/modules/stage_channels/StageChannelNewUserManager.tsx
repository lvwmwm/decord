// Module ID: 12483
// Function ID: 12484
// Name: StageChannelNewUserManager
// Dependencies: [502, 2099, 5733, 5726, 1983, 573, 510, 12484, 2]

// Module 12483 (StageChannelNewUserManager)
import Storage3 from "Storage" /* 510 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5726 */;
import StageChannelAlertActionCreatorsAll from "StageChannelAlertActionCreators" /* 12484 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import StageChannelRoleStore from "StageChannelRoleStore" /* 5733 */;
import LifecycleManager from "LifecycleManager" /* 1983 */;
import size from "module_2" /* 2 */;

let voiceChannelId;

let closure_7 = StageChannelsConstants.STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY;
class StageChannelNewUserManager extends LifecycleManager {
  constructor() {
    let audienceMember;
    let id;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.handleVoiceStateUpdates = function handleVoiceStateUpdates(voiceStates) {
      voiceStates = voiceStates.voiceStates;
      const item = voiceStates.forEach((channelId) => {
        if (null != channelId.channelId) {
          if (channelId.userId === id.getId()) {
            closure_1_0.terminate();
            const Storage2 = Storage3.Storage;
            const tmp11 = require;
            const tmp13 = closure_2_7;
            if (!Storage2.get(closure_2_7, false)) {
              voiceChannelId = voiceChannelId.getVoiceChannelId();
              const isAudienceMemberResult = null != voiceChannelId && channelId.channelId === voiceChannelId && audienceMember.isAudienceMember(channelId.userId, voiceChannelId);
              if (isAudienceMemberResult) {
                const Storage = tmp11(tmp12[6]).Storage;
                const result = Storage.set(tmp13, true);
                const obj = StageChannelAlertActionCreatorsAll;
                const result1 = obj.openStageChannelAudienceNoticeModal(voiceChannelId);
              }
            }
          }
        }
      });
    };
    return applyArgumentsResult;
  }
  _initialize() {
    const obj = DispatcherDefault;
    const subscription = obj.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
  }
  _terminate() {
    const obj = DispatcherDefault;
    obj.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates);
  }
}
const prototype = StageChannelNewUserManager.prototype;
const stageChannelNewUserManager = new StageChannelNewUserManager();
let result = size.fileFinishedImporting("modules/stage_channels/StageChannelNewUserManager.tsx");

export default stageChannelNewUserManager;
