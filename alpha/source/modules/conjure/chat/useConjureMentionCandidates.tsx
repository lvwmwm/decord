// Module ID: 12248
// Function ID: 12249
// Name: useConjureMentionCandidates
// Dependencies: [19, 502, 10897, 558, 576, 504, 12249, 2]

// Module 12248 (useConjureMentionCandidates)
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10897 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureMentionCandidates(arg0) {
  let closure_0;
  let collaborators;
  let creator;
  let first;
  let id;
  let stateFromStores1;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(14);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return ConjureProjectStore.getProject(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmpResult3 = require("useConjureProjectCreator");
  const conjureProjectPeople = tmpResult3.useConjureProjectPeople(stateFromStores);
  ({ creator, collaborators } = conjureProjectPeople);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [AuthenticationStore];
    const fn2 = function f() {
      return id.getId();
    };
    cResult[4] = items2;
    cResult[5] = fn2;
    tmp11 = fn2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const tmpResult4 = require("get initialized");
  stateFromStores1 = tmpResult4.useStateFromStores(tmp10, tmp11);
  if (cResult[6] !== creator) {
    let items4;
    if (null != creator) {
      const items3 = [creator];
      items4 = items3;
    } else {
      items4 = [];
    }
    cResult[6] = creator;
    cResult[7] = items4;
    tmp14 = items4;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] === collaborators) {
    let arr6;
    if (cResult[9] === tmp14) {
      arr6 = cResult[10];
    }
    if (cResult[11] === arr6) {
      let tmp16;
      if (cResult[12] === stateFromStores1) {
        tmp16 = cResult[13];
      }
      return tmp16;
    }
    const found = arr6.filter((id) => id.id !== stateFromStores1 && !id.bot);
    cResult[11] = arr6;
    cResult[12] = stateFromStores1;
    cResult[13] = found;
    tmp16 = found;
  }
  const items5 = [...collaborators];
  cResult[8] = collaborators;
  cResult[9] = tmp14;
  cResult[10] = items5;
  arr6 = items5;
}) : (function useConjureMentionCandidates(arg0) {
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
});
const result = size.fileFinishedImporting("modules/conjure/chat/useConjureMentionCandidates.tsx");

export default tmp2;
