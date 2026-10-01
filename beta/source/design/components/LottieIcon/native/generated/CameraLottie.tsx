// Module ID: 9404
// Function ID: 9405
// Name: CameraLottie
// Dependencies: [19, 21, 9405, 9406, 2]

// Module 9404 (CameraLottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 9405 */;
import AssetRegistry from "AssetRegistry" /* 9406 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["IconAnimation_Camera_v03"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged = Object.assign(arg0);
  return <LottieIcon dotLottie={AssetRegistry} ref={arg1} layers={layers} markers={items} />;
});
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/CameraLottie.tsx");

export const CameraLottie = forwardRefResult;
