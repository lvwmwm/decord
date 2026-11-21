// Module ID: 12320
// Function ID: 12321
// Name: useConjurePublishProgressLabel
// Dependencies: [32, 19, 6980, 4190, 504, 1112, 12321, 2]
// Exports: default

// Module 12320 (useConjurePublishProgressLabel)
import _modDef4190 from "module_4190" /* 4190 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 6980 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj = { preparing: _modDef4190.GQeas1, approval: _modDef4190["TkHHD+"], approved_by_grant: _modDef4190["9+kNt8"], setup: _modDef4190["F+AxgM"], build: _modDef4190.oQeMIy, deploy: _modDef4190.LqZvZ2, discord: _modDef4190.LFcGAT, activating: _modDef4190.ff1Fq1 };
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
    const intl = tmp(1112).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj2 = { action: intl2.string(obj[stateFromStores.stage]), detail: tmpResult.formatElapsed(first - stateFromStores.stageStartedAt) };
    const prop = stateFromStores(4190)["ndkR+x"];
    intl2 = tmp(1112).intl;
    tmpResult = tmp(12321);
    formatToPlainStringResult = formatToPlainString(prop, obj2);
  }
  return formatToPlainStringResult;
};
