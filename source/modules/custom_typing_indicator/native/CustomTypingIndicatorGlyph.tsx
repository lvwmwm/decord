// Module ID: 14711
// Function ID: 14712
// Name: CustomTypingIndicatorGlyph
// Dependencies: [19, 17, 21, 4661, 712, 14707, 1297, 14712, 2]
// Exports: default

// Module 14711 (CustomTypingIndicatorGlyph)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { emojiRow: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorGlyph.tsx");

export default function CustomTypingIndicatorGlyph(arg0) {
  let config;
  let require;
  ({ config, size: require } = arg0);
  let effectiveCustomTypingIndicatorAnimation;
  let obj = require(14707) /* CustomTypingIndicatorAnimation */;
  effectiveCustomTypingIndicatorAnimation = obj.getEffectiveCustomTypingIndicatorAnimation(config);
  const tmp = createCacheKey();
  const tmp2 = require;
  if (obj2.hasCustomTypingIndicatorEmojis(config.emojis)) {
    obj = { style: null, children: null };
    obj[0] = tmp.emojiRow;
    const emojis = config.emojis;
    obj[1] = emojis.map((emoji, index) => outer1_4(callback(outer1_2[7]), { emoji, index, animation: callback, size: closure_0 }, index));
    let tmp4Result = tmp4(View, obj);
  } else {
    tmp4Result = tmp4(tmp2(1297).Ellipsis, {});
  }
  return tmp4Result;
};
