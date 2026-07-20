// Module ID: 12992
// Function ID: 98914
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12992 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = { <string:499449860>: null, <string:2253324292>: "20" };
let tmp2 = (arg0) => {
  class SentryTelemetryImpl {
    constructor() {
      self = this;
      tmp = closure_3(this, SentryTelemetryImpl);
      items = [, ];
      items[0] = closure_1(closure_2[5]);
      items1 = [];
      items1[0] = SentryTelemetryImpl(closure_2[5]).TelemetryChannel.SENTRY;
      items[1] = items1;
      obj = closure_6(SentryTelemetryImpl);
      tmp2 = closure_5;
      if (closure_9()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, items, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SentryTelemetryImpl;
  callback2(SentryTelemetryImpl, arg0);
  const items = [
    {
      key: "snapshotForBreadcrumbs",
      value() {
        return this.snapshot(-1, closure_8);
      }
    }
  ];
  return callback(SentryTelemetryImpl, items);
}(importDefault(dependencyMap[6]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/telemetry_ring/native/channels/SentryTelemetry.tsx");

export default tmp2;
