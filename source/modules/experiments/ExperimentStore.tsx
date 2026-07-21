// Module ID: 4042
// Function ID: 33661
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: registerExperiment

// Module 4042 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
  if (undefined === closure_32[arg0]) {
    const v3Result = importDefault(dependencyMap[12]).v3(arg0);
    closure_32[arg0] = v3Result;
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
    const tmp5 = Date.now() - tmp.time > closure_33;
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
            importDefault(dependencyMap[13]).track(constants4.EXPERIMENT_USER_TRIGGERED_IGNORED, obj, obj1);
            const obj11 = importDefault(dependencyMap[13]);
          } else {
            const obj2 = { flush: true, fingerprint };
            importDefault(dependencyMap[13]).track(tmp33, obj, obj2);
            const obj8 = importDefault(dependencyMap[13]);
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
            let obj4 = importDefault(dependencyMap[13]);
            obj4 = { flush: false, fingerprint };
            obj4.track(constants4.EXPERIMENT_GUILD_TRIGGERED_IGNORED, obj3, obj4);
          } else {
            obj1 = importDefault(dependencyMap[13]);
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
  if (null != arg1(dependencyMap[14]).GUILD_FILTERS[tmp]) {
    const GUILD_FILTERS = arg1(dependencyMap[14]).GUILD_FILTERS;
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
        let tmp4 = closure_35;
        let tmp5 = closure_35(value.k);
        let iter2 = tmp5();
        if (!iter2.done) {
          do {
            obj[iter2.value] = tmp3;
            let iter3 = tmp5();
            iter2 = iter3;
            let done = iter3.done;
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
  let tmp = !closure_31;
  if (!closure_31) {
    tmp = "CONNECTION_OPEN" === type.type;
  }
  if (tmp) {
    tmp = userCanUseExperiments(type.user);
  }
  if (tmp) {
    closure_31 = true;
  }
  let tmp3 = "EXPERIMENTS_FETCH_SUCCESS" === type.type && closure_21;
  if (tmp3) {
    tmp3 = "ready_payload" === closure_25.source;
  }
  if (tmp3) {
    let obj = importDefault(dependencyMap[13]);
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
  closure_21 = true;
}
function processRawExperiments(sessionId) {
  let rawGuildExperiments;
  let rawUserExperiments;
  let source;
  let flag = arg1;
  ({ rawUserExperiments, rawGuildExperiments, source } = sessionId);
  const arg1 = source;
  sessionId = sessionId.sessionId;
  const importDefault = sessionId;
  const fingerprint = sessionId.fingerprint;
  const dependencyMap = fingerprint;
  if (arg1 === undefined) {
    flag = false;
  }
  let closure_3 = flag;
  const obj = { rawUserExperiments };
  let items = rawGuildExperiments;
  if (null == rawGuildExperiments) {
    items = [];
  }
  obj.rawGuildExperiments = items;
  obj.source = source;
  obj.sessionId = sessionId;
  obj.fingerprint = fingerprint;
  let closure_25 = obj;
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
    closure_26[tmp] = obj;
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
      const obj = { hashKey: tmp2, revision: tmp3, populations: arr.map(closure_45), overrides: callback(tmp4) };
      if (null == items) {
        const items = [];
      }
      obj.overridesFormatted = items.map((arr) => arr.map(closure_45));
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
      closure_27[tmp] = obj;
    });
  }
}
function computeGuildExperimentBucketFromPopulationsOrNull(guildId, populations, result) {
  let buckets;
  let filters;
  populations = result;
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
        let tmp2 = tmp3;
      }
    }
    const found = buckets.find((positions) => {
      positions = positions.positions;
      return positions.some((start) => {
        let tmp2 = closure_0 >= start.start;
        if (tmp2) {
          tmp2 = closure_0 < tmp;
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
  if (null == closure_27["" + closure_37(undefined, holdoutName)]) {
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
    let tmp13 = closure_35;
    let tmp14 = closure_35(obj[key10008].populations);
    let iter2 = tmp14();
    if (!iter2.done) {
      do {
        let value = iter2.value;
        let rawFilterData = value.rawFilterData;
        let tmp = closure_43;
        value.filters = rawFilterData.map(closure_43);
        let iter = tmp14();
        iter2 = iter;
        let done = iter.done;
      } while (!done);
    }
    let overridesFormatted = obj[key10008].overridesFormatted;
    let tmp2 = closure_35;
    if (null == overridesFormatted) {
      overridesFormatted = [];
    }
    let tmp2Result = tmp2(overridesFormatted);
    let iter3 = tmp2Result();
    if (iter3.done) {
      continue;
    } else {
      while (true) {
        let tmp4 = closure_35;
        let tmp5 = closure_35(iter3.value);
        let iter4 = tmp5();
        let iter5 = iter4;
        let tmp6 = iter4;
        if (!iter4.done) {
          do {
            value = iter5.value;
            let rawFilterData1 = value.rawFilterData;
            let tmp7 = closure_43;
            value.filters = rawFilterData1.map(closure_43);
            let iter6 = tmp5();
            iter5 = iter6;
            let tmp8 = iter6;
            let done2 = iter6.done;
          } while (!done2);
        }
        let iter7 = tmp2Result();
        let tmp9 = tmp5;
        iter3 = iter7;
        if (iter7.done) {
          break;
        } else {
          // continue
        }
      }
    }
    continue;
  }
  return obj;
}
function handleOverlayInitialize(serializedExperimentStore) {
  serializedExperimentStore = serializedExperimentStore.serializedExperimentStore;
  let tmp2 = !closure_31;
  if (!closure_31) {
    tmp2 = userCanUseExperiments(tmp);
  }
  if (tmp2) {
    closure_31 = true;
  }
  ({ hasLoadedExperiments: closure_21, trackedExposureExperiments: closure_22, loadedUserExperiments: closure_26, userExperimentOverrides: closure_29, guildExperimentOverrides: closure_30 } = serializedExperimentStore);
  const obj = {};
  const merged = Object.assign(closure_25);
  obj["source"] = serializedExperimentStore.assignmentSource;
  obj["sessionId"] = serializedExperimentStore.assignmentSessionId;
  obj["fingerprint"] = serializedExperimentStore.assignmentFingerprint;
  closure_25 = obj;
  let closure_27 = processGuildExperimentPopulationFromCache(serializedExperimentStore.loadedGuildExperiments);
  let closure_28 = {};
}
function handleFetchFailure() {
  let closure_21 = true;
}
function handleLogout(isSwitchingAccount) {
  const Storage = arg1(dependencyMap[15]).Storage;
  Storage.remove(closure_16);
  if (!isSwitchingAccount.isSwitchingAccount) {
    const Storage2 = arg1(dependencyMap[15]).Storage;
    Storage2.remove(closure_17);
    const Storage3 = arg1(dependencyMap[15]).Storage;
    Storage3.remove(closure_18);
    const Storage4 = arg1(dependencyMap[15]).Storage;
    Storage4.remove(closure_19);
    let closure_29 = {};
    let closure_30 = {};
  }
  let closure_26 = {};
  const obj = {};
  const merged = Object.assign(closure_25);
  obj["rawUserExperiments"] = [];
  closure_25 = obj;
  let closure_22 = {};
  let closure_21 = false;
}
function handleLogin() {
  let closure_21 = false;
  let closure_22 = {};
  let closure_27 = {};
  const Storage = arg1(dependencyMap[15]).Storage;
  Storage.remove(closure_16);
}
function loadLocalOverrides() {
  const Storage = arg1(dependencyMap[15]).Storage;
  let obj = Storage.get(closure_17);
  if (null == obj) {
    obj = {};
  }
  const items = [obj, , ];
  const Storage2 = arg1(dependencyMap[15]).Storage;
  let value = Storage2.get(closure_18);
  if (null == value) {
    value = {};
  }
  items[1] = value;
  const Storage3 = arg1(dependencyMap[15]).Storage;
  let value1 = Storage3.get(closure_19);
  if (null == value1) {
    value1 = {};
  }
  items[2] = value1;
  let closure_29 = {};
  let closure_30 = {};
  let num = 0;
  let tmp2 = !importDefault(dependencyMap[16]).isEmpty(items[0]);
  let tmp5 = tmp2;
  if (0 < items.length) {
    do {
      let tmp6 = items[num];
      let tmp7 = tmp6;
      let flag = tmp2;
      let tmp8 = tmp3;
      let tmp9 = tmp4;
      let tmp10 = tmp2;
      let keys = Object.keys();
      if (keys !== undefined) {
        let tmp12 = flag;
        let tmp3 = tmp8;
        let tmp4 = tmp9;
        tmp10 = flag;
        let tmp13 = keys[tmp];
        while (tmp13 !== undefined) {
          let tmp23 = tmp13;
          let tmp24 = tmp6[tmp13];
          if (null != tmp24) {
            if (null != tmp24.bucket) {
              if (true === tmp24.override) {
                if (!tmp24.fromCookie) {
                  let type = tmp24.type;
                  let tmp14 = closure_11;
                  if (closure_11.USER === type) {
                    let tmp17 = closure_29;
                    closure_29[tmp13] = tmp24;
                    tmp8 = tmp13;
                    tmp9 = tmp24;
                    // continue
                  } else {
                    let tmp15 = closure_11;
                    if (closure_11.GUILD === type) {
                      let tmp16 = closure_30;
                      closure_30[tmp13] = tmp24;
                      tmp8 = tmp13;
                      tmp9 = tmp24;
                      // continue
                    } else {
                      delete r19[r21];
                      flag = true;
                      tmp8 = tmp13;
                      tmp9 = tmp24;
                      // continue
                    }
                    continue;
                  }
                  continue;
                }
                continue;
              }
            }
          }
          delete r19[r21];
          flag = true;
          tmp8 = tmp13;
          tmp9 = tmp24;
          // continue
        }
      }
      num = num + 1;
      tmp2 = tmp10;
      tmp5 = tmp10;
    } while (num < items.length);
  }
  const obj4 = importDefault(dependencyMap[16]);
  const buildOverrideExperiments = arg1(dependencyMap[11]).getBuildOverrideExperiments();
  let flag2 = false;
  let flag3 = false;
  const keys1 = Object.keys();
  if (keys1 !== undefined) {
    flag3 = flag2;
    while (keys1[num] !== undefined) {
      let tmp25 = tmp20;
      let tmp26 = closure_29;
      obj = {};
      let tmp27 = constants2;
      obj.type = constants2.USER;
      obj.bucket = buildOverrideExperiments[tmp20];
      closure_29[tmp20] = obj;
      let tmp28 = closure_30;
      let obj1 = {};
      let tmp29 = constants2;
      obj1.type = constants2.GUILD;
      obj1.bucket = buildOverrideExperiments[tmp20];
      closure_30[tmp20] = obj1;
      flag2 = true;
      // continue
    }
  }
  if (!flag3) {
    flag3 = tmp5;
  }
  if (flag3) {
    saveExperimentOverrides();
  }
}
function saveExperimentOverrides() {
  const Storage = arg1(dependencyMap[15]).Storage;
  const result = Storage.set(closure_18, closure_29);
  const Storage2 = arg1(dependencyMap[15]).Storage;
  const result1 = Storage2.set(closure_19, closure_30);
}
function saveTrackedExposureExperiments(closure_22) {
  const Storage = arg1(dependencyMap[15]).Storage;
  const result = Storage.set(closure_16, { v: 1, e: closure_22 });
}
function handleExperimentOverrideBucket(skipCleanup) {
  let experimentBucket;
  let experimentId;
  let experimentType;
  ({ experimentId, experimentBucket, experimentType } = skipCleanup);
  if (null == experimentType) {
    let type;
    if (null != closure_24[experimentId]) {
      type = tmp2.type;
    }
    experimentType = type;
  }
  if (null == experimentType) {
    return false;
  } else {
    if (null == experimentBucket) {
      let obj = {};
      const merged = Object.assign(closure_29);
      closure_29 = obj;
      delete r1[r2];
      obj = {};
      const merged1 = Object.assign(closure_30);
      closure_30 = obj;
      delete r1[r2];
    } else if ("user" === experimentType) {
      const obj1 = {};
      const merged2 = Object.assign(closure_29);
      const obj2 = { type: experimentType, bucket: experimentBucket };
      obj1[experimentId] = obj2;
      closure_29 = obj1;
    } else {
      obj = {};
      const merged3 = Object.assign(closure_30);
      const obj3 = { type: experimentType, revision: 1, bucket: experimentBucket, override: true };
      obj[experimentId] = obj3;
      closure_30 = obj;
    }
    if (!skipCleanup.skipCleanup) {
      const items = [closure_29, closure_30];
      for (let num2 = 0; num2 < items.length; num2 = num2 + 1) {
        let tmp19 = items[num2];
        let tmp20 = tmp19;
        let tmp21 = tmp18;
        let keys = Object.keys();
        if (keys !== undefined) {
          let tmp18 = tmp21;
          let tmp23 = keys[true];
          while (tmp23 !== undefined) {
            let tmp27 = tmp23;
            let tmp28 = closure_24;
            tmp21 = tmp23;
            if (null != closure_24[tmp23]) {
              continue;
            } else {
              let tmp24 = closure_29;
              delete r12[r11];
              tmp21 = tmp23;
              // continue
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
    let tmp3 = key10008;
    let tmp4 = closure_8;
    if (tmp.id !== closure_8(key10008.split(":"), 1)[0]) {
      continue;
    } else {
      let tmp2 = closure_28;
      delete r11[r12];
      // continue
    }
    continue;
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const importDefaultResult = importDefault(dependencyMap[7]);
({ ExperimentBuckets: closure_10, ExperimentTypes: closure_11, ExposureTypes: closure_12 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ AnalyticEvents: closure_13, EMPTY_STRING_SNOWFLAKE_ID: closure_14, UserFlags: closure_15 } = arg1(dependencyMap[9]));
let closure_16 = "scientist:triggered";
let closure_17 = "exerimentOverrides";
let closure_18 = "userExperimentOverrides";
let closure_19 = "guildExperimentOverrides";
let importDefaultResult1 = importDefault(dependencyMap[10]);
importDefaultResult1 = new importDefaultResult1("ExperimentStore");
let closure_21 = false;
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
let closure_33 = 604800000;
const timestamp = Date.now();
let tmp9 = (importDefaultResult) => {
  class ExperimentStore {
    constructor() {
      self = this;
      tmp = closure_3(this, ExperimentStore);
      obj = { LOGOUT: closure_53, LOGIN_SUCCESS: closure_54, CONNECTION_OPEN: closure_46, EXPERIMENTS_FETCH_SUCCESS: closure_46, OVERLAY_INITIALIZE: closure_51, EXPERIMENTS_FETCH_FAILURE: closure_52, EXPERIMENT_OVERRIDE_BUCKET: closure_58, GUILD_CREATE: closure_59, GUILD_UPDATE: closure_59 };
      items = [, ];
      items[0] = obj;
      items[1] = ExperimentStore(closure_2[17]).DispatchBand.Early;
      obj2 = closure_6(ExperimentStore);
      tmp2 = closure_5;
      if (closure_34()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj2, items, closure_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.trackExposure = closure_42;
      return tmp2Result;
    }
  }
  const arg1 = ExperimentStore;
  callback2(ExperimentStore, importDefaultResult);
  let obj = {
    key: "initialize",
    value() {
      const self = this;
      const Storage = ExperimentStore(closure_2[15]).Storage;
      const value = Storage.get(closure_16);
      if (null != value) {
        if (1 === value.v) {
          const e = value.e;
          const _Date = Date;
          let flag = false;
          let flag2 = false;
          const timestamp = Date.now();
          const keys = Object.keys();
          if (keys !== undefined) {
            flag2 = flag;
            while (keys[tmp] !== undefined) {
              let tmp16 = tmp7;
              let tmp17 = closure_33;
              if (timestamp - e[tmp7].time <= closure_33) {
                continue;
              } else {
                delete r4[r13];
                flag = true;
                // continue
              }
              continue;
            }
          }
          if (flag2) {
            callback11(e);
          }
        }
        let closure_22 = {};
        callback10();
        self.waitFor(closure_9);
        const cache = self.loadCache();
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "loadCache",
    value() {
      const snapshot = this.readSnapshot(ExperimentStore.LATEST_SNAPSHOT_VERSION);
      if (null != snapshot) {
        if ("loadedUserExperiments" in snapshot) {
          const loadedUserExperiments = snapshot.loadedUserExperiments;
          let closure_27 = callback9(snapshot.loadedGuildExperiments);
          const _Object = Object;
          let values = Object.values(loadedUserExperiments);
          const item = values.forEach((arg0) => {
            arg0.loadedFromCache = true;
            return true;
          });
          const _Object2 = Object;
          values = Object.values(closure_27);
          const item1 = values.forEach((arg0) => {
            arg0.loadedFromCache = true;
            return true;
          });
        } else {
          callback7(snapshot, true);
        }
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "takeSnapshot",
    value() {
      let obj = { version: ExperimentStore.LATEST_SNAPSHOT_VERSION };
      obj = {};
      const merged = Object.assign(closure_25);
      obj.data = obj;
      return obj;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "hasLoadedExperiments",
    get() {
      return closure_21;
    }
  };
  items[4] = {
    key: "hasRegisteredExperiment",
    value(arg0) {
      return null != closure_24[arg0];
    }
  };
  items[5] = {
    key: "getUserExperimentDescriptor",
    value(arg0) {
      if (closure_31) {
        if (null != closure_29[arg0]) {
          return tmp2;
        }
      }
      return closure_26["" + closure_37(undefined, arg0)];
    }
  };
  items[6] = {
    key: "getGuildExperimentDescriptor",
    value(arg0, arg1) {
      let tmp = arg1;
      if (null == arg1) {
        tmp = closure_14;
      }
      if (closure_31) {
        if (null != tmp2) {
          return tmp2;
        }
      }
      const combined = "" + tmp + ":" + arg0;
      if (combined in closure_28) {
        return closure_28[combined];
      } else {
        const tmp5 = callback8(tmp, arg0);
        closure_28[combined] = tmp5;
        return tmp5;
      }
    }
  };
  items[7] = {
    key: "getUserExperimentBucket",
    value(arg0) {
      const userExperimentDescriptor = this.getUserExperimentDescriptor(arg0);
      if (null != userExperimentDescriptor) {
        let NOT_ELIGIBLE = userExperimentDescriptor.bucket;
      } else {
        NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
      }
      return NOT_ELIGIBLE;
    }
  };
  items[8] = {
    key: "getGuildExperimentBucket",
    value(arg0, arg1) {
      const guildExperimentDescriptor = this.getGuildExperimentDescriptor(arg0, arg1);
      if (null != guildExperimentDescriptor) {
        let NOT_ELIGIBLE = guildExperimentDescriptor.bucket;
      } else {
        NOT_ELIGIBLE = constants.NOT_ELIGIBLE;
      }
      return NOT_ELIGIBLE;
    }
  };
  items[9] = {
    key: "getAllUserExperimentDescriptors",
    value() {
      return closure_26;
    }
  };
  items[10] = {
    key: "getGuildExperiments",
    value() {
      return closure_27;
    }
  };
  items[11] = {
    key: "getLoadedUserExperiment",
    value(arg0) {
      return closure_26[closure_37(undefined, arg0)];
    }
  };
  items[12] = {
    key: "getLoadedGuildExperiment",
    value(arg0) {
      return closure_27[closure_37(undefined, arg0)];
    }
  };
  items[13] = {
    key: "getRecentExposures",
    value(arg0, arg1) {
      let closure_0 = "" + arg0 + "|" + arg1 + "|";
      const entries = Object.entries(closure_22);
      const found = entries.filter((arg0) => {
        let obj;
        [obj] = arg0;
        return obj.startsWith(closure_0);
      });
      return found.map((arg0) => {
        let str;
        [str, ] = arg0;
        const items = [str.replace(closure_0, ""), tmp];
        return items;
      });
    }
  };
  items[14] = {
    key: "getRegisteredExperiments",
    value() {
      return closure_24;
    }
  };
  items[15] = {
    key: "getAllExperimentOverrideDescriptors",
    value() {
      const obj = {};
      if (closure_31) {
        const merged = Object.assign(closure_29);
        const merged1 = Object.assign(closure_30);
        let tmp = obj;
      } else {
        tmp = obj;
      }
      return tmp;
    }
  };
  items[16] = {
    key: "getExperimentOverrideDescriptor",
    value(arg0) {
      let tmp = null;
      if (closure_31) {
        let tmp3 = closure_29[arg0];
        if (null == tmp3) {
          tmp3 = closure_30[arg0];
        }
        tmp = tmp3;
      }
      return tmp;
    }
  };
  items[17] = {
    key: "getAllExperimentAssignments",
    value() {
      let obj = {};
      obj = {};
      const ExperimentStore = obj;
      const keys = Object.keys(closure_24);
      const item = keys.forEach((arg0) => {
        obj[callback("" + arg0)] = arg0;
      });
      for (const key10013 in closure_26) {
        let tmp3 = key10013;
        let tmp4 = obj[key10013];
        if (null == tmp4) {
          continue;
        } else {
          let tmp2 = closure_26;
          obj[tmp4] = closure_26[key10013].bucket;
          // continue
        }
        continue;
      }
      for (const key10019 in closure_28) {
        let tmp5 = key10019;
        let tmp6 = closure_28;
        let tmp7 = closure_28[key10019];
        if (null == tmp7) {
          continue;
        } else {
          obj[key10019] = tmp7.bucket;
          // continue
        }
        continue;
      }
      return obj;
    }
  };
  items[18] = {
    key: "getSerializedState",
    value() {
      let obj = {};
      for (const key10005 in closure_27) {
        let tmp = key10005;
        let _JSON = JSON;
        let _JSON2 = JSON;
        let tmp2 = closure_27;
        obj[key10005] = JSON.parse(JSON.stringify(closure_27[key10005]));
        let tmp3 = closure_35;
        let tmp4 = closure_35(obj[key10005].populations);
        let iter2 = tmp4();
        if (iter2.done) {
          continue;
        } else {
          iter2.value.filters = [];
          let iter = tmp4();
          iter2 = iter;
        }
        continue;
      }
      obj = { hasLoadedExperiments: closure_21, trackedExposureExperiments: closure_22, loadedUserExperiments: closure_26, loadedGuildExperiments: obj, userExperimentOverrides: closure_29, guildExperimentOverrides: closure_30, cookieOverrides: ExperimentStore(closure_2[11]).getBuildOverrideExperiments(), assignmentSource: closure_25.source, assignmentSessionId: closure_25.sessionId, assignmentFingerprint: closure_25.fingerprint };
      return obj;
    }
  };
  items[19] = {
    key: "hasExperimentTrackedExposure",
    value(arg0, arg1, arg2, arg3) {
      return callback6(callback4(arg0, arg1, arg2, arg3), callback5(arg1));
    }
  };
  return callback(ExperimentStore, items);
}(importDefaultResult);
tmp9.displayName = "ExperimentStore";
tmp9.LATEST_SNAPSHOT_VERSION = 1;
tmp9 = new tmp9();
const tmp4 = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/experiments/ExperimentStore.tsx");

export default tmp9;
export const registerExperiment = function registerExperiment(experimentId) {
  closure_24[experimentId.experimentId] = { type: experimentId.experimentType, title: experimentId.title, description: experimentId.description, buckets: experimentId.buckets, commonTriggerPoint: experimentId.commonTriggerPoint };
};
