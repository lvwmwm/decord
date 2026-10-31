// Module ID: 15839
// Function ID: 15840
// Name: NitroGem9Lottie
// Dependencies: [19, 21, 11916, 15840, 2]
// Exports: NitroGem9Lottie

// Module 15839 (NitroGem9Lottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 11916 */;
import AssetRegistry from "AssetRegistry" /* 15840 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem9Lottie.tsx");

export function NitroGem9Lottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} animation="all" ref={ref} layers={layers} markers={items} />;
}
