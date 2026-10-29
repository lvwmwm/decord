// Module ID: 12997
// Function ID: 12998
// Name: useGameOrganizationCharacterEligibilityFetch
// Dependencies: [5, 12998, 1084, 504, 1101, 11414, 11415, 2]

// Module 12997 (useGameOrganizationCharacterEligibilityFetch)
import Constants from "Constants" /* 1084 */;
import DurationsDefault from "Durations" /* 1101 */;
import isRetryableFetchErrorDefault from "isRetryableFetchError" /* 11414 */;
import GameOrganizationInviteActionCreatorsDefault from "GameOrganizationInviteActionCreators" /* 11415 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import GameOrganizationCharacterEligibilityStore from "GameOrganizationCharacterEligibilityStore" /* 12998 */;
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
      return { value: "IconComponent", done: "IconComponent" };
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
      return { value: "IconComponent", done: "IconComponent" };
    } catch (tmp8) {
      c1 = 3;
      throw tmp8;
    }
  }
});
const fetchStore = createFetchStore(GameOrganizationCharacterEligibilityStore, obj);
const result = size.fileFinishedImporting("modules/game_organization_invites/useGameOrganizationCharacterEligibilityFetch.tsx");

export const useGameOrganizationCharacterEligibilityFetch = fetchStore;
