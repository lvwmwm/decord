// Module ID: 13467
// Function ID: 103479
// Dependencies: [4033, 653, 507, 675, 2]

// Module 13467
import { RPC_LOCAL_SCOPE } from "RPC_SCOPE_CONFIG";
import ME from "ME";

let RPCCommands;
let closure_3;
let closure_4;
({ Endpoints: closure_3, AnalyticEvents: closure_4, RPCCommands } = ME);
let obj = {
  scope: RPC_LOCAL_SCOPE,
  handler() {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    let obj = { url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT, retries: 3, rejectWithError: false };
    const value = HTTP.get(obj);
    const items = [value.then((body) => body.body.address), ];
    const HTTP2 = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: constants.NETWORKING_TOKEN, retries: 3, oldFormErrors: true, rejectWithError: false };
    items[1] = HTTP2.post(obj).then((body) => body.body.token);
    const postResult = HTTP2.post(obj);
    return Promise.all(items).then((arg0) => {
      let tmp;
      let tmp2;
      [tmp, tmp2] = arg0;
      return { address, token };
    });
  }
};
obj = {
  scope: RPC_LOCAL_SCOPE,
  handler(args) {
    args = args.args;
    args.application_id = args.socket.application.id;
    importDefault(675).track(constants2.NETWORKING_SYSTEM_METRICS, args);
  }
};
obj = {
  scope: RPC_LOCAL_SCOPE,
  handler(args) {
    args = args.args;
    args.application_id = args.socket.application.id;
    importDefault(675).track(constants2.NETWORKING_PEER_METRICS, args);
  }
};
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/rpc/server/commands/networking.tsx");

export default {
  [RPCCommands.GET_NETWORKING_CONFIG]: obj,
  [RPCCommands.NETWORKING_SYSTEM_METRICS]: obj,
  [RPCCommands.NETWORKING_PEER_METRICS]: obj,
  [RPCCommands.NETWORKING_CREATE_TOKEN]: {
    scope: RPC_LOCAL_SCOPE,
    handler() {
      const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
      const obj = { url: constants.NETWORKING_TOKEN, retries: 1, oldFormErrors: true, rejectWithError: false };
      return HTTP.post(obj).then((body) => body.body);
    }
  }
};
