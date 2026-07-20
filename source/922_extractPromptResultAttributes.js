// Module ID: 922
// Function ID: 10058
// Name: extractPromptResultAttributes
// Dependencies: []
// Exports: extractPromptResultAttributes, extractToolResultAttributes

// Module 922 (extractPromptResultAttributes)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const extractPromptResultAttributes = function extractPromptResultAttributes(description, recordOutputs) {
  const obj = {};
  const require = obj;
  if (obj2.isValidContentItem(description)) {
    let tmp = recordOutputs;
    if (recordOutputs) {
      tmp = "string" === typeof description.description;
    }
    if (tmp) {
      obj[require(dependencyMap[2]).MCP_PROMPT_RESULT_DESCRIPTION_ATTRIBUTE] = description.description;
    }
    const _Array = Array;
    if (Array.isArray(description.messages)) {
      obj[require(dependencyMap[2]).MCP_PROMPT_RESULT_MESSAGE_COUNT_ATTRIBUTE] = description.messages.length;
      if (recordOutputs) {
        const messages = description.messages;
        const dependencyMap = messages;
        function _loop2() {
          const obj = obj(messages[3]);
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
          let tmp12 = callback;
          let tmp13 = callback(tmp10, 2);
          [closure_2, closure_3] = tmp13;
          let tmp14 = _loop2;
          let _loop2Result = _loop2();
          // continue
        }
      }
    }
    return obj;
  } else {
    return obj;
  }
  const obj2 = require(dependencyMap[3]);
};
export const extractToolResultAttributes = function extractToolResultAttributes(content, recordOutputs) {
  let obj = require(dependencyMap[3]);
  if (obj.isValidContentItem(content)) {
    const _Array = Array;
    if (Array.isArray(content.content)) {
      obj = function buildAllContentItemAttributes(content, recordOutputs) {
        const tmp = callback({}, content(recordOutputs[2]).MCP_TOOL_RESULT_CONTENT_COUNT_ATTRIBUTE, content.length);
        function _loop() {
          if (obj.isValidContentItem(closure_4)) {
            let str = "mcp.tool.result";
            if (1 !== arg0.length) {
              const _HermesInternal = HermesInternal;
              str = "mcp.tool.result." + closure_3;
            }
            const arg0 = str;
            if ("string" === typeof closure_4.type) {
              const _HermesInternal2 = HermesInternal;
              tmp["" + str + ".content_type"] = closure_4.type;
            }
            if (arg1) {
              function safeSet(mime_type, mimeType) {
                if ("string" === typeof mimeType) {
                  const _HermesInternal = HermesInternal;
                  closure_2["" + "" + "." + mime_type] = mimeType;
                }
              }
              safeSet("mime_type", closure_4.mimeType);
              safeSet("uri", closure_4.uri);
              safeSet("name", closure_4.name);
              if ("string" === typeof closure_4.text) {
                const _HermesInternal3 = HermesInternal;
                tmp["" + str + ".content"] = closure_4.text;
              }
              if ("string" === typeof closure_4.data) {
                const _HermesInternal4 = HermesInternal;
                tmp["" + str + ".data_size"] = closure_4.data.length;
              }
              const resource = closure_4.resource;
              if (obj2.isValidContentItem(resource)) {
                safeSet("resource_uri", resource.uri);
                safeSet("resource_mime_type", resource.mimeType);
              }
              const obj2 = arg0(arg1[3]);
            }
          } else {
            return 1;
          }
          const obj = arg0(arg1[3]);
        }
        const entries = content.entries();
        while (tmp3 !== undefined) {
          let tmp5 = tmp;
          let tmp6 = tmp(tmp4, 2);
          [closure_3, closure_4] = tmp6;
          let tmp7 = _loop;
          let _loopResult = _loop();
          // continue
        }
        return tmp;
      }(content.content, recordOutputs);
    } else {
      obj = {};
    }
    if ("boolean" === typeof content.isError) {
      obj[require(dependencyMap[2]).MCP_TOOL_RESULT_IS_ERROR_ATTRIBUTE] = content.isError;
    }
    return obj;
  } else {
    return {};
  }
};
