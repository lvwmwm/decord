// Module ID: 12985
// Function ID: 12986
// Name: useConjureHomeOwnProjects
// Dependencies: [10851, 6844, 504, 12986, 10852, 12603, 2]
// Exports: default, useConjureProjectsByActivity, useConjureSharedWithMeProjects

// Module 12985 (useConjureHomeOwnProjects)
import conjureHomeProjectOrder from "conjureHomeProjectOrder" /* 12986 */;
import ConjureChatStore from "ConjureChatStore" /* 10851 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/home/useConjureHomeOwnProjects.tsx");

export default function useConjureHomeOwnProjects() {
  let ownedProjects;
  const f103373 = () => ownedProjects.getOwnedProjects();
  const items = [ConjureProjectStore, ConjureChatStore];
  const obj = f103373(504);
  return obj.useStateFromStoresArray(items, () => {
    let messages;
    let tmp = conjureHomeProjectOrder;
    const sortConjureProjectsByActivity = tmp.sortConjureProjectsByActivity;
    const arr = f103374();
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
export function useConjureProjectsByActivity(arg0, items) {
  let closure_0;
  _require = arg0;
  if (items === undefined) {
    items = [];
  }
  const items1 = [ConjureProjectStore, ConjureChatStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items1, () => {
    let messages;
    let tmp = conjureHomeProjectOrder;
    const sortConjureProjectsByActivity = tmp.sortConjureProjectsByActivity;
    const arr = f103374();
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
export function useConjureSharedWithMeProjects() {
  let sharedWithMeProjects;
  const f103374 = () => sharedWithMeProjects.getSharedWithMeProjects();
  let obj = f103374(504);
  const items = [ConjureProjectStore, ConjureChatStore];
  return obj.useStateFromStoresArray(items, () => {
    let messages;
    let tmp = conjureHomeProjectOrder;
    const sortConjureProjectsByActivity = tmp.sortConjureProjectsByActivity;
    const arr = f103374();
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
}
