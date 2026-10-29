// Module ID: 11860
// Function ID: 11861
// Name: useConjurePublishProgressLabel
// Dependencies: [32, 19, 10824, 3864, 558, 576, 504, 1125, 11861, 2]

// Module 11860 (useConjurePublishProgressLabel)
import _modDef3864 from "module_3864" /* 3864 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10824 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, num, tmp3;

let obj = { preparing: _modDef3864.GQeas1, approval: _modDef3864["TkHHD+"], setup: _modDef3864["F+AxgM"], build: _modDef3864.oQeMIy, deploy: _modDef3864.LqZvZ2, discord: _modDef3864.LFcGAT, activating: _modDef3864.ff1Fq1 };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePublishProgressLabel(arg0) {
  let closure_0;
  let first;
  let intl2;
  let tmp10;
  let tmp11;
  let tmp12;
  let tmp6;
  let tmp8;
  let tmpResult2;
  _require = arg0;
  const tmp = _require;
  obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjurePublishStatusStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let publishProgress = null;
      if (null != closure_0) {
        publishProgress = ConjurePublishStatusStore.getPublishProgress(tmp);
      }
      return publishProgress;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      return Date.now();
    };
    cResult[3] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  [tmp10, dependencyMap] = react.useState(tmp8);
  _slicedToArray(react.useState(tmp8), 2);
  const obj3 = react;
  if (cResult[4] !== stateFromStores) {
    class S {
      constructor() {
        if (null != closure_1) {
          tmp = closure_2;
          tmp2 = globalThis;
          _Date = Date;
          tmp3 = closure_2(Date.now());
          _setInterval = setInterval;
          num = 1000;
          closure_0 = setInterval(() => closure_1_2(Date.now()), 1000);
          return () => clearInterval(closure_0);
        } else {
          return;
        }
      }
    }
    const items1 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = S;
    cResult[6] = items1;
    tmp12 = items1;
    tmp11 = S;
  } else {
    class S {
      constructor() {
        if (null != closure_1) {
          tmp = closure_2;
          tmp2 = globalThis;
          _Date = Date;
          tmp3 = closure_2(Date.now());
          _setInterval = setInterval;
          num = 1000;
          closure_0 = setInterval(() => closure_1_2(Date.now()), 1000);
          return () => clearInterval(closure_0);
        } else {
          return;
        }
      }
    }
    tmp12 = cResult[6];
  }
  const effect = obj3.useEffect(tmp11, tmp12);
  if (null != stateFromStores) {
    class S {
      constructor() {
        if (null != closure_1) {
          tmp = closure_2;
          tmp2 = globalThis;
          _Date = Date;
          tmp3 = closure_2(Date.now());
          _setInterval = setInterval;
          num = 1000;
          closure_0 = setInterval(() => closure_1_2(Date.now()), 1000);
          return () => clearInterval(closure_0);
        } else {
          return;
        }
      }
    }
    const intl = tmp(1125).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj2 = { action: intl2.string(obj[stateFromStores.stage]), detail: tmpResult2.formatElapsed(tmp10 - stateFromStores.stageStartedAt) };
    const prop = stateFromStores(3864)["ndkR+x"];
    intl2 = tmp(1125).intl;
    tmpResult2 = tmp(11861);
    cResult[7] = tmp10;
    cResult[8] = stateFromStores.stage;
    cResult[9] = stateFromStores.stageStartedAt;
    cResult[10] = formatToPlainString(prop, obj2);
    const formatToPlainStringResult = formatToPlainString(prop, obj2);
  }
  return null;
}) : (function useConjurePublishProgressLabel(arg0) {
  let closure_0;
  let closure_2;
  let first;
  let intl2;
  let tmpResult;
  _require = arg0;
  const tmp = _require;
  obj = require("get initialized");
  const items = [ConjurePublishStatusStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let publishProgress = null;
    if (null != closure_0) {
      publishProgress = ConjurePublishStatusStore.getPublishProgress(tmp);
    }
    return publishProgress;
  });
  [first, dependencyMap] = react.useState(() => Date.now());
  const items1 = [stateFromStores];
  const effect = react.useEffect(() => {
    if (null != stateFromStores) {
      const _Date = Date;
      closure_2(Date.now());
      const _setInterval = setInterval;
      const interval = setInterval(() => closure_1_2(Date.now()), 1000);
      return () => clearInterval(closure_0);
    }
  }, items1);
  let formatToPlainStringResult = null;
  if (null != stateFromStores) {
    const intl = tmp(1125).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj2 = { action: intl2.string(obj[stateFromStores.stage]), detail: tmpResult.formatElapsed(first - stateFromStores.stageStartedAt) };
    const prop = stateFromStores(3864)["ndkR+x"];
    intl2 = tmp(1125).intl;
    tmpResult = tmp(11861);
    formatToPlainStringResult = formatToPlainString(prop, obj2);
  }
  return formatToPlainStringResult;
});
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishProgressLabel.tsx");

export default tmp2;
