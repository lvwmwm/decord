// Module ID: 15927
// Function ID: 122191
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15927 (_isNativeReflectConstruct)
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
const Soundpacks = arg1(dependencyMap[7]).Soundpacks;
let tmp2 = (arg0) => {
  class HolidayEventsManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_3(this, HolidayEventsManager);
      items1 = [...items];
      obj = closure_6(HolidayEventsManager);
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
      HolidayEventsManager = tmp2Result;
      map = new Map();
      tmp2Result.stores = map.set(closure_8, () => tmp2Result.handleExperimentUpdated());
      tmp2Result.actions = { NOTIFICATIONS_SET_DISABLED_SOUNDS: tmp2Result.updateRingtone };
      tmp2Result.handleExperimentUpdated = () => {
        if (!callback(closure_2[8]).isDesktopOnly) {
          tmp2Result.updateSoundpack();
          tmp2Result.updateRingtone();
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = HolidayEventsManager;
  callback2(HolidayEventsManager, arg0);
  let obj = {
    key: "updateSoundpack",
    value() {
      const soundpack = store.getSoundpack();
      const lastSoundpackExperimentId = store.getLastSoundpackExperimentId();
      const experiment = callback(closure_2[8]).experiment;
      if (null != experiment) {
        const name = experiment.definition.name;
      }
      let isEligibleResult = callback(closure_2[9]).isEligible();
      if (isEligibleResult) {
        if (isEligibleResult) {
          isEligibleResult = null != callback(closure_2[8]).soundpack;
        }
        if (isEligibleResult) {
          isEligibleResult = name !== lastSoundpackExperimentId;
        }
        if (isEligibleResult) {
          isEligibleResult = soundpack !== callback(closure_2[8]).soundpack;
        }
        if (isEligibleResult) {
          HolidayEventsManager(closure_2[10]).setSoundpack(callback(closure_2[8]).soundpack, name);
          const obj3 = HolidayEventsManager(closure_2[10]);
        }
      } else {
        HolidayEventsManager(closure_2[10]).setSoundpack(constants.CLASSIC, null);
        const obj2 = HolidayEventsManager(closure_2[10]);
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "updateRingtone",
    value() {
      if (obj.isEligible()) {
        const tmp6 = callback(closure_2[12]);
        if (null != tmp6Result.call_ringing) {
          HolidayEventsManager(closure_2[11]).setIncomingRingtone("call_ringing", `${tmp8.call_ringing}.mp3`);
          const obj3 = HolidayEventsManager(closure_2[11]);
        }
        const tmp6Result = callback(closure_2[12])(store.getSoundpack());
      } else {
        HolidayEventsManager(closure_2[11]).setIncomingRingtone("call_ringing", "call_ringing.mp3");
        const obj2 = HolidayEventsManager(closure_2[11]);
      }
    }
  };
  items[1] = obj;
  return callback(HolidayEventsManager, items);
}(importDefault(dependencyMap[13]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/holidays/HolidayEventsManager.tsx");

export default tmp2;
