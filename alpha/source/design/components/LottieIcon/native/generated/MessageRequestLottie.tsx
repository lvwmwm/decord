// Module ID: 15136
// Function ID: 15137
// Name: MessageRequestLottie
// Dependencies: [19, 21, 9318, 15137, 2]
// Exports: MessageRequestLottie

// Module 15136 (MessageRequestLottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 9318 */;
import AssetRegistry from "AssetRegistry" /* 15137 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 77 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/MessageRequestLottie.tsx");

export function MessageRequestLottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} animation="all" ref={ref} layers={layers} markers={items} />;
}
