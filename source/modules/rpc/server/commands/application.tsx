// Module ID: 13801
// Function ID: 13802
// Dependencies: [4382, 4247, 676, 10798, 10800, 13802, 7630, 10795, 10662, 698, 530, 7628, 2]

// Module 13801
import addApplication from "addApplication";
import ME from "ME";

let RPCCommands;
let c4;
let c5;
let closure_6;
const require = arg1;
({ ApplicationFlags: c4, Endpoints: c5, RPCCommands, RPCErrors: closure_6 } = ME);
let obj = {
  validation(string) {
    let obj = importDefault(10798)(string);
    obj = { event_name: null, event_properties: null };
    const requiredResult = obj.required();
    obj[0] = string.string().required();
    const stringResult = string.string();
    obj[1] = importDefault(10798)(string).required();
    return requiredResult.keys(obj);
  },
  handler(arg0) {
    let args;
    let socket;
    ({ socket, args } = arg0);
    const event_properties = args.event_properties;
    let obj = require(10800) /* recurseReplaceContentTree */;
    const result = obj.validatePostMessageTransport(socket.transport);
    let obj1 = require(10800) /* recurseReplaceContentTree */;
    obj1.validateApplication(socket.application);
    const id = socket.application.id;
    const obj3 = importDefault(13802)();
    if (obj3 != null) {
      const guildId = obj3.getGuildId();
    }
    application = application.getApplication(id);
    let tmpResult = tmp(7630);
    if (tmpResult.hasApplicationFlag(application, constants.EMBEDDED_FIRST_PARTY)) {
      tmpResult = tmp(10662);
      const activeAnalyticsSessionIDs = tmpResult.getActiveAnalyticsSessionIDs(id);
      obj = { activity_application_id: null, activity_channel_type: null, activity_guild_id: null, activity_user_session_id: null };
      obj[0] = id;
      let type;
      if (obj3 != null) {
        type = obj3.type;
      }
      obj[1] = type;
      obj[2] = guildId;
      let prop;
      if (activeAnalyticsSessionIDs != null) {
        prop = activeAnalyticsSessionIDs.activityUserSessionId;
      }
      obj[3] = prop;
      obj = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(event_properties);
      tmp5(698).track(args.event_name, obj);
    } else {
      obj1 = { errorCode: null };
      obj1[0] = constants2.INVALID_COMMAND;
      const tmp12 = new tmp5(10795)(obj1, "This application cannot access this API");
      throw tmp12;
    }
  }
};
obj = {
  scope: require("RPC_SCOPE_CONFIG").RPC_LOCAL_SCOPE,
  handler(socket) {
    const id = socket.socket.application.id;
    if (null == id) {
      let obj = { errorCode: null };
      obj[0] = constants2.INVALID_COMMAND;
      const tmp10 = new importDefault(10795)(obj, "No application.");
      throw tmp10;
    } else {
      const HTTP = require(530) /* sendRequest */.HTTP;
      obj = { url: null, body: null, retries: 3, oldFormErrors: true, rejectWithError: false };
      obj[0] = closure_5.APPLICATION_TICKET(id);
      obj = { test_mode: null };
      obj[0] = require(7628) /* isTestModeForApplication */.isTestModeForApplication(id);
      obj[1] = obj;
      const obj3 = require(7628) /* isTestModeForApplication */;
      return HTTP.post(obj).then((body) => body.body);
    }
  }
};
let result = require("ME").fileFinishedImporting("modules/rpc/server/commands/application.tsx");

export default { [RPCCommands.SEND_ANALYTICS_EVENT]: obj, [RPCCommands.GET_APPLICATION_TICKET]: obj };
