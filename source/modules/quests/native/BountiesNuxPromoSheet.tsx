// Module ID: 14186
// Function ID: 14187
// Name: BountiesNuxPromoSheet
// Dependencies: [19, 17, 21, 4255, 712, 4223, 14185, 7626, 1236, 6026, 4665, 2]
// Exports: default

// Module 14186 (BountiesNuxPromoSheet)
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
    callback2(4223).hideActionSheet(callback(14185).PROMO_SHEET_KEY);
  }, []);
  let obj = { gradientColor: "purple", title: null, description: null, illustration: null, actions: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t.DDpHZG);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl2.string(require(1236) /* getSystemLocale */.t["LY+igv"]);
  obj = { style: createCacheKey().illustrationContainer, children: jsx(require(6026) /* BountiesPosterSpotIllustration */.BountiesPosterSpotIllustration, { width: 273, height: 205 }) };
  obj[3] = <View style={createCacheKey().illustrationContainer}>{jsx(require(6026) /* BountiesPosterSpotIllustration */.BountiesPosterSpotIllustration, { width: 273, height: 205 })}</View>;
  obj = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl3.string(require(1236) /* getSystemLocale */.t.cpT0Cq);
  obj[4] = callback;
  obj[4] = jsx(require(4665) /* Button */.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(require(7626) /* PromoSheet */.PromoSheet, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
};
