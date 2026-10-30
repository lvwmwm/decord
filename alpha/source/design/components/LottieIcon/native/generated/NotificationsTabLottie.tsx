// Module ID: 15787
// Function ID: 15788
// Name: NotificationsTabLottie
// Dependencies: [19, 21, 11878, 15788, 2]
// Exports: NotificationsTabLottie

// Module 15787 (NotificationsTabLottie)
import Fragment from "Fragment" /* 21 */;
import LottieIcon2 from "LottieIcon" /* 11878 */;
import AssetRegistry from "AssetRegistry" /* 15788 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const layers = ["IconAnimation_Notifications_3D_LottieFix02"];
const items = [{ name: "all", start: 0, duration: 67 }];
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx");

export function NotificationsTabLottie(ref) {
  ref = ref.ref;
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const LottieIcon = LottieIcon2.LottieIcon;
  const merged1 = Object.assign(merged);
  return <LottieIcon dotLottie={AssetRegistry} animation="all" ref={ref} layers={layers} markers={items} />;
}
