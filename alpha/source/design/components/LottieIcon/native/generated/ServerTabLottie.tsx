// Module ID: 15783
// Function ID: 15784
// Name: ServerTabLottie
// Dependencies: [19, 21, 11878, 15784, 2]
// Exports: ServerTabLottie

// Module 15783 (ServerTabLottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 11878 */;
import AssetRegistry from "AssetRegistry" /* 15784 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["I", "I"];
const items = [{ name: "all", start: 0, duration: 67 }, { name: "easteregg", start: 68, duration: 142 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/ServerTabLottie.tsx");

export function ServerTabLottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} animation="all" ref={ref} layers={layers} markers={items} />;
}
