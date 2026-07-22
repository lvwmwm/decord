// Module ID: 10235
// Function ID: 79075
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10235 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
const Soundpacks = arg1(dependencyMap[5]).Soundpacks;
let obj = { soundpack: Soundpacks.CLASSIC, lastSoundpackExperimentId: null };
let tmp2 = (PersistedStore) => {
  class SoundpackStore {
    constructor() {
      self = this;
      tmp = SoundpackStore(this, SoundpackStore);
      obj = closure_3(SoundpackStore);
      tmp2 = closure_2;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = SoundpackStore;
  callback2(SoundpackStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      if (null != arg0) {
        const _Object = Object;
        const values = Object.values(constants);
        if (!values.includes(arg0.soundpack)) {
          arg0.soundpack = constants.CLASSIC;
        }
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return closure_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSoundpack",
    value() {
      return closure_6.soundpack;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastSoundpackExperimentId",
    value() {
      return closure_6.lastSoundpackExperimentId;
    }
  };
  return callback(SoundpackStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp2.displayName = "SoundpackStore";
tmp2.persistKey = "SoundpackStore";
obj = {
  SET_SOUNDPACK: function handleSetSoundpack(forExperimentId) {
    let lastSoundpackExperimentId = forExperimentId.forExperimentId;
    const obj = { soundpack: forExperimentId.soundpack };
    if (undefined === lastSoundpackExperimentId) {
      lastSoundpackExperimentId = obj.lastSoundpackExperimentId;
    }
    obj.lastSoundpackExperimentId = lastSoundpackExperimentId;
  }
};
tmp2 = new tmp2(importDefault(dependencyMap[7]), obj);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/soundpacks/SoundpackStore.tsx");

export default tmp2;
