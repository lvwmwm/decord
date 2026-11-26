// Module ID: 15246
// Function ID: 15247
// Name: YouTabLottie
// Dependencies: [19, 21, 9438, 15247, 2]
// Exports: YouTabLottie

// Module 15246 (YouTabLottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 9438 */;
import AssetRegistry from "AssetRegistry" /* 15247 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 67 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/YouTabLottie.tsx");

export function YouTabLottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} animation="all" ref={ref} layers={layers} markers={items} />;
}
