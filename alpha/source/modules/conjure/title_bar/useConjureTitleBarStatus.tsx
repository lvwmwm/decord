// Module ID: 14627
// Function ID: 14628
// Name: useConjureTitleBarStatus
// Dependencies: [14628, 10834, 558, 576, 14629, 504, 2]

// Module 14627 (useConjureTitleBarStatus)
import conjureHomeProjectState2 from "conjureHomeProjectState" /* 14628 */;
import useConjureHomeOwnProjectsDefault from "useConjureHomeOwnProjects" /* 14629 */;
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
  return kind === kind1 && status.hasUnread === status2.hasUnread;
}
function summarize(arg0) {
  let obj2;
  let flag = false;
  let flag2 = false;
  let flag3 = false;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = require;
    let obj = conjureHomeProjectState2;
    let conjureHomeProjectState = obj.readConjureHomeProjectState(nextResult.id);
    if ("in_progress" === conjureHomeProjectState) {
      flag = true;
    } else if ("unread" === tmp6) {
      let tmp3Result = tmp3(10834);
      if (tmp3Result.getConjureProjectMentionCount(tmp2.id) > 0) {
        flag2 = true;
      } else {
        flag3 = true;
      }
    }
    continue;
  }
  if (flag) {
    obj2 = { kind: "working" };
  } else {
    const tmp9 = flag2;
    if (tmp9) {
      obj2 = { kind: "needs_input" };
    } else {
      obj2 = null;
      if (flag3) {
        obj2 = { kind: "unread" };
      }
    }
  }
  const obj3 = { status: obj2, hasUnread: flag2 };
  if (!flag2) {
    flag2 = flag3;
  }
  return obj3;
}
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTitleBarStatus() {
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
