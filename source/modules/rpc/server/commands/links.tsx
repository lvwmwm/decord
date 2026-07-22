// Module ID: 13293
// Function ID: 100948
// Name: set
// Dependencies: []

// Module 13293 (set)
let RPCCommands;
let RPC_AUTHENTICATED_SCOPE;
let RPC_SCOPE_CONFIG;
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const tmp2 = arg1(dependencyMap[3]);
({ RPC_AUTHENTICATED_SCOPE, RPC_SCOPE_CONFIG } = tmp2);
({ ApplicationFlags: closure_6, PopoutWindowKeys: closure_7, RPCCommands, RPCErrors: closure_8, UserSettingsSections: closure_9, AnalyticEvents: closure_10 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
const items = [, ];
({ AM_HARMONY_PRD_APPLICATION_ID: arr[0], AM_HARMONY_STG_APPLICATION_ID: arr[1] } = arg1(dependencyMap[5]));
const set = new Set(items);
let obj = { [RPCCommands.OPEN_EXTERNAL_LINK]: obj, [RPCCommands.NAVIGATE_TO_CONNECTIONS]: obj };
obj = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items1 },
  validation(string) {
    let obj = importDefault(dependencyMap[6])(string);
    obj = {};
    const requiredResult = obj.required();
    obj.url = string.string().required();
    return requiredResult.keys(obj);
  },
  handler(socket) {
    const arg1 = socket.socket;
    const importDefault = socket.args.url;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  }
};
const items1 = [RPC_AUTHENTICATED_SCOPE, tmp2.RPC_EMBEDDED_APP_SCOPE];
obj = {
  validation(arg0) {
    return importDefault(dependencyMap[6])(arg0);
  },
  scope: { [RPC_SCOPE_CONFIG.ANY]: items2 },
  handler(socket) {
    socket = socket.socket;
    let obj = arg1(dependencyMap[7]);
    const result = obj.validatePostMessageTransport(socket.transport);
    if (set.has(obj2.validateApplication(socket.application))) {
      obj = { screen: constants3.CONNECTIONS };
      arg1(dependencyMap[18]).openUserSettings(obj);
    } else {
      let tmp4 = importDefault(dependencyMap[17]);
      obj = { errorCode: constants2.UNAUTHORIZED_FOR_APPLICATION };
      const prototype = tmp4.prototype;
      tmp4 = new tmp4(obj, "Command not available for this application");
      throw tmp4;
    }
    const obj2 = arg1(dependencyMap[7]);
  }
};
const items2 = [RPC_AUTHENTICATED_SCOPE];
const tmp4 = arg1(dependencyMap[5]);
const items3 = [RPC_AUTHENTICATED_SCOPE];
obj[RPCCommands.SHARE_LINK] = arg1(dependencyMap[19]).createRPCCommand(RPCCommands.SHARE_LINK, {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items3 },
  handler(arg0) {
    let args;
    let socket;
    ({ socket, args } = arg0);
    ({ custom_id: closure_0, message: closure_1, link_id: closure_2 } = args);
    let obj = arg1(dependencyMap[7]);
    const result = obj.validatePostMessageTransport(socket.transport);
    const validateApplicationResult = arg1(dependencyMap[7]).validateApplication(socket.application);
    let closure_3 = validateApplicationResult;
    if (null == validateApplicationResult) {
      let tmp19 = importDefault(dependencyMap[17]);
      obj = { errorCode: constants2.INVALID_COMMAND };
      const prototype3 = tmp19.prototype;
      tmp19 = new tmp19(obj, "No application.");
      throw tmp19;
    } else {
      if (obj5.hasApplicationFlag(socket.application, constants.EMBEDDED)) {
        const promise = new Promise((arg0) => {
          let obj = arg0(closure_2[21]);
          obj = {
            applicationId: validateApplicationResult,
            customId: arg0,
            linkId: closure_2,
            message: closure_1,
            onShare(didSendMessage, first1) {
              const obj = {};
              let tmp2 = first1;
              if (!first1) {
                tmp2 = didSendMessage;
              }
              obj.success = tmp2;
              obj.didCopyLink = first1;
              obj.didSendMessage = didSendMessage;
              didSendMessage(obj);
            }
          };
          const result = obj.openActivityShareLinkModal(obj);
        });
        return promise;
      } else {
        let tmp5 = importDefault(dependencyMap[17]);
        obj = { errorCode: constants2.INVALID_COMMAND };
        const prototype = tmp5.prototype;
        tmp5 = new tmp5(obj, "This application cannot access this API");
        throw tmp5;
      }
      const obj5 = arg1(dependencyMap[20]);
    }
    const obj2 = arg1(dependencyMap[7]);
  }
});
const obj1 = {
  scope: { [RPC_SCOPE_CONFIG.ANY]: items3 },
  handler(arg0) {
    let args;
    let socket;
    ({ socket, args } = arg0);
    ({ custom_id: closure_0, message: closure_1, link_id: closure_2 } = args);
    let obj = arg1(dependencyMap[7]);
    const result = obj.validatePostMessageTransport(socket.transport);
    const validateApplicationResult = arg1(dependencyMap[7]).validateApplication(socket.application);
    let closure_3 = validateApplicationResult;
    if (null == validateApplicationResult) {
      let tmp19 = importDefault(dependencyMap[17]);
      obj = { errorCode: constants2.INVALID_COMMAND };
      const prototype3 = tmp19.prototype;
      tmp19 = new tmp19(obj, "No application.");
      throw tmp19;
    } else {
      if (obj5.hasApplicationFlag(socket.application, constants.EMBEDDED)) {
        const promise = new Promise((arg0) => {
          let obj = arg0(closure_2[21]);
          obj = {
            applicationId: validateApplicationResult,
            customId: arg0,
            linkId: closure_2,
            message: closure_1,
            onShare(didSendMessage, first1) {
              const obj = {};
              let tmp2 = first1;
              if (!first1) {
                tmp2 = didSendMessage;
              }
              obj.success = tmp2;
              obj.didCopyLink = first1;
              obj.didSendMessage = didSendMessage;
              didSendMessage(obj);
            }
          };
          const result = obj.openActivityShareLinkModal(obj);
        });
        return promise;
      } else {
        let tmp5 = importDefault(dependencyMap[17]);
        obj = { errorCode: constants2.INVALID_COMMAND };
        const prototype = tmp5.prototype;
        tmp5 = new tmp5(obj, "This application cannot access this API");
        throw tmp5;
      }
      const obj5 = arg1(dependencyMap[20]);
    }
    const obj2 = arg1(dependencyMap[7]);
  }
};
const obj4 = arg1(dependencyMap[19]);
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/rpc/server/commands/links.tsx");

export default obj;
