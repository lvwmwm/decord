// Module ID: 12428
// Function ID: 12429
// Name: Modal
// Dependencies: [19, 21, 1627, 7427, 7426, 7424, 2]
// Exports: Modal

// Module 12428 (Modal)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import Navigator2 from "Navigator" /* 7424 */;
import react2 from "react" /* 7426 */;
import NavigatorHeader from "NavigatorHeader" /* 7427 */;
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
