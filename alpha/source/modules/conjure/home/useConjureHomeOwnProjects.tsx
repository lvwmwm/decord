// Module ID: 13205
// Function ID: 13206
// Name: useConjureHomeOwnProjects
// Dependencies: [11029, 6979, 504, 13206, 11030, 12821, 2]
// Exports: default, useConjureProjectsByActivity, useConjureSharedWithMeProjects

// Module 13205 (useConjureHomeOwnProjects)
import conjureHomeProjectOrder from "conjureHomeProjectOrder" /* 13206 */;
import ConjureChatStore from "ConjureChatStore" /* 11029 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/home/useConjureHomeOwnProjects.tsx");

export default function useConjureHomeOwnProjects() {
  let ownedProjects;
  const f104311 = () => ownedProjects.getOwnedProjects();
  const items = [ConjureProjectStore, ConjureChatStore];
  const obj = f104311(504);
  return obj.useStateFromStoresArray(items, () => {
    let messages;
    let tmp = conjureHomeProjectOrder;
    const sortConjureProjectsByActivity = tmp.sortConjureProjectsByActivity;
    const arr = f104312();
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
    const arr = f104312();
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
  const f104312 = () => sharedWithMeProjects.getSharedWithMeProjects();
  let obj = f104312(504);
  const items = [ConjureProjectStore, ConjureChatStore];
  return obj.useStateFromStoresArray(items, () => {
    let messages;
    let tmp = conjureHomeProjectOrder;
    const sortConjureProjectsByActivity = tmp.sortConjureProjectsByActivity;
    const arr = f104312();
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
