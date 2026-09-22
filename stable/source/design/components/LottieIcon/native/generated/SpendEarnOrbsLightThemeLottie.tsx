// Module ID: 11232
// Function ID: 11233
// Name: SpendEarnOrbsLightThemeLottie
// Dependencies: [19, 21, 10078, 11233, 2]

// Module 11232 (SpendEarnOrbsLightThemeLottie)
import LottieIcon from "LottieIcon" /* 10078 */;
import _mod11233 from "module_11233" /* 11233 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["Orbs-Spend_LightTheme", "Orbs-Earn_LightTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLightThemeLottie.tsx");

export const SpendEarnOrbsLightThemeLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod11233, ref, layers, markers: items });
});
