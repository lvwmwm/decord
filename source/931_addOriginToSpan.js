// Module ID: 931
// Function ID: 10109
// Name: addOriginToSpan
// Dependencies: []

// Module 931 (addOriginToSpan)
function addOriginToSpan(setAttribute, arg1) {
  const attr = setAttribute.setAttribute(arg1(arg6[0]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, "auto.vercelai.otel");
}
function onVercelAiSpanStart(setAttribute) {
  let data;
  let description;
  const obj = arg1(arg6[1]);
  ({ data, description } = arg1(arg6[1]).spanToJSON(setAttribute));
  if (description) {
    if (data[closure_0(undefined, closure_1[2]).AI_TOOL_CALL_NAME_ATTRIBUTE]) {
      if (data[closure_0(undefined, closure_1[2]).AI_TOOL_CALL_ID_ATTRIBUTE]) {
        if ("ai.toolCall" === description) {
          addOriginToSpan(setAttribute, "auto.vercelai.otel");
          const attr = setAttribute.setAttribute(arg1(arg6[0]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.execute_tool");
          renameAttributeKey(data, arg1(arg6[2]).AI_TOOL_CALL_NAME_ATTRIBUTE, "gen_ai.tool.name");
          renameAttributeKey(data, arg1(arg6[2]).AI_TOOL_CALL_ID_ATTRIBUTE, "gen_ai.tool.call.id");
          gen_ai.tool.call.id = data.gen_ai.tool.call.id;
          if ("string" === typeof gen_ai_tool_call_id) {
            const toolCallSpanMap = arg1(arg6[5]).toolCallSpanMap;
            const result = toolCallSpanMap.set(gen_ai_tool_call_id, setAttribute);
          }
          if (!data.gen_ai.tool.type) {
            const attr1 = setAttribute.setAttribute("gen_ai.tool.type", "function");
          }
          gen_ai.tool.name = data.gen_ai.tool.name;
          if (gen_ai_tool_name) {
            const _HermesInternal7 = HermesInternal;
            setAttribute.updateName("execute_tool " + gen_ai_tool_name);
          }
        }
      }
    }
    let startsWithResult = data[closure_0(undefined, closure_1[2]).AI_OPERATION_ID_ATTRIBUTE];
    if (!startsWithResult) {
      startsWithResult = description.startsWith("ai.");
    }
    if (startsWithResult) {
      addOriginToSpan(setAttribute, "auto.vercelai.otel");
      const replaced = description.replace("ai.", "");
      const attr2 = setAttribute.setAttribute("ai.pipeline.name", replaced);
      setAttribute.updateName(replaced);
      let tmp17 = tmp16;
      if (data[closure_0(undefined, closure_1[2]).AI_TELEMETRY_FUNCTION_ID_ATTRIBUTE]) {
        tmp17 = "string" === typeof tmp16;
      }
      if (tmp17) {
        const _HermesInternal = HermesInternal;
        setAttribute.updateName("" + replaced + " " + tmp16);
        const attr3 = setAttribute.setAttribute("gen_ai.function_id", tmp16);
      }
      const messagesFromPrompt = arg1(arg6[3]).requestMessagesFromPrompt(setAttribute, data);
      let tmp24 = data[closure_0(undefined, closure_1[2]).AI_MODEL_ID_ATTRIBUTE];
      if (tmp24) {
        tmp24 = !data[closure_0(undefined, closure_1[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE];
      }
      if (tmp24) {
        const attr4 = setAttribute.setAttribute(arg1(arg6[4]).GEN_AI_RESPONSE_MODEL_ATTRIBUTE, data[closure_0(undefined, closure_1[2]).AI_MODEL_ID_ATTRIBUTE]);
      }
      const attr5 = setAttribute.setAttribute("ai.streaming", description.includes("stream"));
      const obj2 = arg1(arg6[3]);
      const spanOpFromName = arg1(arg6[3]).getSpanOpFromName(description);
      if (spanOpFromName) {
        const attr6 = setAttribute.setAttribute(arg1(arg6[0]).SEMANTIC_ATTRIBUTE_SENTRY_OP, spanOpFromName);
      }
      if (data[closure_0(undefined, closure_1[2]).AI_MODEL_ID_ATTRIBUTE]) {
        if ("ai.generateText.doGenerate" === description) {
          const _HermesInternal6 = HermesInternal;
          setAttribute.updateName("generate_text " + tmp39);
        } else if ("ai.streamText.doStream" === description) {
          const _HermesInternal5 = HermesInternal;
          setAttribute.updateName("stream_text " + tmp39);
        } else if ("ai.generateObject.doGenerate" === description) {
          const _HermesInternal4 = HermesInternal;
          setAttribute.updateName("generate_object " + tmp39);
        } else if ("ai.streamObject.doStream" === description) {
          const _HermesInternal3 = HermesInternal;
          setAttribute.updateName("stream_object " + tmp39);
        } else if ("ai.embed.doEmbed" === description) {
          const _HermesInternal2 = HermesInternal;
          setAttribute.updateName("embed " + tmp39);
        } else if ("ai.embedMany.doEmbed" === description) {
          const _HermesInternal8 = HermesInternal;
          setAttribute.updateName("embed_many " + tmp39);
        }
      }
      const obj3 = arg1(arg6[3]);
    }
  }
}
function vercelAiEventProcessor(type) {
  if ("transaction" === type.type) {
    if (type.spans) {
      const _Map = Map;
      const map = new Map();
      const spans = type.spans;
      const iter = spans[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp9 = processEndedVercelAiSpan;
        let tmp10 = processEndedVercelAiSpan(nextResult);
        let tmp11 = arg1;
        let tmp12 = arg6;
        let obj = arg1(arg6[3]);
        let tmp13 = map;
        let result = obj.accumulateTokensForParent(nextResult, tmp5);
        // continue
      }
      const spans2 = type.spans;
      const iter2 = spans2[Symbol.iterator]();
      const nextResult1 = iter2.next();
      while (iter2 !== undefined) {
        if ("gen_ai.invoke_agent" === nextResult1.op) {
          let tmp19 = arg1;
          let tmp20 = arg6;
          let obj2 = arg1(arg6[3]);
          let tmp21 = nextResult1;
          let tmp22 = map;
          let result1 = obj2.applyAccumulatedTokens(tmp18, tmp5);
        }
        // continue
      }
      const contexts = type.contexts;
      let trace;
      if (null != contexts) {
        trace = contexts.trace;
      }
      let tmp26 = trace;
      if (trace) {
        tmp26 = "gen_ai.invoke_agent" === trace.op;
      }
      if (tmp26) {
        const result2 = arg1(arg6[3]).applyAccumulatedTokens(trace, map);
        const obj3 = arg1(arg6[3]);
      }
    }
  }
  return type;
}
function processEndedVercelAiSpan(nextResult) {
  const data = nextResult.data;
  if ("auto.vercelai.otel" === nextResult.origin) {
    let keys = renameAttributeKey;
    keys = data;
    keys = arg1;
    keys = arg6;
    keys = renameAttributeKey(data, arg1(arg6[2]).AI_USAGE_COMPLETION_TOKENS_ATTRIBUTE, arg1(arg6[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE);
    keys = renameAttributeKey(data, arg1(arg6[2]).AI_USAGE_PROMPT_TOKENS_ATTRIBUTE, arg1(arg6[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE);
    keys = renameAttributeKey(data, arg1(arg6[2]).AI_USAGE_CACHED_INPUT_TOKENS_ATTRIBUTE, arg1(arg6[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE);
    let tmp4 = "number" === typeof data[closure_0(undefined, closure_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
    if (tmp4) {
      keys = data;
      tmp4 = "number" === typeof data[closure_0(undefined, closure_1[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE];
    }
    if (tmp4) {
      data[arg1(arg6[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] = data[closure_0(undefined, closure_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE] + data[closure_0(undefined, closure_1[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE];
    }
    let tmp11 = "number" === typeof data[closure_0(undefined, closure_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE];
    if (tmp11) {
      tmp11 = "number" === typeof data[closure_0(undefined, closure_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
    }
    if (tmp11) {
      data.gen_ai.usage.total_tokens = data[closure_0(undefined, closure_1[4]).GEN_AI_USAGE_OUTPUT_TOKENS_ATTRIBUTE] + data[closure_0(undefined, closure_1[4]).GEN_AI_USAGE_INPUT_TOKENS_ATTRIBUTE];
    }
    let isArray = data[closure_0(undefined, closure_1[2]).AI_PROMPT_TOOLS_ATTRIBUTE];
    if (isArray) {
      const _Array = Array;
      isArray = Array.isArray(data[closure_0(undefined, closure_1[2]).AI_PROMPT_TOOLS_ATTRIBUTE]);
    }
    if (isArray) {
      data[arg1(arg6[2]).AI_PROMPT_TOOLS_ATTRIBUTE] = arg1(arg6[3]).convertAvailableToolsToJsonString(data[closure_0(undefined, closure_1[2]).AI_PROMPT_TOOLS_ATTRIBUTE]);
      const obj = arg1(arg6[3]);
    }
    let str = data;
    renameAttributeKey(data, arg1(arg6[2]).OPERATION_NAME_ATTRIBUTE, arg1(arg6[4]).GEN_AI_OPERATION_NAME_ATTRIBUTE);
    renameAttributeKey(data, arg1(arg6[2]).AI_PROMPT_MESSAGES_ATTRIBUTE, arg1(arg6[4]).GEN_AI_REQUEST_MESSAGES_ATTRIBUTE);
    renameAttributeKey(data, arg1(arg6[2]).AI_RESPONSE_TEXT_ATTRIBUTE, "gen_ai.response.text");
    renameAttributeKey(data, arg1(arg6[2]).AI_RESPONSE_TOOL_CALLS_ATTRIBUTE, "gen_ai.response.tool_calls");
    renameAttributeKey(data, arg1(arg6[2]).AI_RESPONSE_OBJECT_ATTRIBUTE, "gen_ai.response.object");
    renameAttributeKey(data, arg1(arg6[2]).AI_PROMPT_TOOLS_ATTRIBUTE, "gen_ai.request.available_tools");
    renameAttributeKey(data, arg1(arg6[2]).AI_TOOL_CALL_ARGS_ATTRIBUTE, "gen_ai.tool.input");
    renameAttributeKey(data, arg1(arg6[2]).AI_TOOL_CALL_RESULT_ATTRIBUTE, "gen_ai.tool.output");
    renameAttributeKey(data, arg1(arg6[2]).AI_SCHEMA_ATTRIBUTE, "gen_ai.request.schema");
    renameAttributeKey(data, arg1(arg6[2]).AI_MODEL_ID_ATTRIBUTE, arg1(arg6[4]).GEN_AI_REQUEST_MODEL_ATTRIBUTE);
    if (data[closure_0(undefined, closure_1[2]).AI_RESPONSE_PROVIDER_METADATA_ATTRIBUTE]) {
      const _JSON = JSON;
      const parsed = JSON.parse(tmp43);
      const openai = parsed.openai;
      if (null != openai) {
        let azure = openai;
      } else {
        azure = tmp47.azure;
      }
      if (azure) {
        setAttributeIfDefined(tmp42, arg1(arg6[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, azure.cachedPromptTokens);
        setAttributeIfDefined(tmp42, "gen_ai.usage.output_tokens.reasoning", azure.reasoningTokens);
        setAttributeIfDefined(tmp42, "gen_ai.usage.output_tokens.prediction_accepted", azure.acceptedPredictionTokens);
        setAttributeIfDefined(tmp42, "gen_ai.usage.output_tokens.prediction_rejected", azure.rejectedPredictionTokens);
        setAttributeIfDefined(tmp42, "gen_ai.conversation.id", azure.responseId);
      }
      if (!parsed.anthropic) {
        const bedrock = tmp47.bedrock;
        let usage3 = tmp83;
        if (null != bedrock) {
          usage3 = bedrock.usage;
        }
        if (usage3) {
          setAttributeIfDefined(tmp42, arg1(arg6[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, tmp47.bedrock.usage.cacheReadInputTokens);
          setAttributeIfDefined(tmp42, arg1(arg6[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE, tmp47.bedrock.usage.cacheWriteInputTokens);
        }
        if (tmp47.deepseek) {
          setAttributeIfDefined(tmp42, arg1(arg6[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, parsed.deepseek.promptCacheHitTokens);
          setAttributeIfDefined(tmp42, "gen_ai.usage.input_tokens.cache_miss", parsed.deepseek.promptCacheMissTokens);
        }
      } else {
        const usage = tmp47.anthropic.usage;
        let prop;
        if (null != usage) {
          prop = usage.cache_read_input_tokens;
        }
        if (null != prop) {
          let cacheReadInputTokens = prop;
        } else {
          cacheReadInputTokens = tmp47.anthropic.cacheReadInputTokens;
        }
        setAttributeIfDefined(tmp42, arg1(arg6[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, cacheReadInputTokens);
        const usage2 = tmp47.anthropic.usage;
        let prop1;
        if (null != usage2) {
          prop1 = usage2.cache_creation_input_tokens;
        }
        let tmp75 = prop1;
        if (null != prop1) {
          let cacheCreationInputTokens = tmp75;
        } else {
          cacheCreationInputTokens = tmp47.anthropic.cacheCreationInputTokens;
        }
        tmp75 = setAttributeIfDefined(tmp42, arg1(arg6[4]).GEN_AI_USAGE_INPUT_TOKENS_CACHE_WRITE_ATTRIBUTE, cacheCreationInputTokens);
      }
    }
    const _Object = Object;
    keys = Object.keys(str);
    keys = keys[Symbol.iterator]();
    str = "vercel.";
    while (true) {
      let tmp98 = __exception;
      // continue
    }
  }
}
function renameAttributeKey(data, AI_MODEL_ID_ATTRIBUTE, GEN_AI_OPERATION_NAME_ATTRIBUTE) {
  if (null != data[AI_MODEL_ID_ATTRIBUTE]) {
    data[GEN_AI_OPERATION_NAME_ATTRIBUTE] = data[AI_MODEL_ID_ATTRIBUTE];
    delete r1[r0];
  }
}
function setAttributeIfDefined(arg0, GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE, cacheReadInputTokens) {
  if (null != cacheReadInputTokens) {
    arg0[GEN_AI_USAGE_INPUT_TOKENS_CACHED_ATTRIBUTE] = cacheReadInputTokens;
  }
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.addVercelAiProcessors = function addVercelAiProcessors(on) {
  on.on("spanStart", onVercelAiSpanStart);
  on.addEventProcessor(Object.assign(vercelAiEventProcessor, { id: "VercelAiEventProcessor" }));
};
