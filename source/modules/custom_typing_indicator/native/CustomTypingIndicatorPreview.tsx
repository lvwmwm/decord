// Module ID: 14713
// Function ID: 14714
// Name: CustomTypingIndicatorPreview
// Dependencies: [19, 21, 4661, 14709, 4733, 14711, 4734, 1236, 2]
// Exports: default

// Module 14713 (CustomTypingIndicatorPreview)
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
let closure_5 = createCacheKey.createStyles({ row: { height: 32 } });
const result = require("createCacheKey").fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorPreview.tsx");

export default function CustomTypingIndicatorPreview(name) {
  const config = name.config;
  let obj = require(14709) /* getRandomCustomTypingIndicatorEmojis */;
  const customTypingIndicatorSuggestionWithNameMessage = obj.getCustomTypingIndicatorSuggestionWithNameMessage(config.typingSuggestion);
  obj = { direction: "horizontal", spacing: 8, align: "center", justify: "center", style: callback3().row, children: null };
  const items = [callback(importDefault(14711), { config, size: 24 }), ];
  obj = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl.format(customTypingIndicatorSuggestionWithNameMessage, { name: name.username });
  items[1] = callback(require(4734) /* Text */.Text, obj);
  obj[5] = items;
  return callback2(require(4733) /* Stack */.Stack, obj);
};
