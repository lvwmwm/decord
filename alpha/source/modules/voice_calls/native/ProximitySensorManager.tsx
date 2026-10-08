// Module ID: 17938
// Function ID: 17939
// Name: ProximitySensorManager
// Dependencies: [17, 2062, 5893, 5108, 5130, 1381, 17939, 5131, 6797, 2]

// Module 17938 (ProximitySensorManager)
import react_native from "react-native" /* 17 */;
import VoiceCallTypes from "VoiceCallTypes" /* 5131 */;
import react_nativeDefault from "react-native" /* 17939 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2062 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 5893 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;
import AudioRouteStore from "AudioRouteStore" /* 5130 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
import size from "module_2" /* 2 */;

let map;

function handleChange() {
  const currentRouteType = AudioRouteStore.getCurrentRouteType();
  const isConnectedResult = RTCConnectionStore.isConnected();
  const tmp3 = null != EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  const setProximityMonitoringEnabled = ProximitySensorManager2.setProximityMonitoringEnabled;
  const tmp4 = ApplicationStreamingStore.getAllActiveStreams().length > 0;
  let tmp8 = currentRouteType === VoiceCallTypes.RouteTypes.RECEIVER && isConnectedResult;
  if (tmp8) {
    const tmp6Result = PlatformUtils;
    let isIOSResult = tmp6Result.isIOS();
    if (!isIOSResult) {
      isIOSResult = !tmp3 && !tmp4;
    }
    tmp8 = isIOSResult;
  }
  const result = setProximityMonitoringEnabled(tmp8);
}
const NativeModules = react_native.NativeModules;
if (PlatformUtils.isIOS()) {
  let ProximitySensorManager2 = NativeModules.ProximitySensorManager;
} else {
  ProximitySensorManager2 = react_nativeDefault;
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
