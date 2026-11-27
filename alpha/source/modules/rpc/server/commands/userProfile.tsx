// Module ID: 15930
// Function ID: 15931
// Name: commands/userProfile
// Dependencies: [5, 5797, 1071, 15896, 15873, 15931, 15932, 15880, 2]

// Module 15930 (commands/userProfile)
import Constants from "Constants" /* 1071 */;
import Constants2 from "Constants" /* 5797 */;
import validateEmbeddedAppFrameDefault from "validateEmbeddedAppFrame" /* 15873 */;
import _asyncToGeneratorDefault from "_asyncToGenerator" /* 15896 */;
import getFrameProfileContextDefault from "getFrameProfileContext" /* 15931 */;
import userProfile from "userProfile" /* 15932 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15880 */;
import size from "module_2" /* 2 */;

let c1, c3, c4, iframeId, userId;

function openUserProfileForSocket() {
  return obj(...arguments);
}
let value = function _openUserProfileForSocket() {
  let obj = _asyncToGenerator(async function(arg0, value) {
    let closure_129_1;
    let closure_129_2;
    let closure_129_3;
    let frame;
    let closure_0 = arg0;
    let closure_1 = value;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let closure_2;
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
            closure_0 = closure_1;
            ({ iframeId: closure_129_1, frame } = validateEmbeddedAppFrameDefault(closure_0));
            const tmp17 = validateEmbeddedAppFrameDefault(closure_0);
            ({ guildId: closure_129_2, channelId: closure_129_3 } = getFrameProfileContextDefault(frame));
            const tmp18 = getFrameProfileContextDefault(frame);
            let tryAcquireResult = null;
            const obj7 = userProfile;
            const tmp13 = closure_0;
            if (!obj7.isAnyUserProfileOpen()) {
              tryAcquireResult = closure_2_4.tryAcquire(tmp13);
            }
            if (null == tryAcquireResult) {
              value = { opened: false };
            } else {
              closure_2 = {};
              const self = this;
              const self2 = this;
              const promise = new Promise((fn) => {
                userId = fn;
                iframeId = false;
                const obj = userId(guildId[6]);
                const obj2 = {
                  userId,
                  iframeId,
                  guildId,
                  channelId,
                  onOpen() {
                    const tmp = c1;
                    if (!tmp) {
                      tryAcquireResult({ startCooldown: false });
                      fn(true);
                    }
                  },
                  onClose() {
                    c1 = true;
                    tryAcquireResult();
                    fn(false);
                  }
                };
                if (!obj.openUserProfile(obj2)) {
                  let tmp = tryAcquireResult;
                  tryAcquireResult({ startCooldown: false });
                  fn(false);
                }
              });
              c3 = 1;
              c4 = 1;
              const obj4 = { value: promise, done: false };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          value = closure_2;
          closure_2.opened = value;
        }
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } catch (tmp9) {
        c4 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
const RPC_EMBEDDED_APP_SCOPE = Constants2.RPC_EMBEDDED_APP_SCOPE;
const RPCCommands = Constants.RPCCommands;
let closure_4 = _asyncToGeneratorDefault({ cooldownMs: 1000 });
value = {};
const OPEN_USER_PROFILE = RPCCommands.OPEN_USER_PROFILE;
let obj2 = {
  scope: RPC_EMBEDDED_APP_SCOPE,
  handler(socket) {
    return openUserProfileForSocket(socket.socket, socket.args.user_id);
  }
};
value[OPEN_USER_PROFILE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.OPEN_USER_PROFILE, obj2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/userProfile.tsx");

export default value;
export { openUserProfileForSocket };
