// Module ID: 16289
// Function ID: 16290
// Name: useGameOrganizationInviteSuggestions
// Dependencies: [5, 32, 19, 14623, 5185, 1385, 8397, 12440, 504, 14622, 2]
// Exports: default

// Module 16289 (useGameOrganizationInviteSuggestions)
import InstantInviteUtils from "InstantInviteUtils" /* 8397 */;
import InviteSuggestionsActionCreators from "InviteSuggestionsActionCreators" /* 14622 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import InviteSuggestionsStore from "InviteSuggestionsStore" /* 14623 */;
import RelationshipStore from "RelationshipStore" /* 5185 */;
import UserStore from "UserStore" /* 1385 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c4, c5, currentUser, dependencyMap, inviteSuggestionRows, set;

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
  let closure_1;
  let closure_2;
  let hasNoFriends;
  let isLoading;
  const f112233 = (item) => item.item;
  let obj = require("get initialized");
  const items = [InviteSuggestionsStore, RelationshipStore, UserStore];
  const users = obj.useStateFromStoresArray(items, () => {
    inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
    currentUser = currentUser.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    closure_1 = closure_7;
    const found = inviteSuggestionRows.filter(closure_9);
    const mapped = found.map(f112233);
    return mapped.filter((item) => closure_2_1(ref[7])(item, id, closure_1));
  });
  [isLoading, _require] = react.useState(true);
  [hasNoFriends, closure_1] = react.useState(false);
  dependencyMap = react.useRef("");
  const search = react.useCallback((current) => {
    closure_2.current = current;
    const obj = InviteSuggestionsActionCreators;
    const result = obj.searchInviteSuggestions(current);
  }, []);
  const effect = react.useEffect(() => {
    function load() {
      return obj(...arguments);
    }
    let obj = function _load() {
      obj = _asyncToGenerator(async function(arg0, value) {
        let ref;
        function getCurrentInviteRecipients() {
          inviteSuggestionRows = inviteSuggestionRows.getInviteSuggestionRows();
          currentUser = currentUser.getCurrentUser();
          let id;
          if (currentUser != null) {
            id = currentUser.id;
          }
          closure_1 = closure_7;
          const found = inviteSuggestionRows.filter(closure_9);
          const mapped = found.map(f112233);
          return mapped.filter((item) => closure_2_1(ref[7])(item, id, closure_1));
        }
        if (c5 === 2) {
          c5 = 3;
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
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                c3 = 2;
                const obj4 = { omitUserIds: set };
                const _Set = Set;
                const self = this;
                const self2 = this;
                const loadInviteSuggestions = closure_2_0(closure_2_2[9]).loadInviteSuggestions;
                const tmp23 = closure_2_0(closure_2_2[9]);
                set = new Set();
                c4 = 3;
                c5 = 1;
                const obj5 = { value: loadInviteSuggestions(obj4), done: false };
                return obj5;
              }
            } else if (1 === c4) {
              c3 = 0;
              tmp(false);
              throw ref;
            } else if (2 === c4) {
              c3 = 0;
              tmp(false);
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              tmp(false);
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              tmp2(0 === getCurrentInviteRecipients().length);
              c3 = 0;
              tmp(false);
              if ("" !== ref.current) {
                obj = closure_2_0(closure_2_2[9]);
                const result = obj.searchInviteSuggestions(ref.current);
              }
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp26) {
            ref = tmp26;
            if (0 === c3) {
              c5 = 3;
              throw tmp26;
            } else if (1 === tmp28) {
              c4 = 1;
            } else {
              c4 = 2;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !load();
  }, []);
  return { users, isLoading, hasNoFriends, search };
};
