// Module ID: 11027
// Function ID: 11028
// Name: ConjureRemix
// Dependencies: [5, 11028, 6980, 572, 1113, 3995, 11059, 11144, 10493, 11054, 2]
// Exports: copyProjectName, createConjureRemix, isValidCopyName

// Module 11027 (ConjureRemix)
import ConjureProjectTypes from "ConjureProjectTypes" /* 6980 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 11028 */;
import Dispatcher from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let c8;

let closure_4;
let hasOwnProperty;
let metroRequire;
({ closeConnection: closure_4, ensureConnection: hasOwnProperty, sendUserMessage: metroRequire } = ConjureConnectionStore);
let c7 = " (Copy)";
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

export function copyProjectName(name) {
  return "" + name.slice(0, ConjureProjectTypes.MAX_PROJECT_NAME_LENGTH - 7) + c7;
}
export function isValidCopyName(first2) {
  return first2.trim().length >= ConjureProjectTypes.MIN_PROJECT_NAME_LENGTH;
}
export function createConjureRemix(project, arg1) {
  let closure_0 = project;
  let closure_1 = arg1;
  let obj = function _confirm() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let c1;
      let tmp3;
      let v2;
      function startRemix(id, guild_id, name, arg3) {
        let str;
        const f142512 = () => "rejected";
        closure_0 = guild_id;
        closure_1 = arg3;
        function accept(comma) {
          closure_2_5(comma);
          if (closure_5 == null) {
            obj = closure_2_0(closure_2_2[7]);
            const acceptRemixResult = obj.acceptRemix(closure_3, comma);
            closure_5 = acceptRemixResult.catch(f142512);
          }
          return closure_5;
        }
        value = function _open() {
          obj = closure_2_3(function*(arg0, value) {
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
                      c5 = null;
                      c7 = false;
                      const obj11 = { ok: false, message, kept: true };
                      value = obj11;
                    } else if ("rejected" === closure_1) {
                      if (closure_129_4 != null) {
                        tmp10();
                      }
                      closure_1_4(v0.id);
                      const obj4 = v0(c2[9]);
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
        const intl = closure_0(closure_2[4]).intl;
        closure_2 = intl.string(closure_1(closure_2[5]).Cn8H0Y);
        value = closure_0(closure_2[6]);
        const mintRemixTicketResult = value.mintRemixTicket(id.id);
        closure_3 = mintRemixTicketResult;
        mintRemixTicketResult.catch(() => {

        });
        let closure_5 = null;
        let c6 = null;
        c7 = false;
        map = false;
        let obj2 = closure_0(closure_2[8]);
        const nonce = obj2.createNonce();
        let result = map.set(nonce, (id, ws_ticket) => {
          map.delete(nonce);
          c6 = id;
          obj = closure_2_0(closure_2_2[6]);
          const result = obj.rememberCreatedProjectTicket(id, ws_ticket);
          closure_2_5(id);
          const tmp2 = closure_2_0;
          const tmp3 = closure_2_2;
          if (closure_5 == null) {
            const tmp2Result = tmp2(tmp3[7]);
            const acceptRemixResult = tmp2Result.acceptRemix(closure_3, id);
            closure_5 = acceptRemixResult.catch(f142512);
          }
        });
        let obj3 = { name, guild_id, install_scope: str, remix_source_project_id: id.id, nonce };
        str = id.install_scope;
        const createRemix = closure_0(closure_2[9]).createRemix;
        const tmp4 = closure_0(closure_2[9]);
        if (str == null) {
          str = "guild";
        }
        const remix = createRemix(obj3);
        const promise = remix.then((remix_preview) => {
          map.delete(nonce);
          if (null != remix_preview.remix_preview) {
            obj = closure_2_0(closure_2_2[9]);
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
          closure_2_5(id);
          if (closure_5 == null) {
            const obj2 = closure_2_0(closure_2_2[7]);
            const acceptRemixResult = obj2.acceptRemix(closure_3, id);
            closure_5 = acceptRemixResult.catch(f142512);
          }
          return remix_preview;
        }, () => {
          map.delete(nonce);
          if (null != c6) {
            closure_2_4(c6);
          }
          return null;
        });
        let obj4 = {
          guildId: guild_id,
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
                  closure_4(id.id);
                }
              });
            }
          }
        };
        return obj4;
      }
      let closure_0 = arg0;
      closure_1 = value;
      if (c7 === 2) {
        c7 = 3;
        let str = "Generator functions may not be called on executing generators";
        throw new TypeError("Generator functions may not be called on executing generators");
      } else {
        const flag = true;
        const flag2 = false;
        if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c5;
          try {
            let closure_3;
            c7 = 2;
            let tmp4 = c6;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                let obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_2 = tmp4;
                c1 = undefined;
                c2 = undefined;
                ({ name: c1, prompt: c2 } = closure_1);
                closure_3 = undefined;
                value = undefined;
                c6 = 1;
                c7 = 1;
                return { value: "flexDirection", done: true };
              }
            } else if (1 === tmp4) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 3;
                let obj5 = { value, done: true };
                return obj5;
              } else {
                const tmp51 = c3;
                if (tmp51) {
                  c7 = 3;
                  return { value: null, done: true };
                } else {
                  c3 = true;
                  closure_3 = c1.trim();
                  c5 = 1;
                  let guildId;
                  if (c2 != null) {
                    guildId = c2.guildId;
                  }
                  let tmp24 = guildId === closure_0;
                  if (tmp24) {
                    tmp24 = c2.name === closure_3;
                  }
                  if (!tmp24) {
                    let obj3 = c2;
                    if (c2 != null) {
                      obj3.abandon();
                    }
                    const tmp33 = closure_0;
                    c2 = startRemix(closure_131_0, closure_0, closure_3, closure_131_1);
                  }
                  c6 = 3;
                  c7 = 1;
                  let obj6 = { value: c2.open(), done: false };
                  return obj6;
                }
              }
            } else if (2 === tmp4) {
              c5 = 0;
              c3 = false;
              throw value;
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c3 = false;
              c7 = 3;
              let obj7 = { value, done: true };
              return obj7;
            } else {
              if (value.ok) {
                const tmp10 = c2;
                const tmp11 = c6(value.projectId, c2, undefined, { remix: true });
              } else {
                let tmp5 = value;
                if (!value.kept) {
                  let tmp6 = closure_3;
                  c2 = null;
                }
              }
              c5 = 0;
              c3 = false;
              c7 = 3;
              obj = { value, done: true };
              return obj;
            }
          } catch (tmp40) {
            value = tmp40;
            if (0 === c5) {
              c7 = 3;
              throw tmp40;
            } else {
              c6 = 2;
            }
          }
        }
      }
    });
    return obj(...arguments);
  };
  let c2 = null;
  let c3 = false;
  obj = {
    confirm(arg0, arg1) {
      return obj(...arguments);
    },
    dismiss() {
      let abandonResult;
      obj = c2;
      if (c2 != null) {
        abandonResult = obj.abandon();
      }
      return abandonResult;
    }
  };
  return obj;
}
