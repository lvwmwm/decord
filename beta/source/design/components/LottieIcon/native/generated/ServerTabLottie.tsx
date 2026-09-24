// Module ID: 14456
// Function ID: 14457
// Name: ServerTabLottie
// Dependencies: [19, 21, 558, 568, 14457, 10243, 2]

// Module 14456 (ServerTabLottie)
import c from "c" /* 568 */;
import LottieIcon from "LottieIcon" /* 10243 */;
import _mod14457 from "module_14457" /* 14457 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I", "I"];
const items = [{ name: "all", start: 0, duration: 67 }, { name: "easteregg", start: 68, duration: 142 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/ServerTabLottie.tsx");

export const ServerTabLottie = noop.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, ref) => {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmpResult = tmp(14457);
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
  const tmp8 = jsx(LottieIcon.LottieIcon, { dotLottie: first, animation: "all", ref, layers, markers: items });
  cResult[1] = arg0;
  cResult[2] = ref;
  cResult[3] = tmp8;
  tmp6 = tmp8;
}) : ((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14457, animation: "all", ref, layers, markers: items });
}));
