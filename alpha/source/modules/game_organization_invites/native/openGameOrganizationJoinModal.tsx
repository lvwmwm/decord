// Module ID: 13438
// Function ID: 13439
// Name: openGameOrganizationJoinModal
// Dependencies: [5, 5046, 13439, 11559, 11560, 13440, 13441, 13442, 6882, 13446, 2123, 2]
// Exports: default

// Module 13438 (openGameOrganizationJoinModal)
import withGameOrganizationJoinFlowPendingDefault from "withGameOrganizationJoinFlowPending" /* 13440 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SelectedChannelStore from "SelectedChannelStore" /* 5046 */;
import GameOrganizationCharacterEligibilityStore from "GameOrganizationCharacterEligibilityStore" /* 13439 */;
import GameOrganizationInviteStore from "GameOrganizationInviteStore" /* 11559 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 11560 */;
import size from "module_2" /* 2 */;

let c1, invite, length;

let c9;
let metroImportAll;
let metroImportDefault;
let obj = function _openGameOrganizationJoinModal() {
  let channelId;
  let constants2;
  obj = _asyncToGenerator(async (code) => {
    let c3 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let channelId2;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              c1 = 0;
              channelId2 = undefined;
              length = undefined;
              const obj9 = invite;
              invite = invite.getInvite(code);
              let state;
              if (invite != null) {
                state = invite.state;
              }
              if (state === constants2.RESOLVED) {
                if (!obj9.isJoinFlowPending(code)) {
                  if (invite.characterMode === constants.MULTI) {
                    channelId2 = channelId.getChannelId();
                    c3 = 1;
                    c4 = 1;
                    const obj5 = {
                      value: withGameOrganizationJoinFlowPendingDefault(code, () => {
                                      const useGameOrganizationCharacterEligibilityFetch = code(length[6]).useGameOrganizationCharacterEligibilityFetch;
                                      const items = [closure_0];
                                      return useGameOrganizationCharacterEligibilityFetch.fetchMany(items);
                                    }),
                      done: false
                    };
                    return obj5;
                  }
                }
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else if (closure_130_4.getChannelId() !== channelId2) {
            c4 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            length = closure_130_5.getCharacters(code);
            if (null == length) {
              closure_130_1(closure_130_2[7])(code, closure_130_7.ERROR);
              c4 = 3;
              return { value: undefined, done: true };
            } else if (0 === length.length) {
              closure_130_1(closure_130_2[7])(code, closure_130_7.NO_CHARACTERS);
              c4 = 3;
              return { value: undefined, done: true };
            }
          }
          const obj8 = { code };
          const obj4 = closure_130_1(closure_130_2[8]);
          obj4.pushLazy(closure_130_0(closure_130_2[10])(closure_130_2[9], closure_130_2.paths), obj8);
        } catch (tmp30) {
          c4 = 3;
          throw tmp30;
        }
      }
    })();
  });
  return obj(...arguments);
};
({ GameOrganizationCantJoinReasons: metroImportDefault, GameOrganizationCharacterMode: metroImportAll, GameOrganizationInviteStates: c9 } = GameOrganizationInviteConstants);
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal() {
  return obj(...arguments);
};
