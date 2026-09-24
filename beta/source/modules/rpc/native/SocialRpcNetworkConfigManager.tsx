// Module ID: 18293
// Function ID: 18294
// Name: SocialRpcNetworkConfigManager
// Dependencies: [17, 2113, 502, 1245, 1275, 7397, 1368, 2]

// Module 18293 (SocialRpcNetworkConfigManager)
import _mod17 from "module_17" /* 17 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import HTTPUtils from "HTTPUtils" /* 1275 */;
import PlatformUtils from "PlatformUtils" /* 1368 */;
import LocaleStore from "LocaleStore" /* 2113 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7397 */;
import size from "module_2" /* 2 */;

function updateSocialRpcNetworkConfig() {
  const obj = { "X-Super-Properties": AnalyticsUtilsDefault.getSuperPropertiesBase64(), "X-Fingerprint": AuthenticationStore.getFingerprint(), "X-Installation-ID": AuthenticationStore.getInstallationForTracking(), "X-Discord-Locale": LocaleStore.locale };
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (NativeCacheModule != null) {
    const _JSON = JSON;
    const obj3 = { apiBaseUrl: HTTPUtils.getAPIBaseURL(), headers: obj };
    const result = NativeCacheModule.setItem("socialRpcNetworkRequest", JSON.stringify(obj3));
  }
}
const NativeModules = _mod17.NativeModules;
const prototype = function SocialRpcNetworkConfigManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.handleUpdate = PlatformUtils.isAndroid() ? updateSocialRpcNetworkConfig : (() => {

  });
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handleUpdate };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
let result = size.fileFinishedImporting("modules/rpc/native/SocialRpcNetworkConfigManager.tsx");

export default prototype1;
