// Module ID: 9519
// Function ID: 9520
// Name: FractionalNitroCoinIllustration
// Dependencies: [19, 1074, 21, 9520, 9524, 2]
// Exports: FractionalNitroCoinIllustration

// Module 9519 (FractionalNitroCoinIllustration)
import Fragment from "Fragment" /* 21 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1074 */;
import NitroCoinSpotIllustration from "NitroCoinSpotIllustration" /* 9520 */;
import NitroCoinStackSpotIllustration2 from "NitroCoinStackSpotIllustration" /* 9524 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const EXTERNAL_PRODUCT_SKU_IDS = CollectiblesShopConstants.EXTERNAL_PRODUCT_SKU_IDS;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroCoinIllustration.tsx");

export const FRACTIONAL_NITRO_COIN_SIZE = { CARD: 80, CHECKOUT: 45, COLLECTED_SHEET: 68 };
export function FractionalNitroCoinIllustration(resizeMode) {
  let height;
  let skuId;
  let width;
  resizeMode = resizeMode.resizeMode;
  ({ skuId, width, height } = resizeMode);
  if (resizeMode === undefined) {
    resizeMode = "contain";
  }
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM_1_DAY) {
    let NitroCoinStackSpotIllustration = NitroCoinSpotIllustration.NitroCoinSpotIllustration;
  } else {
    NitroCoinStackSpotIllustration = NitroCoinStackSpotIllustration2.NitroCoinStackSpotIllustration;
  }
  return <NitroCoinStackSpotIllustration width={width} height={height} resizeMode={resizeMode} />;
}
