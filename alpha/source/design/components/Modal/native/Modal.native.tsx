// Module ID: 11570
// Function ID: 11571
// Name: Modal
// Dependencies: [19, 21, 1628, 7160, 7326, 7324, 2]
// Exports: Modal

// Module 11570 (Modal)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import NavigatorHeader from "NavigatorHeader" /* 7160 */;
import Navigator2 from "Navigator" /* 7324 */;
import react2 from "react" /* 7326 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/Modal/native/Modal.native.tsx");

export function Modal(arg0) {
  const tmp = useSafeAreaInsetsDefault();
  const obj = NavigatorHeader;
  const navigatorHeaderSize = obj.useNavigatorHeaderSize();
  const Provider = react2.NavigatorBackgroundContext.Provider;
  const Navigator = Navigator2.Navigator;
  const merged = Object.assign(arg0);
  return <Provider value="modal">{null}</Provider>;
}
