// Module ID: 13460
// Function ID: 103431
// Name: set
// Dependencies: [5, 1347, 4167, 4033, 653, 4155, 10528, 10530, 477, 10552, 4124, 3748, 13461, 3821, 675, 8380, 13462, 10525, 5796, 13456, 7371, 13463, 2]

// Module 13460 (set)
import closure_3 from "items3";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import RPC_SCOPE_CONFIG from "RPC_SCOPE_CONFIG";
import ME from "ME";
import items3 from "items3";
import createRPCCommand from "createRPCCommand";
import set from "_isNativeReflectConstruct";

let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_10;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG } = RPC_SCOPE_CONFIG);
({ ApplicationFlags: closure_6, PopoutWindowKeys: closure_7, RPCCommands, RPCErrors: closure_8, UserSettingsSections: closure_9, AnalyticEvents: closure_10 } = ME);
const items = [, ];
({ AM_HARMONY_PRD_APPLICATION_ID: arr[0], AM_HARMONY_STG_APPLICATION_ID: arr[1] } = items3);
let set = new Set(items);
obj = { [RPCCommands.OPEN_EXTERNAL_LINK]: obj, [RPCCommands.NAVIGATE_TO_CONNECTIONS]: obj };
obj = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items1 },
  validation(string) {
    let obj = importDefault(10528)(string);
    obj = {};
    const requiredResult = obj.required();
    obj.url = string.string().required();
    return requiredResult.keys(obj);
  },
  handler(socket) {
    socket = socket.socket;
    const url = socket.args.url;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
items1 = [RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG.RPC_EMBEDDED_APP_SCOPE];
obj = {
  validation(arg0) {
    return importDefault(10528)(arg0);
  },
  scope: { [RPC_SCOPE_CONFIG.ANY]: items2 },
  handler(socket) {
    socket = socket.socket;
    let obj = require(10530) /* recurseReplaceContentTree */;
    const result = obj.validatePostMessageTransport(socket.transport);
    if (set.has(obj2.validateApplication(socket.application))) {
      obj = { screen: constants3.CONNECTIONS };
      require(5796) /* openUserSettings */.openUserSettings(obj);
    } else {
      let tmp4 = importDefault(10525);
      obj = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      const prototype = tmp4.prototype;
      tmp4 = new tmp4(obj, "Command not available for this application");
      throw tmp4;
    }
    obj2 = require(10530) /* recurseReplaceContentTree */;
  }
};
items2 = [RPC_AUTHENTICATED_SCOPE];
items3 = [RPC_AUTHENTICATED_SCOPE];
obj[RPCCommands.SHARE_LINK] = createRPCCommand.createRPCCommand(RPCCommands.SHARE_LINK, {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items3 },
  handler(arg0) {
    let args;
    let dependencyMap;
    let importDefault;
    let require;
    let socket;
    ({ socket, args } = arg0);
    ({ custom_id: require, message: importDefault, link_id: dependencyMap } = args);
    let obj = require(10530) /* recurseReplaceContentTree */;
    let result = obj.validatePostMessageTransport(socket.transport);
    const validateApplicationResult = require(10530) /* recurseReplaceContentTree */.validateApplication(socket.application);
    if (null == validateApplicationResult) {
      let tmp19 = importDefault(10525);
      obj = { errorCode: constants2.INVALID_COMMAND };
      const prototype3 = tmp19.prototype;
      tmp19 = new tmp19(obj, "No application.");
      throw tmp19;
    } else {
      if (obj5.hasApplicationFlag(socket.application, constants.EMBEDDED)) {
        const promise = new Promise((arg0) => {
          let closure_0 = arg0;
          let obj = outer1_0(outer1_2[21]);
          obj = {
            applicationId: closure_3,
            customId: closure_0,
            linkId: closure_2,
            message: closure_1,
            onShare(stateFromStores, first1) {
              const obj = {};
              let tmp2 = first1;
              if (!first1) {
                tmp2 = stateFromStores;
              }
              obj.success = tmp2;
              obj.didCopyLink = first1;
              obj.didSendMessage = stateFromStores;
              closure_0(obj);
            }
          };
          const result = obj.openActivityShareLinkModal(obj);
        });
        return promise;
      } else {
        let tmp5 = importDefault(10525);
        obj = { errorCode: constants2.INVALID_COMMAND };
        const prototype = tmp5.prototype;
        tmp5 = new tmp5(obj, "This application cannot access this API");
        throw tmp5;
      }
      obj5 = require(7371) /* getApplicationFlags */;
    }
    const obj2 = require(10530) /* recurseReplaceContentTree */;
  }
});
let result = set.fileFinishedImporting("modules/rpc/server/commands/links.tsx");

export default obj;
