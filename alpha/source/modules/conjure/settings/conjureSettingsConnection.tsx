// Module ID: 10922
// Function ID: 10923
// Name: conjureSettingsConnection
// Dependencies: [5, 10826, 584, 10852, 10906, 569, 10923, 2]
// Exports: requestProjectRebuild, retryFailedOverlayProjectSettings, submitProjectSettings

// Module 10922 (conjureSettingsConnection)
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjurePreviewActionCreators from "ConjurePreviewActionCreators" /* 10852 */;
import conjureWorkerFetch from "conjureWorkerFetch" /* 10906 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureSettingsStore from "ConjureSettingsStore" /* 10826 */;
import size from "module_2" /* 2 */;

let c0, c1, c2, closure_5, closure_6, importDefault, rebuild_required, secrets, set, values;

function noteSettingsWrite(arg0) {
  set = map.set;
  let num = map.get(arg0);
  if (num == null) {
    num = 0;
  }
  const result = set(arg0, num + 1);
}
function fetchProjectSettings() {
  return obj(...arguments);
}
let obj = function _fetchProjectSettings() {
  obj = _asyncToGenerator(async (projectId) => {
    let c7 = 0;
    let c8 = 0;
    return (async function(arg0, value) {
      let obj10;
      let obj8;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        try {
          let closure_1;
          let closure_2;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_6 = tmp4;
              closure_5 = tmp;
              closure_1 = undefined;
              closure_2 = undefined;
              values = undefined;
              value = map.get(projectId);
              c1 = value;
              const tmp59 = projectId;
              if (value == null) {
                c1 = 0;
              }
              closure_1 = c1;
              c7 = 1;
              c8 = 1;
              const obj4 = { value: obj8.fetchConjureWorker(tmp59, "/agent/settings"), done: false };
              obj8 = conjureWorkerFetch;
              return obj4;
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_2 = value;
              if (closure_2.ok) {
                c7 = 2;
                c8 = 1;
                const obj6 = { value: closure_2.json(), done: false };
                return obj6;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("settings fetch failed (" + closure_2.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            return { value, done: true };
          } else {
            values = value;
            const value2 = closure_134_5.get(projectId);
            c2 = value2;
            if (value2 == null) {
              c2 = 0;
            }
            const tmp8 = c2 !== closure_1 && null != closure_134_4.getSettings(projectId);
            if (!tmp8) {
              let schema;
              const _Array = Array;
              if (values != null) {
                schema = values.schema;
              }
              if (isArray(schema)) {
                if (0 !== values.schema.length) {
                  const obj9 = { type: "CONJURE_SETTINGS_SET", projectId, settings: obj10 };
                  obj10 = { schema: values.schema, values, secrets, connections: values.connections };
                  values = values.values;
                  const dispatch = closure_134_1(closure_134_2[2]).dispatch;
                  closure_134_1(closure_134_2[2]);
                  if (values == null) {
                    values = {};
                  }
                  secrets = values.secrets ?? [];
                  dispatch(obj9);
                }
              }
              const obj11 = { type: "CONJURE_SETTINGS_LOAD_STATE_SET", projectId, state: "loaded" };
              obj = closure_134_1(closure_134_2[2]);
              obj.dispatch(obj11);
            }
            c8 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } catch (tmp46) {
          c8 = 3;
          throw tmp46;
        }
      }
    })();
  });
  return obj(...arguments);
};
function fetchWithRetry() {
  return obj(...arguments);
}
obj = function _fetchWithRetry() {
  obj = _asyncToGenerator(async (projectId, arg1) => {
    let closure_2;
    let closure_3;
    let closure_1 = arg1;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      closure_1.inFlight = true;
      const _Date = Date;
      closure_1.lastFetchAt = Date.now();
      await fetchProjectSettings(projectId);
      closure_1.inFlight = false;
      closure_1.retries = 0;
      const backoff = closure_1.backoff;
      backoff.succeed();
      await "IconComponent";
      closure_1.inFlight = false;
      if (closure_1.retries >= 5) {
        const obj6 = { type: "CONJURE_SETTINGS_LOAD_STATE_SET", projectId, state: "failed" };
        const obj2 = closure_131_1(closure_131_2[2]);
        obj2.dispatch(obj6);
      } else {
        closure_1.retries = closure_1.retries + 1;
        const backoff2 = closure_1.backoff;
        backoff2.fail(() => closure_2_10(projectId, closure_1_1));
      }
      return tmp17;
    })();
  });
  return obj(...arguments);
};
function loadOverlayProjectSettings(projectId) {
  let tmp4;
  let closure_0 = projectId;
  let value = map1.get(projectId);
  obj = map1;
  if (null == value) {
    const obj2 = { backoff: tmp4, inFlight: false, retries: 0, lastFetchAt: -Infinity, deferred: null };
    const self = this;
    const self2 = this;
    tmp4 = new BackoffDefault(1000, 60000);
    const result = obj.set(projectId, obj2);
    value = obj2;
  }
  importDefault = value;
  if (!value.inFlight) {
    if (!value.backoff.pending) {
      if (null == value.deferred) {
        const obj4 = { type: "CONJURE_SETTINGS_LOAD_STATE_SET", projectId, state: "loading" };
        const obj3 = DispatcherDefault;
        obj3.dispatch(obj4);
        value.retries = 0;
        const _Date = Date;
        const sum = value.lastFetchAt + 5000;
        const diff = sum - Date.now();
        if (0 < diff) {
          const _setTimeout = setTimeout;
          value.deferred = setTimeout(() => {
            importDefault.deferred = null;
            fetchWithRetry(projectId, importDefault);
          }, diff);
        } else {
          fetchWithRetry(projectId, value);
        }
      }
    }
  }
}
obj = function _submitProjectSettings() {
  obj = _asyncToGenerator(async (projectId, json) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      let obj11;
      let obj4;
      let obj9;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        let c4;
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = undefined;
              rebuild_required = undefined;
              values = undefined;
              c5 = 1;
              c6 = 1;
              const obj5 = { method: "PUT", json };
              const obj6 = { value: obj9.fetchConjureWorker(projectId, "/agent/settings", obj5), done: false };
              obj9 = conjureWorkerFetch;
              return obj6;
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = value;
              if (closure_2.ok) {
                rebuild_required = null;
                c4 = 1;
                c5 = 3;
                c6 = 1;
                const obj8 = { value: closure_2.json(), done: false };
                return obj8;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("settings submission failed (" + closure_2.status + ")");
                throw error;
              }
            }
          } else {
            if (2 === c5) {
              c4 = 0;
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              c6 = 3;
              return { value, done: true };
            } else {
              rebuild_required = value;
              c4 = 0;
            }
            closure_131_6(projectId);
            values = closure_131_4.getSettings(projectId);
            const tmp14 = null != values && null != json.values;
            if (tmp14) {
              const obj10 = { type: "CONJURE_SETTINGS_SET", projectId, settings: obj11 };
              obj11 = { values: obj4.mergeSubmittedSettingValues(values.values, json.values) };
              const dispatch = closure_131_1(closure_131_2[2]).dispatch;
              closure_131_1(closure_131_2[2]);
              const merged = Object.assign(values);
              obj4 = closure_131_0(closure_131_2[6]);
              dispatch(obj10);
            }
            rebuild_required = undefined;
            if (rebuild_required != null) {
              rebuild_required = rebuild_required.rebuild_required;
            }
            c6 = 3;
            return { value: { rebuildRequired: true === rebuild_required }, done: true };
          }
        } catch (tmp41) {
          if (0 === c4) {
            c6 = 3;
            throw tmp41;
          } else {
            c5 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const map = new Map();
obj = {
  settings(schema, projectId) {
    projectId = projectId.projectId;
    set = map.set;
    let num = map.get(projectId);
    if (num == null) {
      num = 0;
    }
    const result = set(projectId, num + 1);
    obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_SETTINGS_SET", projectId, settings: { schema: schema.schema, values: schema.values, secrets: schema.secrets, connections: schema.connections } };
    obj.dispatch(obj2);
    if (true === schema.values_changed) {
      const obj3 = ConjurePreviewActionCreators;
      const result1 = obj3.reloadConjureProjectFrames(projectId);
    }
  }
};
const map1 = new Map();
let result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsConnection.tsx");

export const settingsFrameHandlers = obj;
export { fetchProjectSettings };
export const CONJURE_SETTINGS_MAX_RETRIES = 5;
export const CONJURE_SETTINGS_MIN_RELOAD_INTERVAL_MS = 5000;
export { loadOverlayProjectSettings };
export function retryFailedOverlayProjectSettings(arg0) {
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if ("failed" === ConjureSettingsStore.getLoadState(nextResult)) {
      let tmp6 = loadOverlayProjectSettings(tmp2);
    }
    continue;
  }
}
export function submitProjectSettings() {
  return obj(...arguments);
}
export function requestProjectRebuild(arg0) {
  function kick() {
    return obj(...arguments);
  }
  let closure_0 = arg0;
  obj = function _kick() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let v3;
      if (c0 === 2) {
        c0 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "IconComponent" };
        }
      } else {
        let c3;
        try {
          c0 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c0 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c3 = 1;
              c1 = 2;
              const obj2 = c0(closure_2[4]);
              c0 = 1;
              const obj5 = { value: obj2.fetchConjureWorker(closure_2_0, "/agent/rebuild", { method: "POST" }), done: false };
              return obj5;
            }
          } else {
            if (1 === tmp3) {
              c3 = 0;
            } else if (arg0 === 1) {
              c0 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c0 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              const ok = value.ok;
              c3 = 0;
            }
            c0 = 3;
            return { value: "IconComponent", done: "IconComponent" };
          }
        } catch (tmp8) {
          closure_2 = tmp8;
          if (0 === c3) {
            c0 = 3;
            throw tmp8;
          } else {
            c1 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  !kick();
}
