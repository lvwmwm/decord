// Module ID: 19689
// Function ID: 19690
// Name: CallIdleManager
// Dependencies: [4989, 4990, 5813, 5901, 19690, 7776, 1113, 6841, 7423, 4985, 2]

// Module 19689 (CallIdleManager)
import intl2 from "intl" /* 1113 */;
import Timers from "Timers" /* 4985 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6841 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7776 */;
import CampInDmExperiment from "CampInDmExperiment" /* 19690 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4989 */;
import ChannelStore from "ChannelStore" /* 4990 */;
import VoiceStateStore from "VoiceStateStore" /* 5813 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5901 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7423 */;
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
      sendBotMessage(currentClientVoiceChannelId1, intl.formatToPlainString(intl2.t.XYof5G, { number: 3 }), "call_idle_disconnect");
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
