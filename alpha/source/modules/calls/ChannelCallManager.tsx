// Module ID: 19731
// Function ID: 19732
// Name: ChannelCallManager
// Dependencies: [11220, 6707, 11200, 5198, 5815, 5904, 11219, 7426, 2]

// Module 19731 (ChannelCallManager)
import SoundpackStore from "SoundpackStore" /* 11220 */;
import CallStore from "CallStore" /* 6707 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 11200 */;
import StreamerModeStore from "StreamerModeStore" /* 5198 */;
import VoiceStateStore from "VoiceStateStore" /* 5815 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5904 */;
import SoundUtils from "SoundUtils" /* 11219 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7426 */;
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
