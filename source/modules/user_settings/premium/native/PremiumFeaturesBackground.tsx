// Module ID: 7870
// Function ID: 62696
// Name: PremiumFeaturesBackground
// Dependencies: [31, 6671, 1851, 33, 4130, 689, 666, 4554, 668, 2]
// Exports: default

// Module 7870 (PremiumFeaturesBackground)
import "result";
import { Gradients } from "items";
import { PremiumTypes } from "GuildFeatures";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { display: "flex", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, flexDirection: "column", justifyContent: "space-between", overflow: "hidden" };
_createForOfIteratorHelperLoose.cardContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("GuildFeatures").fileFinishedImporting("modules/user_settings/premium/native/PremiumFeaturesBackground.tsx");

export default function PremiumFeaturesBackground(opacity) {
  let children;
  let style;
  let num = opacity.opacity;
  if (num === undefined) {
    num = 1;
  }
  let obj = { premiumType: 0, opacity: 0, children: 0, style: 0 };
  ({ children, style } = opacity);
  Object.setPrototypeOf(null);
  const merged = Object.assign(opacity, obj);
  if (opacity.premiumType === PremiumTypes.TIER_0) {
    let PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_0 = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  let mapped = PREMIUM_TIER_0;
  if (num < 1) {
    mapped = PREMIUM_TIER_0.map((arg0) => {
      const obj = outer1_1(outer1_2[6])(arg0);
      return outer1_1(outer1_2[6])(arg0).alpha(num).hex();
    });
  }
  obj = { style: items };
  items = [_createForOfIteratorHelperLoose().cardContainer, style];
  obj.colors = mapped;
  const tmp3 = _createForOfIteratorHelperLoose();
  obj.start = num(668).HorizontalGradient.START;
  obj.end = num(668).HorizontalGradient.END;
  const merged1 = Object.assign(merged);
  obj["children"] = children;
  return jsx(importDefault(4554), { style: items });
};
