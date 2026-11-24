// Module ID: 20093
// Function ID: 20094
// Name: SocialRpcNetworkConfigManager
// Dependencies: [17, 2188, 502, 1255, 1284, 7484, 1378, 2]

// Module 20093 (SocialRpcNetworkConfigManager)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
import PlatformUtils from "PlatformUtils" /* 1378 */;
import LocaleStore from "LocaleStore" /* 2188 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7484 */;
import size from "module_2" /* 2 */;

function updateSocialRpcNetworkConfig() {
  let obj2;
  let obj4;
  const obj = { "X-Super-Properties": obj2.getSuperPropertiesBase64(), "X-Fingerprint": AuthenticationStore.getFingerprint(), "X-Installation-ID": AuthenticationStore.getInstallationForTracking(), "X-Discord-Locale": LocaleStore.locale };
  const NativeCacheModule = NativeModules.NativeCacheModule;
  obj2 = AnalyticsUtilsDefault;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    const setItem = NativeCacheModule.setItem;
    const obj3 = { apiBaseUrl: obj4.getAPIBaseURL(), headers: obj };
    obj4 = HTTPUtils;
    const result = setItem("socialRpcNetworkRequest", stringify(obj3));
  }
}
const NativeModules = react_native.NativeModules;
class SocialRpcNetworkConfigManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const obj = PlatformUtils;
    applyArgumentsResult.handleUpdate = obj.isAndroid() ? updateSocialRpcNetworkConfig : (() => {

    });
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
    return applyArgumentsResult;
  }
}
const socialRpcNetworkConfigManager = new SocialRpcNetworkConfigManager();
let result = size.fileFinishedImporting("modules/rpc/native/SocialRpcNetworkConfigManager.tsx");

export default socialRpcNetworkConfigManager;
