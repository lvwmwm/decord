// Module ID: 12305
// Function ID: 12306
// Name: useConjurePublishProgressLabel
// Dependencies: [32, 19, 11051, 3995, 504, 1113, 12306, 2]
// Exports: default

// Module 12305 (useConjurePublishProgressLabel)
import _modDef3995 from "module_3995" /* 3995 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 11051 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj = { preparing: _modDef3995.GQeas1, approval: _modDef3995["TkHHD+"], approved_by_grant: _modDef3995["9+kNt8"], setup: _modDef3995["F+AxgM"], build: _modDef3995.oQeMIy, deploy: _modDef3995.LqZvZ2, discord: _modDef3995.LFcGAT, activating: _modDef3995.ff1Fq1 };
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
    const intl = tmp(1113).intl;
    const formatToPlainString = intl.formatToPlainString;
    const obj2 = { action: intl2.string(obj[stateFromStores.stage]), detail: tmpResult.formatElapsed(first - stateFromStores.stageStartedAt) };
    const prop = stateFromStores(3995)["ndkR+x"];
    intl2 = tmp(1113).intl;
    tmpResult = tmp(12306);
    formatToPlainStringResult = formatToPlainString(prop, obj2);
  }
  return formatToPlainStringResult;
};
