// Module ID: 15250
// Function ID: 15251
// Name: MicrophoneLottie
// Dependencies: [19, 21, 9438, 15251, 2]
// Exports: MicrophoneLottie

// Module 15250 (MicrophoneLottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 9438 */;
import AssetRegistry from "AssetRegistry" /* 15251 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["I"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/MicrophoneLottie.tsx");

export function MicrophoneLottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} ref={ref} layers={layers} markers={items} />;
}
