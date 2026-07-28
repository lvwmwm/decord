// Module ID: 9359
// Function ID: 73012
// Name: PremiumUpsellGradientBackground
// Dependencies: [31, 27, 6207, 33, 4165, 4589, 668, 2]
// Exports: PremiumUpsellGradientBackground

// Module 9359 (PremiumUpsellGradientBackground)
import "result";
import { Gradients } from "items";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { opacity: 0.1 };
const merged = Object.assign(require("get ActivityIndicator").StyleSheet.absoluteFillObject);
_createForOfIteratorHelperLoose.gradient = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("items").fileFinishedImporting("modules/premium/roadblocks/native/views/PremiumUpsellGradientBackground.tsx");

export const PremiumUpsellGradientBackground = function PremiumUpsellGradientBackground(useTier0UpsellContent) {
  const obj = { style: _createForOfIteratorHelperLoose().gradient };
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = jsx;
  obj.start = require(668) /* keys */.HorizontalGradient.START;
  obj.end = require(668) /* keys */.HorizontalGradient.END;
  if (true === useTier0UpsellContent.useTier0UpsellContent) {
    let PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_0;
  } else {
    PREMIUM_TIER_2_TRI_COLOR = Gradients.PREMIUM_TIER_2_TRI_COLOR;
  }
  obj.colors = PREMIUM_TIER_2_TRI_COLOR;
  return tmp2(importDefault(4589), obj);
};
