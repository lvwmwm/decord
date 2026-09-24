// Module ID: 11517
// Function ID: 11518
// Name: SpendEarnOrbsLottie
// Dependencies: [19, 21, 558, 568, 11518, 10243, 2]

// Module 11517 (SpendEarnOrbsLottie)
import c from "c" /* 568 */;
import LottieIcon from "LottieIcon" /* 10243 */;
import _mod11518 from "module_11518" /* 11518 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["Orbs-Spend_DarkTheme", "Orbs-Earn_DarkTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLottie.tsx");

export const SpendEarnOrbsLottie = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(11518);
    cResult[0] = tmpResult;
    let first = tmpResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === ref) {
      let tmp6 = cResult[3];
    }
    return tmp6;
  }
  const merged = Object.assign(arg0);
  const tmp8 = jsx(LottieIcon.LottieIcon, { dotLottie: first, ref, layers, markers: items });
  cResult[1] = arg0;
  cResult[2] = ref;
  cResult[3] = tmp8;
  tmp6 = tmp8;
}) : ((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod11518, ref, layers, markers: items });
}));
