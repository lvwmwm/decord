// Module ID: 8936
// Function ID: 8937
// Name: MediaModalOverlayHeaderWrapper
// Dependencies: [19, 17, 21, 4303, 5267, 1628, 2]
// Exports: MediaModalOverlayHeaderWrapper

// Module 8936 (MediaModalOverlayHeaderWrapper)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_5 = createCacheKey.createStyles((paddingTop) => {
  let obj = { bar: null };
  obj = { flexDirection: "row", alignItems: "center", height: require(5267) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT + paddingTop, paddingTop, paddingLeft: arg1 + 6, paddingRight: arg2 + 6 };
  obj[0] = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayHeaderWrapper.tsx");

export const MediaModalOverlayHeaderWrapper = function MediaModalOverlayHeaderWrapper(arg0) {
  let children;
  let style;
  ({ children, style } = arg0);
  const rect = importDefault(1628)();
  const obj = { style: null, pointerEvents: "box-none", children: null };
  const items = [callback(rect.top, rect.left, rect.right).bar, style];
  obj[0] = items;
  obj[2] = children;
  return <View style={null} pointerEvents="box-none">{null}</View>;
};
