// Module ID: 9123
// Function ID: 9124
// Name: FractionalNitroCoinIllustration
// Dependencies: [19, 1080, 21, 558, 568, 5907, 2]

// Module 9123 (FractionalNitroCoinIllustration)
import c from "c" /* 568 */;
import native from "native" /* 5907 */;
import noop from "module_19" /* 19 */;

require = fn;
const EXTERNAL_PRODUCT_SKU_IDS = fn(1080).EXTERNAL_PRODUCT_SKU_IDS;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FractionalNitroCoinIllustration.tsx");

export const FRACTIONAL_NITRO_COIN_SIZE = { CARD: 80, CHECKOUT: 45, COLLECTED_SHEET: 68 };
export const FractionalNitroCoinIllustration = ReactCompilerGating.isReactCompilerEnabled() ? ((skuId) => {
  const cResult = c.c(5);
  ({ width, height, resizeMode } = skuId);
  let str = "contain";
  if (undefined !== resizeMode) {
    str = resizeMode;
  }
  if (skuId.skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM_1_DAY) {
    let NitroCoinStackSpotIllustration = tmp(5907).NitroCoinSpotIllustration;
  } else {
    NitroCoinStackSpotIllustration = tmp(5907).NitroCoinStackSpotIllustration;
  }
  if (cResult[0] === NitroCoinStackSpotIllustration) {
    if (cResult[1] === height) {
      if (cResult[2] === str) {
        if (cResult[3] === width) {
          let tmp4 = cResult[4];
        }
        return tmp4;
      }
    }
  }
  const tmp5 = <NitroCoinStackSpotIllustration width={width} height={height} resizeMode={str} />;
  cResult[0] = NitroCoinStackSpotIllustration;
  cResult[1] = height;
  cResult[2] = str;
  cResult[3] = width;
  cResult[4] = tmp5;
  tmp4 = tmp5;
}) : ((resizeMode) => {
  resizeMode = resizeMode.resizeMode;
  ({ skuId, width, height } = resizeMode);
  if (resizeMode === undefined) {
    resizeMode = "contain";
  }
  if (skuId === EXTERNAL_PRODUCT_SKU_IDS.FRACTIONAL_PREMIUM_1_DAY) {
    let NitroCoinStackSpotIllustration = native.NitroCoinSpotIllustration;
  } else {
    NitroCoinStackSpotIllustration = native.NitroCoinStackSpotIllustration;
  }
  return <NitroCoinStackSpotIllustration width={width} height={height} resizeMode={resizeMode} />;
});
