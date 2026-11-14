// Module ID: 14065
// Function ID: 14066
// Name: openGameOrganizationJoinModal
// Dependencies: [5, 12369, 14066, 14070, 6848, 14073, 2121, 2]
// Exports: default

// Module 14065 (openGameOrganizationJoinModal)
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 12369 */;
import checkGameOrganizationJoinEligibilityDefault from "checkGameOrganizationJoinEligibility" /* 14066 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_1, closure_2;

let obj = function _openGameOrganizationJoinModal() {
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
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              closure_1 = undefined;
              c3 = 1;
              c4 = 1;
              const obj4 = { value: checkGameOrganizationJoinEligibilityDefault(code), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            closure_1 = value;
            if ("noop" !== closure_1) {
              if ("eligible" === closure_1) {
                const obj6 = { code };
                obj = closure_130_1(closure_130_2[4]);
                obj.pushLazy(closure_130_0(closure_130_2[6])(closure_130_2[5], closure_130_2.paths), obj6, closure_130_4);
              } else {
                closure_130_1(closure_130_2[3])(code, closure_1);
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp24) {
          c4 = 3;
          throw tmp24;
        }
      }
    })();
  });
  return obj(...arguments);
};
let closure_4 = GameOrganizationInviteConstants.GAME_ORGANIZATION_JOIN_MODAL_KEY;
const result = size.fileFinishedImporting("modules/game_organization_invites/native/openGameOrganizationJoinModal.tsx");

export default function openGameOrganizationJoinModal() {
  return obj(...arguments);
};
