// Module ID: 11454
// Function ID: 11455
// Name: useMobileTenureBadgeImages
// Dependencies: [1374, 11455, 11456, 11457, 11458, 11459, 11460, 11461, 11462, 11463, 11464, 11465, 11466, 11467, 11468, 11469, 11470, 11471, 11472, 11473, 11474, 11475, 11476, 11477, 11478, 2]
// Exports: getMobileTenureBadgeImages, useMobileTenureBadgeImages

// Module 11454 (useMobileTenureBadgeImages)
import PremiumConstants from "PremiumConstants" /* 1374 */;
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
import _modDef11474 from "module_11474" /* 11474 */;
import _modDef11475 from "module_11475" /* 11475 */;
import _modDef11476 from "module_11476" /* 11476 */;
import _modDef11477 from "module_11477" /* 11477 */;
import _modDef11478 from "module_11478" /* 11478 */;
import size from "module_2" /* 2 */;

const TieredTenureBadge = PremiumConstants.TieredTenureBadge;
const obj = {};
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = { small: _modDef11455, medium: _modDef11456, large: _modDef11457 };
const obj2 = { small: _modDef11455, medium: _modDef11456, large: _modDef11457 };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = { small: _modDef11458, medium: _modDef11459, large: _modDef11460 };
const obj3 = { small: _modDef11458, medium: _modDef11459, large: _modDef11460 };
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: _modDef11461, medium: _modDef11462, large: _modDef11463 };
const obj4 = { small: _modDef11461, medium: _modDef11462, large: _modDef11463 };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: _modDef11464, medium: _modDef11465, large: _modDef11466 };
const obj5 = { small: _modDef11464, medium: _modDef11465, large: _modDef11466 };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: _modDef11467, medium: _modDef11468, large: _modDef11469 };
const obj6 = { small: _modDef11467, medium: _modDef11468, large: _modDef11469 };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: _modDef11470, medium: _modDef11471, large: _modDef11472 };
const obj7 = { small: _modDef11470, medium: _modDef11471, large: _modDef11472 };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: _modDef11473, medium: _modDef11474, large: _modDef11475 };
const obj8 = { small: _modDef11473, medium: _modDef11474, large: _modDef11475 };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: _modDef11476, medium: _modDef11477, large: _modDef11478 };
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
