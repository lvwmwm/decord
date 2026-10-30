// Module ID: 12403
// Function ID: 12404
// Name: useConjurePublishProgressLabel
// Dependencies: [32, 19, 10847, 3865, 504, 1114, 12404, 2]
// Exports: default

// Module 12403 (useConjurePublishProgressLabel)
import _modDef3865 from "module_3865" /* 3865 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10847 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj = { preparing: _modDef3865.GQeas1, approval: _modDef3865["TkHHD+"], approved_by_grant: _modDef3865["9+kNt8"], setup: _modDef3865["F+AxgM"], build: _modDef3865.oQeMIy, deploy: _modDef3865.LqZvZ2, discord: _modDef3865.LFcGAT, activating: _modDef3865.ff1Fq1 };
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishProgressLabel.tsx");

export default function useConjurePublishProgressLabel(arg0) {
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
    const intl = tmp(1114).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj2 = { action: intl2.string(obj[stateFromStores.stage]), detail: tmpResult.formatElapsed(first - stateFromStores.stageStartedAt) };
    const prop = stateFromStores(3865)["ndkR+x"];
    intl2 = tmp(1114).intl;
    tmpResult = tmp(12404);
    formatToPlainStringResult = formatToPlainString(prop, obj2);
  }
  return formatToPlainStringResult;
};
