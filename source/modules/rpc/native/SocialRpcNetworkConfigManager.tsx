// Module ID: 16563
// Function ID: 129173
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 27, 1921, 1194, 675, 507, 477, 5078, 2]

// Module 16563 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { NativeModules } from "get ActivityIndicator";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import tmp2 from "AutomaticLifecycleManager";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateSocialRpcNetworkConfig() {
  let obj = { "X-Super-Properties": importDefault(675).getSuperPropertiesBase64(), "X-Fingerprint": store.getFingerprint(), "X-Installation-ID": store.getInstallationForTracking(), "X-Discord-Locale": locale.locale };
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (null != NativeCacheModule) {
    const _JSON = JSON;
    obj = { apiBaseUrl: require(507) /* _isNativeReflectConstruct */.getAPIBaseURL() };
    obj.headers = obj;
    const result = NativeCacheModule.setItem("socialRpcNetworkRequest", JSON.stringify(obj));
    const obj4 = require(507) /* _isNativeReflectConstruct */;
  }
}
tmp2 = new tmp2();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/rpc/native/SocialRpcNetworkConfigManager.tsx");

export default tmp2;
