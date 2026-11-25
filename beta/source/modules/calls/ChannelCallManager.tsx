// Module ID: 19469
// Function ID: 19470
// Name: ChannelCallManager
// Dependencies: [10889, 6627, 11107, 4970, 5561, 5657, 10888, 7484, 2]

// Module 19469 (ChannelCallManager)
import SoundpackStore from "SoundpackStore" /* 10889 */;
import CallStore from "CallStore" /* 6627 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 11107 */;
import StreamerModeStore from "StreamerModeStore" /* 4970 */;
import VoiceStateStore from "VoiceStateStore" /* 5561 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 5657 */;
import SoundUtils from "SoundUtils" /* 10888 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7484 */;
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
