// Module ID: 19971
// Function ID: 19972
// Name: SocialRpcNetworkConfigManager
// Dependencies: [17, 2063, 502, 1253, 1283, 7281, 1376, 2]

// Module 19971 (SocialRpcNetworkConfigManager)
import react_native from "react-native" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import PlatformUtils from "PlatformUtils" /* 1376 */;
import LocaleStore from "LocaleStore" /* 2063 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7281 */;
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
