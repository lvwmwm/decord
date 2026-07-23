// Module ID: 7999
// Function ID: 63581
// Name: PremiumFeaturesCards
// Dependencies: [31, 27, 1851, 33, 4130, 8000, 2]
// Exports: default

// Module 7999 (PremiumFeaturesCards)
import "result";
import { View } from "get ActivityIndicator";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5 = _createForOfIteratorHelperLoose.createStyles({ container: { width: "100%", gap: 12 } });
_createForOfIteratorHelperLoose = { TIER_0_LEADING: 0, [0]: "TIER_0_LEADING", TIER_2_LEADING: 1, [1]: "TIER_2_LEADING" };
const result = require("GuildFeatures").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesCards.tsx");

export default function PremiumFeaturesCards(onFirstCardLayout) {
  let View;
  let dependencyMap;
  let importDefault;
  let order;
  ({ applicationId: importDefault, onPaymentSuccess: dependencyMap, onPaymentDismiss: View, order } = onFirstCardLayout);
  if (order === undefined) {
    order = _createForOfIteratorHelperLoose.TIER_0_LEADING;
  }
  onFirstCardLayout = onFirstCardLayout.onFirstCardLayout;
  if (_createForOfIteratorHelperLoose.TIER_2_LEADING === order) {
    const items = [, ];
    ({ TIER_2: arr2[0], TIER_0: arr2[1] } = onFirstCardLayout);
    let items1 = items;
  } else {
    const TIER_0_LEADING = _createForOfIteratorHelperLoose.TIER_0_LEADING;
    items1 = [, ];
    ({ TIER_0: arr[0], TIER_2: arr[1] } = onFirstCardLayout);
  }
  let obj = { style: items2, onLayout: onFirstCardLayout.onLayout };
  items2 = [callback().container, onFirstCardLayout.style];
  let mapped;
  if (null != items1) {
    mapped = items1.map((premiumType) => {
      const obj = {};
      let tmp3;
      if (0 === arg1) {
        tmp3 = onFirstCardLayout;
      }
      obj.onLayout = tmp3;
      obj.premiumType = premiumType;
      obj.applicationId = closure_0;
      obj.onPaymentSuccess = closure_1;
      obj.onPaymentDismiss = closure_2;
      return outer1_4(outer1_0(outer1_1[5]), obj, premiumType);
    });
  }
  obj.children = mapped;
  return <View style={items2} onLayout={arg0.onLayout} />;
};
export const PremiumFeatureCardOrder = _createForOfIteratorHelperLoose;
