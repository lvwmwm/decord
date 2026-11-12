// Module ID: 13232
// Function ID: 13233
// Name: useConjureHomeOwnProjects
// Dependencies: [11002, 6932, 504, 13233, 11003, 12837, 2]
// Exports: default, useConjureProjectsByActivity

// Module 13232 (useConjureHomeOwnProjects)
import conjureHomeProjectOrder from "conjureHomeProjectOrder" /* 13233 */;
import ConjureChatStore from "ConjureChatStore" /* 11002 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6932 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/home/useConjureHomeOwnProjects.tsx");

export default function useConjureHomeOwnProjects() {
  let ownedProjects;
  const f105211 = () => ownedProjects.getOwnedProjects();
  let obj = f105211(504);
  const items = [ConjureProjectStore, ConjureChatStore];
  return obj.useStateFromStoresArray(items, () => {
    let messages;
    let tmp = conjureHomeProjectOrder;
    const sortConjureProjectsByActivity = tmp.sortConjureProjectsByActivity;
    const arr = f105211();
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
    const arr = f105211();
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
