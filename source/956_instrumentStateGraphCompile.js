// Module ID: 956
// Function ID: 10364
// Name: instrumentStateGraphCompile
// Dependencies: []
// Exports: instrumentLangGraph

// Module 956 (instrumentStateGraphCompile)
function instrumentStateGraphCompile(compile, arg1) {
  const require = arg1;
  const proxy = new Proxy(compile, {
    apply(arg0, arg1, arg2) {
      arg1 = arg0;
      let obj = arg1(arg1[2]);
      obj = {};
      const tmp = callback({}, arg1(arg1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, arg1(arg1[4]).LANGGRAPH_ORIGIN);
      obj.attributes = callback(callback(callback({}, arg1(arg1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, arg1(arg1[4]).LANGGRAPH_ORIGIN), arg1(arg1[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.create_agent"), arg1(arg1[5]).GEN_AI_OPERATION_NAME_ATTRIBUTE, "create_agent");
      return obj.startSpan(obj, (setAttribute) => {
        const applyResult = Reflect.apply(setAttribute, arg1, arg2);
        if (arg2.length > 0) {
          let first = arg2[0];
        } else {
          first = {};
        }
        let name = tmp4;
        if (null != first) {
          name = tmp3.name;
        }
        let tmp6 = name;
        if (name) {
          tmp6 = "string" === typeof tmp3.name;
        }
        if (tmp6) {
          const attr = setAttribute.setAttribute(setAttribute(arg1[5]).GEN_AI_AGENT_NAME_ATTRIBUTE, tmp3.name);
          const _HermesInternal = HermesInternal;
          setAttribute.updateName("create_agent " + tmp3.name);
        }
        const invoke = applyResult.invoke;
        let tmp14 = invoke;
        if (invoke) {
          tmp14 = "function" === typeof obj2;
        }
        if (tmp14) {
          applyResult.invoke = function instrumentCompiledGraphInvoke(arg0, applyResult, arg2, arg3) {
            const proxy = new Proxy(arg0, {
              apply(arg0, arg1, arg2) {
                arg1 = arg0;
                arg2 = arg1;
                const arg3 = arg2;
                let obj = arg1(arg2[2]);
                obj = {};
                const tmp = callback({}, arg1(arg2[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, arg1(arg2[4]).LANGGRAPH_ORIGIN);
                obj.attributes = callback(callback(callback({}, arg1(arg2[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, arg1(arg2[4]).LANGGRAPH_ORIGIN), arg1(arg2[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, arg1(arg2[5]).GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE), arg1(arg2[5]).GEN_AI_OPERATION_NAME_ATTRIBUTE, "invoke_agent");
                return obj.startSpan(obj, () => { ... }());
              }
            });
            return proxy;
          }(obj2.bind(applyResult), applyResult, tmp3, setAttribute);
        }
        return applyResult;
      });
    }
  });
  return proxy;
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const instrumentLangGraph = function instrumentLangGraph(compile) {
  let obj = arg1;
  if (!arg1) {
    obj = {};
  }
  compile = compile.compile;
  compile.compile = instrumentStateGraphCompile(compile.bind(compile), obj);
  return compile;
};
export { instrumentStateGraphCompile };
