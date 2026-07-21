// Module ID: 13291
// Function ID: 100941
// Dependencies: []

// Module 13291
let RPCCommands;
const RPC_LOCAL_SCOPE = require(dependencyMap[0]).RPC_LOCAL_SCOPE;
const _module = require(dependencyMap[1]);
({ Endpoints: closure_3, AnalyticEvents: closure_4, RPCCommands } = _module);
let obj = {
  scope: RPC_LOCAL_SCOPE,
  handler() {
    const HTTP = require(dependencyMap[2]).HTTP;
    let obj = { marginBottom: 0.35, marginTop: 1, textAlign: 0, url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT };
    const value = HTTP.get(obj);
    const items = [value.then((body) => body.body.address), ];
    const HTTP2 = require(dependencyMap[2]).HTTP;
    obj = { <string:2497405736>: 543817732, <string:4237488189>: 1091633153, <string:2898743961>: 103969, <string:3493979195>: -517586687, url: constants.NETWORKING_TOKEN };
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
    importDefault(dependencyMap[3]).track(constants2.NETWORKING_SYSTEM_METRICS, args);
  }
};
obj = {
  scope: RPC_LOCAL_SCOPE,
  handler(args) {
    args = args.args;
    args.application_id = args.socket.application.id;
    importDefault(dependencyMap[3]).track(constants2.NETWORKING_PEER_METRICS, args);
  }
};
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/rpc/server/commands/networking.tsx");

export default {
  [RPCCommands.GET_NETWORKING_CONFIG]: obj,
  [RPCCommands.NETWORKING_SYSTEM_METRICS]: obj,
  [RPCCommands.NETWORKING_PEER_METRICS]: obj,
  [RPCCommands.NETWORKING_CREATE_TOKEN]: {
    scope: RPC_LOCAL_SCOPE,
    handler() {
      const HTTP = require(dependencyMap[2]).HTTP;
      const obj = { <string:2497405736>: -2061584335, <string:4237488189>: -1095216661, <string:2898743961>: 1264537919, <string:3493979195>: -1717986767, url: constants.NETWORKING_TOKEN };
      return HTTP.post(obj).then((body) => body.body);
    }
  }
};
