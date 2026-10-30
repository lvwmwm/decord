// Module ID: 14660
// Function ID: 14661
// Name: useConjureTitleBarStatus
// Dependencies: [14661, 10857, 14662, 504, 2]
// Exports: default

// Module 14660 (useConjureTitleBarStatus)
import useConjureHomeOwnProjectsDefault from "useConjureHomeOwnProjects" /* 14662 */;
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
const result = size.fileFinishedImporting("modules/conjure/title_bar/useConjureTitleBarStatus.tsx");

export default function useConjureTitleBarStatus() {
  let closure_0;
  const tmp = useConjureHomeOwnProjectsDefault();
  _require = tmp;
  let obj = require("get initialized");
  const items = [tmp];
  return obj.useStateFromStores(require("conjureHomeProjectState").CONJURE_HOME_PROJECT_STATE_STORES, () => {
    function summarize(arg0) {
      let obj2;
      let flag = false;
      let flag2 = false;
      let flag3 = false;
      const iter = arg0[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp2 = nextResult;
        let tmp3 = closure_1_0;
        let tmp4 = closure_1_2;
        let obj = closure_1_0(closure_1_2[0]);
        let conjureHomeProjectState = obj.readConjureHomeProjectState(nextResult.id);
        if ("in_progress" === conjureHomeProjectState) {
          flag = true;
        } else if ("unread" === tmp6) {
          let tmp3Result = tmp3(tmp4[1]);
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
    return summarize(closure_0);
  }, items, summaryEqual);
};
