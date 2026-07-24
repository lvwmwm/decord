// Module ID: 13447
// Function ID: 103341
// Dependencies: [4167, 4033, 653, 10528, 10530, 13448, 7371, 10525, 10537, 675, 507, 7369, 2]

// Module 13447
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";

let RPCCommands;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ ApplicationFlags: closure_4, Endpoints: closure_5, RPCCommands, RPCErrors: closure_6 } = ME);
let obj = {
  validation(string) {
    let obj = importDefault(10528)(string);
    obj = {};
    const requiredResult = obj.required();
    obj.event_name = string.string().required();
    const stringResult = string.string();
    obj.event_properties = importDefault(10528)(string).required();
    return requiredResult.keys(obj);
  },
  handler(arg0) {
    let args;
    let socket;
    ({ socket, args } = arg0);
    const event_properties = args.event_properties;
    let obj = require(10530) /* recurseReplaceContentTree */;
    const result = obj.validatePostMessageTransport(socket.transport);
    let obj1 = require(10530) /* recurseReplaceContentTree */;
    obj1.validateApplication(socket.application);
    const id = socket.application.id;
    const obj3 = importDefault(13448)();
    if (null != obj3) {
      const guildId = obj3.getGuildId();
    }
    application = application.getApplication(id);
    if (obj4.hasApplicationFlag(application, constants.EMBEDDED_FIRST_PARTY)) {
      const activeAnalyticsSessionIDs = require(10537) /* _createForOfIteratorHelperLoose */.getActiveAnalyticsSessionIDs(id);
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
      const obj6 = require(10537) /* _createForOfIteratorHelperLoose */;
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(event_properties);
      importDefault(675).track(args.event_name, obj);
    } else {
      let tmp7 = importDefault(10525);
      obj1 = { errorCode: constants2.INVALID_COMMAND };
      const prototype = tmp7.prototype;
      tmp7 = new tmp7(obj1, "This application cannot access this API");
      throw tmp7;
    }
    obj4 = require(7371) /* getApplicationFlags */;
  }
};
obj = {
  scope: require("RPC_SCOPE_CONFIG").RPC_LOCAL_SCOPE,
  handler(socket) {
    const id = socket.socket.application.id;
    if (null == id) {
      let tmp3 = importDefault(10525);
      let obj = { errorCode: constants2.INVALID_COMMAND };
      const prototype = tmp3.prototype;
      tmp3 = new tmp3(obj, "No application.");
      throw tmp3;
    } else {
      const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
      obj = { url: closure_5.APPLICATION_TICKET(id), body: null, retries: 3, oldFormErrors: true, rejectWithError: false };
      obj = { test_mode: require(7369) /* isTestModeForApplication */.isTestModeForApplication(id) };
      obj.body = obj;
      const obj4 = require(7369) /* isTestModeForApplication */;
      return HTTP.post(obj).then((body) => body.body);
    }
  }
};
let result = require("ME").fileFinishedImporting("modules/rpc/server/commands/application.tsx");

export default { [RPCCommands.SEND_ANALYTICS_EVENT]: obj, [RPCCommands.GET_APPLICATION_TICKET]: obj };
