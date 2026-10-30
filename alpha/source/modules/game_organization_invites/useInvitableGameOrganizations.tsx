// Module ID: 11615
// Function ID: 11616
// Name: useInvitableGameOrganizations
// Dependencies: [5, 11616, 1072, 504, 1090, 11617, 11618, 11619, 2]
// Exports: default

// Module 11615 (useInvitableGameOrganizations)
import Constants from "Constants" /* 1072 */;
import DurationsDefault from "Durations" /* 1090 */;
import isRetryableFetchErrorDefault from "isRetryableFetchError" /* 11617 */;
import GameOrganizationInviteActionCreatorsDefault from "GameOrganizationInviteActionCreators" /* 11618 */;
import useCanInviteGuildIdsDefault from "useCanInviteGuildIds" /* 11619 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import InvitableGameOrganizationStore from "InvitableGameOrganizationStore" /* 11616 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

let c1, c2;

let obj2;
const QueryIds = Constants.QueryIds;
let obj = {
  getQueryId: QueryIds.INVITABLE_GAME_ORGANIZATIONS,
  staleAfter: DurationsDefault.Seconds.MINUTE,
  failureStaleAfter: DurationsDefault.Seconds.MINUTE,
  retryConfig: obj2,
  get(guildIds) {
    return InvitableGameOrganizationStore.getInvitableGameOrganizations(guildIds);
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
        } else {
          c2 = 1;
          c1 = 1;
          const obj5 = { value: obj2.fetchInvitableGameOrganizations(closure_0), done: false };
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
      } else {
        c1 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp7) {
      c1 = 3;
      throw tmp7;
    }
  }
});
const fetchStore = createFetchStore(InvitableGameOrganizationStore, obj);
const result = size.fileFinishedImporting("modules/game_organization_invites/useInvitableGameOrganizations.tsx");

export default function useInvitableGameOrganizations(arg0) {
  return fetchStore(useCanInviteGuildIdsDefault(arg0));
};
export const useInvitableGameOrganizationsFetch = fetchStore;
