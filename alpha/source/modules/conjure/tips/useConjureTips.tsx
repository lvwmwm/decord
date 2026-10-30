// Module ID: 12573
// Function ID: 12574
// Name: useConjureTips
// Dependencies: [19, 12574, 12576, 12581, 12582, 12575, 2]
// Exports: default

// Module 12573 (useConjureTips)
import conjureLiveBehindTip from "conjureLiveBehindTip" /* 12574 */;
import conjureTipImpressions from "conjureTipImpressions" /* 12575 */;
import conjureTipDismissals from "conjureTipDismissals" /* 12581 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let items = [conjureLiveBehindTip.CONJURE_TIP_LIVE_BEHIND_IDLE_MS];
let result = size.fileFinishedImporting("modules/conjure/tips/useConjureTips.tsx");

export default function useConjureTips(arg0, arg1, arg2, arg3, arg4) {
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
};
