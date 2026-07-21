// Module ID: 13293
// Function ID: 100963
// Dependencies: []

// Module 13293
let RPCCommands;
const RPC_LOCAL_SCOPE = require(dependencyMap[0]).RPC_LOCAL_SCOPE;
const _module = require(dependencyMap[1]);
({ Endpoints: closure_3, AnalyticEvents: closure_4, RPCCommands } = _module);
let obj = {
  scope: RPC_LOCAL_SCOPE,
  handler() {
    const HTTP = require(dependencyMap[2]).HTTP;
    let obj = { "Null": 0.35, "Null": 1, "Bool(false)": 0, url: location.protocol + window.GLOBAL_ENV.NETWORKING_ENDPOINT };
    const value = HTTP.get(obj);
    const items = [value.then((body) => body.body.address), ];
    const HTTP2 = require(dependencyMap[2]).HTTP;
    obj = { toValue: 522584068, duration: 1091633153, useNativeDriver: 103843, visible: -507166463, url: constants.NETWORKING_TOKEN };
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
      const obj = { toValue: -0.000001449584960937493, duration: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023536503765317118, useNativeDriver: 1493869773881034000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, visible: -0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000024079394459357874, url: constants.NETWORKING_TOKEN };
      return HTTP.post(obj).then((body) => body.body);
    }
  }
};
