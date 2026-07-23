// Module ID: 919
// Function ID: 10052
// Name: getNotificationAttributes
// Dependencies: [77, 916, 876, 918]
// Exports: buildTypeSpecificAttributes

// Module 919 (getNotificationAttributes)
import _defineProperty from "_defineProperty";

function getNotificationAttributes(arg0, requestId) {
  const obj = {};
  if ("notifications/cancelled" === arg0) {
    if (tmp32) {
      const _String7 = String;
      obj["mcp.cancelled.request_id"] = String(requestId.requestId);
    }
    if (tmp34) {
      const _String8 = String;
      obj["mcp.cancelled.reason"] = String(requestId.reason);
    }
    tmp32 = null != requestId && requestId.requestId;
    tmp34 = null != requestId && requestId.reason;
  } else if ("notifications/message" === arg0) {
    if (tmp18) {
      const _String5 = String;
      obj[require(916).MCP_LOGGING_LEVEL_ATTRIBUTE] = String(requestId.level);
    }
    if (tmp22) {
      const _String6 = String;
      obj[require(916).MCP_LOGGING_LOGGER_ATTRIBUTE] = String(requestId.logger);
    }
    let data;
    if (null != requestId) {
      data = requestId.data;
    }
    if (undefined !== data) {
      obj[require(916).MCP_LOGGING_DATA_TYPE_ATTRIBUTE] = typeof requestId.data;
      if (arg2) {
        data = requestId.data;
        let json = data;
        if ("string" !== typeof data) {
          const _JSON = JSON;
          json = JSON.stringify(data);
        }
        obj[require(916).MCP_LOGGING_MESSAGE_ATTRIBUTE] = json;
      }
    }
    tmp18 = null != requestId && requestId.level;
    tmp22 = null != requestId && requestId.logger;
  } else if ("notifications/progress" === arg0) {
    if (tmp10) {
      const _String3 = String;
      obj["mcp.progress.token"] = String(requestId.progressToken);
    }
    let progress;
    if (null != requestId) {
      progress = requestId.progress;
    }
    if ("number" === typeof progress) {
      obj["mcp.progress.current"] = requestId.progress;
    }
    let total;
    if (null != requestId) {
      total = requestId.total;
    }
    if ("number" === typeof total) {
      obj["mcp.progress.total"] = requestId.total;
      let progress1;
      if (null != requestId) {
        progress1 = requestId.progress;
      }
      if ("number" === typeof progress1) {
        obj["mcp.progress.percentage"] = requestId.progress / requestId.total * 100;
      }
    }
    if (tmp15) {
      const _String4 = String;
      obj["mcp.progress.message"] = String(requestId.message);
    }
    tmp10 = null != requestId && requestId.progressToken;
    tmp15 = null != requestId && requestId.message;
  } else if ("notifications/resources/updated" === arg0) {
    if (null != requestId) {
      if (requestId.uri) {
        const _String = String;
        obj[require(916).MCP_RESOURCE_URI_ATTRIBUTE] = String(requestId.uri);
        const _String2 = String;
        const result = require(876) /* isURLObjectRelative */.parseStringToURLObject(String(requestId.uri));
        let tmp6 = result;
        if (result) {
          tmp6 = !require(876) /* isURLObjectRelative */.isURLObjectRelative(result);
          const obj3 = require(876) /* isURLObjectRelative */;
        }
        if (tmp6) {
          obj["mcp.resource.protocol"] = result.protocol.replace(":", "");
          const str2 = result.protocol;
        }
        const obj2 = require(876) /* isURLObjectRelative */;
      }
    }
  } else if ("notifications/initialized" === arg0) {
    obj["mcp.lifecycle.phase"] = "initialization_complete";
    obj["mcp.protocol.ready"] = 1;
  }
  return obj;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const buildTypeSpecificAttributes = function buildTypeSpecificAttributes(request, message, params, recordInputs) {
  let obj = params;
  if ("request" === request) {
    if (!obj) {
      obj = {};
    }
    const _Object = Object;
    let tmp6 = undefined !== message.id;
    const obj3 = require(918) /* extractTargetInfo */;
    if (tmp6) {
      const _String = String;
      tmp6 = _defineProperty({}, require(916).MCP_REQUEST_ID_ATTRIBUTE, String(message.id));
    }
    const attributes = require(918) /* extractTargetInfo */.extractTargetInfo(message.method, obj).attributes;
    if (recordInputs) {
      if (!obj) {
        obj = {};
      }
      let requestArguments = require(918) /* extractTargetInfo */.getRequestArguments(message.method, obj);
      const obj6 = require(918) /* extractTargetInfo */;
    } else {
      requestArguments = {};
    }
    return Object.assign({}, tmp6, attributes, requestArguments);
  } else {
    if (!obj) {
      obj = {};
    }
    return getNotificationAttributes(message.method, obj, recordInputs);
  }
};
export { getNotificationAttributes };
