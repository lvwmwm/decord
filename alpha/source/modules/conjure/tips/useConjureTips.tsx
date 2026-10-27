// Module ID: 12322
// Function ID: 12323
// Name: useConjureTips
// Dependencies: [19, 12323, 558, 576, 12325, 12328, 12329, 12324, 2]

// Module 12322 (useConjureTips)
import conjureLiveBehindTip from "conjureLiveBehindTip" /* 12323 */;
import conjureTipImpressions from "conjureTipImpressions" /* 12324 */;
import conjureTipDismissals from "conjureTipDismissals" /* 12328 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let items = [conjureLiveBehindTip.CONJURE_TIP_LIVE_BEHIND_IDLE_MS];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTips(arg0, arg1, arg2, arg3, arg4) {
  let arr;
  let callout;
  let closure_0;
  let context;
  let hint;
  _require = arg1;
  let obj = require("react");
  const cResult = obj.c(14);
  let tmp4 = require("useConjureTipContext")(arg1, arg2, arg3, arg4, items);
  importDefault = tmp4;
  let obj2 = require("conjureTipDismissals");
  const conjureTipDismissalsVersion = obj2.useConjureTipDismissalsVersion();
  const tmp = _require;
  const tmp2 = arr;
  if (cResult[0] === tmp4) {
    let tmp6;
    if (cResult[1] === arg0) {
      tmp6 = cResult[2];
    }
    ({ callout, hint } = tmp6);
    if (cResult[3] === callout) {
      if (cResult[4] === hint) {
        arr = cResult[5];
      }
      if (cResult[6] === tmp4) {
        if (cResult[7] === arg1) {
          let tmp9;
          if (cResult[8] === arr) {
            tmp9 = cResult[9];
          }
          const effect = react.useEffect(tmp9);
          if (cResult[10] === tmp4) {
            if (cResult[11] === arg1) {
              let tmp12;
              if (cResult[12] === arr) {
                tmp12 = cResult[13];
              }
              return tmp12;
            }
          }
          const mapped = arr.map((tip) => {
            let fn;
            let ideasIntroAnchorId;
            let obj2;
            let obj = { options: obj2 };
            const merged = Object.assign(tip);
            obj2 = { context, dismiss: fn };
            fn = undefined;
            if (null != tip.tip.dismissal) {
              fn = () => {
                const obj = conjureTipDismissals;
                return obj.dismissConjureTip(tip.tip, tip, ideasIntroAnchorId.ideasIntroAnchorId);
              };
            }
            return obj;
          });
          cResult[10] = tmp4;
          cResult[11] = arg1;
          cResult[12] = arr;
          cResult[13] = mapped;
          tmp12 = mapped;
        }
      }
      let fn = function _() {
        const timestamp = Date.now();
        const iter = arr[Symbol.iterator]();
        while (iter !== undefined) {
          let tip = iter.next().tip;
          let tmp3 = tip;
          if (0 !== context.messagesSinceShown(tip.id)) {
            let obj = conjureTipImpressions;
            let result = obj.recordConjureTipImpression(closure_0, tmp3.id, timestamp);
          }
          continue;
        }
      };
      cResult[6] = tmp4;
      cResult[7] = arg1;
      cResult[8] = arr;
      cResult[9] = fn;
      tmp9 = fn;
    }
    items = [callout, hint];
    const found = items.filter((item) => null != item);
    cResult[3] = callout;
    cResult[4] = hint;
    cResult[5] = found;
    arr = found;
  }
  const tmpResult = tmp(tmp2[6]);
  const conjureTips = tmpResult.selectConjureTips(arg0, tmp4, tmp4.isDismissed);
  cResult[0] = tmp4;
  cResult[1] = arg0;
  cResult[2] = conjureTips;
  tmp6 = conjureTips;
}) : (function useConjureTips(arg0, arg1, arg2, arg3, arg4) {
  let closure_0;
  let context;
  let found;
  _require = arg1;
  const tmp = require("useConjureTipContext")(arg1, arg2, arg3, arg4, items);
  importDefault = tmp;
  let obj = require("conjureTipDismissals");
  const conjureTipDismissalsVersion = obj.useConjureTipDismissalsVersion();
  let obj2 = require("conjureTipSelection");
  const conjureTips = obj2.selectConjureTips(arg0, tmp, tmp.isDismissed);
  items = [, ];
  ({ callout: arr[0], hint: arr[1] } = conjureTips);
  found = items.filter((item) => null != item);
  const effect = react.useEffect(() => {
    const timestamp = Date.now();
    const iter = found[Symbol.iterator]();
    while (iter !== undefined) {
      let tip = iter.next().tip;
      let tmp3 = tip;
      if (0 !== context.messagesSinceShown(tip.id)) {
        let obj = conjureTipImpressions;
        let result = obj.recordConjureTipImpression(closure_0, tmp3.id, timestamp);
      }
      continue;
    }
  });
  return found.map((tip) => {
    let fn;
    let ideasIntroAnchorId;
    let obj2;
    let obj = { options: obj2 };
    const merged = Object.assign(tip);
    obj2 = { context, dismiss: fn };
    fn = undefined;
    if (null != tip.tip.dismissal) {
      fn = () => {
        const obj = conjureTipDismissals;
        return obj.dismissConjureTip(tip.tip, tip, ideasIntroAnchorId.ideasIntroAnchorId);
      };
    }
    return obj;
  });
});
let result = size.fileFinishedImporting("modules/conjure/tips/useConjureTips.tsx");

export default tmp2;
