// Module ID: 16035
// Function ID: 16036
// Name: useGameOrganizationInviteSuggestions
// Dependencies: [5, 32, 19, 9278, 5083, 1385, 9265, 504, 11816, 9295, 2]
// Exports: default

// Module 16035 (useGameOrganizationInviteSuggestions)
import InstantInviteUtils from "InstantInviteUtils" /* 9265 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 9295 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 9278 */;
import RelationshipStore from "RelationshipStore" /* 5083 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, closure_2, currentUser, inviteSuggestionRows, ref, set;

function isUserRow(type) {
  let tmp3 = type.type === InstantInviteUtils.RowTypes.FRIEND;
  if (!tmp3) {
    tmp3 = type.type === InstantInviteUtils.RowTypes.DM;
  }
  return tmp3;
}
let result = size.fileFinishedImporting("modules/game_organization_invites/useGameOrganizationInviteSuggestions.tsx");

export default function useGameOrganizationInviteSuggestions() {
  let closure_0;
  let isLoading;
  let obj = require("get initialized");
  const items = [InviteSuggestionsStore, RelationshipStore, UserStore];
  const users = obj.useStateFromStoresArray(items, () => {
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
    const found = inviteSuggestionRows.filter(closure_9);
    const mapped = found.map((item) => item.item);
    return mapped.filter((item) => closure_1(dependencyMap[8])(item, id, RelationshipStore));
  });
  [isLoading, _require] = react.useState(true);
  let closure_1 = react.useRef("");
  const search = react.useCallback((current) => {
    closure_1.current = current;
    const obj = InviteSuggestionsActionCreators;
    const result = obj.searchInviteSuggestions(current);
  }, []);
  const effect = react.useEffect(() => {
    function load() {
      return obj(...arguments);
    }
    let obj = function _load() {
      obj = _asyncToGenerator(async function(arg0, value) {
        if (c4 === 2) {
          c4 = 3;
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
          let c3;
          try {
            c4 = 2;
            if (0 === ref) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                c3 = 2;
                const obj4 = { omitUserIds: set };
                const _Set = Set;
                const self = this;
                const self2 = this;
                const loadInviteSuggestions = closure_2_0(closure_2_2[9]).loadInviteSuggestions;
                const tmp28 = closure_2_0(closure_2_2[9]);
                set = new Set();
                ref = 3;
                c4 = 1;
                const obj5 = { value: loadInviteSuggestions(obj4), done: false };
                return obj5;
              }
            } else if (1 === ref) {
              c3 = 0;
              tmp(false);
              throw closure_2;
            } else if (2 === ref) {
              c3 = 0;
              tmp(false);
              c4 = 3;
              return { value: "HermesInternal", done: null };
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              tmp(false);
              c4 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              c3 = 0;
              tmp(false);
              if ("" !== ref.current) {
                obj = closure_2_0(closure_2_2[9]);
                const result = obj.searchInviteSuggestions(ref.current);
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp31) {
            closure_2 = tmp31;
            if (0 === c3) {
              c4 = 3;
              throw tmp31;
            } else if (1 === tmp33) {
              ref = 1;
            } else {
              ref = 2;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !load();
  }, []);
  return { users, isLoading, search };
};
