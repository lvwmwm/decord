// Module ID: 7816
// Function ID: 7817
// Name: MediaModalOverlayHeaderWrapper
// Dependencies: [19, 17, 21, 4836, 5994, 1613, 2]
// Exports: MediaModalOverlayHeaderWrapper

// Module 7816 (MediaModalOverlayHeaderWrapper)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((paddingTop, arg1, arg2) => {
  const obj = { bar: { flexDirection: "row", alignItems: "center", height: NavigatorConstants.NAV_BAR_HEIGHT + paddingTop, paddingTop, paddingLeft: arg1 + 6, paddingRight: arg2 + 6 } };
  ({ flexDirection: "row", alignItems: "center", height: NavigatorConstants.NAV_BAR_HEIGHT + paddingTop, paddingTop, paddingLeft: arg1 + 6, paddingRight: arg2 + 6 });
  return obj;
});
const result = size.fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayHeaderWrapper.tsx");

export const MediaModalOverlayHeaderWrapper = function MediaModalOverlayHeaderWrapper(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const rect = useSafeAreaInsetsDefault();
  const items = [closure_5(rect.top, rect.left, rect.right).bar, style];
  return <View style={items} pointerEvents="box-none">{children}</View>;
};
