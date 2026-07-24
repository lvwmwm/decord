// Module ID: 8758
// Function ID: 69199
// Name: FRACTIONAL_NITRO_COIN_SIZE
// Dependencies: [31, 655, 33, 5807, 2]
// Exports: FractionalNitroCoinIllustration

// Module 8758 (FRACTIONAL_NITRO_COIN_SIZE)
import "result";
import { EXTERNAL_PRODUCT_SKU_IDS } from "items";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/FractionalNitroCoinIllustration.tsx");

export const FRACTIONAL_NITRO_COIN_SIZE = { CARD: 80, CHECKOUT: 45, COLLECTED_SHEET: 68 };
export const FractionalNitroCoinIllustration = function FractionalNitroCoinIllustration(resizeMode) {
  let height;
  let skuId;
  let width;
  let str = resizeMode.resizeMode;
  ({ skuId, width, height } = resizeMode);
  if (str === undefined) {
    str = "contain";
  }
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM_1_DAY) {
    let NitroCoinStackSpotIllustration = require(5807) /* AccountAgeTier10LargeBadge */.NitroCoinSpotIllustration;
  } else {
    NitroCoinStackSpotIllustration = require(5807) /* AccountAgeTier10LargeBadge */.NitroCoinStackSpotIllustration;
  }
  const obj = { width, height, resizeMode: str };
  return <NitroCoinStackSpotIllustration width={width} height={height} resizeMode={str} />;
};
