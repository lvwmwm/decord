// Module ID: 835
// Function ID: 9281
// Name: logIgnoredSpan
// Dependencies: []

// Module 835 (logIgnoredSpan)
function logIgnoredSpan(op) {
  const debug = arg1(arg6[0]).debug;
  debug.log("Ignoring span " + op.op + " - " + op.description + " because it matches `ignoreSpans`.");
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.reparentChildSpans = function reparentChildSpans(items, arg1) {
  let parent_span_id;
  let span_id;
  ({ parent_span_id, span_id } = arg1);
  if (parent_span_id) {
    for (const item10010 of arg0) {
      let tmp4 = span_id;
      if (item10010.parent_span_id === span_id) {
        let tmp5 = item10010;
        let tmp6 = parent_span_id;
        tmp3.parent_span_id = tmp;
      }
    }
  }
};
arg5.shouldIgnoreSpan = function shouldIgnoreSpan(result, ignoreSpans) {
  if (null != ignoreSpans) {
    if (ignoreSpans.length) {
      if (result.description) {
        const iter = ignoreSpans[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp41 = nextResult;
          if ("string" !== typeof nextResult) {
            let tmp43 = nextResult;
            let _RegExp = RegExp;
            if (!(tmp42 instanceof RegExp)) {
              let tmp6 = nextResult;
              if (tmp41.name) {
                let tmp8 = nextResult;
                let tmp9 = !tmp41.name;
                let isMatchingPatternResult = tmp9;
                if (!tmp9) {
                  let tmp11 = ignoreSpans;
                  let tmp12 = arg6;
                  let obj = ignoreSpans(arg6[1]);
                  let tmp13 = result;
                  let tmp14 = nextResult;
                  isMatchingPatternResult = obj.isMatchingPattern(result.description, tmp41.name);
                }
                let tmp16 = nextResult;
                let tmp17 = !tmp41.op;
                let tmp18 = tmp17;
                let tmp15 = isMatchingPatternResult;
                if (!tmp17) {
                  let tmp19 = result;
                  let op = result.op;
                  let isMatchingPatternResult1 = op;
                  if (op) {
                    let tmp21 = ignoreSpans;
                    let tmp22 = arg6;
                    let obj2 = ignoreSpans(arg6[1]);
                    let tmp23 = result;
                    let tmp24 = nextResult;
                    isMatchingPatternResult1 = obj2.isMatchingPattern(result.op, tmp41.op);
                  }
                  tmp18 = isMatchingPatternResult1;
                }
                let tmp26 = isMatchingPatternResult;
                if (tmp15) {
                  let tmp27 = tmp18;
                  if (tmp25) {
                    let tmp28 = ignoreSpans;
                    let tmp29 = arg6;
                    let num2 = 2;
                    if (ignoreSpans(arg6[2]).DEBUG_BUILD) {
                      let tmp30 = logIgnoredSpan;
                      let tmp31 = result;
                      let tmp32 = logIgnoredSpan(result);
                    }
                    iter.return();
                    let flag = true;
                    return true;
                  }
                }
              } else {
                let tmp7 = nextResult;
              }
            }
            // continue
          }
          let tmp33 = ignoreSpans;
          let tmp34 = arg6;
          let obj3 = ignoreSpans(arg6[1]);
          let tmp35 = result;
          let tmp36 = nextResult;
          if (obj3.isMatchingPattern(result.description, tmp41)) {
            let tmp37 = ignoreSpans;
            let tmp38 = arg6;
            let num3 = 2;
            if (ignoreSpans(arg6[2]).DEBUG_BUILD) {
              let tmp39 = logIgnoredSpan;
              let tmp40 = logIgnoredSpan(result);
            }
            iter.return();
            let flag2 = true;
            return true;
          }
        }
        return false;
      }
    }
  }
  return false;
};
