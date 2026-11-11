// Module ID: 20228
// Function ID: 20229
// Name: ProximitySensorManager
// Dependencies: [5091, 6757, 6008, 6028, 20229, 6029, 1377, 7816, 2]

// Module 20228 (ProximitySensorManager)
import VoiceCallTypes from "VoiceCallTypes" /* 6029 */;
import react_nativeDefault from "react-native" /* 20229 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 5091 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6757 */;
import RTCConnectionStore from "RTCConnectionStore" /* 6008 */;
import AudioRouteStore from "AudioRouteStore" /* 6028 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7816 */;
import size from "module_2" /* 2 */;

let map;

let tmp7;
const PlatformUtils = tmp7(1377);
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
