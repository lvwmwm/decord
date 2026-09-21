// Module ID: 16933
// Function ID: 16934
// Name: usePaginatedMemberApplications
// Dependencies: [5, 32, 19, 4580, 11, 5758, 4656, 2]
// Exports: usePaginatedMemberApplications

// Module 16933 (usePaginatedMemberApplications)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const result = fn(4580).MAX_RESULTS_PER_PAGE * fn(4580).MAX_VISIBLE_PAGES;
const metroRequire = result;
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx");

export const MEMBER_APPLICATION_FETCH_LIMIT = result;
export const usePaginatedMemberApplications = function usePaginatedMemberApplications(guildId) {
  guildId = guildId.guildId;
  const guildJoinRequests = guildId.guildJoinRequests;
  error = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  closure_2 = noop.useRef(false);
  [error, _slicedToArray] = noop.useState(null);
  noop = noop.useRef(null);
  closure_6 = noop.useRef(false);
  closure_0 = error((guildId, arg1) => {
    closure_1 = arg1;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, value) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === limit) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj4 = { value, done: true };
              return obj4;
            } else {
              closure_3 = tmp4;
              closure_130_0 = undefined;
              closure_130_1 = undefined;
              if (!tmp8.current) {
                const _HermesInternal = HermesInternal;
                const combined = "" + tmp67 + "-" + tmp68;
                let flag = false;
                if (combined !== ref2.current) {
                  ref2.current = combined;
                  limit.current = false;
                  flag = true;
                }
                if (!limit.current) {
                  if (null != closure_3) {
                    tmp58(null);
                  }
                  ref2 = 2;
                  ref.current = true;
                  const tmp51 = (function getRequestPaginationParams(after, arg1, arg2, arg3, flag) {
                    const tmp2 = arg3 === guildId(4580).GuildJoinRequestApplicationStatuses.SUBMITTED;
                    if (arg2 === guildId(4580).GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
                      if (!flag) {
                        if (0 !== arg1.length) {
                          const obj2 = { before: tmp2 ? arg1[arg1.length - 1].joinRequestId : arg1[arg1.length - 1].actionedAt };
                          return obj2;
                        }
                      }
                      const obj3 = { before: null };
                      const _Date = Date;
                      const date = new Date();
                      obj3.before = closure_1_1(11).fromTimestamp(date.getTime());
                      return obj3;
                    } else {
                      if (!flag) {
                        if (0 !== arg1.length) {
                          const obj = { after: tmp2 ? arg1[arg1.length - 1].joinRequestId : arg1[arg1.length - 1].actionedAt };
                          return obj;
                        }
                      }
                      const obj4 = { after };
                      return obj4;
                    }
                  })(guildId, closure_1, tmp67, tmp68, flag);
                  const obj5 = { guildId, status: tmp68, limit, force: true };
                  const merged = Object.assign(tmp51);
                  limit = 3;
                  c7 = 1;
                  const obj6 = { value: guildJoinRequests(ref[5]).fetchGuildJoinRequests(obj5), done: false };
                  return obj6;
                }
              }
              c7 = 3;
            }
          } else if (1 !== tmp8) {
            if (2 === tmp8) {
              ref2 = 1;
              closure_130_2 = tmp58;
              const aPIError = new guildId(ref[6]).APIError(closure_130_2);
              closure_130_1 = aPIError;
              tmp58(closure_130_1.getAnyErrorMessage());
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              ref2 = 0;
              ref.current = false;
              c7 = 3;
              let obj = { value, done: true };
              return obj;
            } else {
              closure_130_0 = value;
              if (null != closure_130_0) {
                if (closure_130_0.body.guild_join_requests.length < limit) {
                  limit.current = true;
                }
              }
              ref2 = 1;
            }
            ref2 = 0;
            ref.current = false;
          }
          ref2 = 0;
          ref.current = false;
          throw tmp58;
        } catch (tmp58) {
          if (tmp5 === ref2) {
            c7 = tmp3;
            throw tmp58;
          } else if (tmp2 === tmp60) {
            limit = tmp2;
          } else {
            limit = tmp;
          }
        }
      }
    })();
  });
  const items = [error, guildId, guildJoinRequests];
  return {
    fetchNextPage: noop.useCallback(function() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }, items),
    error
  };
};
