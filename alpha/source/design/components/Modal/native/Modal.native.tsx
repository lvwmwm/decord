// Module ID: 11670
// Function ID: 11671
// Name: Modal
// Dependencies: [19, 21, 1627, 7306, 5722, 2]
// Exports: Modal

// Module 11670 (Modal)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import NavigatorConstants from "NavigatorConstants" /* 5722 */;
import Navigator2 from "Navigator" /* 7306 */;
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
