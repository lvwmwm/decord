// Module ID: 19833
// Function ID: 19834
// Name: useInterestGuildJoins
// Dependencies: [5, 32, 19, 5012, 1072, 19834, 7037, 7041, 5845, 1113, 2537, 2]
// Exports: default

// Module 19833 (useInterestGuildJoins)
import Constants from "Constants" /* 1072 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5012 */;
import size from "module_2" /* 2 */;

let c1, c2;

const JoinGuildSources = Constants.JoinGuildSources;
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/useInterestGuildJoins.tsx");

export default function useInterestGuildJoins() {
  return _slicedToArray(react.useState(() => {
    let closure_0;
    const InterestGuildJoins = closure_0(closure_2[5]).InterestGuildJoins;
    closure_0 = closure_3(function*(arg0, value) {
      let guild;
      let v3;
      closure_0 = arg0;
      if (c1 === 2) {
        c1 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c1 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c1 = 3;
              throw value;
            } else if (arg0 === 2) {
              c1 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              guild = guild.getGuild(closure_0);
              let joinedAt;
              const tmp12 = closure_0;
              if (guild != null) {
                joinedAt = guild.joinedAt;
              }
              if (null == joinedAt) {
                const obj5 = { autoNavigate: false, source: constants.WATERWHEELS_INTEREST_SERVERS };
                const obj2 = c1(c2[6]);
                c2 = 1;
                c1 = 1;
                const obj6 = { value: obj2.joinGuild(tmp12, obj5), done: false };
                return obj6;
              }
            }
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c1 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp8) {
          c1 = 3;
          throw tmp8;
        }
      }
    });
    const interestGuildJoins = new InterestGuildJoins(function() {
      return closure_0(...arguments);
    }, (arg0) => {
      if (!(arg0 instanceof closure_0(closure_1_2[7]).JoinGuildRefusedError)) {
        const presentError = closure_0(closure_1_2[8]).presentError;
        closure_0(closure_1_2[8]);
        const intl = tmp(tmp2[9]).intl;
        presentError(intl.string(closure_1_1(closure_1_2[10]).grYfmA));
      }
    });
    return interestGuildJoins;
  }), 1)[0];
};
