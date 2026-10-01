// Module ID: 13947
// Function ID: 13948
// Name: ServerTabLottie
// Dependencies: [19, 21, 9405, 13948, 2]

// Module 13947 (ServerTabLottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 9405 */;
import AssetRegistry from "AssetRegistry" /* 13948 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["I", "I"];
const items = [{ name: "all", start: 0, duration: 67 }, { name: "easteregg", start: 68, duration: 142 }];
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged = Object.assign(arg0);
  return <LottieIcon dotLottie={AssetRegistry} animation="all" ref={arg1} layers={layers} markers={items} />;
});
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/ServerTabLottie.tsx");

export const ServerTabLottie = forwardRefResult;
