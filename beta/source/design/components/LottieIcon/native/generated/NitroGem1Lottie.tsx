// Module ID: 16176
// Function ID: 16177
// Name: NitroGem1Lottie
// Dependencies: [19, 21, 12115, 16177, 2]
// Exports: NitroGem1Lottie

// Module 16176 (NitroGem1Lottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 12115 */;
import AssetRegistry from "AssetRegistry" /* 16177 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem1Lottie.tsx");

export function NitroGem1Lottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} animation="all" ref={ref} layers={layers} markers={items} />;
}
