// Module ID: 15796
// Function ID: 15797
// Name: commands/userProfile
// Dependencies: [5, 6379, 1084, 15761, 15746, 15797, 2]

// Module 15796 (commands/userProfile)
import Constants from "Constants" /* 1084 */;
import Constants2 from "Constants" /* 6379 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15761 */;
import size from "module_2" /* 2 */;

let c2, c3;

const RPC_EMBEDDED_APP_SCOPE = Constants2.RPC_EMBEDDED_APP_SCOPE;
const RPCCommands = Constants.RPCCommands;
const weakMap = new WeakMap();
let obj = {};
const OPEN_USER_PROFILE = RPCCommands.OPEN_USER_PROFILE;
let obj2 = {
  scope: RPC_EMBEDDED_APP_SCOPE,
  handler(socket) {
    socket = socket.socket;
    let user_id = socket.args.user_id;
    return (async function(arg0, value) {
      let closure_0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let obj;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              let iframeId = user_id(c2[4])(socket).iframeId;
              value = weakMap.get(socket);
              socket = value;
              const obj8 = weakMap;
              const tmp15 = c2;
              const tmp16 = socket;
              if (value == null) {
                socket = { inFlight: false, readyAt: 0 };
              }
              const tmp4 = socket;
              user_id = socket;
              if (!socket.inFlight) {
                const _Date = Date;
                if (Date.now() >= tmp4.readyAt) {
                  const obj3 = socket(tmp15[5]);
                  if (!obj3.isAnyUserProfileOpen()) {
                    const flag = true;
                    tmp4.inFlight = true;
                    const result = obj8.set(tmp16, tmp4);
                    user_id = {};
                    const self = this;
                    const self2 = this;
                    const promise = new Promise((fn) => {
                      iframeId = fn;
                      let c1 = false;
                      const obj = closure_2_0(closure_2_2[5]);
                      const obj2 = {
                        userId,
                        iframeId,
                        onOpen() {
                          const tmp = c1;
                          if (!tmp) {
                            userId.inFlight = false;
                            fn(true);
                          }
                        },
                        onClose() {
                          c1 = true;
                          userId.inFlight = false;
                          userId.readyAt = Date.now() + 1000;
                          fn(false);
                        }
                      };
                      if (!obj.openUserProfile(obj2)) {
                        let tmp = c1;
                        c1.inFlight = false;
                        fn(false);
                      }
                    });
                    c2 = 1;
                    c3 = 1;
                    const obj5 = { value: promise, done: false };
                    return obj5;
                  }
                }
              }
              obj = { opened: false };
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            obj = user_id;
            user_id.opened = value;
          }
          c3 = 3;
          const obj7 = { value: obj, done: true };
          return obj7;
        } catch (tmp10) {
          c3 = 3;
          throw tmp10;
        }
      }
    })();
  }
};
obj[OPEN_USER_PROFILE] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.OPEN_USER_PROFILE, obj2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/userProfile.tsx");

export default obj;
