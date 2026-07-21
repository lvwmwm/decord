// Module ID: 958
// Function ID: 10376
// Name: extractToolCalls
// Dependencies: []
// Exports: extractToolsFromCompiledGraph, setResponseAttributes

// Module 958 (extractToolCalls)
function extractToolCalls(substr) {
  if (substr) {
    if (0 !== substr.length) {
      const items = [];
      const iter = substr[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = nextResult;
        if (nextResult) {
          let tmp4 = nextResult;
          if ("object" === typeof tmp3) {
            let tmp5 = nextResult;
            let tool_calls = tmp3.tool_calls;
            let tmp6 = tool_calls;
            let isArray = tool_calls;
            if (tool_calls) {
              let _Array = Array;
              let tmp8 = tool_calls;
              isArray = Array.isArray(tmp6);
            }
            if (isArray) {
              let tmp9 = items;
              let push = items.push;
              let tmp10 = callback;
              let tmp11 = tool_calls;
              let applyResult = push.apply(items, callback(tmp6));
            }
          }
        }
        // continue
      }
      let tmp14 = null;
      if (items.length > 0) {
        tmp14 = items;
      }
      return tmp14;
    }
  }
  return null;
}
function extractTokenUsageFromMessage(usage_metadata) {
  if (usage_metadata.usage_metadata) {
    if ("object" === typeof usage_metadata.usage_metadata) {
      usage_metadata = usage_metadata.usage_metadata;
      let num6 = 0;
      if ("number" === typeof usage_metadata.input_tokens) {
        num6 = usage_metadata.input_tokens;
      }
      let num7 = 0;
      if ("number" === typeof usage_metadata.output_tokens) {
        num7 = usage_metadata.output_tokens;
      }
      let num8 = 0;
      if ("number" === typeof usage_metadata.total_tokens) {
        num8 = usage_metadata.total_tokens;
      }
      let obj = { inputTokens: num6, outputTokens: num7, totalTokens: num8 };
      return obj;
    }
  }
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  if (usage_metadata.response_metadata) {
    num = 0;
    num2 = 0;
    num3 = 0;
    if ("object" === typeof usage_metadata.response_metadata) {
      const response_metadata = usage_metadata.response_metadata;
      num = 0;
      num2 = 0;
      num3 = 0;
      if (response_metadata.tokenUsage) {
        num = 0;
        num2 = 0;
        num3 = 0;
        if ("object" === typeof response_metadata.tokenUsage) {
          const tokenUsage = response_metadata.tokenUsage;
          let num4 = 0;
          if ("number" === typeof tokenUsage.promptTokens) {
            num4 = tokenUsage.promptTokens;
          }
          let num5 = 0;
          if ("number" === typeof tokenUsage.completionTokens) {
            num5 = tokenUsage.completionTokens;
          }
          num = num4;
          num2 = num5;
          num3 = 0;
          if ("number" === typeof tokenUsage.totalTokens) {
            num3 = tokenUsage.totalTokens;
            num = num4;
            num2 = num5;
          }
        }
      }
    }
  }
  obj = { inputTokens: num, outputTokens: num2, totalTokens: num3 };
  return obj;
}
function extractModelMetadata(setAttribute, response_metadata) {
  if (response_metadata.response_metadata) {
    if ("object" === typeof response_metadata.response_metadata) {
      response_metadata = response_metadata.response_metadata;
      let model_name = response_metadata.model_name;
      if (model_name) {
        model_name = "string" === typeof response_metadata.model_name;
      }
      if (model_name) {
        const attr = setAttribute.setAttribute(require(dependencyMap[1]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, response_metadata.model_name);
      }
      let finish_reason = response_metadata.finish_reason;
      if (finish_reason) {
        finish_reason = "string" === typeof response_metadata.finish_reason;
      }
      if (finish_reason) {
        const items = [response_metadata.finish_reason];
        const attr1 = setAttribute.setAttribute(require(dependencyMap[1]).GEN_AI_RESPONSE_FINISH_REASONS_ATTRIBUTE, items);
      }
    }
  }
}
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { extractModelMetadata };
export { extractTokenUsageFromMessage };
export { extractToolCalls };
export const extractToolsFromCompiledGraph = function extractToolsFromCompiledGraph(closure_0) {
  const builder = closure_0.builder;
  if (null != builder) {
    const nodes2 = builder.nodes;
    if (null != nodes2) {
      const tools2 = nodes2.tools;
      if (null != tools2) {
        const runnable2 = tools2.runnable;
        if (null != runnable2) {
          if (runnable2.tools) {
            const builder2 = closure_0.builder;
            let tools;
            if (null != builder2) {
              const nodes = builder2.nodes;
              if (null != nodes) {
                tools = nodes.tools;
                if (null != tools) {
                  const runnable = tools.runnable;
                  if (null != runnable) {
                    tools = runnable.tools;
                  }
                }
              }
            }
            let mapped = null;
            if (tools) {
              const _Array = Array;
              mapped = null;
              if (Array.isArray(tools)) {
                mapped = null;
                if (0 !== tools.length) {
                  mapped = tools.map((lc_kwargs) => {
                    const obj = {};
                    lc_kwargs = lc_kwargs.lc_kwargs;
                    let name;
                    if (null != lc_kwargs) {
                      name = lc_kwargs.name;
                    }
                    obj.name = name;
                    const lc_kwargs2 = lc_kwargs.lc_kwargs;
                    let description;
                    if (null != lc_kwargs2) {
                      description = lc_kwargs2.description;
                    }
                    obj.description = description;
                    const lc_kwargs3 = lc_kwargs.lc_kwargs;
                    let schema;
                    if (null != lc_kwargs3) {
                      schema = lc_kwargs3.schema;
                    }
                    obj.schema = schema;
                    return obj;
                  });
                }
              }
            }
            return mapped;
          }
        }
      }
    }
  }
  return null;
};
export const setResponseAttributes = function setResponseAttributes(setAttribute, arg1, messages) {
  messages = undefined;
  if (null != messages) {
    messages = messages.messages;
  }
  if (messages) {
    const _Array = Array;
    if (Array.isArray(messages)) {
      let length;
      if (null != arg1) {
        length = arg1.length;
      }
      let num2 = 0;
      if (null != length) {
        num2 = length;
      }
      if (messages.length > num2) {
        let substr = messages.slice(num2);
      } else {
        substr = [];
      }
      if (0 !== substr.length) {
        const tmp38 = extractToolCalls(substr);
        if (tmp38) {
          const _JSON = JSON;
          const attr = setAttribute.setAttribute(require(dependencyMap[1]).GEN_AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, JSON.stringify(tmp38));
        }
        const result = require(dependencyMap[2]).normalizeLangChainMessages(substr);
        const _JSON2 = JSON;
        const attr1 = setAttribute.setAttribute(require(dependencyMap[1]).GEN_AI_RESPONSE_TEXT_ATTRIBUTE, JSON.stringify(result));
        let num6 = 0;
        let num7 = 0;
        let num8 = 0;
        for (const item10057 of substr) {
          let tmp14 = closure_4;
          let tmp15 = closure_4(item10057);
          let tmp16 = num6;
          num6 = num6 + tmp15.inputTokens;
          let tmp17 = num7;
          num7 = num7 + tmp15.outputTokens;
          let tmp18 = num8;
          num8 = num8 + tmp15.totalTokens;
          let tmp19 = closure_5;
          let tmp20 = arg0;
          let tmp21 = closure_5(arg0, item10057);
        }
        if (num6 > 0) {
          const attr2 = setAttribute.setAttribute(require(dependencyMap[1]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE, num6);
        }
        if (num7 > 0) {
          const attr3 = setAttribute.setAttribute(require(dependencyMap[1]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE, num7);
        }
        if (num8 > 0) {
          const attr4 = setAttribute.setAttribute(require(dependencyMap[1]).GEN_AI_USAGE_TOTAL_TOKENS_ATTRIBUTE, num8);
        }
        const obj = require(dependencyMap[2]);
      }
    }
  }
};
