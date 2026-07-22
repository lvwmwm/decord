// Module ID: 16382
// Function ID: 126458
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16382 (_isNativeReflectConstruct)
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
const MIDJOURNEY_GUILD_ID = arg1(dependencyMap[6]).MIDJOURNEY_GUILD_ID;
const Routes = arg1(dependencyMap[7]).Routes;
let tmp2 = (arg0) => {
  class MidjourneyOnboardingManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_4(this, MidjourneyOnboardingManager);
      items1 = [...items];
      obj = closure_7(MidjourneyOnboardingManager);
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
      tmp2Result.actions = { CHANNEL_CREATE: tmp2Result.handleChannelCreate };
      return tmp2Result;
    }
  }
  const importDefault = MidjourneyOnboardingManager;
  callback3(MidjourneyOnboardingManager, arg0);
  const obj = { key: "handleChannelCreate" };
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  obj.value = function handleChannelCreate() {
    return callback(...arguments);
  };
  const items = [obj];
  return callback2(MidjourneyOnboardingManager, items);
}(importDefault(dependencyMap[10]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/midjourney_onboarding/MidjourneyOnboardingManager.tsx");

export default tmp2;
