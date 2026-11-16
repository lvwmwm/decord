// Module ID: 16470
// Function ID: 16471
// Name: NitroGem18Lottie
// Dependencies: [19, 21, 10048, 16471, 2]
// Exports: NitroGem18Lottie

// Module 16470 (NitroGem18Lottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 10048 */;
import AssetRegistry from "AssetRegistry" /* 16471 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem18Lottie.tsx");

export function NitroGem18Lottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} animation="all" ref={ref} layers={layers} markers={items} />;
}
