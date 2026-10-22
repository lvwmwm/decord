// Module ID: 10667
// Function ID: 10668
// Name: ConjureRemix
// Dependencies: [5, 10668, 584, 1128, 3830, 10695, 10776, 10173, 10690, 2]
// Exports: remixConjureProjectInto

// Module 10667 (ConjureRemix)
import _modDef3830 from "module_3830" /* 3830 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10690 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 10695 */;
import conjureRemixConnection from "conjureRemixConnection" /* 10776 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10668 */;
import Dispatcher from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c3, c4, c7, closure_2, dependencyMap, importDefault;

let closure_4;
let hasOwnProperty;
function prepareConjureRemix(project, currentGuildId, arg2) {
  let closure_1;
  let name;
  const f146538 = () => "rejected";
  _require = currentGuildId;
  importDefault = arg2;
  function accept(comma) {
    hasOwnProperty(comma);
    if (hasOwnProperty == null) {
      obj = conjureRemixConnection;
      const acceptRemixResult = obj.acceptRemix(_asyncToGenerator, comma);
      hasOwnProperty = acceptRemixResult.catch(f146538);
    }
    return hasOwnProperty;
  }
  let obj = function _open() {
    let value;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let deleteProjectResult;
      let v3;
      if (c4 === 2) {
        c4 = 3;
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
          let user;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let c1 = 0;
              user = undefined;
              closure_2 = undefined;
              c7 = true;
              c3 = 1;
              c4 = 1;
              const obj5 = { value, done: false };
              return obj5;
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              user = value;
              if (null == user) {
                const obj7 = { ok: false, message, kept: false };
                c4 = 3;
                const obj8 = { value: obj7, done: true };
                return obj8;
              } else {
                c3 = 2;
                c4 = 1;
                const obj10 = { value: closure_130_8(user.id), done: false };
                return obj10;
              }
            }
          } else {
            let obj19;
            if (2 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj11 = { value, done: true };
                return obj11;
              } else {
                closure_2 = value;
                if ("unreachable" === closure_2) {
                  let c5 = null;
                  c7 = false;
                  const obj12 = { ok: false, message, kept: true };
                  obj19 = obj12;
                } else if ("rejected" === closure_2) {
                  if (closure_130_4 != null) {
                    tmp31();
                  }
                  c4(user.id);
                  const obj9 = guildId(closure_2[8]);
                  c3 = 3;
                  c4 = 1;
                  const obj13 = {
                    value: deleteProjectResult.catch(() => {

                                }),
                    done: false
                  };
                  deleteProjectResult = obj9.deleteProject(user.id);
                  return obj13;
                } else if (guildId === guildId) {
                  const obj14 = { ok: true, projectId: user.id, guildId };
                  obj = obj14;
                  obj19 = obj;
                } else {
                  const obj15 = { guild_id: guildId, preview_guild_id: guildId };
                  const obj21 = guildId(closure_2[8]);
                  const result = obj21.updateProjectSettings(user.id, obj15);
                  c3 = 4;
                  c4 = 1;
                  const obj16 = { value: result.then(() => true, () => false), done: false };
                  return obj16;
                }
                c4 = 3;
                const obj17 = { value: obj19, done: true };
                return obj17;
              }
            } else if (3 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj18 = { value, done: true };
                return obj18;
              } else {
                obj19 = { ok: false, message, kept: false };
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj20 = { value, done: true };
              return obj20;
            } else if (value) {
              if (closure_130_4 != null) {
                tmp9();
              }
              const obj2 = guildId(closure_2[5]);
              obj2.forgetEarlyTicket(user.id);
              c4(user.id);
              closure_1_5(user.id);
              const obj22 = { ok: true, projectId: user.id, guildId };
              obj = obj22;
            } else {
              obj = { ok: true, projectId: user.id, guildId };
            }
          }
        } catch (tmp55) {
          c4 = 3;
          throw tmp55;
        }
      }
    });
    return obj(...arguments);
  };
  const intl = require("intl").intl;
  dependencyMap = intl.string(_modDef3830.Cn8H0Y);
  obj = require("ConjureWorkerTickets");
  const mintRemixTicketResult = obj.mintRemixTicket(project.id);
  _asyncToGenerator = mintRemixTicketResult;
  mintRemixTicketResult.catch(() => {

  });
  let closure_5 = null;
  c6 = null;
  map = false;
  let obj2 = require("createNonce");
  const nonce = obj2.createNonce();
  let result = map.set(nonce, (id, ws_ticket) => {
    map.delete(nonce);
    c6 = id;
    obj = ConjureWorkerTickets;
    const result = obj.rememberCreatedProjectTicket(id, ws_ticket);
    hasOwnProperty(id);
    if (hasOwnProperty == null) {
      const tmp2Result = conjureRemixConnection;
      const acceptRemixResult = tmp2Result.acceptRemix(_asyncToGenerator, id);
      hasOwnProperty = acceptRemixResult.catch(f146538);
    }
  });
  const tmp4 = require("ConjureActionCreators");
  let obj3 = { name: "" + name.slice(0, 120) + c6, guild_id: currentGuildId, install_scope: project.install_scope, remix_source_project_id: project.id, nonce };
  name = project.name;
  const createRemix = tmp4.createRemix;
  const remix = createRemix(obj3);
  let nextPromise = remix.then((remix_preview) => {
    map.delete(nonce);
    if (null != remix_preview.remix_preview) {
      obj = ConjureActionCreators;
      obj.applyRemixPreview(remix_preview.id, remix_preview.remix_preview);
      const tmp5 = c7;
      if (!tmp5) {
        let tmp6;
        if (closure_1 != null) {
          tmp6 = closure_1(remix_preview);
        }
        closure_4 = tmp6;
      }
    }
    const id = remix_preview.id;
    hasOwnProperty(id);
    if (hasOwnProperty == null) {
      const obj2 = conjureRemixConnection;
      const acceptRemixResult = obj2.acceptRemix(_asyncToGenerator, id);
      hasOwnProperty = acceptRemixResult.catch(f146538);
    }
    return remix_preview;
  }, () => {
    map.delete(nonce);
    if (null != c6) {
      React3(c6);
    }
    return null;
  });
  let obj4 = {
    created: nextPromise,
    open(arg0) {
      return obj(...arguments);
    },
    dismiss() {
      const tmp = c7;
      if (!tmp) {
        c7 = true;
        nextPromise = nextPromise.then((id) => {
          if (closure_1_4 != null) {
            tmp();
          }
          if (null != id) {
            closure_4(id.id);
          }
        });
      }
    }
  };
  return obj4;
}
let _asyncToGenerator = _asyncToGenerator_mod;
({ closeConnection: closure_4, ensureConnection: hasOwnProperty } = ConjureConnectionStore);
let c6 = " (Remix)";
let map = new Map();
const subscription = Dispatcher.subscribe("CONJURE_PROJECT_CREATE_PROGRESS", (nonce) => {
  let projectId;
  let wsTicket;
  ({ projectId, wsTicket } = nonce);
  const value = map.get(nonce.nonce);
  if (value != null) {
    value(projectId, wsTicket);
  }
});
let result = size.fileFinishedImporting("modules/conjure/remix/ConjureRemix.tsx");

export { prepareConjureRemix };
export const remixConjureProjectInto = function remixConjureProjectInto(project, currentGuildId) {
  const obj = prepareConjureRemix(project, currentGuildId);
  return obj.open(currentGuildId);
};
