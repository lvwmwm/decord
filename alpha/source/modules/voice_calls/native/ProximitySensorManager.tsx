// Module ID: 18623
// Function ID: 18624
// Name: ProximitySensorManager
// Dependencies: [2067, 6153, 5209, 5231, 18624, 5232, 1384, 7085, 2]

// Module 18623 (ProximitySensorManager)
import VoiceCallTypes from "VoiceCallTypes" /* 5232 */;
import react_nativeDefault from "react-native" /* 18624 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2067 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6153 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5209 */;
import AudioRouteStore from "AudioRouteStore" /* 5231 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7085 */;
import size from "module_2" /* 2 */;

let map;

let tmp7;
const PlatformUtils = tmp7(1384);
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
