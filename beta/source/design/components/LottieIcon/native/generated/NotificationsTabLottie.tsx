// Module ID: 13951
// Function ID: 13952
// Name: NotificationsTabLottie
// Dependencies: [19, 21, 9405, 13952, 2]

// Module 13951 (NotificationsTabLottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 9405 */;
import AssetRegistry from "AssetRegistry" /* 13952 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["IconAnimation_Notifications_3D_LottieFix02"];
const items = [{ name: "all", start: 0, duration: 67 }];
const forwardRefResult = react.forwardRef((arg0, ref) => {
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged = Object.assign(arg0);
  return <LottieIcon dotLottie={AssetRegistry} animation="all" ref={arg1} layers={layers} markers={items} />;
});
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx");

export const NotificationsTabLottie = forwardRefResult;
