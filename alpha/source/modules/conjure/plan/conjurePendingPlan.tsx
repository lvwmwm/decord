// Module ID: 11794
// Function ID: 11795
// Name: conjurePendingPlan
// Dependencies: [11217, 1126, 3849, 2]
// Exports: conjurePlanApproved, pendingPlanRenderId, planCardExpanded, planVersions, togglePlanCard

// Module 11794 (conjurePendingPlan)
import intl3 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import conjureChatTurns from "conjureChatTurns" /* 11217 */;
import size from "module_2" /* 2 */;

let map, set;

let result = size.fileFinishedImporting("modules/conjure/plan/conjurePendingPlan.tsx");

export const pendingPlanRenderId = function pendingPlanRenderId(memo) {
  const atResult = memo.at(-1);
  let role;
  if (atResult != null) {
    role = atResult.role;
  }
  if ("assistant" !== role) {
    return null;
  } else {
    let diff = memo.length - 1;
    if (0 <= diff) {
      while (true) {
        let tmp4 = memo[diff];
        if ("assistant" === tmp4.role) {
          let obj = conjureChatTurns;
          if (!obj.turnSettled(tmp4)) {
            break;
          } else if ("plan_implemented" === tmp4.kind) {
            break;
          } else if (null != tmp4.proposal) {
            return tmp4.render_id;
          }
        }
        diff = diff - 1;
      }
      return null;
    }
    return null;
  }
};
export const conjurePlanApproved = function conjurePlanApproved(arg0) {
  const intl = intl3.intl;
  const items = [intl.string(_modDef3849.EMgIuY), ];
  const intl2 = intl3.intl;
  items[1] = intl2.string(_modDef3849.Zc7gML);
  let flag = false;
  set = new Set(items);
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if ("plan_implemented" === nextResult.kind) {
      iter.return();
      return true;
    } else {
      if ("assistant" === tmp2.role) {
        if (null != tmp2.proposal) {
          flag = true;
        }
      } else {
        let tmp4 = flag;
        if (tmp4) {
          let str = tmp2.content;
          if (set.has(str.trim())) {
            iter.return();
            return true;
          }
        }
      }
      continue;
    }
  }
  return false;
};
export const planVersions = function planVersions(memo) {
  map = new Map();
  let render_id = null;
  let num = 0;
  const iter = memo[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    if ("assistant" === nextResult.role) {
      if ("plan_implemented" !== tmp3.kind) {
        if (null != tmp3.proposal) {
          if (null != render_id) {
            let obj = { version: num, superseded: true };
            let result = map.set(render_id, obj);
          }
          let sum = num + 1;
          num = sum;
          let obj2 = { version: sum, superseded: false };
          let result1 = map.set(tmp3.render_id, obj2);
          render_id = tmp3.render_id;
        }
      } else {
        render_id = null;
        num = 0;
      }
    }
    continue;
  }
  return map;
};
export const planCardExpanded = function planCardExpanded(c18, render_id, arg2) {
  let value = c18.get(render_id);
  if (value == null) {
    value = !arg2;
  }
  return value;
};
export const togglePlanCard = function togglePlanCard(get, arg1, arg2) {
  map = new Map(get);
  set = map.set;
  let value = get.get(arg1);
  if (value == null) {
    value = !arg2;
  }
  const result = set(arg1, !value);
  return map;
};
