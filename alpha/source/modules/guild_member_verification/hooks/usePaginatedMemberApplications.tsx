// Module ID: 18384
// Function ID: 18385
// Name: usePaginatedMemberApplications
// Dependencies: [5, 32, 19, 5048, 11, 6974, 5761, 2]
// Exports: usePaginatedMemberApplications

// Module 18384 (usePaginatedMemberApplications)
import MemberVerificationTypes from "MemberVerificationTypes" /* 5048 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let closure_3, ref, ref2, set;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const result = MemberVerificationTypes.MAX_RESULTS_PER_PAGE * MemberVerificationTypes.MAX_VISIBLE_PAGES;
const metroRequire = result;
const result1 = size.fileFinishedImporting("modules/guild_member_verification/hooks/usePaginatedMemberApplications.tsx");

export const MEMBER_APPLICATION_FETCH_LIMIT = result;
export function usePaginatedMemberApplications(guildId) {
  let closure_4;
  let closure_5;
  let error;
  guildId = guildId.guildId;
  const guildJoinRequests = guildId.guildJoinRequests;
  error = undefined;
  _slicedToArray = undefined;
  react = undefined;
  const useRef = react.useRef;
  set = new Set();
  let closure_2 = useRef(set);
  [error, _slicedToArray] = react.useState(null);
  react = react.useRef(null);
  let closure_6 = react.useRef(false);
  const useCallback = react.useCallback;
  let closure_0 = error((guildId, status) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0, value) {
      function getRequestPaginationParams(after, arg1, arg2, arg3, flag) {
        let date;
        let fromTimestamp;
        const tmp2 = arg3 === guildId(closure_1_2[3]).GuildJoinRequestApplicationStatuses.SUBMITTED;
        if (arg2 === guildId(closure_1_2[3]).GuildJoinRequestSortOrders.TIMESTAMP_DESC) {
          if (!flag) {
            if (0 !== arg1.length) {
              return { before: tmp2 ? arg1[arg1.length - 1].joinRequestId : arg1[arg1.length - 1].actionedAt };
            }
          }
          const _Date = Date;
          const self = this;
          const self2 = this;
          const obj3 = { before: fromTimestamp(date.getTime()) };
          fromTimestamp = status(tmp[4]).fromTimestamp;
          status(closure_1_2[4]);
          date = new Date();
          return obj3;
        } else {
          if (!flag) {
            if (0 !== arg1.length) {
              return { after: tmp2 ? arg1[arg1.length - 1].joinRequestId : arg1[arg1.length - 1].actionedAt };
            }
          }
          return { after };
        }
      }
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
        try {
          let combined;
          let aPIError;
          c7 = 2;
          if (0 === ref2) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_3 = tmp;
              guildId = status;
              combined = undefined;
              closure_2 = undefined;
              aPIError = undefined;
              const current5 = closure_2.current;
              if (!current5.has(status)) {
                const _HermesInternal = HermesInternal;
                combined = "" + tmp77 + "-" + tmp78;
                let flag = false;
                if (combined !== ref.current) {
                  ref.current = combined;
                  ref2.current = false;
                  flag = true;
                }
                if (!ref2.current) {
                  if (null != closure_3) {
                    tmp69(null);
                  }
                  ref = 2;
                  const current4 = closure_2.current;
                  const tmp60 = getRequestPaginationParams(guildId, status, guildId, status, flag);
                  current4.add(status);
                  const obj4 = { guildId, status, limit, force: true };
                  const fetchGuildJoinRequests = guildJoinRequests(closure_2_2[5]).fetchGuildJoinRequests;
                  guildJoinRequests(closure_2_2[5]);
                  const merged = Object.assign(tmp60);
                  ref2 = 3;
                  c7 = 1;
                  const obj5 = { value: fetchGuildJoinRequests(obj4), done: false };
                  return obj5;
                }
              }
            }
          } else if (1 === ref2) {
            ref = 0;
            const current3 = closure_2.current;
            current3.delete(guildId);
            throw tmp69;
          } else {
            if (2 === ref2) {
              ref = 1;
              let self = this;
              let self2 = this;
              aPIError = new guildId(closure_2_2[6]).APIError(tmp69);
              tmp69(aPIError.getAnyErrorMessage());
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              ref = 0;
              const current = closure_2.current;
              current.delete(guildId);
              c7 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_2 = value;
              if (null != closure_2) {
                if (combined === ref.current) {
                  if (closure_2.body.guild_join_requests.length < limit) {
                    ref2.current = true;
                  }
                }
              }
              ref = 1;
            }
            ref = 0;
            const current2 = closure_2.current;
            current2.delete(guildId);
          }
          c7 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp69) {
          if (0 === ref) {
            c7 = 3;
            throw tmp69;
          } else if (1 === tmp71) {
            ref2 = 1;
          } else {
            ref2 = 2;
          }
        }
      }
    })();
  });
  const items = [error, guildId, guildJoinRequests];
  let obj = {
    fetchNextPage: useCallback(function() {
      return closure_0(...arguments);
    }, items),
    error
  };
  return obj;
}
