// Module ID: 18509
// Function ID: 18510
// Name: ProximitySensorManager
// Dependencies: [2064, 6113, 5169, 5191, 18510, 5192, 1382, 7028, 2]

// Module 18509 (ProximitySensorManager)
import VoiceCallTypes from "VoiceCallTypes" /* 5192 */;
import react_nativeDefault from "react-native" /* 18510 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6113 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5169 */;
import AudioRouteStore from "AudioRouteStore" /* 5191 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7028 */;
import size from "module_2" /* 2 */;

let map;

let tmp7;
const PlatformUtils = tmp7(1382);
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
