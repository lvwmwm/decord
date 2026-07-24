// Module ID: 10277
// Function ID: 79338
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 10278, 566, 686, 2]

// Module 10277 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { Soundpacks } from "Soundpacks";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
let obj = { soundpack: Soundpacks.CLASSIC, lastSoundpackExperimentId: null };
let tmp2 = ((PersistedStore) => {
  class SoundpackStore {
    constructor() {
      self = this;
      tmp = SoundpackStore(this, SoundpackStore);
      obj = outer1_3(SoundpackStore);
      tmp2 = outer1_2;
      if (outer1_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SoundpackStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      if (null != arg0) {
        const outer1_6 = arg0;
        const _Object = Object;
        const values = Object.values(outer1_5);
        if (!values.includes(outer1_6.soundpack)) {
          outer1_6.soundpack = outer1_5.CLASSIC;
        }
      }
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "getSoundpack",
    value() {
      return outer1_6.soundpack;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastSoundpackExperimentId",
    value() {
      return outer1_6.lastSoundpackExperimentId;
    }
  };
  return callback(SoundpackStore, items);
})(require("initialize").PersistedStore);
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
tmp2 = new tmp2(require("dispatcher"), obj);
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/soundpacks/SoundpackStore.tsx");

export default tmp2;
