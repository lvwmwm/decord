// Module ID: 16019
// Function ID: 123026
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16019 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleChange() {
  const currentRouteType = currentRouteType.getCurrentRouteType();
  const tmp3 = null != currentEmbeddedActivity.getCurrentEmbeddedActivity();
  const isConnectedResult = connected.isConnected();
  let tmp6 = currentRouteType === arg1(dependencyMap[12]).RouteTypes.RECEIVER && isConnectedResult;
  if (tmp6) {
    let isIOSResult = arg1(dependencyMap[10]).isIOS();
    if (!isIOSResult) {
      let tmp10 = !tmp3;
      if (!tmp3) {
        tmp10 = !tmp4;
      }
      isIOSResult = tmp10;
    }
    tmp6 = isIOSResult;
    const obj = arg1(dependencyMap[10]);
  }
  const result = ProximitySensorManager.setProximityMonitoringEnabled(tmp6);
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[6]);
let closure_8 = importDefault(dependencyMap[7]);
let closure_9 = importDefault(dependencyMap[8]);
let closure_10 = importDefault(dependencyMap[9]);
if (obj.isIOS()) {
  let ProximitySensorManager = arg1(dependencyMap[5]).NativeModules.ProximitySensorManager;
} else {
  ProximitySensorManager = importDefault(dependencyMap[11]);
}
let tmp2 = (arg0) => {
  class ProximitySensorManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, ProximitySensorManager);
      items1 = [...items];
      obj = closure_5(ProximitySensorManager);
      tmp2 = closure_4;
      if (closure_12()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      map = new Map();
      result = map.set(closure_10, closure_13);
      tmp2Result.stores = result.set(closure_9, closure_13);
      return tmp2Result;
    }
  }
  const arg1 = ProximitySensorManager;
  callback2(ProximitySensorManager, arg0);
  return callback(ProximitySensorManager);
}(importDefault(dependencyMap[13]));
tmp2 = new tmp2();
const obj = arg1(dependencyMap[10]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/voice_calls/native/ProximitySensorManager.tsx");

export default tmp2;
