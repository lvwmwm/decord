// Module ID: 4041
// Function ID: 33636
// Name: getExperimentDescriptor
// Dependencies: []
// Exports: default

// Module 4041 (getExperimentDescriptor)
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
let closure_3 = importDefault(dependencyMap[0]);
({ useState: closure_4, useEffect: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const tmp2 = arg1(dependencyMap[1]);
({ ExperimentBuckets: closure_8, ExposureTypes: closure_9 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/experiments/createExperiment.tsx");

export default function createExperiment(config) {
  const arg1 = config;
  function trackAutoExposure(self, trackExposureOptions, arg2, descriptor) {
    let obj = trackExposureOptions;
    let tmp = descriptor;
    if (trackExposureOptions === undefined) {
      obj = {};
    }
    if (tmp === undefined) {
      tmp = null;
    }
    obj.exposureType = arg2 ? closure_9.AUTO_FALLBACK : closure_9.AUTO;
    obj.excluded = false;
    if (null != tmp) {
      trackExposureWithDescriptor(self, obj, tmp);
    } else {
      trackExposure(self, obj);
    }
  }
  function trackExposure(location, analyticsLocations) {
    let tmp = analyticsLocations;
    if (analyticsLocations === undefined) {
      const obj = { excluded: false, exposureType: constants2.MANUAL };
      tmp = obj;
    }
    const tmp3 = callback(location.kind, result3.id, location);
    if (null != tmp3) {
      trackExposureWithDescriptor(location, tmp, tmp3);
    }
  }
  function trackExposureWithDescriptor(location, analyticsLocations, descriptor) {
    if (null != descriptor) {
      let MANUAL = constants2.MANUAL;
      let obj = location(result3[5]);
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
      analyticsLocations = undefined;
      if (null != analyticsLocations) {
        analyticsLocations = analyticsLocations.analyticsLocations;
      }
      if (null == analyticsLocations) {
        analyticsLocations = [];
      }
      obj.analyticsLocations = analyticsLocations;
      let fingerprint;
      if (null != analyticsLocations) {
        fingerprint = analyticsLocations.fingerprint;
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
      if (null != analyticsLocations) {
        flag = analyticsLocations.excluded;
      }
      if (!flag) {
        flag = false;
      }
      obj.excluded = flag;
      let exposureType;
      if (null != analyticsLocations) {
        exposureType = analyticsLocations.exposureType;
      }
      if (null != exposureType) {
        MANUAL = exposureType;
      }
      obj.exposureType = MANUAL;
      const result = obj.trackExposureToExperiment(result3.id, descriptor, obj);
    }
  }
  function subscribe(self) {
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    let result3;
    let trackAutoExposure;
    let trackExposure;
    function onStoreChange(self) {
      const tmp = callback(self.kind, self.id, self);
      if (null != tmp) {
        if (!tmp) {
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
          arg1(callback2(self, NOT_ELIGIBLE, arg1, tmp), NOT_ELIGIBLE, num);
        }
      }
      NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
    }
    const trackExposureWithDescriptor = onStoreChange;
    result3 = tmp;
    const tmp2 = callback(self.kind, self.id, self);
    if (null != tmp2) {
      if (!tmp) {
        let NOT_ELIGIBLE = tmp2.bucket;
      }
      trackAutoExposure = NOT_ELIGIBLE;
      let num = -1;
      if (null != tmp2) {
        num = tmp2.revision;
      }
      trackExposure = num;
      arg1(callback2(self, trackAutoExposure, map, tmp2), trackAutoExposure, trackExposure);
      const result = closure_7.addReactChangeListener(onStoreChange);
      return () => {
        const result = closure_7.removeReactChangeListener(onStoreChange);
      };
    }
    NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
  }
  let closure_6 = subscribe;
  let obj = arg1(dependencyMap[6]);
  const result = obj.validateOneExperiment(config.id, config.label, config.commonTriggerPoint);
  const map = new Map();
  const importDefault = map;
  obj = { description: "Not Eligible", config: config.defaultConfig };
  const result1 = map.set(constants.NOT_ELIGIBLE, obj);
  obj = { description: "Control Bucket", config: config.defaultConfig };
  const result2 = map.set(constants.CONTROL, obj);
  const treatments = config.treatments;
  const item = treatments.forEach((config) => {
    const result = map.set(config.id, { description: "Treatment " + config.id + ": " + config.label, config: config.config });
  });
  const obj1 = { id: config.id, title: config.label, commonTriggerPoint: config.commonTriggerPoint };
  const items = [...map.values()];
  obj1.description = items.map((description) => description.description);
  obj1.buckets = [...map.keys()];
  if ("guild" === config.kind) {
    let result3 = arg1(dependencyMap[5]).registerGuildExperiment(obj1);
    const obj7 = arg1(dependencyMap[5]);
  } else {
    result3 = arg1(dependencyMap[5]).registerUserExperiment(obj1);
    const obj6 = arg1(dependencyMap[5]);
  }
  const dependencyMap = result3;
  return {
    useExperiment(self) {
      let tmp13;
      let tmp14;
      let tmp15;
      let tmp = arg1;
      if (arg1 === undefined) {
        const obj = { autoTrackExposure: true };
        tmp = obj;
      }
      self = undefined;
      let map;
      let result3;
      let trackAutoExposure;
      let trackExposure;
      let trackExposureWithDescriptor;
      let subscribe;
      const disable = tmp.disable;
      self = tmp2;
      map = tmp3;
      const tmp4 = callback(self.kind, self.id, self);
      result3 = tmp4;
      let tmp8Result;
      if (null != tmp.trackExposureOptions) {
        let trackExposureOptions = tmp.trackExposureOptions;
        if (null == trackExposureOptions) {
          trackExposureOptions = {};
        }
        tmp8Result = map(result3[7])(trackExposureOptions);
        const tmp8 = map(result3[7]);
      }
      trackAutoExposure = tmp8Result;
      let prop;
      if (null != tmp4) {
        prop = tmp4.triggerDebuggingEnabled;
      }
      trackExposure = tmp10;
      const tmp11 = trackAutoExposure(trackExposure(() => {
        if (null != tmp4) {
          if (!tmp2) {
            let NOT_ELIGIBLE = tmp4.bucket;
          }
          const items = [callback(tmp2, NOT_ELIGIBLE, callback, tmp2), NOT_ELIGIBLE, ];
          let num = -1;
          if (null != tmp2) {
            num = tmp4.revision;
          }
          items[2] = num;
          return items;
        }
        NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
      }), 2);
      trackExposureWithDescriptor = tmp11[1];
      [tmp13, tmp14, tmp15] = trackAutoExposure(tmp11[0], 3);
      const tmp16 = map(result3[7])(self);
      subscribe = tmp16;
      const items = [null != disable && disable, false !== tmp.autoTrackExposure, tmp16, tmp8Result, tmp14, tmp15, null != prop && prop];
      trackExposureWithDescriptor(() => {
        let tmp = tmp2;
        if (!tmp2) {
          let tmp3 = !tmp3;
          if (!tmp3) {
            tmp3 = !tmp10;
          }
          tmp = tmp3;
        }
        if (!tmp) {
          tmp = null != tmp2.commonTriggerPoint;
        }
        if (!tmp) {
          tmp8Result(tmp16, tmp8Result, false === tmp3);
        }
      }, items);
      const items1 = [null != disable && disable, tmp16];
      trackExposureWithDescriptor(() => tmp16(tmp16, (arg0, arg1, arg2) => {
        callback((arg0) => {
          let tmp = arg0;
          if (arg0[0] === arg0) {
            return tmp;
          }
          const items = [arg0, arg1, arg2];
          tmp = items;
        });
      }, { disable: tmp2 }), items1);
      return tmp13;
    },
    subscribe,
    trackExposure,
    getCurrentConfig(self, arg1) {
      let tmp = arg1;
      if (arg1 === undefined) {
        const obj = { autoTrackExposure: true };
        tmp = obj;
      }
      const tmp2 = callback(self.kind, self.id, self);
      if (null != tmp2) {
        if (!tmp.disable) {
          if (false !== tmp.autoTrackExposure) {
            if (null == self.commonTriggerPoint) {
              trackAutoExposure(self, tmp.trackExposureOptions, false === tmp.autoTrackExposure, tmp2);
            }
          }
          return callback2(self, tmp2.bucket, map, tmp2);
        }
      }
      return callback2(self, constants.NOT_ELIGIBLE, map, tmp2);
    },
    definition: config,
    isAAMode(self) {
      const tmp = callback(self.kind, self.id, self);
      return !(null == tmp || !tmp.aaMode);
    }
  };
};
