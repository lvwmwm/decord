// Module ID: 12797
// Function ID: 12798
// Name: useConjureMentionCandidates
// Dependencies: [19, 502, 6844, 504, 12798, 2]
// Exports: default

// Module 12797 (useConjureMentionCandidates)
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/chat/useConjureMentionCandidates.tsx");

export default function useConjureMentionCandidates(arg0) {
  let closure_0;
  let creator;
  let stateFromStores1;
  _require = arg0;
  let items = [ConjureProjectStore];
  let items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  const obj2 = require("useConjureProjectCreator");
  const conjureProjectPeople = obj2.useConjureProjectPeople(stateFromStores);
  creator = conjureProjectPeople.creator;
  const collaborators = conjureProjectPeople.collaborators;
  let items2 = [stateFromStores1];
  const obj3 = require("get initialized");
  stateFromStores1 = obj3.useStateFromStores(items2, () => stateFromStores1.getId());
  const items3 = [creator, collaborators, stateFromStores1];
  return collaborators.useMemo(() => {
    if (null != creator) {
      const items = [tmp];
      let items1 = items;
    } else {
      items1 = [];
    }
    const items2 = [...collaborators];
    return items2.filter((id) => id.id !== stateFromStores1 && !id.bot);
  }, items3);
};
