// Module ID: 16095
// Function ID: 16096
// Name: NitroGem18Lottie
// Dependencies: [19, 21, 12114, 16096, 2]
// Exports: NitroGem18Lottie

// Module 16095 (NitroGem18Lottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 12114 */;
import AssetRegistry from "AssetRegistry" /* 16096 */;
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
