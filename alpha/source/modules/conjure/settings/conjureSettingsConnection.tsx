// Module ID: 13246
// Function ID: 13247
// Name: conjureSettingsConnection
// Dependencies: [5, 584, 13241, 2]
// Exports: requestProjectRebuild, submitProjectSettings

// Module 13246 (conjureSettingsConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 13241 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c1, c2, c3, c4, obj;

let settingsFrameHandlers = function _submitProjectSettings() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let obj8;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let ticket;
        let baseUrl;
        let uRLSearchParams;
        let closure_5;
        let rebuild_required;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            closure_0 = closure_1;
            closure_1 = undefined;
            ticket = undefined;
            baseUrl = undefined;
            uRLSearchParams = undefined;
            closure_5 = undefined;
            rebuild_required = undefined;
            c3 = 1;
            c4 = 1;
            const obj4 = { value: obj8.mintWorkerTicket(closure_0), done: false };
            obj8 = ConjureWorkerTickets;
            return obj4;
          }
        } else if (1 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_1 = value;
            ticket = closure_1.ticket;
            baseUrl = closure_1.baseUrl;
            const _URLSearchParams = URLSearchParams;
            const obj6 = { ticket };
            const self3 = this;
            const self4 = this;
            uRLSearchParams = new URLSearchParams(obj6);
            const _fetch = fetch;
            const _HermesInternal2 = HermesInternal;
            const request = { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify(closure_0) };
            const _JSON = JSON;
            const combined = "" + baseUrl + "/agent/settings?" + uRLSearchParams;
            c3 = 2;
            c4 = 1;
            const obj7 = { value: fetch(combined, request), done: false };
            return obj7;
          }
        } else if (2 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            closure_5 = value;
            if (closure_5.ok) {
              const data = closure_5.json();
              c3 = 3;
              c4 = 1;
              const obj10 = { value: data.catch(() => null), done: false };
              return obj10;
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("settings submission failed (" + closure_5.status + ")");
              throw error;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          rebuild_required = undefined;
          if (rebuild_required != null) {
            rebuild_required = rebuild_required.rebuild_required;
          }
          value = { rebuildRequired: true === rebuild_required };
          c4 = 3;
          const obj12 = { value, done: true };
          return obj12;
        }
      } catch (tmp17) {
        c4 = 3;
        throw tmp17;
      }
    }
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
    obj = _asyncToGenerator(async function(arg0, value) {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let tmp;
          let ticket;
          let baseUrl;
          let uRLSearchParams;
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp = undefined;
              ticket = undefined;
              baseUrl = undefined;
              uRLSearchParams = undefined;
              c1 = 1;
              const obj4 = tmp(c2[2]);
              c2 = 1;
              const obj5 = { value: obj4.mintWorkerTicket(closure_2_0), done: false };
              return obj5;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              tmp = value;
              ticket = tmp.ticket;
              baseUrl = tmp.baseUrl;
              const _URLSearchParams = URLSearchParams;
              const obj7 = { ticket };
              const self = this;
              const self2 = this;
              uRLSearchParams = new URLSearchParams(obj7);
              const _fetch = fetch;
              const _HermesInternal = HermesInternal;
              c1 = 2;
              c2 = 1;
              const obj8 = { value: fetch("" + baseUrl + "/agent/rebuild?" + uRLSearchParams, { method: "POST" }), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const ok = value.ok;
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c2 = 3;
          throw tmp8;
        }
      }
    });
    return obj(...arguments);
  };
  const promise = kick();
  promise.catch((error) => {

  });
};
