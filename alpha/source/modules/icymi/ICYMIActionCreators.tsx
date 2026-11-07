// Module ID: 8998
// Function ID: 8999
// Name: ICYMIActionCreators
// Dependencies: [5, 8999, 502, 1385, 1072, 572, 9000, 1282, 1242, 9002, 9003, 4965, 2]

// Module 8998 (ICYMIActionCreators)
import Constants from "Constants" /* 1072 */;
import WaterwheelsDiscoverExperiment from "WaterwheelsDiscoverExperiment" /* 9000 */;
import ICYMIExperiment from "ICYMIExperiment" /* 9002 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 8999 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore_mod from "UserStore" /* 1385 */;
import Dispatcher_mod from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let c4, c5, c8, closure_5, constants;

function setDiscoverUser(arg0) {
  if (id !== arg0) {
    c9 = null;
    closure_8 = {};
    closure_12 = {};
    id = arg0;
    authSessionIdHash = null;
  }
}
function fetchDiscoverDehydrated(arg0) {
  let isDiscoverPickerCommit;
  function captureRequestErrors() {
    return obj(...arguments);
  }
  ({ isInitialLoad: require, isReloading: importDefault, isDiscoverPickerCommit } = arg0);
  let closure_4;
  UserStore = undefined;
  let closure_6;
  let closure_9;
  closure_7 = function isSameUser() {
    let tmp = closure_6 === closure_12 && null != id;
    if (tmp) {
      const currentUser = UserStore.getCurrentUser();
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp = id === id;
    }
    return tmp;
  };
  function canApply() {
    let waterwheelsDiscoverEnabled = closure_6 === closure_12 && null != id;
    if (waterwheelsDiscoverEnabled) {
      const currentUser = UserStore.getCurrentUser();
      id = undefined;
      if (currentUser != null) {
        id = currentUser.id;
      }
      waterwheelsDiscoverEnabled = id === id;
    }
    if (waterwheelsDiscoverEnabled) {
      obj = WaterwheelsDiscoverExperiment;
      waterwheelsDiscoverEnabled = obj.getWaterwheelsDiscoverEnabled("fetchDehydrated");
    }
    return waterwheelsDiscoverEnabled;
  }
  let obj = function _runRequest() {
    let value;
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_1;
      let picks2;
      let tmp32;
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let c7;
        try {
          let closure_0;
          let uRLSearchParams;
          let c2;
          let startTime;
          let picks;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_5 = tmp;
              closure_0 = undefined;
              uRLSearchParams = undefined;
              c2 = undefined;
              startTime = undefined;
              picks = undefined;
              c8 = 1;
              c9 = 1;
              const obj7 = { value, done: false };
              return obj7;
            }
          } else {
            if (1 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c9 = 3;
                const obj10 = { value, done: true };
                return obj10;
              } else if (closure_133_8()) {
                closure_0 = closure_133_4;
                if (closure_133_4 == null) {
                  closure_0 = c9;
                }
                const tmp69 = closure_133_1;
                if (tmp69) {
                  const obj9 = picks2(closure_2[5]);
                  obj9.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: true });
                }
                c7 = 1;
                const _URLSearchParams = URLSearchParams;
                const self = this;
                const self2 = this;
                uRLSearchParams = new URLSearchParams();
                picks = undefined;
                if (closure_0 != null) {
                  picks = closure_0.picks;
                }
                picks2 = picks;
                if (picks == null) {
                  picks2 = picks.getPicks();
                }
                startTime = picks2;
                closure_2 = picks2[Symbol.iterator]();
                while (closure_2 !== undefined) {
                  c2 = tmp83;
                  let appendResult = uRLSearchParams.append("game_ids", c2);
                  c7 = 1;
                  continue;
                }
                if (null != closure_0) {
                  uRLSearchParams.append("refresh", "true");
                }
                const _Date = Date;
                startTime = Date.now();
                const HTTP = closure_0(closure_2[7]).HTTP;
                const request = { url: constants.GRAVITY_ITEMS_DEHYDRATED, query: uRLSearchParams.toString(), rejectWithError: false };
                const get = HTTP.get;
                c8 = 4;
                c9 = 1;
                const obj11 = { value: get(request), done: false };
                return obj11;
              }
            } else if (2 === c8) {
              c7 = 0;
              let tmp53 = closure_133_1;
              const tmp51 = constants;
              if (closure_133_1) {
                tmp53 = closure_133_7();
              }
              if (tmp53) {
                const obj8 = picks2(closure_2[5]);
                obj8.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
              }
              throw tmp51;
            } else if (3 === c8) {
              c7 = 1;
              closure_2.return();
              throw constants;
            } else if (4 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 0;
                const tmp41 = closure_133_1 && closure_133_7();
                if (tmp41) {
                  const obj6 = picks2(closure_2[5]);
                  obj6.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
                }
                c9 = 3;
                const obj12 = { value, done: true };
                return obj12;
              } else {
                picks = value;
                if (closure_133_8()) {
                  if (closure_133_5 === c8) {
                    const obj13 = { type: "LOAD_ICYMI_DEHYDRATED", items: picks.body.items, loadId: picks.body.load_id, startTime, isReloading: closure_133_1, isInitialLoad: tmp32 };
                    tmp32 = null != closure_0;
                    const dispatch = picks2(closure_2[5]).dispatch;
                    const tmp115 = picks2(closure_2[5]);
                    if (!tmp32) {
                      tmp32 = closure_133_0;
                    }
                    c8 = 5;
                    c9 = 1;
                    const obj14 = { value: dispatch(obj13), done: false };
                    return obj14;
                  }
                }
                c7 = 0;
                const tmp34 = closure_133_1 && closure_133_7();
                if (tmp34) {
                  const obj5 = picks2(closure_2[5]);
                  obj5.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
                }
                c9 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              const tmp22 = closure_133_1 && closure_133_7();
              if (tmp22) {
                const obj2 = picks2(closure_2[5]);
                obj2.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
              }
              c9 = 3;
              const obj15 = { value, done: true };
              return obj15;
            } else {
              const tmp8 = closure_133_8() && closure_133_5 === c8 && c9 === closure_0;
              if (tmp8) {
                c9 = null;
              }
              c7 = 0;
              const tmp15 = closure_133_1 && closure_133_7();
              if (tmp15) {
                obj = picks2(closure_2[5]);
                obj.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: false });
              }
            }
            c9 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp99) {
          constants = tmp99;
          if (0 === c7) {
            c9 = 3;
            throw tmp99;
          } else if (1 === tmp101) {
            c8 = 2;
          } else {
            c8 = 3;
          }
        }
      }
    });
    return obj(...arguments);
  };
  obj = function _captureRequestErrors() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      function runRequest() {
        return closure_1_10(...arguments);
      }
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let c3;
        try {
          let closure_0;
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
              closure_0 = tmp4;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: runRequest(), done: false };
              return obj5;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              const obj2 = tmp(closure_2[8]);
              obj2.captureException(closure_0);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp13) {
          closure_2 = tmp13;
          if (0 === c3) {
            c5 = 3;
            throw tmp13;
          } else {
            c4 = 1;
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
    tmp3 = closure_9;
  }
  closure_4 = tmp3;
  UserStore = canApply;
  closure_6 = closure_12;
  closure_9 = closure_7;
  const tmp4 = captureRequestErrors();
  closure_7 = tmp4;
  return tmp4;
}
let UserStore = UserStore_mod;
const Endpoints = Constants.Endpoints;
let closure_7 = Promise.resolve();
let closure_8 = {};
let c9 = null;
let tmp2 = null;
if (AuthenticationStore.isAuthenticated()) {
  let id = AuthenticationStore.getId();
  if (id == null) {
    id = null;
  }
  tmp2 = id;
}
id = tmp2;
let tmp4 = null;
if (null != tmp2) {
  let authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
  if (authSessionIdHash == null) {
    authSessionIdHash = null;
  }
  tmp4 = authSessionIdHash;
}
function resetDiscoverAccount() {
  c9 = null;
  closure_8 = {};
  closure_12 = {};
  id = null;
  authSessionIdHash = null;
}
authSessionIdHash = tmp4;
let closure_12 = {};
let Dispatcher = Dispatcher_mod;
const subscription = Dispatcher.subscribe("LOGOUT", resetDiscoverAccount);
Dispatcher = Dispatcher_mod;
const subscription1 = Dispatcher.subscribe("LOGIN_SUCCESS", resetDiscoverAccount);
Dispatcher = Dispatcher_mod;
const subscription2 = Dispatcher.subscribe("LOGIN_RESET", (isMultiAccount) => {
  if (!isMultiAccount.isMultiAccount) {
    c9 = null;
    closure_8 = {};
    closure_12 = {};
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
    c9 = null;
    closure_8 = {};
    closure_12 = {};
    id = null;
    authSessionIdHash = null;
  }
});
Dispatcher = Dispatcher_mod;
const subscription6 = Dispatcher.subscribe("CONNECTION_OPEN", (authSessionIdHash) => {
  authSessionIdHash = authSessionIdHash.authSessionIdHash;
  id = authSessionIdHash.user.id;
  if (id !== id) {
    c9 = null;
    closure_8 = {};
    closure_12 = {};
    authSessionIdHash = null;
  }
  if (null != authSessionIdHash) {
    const tmp3 = null != authSessionIdHash && authSessionIdHash !== authSessionIdHash;
    if (tmp3) {
      c9 = null;
      closure_8 = {};
      closure_12 = {};
    }
  }
});
Dispatcher = Dispatcher_mod;
const subscription7 = Dispatcher.subscribe("AUTH_SESSION_CHANGE", (authSessionIdHash) => {
  authSessionIdHash = authSessionIdHash.authSessionIdHash;
  if (null != authSessionIdHash) {
    const tmp2 = null != authSessionIdHash && authSessionIdHash !== authSessionIdHash;
    if (tmp2) {
      c9 = null;
      closure_8 = {};
      closure_12 = {};
    }
  }
});
let obj = {
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const HTTP = category_ids(closure_2[7]).HTTP;
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
            const obj4 = offset(closure_2[8]);
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
            const obj = offset(closure_2[5]);
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
  fetchDehydrated(arg0) {
    let obj = arg0;
    if (arg0 === undefined) {
      obj = {};
    }
    return (async (arg0, value) => {
      let HTTP;
      let c0;
      let closure_3;
      let isReloading;
      let obj15;
      let obj9;
      if (constants === 2) {
        constants = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        let tmp27;
        try {
          let isInitialLoad;
          let startTime;
          constants = 2;
          if (0 === currentUser) {
            if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              constants = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              isInitialLoad = undefined;
              isReloading = undefined;
              startTime = undefined;
              tmp27 = undefined;
              ({ isInitialLoad: c0, isReloading } = obj);
              const forceRefresh = obj.forceRefresh;
              currentUser = currentUser.getCurrentUser();
              id = undefined;
              const tmp45 = setDiscoverUser;
              if (currentUser != null) {
                id = currentUser.id;
              }
              isInitialLoad = id;
              if (id == null) {
                isInitialLoad = null;
              }
              tmp45(isInitialLoad);
              const isDiscoverPickerCommit = tmp44.isDiscoverPickerCommit && null != closure_1_10;
              if (isDiscoverPickerCommit) {
                closure_8 = {};
                const obj5 = { picks: picks.getPicks() };
              }
              const obj6 = isInitialLoad(startTime[9]);
              if (obj6.icymiEnabled("fetchDehydrated")) {
                const tmp18Result = isInitialLoad(startTime[6]);
                if (tmp18Result.getWaterwheelsDiscoverEnabled("fetchDehydrated")) {
                  constants = 3;
                  const obj7 = { value: fetchDiscoverDehydrated(obj), done: true };
                  return obj7;
                } else if (!obj.isDiscoverPickerCommit) {
                  if (isReloading) {
                    const obj8 = HTTP(startTime[5]);
                    obj8.dispatch({ type: "ICYMI_SET_REFRESHING", refreshing: true });
                  }
                  picks = 1;
                  const _Date = Date;
                  startTime = Date.now();
                  HTTP = tmp18(startTime[7]).HTTP;
                  const request = { url: constants.GRAVITY_ITEMS_DEHYDRATED, query: obj9, rejectWithError: false };
                  obj9 = { refresh: forceRefresh };
                  currentUser = 2;
                  constants = 1;
                  const obj10 = { value: HTTP.get(request), done: false };
                  return obj10;
                }
              }
            }
          } else if (1 === currentUser) {
            picks = 0;
            let closure_4 = tmp27;
            const obj4 = HTTP(startTime[8]);
            obj4.captureException(closure_4);
          } else if (2 === currentUser) {
            if (arg0 === 1) {
              constants = 3;
              throw value;
            } else if (arg0 === 2) {
              picks = 0;
              constants = 3;
              const obj11 = { value, done: true };
              return obj11;
            } else {
              tmp27 = value;
              const obj12 = { type: "LOAD_ICYMI_DEHYDRATED", items: tmp27.body.items, loadId: tmp27.body.load_id, startTime, isReloading, isInitialLoad };
              currentUser = 3;
              constants = 1;
              const obj13 = { value: obj15.dispatch(obj12), done: false };
              obj15 = HTTP(startTime[5]);
              return obj13;
            }
          } else if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            picks = 0;
            constants = 3;
            obj = { value, done: true };
            return obj;
          } else {
            picks = 0;
          }
          constants = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp27) {
          if (0 === picks) {
            constants = 3;
            throw tmp27;
          } else {
            currentUser = 1;
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj8 = items(closure_2[9]);
              const tmp23 = items;
              if (obj8.icymiEnabled("gravityJoinGuild")) {
                if (0 !== items.length) {
                  c3 = 1;
                  const HTTP = tmp23(closure_2[7]).HTTP;
                  const request = { url: constants.GRAVITY_JOIN_GUILD, body: obj5, rejectWithError: false };
                  obj5 = { guild_ids: tmp13, location: _location };
                  c4 = 2;
                  c5 = 1;
                  const obj6 = { value: HTTP.post(request), done: false };
                  return obj6;
                }
              }
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else if (1 === c4) {
            c3 = 0;
            items = closure_2;
            const obj2 = _location(closure_2[8]);
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj11 = channel_id(closure_2[9]);
              const tmp31 = channel_id;
              if (obj11.icymiEnabled("fetchInitial")) {
                c3 = 1;
                const HTTP = tmp31(closure_2[7]).HTTP;
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
            const obj4 = message_id(closure_2[8]);
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
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              const obj9 = { type: "LOAD_ICYMI_FROM_NOTIFICATION", messageItem: channel_id.body.message_items[0] };
              const obj = message_id(closure_2[5]);
              obj.dispatch(obj9);
              c3 = 0;
            }
          }
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
              const obj15 = startingIndex(tmp30[9]);
              if (obj15.icymiEnabled("fetchHydrated")) {
                messageItems = tmp30.messageItems;
                activityItems = tmp30.activityItems;
                if (0 === messageItems.length) {
                  if (0 === activityItems.length) {
                    const obj8 = { type: "LOAD_ICYMI_HYDRATED", requestMessageItems: [], requestActivityItems: [], messageItems: [], activityItems: [], startingIndex, endingIndex };
                    const obj6 = endingIndex(tmp30[5]);
                    obj6.dispatch(obj8);
                  }
                }
                c3 = 1;
                const HTTP = startingIndex(tmp30[7]).HTTP;
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
            const obj2 = endingIndex(tmp30[8]);
            obj2.captureException(closure_4);
            const obj3 = startingIndex(tmp30[10]);
            hydrationId = obj3.generateHydrationId(closure_129_0, closure_129_1);
            const obj11 = { type: "LOAD_ICYMI_HYDRATED_FAILED", hydrationId };
            const obj4 = endingIndex(tmp30[5]);
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
            const obj13 = endingIndex(tmp30[5]);
            obj13.dispatch(obj12);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
                const HTTP = tmp27(dependencyMap[7]).HTTP;
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
            const obj4 = closure_129_1(closure_129_2[8]);
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
            const obj = closure_129_1(closure_129_2[5]);
            obj.dispatch(obj8);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
                const HTTP = tmp27(dependencyMap[7]).HTTP;
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
            const obj4 = closure_129_1(closure_129_2[8]);
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
            const obj = closure_129_1(closure_129_2[5]);
            obj.dispatch(obj8);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "HermesInternal", done: "HermesInternal" };
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
                const CustomStatusSetting = tmp32(dependencyMap[11]).CustomStatusSetting;
                setting = CustomStatusSetting.getSetting();
                if (null != setting) {
                  if (null != setting.createdAtMs) {
                    c3 = 1;
                    HTTP = tmp32(dependencyMap[7]).HTTP;
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
            HTTP = closure_129_1(closure_129_2[8]);
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
            HTTP = closure_129_1(closure_129_2[5]);
            const obj = { type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA", attachments: body.body.attachments, createdAtMs: Number(setting.createdAtMs) };
            const _Number = Number;
            const dispatch = HTTP.dispatch;
            dispatch(obj);
            c3 = 0;
          }
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
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

export default obj;
