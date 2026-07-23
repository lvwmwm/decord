// Module ID: 953
// Function ID: 10326
// Name: createLangChainCallbackHandler
// Dependencies: [77, 954, 934, 842, 816, 817, 845, 955]
// Exports: createLangChainCallbackHandler

// Module 953 (createLangChainCallbackHandler)
import _defineProperty from "_defineProperty";

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
    function exitSpan(arg0) {
      const value = map.get(arg0);
      if (tmp) {
        value.end();
        map.delete(arg0);
      }
    }
    let obj = {
      lc_serializable: false,
      lc_namespace: ["langchain_core", "callbacks", "sentry"],
      lc_secrets: undefined,
      lc_attributes: undefined,
      lc_aliases: undefined,
      lc_serializable_keys: undefined,
      lc_id: ["langchain_core", "callbacks", "sentry"],
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
          let obj = callback(954);
          const invocationParams = obj.getInvocationParams(invocation_params);
          let result = callback(954).extractLLMRequestAttributes(arg0, arr, callback, invocationParams, ls_provider);
          const obj2 = callback(954);
          obj = { name: "" + result[callback(undefined, 934).GEN_AI_OPERATION_NAME_ATTRIBUTE] + " " + result[callback(undefined, 934).GEN_AI_REQUEST_MODEL_ATTRIBUTE], op: "gen_ai.pipeline", attributes: Object.assign({}, result, map({}, callback(816).SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.pipeline")) };
          callback(842).startSpanManual(obj, (arg0) => {
            const result = outer1_2.set(closure_0, arg0);
            return arg0;
          });
        },
      handleChatModelStart(id, arr, closure_0, arg3, arg4, invocation_params, ls_provider) {
          const callback = closure_0;
          let obj = callback(954);
          const invocationParams = obj.getInvocationParams(invocation_params);
          let result = callback(954).extractChatModelRequestAttributes(id, arr, callback, invocationParams, ls_provider);
          const obj2 = callback(954);
          obj = { name: "" + result[callback(undefined, 934).GEN_AI_OPERATION_NAME_ATTRIBUTE] + " " + result[callback(undefined, 934).GEN_AI_REQUEST_MODEL_ATTRIBUTE], op: "gen_ai.chat", attributes: Object.assign({}, result, map({}, callback(816).SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.chat")) };
          callback(842).startSpanManual(obj, (arg0) => {
            const result = outer1_2.set(closure_0, arg0);
            return arg0;
          });
        },
      handleLLMEnd(generations) {
          const value = map.get(arg1);
          if (null != value) {
            if (value.isRecording()) {
              const result = callback(954).extractLlmResponseAttributes(generations, dependencyMap);
              if (result) {
                value.setAttributes(result);
              }
              exitSpan(arg1);
              const obj2 = callback(954);
            }
          }
        },
      handleLLMError(arg0, arg1) {
          const value = map.get(arg1);
          if (tmp) {
            let obj = { code: callback(817).SPAN_STATUS_ERROR, message: "llm_error" };
            value.setStatus(obj);
            exitSpan(arg1);
          }
          tmp = null != value && value.isRecording();
          obj = {};
          const obj3 = callback(845);
          obj.mechanism = { handled: false, type: "" + callback(955).LANGCHAIN_ORIGIN + ".llm_error_handler" };
          obj3.captureException(arg0, obj);
        },
      handleChainStart(name) {
          const callback = arg2;
          const tmp2 = map(map({}, callback(816).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.ai.langchain"), "langchain.chain.name", name.name || "unknown_chain");
          if (callback) {
            const _JSON = JSON;
            tmp2["langchain.chain.inputs"] = JSON.stringify(arg1);
          }
          let obj = callback(842);
          obj = { name: "chain " + tmp, op: "gen_ai.invoke_agent", attributes: Object.assign({}, tmp2, map({}, callback(816).SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.invoke_agent")) };
          obj.startSpanManual(obj, (arg0) => {
            const result = outer1_2.set(closure_0, arg0);
            return arg0;
          });
        },
      handleChainEnd(arg0, arg1) {
          const value = map.get(arg1);
          if (tmp) {
            if (closure_1) {
              const obj = {};
              const _JSON = JSON;
              obj["langchain.chain.outputs"] = JSON.stringify(arg0);
              value.setAttributes(obj);
            }
            exitSpan(arg1);
          }
        },
      handleChainError(arg0, arg1) {
          const value = map.get(arg1);
          if (tmp) {
            let obj = { code: callback(817).SPAN_STATUS_ERROR, message: "chain_error" };
            value.setStatus(obj);
            exitSpan(arg1);
          }
          tmp = null != value && value.isRecording();
          obj = {};
          const obj3 = callback(845);
          obj.mechanism = { handled: false, type: "" + callback(955).LANGCHAIN_ORIGIN + ".chain_error_handler" };
          obj3.captureException(arg0, obj);
        },
      handleToolStart(name, gen_ai_tool_input) {
          const callback = arg2;
          const tmp2 = map(map({}, callback(816).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, callback(955).LANGCHAIN_ORIGIN), "gen_ai.tool.name", name.name || "unknown_tool");
          if (callback) {
            tmp2["gen_ai.tool.input"] = gen_ai_tool_input;
          }
          let obj = callback(842);
          obj = { name: "execute_tool " + tmp, op: "gen_ai.execute_tool", attributes: Object.assign({}, tmp2, map({}, callback(816).SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.execute_tool")) };
          obj.startSpanManual(obj, (arg0) => {
            const result = outer1_2.set(closure_0, arg0);
            return arg0;
          });
        },
      handleToolEnd(arg0, arg1) {
          const value = map.get(arg1);
          if (tmp) {
            if (closure_1) {
              const obj = {};
              const _JSON = JSON;
              obj["gen_ai.tool.output"] = JSON.stringify(arg0);
              value.setAttributes(obj);
            }
            exitSpan(arg1);
          }
        },
      handleToolError(arg0, arg1) {
          const value = map.get(arg1);
          if (tmp) {
            let obj = { code: callback(817).SPAN_STATUS_ERROR, message: "tool_error" };
            value.setStatus(obj);
            exitSpan(arg1);
          }
          tmp = null != value && value.isRecording();
          obj = {};
          const obj3 = callback(845);
          obj.mechanism = { handled: false, type: "" + callback(955).LANGCHAIN_ORIGIN + ".tool_error_handler" };
          obj3.captureException(arg0, obj);
        },
      copy() {
          return obj;
        },
      toJSON() {
          const obj = { lc: 1, type: "not_implemented" };
          obj.id = obj.lc_id;
          return obj;
        },
      toJSONNotImplemented() {
          const obj = { lc: 1, type: "not_implemented" };
          obj.id = obj.lc_id;
          return obj;
        }
    };
    return obj;
  }
  first = {};
};
