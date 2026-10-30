// Module ID: 15793
// Function ID: 15794
// Name: NitroGem2Lottie
// Dependencies: [19, 21, 11878, 15794, 2]
// Exports: NitroGem2Lottie

// Module 15793 (NitroGem2Lottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 11878 */;
import AssetRegistry from "AssetRegistry" /* 15794 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem2Lottie.tsx");

export function NitroGem2Lottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} animation="all" ref={ref} layers={layers} markers={items} />;
}
