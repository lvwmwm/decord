// Module ID: 15730
// Function ID: 15731
// Name: commands/config
// Dependencies: [6378, 1087, 15725, 9264, 584, 2]

// Module 15730 (commands/config)
import DispatcherDefault from "Dispatcher" /* 584 */;
import RPCErrorDefault from "RPCError" /* 9264 */;
import Constants_mod from "Constants" /* 6378 */;
import Constants_mod2 from "Constants" /* 1087 */;
import CONTEXT_MENU_ICON_NAMES from "CONTEXT_MENU_ICON_NAMES" /* 15725 */;
import size from "module_2" /* 2 */;

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let c2;
let c3;
let Constants = Constants_mod2;
({ TransportTypes: c2, RPC_AUTHENTICATED_SCOPE } = Constants);
Constants = Constants_mod2;
({ RPCCommands, RPCErrors: c3 } = Constants);
let obj = {};
const SET_CONFIG = RPCCommands.SET_CONFIG;
let obj2 = {
  scope: RPC_AUTHENTICATED_SCOPE,
  handler(socket) {
    let obj5;
    socket = socket.socket;
    const use_interactive_pip = socket.args.use_interactive_pip;
    if (socket.transport !== constants.POST_MESSAGE) {
      const _HermesInternal = HermesInternal;
      const self3 = this;
      const self4 = this;
      const obj2 = { errorCode: constants2.INVALID_COMMAND };
      const tmp13 = RPCErrorDefault;
      const tmp132 = new tmp13(obj2, "command not available from \"" + socket.transport + " transport");
      throw tmp132;
    } else if (null == socket.application.id) {
      const self = this;
      const self2 = this;
      const obj3 = { errorCode: constants2.INVALID_COMMAND };
      const tmp9 = new RPCErrorDefault(obj3, "invalid application");
      throw tmp9;
    } else {
      const obj4 = { type: "EMBEDDED_ACTIVITY_SET_CONFIG", applicationId: socket.application.id, config: obj5 };
      obj5 = { useInteractivePIP: use_interactive_pip };
      const obj = DispatcherDefault;
      obj.dispatch(obj4);
      const obj6 = { use_interactive_pip };
      return Promise.resolve(obj6);
    }
  }
};
obj[SET_CONFIG] = CONTEXT_MENU_ICON_NAMES.createRPCCommand(RPCCommands.SET_CONFIG, obj2);
const result = size.fileFinishedImporting("modules/rpc/server/commands/config.tsx");

export default obj;
