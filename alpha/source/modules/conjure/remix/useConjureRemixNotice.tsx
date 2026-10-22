// Module ID: 12258
// Function ID: 12259
// Name: useConjureRemixNotice
// Dependencies: [19, 10692, 558, 576, 504, 10784, 1128, 3830, 2]

// Module 12258 (useConjureRemixNotice)
import _modDef3830 from "module_3830" /* 3830 */;
import conjureRemixConnection from "conjureRemixConnection" /* 10784 */;
import react from "react" /* 19 */;
import ConjureRemixStore from "ConjureRemixStore" /* 10692 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureRemixNotice(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp8;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(13);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureRemixStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return ConjureRemixStore.getFailure(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] !== arg0) {
    const fn2 = function l() {
      const obj = conjureRemixConnection;
      return obj.sendRetryRemix(closure_0);
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
  }
  let tmp9 = null;
  if (null != stateFromStores) {
    let tmp10;
    let tmp13;
    let tmp16;
    if (cResult[5] !== stateFromStores) {
      const intl = tmp(1128).intl;
      const obj2 = { reason: stateFromStores };
      const formatResult = intl.format(_modDef3830.Up6Ssw, obj2);
      cResult[5] = stateFromStores;
      cResult[6] = formatResult;
      tmp10 = formatResult;
    } else {
      tmp10 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1128).intl;
      const stringResult = intl2.string(_modDef3830["ywA+ET"]);
      cResult[7] = stringResult;
      tmp13 = stringResult;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] !== tmp8) {
      const obj3 = { text: tmp13, onClick: tmp8 };
      cResult[8] = tmp8;
      cResult[9] = obj3;
      tmp16 = obj3;
    } else {
      tmp16 = cResult[9];
    }
    if (cResult[10] === tmp10) {
      let tmp17;
      if (cResult[11] === tmp16) {
        tmp17 = cResult[12];
      }
      tmp9 = tmp17;
    }
    const obj4 = { message: tmp10, retry: tmp16 };
    cResult[10] = tmp10;
    cResult[11] = tmp16;
    cResult[12] = obj4;
    tmp17 = obj4;
  }
  return tmp9;
}) : (function useConjureRemixNotice(arg0) {
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
    const obj2 = { message: intl.format(_modDef3830.Up6Ssw, obj3), retry: obj4 };
    intl = tmp(1128).intl;
    obj3 = { reason: stateFromStores };
    obj4 = { text: intl2.string(_modDef3830["ywA+ET"]), onClick: tmp4 };
    intl2 = tmp(1128).intl;
    tmp5 = obj2;
  }
  return tmp5;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureRemixStartedAt(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureRemixStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      return ConjureRemixStore.getSetupStartedAt(closure_0);
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
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : (function useConjureRemixStartedAt(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ConjureRemixStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => ConjureRemixStore.getSetupStartedAt(closure_0), items1);
});
const result = size.fileFinishedImporting("modules/conjure/remix/useConjureRemixNotice.tsx");

export default tmp2;
export const useConjureRemixStartedAt = tmp3;
