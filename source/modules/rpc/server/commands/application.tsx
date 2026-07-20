// Module ID: 13264
// Function ID: 100780
// Dependencies: [5, 1347, 1348, 4031, 653, 482, 13273, 8298, 10480, 10802, 13276, 669, 10469]

// Module 13264
import asyncGeneratorStep from "asyncGeneratorStep";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _runPrimaryAppCommandOrJoinEmbeddedActivity from "_runPrimaryAppCommandOrJoinEmbeddedActivity";

let RPCCommands;
({ ApplicationFlags: closure_4, Endpoints: closure_5, RPCCommands, RPCErrors: closure_6 } = _isNativeReflectConstruct);
let obj = {
  validation(string) {
    let obj = importDefault(dependencyMap[3])(string);
    obj = {};
    const requiredResult = obj.required();
    obj.event_name = string.string().required();
    const stringResult = string.string();
    obj.event_properties = importDefault(dependencyMap[3])(string).required();
    return requiredResult.keys(obj);
  },
  handler(arg0) {
    let args;
    let socket;
    ({ socket, args } = arg0);
    const event_properties = args.event_properties;
    let obj = arg1(dependencyMap[4]);
    const result = obj.validatePostMessageTransport(socket.transport);
    let obj1 = arg1(dependencyMap[4]);
    obj1.validateApplication(socket.application);
    const id = socket.application.id;
    const obj3 = importDefault(dependencyMap[5])();
    if (null != obj3) {
      const guildId = obj3.getGuildId();
    }
    const application = application.getApplication(id);
    if (obj4.hasApplicationFlag(application, constants.EMBEDDED_FIRST_PARTY)) {
      const activeAnalyticsSessionIDs = arg1(dependencyMap[8]).getActiveAnalyticsSessionIDs(id);
      obj = { activity_application_id: id };
      let type;
      if (null != obj3) {
        type = obj3.type;
      }
      obj.activity_channel_type = type;
      obj.activity_guild_id = guildId;
      let prop;
      if (null != activeAnalyticsSessionIDs) {
        prop = activeAnalyticsSessionIDs.activityUserSessionId;
      }
      obj.activity_user_session_id = prop;
      const obj6 = arg1(dependencyMap[8]);
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(event_properties);
      importDefault(dependencyMap[9]).track(args.event_name, obj);
    } else {
      let tmp7 = importDefault(dependencyMap[7]);
      obj1 = { errorCode: constants2.INVALID_COMMAND };
      const prototype = tmp7.prototype;
      tmp7 = new tmp7(obj1, "This application cannot access this API");
      throw tmp7;
    }
    const obj4 = arg1(dependencyMap[6]);
  }
};
obj = {
  scope: require("_createForOfIteratorHelperLoose").RPC_LOCAL_SCOPE,
  handler(socket) {
    const id = socket.socket.application.id;
    if (null == id) {
      let tmp3 = importDefault(dependencyMap[7]);
      let obj = { errorCode: constants2.INVALID_COMMAND };
      const prototype = tmp3.prototype;
      tmp3 = new tmp3(obj, "No application.");
      throw tmp3;
    } else {
      const HTTP = arg1(dependencyMap[10]).HTTP;
      obj = { "Null": "<string:868679681>", "Null": "<string:868614145>", "Null": "<string:2655256577>", "Null": "<string:2650800874>", "Null": "<string:2701132522>", url: closure_5.APPLICATION_TICKET(id) };
      obj = { test_mode: arg1(dependencyMap[11]).isTestModeForApplication(id) };
      obj.body = obj;
      const obj4 = arg1(dependencyMap[11]);
      return HTTP.post(obj).then((body) => body.body);
    }
  }
};
const result = _runPrimaryAppCommandOrJoinEmbeddedActivity.fileFinishedImporting("modules/rpc/server/commands/application.tsx");

export default { [RPCCommands.SEND_ANALYTICS_EVENT]: obj, [RPCCommands.GET_APPLICATION_TICKET]: obj };
