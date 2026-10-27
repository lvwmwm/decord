// Module ID: 17842
// Function ID: 17843
// Name: useConjureTitleBarStatus
// Dependencies: [17839, 10722, 558, 576, 17841, 504, 2]

// Module 17842 (useConjureTitleBarStatus)
import conjureHomeProjectState2 from "conjureHomeProjectState" /* 17839 */;
import useConjureHomeOwnProjectsDefault from "useConjureHomeOwnProjects" /* 17841 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function summaryEqual(status, status2) {
  status = status.status;
  let kind;
  if (status != null) {
    kind = status.kind;
  }
  status2 = status2.status;
  let kind1;
  if (status2 != null) {
    kind1 = status2.kind;
  }
  let tmp3 = kind === kind1;
  if (tmp3) {
    const status3 = status.status;
    let projectId;
    if (status3 != null) {
      projectId = status3.projectId;
    }
    const status4 = status2.status;
    let projectId1;
    if (status4 != null) {
      projectId1 = status4.projectId;
    }
    tmp3 = projectId === projectId1;
  }
  if (tmp3) {
    tmp3 = status.hasUnread === status2.hasUnread;
  }
  if (tmp3) {
    tmp3 = status.mentionCount === status2.mentionCount;
  }
  return tmp3;
}
function summarize(arg0) {
  let tmp22;
  let id = null;
  let id1 = null;
  let id2 = null;
  let num = 0;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp5 = nextResult;
    let tmp6 = require;
    let obj = conjureHomeProjectState2;
    let conjureHomeProjectState = obj.readConjureHomeProjectState(nextResult.id);
    if ("in_progress" === conjureHomeProjectState) {
      if (id == null) {
        id = tmp5.id;
      }
    } else if ("unread" === tmp9) {
      let tmp6Result = tmp6(10722);
      let conjureProjectMentionCount = tmp6Result.getConjureProjectMentionCount(tmp5.id);
      num = num + conjureProjectMentionCount;
      if (conjureProjectMentionCount > 0) {
        if (id1 == null) {
          id1 = tmp5.id;
        }
      } else if (id2 == null) {
        id2 = tmp5.id;
      }
    }
    continue;
  }
  if (null != id) {
    tmp22 = { kind: "working", projectId: id };
    const obj2 = { kind: "working", projectId: id };
  } else if (null != id1) {
    tmp22 = { kind: "needs_input", projectId: id1 };
    const obj3 = { kind: "needs_input", projectId: id1 };
  } else {
    tmp22 = null;
    if (null != id2) {
      tmp22 = { kind: "unread", projectId: id2 };
      const obj4 = { kind: "unread", projectId: id2 };
    }
  }
  return { status: tmp22, hasUnread: null != id1 || null != id2, mentionCount: num };
}
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTitleBarStatus() {
  let closure_0;
  let tmp5;
  let tmp6;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp4 = useConjureHomeOwnProjectsDefault();
  _require = tmp4;
  if (cResult[0] !== tmp4) {
    const fn = function t() {
      return summarize(closure_0);
    };
    const items = [tmp4];
    cResult[0] = tmp4;
    cResult[1] = fn;
    cResult[2] = items;
    tmp6 = items;
    tmp5 = fn;
  } else {
    tmp5 = cResult[1];
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  return tmpResult.useStateFromStores(require("conjureHomeProjectState").CONJURE_HOME_PROJECT_STATE_STORES, tmp5, tmp6, summaryEqual);
}) : (function useConjureTitleBarStatus() {
  let closure_0;
  const tmp = useConjureHomeOwnProjectsDefault();
  _require = tmp;
  const items = [tmp];
  const obj = require("get initialized");
  return obj.useStateFromStores(require("conjureHomeProjectState").CONJURE_HOME_PROJECT_STATE_STORES, () => summarize(closure_0), items, summaryEqual);
});
const result = size.fileFinishedImporting("modules/conjure/title_bar/useConjureTitleBarStatus.tsx");

export default tmp2;
