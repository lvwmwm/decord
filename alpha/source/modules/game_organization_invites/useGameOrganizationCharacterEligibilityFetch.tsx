// Module ID: 13148
// Function ID: 13149
// Name: useGameOrganizationCharacterEligibilityFetch
// Dependencies: [5, 13149, 1072, 504, 1090, 11617, 11618, 2]

// Module 13148 (useGameOrganizationCharacterEligibilityFetch)
import Constants from "Constants" /* 1072 */;
import DurationsDefault from "Durations" /* 1090 */;
import isRetryableFetchErrorDefault from "isRetryableFetchError" /* 11617 */;
import GameOrganizationInviteActionCreatorsDefault from "GameOrganizationInviteActionCreators" /* 11618 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GameOrganizationCharacterEligibilityStore from "GameOrganizationCharacterEligibilityStore" /* 13149 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

let c1, c2;

let obj2;
const QueryIds = Constants.QueryIds;
let obj = {
  getQueryId: QueryIds.GAME_ORGANIZATION_CHARACTER_ELIGIBILITY,
  staleAfter: DurationsDefault.Seconds.MINUTE,
  failureStaleAfter: DurationsDefault.Seconds.MINUTE,
  retryConfig: obj2,
  get(arg0) {
    let characters = null;
    if (null != arg0) {
      characters = GameOrganizationCharacterEligibilityStore.getCharacters(arg0);
    }
    return characters;
  },
  load() {
    return closure_2(...arguments);
  }
};
const createFetchStore = get_initialized.createFetchStore;
obj2 = { retryableErrors: isRetryableFetchErrorDefault };
let closure_2 = _asyncToGenerator(async (arg0, value) => {
  let obj2;
  let closure_0 = arg0;
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
        } else if (null != closure_0) {
          c2 = 1;
          c1 = 1;
          const obj5 = { value: obj2.fetchCharacterEligibility(tmp4), done: false };
          obj2 = GameOrganizationInviteActionCreatorsDefault;
          return obj5;
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
const fetchStore = createFetchStore(GameOrganizationCharacterEligibilityStore, obj);
const result = size.fileFinishedImporting("modules/game_organization_invites/useGameOrganizationCharacterEligibilityFetch.tsx");

export const useGameOrganizationCharacterEligibilityFetch = fetchStore;
