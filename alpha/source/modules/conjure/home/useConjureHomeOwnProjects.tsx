// Module ID: 14629
// Function ID: 14630
// Name: useConjureHomeOwnProjects
// Dependencies: [10808, 6831, 558, 576, 14630, 10809, 12413, 504, 2]

// Module 14629 (useConjureHomeOwnProjects)
import conjureHomeProjectOrder from "conjureHomeProjectOrder" /* 14630 */;
import ConjureChatStore from "ConjureChatStore" /* 10808 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureHomeOwnProjects(arg0) {
  let closure_0;
  let first;
  let tmp7;
  let tmp8;
  _require = arg0;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [ConjureProjectStore, ConjureChatStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let found;
      let messages;
      let tmp2;
      if (null != closure_0) {
        const items = [];
        const arraySpreadResult = HermesBuiltin.arraySpread(items, ConjureProjectStore.getOwnedProjects(), 0);
        HermesBuiltin.arraySpread(items, ConjureProjectStore.getSharedProjects(tmp2), arraySpreadResult);
        found = items.filter((guild_id) => guild_id.guild_id === closure_1_0 || guild_id.preview_guild_id === tmp);
      } else {
        found = ConjureProjectStore.getOwnedProjects();
      }
      let obj = conjureHomeProjectOrder;
      return obj.sortConjureProjectsByActivity(found.map((id) => {
        let conjureTurnStartedAtResult;
        let obj2;
        const obj = closure_1_0(closure_1_1[5]);
        const findOpenTurnResult = obj.findOpenTurn(messages.getMessages(id.id));
        const obj3 = { project: id, turnStartedAt: conjureTurnStartedAtResult, finishedAt: obj2.getFinishedAt(id.id) };
        conjureTurnStartedAtResult = null;
        obj2 = messages;
        const tmp = closure_1_0;
        const tmp2 = closure_1_1;
        if (null != findOpenTurnResult) {
          const tmpResult = tmp(tmp2[6]);
          conjureTurnStartedAtResult = tmpResult.conjureTurnStartedAt(findOpenTurnResult);
        }
        return obj3;
      }));
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp8 = items1;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  let tmpResult = tmp(504);
  return tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
}) : (function useConjureHomeOwnProjects(arg0) {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  let items = [ConjureProjectStore, ConjureChatStore];
  const items1 = [arg0];
  return obj.useStateFromStoresArray(items, () => {
    let found;
    let messages;
    let tmp2;
    if (null != closure_0) {
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, ConjureProjectStore.getOwnedProjects(), 0);
      HermesBuiltin.arraySpread(items, ConjureProjectStore.getSharedProjects(tmp2), arraySpreadResult);
      found = items.filter((guild_id) => guild_id.guild_id === closure_1_0 || guild_id.preview_guild_id === tmp);
    } else {
      found = ConjureProjectStore.getOwnedProjects();
    }
    let obj = conjureHomeProjectOrder;
    return obj.sortConjureProjectsByActivity(found.map((id) => {
      let conjureTurnStartedAtResult;
      let obj2;
      const obj = closure_1_0(closure_1_1[5]);
      const findOpenTurnResult = obj.findOpenTurn(messages.getMessages(id.id));
      const obj3 = { project: id, turnStartedAt: conjureTurnStartedAtResult, finishedAt: obj2.getFinishedAt(id.id) };
      conjureTurnStartedAtResult = null;
      obj2 = messages;
      const tmp = closure_1_0;
      const tmp2 = closure_1_1;
      if (null != findOpenTurnResult) {
        const tmpResult = tmp(tmp2[6]);
        conjureTurnStartedAtResult = tmpResult.conjureTurnStartedAt(findOpenTurnResult);
      }
      return obj3;
    }));
  }, items1);
});
const result = size.fileFinishedImporting("modules/conjure/home/useConjureHomeOwnProjects.tsx");

export default tmp2;
