// Module ID: 11453
// Function ID: 11454
// Name: ConjureRemix
// Dependencies: [5, 4914, 7693, 6935, 7602, 572, 1112, 4245, 7674, 11454, 10071, 7667, 2]
// Exports: conjureCopyChangesType, createConjureRemix, isConjureRemixCreating, isValidCopyName

// Module 11453 (ConjureRemix)
import _modDef4245 from "module_4245" /* 4245 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6935 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7667 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 7674 */;
import conjureRemixConnection from "conjureRemixConnection" /* 11454 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildStore_mod from "GuildStore" /* 4914 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7693 */;
import Dispatcher from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let c7;

let hasOwnProperty;
let metroRequire;
function startRemix(id, guildId, arg2, arg3) {
  let c4;
  let copy;
  let name;
  let obj4;
  let shareTicket;
  const f128358 = () => "rejected";
  ({ name, copy } = arg2);
  ({ preloadPreview: importDefault, shareTicket, onReserved: dependencyMap } = arg3);
  GuildStore = undefined;
  let closure_5;
  let closure_6;
  map = undefined;
  let c8;
  let c9;
  let closure_11;
  let nonce;
  let promise;
  function accept(comma) {
    metroRequire(comma);
    if (metroRequire == null) {
      const obj = conjureRemixConnection;
      const acceptRemixResult = obj.acceptRemix(c4, comma, copy);
      metroRequire = acceptRemixResult.catch(f128358);
    }
    return metroRequire;
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
          let closure_1;
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
              c8 = true;
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
                const obj9 = { value: closure_129_10(v0.id), done: false };
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
                let c6 = null;
                c8 = false;
                const obj11 = { ok: false, message, kept: true };
                value = obj11;
              } else if ("rejected" === closure_1) {
                if (closure_129_5 != null) {
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
  const tmp2 = dependencyMap;
  const intl = copy(1112).intl;
  let closure_3 = intl.string(_modDef4245.Cn8H0Y);
  let tmp3 = copy(7674);
  let tmp4;
  const mintRemixTicket = tmp3.mintRemixTicket;
  id = id.id;
  if (null != shareTicket) {
    value = { share_ticket: shareTicket };
    tmp4 = value;
  }
  const mintRemixTicketResult = mintRemixTicket(id, tmp4);
  GuildStore = mintRemixTicketResult;
  mintRemixTicketResult.catch(() => {

  });
  closure_6 = null;
  map = null;
  c8 = false;
  c9 = false;
  let tmp6 = null;
  if (null != guildId) {
    let tmp7 = GuildStore;
    const guild = GuildStore.getGuild(guildId);
    let tmp9 = null;
    if (null != guild) {
      tmp9 = null;
      const tmpResult = tmp(7602);
      if (tmpResult.canStartConjureProject(guild, "ConjureRemix")) {
        tmp9 = guildId;
      }
    }
    tmp6 = tmp9;
  }
  closure_11 = tmp6;
  const tmpResult3 = tmp(10071);
  nonce = tmpResult3.createNonce();
  let result = map.set(nonce, (id, ws_ticket) => {
    map.delete(nonce);
    c7 = id;
    set.add(id);
    const obj = ConjureWorkerTickets;
    const result = obj.rememberCreatedProjectTicket(id, ws_ticket);
    metroRequire(id);
    if (metroRequire == null) {
      const tmp3Result = conjureRemixConnection;
      const acceptRemixResult = tmp3Result.acceptRemix(c4, id, copy);
      metroRequire = acceptRemixResult.catch(f128358);
    }
    if (dependencyMap != null) {
      tmp9(id, guildId);
    }
  });
  let obj2 = { name, remix_source_project_id: id.id, remix_share_ticket: shareTicket, nonce };
  const createRemix = tmp(7667).createRemix;
  tmp(7667);
  if (null != tmp6) {
    let obj3 = { guild_id: tmp6 };
    obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  const remix = createRemix(obj2);
  promise = remix.then((id) => {
    map.delete(nonce);
    set.delete(id.id);
    if (null != id.remix_preview) {
      const obj = ConjureActionCreators;
      obj.applyRemixPreview(id.id, id.remix_preview);
      const tmp6 = c9;
      if (!tmp6) {
        let tmp7;
        if (importDefault != null) {
          tmp7 = importDefault(id);
        }
        closure_5 = tmp7;
      }
    }
    id = id.id;
    metroRequire(id);
    if (metroRequire == null) {
      const obj2 = conjureRemixConnection;
      const acceptRemixResult = obj2.acceptRemix(c4, id, copy);
      metroRequire = acceptRemixResult.catch(f128358);
    }
    return id;
  }, () => {
    map.delete(nonce);
    if (null != c7) {
      set.delete(c7);
      hasOwnProperty(c7);
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
      const tmp = c8 || c9;
      if (!tmp) {
        c9 = true;
        promise.then((id) => {
          if (closure_1_5 != null) {
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
const set = new Set();
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
export function conjureCopyChangesType(install_scope, id) {
  return "guild" === install_scope.install_scope !== (null != id);
}
export function isConjureRemixCreating(projectId) {
  return set.has(projectId);
}
export function createConjureRemix(project, arg1, shareTicket) {
  let closure_0 = project;
  let closure_1 = arg1;
  let closure_2 = shareTicket;
  let obj = function _confirm() {
    obj = _asyncToGenerator(async (arg0, value, arg2) => {
      let c1;
      let c2;
      let closure_0 = arg0;
      closure_1 = value;
      let closure_2 = arg2;
      if (c8 === 2) {
        c8 = 3;
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
        let c6;
        let copy;
        try {
          let onReserved;
          let name;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c1 = undefined;
              c2 = undefined;
              ({ name: c1, copy: c2 } = closure_1);
              onReserved = closure_2;
              name = undefined;
              copy = undefined;
              value = undefined;
              c7 = 1;
              c8 = 1;
              return { value: "Path", done: true };
            }
          } else if (1 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const tmp58 = c4;
              if (tmp58) {
                c8 = 3;
                return { value: null, done: true };
              } else {
                c4 = true;
                name = c1.trim();
                copy = true === c2;
                c6 = 1;
                let guildId;
                if (onReserved != null) {
                  guildId = onReserved.guildId;
                }
                const tmp23 = guildId === closure_0 && onReserved.name === name && onReserved.copy === copy;
                if (!tmp23) {
                  const obj3 = onReserved;
                  if (onReserved != null) {
                    obj3.abandon();
                  }
                  const obj6 = { name, copy };
                  const obj7 = { preloadPreview, shareTicket, onReserved };
                  onReserved = closure_1_9(closure_132_0, closure_0, obj6, obj7);
                }
                c7 = 3;
                c8 = 1;
                const obj8 = { value: onReserved.open(), done: false };
                return obj8;
              }
            }
          } else if (2 === c7) {
            c6 = 0;
            c4 = false;
            throw copy;
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c4 = false;
            c8 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            const kept = value.ok || value.kept;
            if (!kept) {
              onReserved = null;
            }
            c6 = 0;
            c4 = false;
            c8 = 3;
            obj = { value, done: true };
            return obj;
          }
        } catch (tmp50) {
          copy = tmp50;
          if (0 === c6) {
            c8 = 3;
            throw tmp50;
          } else {
            c7 = 2;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let c3 = null;
  let c4 = false;
  obj = {
    confirm(arg0, arg1, arg2) {
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
