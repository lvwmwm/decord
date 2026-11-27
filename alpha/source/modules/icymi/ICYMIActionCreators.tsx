// Module ID: 8924
// Function ID: 8925
// Name: ICYMIActionCreators
// Dependencies: [5, 8925, 502, 1387, 1071, 8921, 572, 1242, 8922, 8926, 1285, 8927, 8928, 4868, 2]

// Module 8924 (ICYMIActionCreators)
import Constants from "Constants" /* 1071 */;
import DiscoverRequestState from "DiscoverRequestState" /* 8921 */;
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 8922 */;
import ICYMIExperiment from "ICYMIExperiment" /* 8927 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 8925 */;
import AuthenticationStore_mod from "AuthenticationStore" /* 502 */;
import UserStore_mod from "UserStore" /* 1387 */;
import Dispatcher_mod from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c8, constants, identity;

function notifyDiscoverRequestListeners() {
  for (const item10005 of set) {
    let item10005Result = item10005();
    continue;
  }
}
function setDiscoverUser(arg0) {
  if (id !== arg0) {
    c16 = null;
    closure_14 = {};
    c11 = 0;
    c12 = 0;
    const obj = c9;
    if (c9 != null) {
      obj.abort();
    }
    closure_19 = {};
    const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
    discoverRequestGuard.resetSession();
    id = arg0;
    authSessionIdHash = null;
  }
}
function setDiscoverAuthSessionIdHash(arg0) {
  if (null != arg0) {
    const tmp2 = null != authSessionIdHash && authSessionIdHash !== arg0;
    if (tmp2) {
      c16 = null;
      closure_14 = {};
      c11 = 0;
      c12 = 0;
      const obj = c9;
      if (c9 != null) {
        obj.abort();
      }
      closure_19 = {};
      const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
      discoverRequestGuard.resetSession();
    }
    authSessionIdHash = arg0;
  }
}
let timeout = function _dispatchDiscoverPickerCommit() {
  const obj = _asyncToGenerator(async (identity, clearSnapshot) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj3;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              c5 = 1;
              c6 = 2;
              c7 = 1;
              const obj6 = { type: "DISCOVER_PICKER_COMMIT", identity, clearSnapshot };
              const obj7 = { value: obj3.dispatch(obj6), done: false };
              obj3 = Dispatcher;
              return obj7;
            }
          } else {
            if (1 === c6) {
              c5 = 0;
              identity = closure_4;
              const obj2 = closure_131_1(closure_131_2[7]);
              obj2.captureException(identity);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              c5 = 0;
            }
            c7 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp17) {
          closure_4 = tmp17;
          if (0 === c5) {
            c7 = 3;
            throw tmp17;
          } else {
            c6 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function fetchDiscoverDehydrated(arg0) {
  let closure_5;
  let closure_6;
  let isDiscoverPickerCommit;
  function captureRequestErrors() {
    return obj(...arguments);
  }
  ({ isInitialLoad: require, isReloading: importDefault, isDiscoverPickerCommit } = arg0);
  let closure_4;
  AuthenticationStore = undefined;
  UserStore = undefined;
  authSessionIdHash = undefined;
  closure_8 = undefined;
  c9 = undefined;
  let closure_10;
  closure_14 = undefined;
  function isSameUser() {
    let isAuthenticatedResult = closure_6 === closure_19 && null != id && AuthenticationStore.isAuthenticated() && AuthenticationStore.getId() === id;
    if (isAuthenticatedResult) {
      const currentUser = UserStore.getCurrentUser();
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      isAuthenticatedResult = id === id;
    }
    if (isAuthenticatedResult) {
      authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
      if (authSessionIdHash == null) {
        authSessionIdHash = null;
      }
      isAuthenticatedResult = authSessionIdHash === authSessionIdHash.authSessionIdHash;
    }
    return isAuthenticatedResult;
  }
  function canRun() {
    let canRunResult = isSameUser();
    if (canRunResult) {
      const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
      canRun = discoverRequestGuard.canRun;
      obj = WaterwheelsDiscoverExperiment;
      canRunResult = canRun(authSessionIdHash, obj.getWaterwheelsDiscoverEnabled("fetchDehydrated"));
    }
    return canRunResult;
  }
  function canApply() {
    let canRunResult = isSameUser();
    if (canRunResult) {
      const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
      canRun = discoverRequestGuard.canRun;
      obj = WaterwheelsDiscoverExperiment;
      canRunResult = canRun(authSessionIdHash, obj.getWaterwheelsDiscoverEnabled("fetchDehydrated"));
    }
    if (canRunResult) {
      canRunResult = closure_5 === closure_14;
    }
    if (canRunResult) {
      const discoverRequestGuard2 = DiscoverRequestState.discoverRequestGuard;
      canRunResult = discoverRequestGuard2.matches(authSessionIdHash);
    }
    return canRunResult;
  }
  let obj = function _runRequest() {
    let value;
    obj = _asyncToGenerator(async function(arg0, value) {
      let abortController;
      let closure_1;
      let obj12;
      let obj14;
      let picks2;
      let tmp59;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c7;
        let signal;
        try {
          let closure_0;
          let uRLSearchParams;
          let closure_2;
          let c3;
          let picks;
          let startTime;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_0 = undefined;
              uRLSearchParams = undefined;
              closure_2 = undefined;
              c3 = undefined;
              picks = undefined;
              startTime = undefined;
              signal = undefined;
              constants = undefined;
              c8 = 1;
              c9 = 1;
              const obj6 = { value, done: false };
              return obj6;
            }
          } else {
            if (1 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                if (closure_133_12()) {
                  const tmp90 = closure_133_2;
                  if (tmp90) {
                    closure_0 = closure_133_4;
                    if (closure_133_4 == null) {
                      closure_0 = c16;
                    }
                    if (closure_133_13()) {
                      const obj10 = { type: "DISCOVER_REQUEST_STARTED", identity: discoverRequest };
                      c8 = 2;
                      c9 = 1;
                      const obj13 = { value: obj14.dispatch(obj10), done: false };
                      obj14 = picks2(closure_2[6]);
                      return obj13;
                    }
                  }
                }
                c9 = 3;
                return { value: "HermesInternal", done: null };
              }
            } else if (2 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                const obj15 = { value, done: true };
                return obj15;
              } else {
                c8 = true;
              }
            } else if (3 === c8) {
              c7 = 0;
              const tmp78 = signal;
              if (c9 === abortController) {
                c9 = null;
              }
              const tmp82 = isReloading && closure_133_11();
              if (tmp82) {
                const obj9 = picks2(closure_2[6]);
                obj9.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
              }
              throw tmp78;
            } else if (4 === c8) {
              c7 = 1;
              closure_2.return();
              throw signal;
            } else if (5 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 0;
                if (c9 === abortController) {
                  c9 = null;
                }
                const tmp68 = isReloading && closure_133_11();
                if (tmp68) {
                  const obj7 = picks2(closure_2[6]);
                  obj7.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
                }
                c9 = 3;
                const obj16 = { value, done: true };
                return obj16;
              } else {
                constants = value;
                if (closure_133_13()) {
                  if ("broker_error" !== constants.body.error_code) {
                    const obj17 = { type: "LOAD_ICYMI_DEHYDRATED", items: constants.body.items, loadId: constants.body.load_id, startTime, isReloading, isInitialLoad: tmp59, discoverRequest };
                    tmp59 = null != closure_0;
                    const dispatch = picks2(closure_2[6]).dispatch;
                    const tmp53 = picks2(closure_2[6]);
                    if (!tmp59) {
                      tmp59 = closure_133_0;
                    }
                    c8 = 6;
                    c9 = 1;
                    const obj18 = { value: dispatch(obj17), done: false };
                    return obj18;
                  }
                  if (0 === constants.body.items.length) {
                    const _Error = Error;
                    const self = this;
                    const self2 = this;
                    const error = new Error("Discover feed failed");
                    throw error;
                  }
                } else {
                  c7 = 0;
                  if (c9 === abortController) {
                    c9 = null;
                  }
                  const tmp35 = isReloading && closure_133_11();
                  if (tmp35) {
                    const obj4 = picks2(closure_2[6]);
                    obj4.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
                  }
                  c9 = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              if (c9 === abortController) {
                c9 = null;
              }
              const tmp26 = isReloading && closure_133_11();
              if (tmp26) {
                const obj2 = picks2(closure_2[6]);
                obj2.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
              }
              c9 = 3;
              const obj19 = { value, done: true };
              return obj19;
            } else {
              const tmp7 = closure_133_13() && null == constants.body.error_code;
              if (tmp7) {
                const tmp9 = picks;
                if (tmp9) {
                  c15 = true;
                }
                if (c16 === closure_0) {
                  c16 = null;
                }
              }
              c7 = 0;
              if (c9 === abortController) {
                c9 = null;
              }
              const tmp17 = isReloading && closure_133_11();
              if (tmp17) {
                obj = picks2(closure_2[6]);
                obj.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
              }
            }
            if (closure_133_12()) {
              const tmp106 = isReloading;
              if (tmp106) {
                const obj11 = picks2(closure_2[6]);
                obj11.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: true });
              }
              c7 = 1;
              const _Date = Date;
              if (Date.now() < canRun) {
                let closure_9 = canRun;
                const _Error2 = Error;
                const self5 = this;
                const self6 = this;
                const error1 = new Error("Discover is rate limited");
                throw error1;
              } else {
                const _URLSearchParams = URLSearchParams;
                const self7 = this;
                const self8 = this;
                uRLSearchParams = new URLSearchParams();
                picks = undefined;
                if (closure_0 != null) {
                  picks = closure_0.picks;
                }
                picks2 = picks;
                if (picks == null) {
                  picks2 = picks.getPicks();
                }
                closure_2 = picks2;
                let closure_3 = closure_2;
                closure_2 = closure_2[Symbol.iterator]();
                while (closure_2 !== undefined) {
                  c3 = tmp121;
                  let appendResult = uRLSearchParams.append("game_ids", c3);
                  c7 = 1;
                  continue;
                }
                let tmp128 = null != closure_0;
                if (!tmp128) {
                  const tmp131 = !c15 && closure_2.length > 0;
                  tmp128 = tmp131;
                }
                picks = tmp128;
                const tmp135 = picks;
                if (tmp135) {
                  uRLSearchParams.append("refresh", "true");
                }
                const _Date2 = Date;
                startTime = Date.now();
                let closure_11 = startTime;
                const _AbortController = AbortController;
                const self3 = this;
                const self4 = this;
                abortController = new AbortController();
                signal = abortController.signal;
                c8 = 5;
                c9 = 1;
                const obj20 = {
                  value: obj12.withDiscoverRequestDeadline(abortController, () => {
                              const HTTP = closure_0(closure_2[10]).HTTP;
                              const request = { url: constants.GRAVITY_ITEMS_DEHYDRATED, query: closure_1_1.toString(), rejectWithError: false, failImmediatelyWhenRateLimited: true, signal, timeout };
                              const get = HTTP.get;
                              timeout = { deadline: closure_0(closure_2[9]).DISCOVER_REQUEST_DEADLINE_MS };
                              return get(request);
                            }),
                  done: false
                };
                obj12 = closure_0(closure_2[9]);
                return obj20;
              }
            }
          }
        } catch (tmp156) {
          signal = tmp156;
          if (0 === c7) {
            c9 = 3;
            throw tmp156;
          } else if (1 === tmp158) {
            c8 = 3;
          } else {
            c8 = 4;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _captureRequestErrors() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let bound;
      let obj4;
      let status;
      function runRequest() {
        return closure_1_15(...arguments);
      }
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c4;
        try {
          let closure_2;
          let retry_after;
          let closure_1;
          let DEFAULT_RATE_LIMIT_RETRY_AFTER_SECS;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              closure_2 = tmp;
              retry_after = undefined;
              closure_1 = undefined;
              DEFAULT_RATE_LIMIT_RETRY_AFTER_SECS = undefined;
              c4 = 2;
              c5 = 3;
              c6 = 1;
              const obj6 = { value: runRequest(), done: false };
              return obj6;
            }
          } else if (1 === c5) {
            c4 = 0;
            closure_10 = closure_10 - 1;
            closure_1_20();
            throw status;
          } else {
            if (2 === c5) {
              c4 = 1;
              const tmp25 = closure_130_8;
              if (tmp25) {
                if (closure_130_13()) {
                  if (null != status) {
                    if (typeof status === "object") {
                      if ("status" in status) {
                        if (429 === status.status) {
                          retry_after = status;
                          const retryAfter = retry_after.retryAfter;
                          retry_after = retryAfter;
                          if (retryAfter == null) {
                            const body = retry_after.body;
                            retry_after = undefined;
                            if (body != null) {
                              retry_after = body.retry_after;
                            }
                          }
                          closure_1 = retry_after;
                          if (typeof closure_1 === "number") {
                            const _Number = Number;
                            if (Number.isFinite(closure_1)) {
                              if (closure_1 >= 0) {
                                const _Math = Math;
                                DEFAULT_RATE_LIMIT_RETRY_AFTER_SECS = Math.max(1, closure_1);
                              }
                              const _Math2 = Math;
                              const _Date = Date;
                              bound = Math.max(bound, Date.now() + 1000 * DEFAULT_RATE_LIMIT_RETRY_AFTER_SECS);
                            }
                          }
                          DEFAULT_RATE_LIMIT_RETRY_AFTER_SECS = retry_after(closure_2[10]).DEFAULT_RATE_LIMIT_RETRY_AFTER_SECS;
                        }
                      }
                    }
                  }
                  c4 = 3;
                  const obj7 = { type: "DISCOVER_REQUEST_FAILED", identity, retryAfterAt: bound };
                  c5 = 5;
                  c6 = 1;
                  const obj8 = { value: obj4.dispatch(obj7), done: false };
                  obj4 = closure_1(closure_2[6]);
                  return obj8;
                }
              }
            } else if (3 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                closure_10 = closure_10 - 1;
                closure_1_20();
                c6 = 3;
                const obj9 = { value, done: true };
                return obj9;
              } else {
                c4 = 1;
              }
            } else if (4 === c5) {
              c4 = 1;
              closure_4 = status;
              const obj2 = closure_1(closure_2[7]);
              obj2.captureException(closure_4);
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 0;
              closure_10 = closure_10 - 1;
              closure_1_20();
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c4 = 1;
            }
            c4 = 0;
            closure_10 = closure_10 - 1;
            closure_1_20();
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp64) {
          status = tmp64;
          if (0 === c4) {
            c6 = 3;
            throw tmp64;
          } else if (1 === c4) {
            c5 = 1;
          } else if (2 === c4) {
            c5 = 2;
          } else {
            c5 = 4;
          }
        }
      }
    });
    return obj(...arguments);
  };
  let currentUser = UserStore.getCurrentUser();
  id = undefined;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let tmp3 = null;
  if (isDiscoverPickerCommit) {
    tmp3 = obj;
  }
  closure_4 = tmp3;
  AuthenticationStore = closure_14;
  UserStore = closure_19;
  let discoverRequestGuard = require("DiscoverRequestState").discoverRequestGuard;
  const observeGate = discoverRequestGuard.observeGate;
  obj = require("WaterwheelsDiscoverExperiment");
  observeGate(obj.getWaterwheelsDiscoverEnabled("fetchDehydrated"));
  let discoverRequestGuard2 = require("DiscoverRequestState").discoverRequestGuard;
  const capture = discoverRequestGuard2.capture;
  if (id == null) {
    id = null;
  }
  authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
  if (authSessionIdHash == null) {
    authSessionIdHash = null;
  }
  authSessionIdHash = capture(id, authSessionIdHash);
  closure_8 = false;
  c9 = null;
  closure_10 = null;
  closure_14 = closure_8;
  closure_10 = closure_10 + 1;
  const tmp6 = captureRequestErrors();
  closure_8 = tmp6;
  let tmp7 = notifyDiscoverRequestListeners();
  return tmp6;
}
let AuthenticationStore = AuthenticationStore_mod;
let UserStore = UserStore_mod;
const Endpoints = Constants.Endpoints;
let closure_8 = Promise.resolve();
let c9 = null;
let c10 = 0;
let c11 = 0;
let c12 = 0;
const set = new Set();
let closure_14 = {};
let c15 = false;
let c16 = null;
let tmp3 = null;
if (AuthenticationStore.isAuthenticated()) {
  let id = AuthenticationStore.getId();
  if (id == null) {
    id = null;
  }
  tmp3 = id;
}
id = tmp3;
let tmp5 = null;
if (null != tmp3) {
  let authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
  if (authSessionIdHash == null) {
    authSessionIdHash = null;
  }
  tmp5 = authSessionIdHash;
}
function resetDiscoverAccount() {
  c16 = null;
  closure_14 = {};
  c11 = 0;
  c12 = 0;
  const obj = c9;
  if (c9 != null) {
    obj.abort();
  }
  closure_19 = {};
  const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
  discoverRequestGuard.resetSession();
  id = null;
  authSessionIdHash = null;
}
authSessionIdHash = tmp5;
let closure_19 = {};
let Dispatcher = Dispatcher_mod;
const subscription = Dispatcher.subscribe("LOGOUT", resetDiscoverAccount);
Dispatcher = Dispatcher_mod;
const subscription1 = Dispatcher.subscribe("LOGIN_SUCCESS", resetDiscoverAccount);
Dispatcher = Dispatcher_mod;
const subscription2 = Dispatcher.subscribe("LOGIN_RESET", (isMultiAccount) => {
  if (!isMultiAccount.isMultiAccount) {
    c16 = null;
    closure_14 = {};
    c11 = 0;
    c12 = 0;
    const obj = c9;
    if (c9 != null) {
      obj.abort();
    }
    closure_19 = {};
    const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
    discoverRequestGuard.resetSession();
    id = null;
    authSessionIdHash = null;
  }
});
Dispatcher = Dispatcher_mod;
const subscription3 = Dispatcher.subscribe("AGE_GATE_LOGOUT_UNDERAGE_NEW_USER", resetDiscoverAccount);
Dispatcher = Dispatcher_mod;
const subscription4 = Dispatcher.subscribe("CLOSE_SUSPENDED_USER", resetDiscoverAccount);
Dispatcher = Dispatcher_mod;
const subscription5 = Dispatcher.subscribe("CONNECTION_CLOSED", (code) => {
  if (4004 === code.code) {
    c16 = null;
    closure_14 = {};
    c11 = 0;
    c12 = 0;
    const obj = c9;
    if (c9 != null) {
      obj.abort();
    }
    closure_19 = {};
    const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
    discoverRequestGuard.resetSession();
    id = null;
    authSessionIdHash = null;
  }
});
Dispatcher = Dispatcher_mod;
const subscription6 = Dispatcher.subscribe("CONNECTION_OPEN", (authSessionIdHash) => {
  authSessionIdHash = authSessionIdHash.authSessionIdHash;
  id = authSessionIdHash.user.id;
  if (id !== id) {
    c16 = null;
    closure_14 = {};
    c11 = 0;
    c12 = 0;
    const obj = c9;
    if (c9 != null) {
      obj.abort();
    }
    closure_19 = {};
    const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
    discoverRequestGuard.resetSession();
    authSessionIdHash = null;
  }
  if (null != authSessionIdHash) {
    const tmp7 = null != authSessionIdHash && authSessionIdHash !== authSessionIdHash;
    if (tmp7) {
      c16 = null;
      closure_14 = {};
      c11 = 0;
      c12 = 0;
      const obj2 = c9;
      if (c9 != null) {
        obj2.abort();
      }
      closure_19 = {};
      const discoverRequestGuard2 = DiscoverRequestState.discoverRequestGuard;
      discoverRequestGuard2.resetSession();
    }
  }
});
Dispatcher = Dispatcher_mod;
const subscription7 = Dispatcher.subscribe("AUTH_SESSION_CHANGE", (authSessionIdHash) => {
  authSessionIdHash = authSessionIdHash.authSessionIdHash;
  if (null != authSessionIdHash) {
    const tmp2 = null != authSessionIdHash && authSessionIdHash !== authSessionIdHash;
    if (tmp2) {
      c16 = null;
      closure_14 = {};
      c11 = 0;
      c12 = 0;
      const obj = c9;
      if (c9 != null) {
        obj.abort();
      }
      closure_19 = {};
      const discoverRequestGuard = DiscoverRequestState.discoverRequestGuard;
      discoverRequestGuard.resetSession();
    }
  }
});
timeout = {
  fetchPopularGuildsFromCategories(stateFromStoresArray1, sum) {
    let closure_0 = stateFromStoresArray1;
    let closure_1 = sum;
    return (async (arg0, value) => {
      let obj5;
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          let offset;
          let guilds;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              offset = tmp;
              const category_ids = tmp4;
              guilds = undefined;
              c3 = 1;
              const HTTP = category_ids(closure_2[10]).HTTP;
              const request = { url: constants.GRAVITY_TOPIC_GUILDS, body: obj5, rejectWithError: false };
              obj5 = { category_ids, offset };
              c4 = 2;
              c5 = 1;
              const obj6 = { value: HTTP.post(request), done: false };
              return obj6;
            }
          } else if (1 === c4) {
            c3 = 0;
            offset = closure_2;
            const obj4 = offset(closure_2[7]);
            obj4.captureException(offset);
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            guilds = value.body.guilds;
            const obj8 = { type: "LOAD_ICYMI_POPULAR_GUILDS", categoryIds: closure_129_0, guilds, offset: closure_129_1 };
            const obj = offset(closure_2[6]);
            obj.dispatch(obj8);
            c3 = 0;
            c5 = 3;
            return { value: true, done: true };
          }
        } catch (tmp21) {
          closure_2 = tmp21;
          if (0 === c3) {
            c5 = 3;
            throw tmp21;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  subscribeDiscoverRequests(requestWhenReady) {
    let closure_0 = requestWhenReady;
    set.add(requestWhenReady);
    return () => {
      set.delete(requestWhenReady);
    };
  },
  hasDiscoverRequestInFlight() {
    return c10 > 0;
  },
  fetchDehydrated(arg0) {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    return (async (arg0, value) => {
      let c0;
      let isReloading;
      let obj12;
      let obj18;
      function dispatchDiscoverPickerCommit() {
        return closure_1_23(...arguments);
      }
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
        try {
          let picks;
          let isInitialLoad;
          let startTime;
          let HTTP;
          let _null;
          c8 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              picks = tmp;
              isInitialLoad = undefined;
              isReloading = undefined;
              startTime = undefined;
              HTTP = undefined;
              ({ isInitialLoad: c0, isReloading } = obj);
              const forceRefresh = obj.forceRefresh;
              currentUser = currentUser.getCurrentUser();
              id = undefined;
              const tmp62 = setDiscoverUser;
              if (currentUser != null) {
                id = currentUser.id;
              }
              isInitialLoad = id;
              if (id == null) {
                isInitialLoad = null;
              }
              tmp62(isInitialLoad);
              setDiscoverAuthSessionIdHash(authSessionIdHash.getAuthSessionIdHash());
              let isDiscoverPickerCommit = tmp61.isDiscoverPickerCommit;
              const obj5 = authSessionIdHash;
              if (isDiscoverPickerCommit) {
                isDiscoverPickerCommit = null != closure_1_17;
              }
              if (isDiscoverPickerCommit) {
                const obj6 = closure_1_9;
                if (closure_1_9 != null) {
                  obj6.abort();
                }
                closure_14 = {};
                const obj7 = { picks: picks.getPicks() };
                const discoverRequestGuard = isInitialLoad(startTime[5]).discoverRequestGuard;
                const observeGate = discoverRequestGuard.observeGate;
                const obj8 = isInitialLoad(startTime[8]);
                observeGate(obj8.getWaterwheelsDiscoverEnabled("fetchDehydrated"));
                const discoverRequestGuard2 = isInitialLoad(startTime[5]).discoverRequestGuard;
                discoverRequestGuard2.commitPicker();
                const discoverRequestGuard3 = isInitialLoad(startTime[5]).discoverRequestGuard;
                const capture = discoverRequestGuard3.capture;
                authSessionIdHash = obj5.getAuthSessionIdHash();
                _null = authSessionIdHash;
                const tmp28 = closure_1_17;
                if (authSessionIdHash == null) {
                  _null = null;
                }
                const clearDiscoverSnapshot = tmp61.clearDiscoverSnapshot;
                startTime = clearDiscoverSnapshot;
                const captureResult = capture(tmp28, _null);
                if (clearDiscoverSnapshot == null) {
                  startTime = false;
                }
                dispatchDiscoverPickerCommit(captureResult, startTime);
              }
              const obj9 = isInitialLoad(startTime[11]);
              if (obj9.icymiEnabled("fetchDehydrated")) {
                const tmp34Result = isInitialLoad(startTime[8]);
                if (tmp34Result.getWaterwheelsDiscoverEnabled("fetchDehydrated")) {
                  if (obj.isDiscoverBackground) {
                    c8 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                  c8 = 3;
                  const obj10 = { value: fetchDiscoverDehydrated(obj), done: true };
                  return obj10;
                } else if (!obj.isDiscoverPickerCommit) {
                  if (isReloading) {
                    const obj11 = _null(startTime[6]);
                    obj11.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: true });
                  }
                  currentUser = 1;
                  const _Date = Date;
                  startTime = Date.now();
                  HTTP = tmp34(startTime[10]).HTTP;
                  const request = { url: constants.GRAVITY_ITEMS_DEHYDRATED, query: obj12, rejectWithError: false };
                  obj12 = { refresh: forceRefresh };
                  constants = 2;
                  c8 = 1;
                  const obj13 = { value: HTTP.get(request), done: false };
                  return obj13;
                }
              }
            }
          } else if (1 === constants) {
            currentUser = 0;
            picks = authSessionIdHash;
            const obj4 = _null(startTime[7]);
            obj4.captureException(picks);
          } else if (2 === constants) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              currentUser = 0;
              c8 = 3;
              const obj14 = { value, done: true };
              return obj14;
            } else {
              HTTP = value;
              const obj15 = { type: "LOAD_ICYMI_DEHYDRATED", items: HTTP.body.items, loadId: HTTP.body.load_id, startTime, isReloading, isInitialLoad };
              constants = 3;
              c8 = 1;
              const obj16 = { value: obj18.dispatch(obj15), done: false };
              obj18 = _null(startTime[6]);
              return obj16;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            currentUser = 0;
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            currentUser = 0;
          }
          c8 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp44) {
          authSessionIdHash = tmp44;
          if (0 === currentUser) {
            c8 = 3;
            throw tmp44;
          } else {
            constants = 1;
          }
        }
      }
    })();
  },
  gravityJoinGuild(items, icymi_info_modal) {
    let closure_1 = icymi_info_modal;
    return (async (arg0, value) => {
      let closure_0;
      let obj5;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c3;
        try {
          let _location;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              _location = tmp;
              items = tmp4;
              const obj8 = items(closure_2[11]);
              const tmp23 = items;
              if (obj8.icymiEnabled("gravityJoinGuild")) {
                if (0 !== items.length) {
                  c3 = 1;
                  const HTTP = tmp23(closure_2[10]).HTTP;
                  const request = { url: constants.GRAVITY_JOIN_GUILD, body: obj5, rejectWithError: false };
                  obj5 = { guild_ids: tmp13, location: _location };
                  c4 = 2;
                  c5 = 1;
                  const obj6 = { value: HTTP.post(request), done: false };
                  return obj6;
                }
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (1 === c4) {
            c3 = 0;
            items = closure_2;
            const obj2 = _location(closure_2[7]);
            obj2.captureException(items);
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            c5 = 3;
            return { value: true, done: true };
          }
        } catch (tmp17) {
          closure_2 = tmp17;
          if (0 === c3) {
            c5 = 3;
            throw tmp17;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  fetchForNotification(channel_id, message_id) {
    let closure_0 = channel_id;
    let closure_1 = message_id;
    return (async (arg0, value) => {
      let items;
      let obj5;
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              message_id = tmp;
              channel_id = undefined;
              const obj11 = channel_id(closure_2[11]);
              const tmp31 = channel_id;
              if (obj11.icymiEnabled("fetchInitial")) {
                c3 = 1;
                const HTTP = tmp31(closure_2[10]).HTTP;
                const request = { url: constants.GRAVITY_ITEMS_HYDRATE, body: obj5, rejectWithError: false };
                obj5 = { message_items: items, activity_items: [] };
                const obj6 = { channel_id, message_id };
                items = [obj6];
                c4 = 2;
                c5 = 1;
                const obj7 = { value: HTTP.post(request), done: false };
                return obj7;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            message_id = closure_2;
            const obj4 = message_id(closure_2[7]);
            obj4.captureException(message_id);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            channel_id = value;
            if (0 === channel_id.body.message_items.length) {
              c3 = 0;
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              const obj9 = { type: "LOAD_ICYMI_FROM_NOTIFICATION", messageItem: channel_id.body.message_items[0] };
              const obj = message_id(closure_2[6]);
              obj.dispatch(obj9);
              c3 = 0;
            }
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp23) {
          closure_2 = tmp23;
          if (0 === c3) {
            c5 = 3;
            throw tmp23;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  fetchForStatusNotification(customStatusItem) {
    const obj = ICYMIExperiment;
    if (obj.icymiEnabled("fetchInitialStatus")) {
      const obj3 = { type: "LOAD_ICYMI_FROM_NOTIFICATION", customStatusItem };
      const obj2 = Dispatcher;
      obj2.dispatch(obj3);
    }
  },
  fetchHydrated(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async (arg0, value) => {
      let obj9;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj5 = { value, done: true };
          return obj5;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let tmp30;
        let c3;
        try {
          let endingIndex;
          let startingIndex;
          let messageItems;
          let activityItems;
          let hydrationId;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              endingIndex = tmp;
              startingIndex = tmp4;
              messageItems = undefined;
              activityItems = undefined;
              tmp30 = undefined;
              hydrationId = undefined;
              const obj15 = startingIndex(tmp30[11]);
              if (obj15.icymiEnabled("fetchHydrated")) {
                messageItems = tmp30.messageItems;
                activityItems = tmp30.activityItems;
                if (0 === messageItems.length) {
                  if (0 === activityItems.length) {
                    const obj8 = { type: "LOAD_ICYMI_HYDRATED", requestMessageItems: [], requestActivityItems: [], messageItems: [], activityItems: [], startingIndex, endingIndex };
                    const obj6 = endingIndex(tmp30[6]);
                    obj6.dispatch(obj8);
                  }
                }
                c3 = 1;
                const HTTP = startingIndex(tmp30[10]).HTTP;
                const request = { url: constants.GRAVITY_ITEMS_HYDRATE, body: obj9, rejectWithError: false };
                obj9 = { message_items: messageItems, activity_items: activityItems };
                c4 = 2;
                c5 = 1;
                const obj10 = { value: HTTP.post(request), done: false };
                return obj10;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            let closure_4 = tmp30;
            const obj2 = endingIndex(tmp30[7]);
            obj2.captureException(closure_4);
            const obj3 = startingIndex(tmp30[12]);
            hydrationId = obj3.generateHydrationId(closure_129_0, closure_129_1);
            const obj11 = { type: "LOAD_ICYMI_HYDRATED_FAILED", hydrationId };
            const obj4 = endingIndex(tmp30[6]);
            obj4.dispatch(obj11);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            tmp30 = value;
            const obj12 = { type: "LOAD_ICYMI_HYDRATED", requestMessageItems: messageItems, requestActivityItems: activityItems, messageItems: tmp30.body.message_items, activityItems: tmp30.body.activity_items, startingIndex: closure_129_0, endingIndex: closure_129_1 };
            const obj13 = endingIndex(tmp30[6]);
            obj13.dispatch(obj12);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp30) {
          if (0 === c3) {
            c5 = 3;
            throw tmp30;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  getGuildChannelScores() {
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          let closure_1;
          let body;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp;
              body = undefined;
              const obj9 = ICYMIExperiment;
              const tmp27 = require;
              if (obj9.icymiEnabled("guildChannelScores")) {
                c3 = 1;
                const HTTP = tmp27(dependencyMap[10]).HTTP;
                const obj5 = { url: constants.GRAVITY_CUSTOM_SCORES, rejectWithError: false };
                c4 = 2;
                c5 = 1;
                const obj6 = { value: HTTP.get(obj5), done: false };
                return obj6;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_1 = closure_2;
            const obj4 = closure_129_1(closure_129_2[7]);
            obj4.captureException(closure_1);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            body = value;
            const obj8 = { type: "LOAD_ICYMI_CUSTOM_SCORES", scores: body.body };
            const obj = closure_129_1(closure_129_2[6]);
            obj.dispatch(obj8);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp21) {
          closure_2 = tmp21;
          if (0 === c3) {
            c5 = 3;
            throw tmp21;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  getRecommendedGuilds() {
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          let closure_1;
          let body;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp;
              body = undefined;
              const obj9 = ICYMIExperiment;
              const tmp27 = require;
              if (obj9.icymiEnabled("recommendedGuilds")) {
                c3 = 1;
                const HTTP = tmp27(dependencyMap[10]).HTTP;
                const obj5 = { url: constants.GRAVITY_RECOMMENDED_GUILDS, rejectWithError: false };
                c4 = 2;
                c5 = 1;
                const obj6 = { value: HTTP.get(obj5), done: false };
                return obj6;
              }
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_1 = closure_2;
            const obj4 = closure_129_1(closure_129_2[7]);
            obj4.captureException(closure_1);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            body = value;
            const obj8 = { type: "LOAD_ICYMI_RECOMMENDED_GUILDS", guilds: body.body.guilds };
            const obj = closure_129_1(closure_129_2[6]);
            obj.dispatch(obj8);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp21) {
          closure_2 = tmp21;
          if (0 === c3) {
            c5 = 3;
            throw tmp21;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  getMediaForCurrentStatus() {
    return (async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          let setting;
          let body;
          let HTTP;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              setting = undefined;
              body = undefined;
              const obj7 = ICYMIExperiment;
              if (obj7.icymiEnabled("mediaForCurrentStatus")) {
                const CustomStatusSetting = tmp32(dependencyMap[13]).CustomStatusSetting;
                setting = CustomStatusSetting.getSetting();
                if (null != setting) {
                  if (null != setting.createdAtMs) {
                    c3 = 1;
                    HTTP = tmp32(dependencyMap[10]).HTTP;
                    const obj4 = { url: constants.GRAVITY_ATTACHMENTS, rejectWithError: false };
                    c4 = 2;
                    c5 = 1;
                    const obj5 = { value: HTTP.get(obj4), done: false };
                    return obj5;
                  }
                }
              }
            }
          } else if (1 === tmp4) {
            c3 = 0;
            HTTP = closure_129_1(closure_129_2[7]);
            HTTP.captureException(closure_2);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            body = value;
            HTTP = closure_129_1(closure_129_2[6]);
            const obj = { type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA", attachments: body.body.attachments, createdAtMs: Number(setting.createdAtMs) };
            const _Number = Number;
            const dispatch = HTTP.dispatch;
            dispatch(obj);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp24) {
          closure_2 = tmp24;
          if (0 === c3) {
            c5 = 3;
            throw tmp24;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  reloadICYMITab() {
    const obj = Dispatcher;
    obj.dispatch({ type: "RELOAD_ICYMI" });
  },
  loadHydratedAttempt(hydrationId) {
    const obj = Dispatcher;
    const obj2 = { type: "LOAD_ICYMI_HYDRATED_ATTEMPT", hydrationId };
    obj.dispatch(obj2);
  },
  openICYMITab() {
    const obj = Dispatcher;
    obj.dispatch({ type: "ICYMI_TAB_OPENED" });
  },
  closeICYMITab() {
    const obj = Dispatcher;
    obj.dispatch({ type: "ICYMI_TAB_CLOSED" });
  },
  startItemsDwell(items) {
    const obj = Dispatcher;
    const obj2 = { type: "ICYMI_ITEMS_DWELL_START", items };
    obj.dispatch(obj2);
  },
  triggerItemsLongImpression(items) {
    const obj = Dispatcher;
    const obj2 = { type: "ICYMI_ITEMS_LONG_IMPRESSION", items };
    obj.dispatch(obj2);
  },
  ackGravityItems(items, override) {
    const obj = Dispatcher;
    const obj2 = { type: "ICYMI_ACK_ITEMS", items, override };
    return obj.dispatch(obj2);
  },
  gravityScrollEvent(timestamp) {
    const obj = Dispatcher;
    const obj2 = { type: "ICYMI_SCROLL_EVENT", timestamp };
    return obj.dispatch(obj2);
  },
  setFilters(filters) {
    const obj = Dispatcher;
    const obj2 = { type: "SET_ICYMI_FILTERS", filters };
    return obj.dispatch(obj2);
  },
  giveFeedback() {
    const obj = Dispatcher;
    return obj.dispatch({ type: "ICYMI_FEEDBACK_GIVEN" });
  },
  addedRecommendedGuild() {
    const obj = Dispatcher;
    return obj.dispatch({ type: "ICYMI_JOINED_RECOMMENDED_GUILD" });
  },
  setVideosMuted(muted) {
    const obj = Dispatcher;
    const obj2 = { type: "ICYMI_SET_VIDEOS_MUTED", muted };
    obj.dispatch(obj2);
  },
  setTabFocused(isFocused) {
    const obj = Dispatcher;
    const obj2 = { type: "ICYMI_SET_FOCUSED_TAB", focused: isFocused };
    obj.dispatch(obj2);
  },
  setCardHeight(itemId, height) {
    const obj = Dispatcher;
    const obj2 = { type: "ICYMI_SET_CARD_HEIGHT", itemId, height };
    obj.dispatch(obj2);
  },
  takeSurvey() {
    let timestamp = arg0;
    if (arg0 === undefined) {
      const _Date = Date;
      timestamp = Date.now();
    }
    const obj = Dispatcher;
    obj.dispatch({ type: "ICYMI_TAKE_SURVEY", takenAt: timestamp });
  },
  itemInteracted(id, hotwheels_gaming_activity, open_profile) {
    const obj = Dispatcher;
    const obj2 = { type: "ICYMI_ITEM_INTERACTED", itemId: id, itemType: hotwheels_gaming_activity, actionType: open_profile };
    obj.dispatch(obj2);
  },
  feedItemActioned(arg0) {
    const dispatch = Dispatcher.dispatch;
    const obj = { type: "ICYMI_FEED_ITEM_ACTIONED" };
    Dispatcher;
    const merged = Object.assign(arg0);
    dispatch(obj);
  },
  feedFilterActioned(arg0) {
    const dispatch = Dispatcher.dispatch;
    const obj = { type: "ICYMI_FEED_FILTER_ACTIONED" };
    Dispatcher;
    const merged = Object.assign(arg0);
    dispatch(obj);
  },
  feedPageActioned(arg0) {
    const dispatch = Dispatcher.dispatch;
    const obj = { type: "ICYMI_FEED_PAGE_ACTIONED" };
    Dispatcher;
    const merged = Object.assign(arg0);
    dispatch(obj);
  }
};
const result = size.fileFinishedImporting("modules/icymi/ICYMIActionCreators.tsx");

export default timeout;
