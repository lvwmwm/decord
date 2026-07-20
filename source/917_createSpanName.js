// Module ID: 917
// Function ID: 10037
// Name: createSpanName
// Dependencies: []
// Exports: buildMcpServerSpanConfig, createMcpNotificationSpan, createMcpOutgoingNotificationSpan

// Module 917 (createSpanName)
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
    let MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = require(dependencyMap[1]).MCP_SERVER_OP_VALUE;
    let MCP_NOTIFICATION_ORIGIN_VALUE = require(dependencyMap[1]).MCP_FUNCTION_ORIGIN_VALUE;
  } else if ("notification-incoming" === request) {
    MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = require(dependencyMap[1]).MCP_NOTIFICATION_CLIENT_TO_SERVER_OP_VALUE;
    MCP_NOTIFICATION_ORIGIN_VALUE = require(dependencyMap[1]).MCP_NOTIFICATION_ORIGIN_VALUE;
  } else if ("notification-outgoing" === request) {
    MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE = require(dependencyMap[1]).MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE;
    MCP_NOTIFICATION_ORIGIN_VALUE = require(dependencyMap[1]).MCP_NOTIFICATION_ORIGIN_VALUE;
  }
  const tmp5 = callback({}, require(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP, MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE);
  return callback(callback(callback({}, require(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_OP, MCP_NOTIFICATION_SERVER_TO_CLIENT_OP_VALUE), require(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, MCP_NOTIFICATION_ORIGIN_VALUE), require(dependencyMap[2]).SEMANTIC_ATTRIBUTE_SENTRY_SOURCE, require(dependencyMap[1]).MCP_ROUTE_SOURCE_VALUE);
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
    let obj = require(dependencyMap[3]);
    obj = params;
    if (!params) {
      obj = {};
    }
    tmp = createSpanName(method, obj.extractTargetInfo(method, obj).target);
    const tmp2 = createSpanName;
  }
  const transportAttributes = require(dependencyMap[4]).buildTransportAttributes(transport, extra);
  const obj3 = require(dependencyMap[4]);
  const tmp6 = callback({}, require(dependencyMap[1]).MCP_METHOD_NAME_ATTRIBUTE, method);
  let recordInputs;
  if (null != options) {
    recordInputs = options.recordInputs;
  }
  const typeSpecificAttributes = require(dependencyMap[5]).buildTypeSpecificAttributes(type, message, params, recordInputs);
  const merged = Object.assign({}, transportAttributes, tmp6, typeSpecificAttributes, buildSentryAttributes(type));
  const obj4 = require(dependencyMap[5]);
  const client = require(dependencyMap[6]).getClient();
  let sendDefaultPii;
  if (null != client) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const obj5 = require(dependencyMap[6]);
  const BooleanResult = Boolean(sendDefaultPii);
  const result = require(dependencyMap[7]).filterMcpPiiFromSpanData(merged, BooleanResult);
  const obj7 = require(dependencyMap[7]);
  obj = { name: tmp, forceTransaction: true, attributes: result };
  return require(dependencyMap[8]).startSpan(obj, callback);
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const buildMcpServerSpanConfig = function buildMcpServerSpanConfig(message, self, extra, recordInputs) {
  let method;
  let params;
  ({ method, params } = message);
  let obj = require(dependencyMap[3]);
  obj = params;
  if (!params) {
    obj = {};
  }
  const tmp = createSpanName;
  const tmpResult = createSpanName(method, obj.extractTargetInfo(method, obj).target);
  const transportAttributes = require(dependencyMap[4]).buildTransportAttributes(self, extra);
  const obj3 = require(dependencyMap[4]);
  const tmp4 = callback({}, require(dependencyMap[1]).MCP_METHOD_NAME_ATTRIBUTE, method);
  recordInputs = undefined;
  if (null != recordInputs) {
    recordInputs = recordInputs.recordInputs;
  }
  const typeSpecificAttributes = require(dependencyMap[5]).buildTypeSpecificAttributes("request", message, params, recordInputs);
  const merged = Object.assign({}, transportAttributes, tmp4, typeSpecificAttributes, buildSentryAttributes("request"));
  const obj4 = require(dependencyMap[5]);
  const client = require(dependencyMap[6]).getClient();
  let sendDefaultPii;
  if (null != client) {
    sendDefaultPii = client.getOptions().sendDefaultPii;
  }
  const obj5 = require(dependencyMap[6]);
  const BooleanResult = Boolean(sendDefaultPii);
  obj = { name: tmpResult };
  const result = require(dependencyMap[7]).filterMcpPiiFromSpanData(merged, BooleanResult);
  obj.op = require(dependencyMap[1]).MCP_SERVER_OP_VALUE;
  obj.forceTransaction = true;
  obj.attributes = result;
  return obj;
};
export const createMcpNotificationSpan = function createMcpNotificationSpan(message, self, extra, options, callback) {
  return createMcpSpan({ type: "notification-incoming", message, transport: self, extra, callback, options });
};
export const createMcpOutgoingNotificationSpan = function createMcpOutgoingNotificationSpan(message, self, self2, callback) {
  return createMcpSpan({ type: "notification-outgoing", message, transport: self, options: self2, callback });
};
