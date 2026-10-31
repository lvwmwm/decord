// Module ID: 12601
// Function ID: 12602
// Name: ConjureTodoAgents
// Dependencies: [12587, 2]
// Exports: groupAgentsByTodo, runningTodoAgents, splitAgentOverflow

// Module 12601 (ConjureTodoAgents)
import ConjureTimelineTree from "ConjureTimelineTree" /* 12587 */;
import size from "module_2" /* 2 */;

let map;

let result = size.fileFinishedImporting("modules/conjure/agent_activity/ConjureTodoAgents.tsx");

export const MAX_SHOWN_AGENTS = 3;
export function runningTodoAgents(tasks) {
  let obj;
  let taskId;
  const items = [];
  const iter = tasks[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if ("running" === nextResult.task.status) {
      let obj2 = { key: tmp2.taskId, name: taskId, task: obj.describeNode(tmp2.task), todoId: tmp2.task.todoId };
      taskId = tmp2.task.helperName;
      let push = items.push;
      if (taskId == null) {
        taskId = tmp2.taskId;
      }
      obj = ConjureTimelineTree;
      let arr = push(obj2);
    }
    continue;
  }
  return items;
}
export function groupAgentsByTodo(items) {
  map = new Map();
  const iter = items[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (null != nextResult.todoId) {
      if ("" !== tmp2.todoId) {
        let value = map.get(tmp2.todoId);
        let arr = value;
        if (null != value) {
          let arr2 = arr.push(tmp2);
        } else {
          items = [tmp2];
          let result = map.set(tmp2.todoId, items);
        }
      }
    }
    continue;
  }
  return map;
}
export function splitAgentOverflow(agents) {
  let obj;
  let num = arg1;
  if (arg1 === undefined) {
    num = 3;
  }
  if (agents.length <= num) {
    obj = { shown: agents, overflow: 0 };
    const obj2 = { shown: agents, overflow: 0 };
  } else {
    obj = { shown: agents.slice(0, num), overflow: agents.length - num };
  }
  return obj;
}
