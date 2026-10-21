// Module ID: 18586
// Function ID: 18587
// Name: CallIdleManager
// Dependencies: [4820, 4821, 5612, 5699, 7543, 1128, 6613, 7193, 4816, 2]

// Module 18586 (CallIdleManager)
import intl2 from "intl" /* 1128 */;
import Timers from "Timers" /* 4816 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 6613 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7543 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;
import ChannelStore from "ChannelStore" /* 4821 */;
import VoiceStateStore from "VoiceStateStore" /* 5612 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5699 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7193 */;
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
