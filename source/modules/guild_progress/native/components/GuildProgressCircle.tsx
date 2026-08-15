// Module ID: 11759
// Function ID: 11760
// Name: GuildProgressCircle
// Dependencies: [19, 17, 21, 4661, 712, 11760, 11643, 2]
// Exports: default

// Module 11759 (GuildProgressCircle)
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { wrapper: { position: "relative" }, circle: { position: "absolute" }, progressCircle: null };
createCacheKey = { color: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[2] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_progress/native/components/GuildProgressCircle.tsx");

export default function GuildProgressCircle(size) {
  let percent;
  let style;
  let num = size.size;
  ({ percent, style } = size);
  if (num === undefined) {
    num = 32;
  }
  const tmp = createCacheKey();
  let obj = { width: num, height: num, borderRadius: num / 2 };
  obj = { style: items, children: null };
  items = [tmp.wrapper, style, obj];
  obj = { style: items1, size: num, strokeWidth: 4, percent: 100, color: null };
  items1 = [tmp.circle, obj];
  obj[4] = require(11643) /* useIOSCompletionStates */.PROGRESS_BACKGROUND_COLOR;
  const items2 = [callback(importDefault(11760), obj), ];
  const items3 = [tmp.circle, obj];
  items2[1] = callback(importDefault(11760), { style: items3, size: num, strokeWidth: 4, color: tmp.progressCircle.color, percent });
  obj[1] = items2;
  return callback2(View, obj);
};
