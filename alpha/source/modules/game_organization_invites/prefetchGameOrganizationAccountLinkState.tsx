// Module ID: 12622
// Function ID: 12623
// Name: prefetchGameOrganizationAccountLinkState
// Dependencies: [5, 2045, 7182, 10976, 10977, 6788, 7233, 7236, 2]
// Exports: default

// Module 12622 (prefetchGameOrganizationAccountLinkState)
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6788 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 7182 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 10977 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 10976 */;
import size from "module_2" /* 2 */;

let c5, c6, invite;

let obj = function _prefetchGameOrganizationAccountLinkState() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        let id;
        let id2;
        let closure_2;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            id = undefined;
            id2 = undefined;
            closure_2 = undefined;
            invite = invite.getInvite(closure_0);
            let state;
            if (invite != null) {
              state = invite.state;
            }
            if (state === constants.RESOLVED) {
              id = invite.application.id;
              c4 = 1;
              const items = [id];
              c5 = 2;
              c6 = 1;
              const obj5 = { value: obj2.fetchApplications(items, false), done: false };
              obj2 = ApplicationActionCreatorsDefault;
              return obj5;
            }
          }
        } else if (1 === c5) {
          c4 = 0;
          c6 = 3;
          return { value: "IconComponent", done: null };
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c4 = 0;
          const obj6 = closure_131_0(closure_131_2[6]);
          id2 = obj6.getAuthorizationApp(closure_131_4.getApplication(id));
          if (null != id2) {
            const parentId = id2.parentId;
            id2 = parentId;
            if (parentId == null) {
              id2 = id2.id;
            }
            closure_2 = id2;
            if (closure_131_5.getFetchStateForApplication(closure_2) === closure_131_6.NOT_FETCHED) {
              const items1 = [closure_2];
              const obj7 = closure_131_1(closure_131_2[7]);
              const response = obj7.fetch(items1);
            }
          }
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp17) {
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
const FetchState = AuthorizedAppsStore2.FetchState;
let closure_8 = GameOrganizationInviteConstants.GameOrganizationInviteStates;
const result = size.fileFinishedImporting("modules/game_organization_invites/prefetchGameOrganizationAccountLinkState.tsx");

export default function prefetchGameOrganizationAccountLinkState() {
  return obj(...arguments);
};
