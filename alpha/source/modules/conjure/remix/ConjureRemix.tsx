// Module ID: 12299
// Function ID: 12300
// Name: ConjureRemix
// Dependencies: [5, 4784, 6967, 6622, 6865, 572, 1112, 4190, 6940, 12300, 8447, 6933, 2]
// Exports: createConjureRemix, isValidCopyName

// Module 12299 (ConjureRemix)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6622 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6933 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 6940 */;
import conjureRemixConnection from "conjureRemixConnection" /* 12300 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GuildStore_mod from "GuildStore" /* 4784 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 6967 */;
import Dispatcher from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c7, dependencyMap;

let hasOwnProperty;
let metroRequire;
function startRemix(id, guildId, arg2, arg3, share_ticket) {
  let c4;
  let closure_2;
  let copy;
  let name;
  let obj4;
  const f127813 = () => "rejected";
  _require = guildId;
  ({ name, copy } = arg2);
  dependencyMap = arg3;
  GuildStore = undefined;
  let closure_5;
  let closure_6;
  map = undefined;
  let c8;
  let c9;
  let c11;
  let nonce;
  let promise;
  function accept(comma) {
    metroRequire(comma);
    if (metroRequire == null) {
      const obj = conjureRemixConnection;
      const acceptRemixResult = obj.acceptRemix(c4, comma, copy);
      metroRequire = acceptRemixResult.catch(f127813);
    }
    return metroRequire;
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
                if (closure_129_11) {
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
  let closure_3 = intl.string(copy(4190).Cn8H0Y);
  const tmp3 = require("ConjureWorkerTickets");
  let tmp4;
  const mintRemixTicket = tmp3.mintRemixTicket;
  id = id.id;
  if (null != share_ticket) {
    value = { share_ticket };
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
  const guild = GuildStore.getGuild(guildId);
  let result = "guild" === id.install_scope && null != guild;
  if (result) {
    const tmpResult = tmp(6865);
    result = tmpResult.canStartConjureProject(guild, "ConjureRemix");
  }
  c11 = result;
  const tmpResult3 = tmp(8447);
  nonce = tmpResult3.createNonce();
  const result1 = map.set(nonce, (id, ws_ticket) => {
    map.delete(nonce);
    c7 = id;
    const obj = ConjureWorkerTickets;
    const result = obj.rememberCreatedProjectTicket(id, ws_ticket);
    metroRequire(id);
    if (metroRequire == null) {
      const tmp2Result = conjureRemixConnection;
      const acceptRemixResult = tmp2Result.acceptRemix(c4, id, copy);
      metroRequire = acceptRemixResult.catch(f127813);
    }
  });
  let obj2 = { name, remix_source_project_id: id.id, remix_share_ticket: share_ticket, nonce };
  const createRemix = tmp(6933).createRemix;
  tmp(6933);
  if (result) {
    let obj3 = { guild_id: guildId };
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
      const tmp5 = c9;
      if (!tmp5) {
        let tmp6;
        if (closure_2 != null) {
          tmp6 = closure_2(remix_preview);
        }
        closure_5 = tmp6;
      }
    }
    const id = remix_preview.id;
    metroRequire(id);
    if (metroRequire == null) {
      const obj2 = conjureRemixConnection;
      const acceptRemixResult = obj2.acceptRemix(c4, id, copy);
      metroRequire = acceptRemixResult.catch(f127813);
    }
    return remix_preview;
  }, () => {
    map.delete(nonce);
    if (null != c7) {
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
