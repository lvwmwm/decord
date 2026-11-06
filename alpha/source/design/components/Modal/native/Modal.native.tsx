// Module ID: 11645
// Function ID: 11646
// Name: Modal
// Dependencies: [19, 21, 1627, 7089, 7256, 2]
// Exports: Modal

// Module 11645 (Modal)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import NavigatorHeader from "NavigatorHeader" /* 7089 */;
import Navigator2 from "Navigator" /* 7256 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export function Modal(arg0) {
  const tmp = useSafeAreaInsetsDefault();
  const obj = NavigatorHeader;
  const navigatorHeaderSize = obj.useNavigatorHeaderSize();
  const Navigator = Navigator2.Navigator;
  const merged = Object.assign(arg0);
  return <Navigator headerStyle={{ height: navigatorHeaderSize.height + tmp.top }} />;
}
