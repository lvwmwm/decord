// Module ID: 11618
// Function ID: 11619
// Name: Modal
// Dependencies: [19, 21, 1629, 7191, 7357, 7355, 2]
// Exports: Modal

// Module 11618 (Modal)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1629 */;
import NavigatorHeader from "NavigatorHeader" /* 7191 */;
import Navigator2 from "Navigator" /* 7355 */;
import react2 from "react" /* 7357 */;
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
