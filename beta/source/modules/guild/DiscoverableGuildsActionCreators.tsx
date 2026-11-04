// Module ID: 9615
// Function ID: 9616
// Name: DiscoverableGuildsActionCreators
// Dependencies: [5, 9614, 1072, 572, 1282, 2]
// Exports: fetchDiscoverableGuilds

// Module 9615 (DiscoverableGuildsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import DiscoverableGuildsStore from "DiscoverableGuildsStore" /* 9614 */;
import size from "module_2" /* 2 */;

let c6, c7, closure_4, set, staleGuildIds;

let obj = function _requestGuilds() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let obj6;
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c5;
      try {
        let closure_3;
        let body;
        let guilds;
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
            closure_3 = tmp;
            body = undefined;
            guilds = undefined;
            const obj5 = { type: "DISCOVERABLE_GUILDS_FETCH_START", guildIds };
            const obj9 = DispatcherDefault;
            obj9.dispatch(obj5);
            c5 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.GUILD_DISCOVERY, query: obj6, oldFormErrors: true, rejectWithError: true };
            obj6 = { guild_ids: guildIds };
            c6 = 2;
            c7 = 1;
            const obj7 = { value: HTTP.get(request), done: false };
            return obj7;
          }
        } else if (1 === c6) {
          c5 = 0;
          closure_3 = closure_4;
          const obj8 = { type: "DISCOVERABLE_GUILDS_FETCH_FAILURE", guildIds };
          const obj4 = closure_131_1(closure_131_2[3]);
          obj4.dispatch(obj8);
          throw closure_3;
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          body = value;
          body = body.body;
          guilds = undefined;
          if (body != null) {
            guilds = body.guilds;
          }
          body = guilds;
          if (guilds == null) {
            body = [];
          }
          guilds = body;
          const obj11 = { type: "DISCOVERABLE_GUILDS_FETCH_SUCCESS", guildIds, guilds };
          obj = closure_131_1(closure_131_2[3]);
          obj.dispatch(obj11);
          c5 = 0;
          c7 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp23) {
        closure_4 = tmp23;
        if (0 === c5) {
          c7 = 3;
          throw tmp23;
        } else {
          c6 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _fetchDiscoverableGuilds() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let tmp2;
    function requestGuilds() {
      return closure_1_7(...arguments);
    }
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      while (true) {
        let closure_1;
        let closure_3;
        c5 = 2;
        let tmp3 = c6;
        if (0 === c6) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            staleGuildIds = staleGuildIds.getStaleGuildIds(closure_0);
            let _Set = Set;
            let self = this;
            let self2 = this;
            set = new Set();
            let closure_2 = closure_0;
            closure_1 = closure_0[Symbol.iterator]();
            while (closure_1 !== undefined) {
              let c8 = 1;
              value = map.get(tmp12);
              if (null != value) {
                let addResult = set.add(value);
              }
              c8 = 0;
              continue;
            }
            if (staleGuildIds.length > 0) {
              let promise = requestGuilds(staleGuildIds);
              let cleanupPromise = promise.finally(() => {
                for (const item10006 of staleGuildIds) {
                  obj = closure_2_6;
                  let tmp = item10006;
                  if (closure_2_6.get(item10006) === cleanupPromise) {
                    let deleteResult = obj.delete(tmp);
                  }
                  continue;
                }
              });
              closure_3 = staleGuildIds[Symbol.iterator]();
              while (closure_3 !== undefined) {
                let result = map.set(tmp20, cleanupPromise);
                c8 = 0;
                continue;
              }
              let addResult1 = set.add(cleanupPromise);
            }
            let _Promise = Promise;
            c6 = 2;
            c5 = 1;
            let obj4 = { value: Promise.all(set), done: false };
            return obj4;
          }
        } else if (1 === tmp3) {
          c8 = 0;
          closure_1.return();
          throw closure_1_7;
        } else if (2 === tmp3) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          c8 = 0;
          closure_3.return();
          throw closure_1_7;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const map = new Map();
let result = size.fileFinishedImporting("modules/guild/DiscoverableGuildsActionCreators.tsx");

export function fetchDiscoverableGuilds() {
  return obj(...arguments);
}
