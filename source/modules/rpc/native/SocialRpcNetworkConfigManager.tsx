// Module ID: 16399
// Function ID: 126675
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16399 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function updateSocialRpcNetworkConfig() {
  let obj = { X-Super-Properties: importDefault(dependencyMap[8]).getSuperPropertiesBase64(), X-Fingerprint: store.getFingerprint(), X-Installation-ID: store.getInstallationForTracking(), X-Discord-Locale: locale.locale };
  const NativeCacheModule = NativeModules.NativeCacheModule;
  if (null != NativeCacheModule) {
    const _JSON = JSON;
    obj = { apiBaseUrl: arg1(dependencyMap[9]).getAPIBaseURL() };
    obj.headers = obj;
    const result = NativeCacheModule.setItem("socialRpcNetworkRequest", JSON.stringify(obj));
    const obj4 = arg1(dependencyMap[9]);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const NativeModules = arg1(dependencyMap[5]).NativeModules;
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let tmp2 = (arg0) => {
  class SocialRpcNetworkConfigManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, SocialRpcNetworkConfigManager);
      items1 = [...items];
      obj = closure_6(SocialRpcNetworkConfigManager);
      tmp2 = closure_5;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items1, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      obj2 = SocialRpcNetworkConfigManager(closure_2[10]);
      tmp2Result.handleUpdate = obj2.isAndroid() ? closure_12 : () => {

      };
      tmp2Result.actions = { POST_CONNECTION_OPEN: tmp2Result.handleUpdate };
      return tmp2Result;
    }
  }
  const arg1 = SocialRpcNetworkConfigManager;
  callback2(SocialRpcNetworkConfigManager, arg0);
  return callback(SocialRpcNetworkConfigManager);
}(importDefault(dependencyMap[11]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/rpc/native/SocialRpcNetworkConfigManager.tsx");

export default tmp2;
