// Module ID: 1247
// Function ID: 1248
// Name: BaseApexExperimentStore
// Dependencies: [109, 32, 1083, 4, 1248, 1249, 1251, 504, 510, 2]

// Module 1247 (BaseApexExperimentStore)
import logger_Logger from "logger/Logger" /* 4 */;
import get_initializedDefault from "get initialized" /* 504 */;
import Storage2 from "Storage" /* 510 */;
import Constants from "Constants" /* 1083 */;
import _mod1248 from "module_1248" /* 1248 */;
import ApexTypes from "ApexTypes" /* 1249 */;
import _modDef1251 from "module_1251" /* 1251 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let clientOverrides, closure_12, closure_13, dependencyMap, importDefault;

function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (StringResult) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const callResult = obj[Symbol.toPrimitive].call(obj, "string");
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(obj);
      }
    }
  }
  let text = StringResult;
  if (typeof StringResult !== "symbol") {
    text = `${tmp}`;
  }
  return text;
}
function getHash(arg0) {
  let tmp2 = closure_20[arg0];
  if (null == tmp2) {
    obj = _modDef1251;
    const v3Result = obj.v3(arg0);
    tmp[arg0] = v3Result;
    tmp2 = v3Result;
  }
  return tmp2;
}
const WebAnalyticsEvents = Constants.WebAnalyticsEvents;
const logger = new logger_Logger.Logger("ApexExperimentStore");
let tmp3 = typeof window === "undefined";
if (!tmp3) {
  const _window2 = window;
  let tmp9 = null;
  let tmp4 = null != window.TextEncoder;
  if (tmp4) {
    const _window = window;
    tmp4 = null != window.TextDecoder;
  }
  tmp3 = tmp4;
}
if (!tmp3) {
  const _module = _mod1248;
}
let items = [ApexTypes.UnitType.User, ApexTypes.UnitType.Installation];
let obj = { user: {}, guild: {}, installation: {} };
const authStore = {};
const unpackModuleId = {};
const authStore2 = {};
obj = {};
let set = new Set();
const set1 = new Set();
const apexTrackedExposures = "apexTrackedExposures";
let c18 = 604800000;
let closure_19 = {};
let closure_20 = {};
const PersistedStore = get_initializedDefault.PersistedStore;
class BaseApexExperimentStore extends PersistedStore {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.track = function track() {
      return Promise.resolve();
    };
    applyArgumentsResult.surface = "unset";
    applyArgumentsResult.nextFetchRequestId = 0;
    applyArgumentsResult.fetchOwners = new Map();
    applyArgumentsResult.gatewayGenerations = { user: {}, guild: {}, installation: {} };
    new Map();
    return applyArgumentsResult;
  }
  onAssignmentsIngested() {

  }
  resolveConfigAssignment() {

  }
  onConfigApplied() {

  }
  createFetchRequest() {
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    let sum;
    obj = { id: sum, gatewayGenerations: obj2 };
    sum = this.nextFetchRequestId + 1;
    this.nextFetchRequestId = sum;
    obj2 = { user: obj3, guild: obj4, installation: obj5 };
    obj3 = {};
    const merged = Object.assign(this.gatewayGenerations.user);
    obj4 = {};
    const merged1 = Object.assign(this.gatewayGenerations.guild);
    obj5 = {};
    const merged2 = Object.assign(this.gatewayGenerations.installation);
    return obj;
  }
  setGatewayExperimentAssignments(apexExperiments, arg1, id) {
    const self = this;
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let tmp6 = ApexTypes.UnitTypeToKind[nextResult];
      obj = undefined;
      let _Object = Object;
      if (apexExperiments != null) {
        obj = apexExperiments.assignments[tmp3];
      }
      if (obj == null) {
        obj = {};
      }
      let keys1 = keys(obj);
      for (const item10031 of keys1) {
        let num = self.gatewayGenerations[tmp6][item10031];
        let tmp12 = self.gatewayGenerations[tmp6];
        if (num == null) {
          num = 0;
        }
        tmp12[item10031] = num + 1;
        continue;
      }
      continue;
    }
    return self.setExperimentAssignments(apexExperiments, arg1, id);
  }
  loadStoredState(version, buildOverrideExperiments) {
    let closure_11;
    if (null != version) {
      if (3 === version.version) {
        ({ clientOverrides: closure_11, evaluatedExperiments: obj } = version);
      }
      closure_13 = {};
      for (const key10020 in buildOverrideExperiments) {
        let tmp9 = closure_20[key10020];
        if (null == tmp9) {
          let obj2 = _modDef1251;
          let v3Result = obj2.v3(key10020);
          tmp12[key10020] = v3Result;
          tmp9 = v3Result;
        }
        let obj3 = { hashedName: tmp9, variantId: buildOverrideExperiments[key10020], isOverride: true, isAppLaunch: false, exposureTrackingEnabled: false, useAsEligibility: false };
        closure_13[key10020] = obj3;
        continue;
      }
      const self = this;
      closure_19 = this.loadTrackedExposures();
    }
    const tmp = null != version && 2 === version.version;
    if (tmp) {
      clientOverrides = version.clientOverrides;
      const merged = Object.assign(version.evaluatedExperiments);
    }
  }
  getState() {
    obj = { version: 3, evaluatedExperiments: obj, clientOverrides };
    return obj;
  }
  setExperimentAssignments(apexExperiments, arg1, id, arg3) {
    let assignments;
    let evaluation_id;
    let tmp27;
    let tmp28;
    let tmp29;
    let flag = arg3;
    if (arg3 === undefined) {
      flag = true;
    }
    if (null == apexExperiments) {
      if (null == arg1) {
        return false;
      }
    }
    let tmp = null != id;
    if (tmp) {
      let tmp2;
      if (apexExperiments != null) {
        const tmp5 = apexExperiments.assignments[ApexTypes.UnitType.User];
        if (tmp5 != null) {
          tmp2 = tmp5[id];
        }
      }
      tmp = null != tmp2;
    }
    const self = this;
    if (tmp) {
      const result = self.clearSessionOverrides();
    }
    if (null != apexExperiments) {
      const iter = items[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp12 = ApexTypes.UnitTypeToKind[nextResult];
        let tmp13 = apexExperiments.assignments[nextResult];
        let tmp14 = tmp13;
        if (null != tmp13) {
          if (null != tmp12) {
            let tmp60 = obj[tmp12];
            for (const key10046 in tmp14) {
              let tmp62 = key10046;
              if (flag) {
                let addResult = set1.add(tmp62);
              }
              ({ evaluation_id, assignments } = tmp14[tmp62]);
              obj = { evaluationId: evaluation_id, assignments: {} };
              tmp60[tmp62] = obj;
              for (const item10065 of assignments) {
                let tmp26 = _slicedToArray(item10065, 6);
                [tmp27, tmp28, tmp29] = tmp26;
                let num = tmp29;
                let tmp30 = tmp26[3];
                let tmp31 = tmp26[4];
                let tmp32 = tmp26[5];
                if (tmp29 == null) {
                  num = 0;
                }
                let obj2 = { hashedName: tmp27, variantId: tmp28, trackedVariantId: tmp31, isOverride: num & ApexTypes.ExperimentFlags.IsOverride, isAppLaunch: num & ApexTypes.ExperimentFlags.IsAppLaunch, revision: tmp30, exposureTrackingEnabled: num & ApexTypes.ExperimentFlags.ExposureTrackingEnabled, useAsEligibility: num & ApexTypes.ExperimentFlags.UseAsEligibility, config: tmp32 };
                let assignments2 = tmp20.assignments;
                assignments2[tmp27] = obj2;
                continue;
              }
            }
          }
        }
        continue;
      }
    }
    if (null != apexExperiments) {
      const iter2 = items[Symbol.iterator]();
      const nextResult1 = iter2.next();
      while (iter2 !== undefined) {
        let tmp47 = ApexTypes.UnitTypeToKind[nextResult1];
        let obj3 = apexExperiments.assignments[nextResult1];
        let _Object = Object;
        if (obj3 == null) {
          obj3 = {};
        }
        let keys1 = keys(obj3);
        for (const item10134 of keys1) {
          let result1 = self.onAssignmentsIngested(tmp47, item10134, obj[tmp47][item10134]);
          continue;
        }
        continue;
      }
    }
    if (null != arg1) {
      const result2 = self.setGuildExperimentAssignments(arg1);
    }
    return true;
  }
  setGuildExperimentAssignments(arg0) {
    let assignments;
    let evaluation_id;
    let tmp14;
    let tmp15;
    let tmp16;
    let tmp6;
    let tmp7;
    const self = this;
    obj = arg0;
    const guild = obj.guild;
    const _Object = Object;
    if (arg0 == null) {
      obj = {};
    }
    const entries1 = entries(obj);
    const tmp2 = entries1[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = _slicedToArray(tmp3, 2);
      [tmp6, tmp7] = tmp5;
      ({ evaluation_id, assignments } = tmp7);
      let obj2 = { evaluationId: evaluation_id, assignments: {} };
      let tmp8 = obj2;
      guild[tmp6] = obj2;
      for (const item10040 of assignments) {
        let tmp13 = _slicedToArray(item10040, 5);
        [tmp14, tmp15, tmp16] = tmp13;
        let num = tmp16;
        let tmp17 = tmp13[3];
        let tmp18 = tmp13[4];
        if (tmp16 == null) {
          num = 0;
        }
        let obj3 = { hashedName: tmp14, variantId: tmp15, trackedVariantId: tmp18, isOverride: num & ApexTypes.ExperimentFlags.IsOverride, isAppLaunch: num & ApexTypes.ExperimentFlags.IsAppLaunch, revision: tmp17, exposureTrackingEnabled: num & ApexTypes.ExperimentFlags.ExposureTrackingEnabled, useAsEligibility: num & ApexTypes.ExperimentFlags.UseAsEligibility };
        tmp8.assignments[tmp14] = obj3;
        continue;
      }
      let result = self.onAssignmentsIngested("guild", tmp6, tmp8);
      continue;
    }
  }
  createOverride(experimentName, variantId) {
    obj = {};
    const merged = Object.assign(closure_11);
    let tmp3 = closure_20[experimentName];
    if (null == tmp3) {
      const obj2 = _modDef1251;
      const v3Result = obj2.v3(experimentName);
      tmp2[experimentName] = v3Result;
      tmp3 = v3Result;
    }
    obj[experimentName] = { hashedName: tmp3, variantId, isOverride: true, isAppLaunch: false, exposureTrackingEnabled: false };
    closure_11 = obj;
    const result = this.trackExposureSuppression(experimentName, "client_override");
  }
  deleteOverride(experimentName) {
    items = [experimentName];
    closure_11 = _objectWithoutProperties(closure_11, items.map(_toPropertyKey));
  }
  createSessionOverride(experimentName, variantId) {
    obj = {};
    const merged = Object.assign(closure_12);
    let tmp3 = closure_20[experimentName];
    if (null == tmp3) {
      const obj2 = _modDef1251;
      const v3Result = obj2.v3(experimentName);
      tmp2[experimentName] = v3Result;
      tmp3 = v3Result;
    }
    obj[experimentName] = { hashedName: tmp3, variantId, isOverride: true, isAppLaunch: false, exposureTrackingEnabled: false };
    closure_12 = obj;
  }
  deleteSessionOverride(experimentName) {
    items = [experimentName];
    closure_12 = _objectWithoutProperties(closure_12, items.map(_toPropertyKey));
  }
  setExperimentsMetadata(experiments) {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(Object.fromEntries(experiments.map((name) => {
      items = [name.name, name];
      return items;
    })));
  }
  getExperimentsMetadata() {
    return obj;
  }
  getClientOverrides() {
    return clientOverrides;
  }
  getSessionOverrides() {
    return closure_12;
  }
  getExperimentClientOverride(arg0) {
    return clientOverrides[arg0];
  }
  getExperimentSessionOverride(arg0) {
    return closure_12[arg0];
  }
  handleLogout(arg0) {
    const self = this;
    items = [ApexTypes.INSTALLATION_UNIT_ID, ...Object.keys(obj.installation)];
    set = new Set(items);
    const items1 = [set, set1];
    for (const item10031 of items1) {
      let obj2 = item10031;
      for (const item10037 of item10031) {
        let tmp3 = item10037;
        if (!set.has(item10037)) {
          let deleteResult = obj2.delete(tmp3);
          let fetchOwners = self.fetchOwners;
          let deleteResult1 = fetchOwners.delete(tmp3);
        }
        continue;
      }
      continue;
    }
    const tmp8 = arg0;
    if (!tmp8) {
      const result = self.clearUserServerAssignments();
      const result1 = self.clearSessionOverrides();
    }
    const Storage = Storage2.Storage;
    Storage.remove(apexTrackedExposures);
    const result2 = self.clearAllTrackedExposures();
  }
  registerExperiment(name) {
    closure_10[name.name] = name;
    if (null != closure_13[name.name]) {
      const self = this;
      const result = this.trackExposureSuppression(name.name, "cookie_override");
    }
  }
  getRegisteredExperiments() {
    return closure_10;
  }
  getAssignment(installation, id, name) {
    const self = this;
    let override = this.getOverride(name);
    if (null == override) {
      override = self.getServerAssignment(installation, id, name);
    }
    return override;
  }
  getServerAssignment(kind, id, name) {
    let tmp2 = closure_20[name];
    if (null == tmp2) {
      obj = _modDef1251;
      const v3Result = obj.v3(name);
      tmp[name] = v3Result;
      tmp2 = v3Result;
    }
    return null != obj[kind][id] ? obj[kind][id].assignments[tmp2] : undefined;
  }
  getEvaluation(user, arg1) {
    let evaluationId;
    if (obj[user][arg1] != null) {
      evaluationId = tmp.evaluationId;
    }
    return evaluationId;
  }
  getEvaluationAndAssignmentInner(user, LOGGED_OUT_USER_ID_SENTINEL, arg2) {
    const override = this.getOverride(arg2);
    if (null != override) {
      items = [undefined, override];
      return items;
    } else {
      let items2;
      if (null == obj[user][LOGGED_OUT_USER_ID_SENTINEL]) {
        const items1 = [undefined, undefined];
        items2 = items1;
      } else {
        items2 = [obj[user][LOGGED_OUT_USER_ID_SENTINEL].evaluationId, ];
        let tmp3 = closure_20[arg2];
        const assignments = tmp10.assignments;
        if (null == tmp3) {
          obj = _modDef1251;
          const v3Result = obj.v3(arg2);
          tmp2[arg2] = v3Result;
          tmp3 = v3Result;
        }
        items2[1] = assignments[tmp3];
      }
      return items2;
    }
  }
  getEvaluationAndAssignment(user, id, arg2, tmpResult) {
    let tmp3;
    let tmp4;
    let tmp8;
    const self = this;
    [tmp3, tmp4] = this.getEvaluationAndAssignmentInner(user, id, arg2);
    _slicedToArray(this.getEvaluationAndAssignmentInner(user, id, arg2), 2);
    if ("guild" !== user) {
      items = [tmp3, tmp4];
      return items;
    } else {
      let items6;
      let LOGGED_OUT_USER_ID_SENTINEL = tmpResult;
      const getEvaluationAndAssignmentInner = self.getEvaluationAndAssignmentInner;
      if (tmpResult == null) {
        LOGGED_OUT_USER_ID_SENTINEL = ApexTypes.LOGGED_OUT_USER_ID_SENTINEL;
      }
      [r10021, tmp8] = _slicedToArray(getEvaluationAndAssignmentInner("user", LOGGED_OUT_USER_ID_SENTINEL, arg2), 2);
      _slicedToArray(getEvaluationAndAssignmentInner("user", LOGGED_OUT_USER_ID_SENTINEL, arg2), 2);
      if (null == tmp8) {
        const items1 = [undefined, undefined];
        items6 = items1;
      } else if (tmp8.isOverride) {
        const items2 = [tmp3, tmp8];
        items6 = items2;
      } else if (tmp8.useAsEligibility) {
        let items5;
        if (null == tmp4) {
          const items3 = [undefined, undefined];
          items5 = items3;
        } else if (null != tmp4.variantId) {
          const items4 = [tmp3, tmp4];
          items5 = items4;
        } else {
          items5 = [undefined, undefined];
        }
        items6 = items5;
      } else {
        items6 = [undefined, undefined];
      }
      return items6;
    }
  }
  getConfigEvaluationAndAssignment(user, id, arg2, tmpResult) {
    let evaluationAndAssignment;
    const self = this;
    const configAssignment = this.resolveConfigAssignment(user, id, arg2);
    if (null != configAssignment) {
      items = [, ];
      ({ evaluationId: arr[0], assignment: arr[1] } = configAssignment);
      evaluationAndAssignment = items;
    } else {
      evaluationAndAssignment = self.getEvaluationAndAssignment(user, id, arg2, tmpResult);
    }
    return evaluationAndAssignment;
  }
  getOverrides() {
    obj = {};
    const merged = Object.assign(closure_13);
    const merged1 = Object.assign(clientOverrides);
    const merged2 = Object.assign(closure_12);
    return obj;
  }
  trackExperimentExposure(evaluationId, experimentName, location, unit_type, revision, trackedVariantId, arg6) {
    let evaluation_id;
    let experiment;
    const self = this;
    importDefault = evaluationId;
    dependencyMap = experimentName;
    const exposure_location = location;
    const tracked_variation_id = trackedVariantId;
    let closure_0 = arg6;
    const combined = "" + experimentName + "|" + revision + "|" + trackedVariantId + "|" + location + "|" + arg6 + "|1";
    let tmp3 = closure_20[combined];
    if (null == tmp3) {
      obj = _modDef1251;
      const v3Result = obj.v3(combined);
      tmp2[combined] = v3Result;
      tmp3 = v3Result;
    }
    if ("user" === unit_type) {
      self.withExposureTracking(tmp3, () => {
        obj = { evaluation_id, experiment, exposure_location, unit_type, tracked_variation_id };
        return self.track(WebAnalyticsEvents.EXPERIMENT_USER_EVALUATION_EXPOSED, obj, { flush: true });
      });
    } else if ("installation" === unit_type) {
      self.withExposureTracking(tmp3, () => {
        obj = { evaluation_id, installation_id, experiment, exposure_location, unit_type, tracked_variation_id };
        return self.track(WebAnalyticsEvents.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, obj, { flush: true });
      });
    } else if ("guild" === unit_type) {
      self.withExposureTracking(tmp3, () => {
        obj = { evaluation_id, guild_id, experiment, exposure_location, unit_type, tracked_variation_id, revision };
        return self.track(WebAnalyticsEvents.EXPERIMENT_GUILD_EVALUATION_EXPOSED, obj, { flush: true });
      });
    }
  }
  trackCommonTriggerPointExposures(exposure_location, arg1) {
    const self = this;
    const evaluation = this.getEvaluation("user", arg1);
    if (null != evaluation) {
      const tmp2 = getHash;
      let tmp3 = globalThis;
      const _HermesInternal = HermesInternal;
      self.withExposureTracking(getHash("" + evaluation + "|" + exposure_location), () => {
        obj = { evaluation_id: evaluation, exposure_location, unit_type: "user" };
        return self.track(WebAnalyticsEvents.EXPERIMENT_USER_EVALUATION_EXPOSED, obj, { flush: true });
      });
    }
    function _loop(evaluationId, unitId) {
      const evaluation_id = evaluationId;
      exposure_location = unitId;
      const combined = "" + evaluationId + "|" + exposure_location;
      let tmp3 = closure_1_20[combined];
      if (null == tmp3) {
        obj = exposure_location(self[6]);
        const v3Result = obj.v3(combined);
        tmp2[combined] = v3Result;
        tmp3 = v3Result;
      }
      self.withExposureTracking(tmp3, () => {
        obj = { evaluation_id, exposure_location: unitId, unit_type: "installation", installation_id: unitId };
        return self.track(WebAnalyticsEvents.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, obj, { flush: true });
      });
    }
    const result = self.evaluationsWithUnitIds("installation");
    const iter = result[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let _loopResult = _loop(nextResult.evaluationId, nextResult.unitId);
      continue;
    }
  }
  withExposureTracking(v3Result, fn) {
    const self = this;
    if (this.shouldTrackExposure(v3Result)) {
      fn();
      const _Date = Date;
      closure_19[v3Result] = Date.now();
      self.saveTrackedExposures(closure_19);
    }
  }
  trackExposureSuppression(experiment, suppression_source) {
    if (null != closure_10[experiment]) {
      const self = this;
      if ("user" === closure_10[experiment].kind) {
        const obj2 = { experiment, unit_type: closure_10[experiment].kind, suppression_source };
        self.track(WebAnalyticsEvents.EXPERIMENT_USER_EXPOSURE_SUPPRESSED, obj2, { flush: true });
      } else if ("installation" === closure_10[experiment].kind) {
        const _Object = Object;
        const first = Object.keys(obj.installation)[0];
        if (null != first) {
          obj = { experiment, unit_type: closure_10[experiment].kind, suppression_source, installation_id: first };
          self.track(WebAnalyticsEvents.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED, obj, { flush: true });
        }
      } else if ("guild" === closure_10[experiment].kind) {
        const _Object2 = Object;
        const first1 = Object.keys(obj.guild)[0];
        if (null != first1) {
          const obj3 = { experiment, unit_type: closure_10[experiment].kind, suppression_source, guild_id: first1 };
          self.track(WebAnalyticsEvents.EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED, obj3, { flush: true });
        }
      }
    }
  }
  evaluationIds(arg0) {
    const values = Object.values(obj[arg0]);
    const mapped = values.map((evaluationId) => evaluationId.evaluationId);
    return mapped.filter((item) => null != item);
  }
  evaluationsWithUnitIds(installation) {
    const entries = Object.entries(obj[installation]);
    const found = entries.filter((item) => {
      let tmp;
      [, tmp] = item;
      return null != tmp.evaluationId;
    });
    return found.map((item) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = item;
      return { evaluationId: tmp2.evaluationId, unitId: tmp };
    });
  }
  shouldTrackExposure(v3Result) {
    let tmp2 = null == tmp;
    if (!tmp2) {
      const _Date = Date;
      tmp2 = Date.now() - tmp > c18;
    }
    return tmp2;
  }
  loadTrackedExposures() {
    const Storage = Storage2.Storage;
    const value = Storage.get(apexTrackedExposures);
    if (null != value) {
      if (2 === value.version) {
        const exposures = value.exposures;
        const _Date = Date;
        let flag = false;
        let flag2 = false;
        const timestamp = Date.now();
        const keys = Object.keys();
        if (keys !== undefined) {
          flag2 = flag;
          while (keys[tmp] !== undefined) {
            if (timestamp - exposures[tmp8] <= c18) {
              continue;
            } else {
              delete exposures[tmp10];
              flag = true;
              continue;
            }
            continue;
          }
        }
        if (flag2) {
          const self = this;
          this.saveTrackedExposures(exposures);
        }
        return exposures;
      }
    }
    return {};
  }
  saveTrackedExposures(exposures) {
    try {
      const Storage = Storage2.Storage;
      obj = { version: 2, exposures };
      const result = Storage.set(apexTrackedExposures, obj);
    } catch (tmp6) {
      const self = this;
      logger.error("Error saving tracked exposures", tmp6);
      const obj2 = { module: this.surface, call: "ApexExperimentStore.saveTrackedExposures" };
      this.track(WebAnalyticsEvents.EXPERIMENT_SAVE_EXPOSURE_FAILED, obj2, { flush: true });
    }
  }
  clearForTests() {
    const result = this.clearAllServerAssignments();
    this.clearAllOverrides();
    const result1 = this.clearAllTrackedExposures();
    set.clear();
    set1.clear();
    const fetchOwners = this.fetchOwners;
    fetchOwners.clear();
    this.gatewayGenerations = { user: {}, guild: {}, installation: {} };
  }
  clearAllServerAssignments() {

  }
  clearUserServerAssignments() {
    obj = { user: {}, guild: {}, installation: obj.installation };
  }
  clearAllOverrides() {
    let closure_11 = {};
    closure_12 = {};
    closure_13 = {};
  }
  clearSessionOverrides() {
    closure_12 = {};
  }
  clearAllTrackedExposures() {
    closure_19 = {};
  }
  getHash(arg0) {
    let tmp2 = closure_20[arg0];
    if (null == tmp2) {
      obj = _modDef1251;
      const v3Result = obj.v3(arg0);
      tmp[arg0] = v3Result;
      tmp2 = v3Result;
    }
    return tmp2;
  }
  handleFetchStart(arg0, id) {
    const self = this;
    set.add(arg0);
    if (null != id) {
      const fetchOwners2 = self.fetchOwners;
      const result = fetchOwners2.set(arg0, id.id);
    } else {
      const fetchOwners = self.fetchOwners;
      fetchOwners.delete(arg0);
    }
  }
  handleFetchSuccess(arg0, apexExperiments, id) {
    let closure_1 = id;
    const self = this;
    if (null != id) {
      const fetchOwners = self.fetchOwners;
      if (fetchOwners.get(arg0) !== id.id) {
        return false;
      }
    }
    self.handleFetchFailure(arg0, id);
    if (null != id) {
      if (null != apexExperiments) {
        const assignments = {};
        function _loop2() {
          let closure_0;
          let gatewayGenerations;
          apexExperiments = apexExperiments(self[5]).UnitTypeToKind[closure_4];
          let tmp2 = apexExperiments.assignments[closure_4];
          if (null == tmp2) {
            let num = 1;
            return 1;
          } else {
            const _Object = Object;
            const _Object2 = Object;
            const entries = Object.entries(tmp2);
            obj[tmp] = fromEntries(entries.filter((item) => {
              let tmp;
              [tmp] = item;
              let num = gatewayGenerations.gatewayGenerations[closure_0][tmp];
              const tmp2 = closure_0;
              if (num == null) {
                num = 0;
              }
              let num2 = self.gatewayGenerations[tmp2][tmp];
              if (num2 == null) {
                num2 = 0;
              }
              return num === num2;
            }));
          }
        }
        const iter = items[Symbol.iterator]();
        let num = 0;
        while (iter !== undefined) {
          let closure_4 = iter.next();
          let _loop2Result = _loop2();
          continue;
        }
        const setExperimentAssignments = self.setExperimentAssignments;
        const obj2 = { assignments };
        const merged = Object.assign(apexExperiments);
        const result = setExperimentAssignments(obj2, undefined, undefined, false);
      }
    }
    const result1 = self.setExperimentAssignments(apexExperiments);
  }
  handleFetchFailure(arg0, id) {
    const self = this;
    if (null != id) {
      const fetchOwners = self.fetchOwners;
      if (fetchOwners.get(arg0) !== id.id) {
        return false;
      }
    }
    const fetchOwners2 = self.fetchOwners;
    fetchOwners2.delete(arg0);
    set.delete(arg0);
    set1.add(arg0);
  }
  isFetching(arg0) {
    return set.has(arg0);
  }
  hasLoaded(arg0) {
    return set1.has(arg0);
  }
  getOverride(arg0) {
    let tmp = closure_12[arg0];
    if (tmp == null) {
      tmp = clientOverrides[arg0];
    }
    if (tmp == null) {
      tmp = closure_13[arg0];
    }
    return tmp;
  }
}
const prototype = BaseApexExperimentStore.prototype;
BaseApexExperimentStore.displayName = "ApexExperimentStore";
BaseApexExperimentStore.persistKey = "ApexExperimentStore";
let result = size.fileFinishedImporting("../discord_common/js/packages/apex/BaseApexExperimentStore.tsx");

export default BaseApexExperimentStore;
