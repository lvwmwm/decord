// Module ID: 10760
// Function ID: 10761
// Name: conjureSettingsConnection
// Dependencies: [5, 584, 10749, 2]
// Exports: requestProjectRebuild, submitProjectSettings

// Module 10760 (conjureSettingsConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureWorkerFetch from "conjureWorkerFetch" /* 10749 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c0, c1, closure_2, obj;

let settingsFrameHandlers = function _submitProjectSettings() {
  obj = _asyncToGenerator(async (arg0, json) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      let obj6;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_0 = undefined;
              json = undefined;
              c3 = 1;
              c4 = 1;
              const obj4 = { method: "PUT", json };
              const obj5 = { value: obj6.fetchConjureWorker(closure_0, "/agent/settings", obj4), done: false };
              obj6 = conjureWorkerFetch;
              return obj5;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_0 = value;
              if (closure_0.ok) {
                const data = closure_0.json();
                c3 = 2;
                c4 = 1;
                const obj8 = { value: data.catch(() => null), done: false };
                return obj8;
              } else {
                const _Error = Error;
                const _HermesInternal = HermesInternal;
                const self = this;
                const self2 = this;
                const error = new Error("settings submission failed (" + closure_0.status + ")");
                throw error;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            json = value;
            let rebuild_required;
            if (json != null) {
              rebuild_required = json.rebuild_required;
            }
            value = { rebuildRequired: true === rebuild_required };
            c4 = 3;
            return { value, done: true };
          }
        } catch (tmp17) {
          c4 = 3;
          throw tmp17;
        }
      }
    })();
  });
  return obj(...arguments);
};
settingsFrameHandlers = {
  settings(schema, projectId) {
    projectId = projectId.projectId;
    obj = DispatcherDefault;
    const obj2 = { type: "CONJURE_SETTINGS_SET", projectId, settings: { schema: schema.schema, values: schema.values, secrets: schema.secrets, connections: schema.connections } };
    obj.dispatch(obj2);
  }
};
const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsConnection.tsx");

export { settingsFrameHandlers };
export const submitProjectSettings = function submitProjectSettings() {
  return obj(...arguments);
};
export const requestProjectRebuild = function requestProjectRebuild(arg0) {
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
          return { value: "IconComponent", done: null };
        }
      } else {
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
              c1 = 1;
              const obj2 = c0(closure_1_2[2]);
              c0 = 1;
              const obj5 = { value: obj2.fetchConjureWorker(closure_2_0, "/agent/rebuild", { method: "POST" }), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const ok = value.ok;
            c0 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp7) {
          c0 = 3;
          throw tmp7;
        }
      }
    });
    return obj(...arguments);
  };
  const promise = kick();
  promise.catch((error) => {

  });
};
