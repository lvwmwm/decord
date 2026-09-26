// Module ID: 11393
// Function ID: 11394
// Name: SpendEarnOrbsLottie
// Dependencies: [19, 21, 10245, 11394, 2]

// Module 11393 (SpendEarnOrbsLottie)
import LottieIcon from "LottieIcon" /* 10245 */;
import _mod11394 from "module_11394" /* 11394 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["Orbs-Spend_DarkTheme", "Orbs-Earn_DarkTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLottie.tsx");

export const SpendEarnOrbsLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod11394, ref, layers, markers: items });
});
