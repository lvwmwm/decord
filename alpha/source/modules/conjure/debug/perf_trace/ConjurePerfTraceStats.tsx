// Module ID: 12336
// Function ID: 12337
// Name: ConjurePerfTraceStats
// Dependencies: [10990, 2]
// Exports: sumPerfTraceStats

// Module 12336 (ConjurePerfTraceStats)
import ConjurePerfTraceLayout from "ConjurePerfTraceLayout" /* 10990 */;
import size from "module_2" /* 2 */;

let map, set;

function perfTraceStats(trace) {
  let category;
  let service;
  let obj = ConjurePerfTraceLayout;
  const perfSpanSelfTimesResult = obj.perfSpanSelfTimes(trace);
  map = new Map();
  const obj2 = { calls: 0, input: 0, output: 0, cacheRead: 0, cacheWrite: 0, costUsd: 0 };
  const iter = trace.spans[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let obj5 = ConjurePerfTraceLayout;
    let describePerfSpanResult = obj5.describePerfSpan(nextResult);
    ({ service, category } = describePerfSpanResult);
    set = map.set;
    let num = map.get(category);
    if (num == null) {
      num = 0;
    }
    let num2 = perfSpanSelfTimesResult.get(tmp2.id);
    if (num2 == null) {
      num2 = 0;
    }
    let result = set(category, num + num2);
    if ("model" === service) {
      obj2.calls = obj2.calls + 1;
      obj2.input = obj2.input + numberAttr(tmp2, "in");
      obj2.output = obj2.output + numberAttr(tmp2, "out");
      obj2.cacheRead = obj2.cacheRead + numberAttr(tmp2, "cache_read");
      obj2.cacheWrite = obj2.cacheWrite + numberAttr(tmp2, "cache_write");
      obj2.costUsd = obj2.costUsd + numberAttr(tmp2, "cost_usd");
    }
    continue;
  }
  const PERF_CATEGORIES = ConjurePerfTraceLayout.PERF_CATEGORIES;
  const mapped = PERF_CATEGORIES.map((category) => {
    let num;
    const obj = { category, ms: num };
    num = map.get(category);
    if (num == null) {
      num = 0;
    }
    return obj;
  });
  const obj3 = { categories: mapped, busyMs: mapped.reduce((acc, ms) => acc + ms.ms, 0), model: obj2 };
  return obj3;
}
function numberAttr(attrs, cache_read) {
  attrs = attrs.attrs;
  let tmp;
  if (attrs != null) {
    tmp = attrs[cache_read];
  }
  let num = 0;
  if (typeof tmp === "number") {
    num = tmp;
  }
  return num;
}
let result = size.fileFinishedImporting("modules/conjure/debug/perf_trace/ConjurePerfTraceStats.tsx");

export { perfTraceStats };
export const sumPerfTraceStats = function sumPerfTraceStats(filterPerfTracesResult) {
  let PERF_CATEGORIES;
  let obj2;
  const mapped = filterPerfTracesResult.map(perfTraceStats);
  let obj = {
    categories: PERF_CATEGORIES.map((category) => {
      let closure_0 = category;
      const f146405 = (categories) => {
        categories = categories.categories;
        const found = categories.find((category) => category.category === closure_1_0);
        let num;
        if (found != null) {
          num = found.ms;
        }
        if (num == null) {
          num = 0;
        }
        return num;
      };
      const obj = { category, ms: mapped.reduce((acc, item) => acc + f146405(item), 0) };
      return obj;
    }),
    busyMs: mapped.reduce((acc, item) => acc + f146405(item), 0),
    model: obj2
  };
  PERF_CATEGORIES = ConjurePerfTraceLayout.PERF_CATEGORIES;
  const f112807 = (busyMs) => busyMs.busyMs;
  obj2 = { calls: mapped.reduce((acc, item) => acc + f146405(item), 0), input: mapped.reduce((acc, item) => acc + f146405(item), 0), output: mapped.reduce((acc, item) => acc + f146405(item), 0), cacheRead: mapped.reduce((acc, item) => acc + f146405(item), 0), cacheWrite: mapped.reduce((acc, item) => acc + f146405(item), 0), costUsd: mapped.reduce((acc, item) => acc + f146405(item), 0) };
  const f112808 = (model) => model.model.calls;
  const f112809 = (model) => model.model.input;
  const f112810 = (model) => model.model.output;
  const f112811 = (model) => model.model.cacheRead;
  const f112812 = (model) => model.model.cacheWrite;
  const f112813 = (model) => model.model.costUsd;
  return obj;
};
