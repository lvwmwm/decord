// Module ID: 16159
// Function ID: 125333
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 27, 1347, 4149, 4202, 8837, 477, 16160, 8838, 5078, 2]

// Module 16159 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import set from "set";
import tmp2 from "AutomaticLifecycleManager";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleChange() {
  currentRouteType = currentRouteType.getCurrentRouteType();
  const tmp3 = null != currentEmbeddedActivity.getCurrentEmbeddedActivity();
  const isConnectedResult = connected.isConnected();
  let tmp6 = currentRouteType === require(8838) /* RouteTypes */.RouteTypes.RECEIVER && isConnectedResult;
  if (tmp6) {
    let isIOSResult = require(477) /* set */.isIOS();
    if (!isIOSResult) {
      let tmp10 = !tmp3;
      if (!tmp3) {
        tmp10 = !tmp4;
      }
      isIOSResult = tmp10;
    }
    tmp6 = isIOSResult;
    const obj = require(477) /* set */;
  }
  const result = ProximitySensorManager.setProximityMonitoringEnabled(tmp6);
}
if (set.isIOS()) {
  let ProximitySensorManager = require("get ActivityIndicator").NativeModules.ProximitySensorManager;
} else {
  ProximitySensorManager = require("enforcing");
}
tmp2 = new tmp2();
let result = set.fileFinishedImporting("modules/voice_calls/native/ProximitySensorManager.tsx");

export default tmp2;
