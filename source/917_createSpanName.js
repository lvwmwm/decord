// Module ID: 917
// Function ID: 10042
// Name: createSpanName
// Dependencies: [77, 916, 816, 918, 914, 919, 825, 920, 842]
// Exports: buildMcpServerSpanConfig, createMcpNotificationSpan, createMcpOutgoingNotificationSpan

// Module 917 (createSpanName)
import _defineProperty from "_defineProperty";

function createSpanName(arg0, arg1) {
  let combined = arg0;
  if (arg1) {
    const _HermesInternal = HermesInternal;
    combined = "" + arg0 + " " + arg1;
  }
  return combined;
}
function buildSentryAttributes(request) {
  if ("request" === request) {
    let MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = require(916).MCP_SERVER_OP_VALUE;
    let MCP_NOTIFICATION_ORIGIN_VALUE = require(916).MCP_FUNCTION_ORIGIN_VALUE;
  } else if ("notification-incoming" === request) {
    MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = require(916).MCP_NOTIFICATION_CLIENT_TO_SERVER_OP_VALUE;
    MCP_NOTIFICATION_ORIGIN_VALUE = require(916).MCP_NOTIFICATION_ORIGIN_VALUE;
  } else if ("notification-outgoing" === request) {
    MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = require(916).MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE;
    MCP_NOTIFICATION_ORIGIN_VALUE = require(916).MCP_NOTIFICATION_ORIGIN_VALUE;
  }
  const tmp5 = _defineProperty({}, require(816).SEMANTIC_ATTRIBUTE_SENTRY_OP, MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE);
  return _defineProperty(_defineProperty(_defineProperty({}, require(816).SEMANTIC_ATTRIBUTE_SENTRY_OP, MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE), require(816).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, MCP_NOTIFICATION_ORIGIN_VALUE), require(816).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, require(916).MCP_ROUTE_SOURCE_VALUE);
}
function createMcpSpan(arg0) {
  let callback;
  let extra;
  let message;
  let method;
  let options;
  let params;
  let transport;
  let type;
  ({ type, message, options } = arg0);
  ({ method, params } = message);
  let tmp = method;
  ({ transport, extra, callback } = arg0);
  if ("request" === type) {
    let obj = require(918) /* extractTargetInfo */;
    obj = params;
    if (!params) {
      obj = {};
    }
    tmp = createSpanName(method, obj.extractTargetInfo(method, obj).target);
    const tmp2 = createSpanName;
  }
  const transportAttributes = require(914) /* extractPartyInfo */.buildTransportAttributes(transport, extra);
  const obj3 = require(914) /* extractPartyInfo */;
  const tmp6 = _defineProperty({}, require(916).MCP_METHOD_NAME_ATTRIBUTE, method);
  let recordInputs;
  if (null != options) {
    recordInputs = options.recordInputs;
  }
  const typeSpecificAttributes = require(919) /* getNotificationAttributes */.buildTypeSpecificAttributes(type, message, params, recordInputs);
  const merged = Object.assign({}, transportAttributes, tmp6, typeSpecificAttributes, buildSentryAttributes(type));
  const obj4 = require(919) /* getNotificationAttributes */;
  const client = require(825) /* getCurrentScope */.getClient();
  let sendDefaultPii;
  if (null != client) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const obj5 = require(825) /* getCurrentScope */;
  const BooleanResult = Boolean(sendDefaultPii);
  const result = require(920) /* set */.filterMcpPiiFromSpanData(merged, BooleanResult);
  const obj7 = require(920) /* set */;
  obj = { name: tmp, forceTransaction: true, attributes: result };
  return require(842) /* withActiveSpan */.startSpan(obj, callback);
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const buildMcpServerSpanConfig = function buildMcpServerSpanConfig(closure_0, self, closure_1, closure_02) {
  let method;
  let params;
  ({ method, params } = closure_0);
  let obj = require(918) /* extractTargetInfo */;
  obj = params;
  if (!params) {
    obj = {};
  }
  const tmp = createSpanName;
  const tmpResult = createSpanName(method, obj.extractTargetInfo(method, obj).target);
  const transportAttributes = require(914) /* extractPartyInfo */.buildTransportAttributes(self, closure_1);
  const obj3 = require(914) /* extractPartyInfo */;
  const tmp4 = _defineProperty({}, require(916).MCP_METHOD_NAME_ATTRIBUTE, method);
  let recordInputs;
  if (null != closure_02) {
    recordInputs = closure_02.recordInputs;
  }
  const typeSpecificAttributes = require(919) /* getNotificationAttributes */.buildTypeSpecificAttributes("request", closure_0, params, recordInputs);
  const merged = Object.assign({}, transportAttributes, tmp4, typeSpecificAttributes, buildSentryAttributes("request"));
  const obj4 = require(919) /* getNotificationAttributes */;
  const client = require(825) /* getCurrentScope */.getClient();
  let sendDefaultPii;
  if (null != client) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const obj5 = require(825) /* getCurrentScope */;
  const BooleanResult = Boolean(sendDefaultPii);
  obj = { name: tmpResult };
  const result = require(920) /* set */.filterMcpPiiFromSpanData(merged, BooleanResult);
  obj.op = require(916).MCP_SERVER_OP_VALUE;
  obj.forceTransaction = true;
  obj.attributes = result;
  return obj;
};
export const createMcpNotificationSpan = function createMcpNotificationSpan(message, self, extra, closure_0, callback) {
  return createMcpSpan({ type: "notification-incoming", message, transport: self, extra, callback, options: closure_0 });
};
export const createMcpOutgoingNotificationSpan = function createMcpOutgoingNotificationSpan(message, self, closure_0, callback) {
  return createMcpSpan({ type: "notification-outgoing", message, transport: self, options: closure_0, callback });
};
