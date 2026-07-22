// Module ID: 1189
// Function ID: 13572
// Name: _toPropertyKey
// Dependencies: []

// Module 1189 (_toPropertyKey)
function _toPropertyKey(arg0) {
  let StringResult = arg0;
  if ("object" === typeof arg0) {
    StringResult = arg0;
    if (arg0) {
      const _Symbol = Symbol;
      if (undefined !== arg0[Symbol.toPrimitive]) {
        const callResult = obj.call(arg0, "string");
        StringResult = callResult;
        if ("object" === typeof callResult) {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(arg0);
      }
    }
  }
  let text = StringResult;
  if ("symbol" !== typeof StringResult) {
    text = `${tmp}`;
  }
  return text;
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
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _getHash(arg0) {
  let tmp = closure_24[arg0];
  if (null == tmp) {
    const v3Result = importDefault(dependencyMap[11]).v3(arg0);
    closure_24[arg0] = v3Result;
    tmp = v3Result;
    const obj = importDefault(dependencyMap[11]);
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
const WebAnalyticsEvents = arg1(dependencyMap[7]).WebAnalyticsEvents;
const logger = new arg1(dependencyMap[8]).Logger("ApexExperimentStore");
let tmp3 = "undefined" === typeof window;
if (!tmp3) {
  const _window = window;
  let tmp5 = null != window.TextEncoder;
  if (tmp5) {
    const _window2 = window;
    tmp5 = null != window.TextDecoder;
  }
  tmp3 = tmp5;
}
if (!tmp3) {
  arg1(dependencyMap[9]);
}
const items = [arg1(dependencyMap[10]).UnitType.User, arg1(dependencyMap[10]).UnitType.Installation];
let closure_13 = { user: {}, guild: {}, installation: {} };
let closure_14 = {};
let closure_15 = {};
let closure_16 = {};
let closure_17 = {};
let closure_18 = {};
const set = new Set();
const set1 = new Set();
let closure_21 = "apexTrackedExposures";
let closure_22 = 604800000;
let closure_23 = {};
let closure_24 = {};
const tmp9 = (PersistedStore) => {
  class BaseApexExperimentStore {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_5(this, BaseApexExperimentStore);
      items1 = [...items];
      obj = closure_8(BaseApexExperimentStore);
      tmp2 = closure_7;
      if (closure_28()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, items1, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.track = () => Promise.resolve();
      tmp2Result.surface = "unset";
      return tmp2Result;
    }
  }
  const arg1 = BaseApexExperimentStore;
  callback2(BaseApexExperimentStore, PersistedStore);
  let obj = {
    key: "loadStoredState",
    value(version, obj) {
      const self = this;
      if (null != version) {
        if (3 === version.version) {
          ({ clientOverrides: closure_15, evaluatedExperiments: closure_13 } = version);
        }
        let closure_17 = {};
        for (const key10022 in arg1) {
          let tmp5 = key10022;
          let tmp6 = closure_29;
          let tmp7 = closure_17;
          obj = { "Bool(true)": null, "Bool(true)": "de0c5291417ca85ca49b63cd365d8403", "Bool(true)": "en-GB.messages.de0c5291417ca85ca49b63cd365d8403.compiled.messages", "Bool(true)": "jsona", "Bool(true)": "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC", hashedName: closure_29(key10022), variantId: arg1[key10022] };
          closure_17[key10022] = obj;
        }
        let closure_23 = self.loadTrackedExposures();
      }
      let tmp = null != version;
      if (tmp) {
        tmp = 2 === version.version;
      }
      if (tmp) {
        const clientOverrides = version.clientOverrides;
        obj = {};
        const merged = Object.assign(version.evaluatedExperiments);
        obj["installation"] = {};
      }
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "getState",
    value() {
      return { version: 3, evaluatedExperiments: closure_13, clientOverrides: closure_15 };
    }
  };
  items[1] = obj;
  obj = {
    key: "setExperimentAssignments",
    value(arg0, arg1) {
      let assignments;
      let evaluation_id;
      let num;
      let tmp32;
      let tmp33;
      let tmp34;
      let tmp35;
      const self = this;
      if (null == arg0) {
        if (null == arg1) {
          return false;
        }
      }
      const result = self.clearSessionOverrides();
      if (null != arg0) {
        let num2 = 0;
        if (0 < length.length) {
          do {
            let tmp3 = arr[num2];
            let tmp4 = closure_0;
            let tmp5 = closure_2;
            let tmp6 = closure_0(closure_2[10]).UnitTypeToKind[tmp3];
            let tmp7 = arg0.assignments[tmp3];
            let tmp8 = tmp38;
            let tmp9 = tmp39;
            let tmp10 = tmp40;
            let tmp11 = tmp41;
            let tmp12 = tmp42;
            let tmp13 = tmp43;
            let tmp14 = tmp44;
            let tmp15 = tmp45;
            let tmp16 = tmp46;
            let tmp17 = tmp47;
            let tmp18 = tmp48;
            let tmp19 = tmp49;
            if (null != tmp7) {
              tmp8 = tmp38;
              tmp9 = tmp39;
              tmp10 = tmp40;
              tmp11 = tmp41;
              tmp12 = tmp42;
              tmp13 = tmp43;
              tmp14 = tmp44;
              tmp15 = tmp45;
              tmp16 = tmp46;
              tmp17 = tmp47;
              tmp18 = tmp48;
              tmp19 = tmp49;
              if (null != tmp6) {
                let tmp51 = closure_13;
                let tmp52 = closure_13[tmp6];
                let tmp53 = tmp7;
                let tmp24 = tmp39;
                let tmp25 = tmp40;
                let tmp26 = tmp41;
                let tmp27 = tmp42;
                let tmp28 = tmp43;
                let tmp29 = tmp44;
                tmp32 = tmp45;
                tmp33 = tmp46;
                num = tmp47;
                tmp34 = tmp48;
                tmp35 = tmp49;
                tmp8 = tmp52;
                tmp9 = tmp39;
                tmp10 = tmp40;
                tmp11 = tmp41;
                tmp12 = tmp42;
                tmp13 = tmp43;
                tmp14 = tmp44;
                tmp15 = tmp45;
                tmp16 = tmp46;
                tmp17 = tmp47;
                tmp18 = tmp48;
                tmp19 = tmp49;
                let keys = Object.keys();
                if (keys !== undefined) {
                  tmp9 = tmp24;
                  tmp10 = tmp25;
                  tmp11 = tmp26;
                  tmp12 = tmp27;
                  tmp13 = tmp28;
                  tmp14 = tmp29;
                  tmp8 = tmp52;
                  tmp15 = tmp32;
                  tmp16 = tmp33;
                  tmp17 = num;
                  tmp18 = tmp34;
                  tmp19 = tmp35;
                  let tmp20 = keys[tmp];
                  while (tmp20 !== undefined) {
                    let tmp55 = tmp20;
                    let tmp56 = closure_20;
                    let addResult = closure_20.add(tmp20);
                    ({ evaluation_id, assignments } = tmp7[tmp20]);
                    let obj = {};
                    let tmp21;
                    if (null != evaluation_id) {
                      tmp21 = evaluation_id;
                    }
                    obj.evaluationId = tmp21;
                    obj.assignments = {};
                    tmp52[tmp20] = obj;
                    let tmp22 = closure_26;
                    let tmp23 = closure_26(assignments);
                    let iter = tmp23();
                    tmp24 = tmp20;
                    tmp25 = evaluation_id;
                    tmp26 = assignments;
                    tmp27 = obj;
                    tmp28 = iter;
                    tmp29 = tmp23;
                    let iter2 = iter;
                    if (iter.done) {
                      continue;
                    } else {
                      while (true) {
                        let tmp30 = closure_4;
                        let tmp31 = closure_4(iter2.value, 5);
                        [tmp32, tmp33, num, tmp34, tmp35] = tmp31;
                        if (num == null) {
                          num = 0;
                        }
                        obj = { hashedName: tmp32, variantId: tmp33, trackedVariantId: tmp35 };
                        let tmp36 = closure_0;
                        let tmp37 = closure_2;
                        obj.isOverride = num & closure_0(closure_2[10]).ExperimentFlags.IsOverride;
                        obj.revision = tmp34;
                        obj.exposureTrackingEnabled = num & closure_0(closure_2[10]).ExperimentFlags.ExposureTrackingEnabled;
                        obj.useAsEligibility = num & closure_0(closure_2[10]).ExperimentFlags.UseAsEligibility;
                        obj.assignments[tmp32] = obj;
                        let iter3 = tmp23();
                        tmp24 = tmp20;
                        tmp25 = evaluation_id;
                        tmp26 = assignments;
                        tmp27 = obj;
                        tmp28 = iter3;
                        tmp29 = tmp23;
                        iter2 = iter3;
                        if (iter3.done) {
                          break;
                        } else {
                          // continue
                        }
                      }
                    }
                    continue;
                  }
                }
              }
            }
            num2 = num2 + 1;
            let tmp38 = tmp8;
            let tmp39 = tmp9;
            let tmp40 = tmp10;
            let tmp41 = tmp11;
            let tmp42 = tmp12;
            let tmp43 = tmp13;
            let tmp44 = tmp14;
            let tmp45 = tmp15;
            let tmp46 = tmp16;
            let tmp47 = tmp17;
            let tmp48 = tmp18;
            let tmp49 = tmp19;
          } while (num2 < arr.length);
        }
      }
      if (null != arg1) {
        const result1 = self.setGuildExperimentAssignments(arg1);
      }
      return true;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "setGuildExperimentAssignments",
    value(arg0) {
      let num2;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      let obj = arg0;
      if (null == arg0) {
        obj = {};
      }
      const entries = Object.entries(obj);
      for (let num = 0; num < entries.length; num = num + 1) {
        let tmp2 = callback2;
        let tmp3 = callback2(entries[num], 2);
        let tmp4 = tmp3[1];
        let evaluation_id = tmp4.evaluation_id;
        obj = {};
        let tmp5;
        if (null != evaluation_id) {
          tmp5 = evaluation_id;
        }
        obj.evaluationId = tmp5;
        obj.assignments = {};
        tmp[tmp3[0]] = obj;
        let tmp6 = callback5;
        let tmp7 = callback5(tmp4.assignments);
        let iter = tmp7();
        if (!iter.done) {
          do {
            let tmp8 = closure_4;
            let tmp9 = closure_4(iter.value, 5);
            [tmp10, tmp11, num2, tmp12, tmp13] = tmp9;
            if (num2 == null) {
              num2 = 0;
            }
            obj = { hashedName: tmp10, variantId: tmp11, trackedVariantId: tmp13 };
            let tmp14 = closure_0;
            let tmp15 = closure_2;
            obj.isOverride = num2 & closure_0(closure_2[10]).ExperimentFlags.IsOverride;
            obj.revision = tmp12;
            obj.exposureTrackingEnabled = num2 & closure_0(closure_2[10]).ExperimentFlags.ExposureTrackingEnabled;
            obj.useAsEligibility = num2 & closure_0(closure_2[10]).ExperimentFlags.UseAsEligibility;
            obj.assignments[tmp10] = obj;
            let iter2 = tmp7();
            let tmp16 = num2;
            iter = iter2;
            let tmp17 = tmp10;
            let tmp18 = tmp11;
            let tmp19 = tmp12;
            let tmp20 = tmp13;
          } while (!iter2.done);
        }
      }
    }
  };
  items[4] = {
    key: "createOverride",
    value(name, variantId) {
      let obj = {};
      const merged = Object.assign(obj);
      obj = { hashedName: callback7(name), variantId, isOverride: true, exposureTrackingEnabled: false };
      obj[name] = obj;
      const result = this.trackExposureSuppression(name, "client_override");
    }
  };
  items[5] = {
    key: "deleteOverride",
    value(arg0) {
      const items = [arg0];
      closure_15 = callback(closure_15, items.map(closure_25));
    }
  };
  items[6] = {
    key: "createSessionOverride",
    value(arg0, variantId) {
      let obj = {};
      const merged = Object.assign(obj);
      obj = { hashedName: callback7(arg0), variantId, isOverride: true, exposureTrackingEnabled: false };
      obj[arg0] = obj;
    }
  };
  items[7] = {
    key: "deleteSessionOverride",
    value(arg0) {
      const items = [arg0];
      closure_16 = callback(closure_16, items.map(closure_25));
    }
  };
  items[8] = {
    key: "setExperimentsMetadata",
    value(arr) {
      const obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(Object.fromEntries(arr.map((name) => {
        const items = [name.name, name];
        return items;
      })));
    }
  };
  items[9] = {
    key: "getExperimentsMetadata",
    value() {
      return closure_18;
    }
  };
  items[10] = {
    key: "getClientOverrides",
    value() {
      return closure_15;
    }
  };
  items[11] = {
    key: "getSessionOverrides",
    value() {
      return closure_16;
    }
  };
  items[12] = {
    key: "getExperimentClientOverride",
    value(arg0) {
      return closure_15[arg0];
    }
  };
  items[13] = {
    key: "getExperimentSessionOverride",
    value(arg0) {
      return closure_16[arg0];
    }
  };
  items[14] = {
    key: "handleLogout",
    value(arg0) {
      const self = this;
      if (!arg0) {
        const result = self.clearUserServerAssignments();
        const result1 = self.clearSessionOverrides();
      }
      const Storage = BaseApexExperimentStore(closure_2[12]).Storage;
      Storage.remove(closure_21);
      const result2 = self.clearAllTrackedExposures();
    }
  };
  items[15] = {
    key: "registerExperiment",
    value(name) {
      const self = this;
      closure_14[name.name] = name;
      if (null != closure_17[name.name]) {
        const result = self.trackExposureSuppression(name.name, "cookie_override");
      }
    }
  };
  items[16] = {
    key: "getRegisteredExperiments",
    value() {
      return closure_14;
    }
  };
  items[17] = {
    key: "getAssignment",
    value(arg0, arg1, animateEmoji) {
      const self = this;
      let override = this.getOverride(animateEmoji);
      if (null == override) {
        override = self.getServerAssignment(arg0, arg1, animateEmoji);
      }
      return override;
    }
  };
  items[18] = {
    key: "getServerAssignment",
    value(arg0, arg1, arg2) {
      return null != closure_13[arg0][arg1] ? closure_13[arg0][arg1].assignments[tmp] : undefined;
    }
  };
  items[19] = {
    key: "getEvaluation",
    value(arg0, arg1) {
      let evaluationId;
      if (null != closure_13[arg0][arg1]) {
        evaluationId = tmp.evaluationId;
      }
      return evaluationId;
    }
  };
  items[20] = {
    key: "getEvaluationAndAssignmentInner",
    value(arg0, arg1, animateEmoji) {
      const override = this.getOverride(animateEmoji);
      if (null != override) {
        const items = [undefined, override];
        return items;
      } else {
        if (null == closure_13[arg0][arg1]) {
          const items1 = [undefined, undefined];
          let items2 = items1;
        } else {
          items2 = [tmp5.evaluationId, tmp5.assignments[closure_29(undefined, animateEmoji)]];
        }
        return items2;
      }
    }
  };
  items[21] = {
    key: "getEvaluationAndAssignment",
    value(arg0, arg1, arg2, arg3) {
      let tmp8;
      let LOGGED_OUT_USER_ID_SENTINEL = arg3;
      const self = this;
      const tmp = callback2(this.getEvaluationAndAssignmentInner(arg0, arg1, arg2), 2);
      const first = tmp[0];
      if ("guild" !== arg0) {
        const items = [first, tmp3];
        return items;
      } else {
        if (null == LOGGED_OUT_USER_ID_SENTINEL) {
          LOGGED_OUT_USER_ID_SENTINEL = BaseApexExperimentStore(closure_2[10]).LOGGED_OUT_USER_ID_SENTINEL;
        }
        [r10026, tmp8] = callback2(self.getEvaluationAndAssignmentInner("user", LOGGED_OUT_USER_ID_SENTINEL, arg2), 2);
        if (null == tmp8) {
          const items1 = [undefined, undefined];
          let items6 = items1;
        } else if (tmp8.isOverride) {
          const items2 = [first, tmp8];
          items6 = items2;
        } else if (tmp8.useAsEligibility) {
          if (null == tmp3) {
            const items3 = [undefined, undefined];
            let items5 = items3;
          } else if (null != tmp3.variantId) {
            const items4 = [first, tmp3];
            items5 = items4;
          } else {
            items5 = [undefined, undefined];
          }
        } else {
          items6 = [undefined, undefined];
        }
        return items6;
      }
    }
  };
  items[22] = {
    key: "trackExperimentExposure",
    value(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
      const self = this;
      const BaseApexExperimentStore = this;
      const tmp = callback7("" + arg1 + "|" + arg4 + "|" + arg5 + "|" + arg2 + "|" + arg6 + "|1");
      if ("user" === arg3) {
        self.withExposureTracking(tmp, () => self.track(constants.EXPERIMENT_USER_EVALUATION_EXPOSED, { evaluation_id: arg0, experiment: arg1, exposure_location: arg2, unit_type: arg3, tracked_variation_id: arg5 }, { flush: true }));
      } else if ("installation" === arg3) {
        self.withExposureTracking(tmp, () => self.track(constants.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, { evaluation_id: arg0, installation_id: arg6, experiment: arg1, exposure_location: arg2, unit_type: arg3, tracked_variation_id: arg5 }, { flush: true }));
      } else if ("guild" === arg3) {
        self.withExposureTracking(tmp, () => self.track(constants.EXPERIMENT_GUILD_EVALUATION_EXPOSED, { evaluation_id: arg0, guild_id: arg6, experiment: arg1, exposure_location: arg2, unit_type: arg3, tracked_variation_id: arg5, revision: arg4 }, { flush: true }));
      }
    }
  };
  items[23] = {
    key: "trackCommonTriggerPointExposures",
    value(arg0) {
      let done;
      let done2;
      let self = this;
      const BaseApexExperimentStore = arg0;
      self = this;
      function _loop(evaluationId) {
        self.withExposureTracking(callback("" + evaluationId + "|" + evaluationId), () => closure_1.track(constants.EXPERIMENT_USER_EVALUATION_EXPOSED, { evaluation_id: arg0, exposure_location: arg0, unit_type: "user" }, { flush: true }));
      }
      const tmp = callback5(this.evaluationsWithUnitIds("user"));
      let iter = tmp();
      if (!iter.done) {
        do {
          let _loopResult = _loop(iter.value.evaluationId);
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
      function _loop2(evaluationId, unitId) {
        const self = unitId;
        self.withExposureTracking(callback("" + evaluationId + "|" + evaluationId), () => arg1.track(constants.EXPERIMENT_INSTALLATION_EVALUATION_EXPOSED, { evaluation_id: arg0, exposure_location: arg0, unit_type: "installation", installation_id: arg1 }, { flush: true }));
      }
      const tmp3 = callback5(self.evaluationsWithUnitIds("installation"));
      let iter3 = tmp3();
      if (!iter3.done) {
        do {
          let value = iter3.value;
          let _loop2Result = _loop2(value.evaluationId, value.unitId);
          let iter4 = tmp3();
          iter3 = iter4;
          done2 = iter4.done;
        } while (!done2);
      }
    }
  };
  items[24] = {
    key: "withExposureTracking",
    value: function withExposureTracking(arg0, arg1) {
      const self = this;
      if (this.shouldTrackExposure(arg0)) {
        arg1();
        const _Date = Date;
        closure_23[arg0] = Date.now();
        self.saveTrackedExposures(closure_23);
      }
    }
  };
  items[25] = {
    key: "trackExposureSuppression",
    value: function trackExposureSuppression(name, client_override) {
      const self = this;
      if (null != closure_14[name]) {
        if ("user" === tmp.kind) {
          let obj = { experiment: name, unit_type: tmp.kind, suppression_source: client_override };
          obj = { flush: true };
          self.track(constants.EXPERIMENT_USER_EXPOSURE_SUPPRESSED, obj, obj);
        } else if ("installation" === tmp.kind) {
          const _Object = Object;
          const first = Object.keys(closure_13.installation)[0];
          if (null != first) {
            obj = { experiment: name, unit_type: tmp.kind, suppression_source: client_override, installation_id: first };
            const obj1 = { flush: true };
            self.track(constants.EXPERIMENT_INSTALLATION_EXPOSURE_SUPPRESSED, obj, obj1);
          }
        } else if ("guild" === tmp.kind) {
          const _Object2 = Object;
          const first1 = Object.keys(closure_13.guild)[0];
          if (null != first1) {
            const obj2 = { experiment: name, unit_type: tmp.kind, suppression_source: client_override, guild_id: first1 };
            const obj3 = { flush: true };
            self.track(constants.EXPERIMENT_GUILD_EXPOSURE_SUPPRESSED, obj2, obj3);
          }
        }
      }
    }
  };
  items[26] = {
    key: "evaluationIds",
    value: function evaluationIds(arg0) {
      const values = Object.values(closure_13[arg0]);
      const mapped = values.map((evaluationId) => evaluationId.evaluationId);
      return mapped.filter((arg0) => null != arg0);
    }
  };
  items[27] = {
    key: "evaluationsWithUnitIds",
    value: function evaluationsWithUnitIds(installation) {
      const entries = Object.entries(closure_13[installation]);
      const found = entries.filter((arg0) => {
        let tmp;
        [, tmp] = arg0;
        return null != tmp.evaluationId;
      });
      return found.map((arg0) => {
        let tmp;
        let tmp2;
        [tmp, tmp2] = arg0;
        return { evaluationId: tmp2.evaluationId, unitId: tmp };
      });
    }
  };
  items[28] = {
    key: "shouldTrackExposure",
    value: function shouldTrackExposure(arg0) {
      let tmp2 = null == tmp;
      if (!tmp2) {
        const _Date = Date;
        tmp2 = Date.now() - tmp > closure_22;
      }
      return tmp2;
    }
  };
  items[29] = {
    key: "loadTrackedExposures",
    value: function loadTrackedExposures() {
      const self = this;
      const Storage = BaseApexExperimentStore(closure_2[12]).Storage;
      const value = Storage.get(closure_21);
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
              let tmp9 = tmp7;
              let tmp10 = closure_22;
              if (timestamp - exposures[tmp7] <= closure_22) {
                continue;
              } else {
                delete r0[r12];
                flag = true;
                // continue
              }
              continue;
            }
          }
          if (flag2) {
            self.saveTrackedExposures(exposures);
          }
          return exposures;
        }
      }
      return {};
    }
  };
  items[30] = {
    key: "saveTrackedExposures",
    value: function saveTrackedExposures(closure_23) {
      const Storage = BaseApexExperimentStore(closure_2[12]).Storage;
      const result = Storage.set(closure_21, { version: 2, exposures: closure_23 });
    }
  };
  items[31] = {
    key: "clearForTests",
    value: function clearForTests() {
      const result = this.clearAllServerAssignments();
      this.clearAllOverrides();
      const result1 = this.clearAllTrackedExposures();
      set.clear();
      set2.clear();
    }
  };
  items[32] = {
    key: "clearAllServerAssignments",
    value: function clearAllServerAssignments() {
      let closure_13 = { user: {}, guild: {}, installation: {} };
    }
  };
  items[33] = {
    key: "clearUserServerAssignments",
    value: function clearUserServerAssignments() {
      const obj = { user: {}, guild: {}, installation: obj.installation };
    }
  };
  items[34] = {
    key: "clearAllOverrides",
    value: function clearAllOverrides() {
      let closure_15 = {};
      let closure_16 = {};
      let closure_17 = {};
    }
  };
  items[35] = {
    key: "clearSessionOverrides",
    value: function clearSessionOverrides() {
      let closure_16 = {};
    }
  };
  items[36] = {
    key: "clearAllTrackedExposures",
    value: function clearAllTrackedExposures() {
      let closure_23 = {};
    }
  };
  items[37] = {
    key: "getHash",
    value: function getHash(arg0) {
      return callback7(arg0);
    }
  };
  items[38] = {
    key: "handleFetchStart",
    value: function handleFetchStart(arg0) {
      set.add(arg0);
    }
  };
  items[39] = {
    key: "handleFetchSuccess",
    value: function handleFetchSuccess(arg0, arg1) {
      set.delete(arg0);
      set2.add(arg0);
      const result = this.setExperimentAssignments(arg1);
    }
  };
  items[40] = {
    key: "handleFetchFailure",
    value: function handleFetchFailure(arg0) {
      set.delete(arg0);
      set2.add(arg0);
    }
  };
  items[41] = {
    key: "isFetching",
    value: function isFetching(wishlistId) {
      return set.has(wishlistId);
    }
  };
  items[42] = {
    key: "hasLoaded",
    value: function hasLoaded(FRECENCY_AND_FAVORITES_SETTINGS) {
      return set2.has(FRECENCY_AND_FAVORITES_SETTINGS);
    }
  };
  items[43] = {
    key: "getOverride",
    value: function getOverride(animateEmoji) {
      let tmp = closure_16[animateEmoji];
      if (null == tmp) {
        tmp = closure_15[animateEmoji];
      }
      if (null == tmp) {
        tmp = closure_17[animateEmoji];
      }
      return tmp;
    }
  };
  return callback(BaseApexExperimentStore, items);
}(importDefault(dependencyMap[13]).PersistedStore);
tmp9.displayName = "ApexExperimentStore";
tmp9.persistKey = "ApexExperimentStore";
const result = arg1(dependencyMap[14]).fileFinishedImporting("../discord_common/js/packages/apex/BaseApexExperimentStore.tsx");

export default tmp9;
