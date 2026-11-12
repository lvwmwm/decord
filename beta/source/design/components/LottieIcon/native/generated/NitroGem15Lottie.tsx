// Module ID: 16188
// Function ID: 16189
// Name: NitroGem15Lottie
// Dependencies: [19, 21, 12115, 16189, 2]
// Exports: NitroGem15Lottie

// Module 16188 (NitroGem15Lottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 12115 */;
import AssetRegistry from "AssetRegistry" /* 16189 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem15Lottie.tsx");

export function NitroGem15Lottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} animation="all" ref={ref} layers={layers} markers={items} />;
}
