// Module ID: 12741
// Function ID: 12742
// Name: useConjurePublishScheduleProposal
// Dependencies: [5, 32, 19, 6838, 504, 10942, 10943, 1114, 3865, 12467, 2]
// Exports: default

// Module 12741 (useConjurePublishScheduleProposal)
import _modDef3865 from "module_3865" /* 3865 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 6838 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, c4, c5, closure_0, dependencyMap, importDefault;

const canPublishProject = ConjureProjectStore2.canPublishProject;
const result = size.fileFinishedImporting("modules/conjure/publish_schedule/useConjurePublishScheduleProposal.tsx");

export default function useConjurePublishScheduleProposal(arg0, trigger, arg2) {
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
        return { value: "HermesInternal", done: null };
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
            obj2 = closure_0(dependencyMap[5]);
            return obj5;
          }
        } else {
          if (1 === c4) {
            let message;
            c3 = 0;
            closure_0 = dependencyMap;
            const tmp12 = closure_129_3;
            if (closure_0 instanceof tmp(dependencyMap[6])) {
              message = closure_0.message;
            } else {
              const intl = closure_0(dependencyMap[7]).intl;
              message = intl.string(tmp(dependencyMap[8]).EXceox);
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
          return { value: "HermesInternal", done: null };
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
    let intl = tmp(1114).intl;
    const formatToPlainString = intl.formatToPlainString;
    let obj2 = { time: tmpResult.formatPublishScheduleTime(trigger.next_run_at) };
    const orZDqY = _modDef3865.orZDqY;
    tmpResult = tmp(12467);
    formatToPlainStringResult = formatToPlainString(orZDqY, obj2);
  }
  let obj3 = { summary: tmpResult2.publishScheduleSummary(trigger.trigger), firstPublish: formatToPlainStringResult, status: tmp5, error: first, onTurnOn: tmp11 };
  tmp11 = undefined;
  tmpResult2 = tmp(12467);
  if (stateFromStores) {
    let tmp12 = arg2;
    if (tmp12) {
      if ("on" !== tmp5) {
        tmp11 = callback;
      }
    }
  }
  return obj3;
};
