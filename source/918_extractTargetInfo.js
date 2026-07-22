// Module ID: 918
// Function ID: 10048
// Name: extractTargetInfo
// Dependencies: []
// Exports: extractTargetInfo, getRequestArguments

// Module 918 (extractTargetInfo)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let obj = {};
obj = { targetAttribute: require(dependencyMap[2]).MCP_TOOL_NAME_ATTRIBUTE };
obj.tools/call = obj;
obj = { <string:1641789485>: "\u{1F47D}", <string:2054836715>: 6, Button: 115, targetAttribute: require(dependencyMap[2]).MCP_RESOURCE_URI_ATTRIBUTE };
obj.resources/read = obj;
obj.resources/subscribe = { targetField: "uri", targetAttribute: require(dependencyMap[2]).MCP_RESOURCE_URI_ATTRIBUTE };
const obj1 = { targetField: "uri", targetAttribute: require(dependencyMap[2]).MCP_RESOURCE_URI_ATTRIBUTE };
obj.resources/unsubscribe = { targetField: "uri", targetAttribute: require(dependencyMap[2]).MCP_RESOURCE_URI_ATTRIBUTE };
const obj3 = { 9850: "N", 15360: "N", 15872: "N", 8704: "N", 40960: "n", targetAttribute: require(dependencyMap[2]).MCP_PROMPT_NAME_ATTRIBUTE };
obj.prompts/get = obj3;

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
    let obj = { target: tmp2 };
    if (tmp2) {
      if (tmp.targetAttribute) {
        obj = callback2({}, tmp.targetAttribute, tmp2);
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
                  let tmp7 = callback;
                  let tmp8 = callback(tmp5, 2);
                  let str2 = tmp8[0];
                  let tmp9 = obj;
                  let tmp10 = require;
                  let tmp11 = dependencyMap;
                  let _HermesInternal = HermesInternal;
                  let _JSON = JSON;
                  let combined = "" + require(dependencyMap[2]).MCP_REQUEST_ARGUMENT + "." + str2.toLowerCase();
                  obj[combined] = JSON.stringify(tmp8[1]);
                  // continue
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
      const combined1 = "" + require(dependencyMap[2]).MCP_REQUEST_ARGUMENT + ".uri";
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
      const combined2 = "" + require(dependencyMap[2]).MCP_REQUEST_ARGUMENT + ".name";
      obj[combined2] = JSON.stringify(uri.name);
    }
    return obj;
  } else {
    return obj;
  }
};
