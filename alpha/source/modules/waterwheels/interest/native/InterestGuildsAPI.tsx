// Module ID: 19818
// Function ID: 19819
// Name: InterestGuildsAPI
// Dependencies: [5, 1071, 19819, 1285, 1256, 2]
// Exports: createInterestGuildsResource

// Module 19818 (InterestGuildsAPI)
import Constants from "Constants" /* 1071 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _null, _require, closure_7, closure_8, closure_9, degraded, degraded2, degraded3, guild_count, guild_count2;

const AnalyticEvents = Constants.AnalyticEvents;
let c5 = "/users/@me/waterwheels/interest-guilds";
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildsAPI.tsx");

export const INTEREST_GUILDS_ENDPOINT = "/users/@me/waterwheels/interest-guilds";
export function createInterestGuildsResource() {
  let closure_0;
  _require = undefined;
  const InterestGuildsResource = require("InterestGuildsResource").InterestGuildsResource;
  _require = _asyncToGenerator(async (game_ids) => {
    let c11 = 0;
    let c12 = 0;
    let c10 = 0;
    return (async (arg0, value) => {
      let obj11;
      let obj4;
      if (c12 === 2) {
        c12 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "+95" };
        }
      } else {
        try {
          let closure_1;
          let success_str;
          let status;
          let body;
          c12 = 2;
          if (0 === c11) {
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              return { value, done: true };
            } else {
              closure_8 = tmp;
              closure_7 = tmp4;
              _null = undefined;
              const _performance4 = performance;
              closure_1 = performance.now();
              success_str = "error";
              status = null;
              body = null;
              c10 = 2;
              const HTTP = game_ids(degraded2[3]).HTTP;
              const request = { url: _null, query: obj4, retries: 0, timeout: 10000, rejectWithError: obj11.rejectWithMigratedError() };
              const get = HTTP.get;
              obj4 = { game_ids };
              c11 = 3;
              c12 = 1;
              obj11 = game_ids(degraded2[3]);
              const obj5 = { value: get(request), done: false };
              return obj5;
            }
          } else if (1 === c11) {
            c10 = 0;
            const _Math3 = Math;
            const _Math4 = Math;
            const _performance2 = performance;
            const obj6 = { duration_ms: Math.max(0, Math.round(performance.now() - closure_1)), game_count: game_ids.length, outcome: success_str, status_code: status, degraded, guild_count: guild_count2 };
            const track2 = degraded(degraded2[4]).track;
            const INTEREST_GUILDS_FETCHED2 = degraded3.INTEREST_GUILDS_FETCHED;
            degraded(degraded2[4]);
            degraded = undefined;
            const tmp53 = closure_9;
            if (body != null) {
              degraded = body.degraded;
            }
            if (degraded == null) {
              degraded = null;
            }
            let length;
            if (body != null) {
              const guilds = body.guilds;
              if (guilds != null) {
                length = guilds.length;
              }
            }
            guild_count2 = length;
            if (length == null) {
              guild_count2 = null;
            }
            track2(INTEREST_GUILDS_FETCHED2, obj6);
            throw tmp53;
          } else if (2 === c11) {
            c10 = 1;
            guild_count2 = closure_9;
            const tmp31 = null != guild_count2 && typeof guild_count2 === "object";
            if (tmp31) {
              const tmp36 = "timeout" in guild_count2 && 10000 === guild_count2.timeout;
              if (tmp36) {
                success_str = "timeout";
              }
              const tmp42 = "status" in guild_count2 && typeof guild_count2.status === "number" && guild_count2.status > 0;
              if (tmp42) {
                status = guild_count2.status;
              }
            }
            throw guild_count2;
          } else if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            const _Math = Math;
            const _Math2 = Math;
            const _performance = performance;
            const obj7 = { duration_ms: Math.max(0, Math.round(performance.now() - closure_1)), game_count: game_ids.length, outcome: success_str, status_code: status, degraded: degraded2, guild_count };
            const track = degraded(degraded2[4]).track;
            const INTEREST_GUILDS_FETCHED = degraded3.INTEREST_GUILDS_FETCHED;
            degraded(degraded2[4]);
            let degraded1;
            if (body != null) {
              degraded1 = body.degraded;
            }
            degraded2 = degraded1;
            if (degraded1 == null) {
              degraded2 = null;
            }
            let length1;
            if (body != null) {
              const guilds1 = body.guilds;
              if (guilds1 != null) {
                length1 = guilds1.length;
              }
            }
            guild_count = length1;
            if (length1 == null) {
              guild_count = null;
            }
            track(INTEREST_GUILDS_FETCHED, obj7);
            c12 = 3;
            return { value, done: true };
          } else {
            _null = value;
            status = _null.status;
            body = _null.body;
            success_str = "success";
            c10 = 0;
            const _Math5 = Math;
            const _Math6 = Math;
            const _performance3 = performance;
            const obj9 = { duration_ms: Math.max(0, Math.round(performance.now() - closure_1)), game_count: game_ids.length, outcome: success_str, status_code: status, degraded: degraded3, guild_count: _null };
            const track3 = degraded(degraded2[4]).track;
            const INTEREST_GUILDS_FETCHED3 = degraded3.INTEREST_GUILDS_FETCHED;
            degraded(degraded2[4]);
            degraded2 = undefined;
            const tmp80 = body;
            if (body != null) {
              degraded2 = body.degraded;
            }
            degraded3 = degraded2;
            if (degraded2 == null) {
              degraded3 = null;
            }
            let length2;
            if (body != null) {
              const guilds2 = body.guilds;
              if (guilds2 != null) {
                length2 = guilds2.length;
              }
            }
            _null = length2;
            if (length2 == null) {
              _null = null;
            }
            track3(INTEREST_GUILDS_FETCHED3, obj9);
            c12 = 3;
            return { value: tmp80, done: true };
          }
        } catch (tmp69) {
          closure_9 = tmp69;
          if (0 === c10) {
            c12 = 3;
            throw tmp69;
          } else if (1 === tmp71) {
            c11 = 1;
          } else {
            c11 = 2;
          }
        }
      }
    })();
  });
  const interestGuildsResource = new InterestGuildsResource(function() {
    return closure_0(...arguments);
  });
  return interestGuildsResource;
}
