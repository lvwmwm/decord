// Module ID: 8846
// Function ID: 8847
// Name: FRACTIONAL_NITRO_COIN_SIZE
// Dependencies: [19, 1076, 21, 5692, 2]
// Exports: FractionalNitroCoinIllustration

// Module 8846 (FRACTIONAL_NITRO_COIN_SIZE)
import noopAll from "noop" /* 19 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 5692 */;
import { EXTERNAL_PRODUCT_SKU_IDS } from "items" /* 1076 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/collectibles/native/FractionalNitroCoinIllustration.tsx");

export const FRACTIONAL_NITRO_COIN_SIZE = { CARD: 80, CHECKOUT: 45, COLLECTED_SHEET: 68 };
export const FractionalNitroCoinIllustration = function FractionalNitroCoinIllustration(resizeMode) {
  resizeMode = resizeMode.resizeMode;
  ({ skuId, width, height } = resizeMode);
  if (resizeMode === undefined) {
    resizeMode = "contain";
  }
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM_1_DAY) {
    let NitroCoinStackSpotIllustration = AccountAgeTier10LargeBadge.NitroCoinSpotIllustration;
  } else {
    NitroCoinStackSpotIllustration = AccountAgeTier10LargeBadge.NitroCoinStackSpotIllustration;
  }
  return <NitroCoinStackSpotIllustration width={width} height={height} resizeMode={resizeMode} />;
};
