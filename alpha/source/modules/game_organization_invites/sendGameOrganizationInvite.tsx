// Module ID: 14113
// Function ID: 14114
// Name: sendGameOrganizationInvite
// Dependencies: [5, 8747, 10452, 7423, 4930, 1126, 14114, 5633, 2]
// Exports: default

// Module 14113 (sendGameOrganizationInvite)
import intl4 from "intl" /* 1126 */;
import shared from "shared" /* 4930 */;
import Constants from "Constants" /* 7423 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 8747 */;
import GameOrganizationInviteConstants from "GameOrganizationInviteConstants" /* 10452 */;
import GameOrganizationInviteSendActionCreatorsDefault from "GameOrganizationInviteSendActionCreators" /* 14114 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let AccessibilityAnnouncer, closure_6, code;

let obj = function _sendGameOrganizationInvite() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let user = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c8 = 0;
    let c9 = 0;
    let c7 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj3;
      let obj5;
      if (c9 === 2) {
        c9 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let combined;
          let closure_4;
          c9 = 2;
          if (0 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              return { value, done: true };
            } else {
              code = tmp;
              user = closure_2;
              closure_2 = closure_3;
              setSendState(closure_0, closure_2.id, constants.SENDING);
              const AccessibilityAnnouncer3 = shared.AccessibilityAnnouncer;
              const announce3 = AccessibilityAnnouncer3.announce;
              const intl3 = intl4.intl;
              announce3(intl3.string(intl4.t.kC3ZRG));
              c7 = 1;
              const _HermesInternal = HermesInternal;
              combined = "" + closure_0 + ":" + closure_2.id;
              closure_4 = map.get(combined);
              AccessibilityAnnouncer = closure_4;
              const tmp71 = closure_2;
              if (null == closure_4) {
                c8 = 2;
                c9 = 1;
                const obj6 = { value: obj5.createInvite(user.applicationId, user.gameOrganizationId, tmp71.id), done: false };
                obj5 = GameOrganizationInviteSendActionCreatorsDefault;
                return obj6;
              }
            }
          } else {
            if (1 === c8) {
              c7 = 0;
              code = closure_6;
              closure_133_4(closure_0, user.id, closure_133_6.ERROR);
              const AccessibilityAnnouncer2 = closure_133_0(closure_133_2[4]).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer2.announce;
              const intl = closure_133_0(closure_133_2[5]).intl;
              announce(intl.string(closure_133_0(closure_133_2[5]).t.fEptJP));
              AccessibilityAnnouncer = closure_133_1;
              const tmp29 = code instanceof closure_133_1(closure_133_2[7]) && code.code === closure_133_5;
              if (tmp29) {
                closure_2();
              }
            } else if (2 === c8) {
              if (arg0 === 1) {
                c9 = 3;
                throw value;
              } else if (arg0 === 2) {
                c7 = 0;
                c9 = 3;
                return { value, done: true };
              } else {
                closure_4 = value;
                const result = closure_133_7.set(combined, closure_4);
              }
            } else if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              c9 = 3;
              return { value, done: true };
            } else {
              closure_133_7.delete(combined);
              closure_133_4(closure_0, user.id, closure_133_6.SENT);
              AccessibilityAnnouncer = closure_133_0(closure_133_2[4]).AccessibilityAnnouncer;
              const announce2 = AccessibilityAnnouncer.announce;
              const intl2 = closure_133_0(closure_133_2[5]).intl;
              announce2(intl2.string(closure_133_0(closure_133_2[5]).t.PuLLzP));
              c7 = 0;
            }
            c9 = 3;
            return { value: "IconComponent", done: null };
          }
          AccessibilityAnnouncer = closure_4;
          c8 = 3;
          c9 = 1;
          const obj8 = { value: obj3.sendInvite(user.id, closure_4), done: false };
          obj3 = closure_133_1(closure_133_2[6]);
          return obj8;
        } catch (tmp44) {
          closure_6 = tmp44;
          if (0 === c7) {
            c9 = 3;
            throw tmp44;
          } else {
            c8 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const setSendState = InstantInviteSendStateStore.setSendState;
let closure_5 = GameOrganizationInviteConstants.GAME_ORGANIZATION_INVITE_TOO_MANY_INVITES_ERROR_CODE;
const InviteSendStates = Constants.InviteSendStates;
const map = new Map();
let result = size.fileFinishedImporting("modules/game_organization_invites/sendGameOrganizationInvite.tsx");

export default function sendGameOrganizationInvite() {
  return obj(...arguments);
};
