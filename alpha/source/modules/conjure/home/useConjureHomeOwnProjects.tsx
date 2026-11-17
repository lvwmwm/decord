// Module ID: 15002
// Function ID: 15003
// Name: useConjureHomeOwnProjects
// Dependencies: [7331, 7025, 504, 15003, 7332, 14639, 2]
// Exports: default, useConjureProjectsByActivity

// Module 15002 (useConjureHomeOwnProjects)
import conjureHomeProjectOrder from "conjureHomeProjectOrder" /* 15003 */;
import ConjureChatStore from "ConjureChatStore" /* 7331 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7025 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/home/useConjureHomeOwnProjects.tsx");

export default function useConjureHomeOwnProjects() {
  let ownedProjects;
  const f110882 = () => ownedProjects.getOwnedProjects();
  let obj = f110882(504);
  const items = [ConjureProjectStore, ConjureChatStore];
  return obj.useStateFromStoresArray(items, () => {
    let messages;
    let tmp = conjureHomeProjectOrder;
    const sortConjureProjectsByActivity = tmp.sortConjureProjectsByActivity;
    const arr = f110882();
    return sortConjureProjectsByActivity(arr.map((id) => {
      let conjureTurnStartedAtResult;
      let obj2;
      const obj = closure_1_0(closure_1_1[4]);
      const findOpenTurnResult = obj.findOpenTurn(messages.getMessages(id.id));
      const obj3 = { project: id, turnStartedAt: conjureTurnStartedAtResult, finishedAt: obj2.getFinishedAt(id.id) };
      conjureTurnStartedAtResult = null;
      obj2 = messages;
      const tmp = closure_1_0;
      const tmp2 = closure_1_1;
      if (null != findOpenTurnResult) {
        const tmpResult = tmp(tmp2[5]);
        conjureTurnStartedAtResult = tmpResult.conjureTurnStartedAt(findOpenTurnResult);
      }
      return obj3;
    }));
  }, []);
};
export function useConjureProjectsByActivity(getListedConjureProjects, items) {
  _require = getListedConjureProjects;
  if (items === undefined) {
    items = [];
  }
  const items1 = [ConjureProjectStore, ConjureChatStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items1, () => {
    let messages;
    let tmp = conjureHomeProjectOrder;
    const sortConjureProjectsByActivity = tmp.sortConjureProjectsByActivity;
    const arr = f110882();
    return sortConjureProjectsByActivity(arr.map((id) => {
      let conjureTurnStartedAtResult;
      let obj2;
      const obj = closure_1_0(closure_1_1[4]);
      const findOpenTurnResult = obj.findOpenTurn(messages.getMessages(id.id));
      const obj3 = { project: id, turnStartedAt: conjureTurnStartedAtResult, finishedAt: obj2.getFinishedAt(id.id) };
      conjureTurnStartedAtResult = null;
      obj2 = messages;
      const tmp = closure_1_0;
      const tmp2 = closure_1_1;
      if (null != findOpenTurnResult) {
        const tmpResult = tmp(tmp2[5]);
        conjureTurnStartedAtResult = tmpResult.conjureTurnStartedAt(findOpenTurnResult);
      }
      return obj3;
    }));
  }, items);
}
