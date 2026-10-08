// Module ID: 17776
// Function ID: 17777
// Name: CallIdleManager
// Dependencies: [2062, 2063, 5111, 5114, 7167, 1126, 5885, 6797, 2058, 2]

// Module 17776 (CallIdleManager)
import intl2 from "intl" /* 1126 */;
import Timers from "Timers" /* 2058 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5885 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7167 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import VoiceStateStore from "VoiceStateStore" /* 5111 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5114 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
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
        tmp5 = SortedVoiceStateStore.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1 && null == EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
        const tmp7 = SortedVoiceStateStore.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1 && null == EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
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
      const obj3 = SelectedChannelActionCreatorsDefault;
      const voiceChannel = obj3.selectVoiceChannel(null);
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
            tmp5 = SortedVoiceStateStore.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1 && null == EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
            const tmp7 = SortedVoiceStateStore.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1 && null == EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
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
            tmp5 = SortedVoiceStateStore.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1 && null == EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
            const tmp7 = SortedVoiceStateStore.countVoiceStatesForChannel(currentClientVoiceChannelId) <= 1 && null == EmbeddedActivitiesStore.getSelfEmbeddedActivityForChannel(currentClientVoiceChannelId);
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
