// Module ID: 19702
// Function ID: 19703
// Name: ProximitySensorManager
// Dependencies: [4671, 6308, 5564, 5584, 19703, 5585, 1380, 7395, 2]

// Module 19702 (ProximitySensorManager)
import VoiceCallTypes from "VoiceCallTypes" /* 5585 */;
import react_nativeDefault from "react-native" /* 19703 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4671 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6308 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5564 */;
import AudioRouteStore from "AudioRouteStore" /* 5584 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7395 */;
import size from "module_2" /* 2 */;

let map;

let tmp7;
const PlatformUtils = tmp7(1380);
function handleChange() {
  const currentRouteType = AudioRouteStore.getCurrentRouteType();
  const isConnectedResult = RTCConnectionStore.isConnected();
  const tmp3 = null != EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  const tmp4 = ApplicationStreamingStore.getAllActiveStreams().length > 0;
  const setProximityMonitoringEnabled = react_nativeDefault.setProximityMonitoringEnabled;
  react_nativeDefault;
  let tmp8 = currentRouteType === VoiceCallTypes.RouteTypes.RECEIVER && isConnectedResult;
  if (tmp8) {
    const tmp7Result = PlatformUtils;
    let isIOSResult = tmp7Result.isIOS();
    if (!isIOSResult) {
      isIOSResult = !tmp3 && !tmp4;
    }
    tmp8 = isIOSResult;
  }
  const result = setProximityMonitoringEnabled(tmp8);
}
class ProximitySensorManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    map = new Map();
    const result = map.set(AudioRouteStore, handleChange);
    applyArgumentsResult.stores = result.set(RTCConnectionStore, handleChange);
    return applyArgumentsResult;
  }
}
const proximitySensorManager = new ProximitySensorManager();
let result = size.fileFinishedImporting("modules/voice_calls/native/ProximitySensorManager.tsx");

export default proximitySensorManager;
