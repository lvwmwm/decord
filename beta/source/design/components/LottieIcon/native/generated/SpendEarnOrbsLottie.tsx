// Module ID: 10559
// Function ID: 10560
// Name: SpendEarnOrbsLottie
// Dependencies: [19, 21, 9405, 10560, 2]

// Module 10559 (SpendEarnOrbsLottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 9405 */;
import AssetRegistry from "AssetRegistry" /* 10560 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["Orbs-Spend_DarkTheme", "Orbs-Earn_DarkTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged = Object.assign(arg0);
  return <LottieIcon dotLottie={AssetRegistry} ref={arg1} layers={layers} markers={items} />;
});
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLottie.tsx");

export const SpendEarnOrbsLottie = forwardRefResult;
