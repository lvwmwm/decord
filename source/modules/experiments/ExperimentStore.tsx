// Module ID: 4044
// Function ID: 33672
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 57, 1194, 1196, 4045, 653, 3, 4046, 1193, 675, 4049, 587, 22, 686, 2]
// Exports: registerExperiment

// Module 4044 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import Storage from "Storage";
import dispatcher from "dispatcher";
import set from "set";
import _slicedToArray from "_slicedToArray";
import closure_9 from "_isNativeReflectConstruct";
import ExperimentBuckets from "ExperimentBuckets";
import ME from "ME";
import importDefaultResult1 from "_getPrototypeOf";
import tmp9 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function getHash(arg0) {
  if (undefined === table3[arg0]) {
    const v3Result = importDefault(1193).v3(arg0);
    table3[arg0] = v3Result;
    return v3Result;
  } else {
    return tmp;
  }
}
function userCanUseExperiments(user) {
  const flags = user.flags;
  let num = 0;
  if (null != flags) {
    num = flags;
  }
  return (num & constants5.STAFF) === constants5.STAFF || null != user.personal_connection_id;
}
function getTrackExposureExperimentKey(experimentId, descriptor, _location, arg3) {
  const combined = "" + descriptor.type + "|" + experimentId;
  let triggerDebuggingEnabled = descriptor.triggerDebuggingEnabled;
  if (triggerDebuggingEnabled) {
    triggerDebuggingEnabled = undefined !== _location;
  }
  if (triggerDebuggingEnabled) {
    triggerDebuggingEnabled = _location.length > 0;
  }
  const type = descriptor.type;
  if (constants2.USER === type) {
    let tmp10 = combined;
    if (triggerDebuggingEnabled) {
      const _HermesInternal4 = HermesInternal;
      const sum = combined + "|" + _location;
      let text = sum;
      if (arg3) {
        text = `${tmp11}|triggerDebugging`;
      }
      tmp10 = text;
    }
    return tmp10;
  } else if (constants2.GUILD === type) {
    const _HermesInternal2 = HermesInternal;
    const sum1 = combined + "|" + descriptor.guildId;
    let tmp7 = sum1;
    if (triggerDebuggingEnabled) {
      const _HermesInternal3 = HermesInternal;
      const sum2 = sum1 + "|" + _location;
      let text1 = sum2;
      if (arg3) {
        text1 = `${tmp8}|triggerDebugging`;
      }
      tmp7 = text1;
    }
    return tmp7;
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown experiment type: " + descriptor);
    throw error;
  }
}
function getTrackExposureExperimentHash(descriptor) {
  const type = descriptor.type;
  if (constants2.USER === type) {
    const _HermesInternal3 = HermesInternal;
    return getHash("" + descriptor.bucket + "|" + descriptor.revision);
  } else if (constants2.GUILD === type) {
    const _HermesInternal2 = HermesInternal;
    return getHash("" + descriptor.bucket + "|" + descriptor.revision + "|" + descriptor.guildId);
  } else {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("Unknown experiment type: " + descriptor);
    throw error;
  }
}
function _hasExperimentTrackedExposure(arg0, arg1) {
  let tmp2 = null != tmp;
  if (tmp2) {
    const _Date = Date;
    const tmp5 = Date.now() - tmp.time > c33;
    let tmp6 = !tmp5;
    if (!tmp5) {
      tmp6 = tmp.hash === arg1;
    }
    tmp2 = tmp6;
  }
  return tmp2;
}
function trackExposure(arg0) {
  let _location;
  let context;
  let descriptor;
  let excluded;
  let experimentId;
  let exposureType;
  let fingerprint;
  let location_stack;
  ({ experimentId, descriptor, location: _location, location_stack, context, fingerprint, excluded, exposureType } = arg0);
  const assignmentSource = descriptor.assignmentSource;
  if ("override" === assignmentSource) {
    return false;
  } else {
    if ("ready_payload" === assignmentSource) {
      let flag = false;
      if (descriptor.sessionId !== store.getSessionId()) {
        flag = true;
      }
    } else {
      flag = true;
      if ("logged_out_api" === assignmentSource) {
        flag = false;
        if (descriptor.fingerprint !== store.getFingerprint()) {
          flag = true;
        }
      }
    }
    if (descriptor.override) {
      return false;
    } else {
      const tmp10 = getTrackExposureExperimentKey(experimentId, descriptor, _location, exposureType === constants3.AUTO_FALLBACK && descriptor.triggerDebuggingEnabled);
      const tmp12 = getTrackExposureExperimentHash(descriptor);
      let tmp13 = flag;
      if (flag) {
        tmp13 = map.get(tmp10) === tmp12;
      }
      if (tmp13) {
        return false;
      } else if (_hasExperimentTrackedExposure(tmp10, tmp12)) {
        return false;
      } else {
        const type = descriptor.type;
        if (constants2.USER === type) {
          let obj = { name: experimentId };
          ({ revision: obj7.revision, population: obj7.population, bucket: obj7.bucket } = descriptor);
          obj.location = _location;
          obj.location_stack = location_stack;
          obj.hash_result = descriptor.hashResult;
          obj.excluded = excluded;
          obj.exposure_type = exposureType;
          ({ assignmentSource: obj7.assignment_source, sessionId: obj7.assignment_session_id, loadedFromCache: obj7.assignment_loaded_from_cache, holdoutName: obj7.holdout_name, holdoutRevision: obj7.holdout_revision, holdoutBucket: obj7.holdout_bucket } = descriptor);
          if (null != context) {
            obj.context_guild_id = context.guildId;
          }
          if (flag) {
            obj = {};
            const merged = Object.assign(obj);
            obj["assignment_fingerprint"] = descriptor.fingerprint;
            obj["current_session_id"] = store.getSessionId();
            obj["current_fingerprint"] = store.getFingerprint();
            obj["current_source"] = closure_25.source;
            let obj1 = { flush: false, fingerprint };
            importDefault(675).track(constants4.EXPERIMENT_USER_TRIGGERED_IGNORED, obj, obj1);
            const obj11 = importDefault(675);
          } else {
            const obj2 = { flush: true, fingerprint };
            importDefault(675).track(tmp33, obj, obj2);
            const obj8 = importDefault(675);
          }
        } else if (constants2.GUILD === type) {
          obj = { name: experimentId };
          ({ revision: obj.revision, bucket: obj.bucket, guildId: obj.guild_id } = descriptor);
          obj.location = _location;
          obj.location_stack = location_stack;
          obj.hash_result = descriptor.hashResult;
          obj.excluded = excluded;
          obj.exposure_type = exposureType;
          ({ assignmentSource: obj.assignment_source, sessionId: obj.assignment_session_id, loadedFromCache: obj.assignment_loaded_from_cache, holdoutName: obj.holdout_name, holdoutRevision: obj.holdout_revision, holdoutBucket: obj.holdout_bucket } = descriptor);
          if (flag) {
            const obj3 = {};
            const merged1 = Object.assign(obj);
            obj3["assignment_fingerprint"] = descriptor.fingerprint;
            obj3["current_session_id"] = store.getSessionId();
            obj3["current_fingerprint"] = store.getFingerprint();
            obj3["current_source"] = closure_25.source;
            let obj4 = importDefault(675);
            obj4 = { flush: false, fingerprint };
            obj4.track(constants4.EXPERIMENT_GUILD_TRIGGERED_IGNORED, obj3, obj4);
          } else {
            obj1 = importDefault(675);
            const obj5 = { flush: true, fingerprint };
            obj1.track(tmp17, obj, obj5);
          }
        }
        if (flag) {
          const result = map.set(tmp10, tmp12);
        } else {
          const obj6 = {};
          const _Date = Date;
          obj6.time = Date.now();
          obj6.hash = getTrackExposureExperimentHash(descriptor);
          closure_22[getTrackExposureExperimentKey(experimentId, descriptor, _location, tmp4)] = obj6;
          saveTrackedExposureExperiments(closure_22);
          const tmp53 = getTrackExposureExperimentKey(experimentId, descriptor, _location, tmp4);
        }
      }
    }
  }
}
function _loadGuildFilter(arg0) {
  let tmp;
  let tmp2;
  [tmp, tmp2] = arg0;
  let tmp3 = null;
  if (null != require(4049) /* _createForOfIteratorHelperLoose */.GUILD_FILTERS[tmp]) {
    const GUILD_FILTERS = require(4049) /* _createForOfIteratorHelperLoose */.GUILD_FILTERS;
    tmp3 = GUILD_FILTERS[tmp](tmp2);
  }
  return tmp3;
}
function _loadOverrides(arg0) {
  let iter4;
  const obj = {};
  if (null == arg0) {
    return obj;
  } else {
    const tmp2 = _createForOfIteratorHelperLoose(arg0);
    let iter = tmp2();
    if (!iter.done) {
      do {
        let value = iter.value;
        let tmp4 = _createForOfIteratorHelperLoose;
        let tmp5 = _createForOfIteratorHelperLoose(value.k);
        let iter2 = tmp5();
        if (!iter2.done) {
          do {
            obj[iter2.value] = tmp3;
            let iter3 = tmp5();
            iter2 = iter3;
            done = iter3.done;
          } while (!done);
        }
        iter4 = tmp2();
        iter = iter4;
      } while (!iter4.done);
    }
    return obj;
  }
}
function _loadPopulation(arg0) {
  const tmp = callback3(arg0, 2);
  const first = tmp[0];
  return {
    buckets: first.map((arg0) => {
      let arr;
      let tmp;
      [tmp, arr] = arg0;
      return { bucket: tmp, positions: arr.map((s) => ({ start: s.s, end: s.e })) };
    }),
    filters: tmp[1].map(_loadGuildFilter),
    rawFilterData: tmp[1]
  };
}
function handleLoadedExperiments(type) {
  let tmp = !c31;
  if (!c31) {
    tmp = "CONNECTION_OPEN" === type.type;
  }
  if (tmp) {
    tmp = userCanUseExperiments(type.user);
  }
  if (tmp) {
    c31 = true;
  }
  let tmp3 = "EXPERIMENTS_FETCH_SUCCESS" === type.type && c21;
  if (tmp3) {
    tmp3 = "ready_payload" === closure_25.source;
  }
  if (tmp3) {
    let obj = importDefault(675);
    obj = { fingerprint: type.fingerprint, current_snapshot_source: closure_25.source, current_snapshot_session_id: closure_25.sessionId, current_snapshot_fingerprint: closure_25.fingerprint };
    obj.track(constants4.EXPERIMENT_FETCH_IGNORED, obj);
  }
  let closure_26 = {};
  let closure_27 = {};
  let closure_28 = {};
  let tmp12 = "CONNECTION_OPEN" === type.type;
  if (!tmp12) {
    tmp12 = null == type.fingerprint;
  }
  if (!tmp12) {
    tmp12 = type.fingerprint === store.getFingerprint();
  }
  let guildExperiments = type.guildExperiments;
  let str3 = "logged_out_api";
  if ("CONNECTION_OPEN" === type.type) {
    str3 = "ready_payload";
  }
  if ("sessionId" in type) {
    let str4 = type.sessionId;
  } else {
    const sessionId = store.getSessionId();
    str4 = "";
    if (null != sessionId) {
      str4 = sessionId;
    }
  }
  if (tmp12) {
    obj = { rawUserExperiments: type.experiments };
    if (null == guildExperiments) {
      guildExperiments = [];
    }
    obj.rawGuildExperiments = guildExperiments;
    obj.source = str3;
    obj.sessionId = str4;
    obj.fingerprint = tmp18;
    processRawExperiments(obj, false);
    const tmp19 = processRawExperiments;
  }
  c21 = true;
}
function processRawExperiments(sessionId) {
  let rawGuildExperiments;
  let rawUserExperiments;
  let source;
  let flag = arg1;
  ({ rawUserExperiments, rawGuildExperiments, source } = sessionId);
  sessionId = sessionId.sessionId;
  const fingerprint = sessionId.fingerprint;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = { rawUserExperiments };
  let items = rawGuildExperiments;
  if (null == rawGuildExperiments) {
    items = [];
  }
  obj.rawGuildExperiments = items;
  obj.source = source;
  obj.sessionId = sessionId;
  obj.fingerprint = fingerprint;
  const item = rawUserExperiments.forEach((arg0) => {
    let tmp;
    let tmp10;
    let tmp11;
    let tmp2;
    let tmp3;
    let tmp4;
    let tmp5;
    let tmp6;
    let tmp7;
    let tmp8;
    let tmp9;
    [tmp, tmp2, tmp3, tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11] = arg0;
    const obj = { type: "user", revision: tmp2, population: tmp5, bucket: tmp3, override: 0 === tmp4 };
    let num = -1;
    if (null != tmp6) {
      num = tmp6;
    }
    obj.hashResult = num;
    obj.aaMode = 1 === tmp7;
    obj.triggerDebuggingEnabled = 1 === tmp8;
    obj.assignmentSource = source;
    obj.sessionId = sessionId;
    obj.loadedFromCache = flag;
    obj.fingerprint = fingerprint;
    obj.holdoutName = tmp9;
    obj.holdoutRevision = tmp10;
    obj.holdoutBucket = tmp11;
    outer1_26[tmp] = obj;
  });
  if (null != rawGuildExperiments) {
    const item1 = rawGuildExperiments.forEach((arg0) => {
      let arr;
      let arr2;
      let tmp;
      let tmp2;
      let tmp3;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      [tmp, tmp2, tmp3, arr, tmp4, arr2, tmp5, tmp6, tmp7, tmp8] = arg0;
      const obj = { hashKey: tmp2, revision: tmp3, populations: arr.map(outer1_45), overrides: outer1_44(tmp4) };
      if (null == items) {
        items = [];
      }
      obj.overridesFormatted = items.map((arr) => arr.map(outer2_45));
      let tmp10 = null;
      if (null != tmp5) {
        tmp10 = tmp5;
      }
      obj.holdoutName = tmp10;
      let tmp11 = null;
      if (null != tmp6) {
        tmp11 = tmp6;
      }
      obj.holdoutControlBucket = tmp11;
      obj.aaMode = 1 === tmp7;
      obj.triggerDebuggingEnabled = 1 === tmp8;
      obj.assignmentSource = source;
      obj.sessionId = sessionId;
      obj.loadedFromCache = flag;
      obj.fingerprint = fingerprint;
      outer1_27[tmp] = obj;
    });
  }
}
function computeGuildExperimentBucketFromPopulationsOrNull(guildId, populations, result) {
  let buckets;
  let filters;
  let closure_0 = result;
  const tmp = _createForOfIteratorHelperLoose(populations);
  const iter = tmp();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      ({ buckets, filters } = iter2.value);
      let flag = true;
      let tmp3 = tmp2;
      if (null != filters) {
        let tmp4 = _createForOfIteratorHelperLoose;
        let tmp5 = _createForOfIteratorHelperLoose(filters);
        let iter3 = tmp5();
        let iter4 = iter3;
        flag = true;
        let tmp6 = iter3;
        let tmp7 = tmp5;
        tmp3 = tmp2;
        if (!iter3.done) {
          while (true) {
            let value = iter4.value;
            if (null == value) {
              let iter5 = tmp5();
              iter4 = iter5;
              flag = true;
              let tmp10 = iter5;
              let tmp11 = tmp5;
              tmp3 = value;
              if (iter5.done) {
                break;
              }
            } else {
              flag = false;
              let tmp8 = iter4;
              let tmp9 = tmp5;
              tmp3 = value;
              if (!value(guildId)) {
                break;
              }
            }
            break;
          }
        }
      }
      if (flag) {
        break;
      } else {
        let iter6 = tmp();
        iter2 = iter6;
        tmp2 = tmp3;
      }
    }
    const found = buckets.find((positions) => {
      positions = positions.positions;
      return positions.some((start) => {
        let tmp2 = outer1_0 >= start.start;
        if (tmp2) {
          tmp2 = outer1_0 < tmp;
        }
        return tmp2;
      });
    });
    if (null != found) {
      let CONTROL = found.bucket;
    } else {
      CONTROL = constants.CONTROL;
    }
    let tmp15 = null;
    if (CONTROL !== constants.NOT_ELIGIBLE) {
      tmp15 = CONTROL;
    }
    return tmp15;
  }
  return null;
}
function computeGuildExperimentDescriptor(guildId, holdoutName) {
  const tmp = table2["" + getHash(undefined, holdoutName)];
  if (null == tmp) {
    return null;
  } else {
    const triggerDebuggingEnabled = tmp.triggerDebuggingEnabled;
    if (null != tmp.overrides[guildId]) {
      let tmp23 = null;
      if (tmp27 !== constants.NOT_ELIGIBLE) {
        let obj = { type: constants2.GUILD, guildId, revision: tmp25, bucket: tmp27, override: true, hashResult: -1, triggerDebuggingEnabled };
        tmp23 = obj;
      }
      return tmp23;
    } else {
      const hashKey = tmp.hashKey;
      let tmp2 = holdoutName;
      if (null != hashKey) {
        tmp2 = hashKey;
      }
      const _HermesInternal = HermesInternal;
      const result = getHash("" + tmp2 + ":" + guildId) % 10000;
      let overridesFormatted = tmp.overridesFormatted;
      if (null == overridesFormatted) {
        overridesFormatted = [];
      }
      const tmp4Result = _createForOfIteratorHelperLoose(overridesFormatted);
      const iter = tmp4Result();
      let iter2 = iter;
      if (!iter.done) {
        const tmp7 = computeGuildExperimentBucketFromPopulationsOrNull(guildId, iter2.value, result);
        while (null === tmp7) {
          let iter3 = tmp4Result();
          iter2 = iter3;
        }
        obj = { type: constants2.GUILD, guildId, revision: tmp.revision, bucket: tmp7, override: true, hashResult: result, triggerDebuggingEnabled };
        ({ assignmentSource: obj.assignmentSource, sessionId: obj.sessionId, loadedFromCache: obj.loadedFromCache } = tmp);
        return obj;
      }
      const tmp10 = computeGuildExperimentBucketFromPopulationsOrNull(guildId, tmp.populations, result);
      if (null == tmp10) {
        return null;
      } else {
        let tmp11 = null;
        if (null != tmp.holdoutName) {
          tmp11 = null;
          if (null != tmp.holdoutControlBucket) {
            tmp11 = null;
            if (tmp.holdoutName !== holdoutName) {
              const tmp13 = computeGuildExperimentDescriptor(guildId, tmp.holdoutName);
              let bucket;
              if (null != tmp13) {
                bucket = tmp13.bucket;
              }
              tmp11 = tmp13;
              if (null != bucket) {
                if (true !== tmp13.override) {
                  obj = { experimentId: tmp.holdoutName, descriptor: tmp13 };
                  trackExposure(obj);
                }
                let bucket1;
                if (null != tmp13) {
                  bucket1 = tmp13.bucket;
                }
                tmp11 = tmp13;
                if (bucket1 === tmp.holdoutControlBucket) {
                  return null;
                }
              }
            }
          }
        }
        const obj1 = { type: constants2.GUILD, guildId, revision: tmp.revision, bucket: tmp10, hashResult: result, aaMode: tmp26, triggerDebuggingEnabled };
        ({ assignmentSource: obj3.assignmentSource, sessionId: obj3.sessionId, loadedFromCache: obj3.loadedFromCache } = tmp);
        holdoutName = null;
        if (null != tmp11) {
          holdoutName = tmp.holdoutName;
        }
        obj1.holdoutName = holdoutName;
        let revision;
        if (null != tmp11) {
          revision = tmp11.revision;
        }
        obj1.holdoutRevision = revision;
        let bucket2;
        if (null != tmp11) {
          bucket2 = tmp11.bucket;
        }
        obj1.holdoutBucket = bucket2;
        return obj1;
      }
      const tmp28 = getHash;
      const tmp4 = _createForOfIteratorHelperLoose;
    }
  }
}
function processGuildExperimentPopulationFromCache(loadedGuildExperiments) {
  let obj = {};
  for (const key10008 in arg0) {
    let tmp10 = key10008;
    obj = {};
    let tmp11 = obj;
    let merged = Object.assign(arg0[key10008]);
    obj[key10008] = obj;
    let tmp13 = _createForOfIteratorHelperLoose;
    let tmp14 = _createForOfIteratorHelperLoose(obj[key10008].populations);
    let iter2 = tmp14();
    if (!iter2.done) {
      do {
        let value = iter2.value;
        let rawFilterData = value.rawFilterData;
        let tmp = _loadGuildFilter;
        value.filters = rawFilterData.map(_loadGuildFilter);
        let iter = tmp14();
        iter2 = iter;
        let done = iter.done;
      } while (!done);
    }
    let overridesFormatted = obj[key10008].overridesFormatted;
    let tmp2 = _createForOfIteratorHelperLoose;
    if (null == overridesFormatted) {
      overridesFormatted = [];
    }
    let tmp2Result = tmp2(overridesFormatted);
    let iter3 = tmp2Result();
    if (iter3.done) {
      continue;
    } else {
      do {
        let tmp4 = _createForOfIteratorHelperLoose;
        let tmp5 = _createForOfIteratorHelperLoose(iter3.value);
        let iter4 = tmp5();
        let iter5 = iter4;
        let tmp6 = iter4;
        if (!iter4.done) {
          do {
            value = iter5.value;
            let rawFilterData1 = value.rawFilterData;
            let tmp7 = _loadGuildFilter;
            value.filters = rawFilterData1.map(_loadGuildFilter);
            let iter6 = tmp5();
            iter5 = iter6;
            let tmp8 = iter6;
            let done2 = iter6.done;
          } while (!done2);
        }
        let iter7 = tmp2Result();
        let tmp9 = tmp5;
        iter3 = iter7;
      } while (!iter7.done);
    }
    continue;
  }
  return obj;
}
function handleOverlayInitialize(serializedExperimentStore) {
  let c21;
  let closure_22;
  let closure_26;
  let closure_29;
  let closure_30;
  serializedExperimentStore = serializedExperimentStore.serializedExperimentStore;
  let tmp2 = !c31;
  if (!c31) {
    tmp2 = userCanUseExperiments(tmp);
  }
  if (tmp2) {
    c31 = true;
  }
  ({ hasLoadedExperiments: c21, trackedExposureExperiments: closure_22, loadedUserExperiments: closure_26, userExperimentOverrides: closure_29, guildExperimentOverrides: closure_30 } = serializedExperimentStore);
  const obj = {};
  const merged = Object.assign(obj);
  obj["source"] = serializedExperimentStore.assignmentSource;
  obj["sessionId"] = serializedExperimentStore.assignmentSessionId;
  obj["fingerprint"] = serializedExperimentStore.assignmentFingerprint;
  let closure_27 = processGuildExperimentPopulationFromCache(serializedExperimentStore.loadedGuildExperiments);
  let closure_28 = {};
}
function handleFetchFailure() {
  let c21 = true;
}
function handleLogout(isSwitchingAccount) {
  const Storage = require(587) /* Storage */.Storage;
  Storage.remove(c16);
  if (!isSwitchingAccount.isSwitchingAccount) {
    const Storage2 = require(587) /* Storage */.Storage;
    Storage2.remove(exerimentOverrides);
    const Storage3 = require(587) /* Storage */.Storage;
    Storage3.remove(userExperimentOverrides);
    const Storage4 = require(587) /* Storage */.Storage;
    Storage4.remove(guildExperimentOverrides);
    let closure_29 = {};
    let closure_30 = {};
  }
  let closure_26 = {};
  const obj = {};
  const merged = Object.assign(obj);
  obj["rawUserExperiments"] = [];
  let closure_22 = {};
  let c21 = false;
}
function handleLogin() {
  let c21 = false;
  let closure_22 = {};
  let closure_27 = {};
  const Storage = require(587) /* Storage */.Storage;
  Storage.remove(c16);
}
function loadLocalOverrides() {
  const Storage = require(587) /* Storage */.Storage;
  let obj = Storage.get(exerimentOverrides);
  if (null == obj) {
    obj = {};
  }
  const items = [obj, , ];
  const Storage2 = require(587) /* Storage */.Storage;
  let value = Storage2.get(userExperimentOverrides);
  if (null == value) {
    value = {};
  }
  items[1] = value;
  const Storage3 = require(587) /* Storage */.Storage;
  let value1 = Storage3.get(guildExperimentOverrides);
  if (null == value1) {
    value1 = {};
  }
  items[2] = value1;
  let closure_29 = {};
  let closure_30 = {};
  let num = 0;
  let tmp4 = !importDefault(22).isEmpty(items[0]);
  let tmp7 = tmp4;
  if (0 < items.length) {
    do {
      let tmp8 = items[num];
      let tmp9 = tmp8;
      let flag = tmp4;
      let tmp10 = tmp5;
      let tmp11 = tmp6;
      let tmp12 = tmp4;
      let keys = Object.keys();
      if (keys !== undefined) {
        let tmp14 = flag;
        tmp5 = tmp10;
        tmp6 = tmp11;
        tmp12 = flag;
        let tmp15 = keys[tmp];
        while (tmp15 !== undefined) {
          let tmp25 = tmp15;
          let tmp26 = tmp8[tmp15];
          if (null != tmp26) {
            if (null != tmp26.bucket) {
              if (true === tmp26.override) {
                if (!tmp26.fromCookie) {
                  let type = tmp26.type;
                  let tmp16 = constants2;
                  if (constants2.USER === type) {
                    let tmp19 = closure_29;
                    closure_29[tmp15] = tmp26;
                    tmp10 = tmp15;
                    tmp11 = tmp26;
                    continue;
                  } else {
                    let tmp17 = constants2;
                    if (constants2.GUILD === type) {
                      let tmp18 = closure_30;
                      closure_30[tmp15] = tmp26;
                      tmp10 = tmp15;
                      tmp11 = tmp26;
                      continue;
                    } else {
                      delete tmp2[tmp3];
                      flag = true;
                      tmp10 = tmp15;
                      tmp11 = tmp26;
                      continue;
                    }
                    continue;
                  }
                  continue;
                }
                continue;
              }
            }
          }
          delete tmp2[tmp3];
          flag = true;
          tmp10 = tmp15;
          tmp11 = tmp26;
          continue;
        }
      }
      num = num + 1;
      tmp4 = tmp12;
      tmp7 = tmp12;
    } while (num < items.length);
  }
  const obj4 = importDefault(22);
  const buildOverrideExperiments = require(4046) /* getAPIEndpoint */.getBuildOverrideExperiments();
  let flag2 = false;
  let flag3 = false;
  const keys1 = Object.keys();
  if (keys1 !== undefined) {
    flag3 = flag2;
    while (keys1[num] !== undefined) {
      let tmp27 = tmp22;
      let tmp28 = closure_29;
      obj = { type: null, revision: 1, population: 0, override: true, fromCookie: true, assignmentSource: "override" };
      let tmp29 = constants2;
      obj.type = constants2.USER;
      obj.bucket = buildOverrideExperiments[tmp22];
      closure_29[tmp22] = obj;
      let tmp30 = closure_30;
      let obj1 = { type: null, revision: 1, override: true, fromCookie: true, assignmentSource: "override" };
      let tmp31 = constants2;
      obj1.type = constants2.GUILD;
      obj1.bucket = buildOverrideExperiments[tmp22];
      closure_30[tmp22] = obj1;
      flag2 = true;
      continue;
    }
  }
  if (!flag3) {
    flag3 = tmp7;
  }
  if (flag3) {
    saveExperimentOverrides();
  }
}
function saveExperimentOverrides() {
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set(userExperimentOverrides, closure_29);
  const Storage2 = require(587) /* Storage */.Storage;
  const result1 = Storage2.set(guildExperimentOverrides, closure_30);
}
function saveTrackedExposureExperiments(closure_22) {
  const Storage = require(587) /* Storage */.Storage;
  const result = Storage.set(c16, { v: 1, e: closure_22 });
}
function handleExperimentOverrideBucket(skipCleanup) {
  let experimentBucket;
  let experimentId;
  let experimentType;
  ({ experimentId, experimentBucket, experimentType } = skipCleanup);
  if (null == experimentType) {
    let type;
    if (null != dependencyMap[experimentId]) {
      type = tmp6.type;
    }
    experimentType = type;
  }
  if (null == experimentType) {
    return false;
  } else {
    if (null == experimentBucket) {
      let obj = {};
      const merged = Object.assign(obj1);
      obj1 = obj;
      delete tmp[tmp2];
      obj = {};
      const merged1 = Object.assign(obj);
      delete tmp[tmp2];
    } else if ("user" === experimentType) {
      obj1 = {};
      const merged2 = Object.assign(obj1);
      const obj2 = { type: experimentType, revision: 1, population: 0, bucket: experimentBucket, override: true };
      obj1[experimentId] = obj2;
    } else {
      obj = {};
      const merged3 = Object.assign(obj);
      const obj3 = { type: experimentType, revision: 1, bucket: experimentBucket, override: true };
      obj[experimentId] = obj3;
    }
    if (!skipCleanup.skipCleanup) {
      const items = [obj1, obj];
      for (let num2 = 0; num2 < items.length; num2 = num2 + 1) {
        let tmp23 = items[num2];
        let tmp24 = tmp23;
        let tmp25 = tmp22;
        let keys = Object.keys();
        if (keys !== undefined) {
          tmp22 = tmp25;
          let tmp27 = keys[true];
          while (tmp27 !== undefined) {
            let tmp31 = tmp27;
            let tmp32 = dependencyMap;
            tmp25 = tmp27;
            if (null != dependencyMap[tmp27]) {
              continue;
            } else {
              let tmp28 = obj1;
              delete tmp4[tmp3];
              tmp25 = tmp27;
              continue;
            }
            continue;
          }
        }
      }
    }
    saveExperimentOverrides();
  }
}
function handleGuildChange(arg0) {
  for (const key10008 in closure_28) {
    let tmp5 = key10008;
    let tmp6 = callback3;
    if (tmp3.id !== callback3(key10008.split(":"), 1)[0]) {
      continue;
    } else {
      let tmp4 = closure_28;
      delete tmp[tmp2];
      continue;
    }
    continue;
  }
}
({ ExperimentBuckets: closure_10, ExperimentTypes: closure_11, ExposureTypes: closure_12 } = ExperimentBuckets);
({ AnalyticEvents: closure_13, EMPTY_STRING_SNOWFLAKE_ID: closure_14, UserFlags: closure_15 } = ME);
let c16 = "scientist:triggered";
const exerimentOverrides = "exerimentOverrides";
const userExperimentOverrides = "userExperimentOverrides";
const guildExperimentOverrides = "guildExperimentOverrides";
importDefaultResult1 = new importDefaultResult1("ExperimentStore");
let c21 = false;
let closure_22 = {};
const map = new Map();
let closure_24 = {};
let closure_25 = { rawUserExperiments: [], rawGuildExperiments: [] };
let closure_26 = {};
let closure_27 = {};
let closure_28 = {};
let closure_29 = {};
let closure_30 = {};
let closure_31 = "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL || true;
let closure_32 = {};
let c33 = 604800000;
let timestamp = Date.now();
tmp9.displayName = "ExperimentStore";
tmp9.LATEST_SNAPSHOT_VERSION = 1;
tmp9 = new tmp9();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/experiments/ExperimentStore.tsx");

export default tmp9;
export const registerExperiment = function registerExperiment(experimentId) {
  closure_24[experimentId.experimentId] = { type: experimentId.experimentType, title: experimentId.title, description: experimentId.description, buckets: experimentId.buckets, commonTriggerPoint: experimentId.commonTriggerPoint };
};
