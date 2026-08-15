// Module ID: 12419
// Function ID: 12420
// Name: BlockedDomainActionSheet
// Dependencies: [19, 21, 4661, 712, 6950, 4733, 5447, 4734, 1236, 12420, 4745, 4342, 2]
// Exports: default

// Module 12419 (BlockedDomainActionSheet)
import "noop";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: null, title: null, warningMessage: null };
createCacheKey = { padding: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { textAlign: "center" };
createCacheKey[2] = { textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/blocked_domains/components/native/BlockedDomainActionSheet.tsx");

export default function BlockedDomainActionSheet(url) {
  const tmp = createCacheKey();
  let obj = { startExpanded: true, children: null };
  obj = { spacing: 16, justify: "center", align: "center", style: tmp.container, children: null };
  obj = { spacing: 8, justify: "center", align: "center", children: null };
  const items = [callback(require(5447) /* AccountAgeTier10LargeBadge */.TrafficConeSpotIllustration, {}), , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj1[4] = intl.string(require(1236) /* getSystemLocale */.t["2B3wj8"]);
  items[1] = callback(require(4734) /* Text */.Text, obj1);
  const obj2 = { style: tmp.warningMessage, variant: "text-md/medium", children: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj2[2] = intl2.format(require(1236) /* getSystemLocale */.t.jnHyYU, {});
  items[2] = callback(require(4734) /* Text */.Text, obj2);
  obj[3] = items;
  const items1 = [callback2(require(4733) /* Stack */.Stack, obj), callback(require(12420) /* URLCallout */.URLCallout, { url: url.url }), ];
  const obj3 = { grow: true, text: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj3[1] = intl3.string(require(1236) /* getSystemLocale */.t["/g10LC"]);
  obj3[2] = function onPress() {
    return callback(table[11]).hideActionSheet();
  };
  items1[2] = callback(require(4745) /* Button */.Button, obj3);
  obj[4] = items1;
  obj[1] = callback2(require(4733) /* Stack */.Stack, obj);
  return callback(require(6950) /* Background */.BottomSheet, obj);
};
