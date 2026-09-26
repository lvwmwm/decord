// Module ID: 14450
// Function ID: 14451
// Name: NotificationsTabLottie
// Dependencies: [19, 21, 10245, 14451, 2]

// Module 14450 (NotificationsTabLottie)
import LottieIcon from "LottieIcon" /* 10245 */;
import _mod14451 from "module_14451" /* 14451 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Notifications_3D_LottieFix02"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx");

export const NotificationsTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14451, animation: "all", ref, layers, markers: items });
});
