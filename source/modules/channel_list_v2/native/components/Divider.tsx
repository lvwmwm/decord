// Module ID: 11742
// Function ID: 11743
// Name: Divider
// Dependencies: [19, 17, 21, 4342, 712, 1367, 2]
// Exports: default

// Module 11742 (Divider)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let closure_4 = createCacheKey.createStyles((arg0) => {
  const colors = importDefault(712).colors;
  let obj = { height: 1, backgroundColor: arg0 ? colors.BORDER_SUBTLE : colors.BORDER_MUTED, marginTop: 8, marginBottom: 8 };
  obj = { divider: null };
  const merged = Object.assign(arg0 ? { marginHorizontal: 16 } : {});
  obj[0] = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/channel_list_v2/native/components/Divider.tsx");

export default function Divider() {
  return <View style={callback(importDefault(1367)("Divider")).divider} />;
};
export const DIVIDER_MARGIN_TOP = 8;
export const DIVIDER_MARGIN_BOTTOM = 8;
export const DIVIDER_HEIGHT = 17;
export const DIVIDER_MARGIN_HORIZONTAL = 16;
