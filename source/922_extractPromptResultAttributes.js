// Module ID: 922
// Function ID: 10063
// Name: extractPromptResultAttributes
// Dependencies: [57, 77, 916, 912]
// Exports: extractPromptResultAttributes, extractToolResultAttributes

// Module 922 (extractPromptResultAttributes)
import _slicedToArray from "_slicedToArray";
import _defineProperty from "_defineProperty";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const extractPromptResultAttributes = function extractPromptResultAttributes(description, recordOutputs) {
  let _defineProperty;
  let _slicedToArray;
  let obj = {};
  if (obj2.isValidContentItem(description)) {
    let tmp = recordOutputs;
    if (recordOutputs) {
      tmp = "string" === typeof description.description;
    }
    if (tmp) {
      obj[obj(messages[2]).MCP_PROMPT_RESULT_DESCRIPTION_ATTRIBUTE] = description.description;
    }
    const _Array = Array;
    if (Array.isArray(description.messages)) {
      obj[obj(messages[2]).MCP_PROMPT_RESULT_MESSAGE_COUNT_ATTRIBUTE] = description.messages.length;
      if (recordOutputs) {
        messages = description.messages;
        function _loop2() {
          obj = obj(messages[3]);
          if (obj.isValidContentItem(closure_3)) {
            let str = "mcp.prompt.result";
            if (1 !== messages.length) {
              const _HermesInternal = HermesInternal;
              str = "mcp.prompt.result." + closure_2;
            }
            const role = closure_3.role;
            if ("string" !== typeof role) {
              if (obj2.isValidContentItem(closure_3.content)) {
                let text = closure_3.content;
                if ("string" === typeof text.text) {
                  if (1 === messages.length) {
                    const _HermesInternal5 = HermesInternal;
                    let combined = "" + str + ".message_content";
                  } else {
                    const _HermesInternal4 = HermesInternal;
                    combined = "" + str + ".content";
                  }
                  text = text.text;
                  obj[combined] = text;
                }
              }
            } else {
              if (1 === messages.length) {
                const _HermesInternal3 = HermesInternal;
                let combined1 = "" + str + ".message_" + "role";
              } else {
                const _HermesInternal2 = HermesInternal;
                combined1 = "" + str + "." + "role";
              }
              obj[combined1] = role;
            }
          } else {
            return 1;
          }
        }
        const entries = messages.entries();
        const tmp9 = entries[Symbol.iterator]();
        while (tmp9 !== undefined) {
          let tmp12 = _slicedToArray;
          let tmp13 = _slicedToArray(tmp10, 2);
          [_slicedToArray, _defineProperty] = tmp13;
          let tmp14 = _loop2;
          let _loop2Result = _loop2();
          continue;
        }
      }
    }
    return obj;
  } else {
    return obj;
  }
  obj2 = obj(messages[3]);
};
export const extractToolResultAttributes = function extractToolResultAttributes(content, recordOutputs) {
  let obj = require(912) /* isJsonRpcNotification */;
  if (obj.isValidContentItem(content)) {
    const _Array = Array;
    if (Array.isArray(content.content)) {
      obj = (function buildAllContentItemAttributes(content, recordOutputs) {
        let closure_3;
        let closure_4;
        let closure_0 = content;
        let closure_1 = recordOutputs;
        const tmp = outer1_3({}, outer1_0(outer1_1[2]).MCP_TOOL_RESULT_CONTENT_COUNT_ATTRIBUTE, content.length);
        let closure_2 = tmp;
        function _loop() {
          if (obj.isValidContentItem(closure_4)) {
            let str = "mcp.tool.result";
            if (1 !== str.length) {
              let _HermesInternal = HermesInternal;
              str = "mcp.tool.result." + closure_3;
            }
            if ("string" === typeof closure_4.type) {
              const _HermesInternal2 = HermesInternal;
              closure_2["" + str + ".content_type"] = closure_4.type;
            }
            if (closure_1) {
              function safeSet(mime_type, mimeType) {
                if ("string" === typeof mimeType) {
                  const _HermesInternal = HermesInternal;
                  outer1_2["" + "" + "." + mime_type] = mimeType;
                }
              }
              safeSet("mime_type", closure_4.mimeType);
              safeSet("uri", closure_4.uri);
              safeSet("name", closure_4.name);
              if ("string" === typeof closure_4.text) {
                const _HermesInternal3 = HermesInternal;
                closure_2["" + str + ".content"] = closure_4.text;
              }
              if ("string" === typeof closure_4.data) {
                const _HermesInternal4 = HermesInternal;
                closure_2["" + str + ".data_size"] = closure_4.data.length;
              }
              const resource = closure_4.resource;
              if (obj2.isValidContentItem(resource)) {
                safeSet("resource_uri", resource.uri);
                safeSet("resource_mime_type", resource.mimeType);
              }
              obj2 = outer2_0(outer2_1[3]);
            }
          } else {
            return 1;
          }
          obj = outer2_0(outer2_1[3]);
        }
        const entries = content.entries();
        while (tmp3 !== undefined) {
          let tmp5 = outer1_2;
          let tmp6 = outer1_2(tmp4, 2);
          [closure_3, closure_4] = tmp6;
          let tmp7 = _loop;
          let _loopResult = _loop();
          continue;
        }
        return tmp;
      })(content.content, recordOutputs);
    } else {
      obj = {};
    }
    if ("boolean" === typeof content.isError) {
      obj[require(916).MCP_TOOL_RESULT_IS_ERROR_ATTRIBUTE] = content.isError;
    }
    return obj;
  } else {
    return {};
  }
};
