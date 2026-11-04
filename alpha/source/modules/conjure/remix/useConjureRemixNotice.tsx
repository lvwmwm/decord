// Module ID: 12796
// Function ID: 12797
// Name: useConjureRemixNotice
// Dependencies: [19, 11046, 504, 11144, 1113, 3995, 2]
// Exports: default, useConjureRemixStartedAt

// Module 12796 (useConjureRemixNotice)
import _modDef3995 from "module_3995" /* 3995 */;
import conjureRemixConnection from "conjureRemixConnection" /* 11144 */;
import react from "react" /* 19 */;
import ConjureRemixStore from "ConjureRemixStore" /* 11046 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/remix/useConjureRemixNotice.tsx");

export default function useConjureRemixNotice(arg0) {
  let closure_0;
  let intl;
  let intl2;
  let obj3;
  let obj4;
  _require = arg0;
  let obj = require("get initialized");
  const items = [ConjureRemixStore];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureRemixStore.getFailure(closure_0));
  [][0] = arg0;
  let tmp5 = null;
  if (null != stateFromStores) {
    const obj2 = { message: intl.format(_modDef3995.Up6Ssw, obj3), retry: obj4 };
    intl = tmp(1113).intl;
    obj3 = { reason: stateFromStores };
    obj4 = { text: intl2.string(_modDef3995["ywA+ET"]), onClick: tmp4 };
    intl2 = tmp(1113).intl;
    tmp5 = obj2;
  }
  return tmp5;
};
export function useConjureRemixStartedAt(projectId) {
  _require = projectId;
  const items = [ConjureRemixStore];
  const items1 = [projectId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => ConjureRemixStore.getSetupStartedAt(projectId), items1);
}
