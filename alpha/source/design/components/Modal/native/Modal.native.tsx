// Module ID: 11619
// Function ID: 11620
// Name: Modal
// Dependencies: [19, 21, 1627, 7290, 5709, 2]
// Exports: Modal

// Module 11619 (Modal)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import NavigatorConstants from "NavigatorConstants" /* 5709 */;
import Navigator2 from "Navigator" /* 7290 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export function Modal(arg0) {
  const tmp = useSafeAreaInsetsDefault();
  const Navigator = Navigator2.Navigator;
  const merged = Object.assign(arg0);
  ({ height: NavigatorConstants.NAV_BAR_HEIGHT + tmp.top });
  return <Navigator headerStyle={{ height: NavigatorConstants.NAV_BAR_HEIGHT + tmp.top }} />;
}
