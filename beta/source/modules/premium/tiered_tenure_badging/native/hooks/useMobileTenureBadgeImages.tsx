// Module ID: 11413
// Function ID: 11414
// Name: useMobileTenureBadgeImages
// Dependencies: [1378, 11414, 11415, 11416, 11417, 11418, 11419, 11420, 11421, 11422, 11423, 11424, 11425, 11426, 11427, 11428, 11429, 11430, 11431, 11432, 11433, 11434, 11435, 11436, 11437, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11413 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1378 */;
import _modDef11414 from "module_11414" /* 11414 */;
import _modDef11415 from "module_11415" /* 11415 */;
import _modDef11416 from "module_11416" /* 11416 */;
import _modDef11417 from "module_11417" /* 11417 */;
import _modDef11418 from "module_11418" /* 11418 */;
import _modDef11419 from "module_11419" /* 11419 */;
import _modDef11420 from "module_11420" /* 11420 */;
import _modDef11421 from "module_11421" /* 11421 */;
import _modDef11422 from "module_11422" /* 11422 */;
import _modDef11423 from "module_11423" /* 11423 */;
import _modDef11424 from "module_11424" /* 11424 */;
import _modDef11425 from "module_11425" /* 11425 */;
import _modDef11426 from "module_11426" /* 11426 */;
import _modDef11427 from "module_11427" /* 11427 */;
import _modDef11428 from "module_11428" /* 11428 */;
import _modDef11429 from "module_11429" /* 11429 */;
import _modDef11430 from "module_11430" /* 11430 */;
import _modDef11431 from "module_11431" /* 11431 */;
import _modDef11432 from "module_11432" /* 11432 */;
import _modDef11433 from "module_11433" /* 11433 */;
import _modDef11434 from "module_11434" /* 11434 */;
import _modDef11435 from "module_11435" /* 11435 */;
import _modDef11436 from "module_11436" /* 11436 */;
import _modDef11437 from "module_11437" /* 11437 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11414, medium: _modDef11415, large: _modDef11416 };
const obj2 = { small: _modDef11414, medium: _modDef11415, large: _modDef11416 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11417, medium: _modDef11418, large: _modDef11419 };
const obj3 = { small: _modDef11417, medium: _modDef11418, large: _modDef11419 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11420, medium: _modDef11421, large: _modDef11422 };
const obj4 = { small: _modDef11420, medium: _modDef11421, large: _modDef11422 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11423, medium: _modDef11424, large: _modDef11425 };
const obj5 = { small: _modDef11423, medium: _modDef11424, large: _modDef11425 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11426, medium: _modDef11427, large: _modDef11428 };
const obj6 = { small: _modDef11426, medium: _modDef11427, large: _modDef11428 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11429, medium: _modDef11430, large: _modDef11431 };
const obj7 = { small: _modDef11429, medium: _modDef11430, large: _modDef11431 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11432, medium: _modDef11433, large: _modDef11434 };
const obj8 = { small: _modDef11432, medium: _modDef11433, large: _modDef11434 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11435, medium: _modDef11436, large: _modDef11437 };
const result = size.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx");

export const useMobileTenureBadgeImages = function useMobileTenureBadgeImages(id) {
  let tmp = null;
  if (null != id) {
    tmp = obj[id];
  }
  return tmp;
};
export const getMobileTenureBadgeImages = function getMobileTenureBadgeImages(arg0) {
  return obj[arg0];
};
