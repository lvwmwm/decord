// Module ID: 11449
// Function ID: 11450
// Name: useMobileTenureBadgeImages
// Dependencies: [1378, 11450, 11451, 11452, 11453, 11454, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11449 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1378 */;
import _modDef11450 from "module_11450" /* 11450 */;
import _modDef11451 from "module_11451" /* 11451 */;
import _modDef11452 from "module_11452" /* 11452 */;
import _modDef11453 from "module_11453" /* 11453 */;
import _modDef11454 from "module_11454" /* 11454 */;
import _modDef11455 from "module_11455" /* 11455 */;
import _modDef11456 from "module_11456" /* 11456 */;
import _modDef11457 from "module_11457" /* 11457 */;
import _modDef11458 from "module_11458" /* 11458 */;
import _modDef11459 from "module_11459" /* 11459 */;
import _modDef11460 from "module_11460" /* 11460 */;
import _modDef11461 from "module_11461" /* 11461 */;
import _modDef11462 from "module_11462" /* 11462 */;
import _modDef11463 from "module_11463" /* 11463 */;
import _modDef11464 from "module_11464" /* 11464 */;
import _modDef11465 from "module_11465" /* 11465 */;
import _modDef11466 from "module_11466" /* 11466 */;
import _modDef11467 from "module_11467" /* 11467 */;
import _modDef11468 from "module_11468" /* 11468 */;
import _modDef11469 from "module_11469" /* 11469 */;
import _modDef11470 from "module_11470" /* 11470 */;
import _modDef11471 from "module_11471" /* 11471 */;
import _modDef11472 from "module_11472" /* 11472 */;
import _modDef11473 from "module_11473" /* 11473 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11450, medium: _modDef11451, large: _modDef11452 };
const obj2 = { small: _modDef11450, medium: _modDef11451, large: _modDef11452 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11453, medium: _modDef11454, large: _modDef11455 };
const obj3 = { small: _modDef11453, medium: _modDef11454, large: _modDef11455 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11456, medium: _modDef11457, large: _modDef11458 };
const obj4 = { small: _modDef11456, medium: _modDef11457, large: _modDef11458 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11459, medium: _modDef11460, large: _modDef11461 };
const obj5 = { small: _modDef11459, medium: _modDef11460, large: _modDef11461 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11462, medium: _modDef11463, large: _modDef11464 };
const obj6 = { small: _modDef11462, medium: _modDef11463, large: _modDef11464 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11465, medium: _modDef11466, large: _modDef11467 };
const obj7 = { small: _modDef11465, medium: _modDef11466, large: _modDef11467 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11468, medium: _modDef11469, large: _modDef11470 };
const obj8 = { small: _modDef11468, medium: _modDef11469, large: _modDef11470 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11471, medium: _modDef11472, large: _modDef11473 };
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
