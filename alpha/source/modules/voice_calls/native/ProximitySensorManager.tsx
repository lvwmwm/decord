// Module ID: 19786
// Function ID: 19787
// Name: ProximitySensorManager
// Dependencies: [4860, 6782, 5820, 5832, 19787, 5833, 1378, 7444, 2]

// Module 19786 (ProximitySensorManager)
import VoiceCallTypes from "VoiceCallTypes" /* 5833 */;
import react_nativeDefault from "react-native" /* 19787 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4860 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6782 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5820 */;
import AudioRouteStore from "AudioRouteStore" /* 5832 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7444 */;
import size from "module_2" /* 2 */;

let map;

let tmp7;
const PlatformUtils = tmp7(1378);
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
