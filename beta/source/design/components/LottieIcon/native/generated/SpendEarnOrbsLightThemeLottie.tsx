// Module ID: 10557
// Function ID: 10558
// Name: SpendEarnOrbsLightThemeLottie
// Dependencies: [19, 21, 9405, 10558, 2]

// Module 10557 (SpendEarnOrbsLightThemeLottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 9405 */;
import AssetRegistry from "AssetRegistry" /* 10558 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["Orbs-Spend_LightTheme", "Orbs-Earn_LightTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged = Object.assign(arg0);
  return <LottieIcon dotLottie={AssetRegistry} ref={arg1} layers={layers} markers={items} />;
});
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLightThemeLottie.tsx");

export const SpendEarnOrbsLightThemeLottie = forwardRefResult;
