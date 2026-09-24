// Module ID: 17889
// Function ID: 17890
// Name: ProximitySensorManager
// Dependencies: [17, 2044, 4812, 4813, 9915, 1368, 17890, 9916, 7397, 2]

// Module 17889 (ProximitySensorManager)
import PlatformUtils2 from "PlatformUtils" /* 1368 */;
import VoiceCallTypes from "VoiceCallTypes" /* 9916 */;
import NativeProximitySensorManagerModuleDefault from "NativeProximitySensorManagerModule" /* 17890 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4812 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4813 */;
import AudioRouteStore from "AudioRouteStore" /* 9915 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7397 */;

require = fn;
function handleChange() {
  const currentRouteType = AudioRouteStore.getCurrentRouteType();
  const tmp3 = null != EmbeddedActivitiesStore.getCurrentEmbeddedActivity();
  const isConnectedResult = RTCConnectionStore.isConnected();
  let tmp8 = currentRouteType === VoiceCallTypes.RouteTypes.RECEIVER && isConnectedResult;
  if (tmp8) {
    let isIOSResult = PlatformUtils2.isIOS();
    if (!isIOSResult) {
      let tmp10 = !tmp3;
      if (!tmp3) {
        tmp10 = !tmp4;
      }
      isIOSResult = tmp10;
    }
    tmp8 = isIOSResult;
    const tmp6Result = PlatformUtils2;
  }
  const result = ProximitySensorManager.setProximityMonitoringEnabled(tmp8);
}
const PlatformUtils = fn(1368);
if (PlatformUtils.isIOS()) {
  let ProximitySensorManager = fn(17).NativeModules.ProximitySensorManager;
} else {
  ProximitySensorManager = NativeProximitySensorManagerModuleDefault;
}
const prototype = function ProximitySensorManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  const result = new Map().set(AudioRouteStore, handleChange);
  applyArgumentsResult.stores = result.set(RTCConnectionStore, handleChange);
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/voice_calls/native/ProximitySensorManager.tsx");

export default prototype1;
