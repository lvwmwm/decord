// Module ID: 14453
// Function ID: 14454
// Name: SpendEarnOrbsLightThemeLottie
// Dependencies: [19, 21, 11878, 14454, 2]
// Exports: SpendEarnOrbsLightThemeLottie

// Module 14453 (SpendEarnOrbsLightThemeLottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 11878 */;
import AssetRegistry from "AssetRegistry" /* 14454 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["Orbs-Spend_LightTheme", "Orbs-Earn_LightTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLightThemeLottie.tsx");

export function SpendEarnOrbsLightThemeLottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} ref={ref} layers={layers} markers={items} />;
}
