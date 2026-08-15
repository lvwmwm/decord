// Module ID: 15440
// Function ID: 15441
// Name: ServerPreviewPill
// Dependencies: [19, 17, 21, 4661, 712, 4734, 1236, 2]
// Exports: default

// Module 15440 (ServerPreviewPill)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { pill: null, text: null };
createCacheKey = { paddingHorizontal: 10, paddingVertical: require("Themes").space.PX_4, borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.WHITE };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: require("Themes").colors.BLACK, textTransform: "uppercase", letterSpacing: 0.5 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { color: require("Themes").colors.BLACK, textTransform: "uppercase", letterSpacing: 0.5 };
const result = require("jsxProd").fileFinishedImporting("modules/lurker_mode/native/ServerPreviewPill.tsx");

export default function ServerPreviewPill() {
  const tmp = createCacheKey();
  let obj = { style: tmp.pill, accessibilityRole: "text", children: null };
  obj = { variant: "text-xs/bold", style: tmp.text, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t.KNhFgD);
  obj[2] = jsx(require(4734) /* Text */.Text, { variant: "text-xs/bold", style: tmp.text, children: null });
  return <View variant="text-xs/bold" style={tmp.text}>{null}</View>;
};
