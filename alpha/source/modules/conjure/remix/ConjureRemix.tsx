// Module ID: 11307
// Function ID: 11308
// Name: ConjureRemix
// Dependencies: [5, 4788, 7563, 6809, 7476, 572, 1112, 4192, 7548, 11308, 9929, 7541, 2]
// Exports: createConjureRemix, isValidCopyName

// Module 11307 (ConjureRemix)
import _modDef4192 from "module_4192" /* 4192 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6809 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7541 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 7548 */;
import conjureRemixConnection from "conjureRemixConnection" /* 11308 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildStore_mod from "GuildStore" /* 4788 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7563 */;
import Dispatcher from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let c7, closure_4, dependencyMap, importDefault;

let hasOwnProperty;
let metroRequire;
function startRemix(id, guildId, arg2, arg3, share_ticket) {
  let closure_2;
  let copy;
  let name;
  let obj4;
  const f127163 = () => "rejected";
  ({ name, copy } = arg2);
  importDefault = arg3;
  dependencyMap = undefined;
  let c3;
  GuildStore = undefined;
  let closure_5;
  let c6;
  map = undefined;
  let c8;
  let closure_10;
  let nonce;
  let promise;
  function accept(comma) {
    metroRequire(comma);
    if (closure_5 == null) {
      const obj = conjureRemixConnection;
      const acceptRemixResult = obj.acceptRemix(c3, comma, copy);
      closure_5 = acceptRemixResult.catch(f127163);
    }
    return closure_5;
  }
  let value = function _open() {
    const obj = _asyncToGenerator(async (arg0, value) => {
      let deleteProjectResult;
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
          return { value: "HermesInternal", done: null };
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
                  tmp10();
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
                const obj13 = { ok: true, projectId: v0.id, guildId };
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
        } catch (tmp33) {
          c3 = 3;
          throw tmp33;
        }
      }
    });
    return obj(...arguments);
  };
  let tmp = copy;
  let tmp2 = dependencyMap;
  const intl = copy(1112).intl;
  dependencyMap = intl.string(_modDef4192.Cn8H0Y);
  const tmp3 = copy(7548);
  let tmp4;
  const mintRemixTicket = tmp3.mintRemixTicket;
  id = id.id;
  if (null != share_ticket) {
    value = { share_ticket };
    tmp4 = value;
  }
  const mintRemixTicketResult = mintRemixTicket(id, tmp4);
  c3 = mintRemixTicketResult;
  mintRemixTicketResult.catch(() => {

  });
  closure_5 = null;
  c6 = null;
  map = false;
  c8 = false;
  let tmp6 = null;
  if (null != guildId) {
    tmp6 = null;
    if ("guild" === id.install_scope) {
      const guild = GuildStore.getGuild(guildId);
      let tmp9 = null;
      if (null != guild) {
        tmp9 = null;
        const tmpResult = tmp(7476);
        if (tmpResult.canStartConjureProject(guild, "ConjureRemix")) {
          tmp9 = guildId;
        }
      }
      tmp6 = tmp9;
    }
  }
  closure_10 = tmp6;
  const tmpResult3 = tmp(9929);
  nonce = tmpResult3.createNonce();
  let result = map.set(nonce, (id, ws_ticket) => {
    map.delete(nonce);
    c6 = id;
    const obj = ConjureWorkerTickets;
    const result = obj.rememberCreatedProjectTicket(id, ws_ticket);
    metroRequire(id);
    if (closure_5 == null) {
      const tmp2Result = conjureRemixConnection;
      const acceptRemixResult = tmp2Result.acceptRemix(c3, id, copy);
      closure_5 = acceptRemixResult.catch(f127163);
    }
  });
  let obj2 = { name, remix_source_project_id: id.id, remix_share_ticket: share_ticket, nonce };
  const createRemix = tmp(7541).createRemix;
  tmp(7541);
  if (null != tmp6) {
    let obj3 = { guild_id: tmp6 };
    obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  const remix = createRemix(obj2);
  promise = remix.then((remix_preview) => {
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
      const acceptRemixResult = obj2.acceptRemix(c3, id, copy);
      closure_5 = acceptRemixResult.catch(f127163);
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
    copy,
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
let GuildStore = GuildStore_mod;
({ closeConnection: hasOwnProperty, ensureConnection: metroRequire } = ConjureConnectionStore);
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

export function isValidCopyName(str) {
  return str.trim().length >= ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH;
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c5;
        let copy;
        try {
          let name;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let closure_2 = tmp4;
              c1 = undefined;
              c2 = undefined;
              ({ name: c1, copy: c2 } = closure_1);
              name = undefined;
              copy = undefined;
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
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const tmp55 = c4;
              if (tmp55) {
                c7 = 3;
                return { value: null, done: true };
              } else {
                c4 = true;
                name = c1.trim();
                copy = true === c2;
                c5 = 1;
                let guildId;
                if (name != null) {
                  guildId = name.guildId;
                }
                const tmp23 = guildId === closure_0 && name.name === name && name.copy === copy;
                if (!tmp23) {
                  const obj3 = name;
                  if (name != null) {
                    obj3.abandon();
                  }
                  const obj6 = { name, copy };
                  name = closure_1_8(closure_131_0, closure_0, obj6, closure_131_1, closure_131_2);
                }
                c6 = 3;
                c7 = 1;
                const obj7 = { value: name.open(), done: false };
                return obj7;
              }
            }
          } else if (2 === c6) {
            c5 = 0;
            c4 = false;
            throw copy;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c4 = false;
            c7 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            const kept = value.ok || value.kept;
            if (!kept) {
              name = null;
            }
            c5 = 0;
            c4 = false;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp47) {
          copy = tmp47;
          if (0 === c5) {
            c7 = 3;
            throw tmp47;
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
