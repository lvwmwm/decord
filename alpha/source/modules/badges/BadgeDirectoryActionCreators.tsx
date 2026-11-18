// Module ID: 8054
// Function ID: 8055
// Name: BadgeDirectoryActionCreators
// Dependencies: [5, 1388, 1072, 572, 1285, 6272, 6277, 559, 1089, 1242, 2]
// Exports: ackBadge, fetchBadgeDirectory, fetchBadgeSummary, markBadgeDirectoryBadgeIndicatorSeen

// Module 8054 (BadgeDirectoryActionCreators)
import HTTPUtils from "HTTPUtils" /* 1285 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserStore from "UserStore" /* 1388 */;
import Constants from "Constants" /* 1072 */;
import Dispatcher from "Dispatcher" /* 572 */;
import size from "module_2" /* 2 */;

let backoff, c1, closure_2, closure_4, closure_5, closure_6, dependencyMap, postResult, set;

let hasOwnProperty;
let metroRequire;
function urlUserId(arg0) {
  const currentUser = UserStore.getCurrentUser();
  let id;
  if (currentUser != null) {
    id = currentUser.id;
  }
  let tmp3 = arg0;
  if (arg0 === id) {
    tmp3 = metroRequire;
  }
  return tmp3;
}
function requestBadgeDirectory() {
  return obj(...arguments);
}
let obj = function _requestBadgeDirectory() {
  obj = _asyncToGenerator(async (userId, arg1) => {
    const isAutomatic = arg1;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async function(arg0, value) {
      let items;
      let timestamp;
      if (c8 === 2) {
        c8 = 3;
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
          let closure_3;
          let body;
          let items1;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_2 = undefined;
              closure_3 = undefined;
              requestedAt = undefined;
              body = undefined;
              items1 = undefined;
              backoff = undefined;
              currentUser = currentUser.getCurrentUser();
              let id;
              const tmp92 = isAutomatic;
              if (currentUser != null) {
                id = currentUser.id;
              }
              let str2 = "other";
              if (null != id) {
                str2 = "other";
                if (userId === id) {
                  str2 = "self";
                }
              }
              closure_2 = "viewed_user:" + str2;
              let str3 = "initial";
              if (true === tmp92.isRetry) {
                str3 = "retry";
              }
              closure_3 = "attempt:" + str3;
              const _Date4 = Date;
              requestedAt = Date.now();
              const obj5 = { type: "BADGE_DIRECTORY_FETCH_START", userId };
              const obj9 = Dispatcher;
              obj9.dispatch(obj5);
              c6 = 1;
              const HTTP = HTTPUtils.HTTP;
              const get = HTTP.get;
              const obj7 = { url: closure_2_5.USER_BADGES(urlUserId(userId)), rejectWithError: true };
              self = get(obj7);
              c7 = 2;
              c8 = 1;
              return { value: self, done: false };
            }
          } else {
            if (1 === tmp4) {
              c6 = 0;
              let closure_8 = closure_5;
              const obj10 = { name: closure_132_0(closure_132_2[6]).MetricEvents.BADGE_DIRECTORY_CATALOG_FETCH, tags: items };
              const distribution2 = closure_132_1(closure_132_2[5]).distribution;
              closure_132_1(closure_132_2[5]);
              items = [closure_2, "result:failure", "catalog_state:unknown", closure_3];
              const _Date2 = Date;
              distribution2(obj10, Date.now() - requestedAt);
              const obj11 = { type: "BADGE_DIRECTORY_FETCH_FAILURE", userId };
              const obj6 = closure_132_1(closure_132_2[3]);
              self = obj6.dispatch(obj11);
              if (true === isAutomatic.isAutomatic) {
                self = closure_132_8.get(userId);
                backoff = undefined;
                if (self != null) {
                  backoff = self.backoff;
                }
                closure_2 = backoff;
                if (backoff == null) {
                  const tmp46 = closure_132_1(closure_132_2[7]);
                  const MINUTE = closure_132_1(closure_132_2[8]).Millis.MINUTE;
                  self = this;
                  const self2 = this;
                  closure_2 = new tmp46(MINUTE, closure_132_1(closure_132_2[8]).Millis.HOUR, true);
                  const tmp462 = new tmp46(MINUTE, closure_132_1(closure_132_2[8]).Millis.HOUR, true);
                }
                backoff = closure_2;
                self = userId;
                const _Date3 = Date;
                const obj12 = { backoff, gateUntil: timestamp + backoff.fail() };
                set = closure_132_8.set;
                timestamp = Date.now();
                const result = set(userId, obj12);
              }
              self = closure_132_1(closure_132_2[9]).captureException;
              closure_132_1(closure_132_2[9]);
              self(closure_8);
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              body = value.body;
              self = closure_2;
              items1 = [closure_2, "result:success", , ];
              let str = "non_empty";
              if (0 === body.badges.length) {
                str = "empty";
              }
              items1[2] = "catalog_state:" + str;
              items1[3] = closure_3;
              obj = { name: closure_132_0(closure_132_2[6]).MetricEvents.BADGE_DIRECTORY_CATALOG_FETCH, tags: items1 };
              const distribution = closure_132_1(closure_132_2[5]).distribution;
              closure_132_1(closure_132_2[5]);
              const _Date = Date;
              distribution(obj, Date.now() - requestedAt);
              const obj14 = { type: "BADGE_DIRECTORY_FETCH_SUCCESS", userId, badges: body.badges, requestedAt };
              const obj2 = closure_132_1(closure_132_2[3]);
              obj2.dispatch(obj14);
              self = closure_132_8.delete;
              self(userId);
              c6 = 0;
            }
            c8 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp77) {
          closure_5 = tmp77;
          if (0 === c6) {
            c8 = 3;
            throw tmp77;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function fetchBadge() {
  return obj(...arguments);
}
obj = function _fetchBadge() {
  obj = _asyncToGenerator(async (userId, requestedAt) => {
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value) => {
      if (c8 === 2) {
        c8 = 3;
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
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              userId = undefined;
              requestedAt = undefined;
              body = undefined;
              let id = requestedAt;
              const tmp38 = userId;
              if (requestedAt == null) {
                currentUser = currentUser.getCurrentUser();
                id = undefined;
                if (currentUser != null) {
                  id = currentUser.id;
                }
              }
              userId = id;
              if (null != id) {
                const _Date = Date;
                requestedAt = Date.now();
                c6 = 1;
                const HTTP = HTTPUtils.HTTP;
                const get = HTTP.get;
                const obj5 = { url: closure_2_5.USER_BADGE(urlUserId(tmp25), tmp38), rejectWithError: true };
                value = get(obj5);
                c7 = 2;
                c8 = 1;
                return { value, done: false };
              }
            }
          } else if (1 === tmp4) {
            c6 = 0;
            let closure_3 = closure_5;
            const obj4 = closure_132_1(closure_132_2[9]);
            obj4.captureException(closure_3);
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            body = value;
            const obj8 = { type: "BADGE_FETCH_SUCCESS", userId, badge: body.body, requestedAt };
            obj = closure_132_1(closure_132_2[3]);
            obj.dispatch(obj8);
            c6 = 0;
          }
          c8 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp30) {
          closure_5 = tmp30;
          if (0 === c6) {
            c8 = 3;
            throw tmp30;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _requestBadgeSummary() {
  obj = _asyncToGenerator(async (arg0, userId, requestedAt) => {
    let closure_0 = arg0;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async function(arg0, value, arg2) {
      let timestamp;
      if (c9 === 2) {
        c9 = 3;
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
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              userId = requestedAt;
              body = undefined;
              backoff = undefined;
              const _Date2 = Date;
              requestedAt = Date.now();
              c7 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_5.USER_BADGE(urlUserId(requestedAt), userId), query: { with_progress: false }, rejectWithError: true };
              const get = HTTP.get;
              c8 = 2;
              c9 = 1;
              const obj4 = { value: get(request), done: false };
              return obj4;
            }
          } else {
            if (1 === tmp4) {
              c7 = 0;
              closure_5 = closure_6;
              let self = closure_133_10.get(closure_0);
              backoff = undefined;
              if (self != null) {
                backoff = self.backoff;
              }
              body = backoff;
              if (backoff == null) {
                const tmp26 = closure_133_1(closure_133_2[7]);
                const MINUTE = closure_133_1(closure_133_2[8]).Millis.MINUTE;
                self = this;
                const self2 = this;
                body = new tmp26(MINUTE, closure_133_1(closure_133_2[8]).Millis.HOUR, true);
                const tmp262 = new tmp26(MINUTE, closure_133_1(closure_133_2[8]).Millis.HOUR, true);
              }
              backoff = body;
              const _Date = Date;
              const obj5 = { backoff, gateUntil: timestamp + backoff.fail() };
              set = closure_133_10.set;
              timestamp = Date.now();
              const result = set(closure_0, obj5);
              self = closure_133_1(closure_133_2[9]).captureException;
              closure_133_1(closure_133_2[9]);
              self(closure_5);
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            } else {
              body = value;
              closure_133_10.delete(closure_0);
              const obj7 = { type: "BADGE_SUMMARY_FETCH_SUCCESS", userId, badge: body.body, requestedAt };
              obj = closure_133_1(closure_133_2[3]);
              obj.dispatch(obj7);
              c7 = 0;
            }
            c9 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp48) {
          closure_6 = tmp48;
          if (0 === c7) {
            c9 = 3;
            throw tmp48;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _ackBadge() {
  obj = _asyncToGenerator(async (badgeId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      if (c6 === 2) {
        c6 = 3;
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
          let id;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              currentUser = currentUser.getCurrentUser();
              id = undefined;
              const tmp35 = badgeId;
              if (currentUser != null) {
                id = currentUser.id;
              }
              if (null != id) {
                c4 = 1;
                const HTTP = HTTPUtils.HTTP;
                const post = HTTP.post;
                const obj5 = { url: closure_2_5.USER_BADGE_ACK(tmp35), rejectWithError: true };
                postResult = post(obj5);
                c5 = 2;
                c6 = 1;
                return { value: postResult, done: false };
              }
            }
          } else if (1 === tmp4) {
            c4 = 0;
            closure_2 = closure_3;
            const obj4 = closure_130_1(closure_130_2[9]);
            obj4.captureException(closure_2);
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            const obj8 = { type: "BADGE_ACK_SUCCESS", userId: id, badgeId };
            obj = closure_130_1(closure_130_2[3]);
            obj.dispatch(obj8);
            postResult = badgeId;
            closure_130_14(badgeId, id);
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp28) {
          closure_3 = tmp28;
          if (0 === c4) {
            c6 = 3;
            throw tmp28;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({ Endpoints: hasOwnProperty, ME: metroRequire } = Constants);
const map = new Map();
const map1 = new Map();
const map2 = new Map();
const map3 = new Map();
const subscription = Dispatcher.subscribe("LOGOUT", () => {
  map.clear();
  map1.clear();
  map2.clear();
  map3.clear();
});
let result = size.fileFinishedImporting("modules/badges/BadgeDirectoryActionCreators.tsx");

export function fetchBadgeDirectory(id, arg1) {
  let c2;
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let tmp = id;
  id = undefined;
  dependencyMap = undefined;
  if (id == null) {
    const currentUser = UserStore.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp = id;
  }
  id = tmp;
  if (null == tmp) {
    return Promise.resolve();
  } else if (true !== obj.isAutomatic) {
    return requestBadgeDirectory(tmp, obj);
  } else {
    let value = map.get(tmp);
    let request;
    const obj5 = map;
    if (value != null) {
      request = value.request;
    }
    if (null != request) {
      return request;
    } else {
      const value2 = map1.get(tmp);
      let num;
      if (value2 != null) {
        num = value2.gateUntil;
      }
      if (num == null) {
        num = 0;
      }
      const _Date = Date;
      if (Date.now() < num) {
        let obj3 = id(572);
        let obj2 = { type: "BADGE_DIRECTORY_FETCH_FAILURE", userId: tmp };
        obj3.dispatch(obj2);
        return Promise.resolve();
      } else {
        const _Symbol = Symbol;
        const SymbolResult = Symbol();
        dependencyMap = SymbolResult;
        const tmp9 = (async (arg0, value) => {
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
              return { value: "HermesInternal", done: null };
            }
          } else {
            let c3;
            try {
              c4 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_0 = tmp;
                  c3 = 1;
                  c1 = 2;
                  c4 = 1;
                  const obj4 = { value: requestBadgeDirectory(id, obj), done: false };
                  return obj4;
                }
              } else if (1 === tmp4) {
                c3 = 0;
                value = map.get(closure_128_1);
                let token;
                const tmp26 = closure_2;
                if (value != null) {
                  token = value.token;
                }
                if (token === closure_128_2) {
                  map.delete(closure_128_1);
                }
                throw tmp26;
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                const value3 = map.get(closure_128_1);
                let token1;
                if (value3 != null) {
                  token1 = value3.token;
                }
                if (token1 === closure_128_2) {
                  map.delete(closure_128_1);
                }
                c4 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                c3 = 0;
                const value4 = map.get(closure_128_1);
                let token2;
                if (value4 != null) {
                  token2 = value4.token;
                }
                if (token2 === closure_128_2) {
                  map.delete(closure_128_1);
                }
                c4 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp40) {
              closure_2 = tmp40;
              if (0 === c3) {
                c4 = 3;
                throw tmp40;
              } else {
                c1 = 1;
              }
            }
          }
        })();
        let obj4 = { request: tmp9, token: SymbolResult };
        const result = obj5.set(tmp, obj4);
        return tmp9;
      }
    }
  }
}
export { fetchBadge };
export function fetchBadgeSummary(GIFTING, id) {
  function requestBadgeSummary() {
    return obj(...arguments);
  }
  let tmp = id;
  if (id == null) {
    const currentUser = UserStore.getCurrentUser();
    id = undefined;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp = id;
  }
  if (null == tmp) {
    return Promise.resolve();
  } else {
    const _HermesInternal = HermesInternal;
    const combined = "" + tmp + "#" + GIFTING;
    obj = map2;
    const value = map2.get(combined);
    if (null != value) {
      return value;
    } else {
      const value2 = map3.get(combined);
      let num;
      if (value2 != null) {
        num = value2.gateUntil;
      }
      if (num == null) {
        num = 0;
      }
      const _Date = Date;
      if (Date.now() < num) {
        return Promise.resolve();
      } else {
        const promise = requestBadgeSummary(combined, GIFTING, tmp);
        const cleanupPromise = promise.finally(() => {
          obj = map2;
          const tmp = combined;
          if (map2.get(combined) === cleanupPromise) {
            obj.delete(tmp);
          }
        });
        const result = obj.set(combined, cleanupPromise);
        return cleanupPromise;
      }
    }
  }
}
export function ackBadge() {
  return obj(...arguments);
}
export function markBadgeDirectoryBadgeIndicatorSeen(badgeId) {
  obj = Dispatcher;
  const obj2 = { type: "BADGE_DIRECTORY_MARK_BADGE_INDICATOR_SEEN", badgeId };
  obj.dispatch(obj2);
}
