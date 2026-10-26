// Module ID: 11323
// Function ID: 11324
// Name: sendGameOrganizationInvite
// Dependencies: [5, 9131, 7809, 4978, 1128, 11324, 2]
// Exports: default

// Module 11323 (sendGameOrganizationInvite)
import intl4 from "intl" /* 1128 */;
import shared from "shared" /* 4978 */;
import Constants from "Constants" /* 7809 */;
import InstantInviteSendStateStore from "InstantInviteSendStateStore" /* 9131 */;
import GameOrganizationInviteSendActionCreatorsDefault from "GameOrganizationInviteSendActionCreators" /* 11324 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let AccessibilityAnnouncer, closure_5;

let obj = function _sendGameOrganizationInvite() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let user = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj3;
      let obj5;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+352" };
        }
      } else {
        try {
          let combined;
          let closure_4;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              user = closure_2;
              closure_2 = closure_3;
              setSendState(closure_0, closure_2.id, constants.SENDING);
              const AccessibilityAnnouncer3 = shared.AccessibilityAnnouncer;
              const announce2 = AccessibilityAnnouncer3.announce;
              const intl3 = intl4.intl;
              announce2(intl3.string(intl4.t.kC3ZRG));
              c6 = 1;
              const _HermesInternal = HermesInternal;
              combined = "" + closure_0 + ":" + closure_2.id;
              closure_4 = map.get(combined);
              AccessibilityAnnouncer = closure_4;
              const tmp60 = closure_2;
              if (null == closure_4) {
                c7 = 2;
                c8 = 1;
                const obj6 = { value: obj5.createInvite(user.applicationId, user.gameOrganizationId, tmp60.id), done: false };
                obj5 = GameOrganizationInviteSendActionCreatorsDefault;
                return obj6;
              }
            }
          } else {
            if (1 === c7) {
              c6 = 0;
              closure_133_4(closure_0, user.id, closure_133_5.ERROR);
              const AccessibilityAnnouncer2 = closure_133_0(closure_133_2[3]).AccessibilityAnnouncer;
              AccessibilityAnnouncer = AccessibilityAnnouncer2.announce;
              const intl = closure_133_0(closure_133_2[4]).intl;
              const result = AccessibilityAnnouncer(intl.string(closure_133_0(closure_133_2[4]).t.fEptJP));
              closure_2();
            } else if (2 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                return { value, done: true };
              } else {
                closure_4 = value;
                const result1 = closure_133_6.set(combined, closure_4);
              }
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              closure_133_6.delete(combined);
              closure_133_4(closure_0, user.id, closure_133_5.SENT);
              AccessibilityAnnouncer = closure_133_0(closure_133_2[3]).AccessibilityAnnouncer;
              const announce = AccessibilityAnnouncer.announce;
              const intl2 = closure_133_0(closure_133_2[4]).intl;
              announce(intl2.string(closure_133_0(closure_133_2[4]).t.PuLLzP));
              c6 = 0;
            }
            c8 = 3;
            return { value: "IconComponent", done: "+352" };
          }
          AccessibilityAnnouncer = closure_4;
          c7 = 3;
          c8 = 1;
          const obj8 = { value: obj3.sendInvite(user.id, closure_4), done: false };
          obj3 = closure_133_1(closure_133_2[5]);
          return obj8;
        } catch (tmp34) {
          if (0 === c6) {
            c8 = 3;
            throw tmp34;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const setSendState = InstantInviteSendStateStore.setSendState;
const InviteSendStates = Constants.InviteSendStates;
const map = new Map();
let result = size.fileFinishedImporting("modules/game_organization_invites/sendGameOrganizationInvite.tsx");

export default function sendGameOrganizationInvite() {
  return obj(...arguments);
};
