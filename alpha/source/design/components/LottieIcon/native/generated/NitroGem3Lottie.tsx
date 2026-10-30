// Module ID: 15795
// Function ID: 15796
// Name: NitroGem3Lottie
// Dependencies: [19, 21, 11878, 15796, 2]
// Exports: NitroGem3Lottie

// Module 15795 (NitroGem3Lottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 11878 */;
import AssetRegistry from "AssetRegistry" /* 15796 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem3Lottie.tsx");

export function NitroGem3Lottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} animation="all" ref={ref} layers={layers} markers={items} />;
}
