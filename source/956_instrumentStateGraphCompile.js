// Module ID: 956
// Function ID: 10366
// Name: instrumentStateGraphCompile
// Dependencies: [5, 77, 842, 816, 957, 934, 817, 845, 958, 954, 937]
// Exports: instrumentLangGraph

// Module 956 (instrumentStateGraphCompile)
import asyncGeneratorStep from "module_934";
import _defineProperty from "_defineProperty";

function instrumentStateGraphCompile(compile, arg1) {
  let closure_0 = arg1;
  let proxy = new Proxy(compile, {
    apply(arg0, arg1, arg2) {
      const callback = arg0;
      let closure_1 = arg1;
      let closure_2 = arg2;
      let obj = callback(outer1_1[2]);
      obj = { op: "gen_ai.create_agent", name: "create_agent" };
      let tmp = outer1_3({}, callback(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, callback(outer1_1[4]).LANGGRAPH_ORIGIN);
      obj.attributes = outer1_3(outer1_3(outer1_3({}, callback(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, callback(outer1_1[4]).LANGGRAPH_ORIGIN), callback(outer1_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, "gen_ai.create_agent"), callback(outer1_1[5]).GEN_AI_OPERATION_NAME_ATTRIBUTE, "create_agent");
      return obj.startSpan(obj, (setAttribute) => {
        const applyResult = Reflect.apply(callback, closure_1, length);
        if (length.length > 0) {
          let first = length[0];
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
          let attr = setAttribute.setAttribute(callback(outer2_1[5]).GEN_AI_AGENT_NAME_ATTRIBUTE, tmp3.name);
          let _HermesInternal = HermesInternal;
          setAttribute.updateName("create_agent " + tmp3.name);
        }
        const invoke = applyResult.invoke;
        let tmp14 = invoke;
        if (invoke) {
          tmp14 = "function" === typeof obj2;
        }
        if (tmp14) {
          applyResult.invoke = (function instrumentCompiledGraphInvoke(arg0, applyResult, arg2, closure_0) {
            closure_0 = applyResult;
            let closure_1 = arg2;
            let closure_2 = closure_0;
            const proxy = new Proxy(arg0, {
              apply(arg0, arg1, arg2) {
                let closure_1 = arg1;
                let closure_2 = arg2;
                let obj = applyResult(outer4_1[2]);
                obj = { op: "gen_ai.invoke_agent", name: "invoke_agent" };
                const tmp = outer4_3({}, arg0(outer4_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, arg0(outer4_1[4]).LANGGRAPH_ORIGIN);
                obj.attributes = outer4_3(outer4_3(outer4_3({}, arg0(outer4_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, arg0(outer4_1[4]).LANGGRAPH_ORIGIN), arg0(outer4_1[3]).SEMANTIC_ATTRIBUTE_SENTRY_OP, arg0(outer4_1[5]).GEN_AI_INVOKE_AGENT_OPERATION_ATTRIBUTE), arg0(outer4_1[5]).GEN_AI_OPERATION_NAME_ATTRIBUTE, "invoke_agent");
                return obj.startSpan(obj, (() => { ... })());
              }
            });
            return proxy;
          })(obj2.bind(applyResult), applyResult, tmp3, callback);
        }
        return applyResult;
      });
    }
  });
  return proxy;
}
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
