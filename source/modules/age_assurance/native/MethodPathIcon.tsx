// Module ID: 7836
// Function ID: 7837
// Name: MethodPathIcon
// Dependencies: [19, 17, 21, 4303, 712, 4024, 7837, 2]
// Exports: default

// Module 7836 (MethodPathIcon)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { container: null };
createCacheKey = { width: require("Themes").modules.mobile.TABLE_ROW_ICON_SIZE, height: require("Themes").modules.mobile.TABLE_ROW_ICON_SIZE, justifyContent: "center", alignItems: "center", borderRadius: require("Themes").radii.lg };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/age_assurance/native/MethodPathIcon.tsx");

export default function MethodPathIcon(icon) {
  let _require;
  let obj = _require(4024);
  _require = obj.useToken(importDefault(712).colors.INTERACTIVE_TEXT_DEFAULT);
  obj = { style: createCacheKey().container, children: null };
  obj = { width: 24, height: 24, viewBox: "0 0 24 24", children: null };
  const paths = icon.icon.paths;
  const tmp = createCacheKey();
  obj[3] = paths.map((d) => outer1_4(callback(outer1_2[6]).Path, { d: d.d, fill: callback, fillRule: d.fillRule }, d.d));
  obj[1] = jsx(importDefault(7837), { width: 24, height: 24, viewBox: "0 0 24 24", children: null });
  return <View width={24} height={24} viewBox="0 0 24 24">{null}</View>;
};
