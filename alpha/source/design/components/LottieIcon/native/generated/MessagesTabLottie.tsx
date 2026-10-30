// Module ID: 15781
// Function ID: 15782
// Name: MessagesTabLottie
// Dependencies: [19, 21, 11878, 15782, 2]
// Exports: MessagesTabLottie

// Module 15781 (MessagesTabLottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 11878 */;
import AssetRegistry from "AssetRegistry" /* 15782 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 67 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/MessagesTabLottie.tsx");

export function MessagesTabLottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} animation="all" ref={ref} layers={layers} markers={items} />;
}
