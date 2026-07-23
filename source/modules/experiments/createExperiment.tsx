// Module ID: 4043
// Function ID: 33652
// Name: getExperimentDescriptor
// Dependencies: [57, 31, 1194, 4044, 4045, 4052, 4053, 4054, 2]
// Exports: default

// Module 4043 (getExperimentDescriptor)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ExperimentBuckets from "ExperimentBuckets";

let closure_4;
let closure_5;
let closure_8;
let closure_9;
const require = arg1;
function getExperimentDescriptor(arg0, arg1, guildId) {
  if ("guild" === arg0) {
    let guildExperimentDescriptor = authStore.getGuildExperimentDescriptor(arg1, guildId.guildId);
  } else {
    guildExperimentDescriptor = authStore.getUserExperimentDescriptor(arg1);
  }
  return guildExperimentDescriptor;
}
function getConfig(defaultConfig, arg1, get, aaMode) {
  if (null != aaMode) {
    if (aaMode.aaMode) {
      defaultConfig = defaultConfig.defaultConfig;
    }
    return defaultConfig;
  }
  const value = get.get(arg1);
  defaultConfig = undefined;
  if (null != value) {
    defaultConfig = value.config;
  }
  if (null == defaultConfig) {
    defaultConfig = defaultConfig.defaultConfig;
  }
}
({ useState: closure_4, useEffect: closure_5 } = result);
({ ExperimentBuckets: closure_8, ExposureTypes: closure_9 } = ExperimentBuckets);
result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/experiments/createExperiment.tsx");

export default function createExperiment(createExperiment) {
  const _require = createExperiment;
  function trackAutoExposure(location, trackExposureOptions, arg2, descriptor) {
    let obj = trackExposureOptions;
    let tmp = descriptor;
    if (trackExposureOptions === undefined) {
      obj = {};
    }
    if (tmp === undefined) {
      tmp = null;
    }
    obj.exposureType = arg2 ? outer1_9.AUTO_FALLBACK : outer1_9.AUTO;
    obj.excluded = false;
    if (null != tmp) {
      trackExposureWithDescriptor(location, obj, tmp);
    } else {
      trackExposure(location, obj);
    }
  }
  function trackExposure(location, items) {
    let tmp = items;
    if (items === undefined) {
      const obj = { excluded: false, exposureType: outer1_9.MANUAL };
      tmp = obj;
    }
    const tmp3 = outer1_10(createExperiment.kind, result3.id, location);
    if (null != tmp3) {
      trackExposureWithDescriptor(location, tmp, tmp3);
    }
  }
  function trackExposureWithDescriptor(location, items, descriptor) {
    if (null != descriptor) {
      let MANUAL = outer1_9.MANUAL;
      let obj = createExperiment(result3[5]);
      obj = {};
      let _location;
      if (null != location) {
        _location = location.location;
      }
      let str = "unknown";
      if (null != _location) {
        str = _location;
      }
      obj.location = str;
      let analyticsLocations;
      if (null != items) {
        analyticsLocations = items.analyticsLocations;
      }
      if (null == analyticsLocations) {
        analyticsLocations = [];
      }
      obj.analyticsLocations = analyticsLocations;
      let fingerprint;
      if (null != items) {
        fingerprint = items.fingerprint;
      }
      if (null == fingerprint) {
        fingerprint = subscribe.getFingerprint();
      }
      let tmp4;
      if (null != fingerprint) {
        tmp4 = fingerprint;
      }
      obj.fingerprint = tmp4;
      let flag;
      if (null != items) {
        flag = items.excluded;
      }
      if (!flag) {
        flag = false;
      }
      obj.excluded = flag;
      let exposureType;
      if (null != items) {
        exposureType = items.exposureType;
      }
      if (null != exposureType) {
        MANUAL = exposureType;
      }
      obj.exposureType = MANUAL;
      const result = obj.trackExposureToExperiment(result3.id, descriptor, obj);
    }
  }
  function subscribe(arg0, arg1) {
    let obj = arg2;
    const createExperiment = arg0;
    let closure_1 = arg1;
    if (arg2 === undefined) {
      obj = {};
    }
    let c2;
    let NOT_ELIGIBLE;
    let num;
    function onStoreChange() {
      const tmp = outer2_10(closure_0.kind, closure_0.id, closure_0);
      if (null != tmp) {
        if (!c2) {
          let NOT_ELIGIBLE = tmp.bucket;
        }
        let num = -1;
        if (null != tmp) {
          num = tmp.revision;
        }
        let tmp4 = NOT_ELIGIBLE === NOT_ELIGIBLE;
        if (tmp4) {
          tmp4 = num === num;
        }
        if (!tmp4) {
          callback(outer2_11(closure_0, NOT_ELIGIBLE, callback, tmp), NOT_ELIGIBLE, num);
        }
      }
      NOT_ELIGIBLE = outer2_8.NOT_ELIGIBLE;
    }
    c2 = tmp;
    const tmp2 = outer1_10(createExperiment.kind, createExperiment.id, arg0);
    if (null != tmp2) {
      if (!tmp) {
        NOT_ELIGIBLE = tmp2.bucket;
      }
      num = -1;
      if (null != tmp2) {
        num = tmp2.revision;
      }
      arg1(outer1_11(createExperiment, NOT_ELIGIBLE, closure_1, tmp2), NOT_ELIGIBLE, num);
      let result = outer1_7.addReactChangeListener(onStoreChange);
      return () => {
        const result = outer2_7.removeReactChangeListener(onStoreChange);
      };
    }
    NOT_ELIGIBLE = outer1_8.NOT_ELIGIBLE;
  }
  let obj = _require(result3[6]);
  let result = obj.validateOneExperiment(createExperiment.id, createExperiment.label, createExperiment.commonTriggerPoint);
  const map = new Map();
  obj = { description: "Not Eligible", config: createExperiment.defaultConfig };
  const result1 = map.set(constants.NOT_ELIGIBLE, obj);
  obj = { description: "Control Bucket", config: createExperiment.defaultConfig };
  const result2 = map.set(constants.CONTROL, obj);
  const treatments = createExperiment.treatments;
  const item = treatments.forEach((config) => {
    const result = map.set(config.id, { description: "Treatment " + config.id + ": " + config.label, config: config.config });
  });
  const obj1 = { id: createExperiment.id, title: createExperiment.label, commonTriggerPoint: createExperiment.commonTriggerPoint };
  let items = [...map.values()];
  obj1.description = items.map((description) => description.description);
  obj1.buckets = [...map.keys()];
  if ("guild" === createExperiment.kind) {
    result3 = _require(result3[5]).registerGuildExperiment(obj1);
    const obj7 = _require(result3[5]);
  } else {
    result3 = _require(result3[5]).registerUserExperiment(obj1);
    const obj6 = _require(result3[5]);
  }
  return {
    useExperiment(arg0) {
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp = arg1;
      if (arg1 === undefined) {
        const obj = { autoTrackExposure: true };
        tmp = obj;
      }
      let createExperiment;
      let c1;
      let c2;
      let c3;
      let c4;
      let closure_5;
      let c6;
      const disable = tmp.disable;
      createExperiment = tmp2;
      c1 = tmp3;
      const tmp4 = outer1_10(createExperiment.kind, createExperiment.id, arg0);
      c2 = tmp4;
      let tmp8Result;
      if (null != tmp.trackExposureOptions) {
        let trackExposureOptions = tmp.trackExposureOptions;
        if (null == trackExposureOptions) {
          trackExposureOptions = {};
        }
        tmp8Result = map(result3[7])(trackExposureOptions);
        const tmp8 = map(result3[7]);
      }
      c3 = tmp8Result;
      let prop;
      if (null != tmp4) {
        prop = tmp4.triggerDebuggingEnabled;
      }
      c4 = tmp10;
      const tmp11 = trackAutoExposure(trackExposure(() => {
        if (null != _undefined2) {
          if (!c0) {
            let NOT_ELIGIBLE = _undefined2.bucket;
          }
          const items = [outer2_11(c0, NOT_ELIGIBLE, c1, _undefined2), NOT_ELIGIBLE, ];
          let num = -1;
          if (null != _undefined2) {
            num = _undefined2.revision;
          }
          items[2] = num;
          return items;
        }
        NOT_ELIGIBLE = outer2_8.NOT_ELIGIBLE;
      }), 2);
      closure_5 = tmp11[1];
      [tmp13, tmp14, tmp15] = trackAutoExposure(tmp11[0], 3);
      const tmp16 = map(result3[7])(arg0);
      c6 = tmp16;
      let items = [null != disable && disable, false !== tmp.autoTrackExposure, tmp16, tmp8Result, tmp14, tmp15, null != prop && prop];
      trackExposureWithDescriptor(() => {
        let tmp = _undefined;
        if (!_undefined) {
          let tmp3 = !c1;
          if (!c1) {
            tmp3 = !c4;
          }
          tmp = tmp3;
        }
        if (!tmp) {
          tmp = null != _undefined.commonTriggerPoint;
        }
        if (!tmp) {
          _undefined3(c6, _undefined3, false === c1);
        }
      }, items);
      const items1 = [null != disable && disable, tmp16];
      trackExposureWithDescriptor(() => _undefined4(_undefined4, (arg0, arg1, arg2) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        let closure_2 = arg2;
        outer1_5((arg0) => {
          let tmp = arg0;
          if (arg0[0] === closure_0) {
            return tmp;
          }
          const items = [closure_0, closure_1, closure_2];
          tmp = items;
        });
      }, { disable: c0 }), items1);
      return tmp13;
    },
    subscribe,
    trackExposure,
    getCurrentConfig(location, arg1) {
      let tmp = arg1;
      if (arg1 === undefined) {
        const obj = { autoTrackExposure: true };
        tmp = obj;
      }
      const tmp2 = outer1_10(createExperiment.kind, createExperiment.id, location);
      if (null != tmp2) {
        if (!tmp.disable) {
          if (false !== tmp.autoTrackExposure) {
            if (null == createExperiment.commonTriggerPoint) {
              trackAutoExposure(location, tmp.trackExposureOptions, false === tmp.autoTrackExposure, tmp2);
            }
          }
          return outer1_11(createExperiment, tmp2.bucket, map, tmp2);
        }
      }
      return outer1_11(createExperiment, outer1_8.NOT_ELIGIBLE, map, tmp2);
    },
    definition: createExperiment,
    isAAMode(arg0) {
      const tmp = outer1_10(createExperiment.kind, createExperiment.id, arg0);
      return !(null == tmp || !tmp.aaMode);
    }
  };
};
