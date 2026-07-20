// Module ID: 953
// Function ID: 10321
// Name: createLangChainCallbackHandler
// Dependencies: []
// Exports: createLangChainCallbackHandler

// Module 953 (createLangChainCallbackHandler)
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const createLangChainCallbackHandler = function createLangChainCallbackHandler() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    const recordInputs = first.recordInputs;
    let closure_0 = null != recordInputs && recordInputs;
    const recordOutputs = first.recordOutputs;
    let closure_1 = null != recordOutputs && recordOutputs;
    const _Map = Map;
    const map = new Map();
    let closure_2 = map;
    function exitSpan(arg0) {
      const value = map.get(arg0);
      if (tmp) {
        value.end();
        map.delete(arg0);
      }
    }
    const obj = {
      lc_serializable: false,
      lc_namespace: [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002086372745151437, 3513992059317315000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000226281143221237],
      lc_secrets: undefined,
      lc_attributes: undefined,
      lc_aliases: undefined,
      lc_serializable_keys: undefined,
      lc_id: [0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002086372745151437, 3513992059317315000000000000000, 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000226281143221237],
      lc_kwargs: {},
      name: "SentryCallbackHandler",
      ignoreLLM: false,
      ignoreChain: false,
      ignoreAgent: false,
      ignoreRetriever: false,
      ignoreCustomEvent: false,
      raiseError: false,
      awaitHandlers: true,
      handleLLMStart(arg0, arr, closure_0, arg3, arg4, invocation_params, ls_provider) {
          const callback = closure_0;
          let obj = callback(closure_1[1]);
          const invocationParams = obj.getInvocationParams(invocation_params);
          const result = callback(closure_1[1]).extractLLMRequestAttributes(arg0, arr, callback, invocationParams, ls_provider);
          const obj2 = callback(closure_1[1]);
          obj = { name: "" + result[closure_0(undefined, closure_1[2]).GEN_AI_OPERATION_NAME_ATTRIBUTE] + " " + result[closure_0(undefined, closure_1[2]).GEN_AI_REQUEST_MODEL_ATTRIBUTE], op: "gen_ai.pipeline", attributes: Object.assign({}, result, map({}, callback(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.pipeline")) };
          callback(closure_1[3]).startSpanManual(obj, (arg0) => {
            const result = closure_2.set(arg2, arg0);
            return arg0;
          });
        },
      handleChatModelStart(id, arr, closure_0, arg3, arg4, invocation_params, ls_provider) {
          const callback = closure_0;
          let obj = callback(closure_1[1]);
          const invocationParams = obj.getInvocationParams(invocation_params);
          const result = callback(closure_1[1]).extractChatModelRequestAttributes(id, arr, callback, invocationParams, ls_provider);
          const obj2 = callback(closure_1[1]);
          obj = { name: "" + result[closure_0(undefined, closure_1[2]).GEN_AI_OPERATION_NAME_ATTRIBUTE] + " " + result[closure_0(undefined, closure_1[2]).GEN_AI_REQUEST_MODEL_ATTRIBUTE], op: "gen_ai.chat", attributes: Object.assign({}, result, map({}, callback(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.chat")) };
          callback(closure_1[3]).startSpanManual(obj, (arg0) => {
            const result = closure_2.set(arg2, arg0);
            return arg0;
          });
        },
      handleLLMEnd(generations) {
          const value = map.get(arg1);
          if (null != value) {
            if (value.isRecording()) {
              const result = callback(closure_1[1]).extractLlmResponseAttributes(generations, closure_1);
              if (result) {
                value.setAttributes(result);
              }
              exitSpan(arg1);
              const obj2 = callback(closure_1[1]);
            }
          }
        },
      handleLLMError(arg0, arg1) {
          const value = map.get(arg1);
          if (tmp) {
            let obj = { code: callback(closure_1[5]).SPAN_STATUS_ERROR, message: "llm_error" };
            value.setStatus(obj);
            exitSpan(arg1);
          }
          const tmp = null != value && value.isRecording();
          obj = {};
          const obj3 = callback(closure_1[6]);
          obj.mechanism = { handled: false, type: "" + callback(closure_1[7]).LANGCHAIN_ORIGIN + ".llm_error_handler" };
          obj3.captureException(arg0, obj);
        },
      handleChainStart(name) {
          const callback = arg2;
          const tmp2 = map(map({}, callback(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ai.langchain"), "langchain.chain.name", name.name || "unknown_chain");
          if (callback) {
            const _JSON = JSON;
            tmp2.langchain.chain.inputs = JSON.stringify(arg1);
          }
          let obj = callback(closure_1[3]);
          obj = { name: "chain " + tmp, op: "gen_ai.invoke_agent", attributes: Object.assign({}, tmp2, map({}, callback(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.invoke_agent")) };
          obj.startSpanManual(obj, (arg0) => {
            const result = closure_2.set(arg2, arg0);
            return arg0;
          });
        },
      handleChainEnd(arg0, arg1) {
          const value = map.get(arg1);
          if (tmp) {
            if (closure_1) {
              const obj = {};
              const _JSON = JSON;
              obj.langchain.chain.outputs = JSON.stringify(arg0);
              value.setAttributes(obj);
            }
            exitSpan(arg1);
          }
        },
      handleChainError(arg0, arg1) {
          const value = map.get(arg1);
          if (tmp) {
            let obj = { code: callback(closure_1[5]).SPAN_STATUS_ERROR, message: "chain_error" };
            value.setStatus(obj);
            exitSpan(arg1);
          }
          const tmp = null != value && value.isRecording();
          obj = {};
          const obj3 = callback(closure_1[6]);
          obj.mechanism = { handled: false, type: "" + callback(closure_1[7]).LANGCHAIN_ORIGIN + ".chain_error_handler" };
          obj3.captureException(arg0, obj);
        },
      handleToolStart(name, gen_ai.tool.input) {
          const callback = arg2;
          const tmp2 = map(map({}, callback(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, callback(closure_1[7]).LANGCHAIN_ORIGIN), "gen_ai.tool.name", name.name || "unknown_tool");
          if (callback) {
            tmp2.gen_ai.tool.input = gen_ai_tool_input;
          }
          let obj = callback(closure_1[3]);
          obj = { name: "execute_tool " + tmp, op: "gen_ai.execute_tool", attributes: Object.assign({}, tmp2, map({}, callback(closure_1[4]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.execute_tool")) };
          obj.startSpanManual(obj, (arg0) => {
            const result = closure_2.set(arg2, arg0);
            return arg0;
          });
        },
      handleToolEnd(arg0, arg1) {
          const value = map.get(arg1);
          if (tmp) {
            if (closure_1) {
              const obj = {};
              const _JSON = JSON;
              obj.gen_ai.tool.output = JSON.stringify(arg0);
              value.setAttributes(obj);
            }
            exitSpan(arg1);
          }
        },
      handleToolError(arg0, arg1) {
          const value = map.get(arg1);
          if (tmp) {
            let obj = { code: callback(closure_1[5]).SPAN_STATUS_ERROR, message: "tool_error" };
            value.setStatus(obj);
            exitSpan(arg1);
          }
          const tmp = null != value && value.isRecording();
          obj = {};
          const obj3 = callback(closure_1[6]);
          obj.mechanism = { handled: false, type: "" + callback(closure_1[7]).LANGCHAIN_ORIGIN + ".tool_error_handler" };
          obj3.captureException(arg0, obj);
        },
      copy() {
          return obj;
        },
      toJSON() {
          const obj = { id: obj.lc_id };
          return obj;
        },
      toJSONNotImplemented() {
          const obj = { id: obj.lc_id };
          return obj;
        }
    };
    return obj;
  }
  first = {};
};
