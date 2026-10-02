// Module ID: 17108
// Function ID: 17109
// Name: CallIdleManager
// Dependencies: [2050, 2051, 4856, 4861, 6880, 1127, 5724, 6540, 2046, 2]

// Module 17108 (CallIdleManager)
import intl2 from "intl" /* 1127 */;
import Timers from "Timers" /* 2046 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5724 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6880 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import VoiceStateStore from "VoiceStateStore" /* 4856 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4861 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6540 */;
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
