// Module ID: 18646
// Function ID: 18647
// Name: useConjureRemixNotice
// Dependencies: [19, 7709, 504, 11454, 1112, 4245, 2]
// Exports: default, useConjureRemixStartedAt

// Module 18646 (useConjureRemixNotice)
import _modDef4245 from "module_4245" /* 4245 */;
import conjureRemixConnection from "conjureRemixConnection" /* 11454 */;
import react from "react" /* 19 */;
import ConjureRemixStore from "ConjureRemixStore" /* 7709 */;
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
    const obj2 = { message: intl.format(_modDef4245.Up6Ssw, obj3), retry: obj4 };
    intl = tmp(1112).intl;
    obj3 = { reason: stateFromStores };
    obj4 = { text: intl2.string(_modDef4245["ywA+ET"]), onClick: tmp4 };
    intl2 = tmp(1112).intl;
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
