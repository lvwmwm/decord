// Module ID: 18682
// Function ID: 18683
// Name: ChannelCallManager
// Dependencies: [11483, 6482, 13681, 5019, 5616, 5703, 11482, 7199, 2]

// Module 18682 (ChannelCallManager)
import SoundpackStore from "SoundpackStore" /* 11483 */;
import CallStore from "CallStore" /* 6482 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 13681 */;
import StreamerModeStore from "StreamerModeStore" /* 5019 */;
import VoiceStateStore from "VoiceStateStore" /* 5616 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5703 */;
import SoundUtils from "SoundUtils" /* 11482 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7199 */;
import size from "module_2" /* 2 */;

let currentClientVoiceChannelId, map;

let closure_8 = SoundUtils.createSoundForPack("call_calling", SoundpackStore.getSoundpack());
class ChannelCallManager extends AutomaticLifecycleManager {
  constructor() {
    let disableSounds;
    let soundDisabled;
    let soundpack;
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult._handleRing = function _handleRing(arg0) {
      currentClientVoiceChannelId = currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null);
      const tmp2 = null != currentClientVoiceChannelId && SortedVoiceStateStore.countVoiceStatesForChannel(currentClientVoiceChannelId) >= 2;
      if (null != currentClientVoiceChannelId) {
        if (!tmp2) {
          const tmp4 = arg0;
          if (tmp4) {
            if (!soundDisabled.isSoundDisabled("call_calling")) {
              if (!disableSounds.disableSounds) {
                closure_8.loop();
              }
            }
          }
        }
      }
      closure_8.stop();
    };
    applyArgumentsResult.handleSoundpackUpdate = function handleSoundpackUpdate() {
      closure_8.stop();
      const obj = SoundUtils;
      closure_8 = obj.createSoundForPack("call_calling", soundpack.getSoundpack());
    };
    applyArgumentsResult.handleRingUpdate = function handleRingUpdate() {
      const calls = CallStore.getCalls();
      require._handleRing(calls.some((ringing) => {
        const tmp = ringing.ringing.length > 0 && currentClientVoiceChannelId.getCurrentClientVoiceChannelId(null) === ringing.channelId;
        return tmp;
      }));
    };
    return applyArgumentsResult;
  }
  _initialize() {
    map = new Map();
    const result = map.set(CallStore, this.handleRingUpdate);
    const result1 = result.set(NotificationSettingsStore, this.handleRingUpdate);
    const result2 = result1.set(StreamerModeStore, this.handleRingUpdate);
    const result3 = result2.set(VoiceStateStore, this.handleRingUpdate);
    this.stores = result3.set(SoundpackStore, this.handleSoundpackUpdate);
  }
}
const prototype = ChannelCallManager.prototype;
const channelCallManager = new ChannelCallManager();
let result = size.fileFinishedImporting("modules/calls/ChannelCallManager.tsx");

export default channelCallManager;
