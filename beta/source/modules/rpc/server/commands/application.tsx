// Module ID: 14778
// Function ID: 14779
// Name: application
// Dependencies: [5015, 4692, 1074, 9616, 9618, 14779, 9167, 9613, 9598, 1241, 1271, 9165, 2]

// Module 14778 (application)
import HTTPUtils from "HTTPUtils" /* 1271 */;
import TestModeUtils from "TestModeUtils" /* 9165 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 9167 */;
import RPCErrorDefault from "RPCError" /* 9613 */;
import createRpcJoiSchemaObjectDefault from "createRpcJoiSchemaObject" /* 9616 */;
import RPCHelpers from "RPCHelpers" /* 9618 */;
import getCurrentEmbeddedActivityChannelDefault from "getCurrentEmbeddedActivityChannel" /* 14779 */;
import ApplicationStore from "ApplicationStore" /* 5015 */;

require = fn;
const Constants = fn(1074);
({ ApplicationFlags: closure_4, Endpoints: hasOwnProperty, RPCCommands, RPCErrors: metroRequire } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/rpc/server/commands/application.tsx");

export default {
  [RPCCommands.SEND_ANALYTICS_EVENT]: {
    validation(string) {
      const obj = createRpcJoiSchemaObjectDefault(string);
      const obj2 = { event_name: null, event_properties: null };
      const requiredResult = createRpcJoiSchemaObjectDefault(string).required();
      obj2.event_name = string.string().required();
      const stringResult = string.string();
      obj2.event_properties = createRpcJoiSchemaObjectDefault(string).required();
      return requiredResult.keys(obj2);
    },
    handler(arg0) {
      ({ socket, args } = arg0);
      const event_properties = args.event_properties;
      const result = RPCHelpers.validatePostMessageTransport(socket.transport);
      RPCHelpers.validateApplication(socket.application);
      const id = socket.application.id;
      const obj3 = getCurrentEmbeddedActivityChannelDefault();
      if (obj3 != null) {
        const guildId = obj3.getGuildId();
      }
      const application = ApplicationStore.getApplication(id);
      if (tmpResult.hasApplicationFlag(application, constants.EMBEDDED_FIRST_PARTY)) {
        const activeAnalyticsSessionIDs = tmp(9598).getActiveAnalyticsSessionIDs(id);
        const obj4 = { activity_application_id: id, activity_channel_type: null, activity_guild_id: null, activity_user_session_id: null };
        let type;
        if (obj3 != null) {
          type = obj3.type;
        }
        obj4.activity_channel_type = type;
        obj4.activity_guild_id = guildId;
        let prop;
        if (activeAnalyticsSessionIDs != null) {
          prop = activeAnalyticsSessionIDs.activityUserSessionId;
        }
        obj4.activity_user_session_id = prop;
        const tmpResult2 = tmp(9598);
        const obj5 = {};
        const merged = Object.assign(obj4);
        const merged1 = Object.assign(event_properties);
        tmp5(1241).track(args.event_name, obj5);
      } else {
        const obj6 = { errorCode: constants2.INVALID_COMMAND };
        const tmp12 = new tmp5(9613)(obj6, "This application cannot access this API");
        throw tmp12;
      }
      tmpResult = ApplicationFlagUtils;
    }
  },
  [RPCCommands.GET_APPLICATION_TICKET]: {
    scope: fn(4692).RPC_LOCAL_SCOPE,
    handler(socket) {
      const id = socket.socket.application.id;
      if (null == id) {
        const obj = { errorCode: constants2.INVALID_COMMAND };
        const tmp10 = new RPCErrorDefault(obj, "No application.");
        throw tmp10;
      } else {
        const HTTP = HTTPUtils.HTTP;
        const request = { url: hasOwnProperty.APPLICATION_TICKET(id), body: null, retries: 3, oldFormErrors: true, rejectWithError: false };
        const obj2 = { test_mode: TestModeUtils.isTestModeForApplication(id) };
        request.body = obj2;
        return HTTP.post(request).then((body) => body.body);
      }
    }
  }
};
