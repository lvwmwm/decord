// Module ID: 5597
// Function ID: 47533
// Name: _isNativeReflectConstruct
// Dependencies: [2684354567, 1342177294, 2550136837, 905969666, 33554434, 4026531840, 1065745, 1435648, 1062144, 470528]

// Module 5597 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const CONFERENCE_MODE_ENABLED = arg1(dependencyMap[5]).CONFERENCE_MODE_ENABLED;
const set = new Set();
let closure_9 = {};
let tmp3 = (PersistedStore) => {
  class HotspotStore {
    constructor() {
      self = this;
      tmp = closure_2(this, HotspotStore);
      obj = closure_5(HotspotStore);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = HotspotStore;
  callback2(HotspotStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(hiddenHotspots) {
      if (null != hiddenHotspots) {
        const _Array = Array;
        if (Array.isArray(hiddenHotspots.hiddenHotspots)) {
          const _Set = Set;
          const set = new Set(hiddenHotspots.hiddenHotspots);
        }
        if (null != hiddenHotspots.hotspotOverrides) {
          const hotspotOverrides = hiddenHotspots.hotspotOverrides;
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
        tmp = closure_9[arg0];
      }
      let tmp3 = !closure_7;
      if (tmp3) {
        const ProcessArgs = HotspotStore(closure_1[6]).ProcessArgs;
        let tmp6 = !ProcessArgs.isDisallowPopupsSet();
        if (tmp6) {
          if (!tmp) {
            tmp = !set.has(arg0);
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
      return set.has(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getHotspotOverride",
    value(arg0) {
      return closure_9[arg0];
    }
  };
  items[4] = {
    key: "getState",
    value() {
      return { hiddenHotspots: closure_8, hotspotOverrides: closure_9 };
    }
  };
  return callback(HotspotStore, items);
}(importDefault(dependencyMap[7]).PersistedStore);
tmp3.displayName = "HotspotStore";
tmp3.persistKey = "hotspots";
const items = [
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
tmp3 = new tmp3(importDefault(dependencyMap[8]), {
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
    if (null == closure_9[arg0.location]) {
      return false;
    } else {
      delete r0[r1];
    }
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/hotspot/HotspotStore.tsx");

export default tmp3;
