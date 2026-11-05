// Module ID: 16110
// Function ID: 16111
// Name: NitroGem24Lottie
// Dependencies: [19, 21, 12123, 16111, 2]
// Exports: NitroGem24Lottie

// Module 16110 (NitroGem24Lottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 12123 */;
import AssetRegistry from "AssetRegistry" /* 16111 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem24Lottie.tsx");

export function NitroGem24Lottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} animation="all" ref={ref} layers={layers} markers={items} />;
}
