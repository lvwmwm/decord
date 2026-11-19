// Module ID: 12228
// Function ID: 12229
// Name: ConjureRemix
// Dependencies: [5, 4663, 6848, 6501, 6746, 572, 1113, 4089, 6821, 12229, 8328, 6814, 2]
// Exports: copyProjectName, createConjureRemix, isValidCopyName

// Module 12228 (ConjureRemix)
import _modDef4089 from "module_4089" /* 4089 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6501 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6814 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 6821 */;
import conjureRemixConnection from "conjureRemixConnection" /* 12229 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import GuildStore from "GuildStore" /* 4663 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 6848 */;
import Dispatcher from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function startRemix(id, guildId, name, arg3, share_ticket) {
  let closure_2;
  let obj4;
  const f129429 = () => "rejected";
  _require = guildId;
  importDefault = arg3;
  function accept(comma) {
    metroRequire(comma);
    if (closure_5 == null) {
      const obj = conjureRemixConnection;
      const acceptRemixResult = obj.acceptRemix(_asyncToGenerator, comma);
      closure_5 = acceptRemixResult.catch(f129429);
    }
    return closure_5;
  }
  let value = function _open() {
    const obj = _asyncToGenerator(async (arg0, value) => {
      let deleteProjectResult;
      let tmp9;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "+60" };
        }
      } else {
        try {
          let v0;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              v0 = undefined;
              closure_1 = undefined;
              c7 = true;
              c2 = 1;
              c3 = 1;
              const obj5 = { value, done: false };
              return obj5;
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              v0 = value;
              if (null == v0) {
                const obj7 = { ok: false, message, kept: false };
                c3 = 3;
                const obj8 = { value: obj7, done: true };
                return obj8;
              } else {
                c2 = 2;
                c3 = 1;
                const obj9 = { value: closure_129_9(v0.id), done: false };
                return obj9;
              }
            }
          } else if (2 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              closure_1 = value;
              if ("unreachable" === closure_1) {
                let c5 = null;
                c7 = false;
                const obj11 = { ok: false, message, kept: true };
                value = obj11;
              } else if ("rejected" === closure_1) {
                if (closure_129_4 != null) {
                  tmp12();
                }
                closure_1_5(v0.id);
                const obj4 = v0(c2[11]);
                c2 = 3;
                c3 = 1;
                const obj12 = {
                  value: deleteProjectResult.catch(() => {

                            }),
                  done: false
                };
                deleteProjectResult = obj4.deleteProject(v0.id);
                return obj12;
              } else {
                const obj13 = { ok: true, projectId: v0.id, guildId: tmp9 };
                tmp9 = null;
                if (closure_129_10) {
                  tmp9 = closure_129_0;
                }
                value = obj13;
              }
              c3 = 3;
              const obj14 = { value, done: true };
              return obj14;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj15 = { value, done: true };
            return obj15;
          } else {
            value = { ok: false, message, kept: false };
          }
        } catch (tmp35) {
          c3 = 3;
          throw tmp35;
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = _require;
  let tmp2 = dependencyMap;
  const intl = require("intl").intl;
  dependencyMap = intl.string(_modDef4089.Cn8H0Y);
  const tmp3 = require("ConjureWorkerTickets");
  let tmp4;
  const mintRemixTicket = tmp3.mintRemixTicket;
  id = id.id;
  if (null != share_ticket) {
    value = { share_ticket };
    tmp4 = value;
  }
  const mintRemixTicketResult = mintRemixTicket(id, tmp4);
  _asyncToGenerator = mintRemixTicketResult;
  mintRemixTicketResult.catch(() => {

  });
  let closure_5 = null;
  let c6 = null;
  let c7 = false;
  c8 = false;
  const guild = GuildStore.getGuild(guildId);
  let result = "guild" === id.install_scope && null != guild;
  if (result) {
    const tmpResult = tmp(6746);
    result = tmpResult.canStartConjureProject(guild, "ConjureRemix");
  }
  startRemix = result;
  const tmpResult3 = tmp(8328);
  const nonce = tmpResult3.createNonce();
  const result1 = accept.set(nonce, (id, ws_ticket) => {
    map.delete(nonce);
    c6 = id;
    const obj = ConjureWorkerTickets;
    result = obj.rememberCreatedProjectTicket(id, ws_ticket);
    metroRequire(id);
    if (closure_5 == null) {
      const tmp2Result = conjureRemixConnection;
      const acceptRemixResult = tmp2Result.acceptRemix(_asyncToGenerator, id);
      closure_5 = acceptRemixResult.catch(f129429);
    }
  });
  let obj2 = { name, remix_source_project_id: id.id, remix_share_ticket: share_ticket, nonce };
  const createRemix = tmp(6814).createRemix;
  tmp(6814);
  if (result) {
    let obj3 = { guild_id: guildId };
    obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  const remix = createRemix(obj2);
  const promise = remix.then((remix_preview) => {
    map.delete(nonce);
    if (null != remix_preview.remix_preview) {
      const obj = ConjureActionCreators;
      obj.applyRemixPreview(remix_preview.id, remix_preview.remix_preview);
      const tmp5 = c8;
      if (!tmp5) {
        let tmp6;
        if (closure_1 != null) {
          tmp6 = closure_1(remix_preview);
        }
        closure_4 = tmp6;
      }
    }
    const id = remix_preview.id;
    metroRequire(id);
    if (closure_5 == null) {
      const obj2 = conjureRemixConnection;
      const acceptRemixResult = obj2.acceptRemix(_asyncToGenerator, id);
      closure_5 = acceptRemixResult.catch(f129429);
    }
    return remix_preview;
  }, () => {
    map.delete(nonce);
    if (null != c6) {
      hasOwnProperty(c6);
    }
    return null;
  });
  let obj5 = {
    guildId,
    name,
    open() {
      return obj(...arguments);
    },
    abandon() {
      const tmp = c7 || c8;
      if (!tmp) {
        c8 = true;
        promise.then((id) => {
          if (closure_1_4 != null) {
            tmp();
          }
          if (null != id) {
            closure_5(id.id);
          }
        });
      }
    }
  };
  return obj5;
}
let _asyncToGenerator = _asyncToGenerator_mod;
({ closeConnection: hasOwnProperty, ensureConnection: metroRequire, sendUserMessage: metroImportDefault } = ConjureConnectionStore);
let c8 = " (Copy)";
const map = new Map();
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

export function copyProjectName(name) {
  return "" + name.slice(0, ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH - 7) + c8;
}
export function isValidCopyName(first1) {
  return first1.trim().length >= ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH;
}
export function createConjureRemix(project, arg1, shareTicket) {
  let closure_0 = project;
  let closure_1 = arg1;
  let closure_2 = shareTicket;
  let obj = function _confirm() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let c1;
      let c2;
      let closure_0 = arg0;
      closure_1 = value;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "+60" };
        }
      } else {
        let c5;
        let closure_4;
        try {
          let copy;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp;
              let closure_2 = tmp4;
              c1 = undefined;
              c2 = undefined;
              copy = undefined;
              ({ name: c1, prompt: c2, copy: c3 } = closure_1);
              closure_4 = undefined;
              value = undefined;
              c6 = 1;
              c7 = 1;
              return { value: "Path", done: true };
            }
          } else if (1 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const tmp59 = c4;
              if (tmp59) {
                c7 = 3;
                return { value: null, done: true };
              } else {
                c4 = true;
                closure_4 = c1.trim();
                c5 = 1;
                let guildId;
                if (copy != null) {
                  guildId = copy.guildId;
                }
                const tmp30 = guildId === closure_0 && copy.name === closure_4;
                if (!tmp30) {
                  const obj5 = copy;
                  if (copy != null) {
                    obj5.abandon();
                  }
                  copy = closure_1_10(closure_131_0, closure_0, closure_4, closure_131_1, closure_131_2);
                }
                c6 = 3;
                c7 = 1;
                const obj6 = { value: copy.open(), done: false };
                return obj6;
              }
            }
          } else if (2 === c6) {
            c5 = 0;
            c4 = false;
            throw closure_4;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c4 = false;
            c7 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            if (value.ok) {
              const projectId = value.projectId;
              const tmp8 = c7;
              if (true === copy) {
                const obj8 = { copy };
                obj = obj8;
              } else {
                obj = { remix: true };
              }
              tmp8(projectId, c2, undefined, obj);
            } else if (!value.kept) {
              copy = null;
            }
            c5 = 0;
            c4 = false;
            c7 = 3;
            const obj9 = { value, done: true };
            return obj9;
          }
        } catch (tmp48) {
          closure_4 = tmp48;
          if (0 === c5) {
            c7 = 3;
            throw tmp48;
          } else {
            c6 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let c3 = null;
  let c4 = false;
  obj = {
    confirm(arg0, arg1) {
      return obj(...arguments);
    },
    dismiss() {
      let abandonResult;
      obj = c3;
      if (c3 != null) {
        abandonResult = obj.abandon();
      }
      return abandonResult;
    }
  };
  return obj;
}
