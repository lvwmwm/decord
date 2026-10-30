// Module ID: 14662
// Function ID: 14663
// Name: useConjureHomeOwnProjects
// Dependencies: [10831, 6838, 504, 14663, 10832, 12565, 2]
// Exports: default

// Module 14662 (useConjureHomeOwnProjects)
import conjureHomeProjectOrder from "conjureHomeProjectOrder" /* 14663 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/home/useConjureHomeOwnProjects.tsx");

export default function useConjureHomeOwnProjects(arg0) {
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
  }, items1);
};
