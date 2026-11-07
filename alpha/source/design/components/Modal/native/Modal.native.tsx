// Module ID: 11627
// Function ID: 11628
// Name: Modal
// Dependencies: [19, 21, 1627, 7064, 7233, 7231, 2]
// Exports: Modal

// Module 11627 (Modal)
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import NavigatorHeader from "NavigatorHeader" /* 7064 */;
import Navigator2 from "Navigator" /* 7231 */;
import react2 from "react" /* 7233 */;
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
