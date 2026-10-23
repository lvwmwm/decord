// Module ID: 18896
// Function ID: 18897
// Name: ProximitySensorManager
// Dependencies: [4820, 6640, 5712, 5732, 18897, 5733, 1384, 7212, 2]

// Module 18896 (ProximitySensorManager)
import VoiceCallTypes from "VoiceCallTypes" /* 5733 */;
import react_nativeDefault from "react-native" /* 18897 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6640 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5712 */;
import AudioRouteStore from "AudioRouteStore" /* 5732 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7212 */;
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
