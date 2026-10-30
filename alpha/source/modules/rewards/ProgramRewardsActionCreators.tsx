// Module ID: 17645
// Function ID: 17646
// Name: ProgramRewardsActionCreators
// Dependencies: [5, 15572, 1072, 572, 1283, 17642, 15573, 2]
// Exports: conditionallyFetchProgramRewardsIgnoreCacheTTL, default

// Module 17645 (ProgramRewardsActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import ProgramRewardsUtils from "ProgramRewardsUtils" /* 15573 */;
import getShouldFetchProgramRewards from "getShouldFetchProgramRewards" /* 17642 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ProgramRewardsStore from "ProgramRewardsStore" /* 15572 */;
import size from "module_2" /* 2 */;

let c0, c1, c5, c6;

function fetchProgramRewards() {
  return obj(...arguments);
}
let obj = function _fetchProgramRewards() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        let programRewards;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            programRewards = undefined;
            const obj8 = DispatcherDefault;
            obj8.dispatch({ type: "PROGRAM_REWARDS_FETCH" });
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: constants.PROGRAM_REWARDS, rejectWithError: true };
            c5 = 2;
            c6 = 1;
            const obj6 = { value: HTTP.get(obj5), done: false };
            return obj6;
          }
        } else {
          if (1 === c5) {
            c4 = 0;
            const obj4 = closure_130_1(closure_130_2[3]);
            obj4.dispatch({ type: "PROGRAM_REWARDS_FETCH_FAILURE" });
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            const rewards = value.body.rewards;
            programRewards = rewards;
            if (rewards == null) {
              programRewards = [];
            }
            const obj9 = { type: "PROGRAM_REWARDS_FETCH_SUCCESS", programRewards };
            obj = closure_130_1(closure_130_2[3]);
            obj.dispatch(obj9);
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp17) {
        let closure_3 = tmp17;
        if (0 === c4) {
          c6 = 3;
          throw tmp17;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _conditionallyFetchProgramRewards() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c0 === 2) {
      c0 = 3;
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj2 = getShouldFetchProgramRewards;
            if (obj2.shouldFetchProgramRewards()) {
              c1 = 1;
              c0 = 1;
              const obj5 = { value: fetchProgramRewards(), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp7) {
        c0 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
obj = function _conditionallyFetchProgramRewardsIgnoreCacheTTL() {
  let fetching;
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c0 === 2) {
      c0 = 3;
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
        c0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c0 = 3;
            throw value;
          } else if (arg0 === 2) {
            c0 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            const obj2 = ProgramRewardsUtils;
            const result = obj2.canFetchAnyProgramReward() && !fetching.isFetching();
            if (result) {
              c1 = 1;
              c0 = 1;
              const obj5 = { value: fetchProgramRewards(), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c0 = 3;
          throw value;
        } else if (arg0 === 2) {
          c0 = 3;
          obj = { value, done: true };
          return obj;
        }
        c0 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp9) {
        c0 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/rewards/ProgramRewardsActionCreators.tsx");

export default function conditionallyFetchProgramRewards() {
  return obj(...arguments);
};
export { fetchProgramRewards };
export function conditionallyFetchProgramRewardsIgnoreCacheTTL() {
  return obj(...arguments);
}
