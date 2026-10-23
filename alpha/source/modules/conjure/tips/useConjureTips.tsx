// Module ID: 12302
// Function ID: 12303
// Name: useConjureTips
// Dependencies: [19, 12303, 12305, 558, 576, 12307, 12310, 12311, 12304, 2]

// Module 12302 (useConjureTips)
import conjureLiveBehindTip from "conjureLiveBehindTip" /* 12303 */;
import conjureTipImpressions from "conjureTipImpressions" /* 12304 */;
import conjureIdeasTip from "conjureIdeasTip" /* 12305 */;
import conjureTipDismissals from "conjureTipDismissals" /* 12310 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let items = [conjureLiveBehindTip.CONJURE_TIP_LIVE_BEHIND_IDLE_MS, conjureIdeasTip.CONJURE_TIP_IDEAS_IDLE_MS];
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureTips(arg0, arg1, arg2, arg3, arg4) {
  let arr;
  let callout;
  let closure_0;
  let context;
  let hint;
  let tmp6;
  _require = arg1;
  let obj = require("react");
  const cResult = obj.c(17);
  let tmp4 = require("useConjureTipContext")(arg1, arg2, arg3, arg4, items);
  importDefault = tmp4;
  let obj2 = require("conjureTipDismissals");
  const conjureTipDismissalsVersion = obj2.useConjureTipDismissalsVersion();
  const tmp = _require;
  const tmp2 = arr;
  if (cResult[0] !== arg1) {
    let fn = function c(dismissal) {
      const obj = conjureTipDismissals;
      return obj.isConjureTipDismissed(dismissal, closure_0);
    };
    cResult[0] = arg1;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] === tmp4) {
    if (cResult[3] === tmp6) {
      let tmp7;
      if (cResult[4] === arg0) {
        tmp7 = cResult[5];
      }
      ({ callout, hint } = tmp7);
      if (cResult[6] === callout) {
        if (cResult[7] === hint) {
          arr = cResult[8];
        }
        if (cResult[9] === tmp4) {
          if (cResult[10] === arg1) {
            let tmp10;
            if (cResult[11] === arr) {
              tmp10 = cResult[12];
            }
            const effect = react.useEffect(tmp10);
            class E {
              constructor() {
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
              }
            }
            const mapped = arr.map((tip) => {
              let fn;
              let obj2;
              let obj = { options: obj2 };
              const merged = Object.assign(tip);
              obj2 = { context, dismiss: fn };
              fn = undefined;
              if (null != tip.tip.dismissal) {
                fn = () => {
                  const obj = conjureTipDismissals;
                  return obj.dismissConjureTip(tip.tip, tip);
                };
              }
              return obj;
            });
            cResult[13] = tmp4;
            cResult[14] = arg1;
            cResult[15] = arr;
            cResult[16] = mapped;
          }
        }
        class E {
          constructor() {
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
          }
        }
        cResult[9] = tmp4;
        cResult[10] = arg1;
        cResult[11] = arr;
        cResult[12] = E;
        tmp10 = E;
      }
      items = [callout, hint];
      const found = items.filter((item) => null != item);
      cResult[6] = callout;
      cResult[7] = hint;
      cResult[8] = found;
      arr = found;
    }
  }
  const tmpResult = tmp(tmp2[7]);
  const conjureTips = tmpResult.selectConjureTips(arg0, tmp4, tmp6);
  cResult[2] = tmp4;
  cResult[3] = tmp6;
  cResult[4] = arg0;
  cResult[5] = conjureTips;
  tmp7 = conjureTips;
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
  const conjureTips = obj2.selectConjureTips(arg0, tmp, (dismissal) => {
    const obj = conjureTipDismissals;
    return obj.isConjureTipDismissed(dismissal, closure_0);
  });
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
    let obj2;
    let obj = { options: obj2 };
    const merged = Object.assign(tip);
    obj2 = { context, dismiss: fn };
    fn = undefined;
    if (null != tip.tip.dismissal) {
      fn = () => {
        const obj = conjureTipDismissals;
        return obj.dismissConjureTip(tip.tip, tip);
      };
    }
    return obj;
  });
});
let result = size.fileFinishedImporting("modules/conjure/tips/useConjureTips.tsx");

export default tmp2;
