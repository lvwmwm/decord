// Module ID: 16703
// Function ID: 16704
// Name: VibegrationsTodoState
// Dependencies: [12905, 16661, 2]
// Exports: checklistExpanded, checklistLive, messageChecklist, supersededChecklists, todoLabel, todoMark, toggleChecklist, unfinishedTodoCount

// Module 16703 (VibegrationsTodoState)
import VibegrationsChatStore from "VibegrationsChatStore" /* 12905 */;
import VibegrationsTimelineTree from "VibegrationsTimelineTree" /* 16661 */;
import size from "module_2" /* 2 */;

let map, set;

const turnSettled = VibegrationsChatStore.turnSettled;
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsTodoState.tsx");

export function todoMark(status, flag2) {
  let str;
  if ("completed" === status) {
    str = status;
  } else {
    str = "unfinished";
  }
  return str;
}
export const todoLabel = function todoLabel(activeForm, todoMarkResult) {
  if ("in_progress" === todoMarkResult) {
    if (null != activeForm.activeForm) {
      let text;
      if ("" !== activeForm.activeForm) {
        text = activeForm.activeForm;
      }
      return text;
    }
  }
  text = activeForm.text;
};
export const checklistLive = function checklistLive(memo) {
  let tmp2 = !turnSettled(memo);
  turnSettled(memo);
  if (tmp2) {
    tmp2 = true !== memo.stopRequested;
  }
  return tmp2;
};
export const unfinishedTodoCount = function unfinishedTodoCount(arr) {
  return arr.filter((status) => "completed" !== status.status).length;
};
export const messageChecklist = function messageChecklist(role) {
  if ("assistant" !== role.role) {
    return null;
  } else {
    const obj = VibegrationsTimelineTree;
    let latestTodosResult = obj.latestTodos(role.steps);
    if (null == latestTodosResult) {
      let todos = null;
      if (null != role.todos) {
        todos = null;
        if (role.todos.length > 0) {
          todos = role.todos;
        }
      }
      latestTodosResult = todos;
    }
    return latestTodosResult;
  }
};
export const supersededChecklists = function supersededChecklists(memo) {
  set = new Set();
  let diff = memo.length - 1;
  let flag = false;
  if (0 <= diff) {
    do {
      let tmp2 = memo[diff];
      let tmp3 = null != tmp2;
      if (tmp3) {
        let tmp6 = null;
        if ("assistant" === tmp2.role) {
          let obj2 = VibegrationsTimelineTree;
          let latestTodosResult = obj2.latestTodos(tmp2.steps);
          if (null == latestTodosResult) {
            let todos = null;
            if (null != tmp2.todos) {
              todos = null;
              if (tmp2.todos.length > 0) {
                todos = tmp2.todos;
              }
            }
            latestTodosResult = todos;
          }
          tmp6 = latestTodosResult;
        }
        tmp3 = null != tmp6;
      }
      let flag2 = flag;
      if (tmp3) {
        flag2 = true;
        if (flag) {
          let addResult = set.add(tmp2.render_id);
          flag2 = true;
        }
      }
      diff = diff - 1;
      flag = flag2;
    } while (0 <= diff);
  }
  return set;
};
export const checklistExpanded = function checklistExpanded(c15, render_id, arg2) {
  let value = c15.get(render_id);
  if (value == null) {
    value = !arg2;
  }
  return value;
};
export const toggleChecklist = function toggleChecklist(get, arg1, arg2) {
  map = new Map(get);
  set = map.set;
  let value = get.get(arg1);
  if (value == null) {
    value = !arg2;
  }
  const result = set(arg1, !value);
  return map;
};
