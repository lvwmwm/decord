// Module ID: 14374
// Function ID: 14375
// Name: BountiesNuxPromoSheet
// Dependencies: [19, 17, 21, 4342, 712, 4310, 14373, 7778, 1236, 6175, 4755, 2]
// Exports: default

// Module 14374 (BountiesNuxPromoSheet)
import noop from "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { illustrationContainer: null };
createCacheKey = { paddingTop: require("Themes").space.PX_12 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/BountiesNuxPromoSheet.tsx");

export default function BountiesNuxPromoSheet() {
  const callback = React.useCallback(() => {
    callback2(4310).hideActionSheet(callback(14373).PROMO_SHEET_KEY);
  }, []);
  let obj = { gradientColor: "purple", title: null, description: null, illustration: null, actions: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.DDpHZG);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl2.string(require(1236) /* getSystemLocale */.t["LY+igv"]);
  obj = { style: createCacheKey().illustrationContainer, children: jsx(require(6175) /* BountiesPosterSpotIllustration */.BountiesPosterSpotIllustration, { width: 273, height: 205 }) };
  obj[3] = <View style={createCacheKey().illustrationContainer}>{jsx(require(6175) /* BountiesPosterSpotIllustration */.BountiesPosterSpotIllustration, { width: 273, height: 205 })}</View>;
  obj = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl3.string(require(1236) /* getSystemLocale */.t.cpT0Cq);
  obj[4] = callback;
  obj[4] = jsx(require(4755) /* Button */.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(require(7778) /* PromoSheet */.PromoSheet, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
};
