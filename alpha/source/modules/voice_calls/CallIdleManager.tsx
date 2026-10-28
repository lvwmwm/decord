// Module ID: 19053
// Function ID: 19054
// Name: CallIdleManager
// Dependencies: [4855, 4856, 5666, 5753, 19054, 7601, 1125, 6669, 7250, 4851, 2]

// Module 19053 (CallIdleManager)
import intl2 from "intl" /* 1125 */;
import Timers from "Timers" /* 4851 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6669 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7601 */;
import CampInDmExperiment from "CampInDmExperiment" /* 19054 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4855 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import VoiceStateStore from "VoiceStateStore" /* 5666 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5753 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7250 */;
import size from "module_2" /* 2 */;

function disconnect() {
  const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(null);
  let flag = false;
  const obj = VoiceStateStore;
  if (null != currentClientVoiceChannelId) {
    const channel = ChannelStore.getChannel(currentClientVoiceChannelId);
    let tmp4 = !(null == channel || !channel.isPrivate());
    null == channel || !channel.isPrivate();
    if (tmp4) {
      let tmp5 = channel.recipients.length <= 1;
      if (tmp5) {
        let tmp7 = SortedVoiceStateStore.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1;
        if (tmp7) {
          let tmp9 = null == EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
          if (tmp9) {
            const obj3 = CampInDmExperiment;
            tmp9 = !obj3.shouldDisableCallIdleDisconnect();
          }
          tmp7 = tmp9;
        }
        tmp5 = tmp7;
      }
      tmp4 = tmp5;
    }
    flag = tmp4;
  }
  if (flag) {
    const currentClientVoiceChannelId1 = obj.getCurrentClientVoiceChannelId(null);
    if (null != currentClientVoiceChannelId1) {
      const sendBotMessage = MessageActionCreatorsDefault.sendBotMessage;
      MessageActionCreatorsDefault;
      const intl = intl2.intl;
      sendBotMessage(currentClientVoiceChannelId1, intl.formatToPlainString(intl2.t.XYof5G, { number: 3 }));
      const obj4 = SelectedChannelActionCreatorsDefault;
      const voiceChannel = obj4.selectVoiceChannel(null);
    }
  }
}
let c7 = 180000;
class CallIdleManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    const timeout = new Timers.Timeout();
    applyArgumentsResult.idleTimeout = timeout;
    applyArgumentsResult.handleConnectionClosed = function handleConnectionClosed() {
      const idleTimeout = require.idleTimeout;
      idleTimeout.stop();
    };
    applyArgumentsResult.handleEmbeddedActivityDisconnect = function handleEmbeddedActivityDisconnect() {
      const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(null);
      let flag = false;
      if (null != currentClientVoiceChannelId) {
        const channel = ChannelStore.getChannel(currentClientVoiceChannelId);
        let tmp4 = !(null == channel || !channel.isPrivate());
        null == channel || !channel.isPrivate();
        if (tmp4) {
          let tmp5 = channel.recipients.length <= 1;
          if (tmp5) {
            let tmp7 = SortedVoiceStateStore.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1;
            if (tmp7) {
              let tmp9 = null == EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
              if (tmp9) {
                const obj2 = CampInDmExperiment;
                tmp9 = !obj2.shouldDisableCallIdleDisconnect();
              }
              tmp7 = tmp9;
            }
            tmp5 = tmp7;
          }
          tmp4 = tmp5;
        }
        flag = tmp4;
      }
      if (flag) {
        const idleTimeout = require.idleTimeout;
        idleTimeout.start(c7, disconnect, true);
      }
    };
    applyArgumentsResult.handleVoiceStateUpdates = function handleVoiceStateUpdates() {
      const currentClientVoiceChannelId = VoiceStateStore.getCurrentClientVoiceChannelId(null);
      let flag = false;
      if (null != currentClientVoiceChannelId) {
        const channel = ChannelStore.getChannel(currentClientVoiceChannelId);
        let tmp4 = !(null == channel || !channel.isPrivate());
        null == channel || !channel.isPrivate();
        if (tmp4) {
          let tmp5 = channel.recipients.length <= 1;
          if (tmp5) {
            let tmp7 = SortedVoiceStateStore.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1;
            if (tmp7) {
              let tmp9 = null == EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
              if (tmp9) {
                const obj2 = CampInDmExperiment;
                tmp9 = !obj2.shouldDisableCallIdleDisconnect();
              }
              tmp7 = tmp9;
            }
            tmp5 = tmp7;
          }
          tmp4 = tmp5;
        }
        flag = tmp4;
      }
      const idleTimeout = require.idleTimeout;
      if (flag) {
        idleTimeout.start(c7, disconnect, false);
      } else {
        idleTimeout.stop();
      }
    };
    applyArgumentsResult.actions = { VOICE_STATE_UPDATES: applyArgumentsResult.handleVoiceStateUpdates, CONNECTION_CLOSED: applyArgumentsResult.handleConnectionClosed, EMBEDDED_ACTIVITY_CLOSE: applyArgumentsResult.handleEmbeddedActivityDisconnect };
    return applyArgumentsResult;
  }
}
const callIdleManager = new CallIdleManager();
const result = size.fileFinishedImporting("modules/voice_calls/CallIdleManager.tsx");

export default callIdleManager;
