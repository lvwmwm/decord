// Module ID: 13149
// Function ID: 13150
// Name: useConjureSafetyRecheck
// Dependencies: [7377, 1113, 4131, 504, 2]
// Exports: default, getConjureSafetyHoldCopy, getConjureSafetyRecheckNotice

// Module 13149 (useConjureSafetyRecheck)
import intl5 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7377 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/conjure/publish/useConjureSafetyRecheck.tsx");

export default function useConjureSafetyRecheck(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ConjurePublishStatusStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => ConjurePublishStatusStore.getSafetyRecheck(closure_0), items1);
};
export function getConjureSafetyHoldCopy(status) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let obj;
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  if ("cleared" === status) {
    const obj2 = { title: intl3.string(_modDef4131.vVnbEq), body: intl4.string(_modDef4131["qY/RLI"]) };
    intl3 = intl5.intl;
    intl4 = intl5.intl;
    obj = obj2;
  } else {
    obj = { title: intl.string(_modDef4131.ebqlWe), body: intl2.string(_modDef4131.UOr0cK) };
    intl = intl5.intl;
    intl2 = intl5.intl;
  }
  return obj;
}
export function getConjureSafetyRecheckNotice(status) {
  let intl;
  let intl3;
  let intl4;
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  if (undefined !== status) {
    if ("cleared" !== status) {
      if ("pending" === status) {
        const obj2 = { message: intl4.string(_modDef4131.HsOGKK), type: "info" };
        intl4 = intl5.intl;
        return obj2;
      } else if ("held" === status) {
        const obj3 = { message: intl3.formatToPlainString(_modDef4131.t8GlRz, obj4), type: "critical" };
        intl3 = intl5.intl;
        return obj3;
      } else if ("limited" === status) {
        let ikIoxj;
        const intl2 = intl5.intl;
        const string = intl2.string;
        if ("daily" === status.limit) {
          ikIoxj = _modDef4131["TtE+rz"];
        } else {
          ikIoxj = _modDef4131.ikIoxj;
        }
        const obj5 = { message: string(ikIoxj), type: "warning" };
        return obj5;
      } else if ("unavailable" === status) {
        const obj = { message: intl.string(_modDef4131.FxilA2), type: "warning" };
        intl = intl5.intl;
        return obj;
      }
    }
  }
  return null;
}
