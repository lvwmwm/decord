// Module ID: 8938
// Function ID: 8939
// Name: MediaModalOverlayHeaderWrapper
// Dependencies: [19, 17, 21, 5014, 5586, 1625, 2]
// Exports: MediaModalOverlayHeaderWrapper

// Module 8938 (MediaModalOverlayHeaderWrapper)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import NavigatorConstants from "NavigatorConstants" /* 5586 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((paddingTop, arg1, arg2) => {
  const obj = { bar: { flexDirection: "row", alignItems: "center", height: NavigatorConstants.NAV_BAR_HEIGHT + paddingTop, paddingTop, paddingLeft: arg1 + 6, paddingRight: arg2 + 6 } };
  ({ flexDirection: "row", alignItems: "center", height: NavigatorConstants.NAV_BAR_HEIGHT + paddingTop, paddingTop, paddingLeft: arg1 + 6, paddingRight: arg2 + 6 });
  return obj;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayHeaderWrapper.tsx");

export function MediaModalOverlayHeaderWrapper(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const rect = useSafeAreaInsetsDefault();
  const items = [closure_5(rect.top, rect.left, rect.right).bar, style];
  return <View style={items} pointerEvents="box-none">{children}</View>;
}
