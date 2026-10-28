// Module ID: 15311
// Function ID: 15312
// Name: PIPSpeakerStore
// Dependencies: [6807, 5750, 6720, 550, 504, 584, 2]

// Module 15311 (PIPSpeakerStore)
import get_initializedDefault from "get initialized" /* 504 */;
import throttleDefault from "throttle" /* 550 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ChannelRTCStore from "ChannelRTCStore" /* 6807 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5750 */;
import SpeakingStore from "SpeakingStore" /* 6720 */;
import size from "module_2" /* 2 */;

let c0;

function resetSpeaker() {
  closure_5.cancel();
  c4 = null;
  c0 = undefined;
  return null != c0;
}
function handleSpeakerUpdate() {
  let channelId = RTCConnectionStore.getChannelId();
  if (channelId == null) {
    channelId = null;
  }
  let flag = false;
  if (channelId !== c4) {
    flag = resetSpeaker();
    c4 = channelId;
  }
  if (null == channelId) {
    return flag;
  } else {
    const speakers = SpeakingStore.getSpeakers();
    for (const item10012 of speakers) {
      let tmp;
      if (null != ChannelRTCStore.getParticipant(channelId, item10012)) {
        tmp = item10012;
        obj.return();
        break;
      }
      let tmp9 = flag;
      if (null != tmp) {
        tmp9 = flag;
        if (tmp !== c0) {
          let flag2;
          if (null == c0) {
            c0 = tmp;
            flag2 = true;
          } else {
            let tmp13 = closure_5(tmp);
            flag2 = flag;
          }
          tmp9 = flag2;
        }
      }
      return tmp9;
    }
  }
}
let c4 = null;
let closure_5 = throttleDefault(function setSpeakerId(arg0) {
  if (c0 !== arg0) {
    c0 = arg0;
    pIPSpeakerStore.emitChange();
  }
}, 1000, { leading: true });
const Store = get_initializedDefault.Store;
class PIPSpeakerStore extends Store {
  initialize() {
    this.waitFor(RTCConnectionStore, SpeakingStore, ChannelRTCStore);
  }
  getSpeakerId(batchedStoreListener) {
    let tmp;
    if (null != batchedStoreListener) {
      if (batchedStoreListener === c4) {
        tmp = c0;
      }
    }
    return tmp;
  }
}
const prototype = PIPSpeakerStore.prototype;
PIPSpeakerStore.displayName = "PIPSpeakerStore";
const obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    closure_5.cancel();
    c4 = null;
    c0 = undefined;
    handleSpeakerUpdate();
    return true;
  },
  RTC_CONNECTION_STATE: handleSpeakerUpdate,
  SPEAKING: handleSpeakerUpdate,
  VOICE_STATE_UPDATES: handleSpeakerUpdate
};
const pIPSpeakerStore = new PIPSpeakerStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/voice_panel/native/pip/PIPSpeakerStore.tsx");

export default pIPSpeakerStore;
