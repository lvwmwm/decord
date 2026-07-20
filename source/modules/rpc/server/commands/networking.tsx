// Module ID: 13284
// Function ID: 100918
// Dependencies: []

// Module 13284
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
    obj = { isNotAutomodEmbed: 548470788, launchPadSharedState: 1091633153, isPurchase: 104132, r_verb$esjava$0: -521846527, url: constants.NETWORKING_TOKEN };
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
      const obj = { isNotAutomodEmbed: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012123976, launchPadSharedState: -5486124068793689000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, isPurchase: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000082890456, r_verb$esjava$0: -0.00000000000000000000000000000000000005007000019352814, url: constants.NETWORKING_TOKEN };
      return HTTP.post(obj).then((body) => body.body);
    }
  }
};
