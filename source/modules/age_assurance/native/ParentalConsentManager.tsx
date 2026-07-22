// Module ID: 16023
// Function ID: 122968
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16023 (_isNativeReflectConstruct)
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
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const AnalyticEvents = arg1(dependencyMap[7]).AnalyticEvents;
let tmp2 = (arg0) => {
  class ParentalConsentManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, ParentalConsentManager);
      items1 = [...items];
      obj = closure_7(ParentalConsentManager);
      tmp2 = closure_6;
      if (closure_11()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_7;
        constructResult = Reflect.construct(obj, items1, closure_7(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      closure_0 = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.onPostConnectionOpen();
            }
      };
      return tmp2Result;
    }
  }
  const dependencyMap = ParentalConsentManager;
  callback3(ParentalConsentManager, arg0);
  let obj = { key: "onPostConnectionOpen" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_1 = callback(tmp);
  obj.value = function onPostConnectionOpen() {
    return callback2(...arguments);
  };
  const items = [obj, ];
  obj = { key: "performAgeCheck" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback("performAgeCheck");
  obj.value = function performAgeCheck() {
    return callback(...arguments);
  };
  items[1] = obj;
  return callback2(ParentalConsentManager, items);
}(importDefault(dependencyMap[18]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/age_assurance/native/ParentalConsentManager.tsx");

export default tmp2;
