// Module ID: 12978
// Function ID: 12979
// Name: CameraLottie
// Dependencies: [19, 21, 10048, 12979, 2]
// Exports: CameraLottie

// Module 12978 (CameraLottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 10048 */;
import AssetRegistry from "AssetRegistry" /* 12979 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["IconAnimation_Camera_v03"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/CameraLottie.tsx");

export function CameraLottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} ref={ref} layers={layers} markers={items} />;
}
