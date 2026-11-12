// Module ID: 20013
// Function ID: 20014
// Name: InterestGuildActions
// Dependencies: [5, 5204, 5021, 1072, 5206, 6990, 6994, 5868, 1113, 2534, 2]
// Exports: getInterestGuildJoinsInFlight, joinInterestGuild

// Module 20013 (InterestGuildActions)
import Constants from "Constants" /* 1072 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5206 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6990 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import UserGuildJoinRequestStore from "UserGuildJoinRequestStore" /* 5204 */;
import GuildMembershipStore from "GuildMembershipStore" /* 5021 */;
import size from "module_2" /* 2 */;

let c7, c8, closure_5, request;

let obj = function _joinInterestGuild() {
  let member;
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
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
      let c6;
      try {
        let str;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_4 = tmp;
            closure_1 = closure_2;
            str = set.has(closure_0);
            if (!str) {
              str = member.isMember(tmp95);
              if (!str) {
                str = request.getRequest(tmp95);
                let applicationStatus;
                if (str != null) {
                  applicationStatus = str.applicationStatus;
                }
                str = MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED;
                if (applicationStatus !== str) {
                  str = set.add(tmp95);
                  if (closure_1 != null) {
                    closure_1();
                  }
                  c6 = 2;
                  const obj5 = { autoNavigate: false, source: constants.WATERWHEELS_INTEREST_SERVERS };
                  const obj2 = GuildActionCreatorsDefault;
                  str = obj2.joinGuild(tmp95, obj5);
                  c7 = 3;
                  c8 = 1;
                  const obj6 = { value: str, done: false };
                  return obj6;
                }
              }
            }
          }
        } else if (1 === c7) {
          c6 = 0;
          closure_132_7.delete(closure_0);
          str = closure_132_5.isMember(closure_0);
          let str4 = "joined";
          const tmp57 = closure_5;
          if (!str) {
            str = closure_132_4.getRequest(closure_0);
            let applicationStatus1;
            if (str != null) {
              applicationStatus1 = str.applicationStatus;
            }
            str = "failed";
            if (applicationStatus1 === closure_132_0(closure_132_2[4]).GuildJoinRequestApplicationStatuses.SUBMITTED) {
              str = "pending";
            }
            str4 = str;
          }
          str = str4;
          if (closure_1 != null) {
            str = tmp72(str);
          }
          throw tmp57;
        } else {
          if (2 === c7) {
            str = closure_5;
            c6 = 1;
            if (!(closure_5 instanceof closure_132_0(closure_132_2[6]).JoinGuildRefusedError)) {
              str = closure_132_0(closure_132_2[7]).presentError;
              const tmp32 = closure_132_0(closure_132_2[7]);
              const intl = closure_132_0(closure_132_2[8]).intl;
              str(intl.string(closure_132_1(closure_132_2[9]).grYfmA));
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            closure_132_7.delete(closure_0);
            str = "joined";
            if (!closure_132_5.isMember(closure_0)) {
              request = closure_132_4.getRequest(closure_0);
              let applicationStatus2;
              if (request != null) {
                applicationStatus2 = request.applicationStatus;
              }
              let str2 = "failed";
              if (applicationStatus2 === closure_132_0(closure_132_2[4]).GuildJoinRequestApplicationStatuses.SUBMITTED) {
                str2 = "pending";
              }
              str = str2;
            }
            str = closure_1;
            if (closure_1 != null) {
              str(str);
            }
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c6 = 1;
          }
          c6 = 0;
          closure_132_7.delete(closure_0);
          str = "joined";
          if (!closure_132_5.isMember(closure_0)) {
            const request1 = closure_132_4.getRequest(closure_0);
            let applicationStatus3;
            if (request1 != null) {
              applicationStatus3 = request1.applicationStatus;
            }
            let str3 = "failed";
            if (applicationStatus3 === closure_132_0(closure_132_2[4]).GuildJoinRequestApplicationStatuses.SUBMITTED) {
              str3 = "pending";
            }
            str = str3;
          }
          str = closure_1;
          if (closure_1 != null) {
            str(str);
          }
        }
        c8 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp85) {
        closure_5 = tmp85;
        if (0 === c6) {
          c8 = 3;
          throw tmp85;
        } else if (1 === tmp87) {
          c7 = 1;
        } else {
          c7 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const JoinGuildSources = Constants.JoinGuildSources;
const set = new Set();
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildActions.tsx");

export function getInterestGuildJoinsInFlight() {
  return Array.from(set);
}
export function joinInterestGuild() {
  return obj(...arguments);
}
