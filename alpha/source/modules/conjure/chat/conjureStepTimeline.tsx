// Module ID: 10853
// Function ID: 10854
// Name: conjureStepTimeline
// Dependencies: [32, 2]
// Exports: hasTerminalStep, recordStep, replayTimeline

// Module 10853 (conjureStepTimeline)
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

function pushStep(items, todosAt, turn_seq) {
  if (null == turn_seq.turn_seq) {
    if ("todos" === turn_seq.kind) {
      if (null == turn_seq.task_id) {
        if (-1 === todosAt.todosAt) {
          todosAt.todosAt = items.length;
          items.push(turn_seq);
          if (null != turn_seq.turn_seq) {
            const seenSeq3 = todosAt.seenSeq;
            seenSeq3.add(turn_seq.turn_seq);
          }
        } else {
          if (null != turn_seq.turn_seq) {
            const seenSeq2 = todosAt.seenSeq;
            seenSeq2.add(turn_seq.turn_seq);
          }
          turn_seq = items[todosAt.todosAt].turn_seq;
          const tmp3 = null != turn_seq.turn_seq && null != turn_seq && turn_seq.turn_seq < turn_seq;
          if (!tmp3) {
            items[todosAt.todosAt] = turn_seq;
          }
        }
      }
    }
    items.push(turn_seq);
    if (null != turn_seq.turn_seq) {
      const seenSeq4 = todosAt.seenSeq;
      seenSeq4.add(turn_seq.turn_seq);
    }
  } else {
    const seenSeq = todosAt.seenSeq;
  }
}
let set = new Set(["reply", "plan_proposed", "terminal_error"]);
const weakMap = new WeakMap();
const weakMap1 = new WeakMap();
let result = size.fileFinishedImporting("modules/conjure/chat/conjureStepTimeline.tsx");

export const TERMINAL_STEP_KINDS = set;
export function recordStep(steps, step) {
  function indexTimeline(arr) {
    let first;
    let tmp8;
    const value = weakMap1.get(arr);
    if (null != value) {
      return value;
    } else {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      let num = -1;
      const entries = arr.entries();
      const tmp22 = entries[Symbol.iterator]();
      while (tmp22 !== undefined) {
        [first, tmp8] = tmp3;
        let tmp9 = tmp8;
        if (null != tmp8.turn_seq) {
          let addResult = set.add(tmp9.turn_seq);
        }
        let tmp13 = -1 === num;
        if (tmp13) {
          tmp13 = "todos" === tmp9.kind;
        }
        if (tmp13) {
          tmp13 = null == tmp9.task_id;
        }
        if (tmp13) {
          num = first;
        }
        continue;
      }
      const obj = { seenSeq: set, todosAt: num };
      const result = weakMap1.set(arr, obj);
      return obj;
    }
  }
  const tmp = indexTimeline(steps);
  if (null != step.turn_seq) {
    const seenSeq = tmp.seenSeq;
    if (seenSeq.has(step.turn_seq)) {
      return steps;
    }
  }
  const substr = steps.slice();
  weakMap1.delete(steps);
  pushStep(substr, tmp, step);
  let result = weakMap1.set(substr, tmp);
  let obj = weakMap;
  set = weakMap.set;
  let hasItem = weakMap.get(steps);
  if (null == hasItem) {
    const someResult = steps.some((kind) => set.has(kind.kind));
    const result1 = obj.set(steps, someResult);
    hasItem = someResult;
  }
  if (!hasItem) {
    let tmp9 = set;
    hasItem = set.has(step.kind);
  }
  const result2 = set(substr, hasItem);
  return substr;
}
export function replayTimeline(steps) {
  const items = [];
  const obj = { seenSeq: new Set(), todosAt: -1 };
  new Set();
  const tmp2 = steps[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = pushStep(items, obj, tmp3);
    continue;
  }
  const result = weakMap1.set(items, obj);
  return items;
}
export function hasTerminalStep(steps) {
  let value = weakMap.get(steps);
  const obj = weakMap;
  if (null == value) {
    const someResult = steps.some((kind) => set.has(kind.kind));
    const result = obj.set(steps, someResult);
    value = someResult;
  }
  return value;
}
