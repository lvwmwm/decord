// Module ID: 12552
// Function ID: 12553
// Name: ConjureTimelineTree
// Dependencies: [32, 3865, 1114, 2]
// Exports: currentStep, describeNode, endsWithStreamedMessage, latestTodos, streamedContent, streamedMessages, turnLifecycle, turnSegments

// Module 12552 (ConjureTimelineTree)
import intl2 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let error, map, map1, set, set2;

function isLegacyControlLineNode(label_key) {
  label_key = undefined;
  if (label_key != null) {
    label_key = label_key.label_key;
  }
  return "testing_app" === label_key;
}
function buildTimelineTree(steps, arg1) {
  let _undefined;
  let c11;
  let c12;
  let obj4;
  let tmp4;
  function cancelledLaneIds(steps) {
    set = new Set();
    const iter = steps[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if ("node" === nextResult.kind) {
        if (null != tmp2.node) {
          let task_id = tmp2.task_id;
          let tmp5 = task_id;
          let tmp6 = null != task_id;
          if (tmp6) {
            tmp6 = "" !== tmp5;
          }
          if (tmp6) {
            let tmp9 = "task" !== tmp2.node.node_kind;
            if (tmp9) {
              tmp9 = "task" !== tmp2.node.id;
            }
            if (!tmp9) {
              if ("cancelled" === tmp2.node.status) {
                let addResult = set.add(tmp5);
              }
            }
          }
        }
      }
      continue;
    }
    return set;
  }
  function legacyControlLineIds(steps) {
    set = new Set();
    const iter = steps[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let tmp3 = "node" !== nextResult.kind;
      if (!tmp3) {
        tmp3 = null == tmp2.node;
      }
      if (!tmp3) {
        let tmp6 = null != tmp2.task_id;
        if (tmp6) {
          tmp6 = "" !== tmp2.task_id;
        }
        tmp3 = tmp6;
      }
      if (!tmp3) {
        if (sum1(tmp2.node)) {
          let addResult = set.add(tmp2.node.id);
        }
      }
      continue;
    }
    return set;
  }
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.turnActive;
  if (flag === undefined) {
    flag = true;
  }
  let task;
  c11 = undefined;
  c12 = undefined;
  function ensure(taskId, id, arg2, segment) {
    let obj5;
    let obj8;
    if ("task" !== arg2) {
      if ("task" !== id) {
        let str = taskId;
        if (taskId == null) {
          str = "";
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + str + " " + id;
        const value = map1.get(combined);
        obj = map1;
        if (null != value) {
          return value;
        } else {
          const obj3 = { id, kind: "step", detail: [], detailDrivenBy: [], detailError: [], status: "running", screenshots: [], browserSessions: [], attachments: [], touched: 0, segment };
          const result = obj.set(combined, obj3);
          if (null != taskId) {
            let value3 = map.get(taskId);
            const obj2 = map;
            if (null == value3) {
              const obj4 = { taskId, task: obj5, steps: [] };
              obj5 = { id: "task", kind: "task", detail: [], detailDrivenBy: [], detailError: [], status: "running", screenshots: [], browserSessions: [], attachments: [], touched: 0, segment };
              const result1 = obj2.set(taskId, obj4);
              value3 = obj4;
            }
            const steps = value3.steps;
            steps.push(obj3);
          } else {
            items.push(obj3);
          }
          return obj3;
        }
      }
    }
    if (null != taskId) {
      let value4 = map.get(taskId);
      const obj6 = map;
      if (null == value4) {
        const obj7 = { taskId, task: obj8, steps: [] };
        obj8 = { id: "task", kind: "task", detail: [], detailDrivenBy: [], detailError: [], status: "running", screenshots: [], browserSessions: [], attachments: [], touched: 0, segment };
        const result2 = obj6.set(taskId, obj7);
        value4 = obj7;
      }
      task = value4.task;
    } else if (task == null) {
      task = { id: "task", kind: "task", detail: [], detailDrivenBy: [], detailError: [], status: "running", screenshots: [], browserSessions: [], attachments: [], touched: 0, segment };
      const obj9 = { id: "task", kind: "task", detail: [], detailDrivenBy: [], detailError: [], status: "running", screenshots: [], browserSessions: [], attachments: [], touched: 0, segment };
    }
    return task;
  }
  let items = [];
  map = new Map();
  map1 = new Map();
  let sum1 = 0;
  const map2 = new Map();
  const map3 = new Map();
  const segmentOf = ensure(steps).segmentOf;
  let closure_9 = cancelledLaneIds(steps);
  let closure_10 = legacyControlLineIds(steps);
  function _loop() {
    let append_detail;
    let append_detail2;
    let append_detail_error;
    let id;
    let node;
    let node_kind;
    let task_id;
    function isSuppressedLaneFrame(c12, size) {
      const hasItem = 0 !== size.size && "error" !== c12.kind && "terminal_error" !== c12.kind && null != c12.task_id && "" !== c12.task_id && size.has(c12.task_id);
      return hasItem;
    }
    function isLegacyControlLineFrame(c12, size) {
      let hasItem = 0 !== size.size && "node" === c12.kind && null != c12.node;
      if (hasItem) {
        hasItem = null == c12.task_id || "" === c12.task_id;
        const tmp4 = null == c12.task_id || "" === c12.task_id;
      }
      if (hasItem) {
        hasItem = size.has(c12.node.id);
      }
      return hasItem;
    }
    function errorLabelKey(c12) {
      let str = "error";
      let str2;
      if ("error" === c12.kind) {
        str2 = c12.failure_kind;
      }
      if (str2 == null) {
        str2 = "unknown";
      }
      const combined = "error_" + str2;
      if (combined in map2) {
        str = combined;
      }
      return str;
    }
    if (isSuppressedLaneFrame(_undefined, closure_9)) {
      return 0;
    } else if (isLegacyControlLineFrame(_undefined, closure_10)) {
      return 0;
    } else {
      let num = segmentOf[c11];
      let tmp4 = c11;
      if (num == null) {
        num = 0;
      }
      let str = "node";
      if ("node" === _undefined.kind) {
        if (null != _undefined.node) {
          ({ node, task_id } = _undefined);
          ({ id, node_kind } = node);
          const tmp13 = ensure;
          if (node_kind == null) {
            node_kind = "step";
          }
          let self = 0;
          const tmp13Result = tmp13(task_id, id, node_kind, num);
          const sum = sum1 + 1;
          sum1 = sum;
          tmp13Result.touched = sum;
          if (null != node.label_key) {
            tmp13Result.labelKey = node.label_key;
          }
          if (null != node.label_text) {
            tmp13Result.labelText = node.label_text;
          }
          if (null != node.group_label) {
            tmp13Result.groupLabel = node.group_label;
          }
          if (null != node.helper_name) {
            tmp13Result.helperName = node.helper_name;
          }
          if (null != node.helper_mark) {
            tmp13Result.helperMark = node.helper_mark;
          }
          if (null != node.todo_id) {
            tmp13Result.todoId = node.todo_id;
          }
          if (null != node.tier) {
            tmp13Result.tier = node.tier;
          }
          if (null != node.detail) {
            const result = map3.set(tmp13Result, unkeyed(node.detail, node.detail_error, node.detail_driven_by));
          }
          if (null != node.append_detail) {
            let driven_by = node.driven_by;
            if (driven_by == null) {
              driven_by = null;
            }
            ({ append_detail: append_detail2, append_detail, append_detail_error } = node);
            set = map3.set;
            const tmp26 = unkeyed(append_detail, append_detail_error, append_detail2.map(() => driven_by));
            let items3 = map3.get(tmp13Result);
            if (items3 == null) {
              items3 = [];
            }
            items = [];
            HermesBuiltin.arraySpread(items, tmp26, HermesBuiltin.arraySpread(items, items3, 0));
            const result1 = set(tmp13Result, items);
          }
          if (null != node.lines) {
            let value2 = map2.get(tmp13Result);
            const obj2 = map2;
            if (value2 == null) {
              const _Map = Map;
              const self2 = this;
              self = this;
              value2 = new Map();
            }
            const result2 = obj2.set(tmp13Result, value2);
            const lines = node.lines;
            for (const item10116 of lines) {
              let tmp42;
              let tmp38 = item10116;
              let set1 = item10116.set;
              if (set1 == null) {
                set1 = value2.get(tmp38.key);
              }
              if (set1 == null) {
                set1 = [];
              }
              set2 = value2.set;
              let key = tmp38.key;
              if (null != tmp38.add) {
                let items1 = [];
                let arraySpreadResult2 = HermesBuiltin.arraySpread(items1, tmp38.add, HermesBuiltin.arraySpread(items1, tmp40, 0));
                tmp42 = items1;
              } else {
                tmp42 = set1;
              }
              let set2Result = set2(key, tmp42);
              continue;
            }
          }
          if (null != node.status) {
            tmp13Result.status = node.status;
          }
          if (null != node.duration) {
            tmp13Result.durationMs = node.duration;
          }
          if (null != node.screenshots) {
            tmp13Result.screenshots = node.screenshots;
          }
          if (null != node.browser_sessions) {
            tmp13Result.browserSessions = node.browser_sessions;
          }
          if (null != node.attachments) {
            tmp13Result.attachments = node.attachments;
          }
          return 0;
        }
      }
      let str2 = "error";
      if ("error" === _undefined.kind) {
        const _HermesInternal = HermesInternal;
        const tmp9 = ensure(undefined, "" + _undefined.kind + "-" + tmp4, "step", num);
        sum1 = sum1 + 1;
        tmp9.touched = sum1;
        tmp9.labelKey = errorLabelKey(_undefined);
        tmp9.status = "failed";
        const tmp12 = null != _undefined.message && "" !== _undefined.message;
        if (tmp12) {
          const items2 = [_undefined.message];
          tmp9.detail = items2;
        }
      }
    }
  }
  const entries = steps.entries();
  let tmp3 = entries[Symbol.iterator]();
  while (tmp3 !== undefined) {
    let tmp5 = map1;
    let tmp6 = map1(tmp4, 2);
    [c11, c12] = tmp6;
    let _loopResult = _loop();
    continue;
  }
  let items1 = [...map3.keys(), ...map2.keys()];
  let self = this;
  set = new Set(items1);
  let iter = set[Symbol.iterator]();
  let nextResult = iter.next();
  while (iter !== undefined) {
    let tmp10 = nextResult;
    let items5 = map3.get(nextResult);
    if (items5 == null) {
      items5 = [];
    }
    let items2 = [];
    let tmp11 = items2;
    let tmp12 = items5;
    let num = 0;
    let arraySpreadResult = HermesBuiltin.arraySpread(items2, items5, 0);
    let value2 = map2.get(tmp10);
    let items6;
    if (value2 != null) {
      items6 = value2.values();
    }
    if (items6 == null) {
      items6 = [];
    }
    let items3 = [];
    let arraySpreadResult3 = HermesBuiltin.arraySpread(items3, items6, 0);
    let arraySpreadResult4 = HermesBuiltin.arraySpread(items2, items3.flat(), arraySpreadResult);
    tmp10.detail = items2.map((text) => text.text);
    tmp10.detailDrivenBy = items2.map((driven_by) => {
      driven_by = driven_by.driven_by;
      if (driven_by == null) {
        driven_by = null;
      }
      return driven_by;
    });
    tmp10.detailError = items2.map((error) => {
      error = error.error;
      if (error == null) {
        error = null;
      }
      return error;
    });
    continue;
  }
  const items4 = [...map.values()];
  const iter2 = items4[Symbol.iterator]();
  const nextResult1 = iter2.next();
  while (iter2 !== undefined) {
    let tmp23 = nextResult1;
    let tmp24 = flag;
    if (!tmp24) {
      tmp24 = "running" !== tmp23.task.status;
    }
    if (!tmp24) {
      let tmp26 = nextResult1;
      tmp23.task.status = "incomplete";
    }
    continue;
  }
  let obj2 = { steps: items, tasks: items4 };
  if (null != task) {
    let obj3 = { turn: task };
    obj4 = obj3;
  } else {
    obj4 = {};
  }
  const merged = Object.assign(obj4);
  return obj2;
}
function unkeyed(append_detail, append_detail_error, detail_driven_by) {
  return append_detail.map((text, index) => {
    let obj3;
    let obj5;
    let tmp;
    if (append_detail_error != null) {
      tmp = append_detail_error[index];
    }
    if (tmp == null) {
      tmp = null;
    }
    let tmp2;
    if (detail_driven_by != null) {
      tmp2 = detail_driven_by[index];
    }
    if (tmp2 == null) {
      tmp2 = null;
    }
    obj = { text };
    if (null != tmp) {
      obj3 = { error: tmp };
      const obj2 = { error: tmp };
    } else {
      obj3 = {};
    }
    const merged = Object.assign(obj3);
    if (null != tmp2) {
      obj5 = { driven_by: tmp2 };
      const obj4 = { driven_by: tmp2 };
    } else {
      obj5 = {};
    }
    const merged1 = Object.assign(obj5);
    return obj;
  });
}
function scanTurnColumn(arr) {
  let tmp20;
  let tmp8;
  let tmp9;
  const items = [];
  const segmentOf = [];
  let tmp = null;
  let tmp2 = null;
  let num = 0;
  const entries = arr.entries();
  const tmp4 = entries[Symbol.iterator]();
  while (tmp4 !== undefined) {
    let tmp7 = _slicedToArray(tmp5, 2);
    [tmp8, tmp9] = tmp7;
    let tmp10 = tmp9;
    let segment = tmp9.segment;
    let tmp11 = segment;
    let push = segmentOf.push;
    if (segment == null) {
      segment = num;
    }
    arr = push(segment);
    if ("thinking" !== tmp10.kind) {
      if (!isTurnWorkFrame(tmp10)) {
        if ("todos" !== tmp10.kind) {
          if ("assistant_delta" === tmp10.kind) {
            if (null == tmp10.task_id) {
              let str = tmp10.message;
              if (str == null) {
                str = "";
              }
              let tmp28 = str;
              if ("" !== str) {
                if (null == tmp) {
                  num = num + 1;
                  let tmp33 = tmp11;
                  if (tmp11 == null) {
                    tmp33 = num;
                  }
                  segmentOf[tmp8] = tmp33;
                  let obj2 = { type: "message", key: "message-" + tmp8, segment: tmp33, content: tmp28 };
                  let _HermesInternal2 = HermesInternal;
                  tmp = obj2;
                  let arr2 = items.push(obj2);
                } else {
                  tmp.content = tmp28;
                }
              }
              if (true === tmp10.message_finished) {
                tmp = null;
              }
            }
          }
        } else {
          let items2 = tmp10.items;
          if (items2 == null) {
            items2 = [];
          }
          let tmp17 = items2;
          if (0 === items2.length) {
            continue;
          } else if (null != tmp2) {
            tmp2.todos = tmp17;
          } else {
            obj = { type: "todos", key: "todos-" + tmp8, segment: tmp20, todos: tmp17 };
            let _HermesInternal = HermesInternal;
            tmp20 = tmp11;
            if (tmp11 == null) {
              tmp20 = num;
            }
            tmp2 = obj;
            let arr3 = items.push(obj);
          }
        }
        continue;
      }
      continue;
    }
    tmp = null;
  }
  return { items, segmentOf };
}
function segmentDurations(steps) {
  map = new Map();
  const iter = steps[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if ("segment_settled" === nextResult.kind) {
      let tmp4 = null != tmp2.task_id;
      if (tmp4) {
        tmp4 = "" !== tmp2.task_id;
      }
      if (!tmp4) {
        let tmp7 = null != tmp2.segment;
        if (tmp7) {
          tmp7 = null != tmp2.duration;
        }
        if (tmp7) {
          let result = map.set(tmp2.segment, tmp2.duration);
        }
      }
    }
    continue;
  }
  return map;
}
function sharedTimelineTree(steps, flag) {
  let value = weakMap1.get(steps);
  obj = weakMap1;
  if (null == value) {
    const obj2 = {};
    const result = obj.set(steps, obj2);
    value = obj2;
  }
  let str = "settled";
  if (flag) {
    str = "active";
  }
  let tmp3 = value[str];
  if (tmp3 == null) {
    const obj3 = { turnActive: flag };
    const tmp5 = buildTimelineTree(steps, obj3);
    value[str] = tmp5;
    tmp3 = tmp5;
  }
  return tmp3;
}
function isTurnWorkFrame(task_id) {
  let tmp = null == task_id.task_id || "" === task_id.task_id;
  if (tmp) {
    let tmp2 = "error" === task_id.kind || "terminal_error" === task_id.kind;
    if (!tmp2) {
      let tmp3 = "node" === task_id.kind && null != task_id.node;
      if (tmp3) {
        let tmp4 = "node" === task_id.kind && null != task_id.node && null == task_id.task_id;
        if (tmp4) {
          tmp4 = "task" === task_id.node.node_kind || "task" === task_id.node.id;
        }
        tmp3 = !tmp4;
      }
      if (tmp3) {
        const node = task_id.node;
        let label_key;
        if (node != null) {
          label_key = node.label_key;
        }
        tmp3 = "testing_app" !== label_key;
      }
      tmp2 = tmp3;
    }
    tmp = tmp2;
  }
  return tmp;
}
let obj = { healthcheck_failed: _modDef3865.iwOTgo, preview_ready: _modDef3865.okkgSB, working: _modDef3865.t8skVB, error: _modDef3865.avt0ax, error_service_unavailable: _modDef3865.yreXyD, error_rate_limited: _modDef3865.d8lNBq, error_timeout: _modDef3865.t1R7Rt };
const weakMap = new WeakMap();
const weakMap1 = new WeakMap();
let result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureTimelineTree.tsx");

export function describeNode(currentStepResult) {
  if (null != currentStepResult.labelText) {
    if ("" !== currentStepResult.labelText) {
      return currentStepResult.labelText;
    }
  }
  let t8skVB;
  if (null != currentStepResult.labelKey) {
    t8skVB = obj[currentStepResult.labelKey];
  }
  const intl = intl2.intl;
  const string = intl.string;
  if (t8skVB == null) {
    t8skVB = _modDef3865.t8skVB;
  }
  return string(t8skVB);
}
export { buildTimelineTree };
export function currentStep(steps) {
  let tmp;
  const iter = steps[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = null == tmp;
    if (!tmp5) {
      tmp5 = tmp3.touched > tmp.touched;
    }
    if (tmp5) {
      tmp = nextResult;
    }
    continue;
  }
  return tmp;
}
export function streamedContent(steps) {
  return scanTurnColumn(steps).items;
}
export { segmentDurations };
export { sharedTimelineTree };
export function turnSegments(steps, arg1) {
  let items4;
  let num2;
  function sharedScan(steps) {
    let value = weakMap.get(steps);
    obj = weakMap;
    if (null == value) {
      const tmp3 = scanTurnColumn(steps);
      const result = obj.set(steps, tmp3);
      value = tmp3;
    }
    return value;
  }
  obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.turnActive;
  if (flag === undefined) {
    flag = true;
  }
  const items = sharedScan(steps).items;
  const tmp = sharedTimelineTree(steps, flag);
  const obj2 = segmentDurations(steps);
  map = new Map();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if ("message" === nextResult.type) {
      let result = map.set(tmp3.segment, tmp3);
    }
    continue;
  }
  const self = this;
  set = new Set();
  steps = tmp.steps;
  for (const item10041 of steps) {
    let addResult = set.add(item10041.segment);
    continue;
  }
  const tasks = tmp.tasks;
  for (const item10051 of tasks) {
    let addResult1 = set.add(item10051.task.segment);
    continue;
  }
  const found = items.find((type) => "todos" === type.type);
  let segment;
  if (found != null) {
    segment = found.segment;
  }
  let applyResult;
  if (null != segment) {
    const _Math = Math;
    const items1 = [segment];
    HermesBuiltin.arraySpread(items1, set, 1);
    const _Math2 = Math;
    applyResult = HermesBuiltin.apply(max, items1, Math);
  }
  const _Math3 = Math;
  const max2 = Math.max;
  const items2 = [0, ...tmp6];
  if (null != applyResult) {
    const items3 = [applyResult];
    items4 = items3;
  } else {
    items4 = [];
  }
  HermesBuiltin.arraySpread(items2, items4, tmp17);
  const items5 = [];
  const applyResult1 = max2.apply(items2);
  for (let num2 = 0; num2 <= applyResult1; num2 = num2 + 1) {
    let value = map.get(num2);
    let hasItem = set.has(num2);
    let tmp22 = null != value;
    if (!tmp22) {
      tmp22 = hasItem;
    }
    let tmp24 = applyResult === num2;
    if (!tmp22) {
      tmp22 = tmp24;
    }
    if (tmp22) {
      let obj5;
      let obj7;
      let key;
      let push = items5.push;
      if (value != null) {
        key = value.key;
      }
      if (key == null) {
        let _HermesInternal = HermesInternal;
        key = "work-" + num2;
      }
      let obj3 = { key, index: num2, hasWork: hasItem, hasTodos: tmp24 };
      if (null != value) {
        let obj4 = { prose: value };
        obj5 = obj4;
      } else {
        obj5 = {};
      }
      let merged = Object.assign(obj5);
      if (obj2.has(num2)) {
        let obj6 = { durationMs: obj2.get(num2) };
        obj7 = obj6;
      } else {
        obj7 = {};
      }
      let merged1 = Object.assign(obj7);
      let arr = push(obj3);
    }
  }
  return items5;
}
export function turnLifecycle(memo1, turnActive) {
  let index;
  let obj2;
  let obj5;
  turnActive = turnActive.turnActive;
  const found = memo1.filter((hasWork) => hasWork.hasWork || hasWork.hasTodos);
  const atResult = found.at(-1);
  let index1;
  if (atResult != null) {
    index1 = atResult.index;
  }
  const atResult1 = memo1.at(-1);
  if (atResult1 != null) {
    index = atResult1.index;
  }
  let tmp4;
  if (turnActive) {
    if (null != index1) {
      if (index1 === index) {
        tmp4 = index1;
      }
    }
  }
  if (null != index1) {
    obj2 = { lastWork: index1 };
    obj = { lastWork: index1 };
  } else {
    obj2 = {};
  }
  const obj3 = {};
  const merged = Object.assign(obj2);
  if (null != tmp4) {
    obj5 = { open: tmp4 };
    const obj4 = { open: tmp4 };
  } else {
    obj5 = {};
  }
  const merged1 = Object.assign(obj5);
  return obj3;
}
export function streamedMessages(arr) {
  let items = scanTurnColumn(arr).items;
  return items.flatMap((type) => {
    let items1;
    if ("message" === type.type) {
      obj = { key: null, content: null, segment: null };
      ({ key: obj.key, content: obj.content, segment: obj.segment } = type);
      const items = [obj];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
}
export function endsWithStreamedMessage(arg0) {
  let diff = arg0.length - 1;
  if (0 <= diff) {
    while (true) {
      let tmp2 = arg0[diff];
      if (null != tmp2) {
        if ("assistant_delta" === tmp2.kind) {
          if (null != tmp2.message) {
            if ("" !== tmp2.message) {
              break;
            }
          }
        }
        let tmp4 = "node" === tmp2.kind && null != tmp2.node && null == tmp2.task_id;
        if (tmp4) {
          let tmp5 = "task" === tmp2.node.node_kind || "task" === tmp2.node.id;
          tmp4 = tmp5;
        }
        if (!tmp4) {
          if ("node" !== tmp2.kind) {
            let flag = false;
            return false;
          } else {
            let node = tmp2.node;
            let label_key;
            if (node != null) {
              label_key = node.label_key;
            }
          }
        }
      }
      diff = diff - 1;
    }
    return true;
  }
  return false;
}
export function latestTodos(steps) {
  let tmp2;
  let diff = steps.length - 1;
  if (0 <= diff) {
    while (true) {
      tmp2 = steps[diff];
      let kind;
      if (tmp2 != null) {
        kind = tmp2.kind;
      }
      if ("todos" === kind) {
        if (null == tmp2.task_id) {
          if (null != tmp2.items) {
            if (tmp2.items.length > 0) {
              break;
            }
          }
        }
      }
      diff = diff - 1;
    }
    return tmp2.items;
  }
  return null;
}
