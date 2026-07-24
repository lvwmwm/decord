// Module ID: 5597
// Function ID: 47569
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 660, 4677, 566, 686, 2]

// Module 5597 (_isNativeReflectConstruct)
import ProcessArgs from "ProcessArgs";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { CONFERENCE_MODE_ENABLED } from "CONFERENCE_MODE_ENABLED";
import set from "_possibleConstructorReturn";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let set = new Set();
let closure_9 = {};
let tmp3 = ((PersistedStore) => {
  class HotspotStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, HotspotStore);
      obj = outer1_5(HotspotStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(HotspotStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(hiddenHotspots) {
      if (null != hiddenHotspots) {
        const _Array = Array;
        if (Array.isArray(hiddenHotspots.hiddenHotspots)) {
          const _Set = Set;
          const set = new Set(hiddenHotspots.hiddenHotspots);
          const outer1_8 = set;
        }
        if (null != hiddenHotspots.hotspotOverrides) {
          const outer1_9 = hiddenHotspots.hotspotOverrides;
        }
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "hasHotspot",
    value(arg0) {
      let flag = arg1;
      if (arg1 === undefined) {
        flag = false;
      }
      let tmp = !flag;
      if (tmp) {
        tmp = outer1_9[arg0];
      }
      let tmp3 = !outer1_7;
      if (tmp3) {
        const ProcessArgs = HotspotStore(outer1_1[6]).ProcessArgs;
        let tmp6 = !ProcessArgs.isDisallowPopupsSet();
        if (tmp6) {
          if (!tmp) {
            tmp = !outer1_8.has(arg0);
          }
          tmp6 = tmp;
        }
        tmp3 = tmp6;
      }
      return tmp3;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasHiddenHotspot",
    value(arg0) {
      return outer1_8.has(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getHotspotOverride",
    value(arg0) {
      return outer1_9[arg0];
    }
  };
  items[4] = {
    key: "getState",
    value() {
      return { hiddenHotspots: outer1_8, hotspotOverrides: outer1_9 };
    }
  };
  return callback(HotspotStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "HotspotStore";
tmp3.persistKey = "hotspots";
let items = [
  (arg0) => {
    let items = arg0;
    const obj = {};
    if (null == arg0) {
      items = [];
    }
    obj.hiddenHotspots = items;
    obj.hotspotOverrides = {};
    return obj;
  }
];
tmp3.migrations = items;
tmp3 = new tmp3(require("dispatcher"), {
  OVERLAY_INITIALIZE: function handleOverlayInitialize(hiddenHotspots) {
    const set = new Set(hiddenHotspots.hiddenHotspots);
  },
  HOTSPOT_HIDE: function handleHotspotHide(location) {
    const _location = location.location;
    if (set.has(_location)) {
      return false;
    } else {
      set.add(_location);
    }
  },
  HOTSPOT_OVERRIDE_SET: function handleSetHotspotOverride(location) {
    closure_9[location.location] = location.enabled;
  },
  HOTSPOT_OVERRIDE_CLEAR: function handleClearHotspotOverride(arg0) {
    if (null == table[arg0.location]) {
      return false;
    } else {
      delete tmp[tmp2];
    }
  }
});
let result = set.fileFinishedImporting("modules/hotspot/HotspotStore.tsx");

export default tmp3;
