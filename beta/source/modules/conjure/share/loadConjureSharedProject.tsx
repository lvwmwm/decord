// Module ID: 11719
// Function ID: 11720
// Name: loadConjureSharedProject
// Dependencies: [5, 2162, 6899, 11713, 1072, 10996, 572, 11714, 559, 6936, 11001, 2]
// Exports: default

// Module 11719 (loadConjureSharedProject)
import Constants from "Constants" /* 1072 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6936 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10996 */;
import conjureProjectLink from "conjureProjectLink" /* 11714 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6899 */;
import ConjureSharedProjectStore from "ConjureSharedProjectStore" /* 11713 */;
import Dispatcher from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let c6, c8, c9, map, set;

function resetSessionLoads() {
  if (null != obj2) {
    const backoffs = obj2.backoffs;
    const values = backoffs.values();
    for (const item10010 of values) {
      let cancelResult = item10010.cancel();
      continue;
    }
  }
}
function load() {
  return obj(...arguments);
}
let obj = function _load() {
  obj = _asyncToGenerator(async function(arg0, value, arg2) {
    function resolveStatus() {
      return closure_1_12(...arguments);
    }
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj4 = { value, done: true };
        return obj4;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c5;
      try {
        let closure_4;
        let closure_5;
        let c3;
        c7 = 2;
        const tmp4 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            let closure_3 = tmp4;
            closure_4 = undefined;
            closure_5 = undefined;
            const obj8 = conjureProjectLink;
            const result = obj8.conjureProjectLinkCode(closure_1, closure_2);
            c3 = result;
            const loading3 = closure_0.loading;
            loading3.add(result);
            const tmp74 = closure_0;
            const tmp75 = closure_1;
            const tmp76 = closure_2;
            if (null == status.getStatus(closure_1, closure_2)) {
              dispatchStatus(result, { type: "loading" });
            }
            closure_4 = null;
            c5 = 1;
            c6 = 2;
            c7 = 1;
            const obj6 = { value: resolveStatus(tmp75, tmp76, tmp74), done: false };
            return obj6;
          }
        } else {
          if (1 === tmp4) {
            c5 = 0;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = value;
            c5 = 0;
          }
          let loading = closure_0.loading;
          loading.delete(c3);
          if (closure_0 === closure_132_8) {
            obj2 = closure_132_0(closure_132_2[5]);
            if (obj2.isCurrentSession(closure_0.session)) {
              const backoffs = closure_0.backoffs;
              closure_5 = backoffs.get(c3);
              if (null == closure_4) {
                if (null == closure_5) {
                  const self = this;
                  const self2 = this;
                  const tmp57 = new closure_132_1(closure_132_2[8])(5000, 300000);
                  closure_5 = tmp57;
                  const backoffs3 = closure_0.backoffs;
                  const result1 = backoffs3.set(c3, closure_5);
                }
                closure_5.fail(() => {
                  let hasItem = closure_1_0 !== closure_2_8;
                  if (!hasItem) {
                    const loading = tmp.loading;
                    hasItem = loading.has(closure_1_3);
                  }
                  if (!hasItem) {
                    closure_2_10(closure_1_0, closure_1_1, closure_1_2);
                  }
                });
                c7 = 3;
                const obj7 = { value: undefined, done: true };
                return obj7;
              } else {
                const obj3 = closure_5;
                if (closure_5 != null) {
                  obj3.succeed();
                }
                const backoffs2 = closure_0.backoffs;
                backoffs2.delete(c3);
                closure_132_13(c3, closure_4);
              }
            }
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
          let hasItem;
          if (closure_132_8 != null) {
            const loading2 = tmp19.loading;
            hasItem = loading2.has(c3);
          }
          let tmp23 = true === hasItem;
          if (!tmp23) {
            status = closure_132_6.getStatus(closure_1, closure_2);
            let type;
            if (status != null) {
              type = status.type;
            }
            tmp23 = "loading" !== type;
          }
          if (!tmp23) {
            closure_132_13(c3, null);
          }
        }
      } catch (tmp68) {
        if (0 === c5) {
          c7 = 3;
          throw tmp68;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _resolveStatus() {
  let hydrated;
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let obj11;
    let obj13;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c7;
      let body;
      try {
        let conjureProjectId;
        let closure_4;
        let ticketValid;
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            conjureProjectId = undefined;
            closure_4 = undefined;
            ticketValid = undefined;
            body = undefined;
            const tmp89 = closure_0;
            if (!hydrated.isHydrated(closure_0)) {
              const items = [tmp89];
              c8 = 1;
              c9 = 1;
              const obj5 = { value: obj11.fetchApplications(items), done: false };
              obj11 = ApplicationActionCreatorsDefault;
              return obj5;
            }
          }
        } else if (1 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj6 = { value, done: true };
            return obj6;
          }
        } else if (2 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else if (closure_133_5.getProjectLimitFailureCode() === closure_133_7.INVALID_ACCESS) {
            c9 = 3;
            const obj8 = { value: { type: "info_only" }, done: true };
            return obj8;
          } else {
            ticketValid = false;
            c7 = 1;
            const tmp47 = closure_133_0(closure_133_2[5]);
            const session = closure_2.session;
            let c3 = closure_1;
            const getProject = tmp47.getProject;
            if (closure_1 == null) {
              c3 = undefined;
            }
            c8 = 4;
            c9 = 1;
            const obj9 = { value: getProject(conjureProjectId, undefined, session, c3), done: false };
            return obj9;
          }
        } else if (3 === c8) {
          c7 = 0;
          let closure_7 = body;
          const tmp30 = closure_133_1(closure_133_2[10])(closure_7);
          if (closure_133_7.INVALID_ACCESS !== tmp30) {
            if (closure_133_7.UNKNOWN_CONJURE_PROJECT !== tmp30) {
              throw closure_7;
            }
          }
          if (null != closure_1) {
            let obj10;
            const obj4 = closure_133_0(closure_133_2[7]);
            if (obj4.isConjureShareTicketExpired(closure_1)) {
              obj10 = { type: "expired" };
            }
            c9 = 3;
            const obj12 = { value: obj10, done: true };
            return obj12;
          }
          obj10 = { type: "no_access" };
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          body = value;
          const tmp7 = null != closure_1 && true === body.body.share_ticket_valid;
          ticketValid = tmp7;
          c7 = 0;
          if (null == closure_1) {
            const ticketOnlyProjectIds2 = closure_2.ticketOnlyProjectIds;
            ticketOnlyProjectIds2.delete(conjureProjectId);
          } else {
            const tmp11 = ticketValid && !closure_4;
            if (tmp11) {
              const ticketOnlyProjectIds = closure_2.ticketOnlyProjectIds;
              ticketOnlyProjectIds.add(conjureProjectId);
            }
          }
          obj = { type: "ready", projectId: conjureProjectId, ticketValid };
          c9 = 3;
          const obj15 = { value: obj, done: true };
          return obj15;
        }
        const application = closure_133_4.getApplication(closure_0);
        conjureProjectId = undefined;
        if (application != null) {
          conjureProjectId = application.conjureProjectId;
        }
        if (null == conjureProjectId) {
          c9 = 3;
          const obj16 = { value: { type: "unavailable" }, done: true };
          return obj16;
        } else {
          let tmp68 = null != closure_133_5.getProject(conjureProjectId);
          if (tmp68) {
            const ticketOnlyProjectIds3 = closure_2.ticketOnlyProjectIds;
            tmp68 = !ticketOnlyProjectIds3.has(conjureProjectId);
          }
          closure_4 = tmp68;
          if (null == closure_1) {
            const tmp72 = closure_4;
            if (tmp72) {
              const obj17 = { type: "ready", projectId: conjureProjectId, ticketValid: false };
              c9 = 3;
              const obj18 = { value: obj17, done: true };
              return obj18;
            }
          }
          c8 = 2;
          c9 = 1;
          const obj19 = { value: obj13.fetchProjectLimit(), done: false };
          obj13 = closure_133_0(closure_133_2[5]);
          return obj19;
        }
      } catch (tmp77) {
        body = tmp77;
        if (0 === c7) {
          c9 = 3;
          throw tmp77;
        } else {
          c8 = 3;
        }
      }
    }
  });
  return obj(...arguments);
};
function dispatchStatus(linkCode, status) {
  obj = Dispatcher;
  obj2 = { type: "CONJURE_SHARED_PROJECT_STATUS", linkCode, status };
  obj.dispatch(obj2);
}
const AbortCodes = Constants.AbortCodes;
let obj2 = null;
const subscription = Dispatcher.subscribe("LOGOUT", resetSessionLoads);
let result = size.fileFinishedImporting("modules/conjure/share/loadConjureSharedProject.tsx");

export default function loadConjureSharedProject(arg0) {
  let obj3;
  let set1;
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  let isCurrentSessionResult = null != obj2;
  if (isCurrentSessionResult) {
    obj = ConjureActionCreators;
    isCurrentSessionResult = obj.isCurrentSession(obj2.session);
  }
  if (!isCurrentSessionResult) {
    resetSessionLoads();
    obj2 = { session: obj3.currentSession(), loading: set, backoffs: map, ticketOnlyProjectIds: set1 };
    const _Set = Set;
    const self = this;
    const self2 = this;
    obj3 = ConjureActionCreators;
    const _Map = Map;
    const self3 = this;
    const self4 = this;
    set = new Set();
    const _Set2 = Set;
    const self5 = this;
    const self6 = this;
    map = new Map();
    set1 = new Set();
  }
  if (null != obj2.session.userId) {
    const obj4 = conjureProjectLink;
    const result = obj4.conjureProjectLinkCode(arg0, tmp);
    const loading = tmp17.loading;
    if (!loading.has(result)) {
      const backoffs = tmp17.backoffs;
      const value = backoffs.get(result);
      let pending;
      if (value != null) {
        pending = value.pending;
      }
      if (true !== pending) {
        const status = ConjureSharedProjectStore.getStatus(arg0, tmp);
        let tmp22 = null == status;
        if (!tmp22) {
          tmp22 = "ready" === status.type && null == ConjureProjectStore.getProject(status.projectId);
          const tmp23 = "ready" === status.type && null == ConjureProjectStore.getProject(status.projectId);
        }
        if (tmp22) {
          load(obj2, arg0, tmp);
        }
      }
    }
  }
};
