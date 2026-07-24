// Module ID: 918
// Function ID: 10050
// Name: extractTargetInfo
// Dependencies: [57, 77, 916]
// Exports: extractTargetInfo, getRequestArguments

// Module 918 (extractTargetInfo)
import _slicedToArray from "_slicedToArray";
import _defineProperty from "_defineProperty";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let obj = {};
obj = { targetField: "name", targetAttribute: require("module_916").MCP_TOOL_NAME_ATTRIBUTE, captureArguments: true, argumentsField: "arguments" };
obj["tools/call"] = obj;
obj = { targetField: "uri", targetAttribute: require("module_916").MCP_RESOURCE_URI_ATTRIBUTE, captureUri: true };
obj["resources/read"] = obj;
obj["resources/subscribe"] = { targetField: "uri", targetAttribute: require("module_916").MCP_RESOURCE_URI_ATTRIBUTE };
const obj1 = { targetField: "uri", targetAttribute: require("module_916").MCP_RESOURCE_URI_ATTRIBUTE };
obj["resources/unsubscribe"] = { targetField: "uri", targetAttribute: require("module_916").MCP_RESOURCE_URI_ATTRIBUTE };
const obj3 = { targetField: "name", targetAttribute: require("module_916").MCP_PROMPT_NAME_ATTRIBUTE, captureName: true, captureArguments: true, argumentsField: "arguments" };
obj["prompts/get"] = obj3;

export const extractTargetInfo = function extractTargetInfo(method, params) {
  if (obj[method]) {
    let tmp2;
    if (tmp.targetField) {
      let tmp4;
      if (null != params) {
        tmp4 = params[tmp.targetField];
      }
      if ("string" === typeof tmp4) {
        tmp2 = params[tmp.targetField];
      }
    }
    obj = { target: tmp2 };
    if (tmp2) {
      if (tmp.targetAttribute) {
        obj = _defineProperty({}, tmp.targetAttribute, tmp2);
      }
      obj.attributes = obj;
      return obj;
    }
    obj = {};
  } else {
    obj = { attributes: {} };
    return obj;
  }
};
export const getRequestArguments = function getRequestArguments(method, uri) {
  const obj = {};
  if (obj[method]) {
    if (tmp.captureArguments) {
      if (tmp.argumentsField) {
        if (null != uri) {
          if (uri[tmp.argumentsField]) {
            if ("object" === typeof uri[tmp.argumentsField]) {
              if (null !== tmp4) {
                const _Object = Object;
                const entries = Object.entries(tmp4);
                const tmp28 = entries[Symbol.iterator]();
                while (tmp28 !== undefined) {
                  let tmp7 = _slicedToArray;
                  let tmp8 = _slicedToArray(tmp5, 2);
                  let str2 = tmp8[0];
                  let tmp9 = obj;
                  let tmp10 = require;
                  let tmp11 = dependencyMap;
                  let _HermesInternal = HermesInternal;
                  let _JSON = JSON;
                  let combined = "" + require(916).MCP_REQUEST_ARGUMENT + "." + str2.toLowerCase();
                  obj[combined] = JSON.stringify(tmp8[1]);
                  continue;
                }
              }
            }
          }
        }
      }
    }
    uri = tmp.captureUri;
    if (uri) {
      uri = null != uri;
    }
    if (uri) {
      uri = uri.uri;
    }
    if (uri) {
      const _HermesInternal2 = HermesInternal;
      const _JSON2 = JSON;
      const combined1 = "" + require(916).MCP_REQUEST_ARGUMENT + ".uri";
      obj[combined1] = JSON.stringify(uri.uri);
    }
    let name = tmp.captureName;
    if (name) {
      name = null != uri;
    }
    if (name) {
      name = uri.name;
    }
    if (name) {
      const _HermesInternal3 = HermesInternal;
      const _JSON3 = JSON;
      const combined2 = "" + require(916).MCP_REQUEST_ARGUMENT + ".name";
      obj[combined2] = JSON.stringify(uri.name);
    }
    return obj;
  } else {
    return obj;
  }
};
