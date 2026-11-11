// Module ID: 16346
// Function ID: 16347
// Name: NitroGem12Lottie
// Dependencies: [19, 21, 9982, 16347, 2]
// Exports: NitroGem12Lottie

// Module 16346 (NitroGem12Lottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 9982 */;
import AssetRegistry from "AssetRegistry" /* 16347 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem12Lottie.tsx");

export function NitroGem12Lottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} animation="all" ref={ref} layers={layers} markers={items} />;
}
