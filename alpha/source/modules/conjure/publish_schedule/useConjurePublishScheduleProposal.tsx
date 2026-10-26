// Module ID: 12498
// Function ID: 12499
// Name: useConjurePublishScheduleProposal
// Dependencies: [5, 32, 19, 6773, 558, 576, 504, 10806, 10807, 1128, 3830, 11847, 2]

// Module 12498 (useConjurePublishScheduleProposal)
import _modDef3830 from "module_3830" /* 3830 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6773 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, c4, c5, closure_0, dependencyMap, importDefault;

const canPublishProject = ConjureProjectStore2.canPublishProject;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePublishScheduleProposal(arg0, trigger, arg2) {
  let first;
  let tmp11;
  let tmp13;
  let tmp6;
  let tmp7;
  let tmpResult2;
  _require = arg0;
  importDefault = trigger;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(19);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function _() {
      const project = ConjureProjectStore.getProject(closure_0);
      const tmp2 = null != project && canPublishProject(project);
      return tmp2;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj3 = react;
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  [tmp11, dependencyMap] = _slicedToArray(react.useState("idle"), 2);
  const tmp10 = _slicedToArray(react.useState("idle"), 2);
  let tmp12 = _slicedToArray(react.useState(null), 2);
  [tmp13, _asyncToGenerator] = tmp12;
  const tmp9 = _slicedToArray;
  if (cResult[4] === arg0) {
    let tmp15;
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class F {
        constructor() {
          return Date.now();
        }
      }
      cResult[7] = F;
      tmp15 = F;
    } else {
      class F {
        constructor() {
          return Date.now();
        }
      }
    }
    const first1 = tmp9(obj3.useState(tmp15), 1)[0];
    if (cResult[8] === trigger.next_run_at) {
      class F {
        constructor() {
          return Date.now();
        }
      }
      if (cResult[11] !== trigger.trigger) {
        class F {
          constructor() {
            return Date.now();
          }
        }
        const result = obj6.publishScheduleSummary(trigger.trigger);
        cResult[11] = trigger.trigger;
        cResult[12] = result;
      } else {
        class F {
          constructor() {
            return Date.now();
          }
        }
      }
      if (stateFromStores) {
        class F {
          constructor() {
            return Date.now();
          }
        }
        if (arg2) {
          class F {
            constructor() {
              return Date.now();
            }
          }
          if ("on" !== tmp11) {
            class F {
              constructor() {
                return Date.now();
              }
            }
          }
        }
      }
      if (cResult[13] === tmp13) {
        class F {
          constructor() {
            return Date.now();
          }
        }
      }
      let obj2 = { summary: tmp21, firstPublish: tmp17, status: tmp11, error: tmp13, onTurnOn: tmp23 };
      cResult[13] = tmp13;
      cResult[14] = tmp17;
      cResult[15] = tmp11;
      cResult[16] = tmp21;
      cResult[17] = undefined;
      cResult[18] = obj2;
    }
    let formatToPlainStringResult = null;
    if (trigger.next_run_at > first1) {
      class F {
        constructor() {
          return Date.now();
        }
      }
      const formatToPlainString = tmp19.formatToPlainString;
      let obj4 = { time: tmpResult2.formatPublishScheduleTime(trigger.next_run_at) };
      const orZDqY = _modDef3830.orZDqY;
      tmpResult2 = tmp(11847);
      formatToPlainStringResult = formatToPlainString(orZDqY, obj4);
    }
    cResult[8] = trigger.next_run_at;
    cResult[9] = first1;
    cResult[10] = formatToPlainStringResult;
  }
  _require = _asyncToGenerator(async (arg0, value) => {
    let closure_2;
    let obj2;
    let v0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            trigger = tmp;
            closure_0 = undefined;
            tmp35("sending");
            c3(null);
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj2.setPublishSchedule(closure_0, trigger.trigger), done: false };
            obj2 = closure_0(dependencyMap[7]);
            return obj5;
          }
        } else {
          if (1 === c4) {
            let message;
            c3 = 0;
            closure_0 = tmp35;
            const tmp12 = c3;
            if (closure_0 instanceof trigger(dependencyMap[8])) {
              message = closure_0.message;
            } else {
              const intl = closure_0(dependencyMap[9]).intl;
              message = intl.string(trigger(dependencyMap[10]).EXceox);
            }
            tmp12(message);
            tmp35("error");
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            tmp35("on");
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: "+352" };
        }
      } catch (tmp35) {
        if (0 === c3) {
          c5 = 3;
          throw tmp35;
        } else {
          c4 = 1;
        }
      }
    }
  });
  function t3() {
    return closure_0(...arguments);
  }
  cResult[4] = arg0;
  cResult[5] = trigger.trigger;
  cResult[6] = t3;
}) : (function useConjurePublishScheduleProposal(arg0, trigger, arg2) {
  let closure_3;
  let first;
  let tmp11;
  let tmp5;
  let tmpResult;
  let tmpResult2;
  _require = arg0;
  importDefault = trigger;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("get initialized");
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    const tmp2 = null != project && canPublishProject(project);
    return tmp2;
  }, items1);
  const tmp4 = _slicedToArray(react.useState("idle"), 2);
  [tmp5, dependencyMap] = tmp4;
  [first, _asyncToGenerator] = react.useState(null);
  const items2 = [arg0, trigger.trigger];
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_1;
    let closure_2;
    let obj2;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp4;
            dependencyMap("sending");
            v0(null);
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj2.setPublishSchedule(closure_0, tmp.trigger), done: false };
            obj2 = closure_0(dependencyMap[7]);
            return obj5;
          }
        } else {
          if (1 === c4) {
            let message;
            c3 = 0;
            closure_0 = dependencyMap;
            const tmp12 = closure_129_3;
            if (closure_0 instanceof tmp(dependencyMap[8])) {
              message = closure_0.message;
            } else {
              const intl = closure_0(dependencyMap[9]).intl;
              message = intl.string(tmp(dependencyMap[10]).EXceox);
            }
            tmp12(message);
            closure_129_2("error");
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            closure_129_2("on");
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: "+352" };
        }
      } catch (tmp35) {
        dependencyMap = tmp35;
        if (0 === c3) {
          c5 = 3;
          throw tmp35;
        } else {
          c4 = 1;
        }
      }
    }
  }), items2);
  let formatToPlainStringResult = null;
  if (trigger.next_run_at > _slicedToArray(react.useState(() => Date.now()), 1)[0]) {
    let intl = tmp(1128).intl;
    const formatToPlainString = intl.formatToPlainString;
    let obj2 = { time: tmpResult.formatPublishScheduleTime(trigger.next_run_at) };
    const orZDqY = _modDef3830.orZDqY;
    tmpResult = tmp(11847);
    formatToPlainStringResult = formatToPlainString(orZDqY, obj2);
  }
  let obj3 = { summary: tmpResult2.publishScheduleSummary(trigger.trigger), firstPublish: formatToPlainStringResult, status: tmp5, error: first, onTurnOn: tmp11 };
  tmp11 = undefined;
  tmpResult2 = tmp(11847);
  if (stateFromStores) {
    let tmp12 = arg2;
    if (tmp12) {
      if ("on" !== tmp5) {
        tmp11 = callback;
      }
    }
  }
  return obj3;
});
let result = size.fileFinishedImporting("modules/conjure/publish_schedule/useConjurePublishScheduleProposal.tsx");

export default tmp2;
