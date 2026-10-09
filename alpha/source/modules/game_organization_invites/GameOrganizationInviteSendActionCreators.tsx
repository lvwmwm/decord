// Module ID: 14114
// Function ID: 14115
// Name: GameOrganizationInviteSendActionCreators
// Dependencies: [5, 1085, 5084, 1295, 5633, 7008, 7172, 14115, 2]

// Module 14114 (GameOrganizationInviteSendActionCreators)
import Constants from "Constants" /* 1085 */;
import MessageConstants from "MessageConstants" /* 5084 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c2, c4, c5;

const Endpoints = Constants.Endpoints;
const MessageSendLocation = MessageConstants.MessageSendLocation;
let obj = {
  createInvite(arg0, arg1, arg2) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    return (async function(arg0, value) {
      let obj4;
      let target_user_id;
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
          return { value: "IconComponent", done: null };
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
              closure_0 = tmp4;
              c3 = 1;
              const HTTP = closure_0(target_user_id[3]).HTTP;
              const request = { url: c4.GAME_ORGANIZATION_INVITES(closure_0, tmp), body: obj4, rejectWithError: true };
              const post = HTTP.post;
              obj4 = { target_user_id };
              c4 = 2;
              c5 = 1;
              const obj5 = { value: post(request), done: false };
              return obj5;
            }
          } else if (1 === c4) {
            c3 = 0;
            closure_0 = target_user_id;
            const self = this;
            const self2 = this;
            const tmp12 = new tmp(target_user_id[4])(closure_0);
            throw tmp12;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c3 = 0;
            c5 = 3;
            const obj = { value: value.body.code, done: true };
            return obj;
          }
        } catch (tmp14) {
          target_user_id = tmp14;
          if (0 === c3) {
            c5 = 3;
            throw tmp14;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  },
  sendInvite(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async (arg0, value) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_1 = tmp4;
              closure_0 = undefined;
              const obj4 = closure_1(c2[5]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj4.getOrEnsurePrivateChannel(closure_0), done: false };
              return obj5;
            }
          } else if (1 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_0 = value;
              const tmp16 = closure_1(c2[6]);
              const obj7 = { content: closure_1(c2[7])(closure_129_1), tts: false, invalidEmojis: [], validNonShortcutEmojis: [] };
              const sendMessage = tmp16.sendMessage;
              const obj8 = { location: constants.GAME_ORGANIZATION_INVITE };
              c2 = 2;
              c3 = 1;
              const obj9 = { value: sendMessage(closure_0, obj7, false, obj8), done: false };
              return obj9;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c3 = 3;
          throw tmp8;
        }
      }
    })();
  }
};
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInviteSendActionCreators.tsx");

export default obj;
