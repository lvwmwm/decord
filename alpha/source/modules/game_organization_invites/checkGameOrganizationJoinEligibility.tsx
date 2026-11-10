// Module ID: 13451
// Function ID: 13452
// Name: checkGameOrganizationJoinEligibility
// Dependencies: [5, 5045, 13452, 11512, 11513, 13453, 13454, 2]
// Exports: default

// Module 13451 (checkGameOrganizationJoinEligibility)
import withGameOrganizationJoinFlowPendingDefault from "withGameOrganizationJoinFlowPending" /* 13453 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5045 */;
import GameOrganizationCharacterEligibilityStore from "GameOrganizationCharacterEligibilityStore" /* 13452 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11512 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11513 */;
import size from "module_2" /* 2 */;

let c3, c4, invite;

let c9;
let metroImportAll;
let metroImportDefault;
let obj = function _checkGameOrganizationJoinEligibility() {
  let channelId;
  let constants2;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_1;
    let closure_0 = arg0;
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
      try {
        let channelId2;
        let length;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let c2 = 0;
            channelId2 = undefined;
            length = undefined;
            const obj6 = invite;
            invite = invite.getInvite(closure_0);
            let state;
            if (invite != null) {
              state = invite.state;
            }
            if (state === constants2.RESOLVED) {
              if (!obj6.isJoinFlowPending(closure_0)) {
                if (invite.characterMode !== constants.MULTI) {
                  c4 = 3;
                  return { value: "eligible", done: true };
                } else {
                  channelId2 = channelId.getChannelId();
                  c3 = 1;
                  c4 = 1;
                  const obj4 = {
                    value: withGameOrganizationJoinFlowPendingDefault(closure_0, () => {
                                    const useGameOrganizationCharacterEligibilityFetch = closure_2_0(length[6]).useGameOrganizationCharacterEligibilityFetch;
                                    const items = [closure_0];
                                    return useGameOrganizationCharacterEligibilityFetch.fetchMany(items);
                                  }),
                    done: false
                  };
                  return obj4;
                }
              }
            }
            c4 = 3;
            return { value: "noop", done: true };
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else if (closure_130_4.getChannelId() !== channelId2) {
          c4 = 3;
          return { value: "noop", done: true };
        } else {
          let str;
          length = closure_130_5.getCharacters(closure_0);
          if (null == length) {
            str = closure_130_8.ERROR;
          } else {
            str = "eligible";
            if (0 === length.length) {
              str = closure_130_8.NO_CHARACTERS;
            }
          }
          c4 = 3;
          obj = { value: str, done: true };
          return obj;
        }
      } catch (tmp23) {
        c4 = 3;
        throw tmp23;
      }
    }
  });
  return obj(...arguments);
};
({ GameOrganizationCharacterMode: metroImportDefault, GameOrganizationCantJoinReasons: metroImportAll, GameOrganizationInviteStates: c9 } = GameOrganizationInviteConstants);
const result = size.fileFinishedImporting("modules/game_organization_invites/checkGameOrganizationJoinEligibility.tsx");

export default function checkGameOrganizationJoinEligibility() {
  return obj(...arguments);
};
