// Module ID: 724
// Function ID: 725
// Name: reparentChildSpans
// Dependencies: [689, 697, 688]
// Exports: reparentChildSpans, shouldIgnoreSpan

// Module 724 (reparentChildSpans)
import _mod688 from "module_688" /* 688 */;
import CONSOLE_LEVELS from "CONSOLE_LEVELS" /* 689 */;
import _mod697 from "module_697" /* 697 */;

function logIgnoredSpan(op) {
  const debug = CONSOLE_LEVELS.debug;
  debug.log("Ignoring span " + op.op + " - " + op.description + " because it matches `ignoreSpans`.");
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export const reparentChildSpans = function reparentChildSpans(spans, parent_span_id) {
  parent_span_id = parent_span_id.parent_span_id;
  if (parent_span_id) {
    const iter = spans[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (nextResult.parent_span_id === tmp) {
        tmp7.parent_span_id = parent_span_id;
      }
      continue;
    }
  }
};
export const shouldIgnoreSpan = function shouldIgnoreSpan(spanToJSONResult, ignoreSpans) {
  let length;
  if (ignoreSpans != null) {
    length = ignoreSpans.length;
  }
  if (length) {
    if (spanToJSONResult.description) {
      const iter = ignoreSpans[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp8 = nextResult;
        if (typeof nextResult !== "string") {
          let _RegExp = RegExp;
          if (!(tmp9 instanceof RegExp)) {
            if (tmp8.name) {
              let name = tmp8.name;
              let isMatchingPatternResult = !name;
              if (name) {
                let obj = _mod697;
                isMatchingPatternResult = obj.isMatchingPattern(spanToJSONResult.description, tmp8.name);
              }
              let op = tmp8.op;
              let tmp19 = !op;
              let tmp17 = isMatchingPatternResult;
              if (op) {
                let op2 = spanToJSONResult.op;
                if (op2) {
                  let obj2 = _mod697;
                  op2 = obj2.isMatchingPattern(spanToJSONResult.op, tmp8.op);
                }
              }
              if (tmp17) {
                if (tmp23) {
                  if (_mod688.DEBUG_BUILD) {
                    let tmp29 = logIgnoredSpan(spanToJSONResult);
                  }
                  iter.return();
                  let flag = true;
                  return true;
                }
              }
            }
          }
          continue;
        }
        let tmp31 = require;
        let obj3 = _mod697;
        if (obj3.isMatchingPattern(spanToJSONResult.description, tmp8)) {
          if (tmp31(688).DEBUG_BUILD) {
            let tmp35 = logIgnoredSpan(spanToJSONResult);
          }
          iter.return();
          let flag2 = true;
          return true;
        }
      }
      return false;
    }
  }
  return false;
};
