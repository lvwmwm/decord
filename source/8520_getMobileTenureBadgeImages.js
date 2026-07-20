// Module ID: 8520
// Function ID: 67912
// Name: getMobileTenureBadgeImages
// Dependencies: []
// Exports: useMobileTenureBadgeImages

// Module 8520 (getMobileTenureBadgeImages)
function getMobileTenureBadgeImages(id) {
  return obj[id];
}
const TieredTenureBadge = require(dependencyMap[0]).TieredTenureBadge;
let obj = {};
obj = { small: importDefault(dependencyMap[1]), medium: importDefault(dependencyMap[2]), large: importDefault(dependencyMap[3]) };
obj[TieredTenureBadge.PREMIUM_TENURE_1_MONTH] = obj;
obj = { small: importDefault(dependencyMap[4]), medium: importDefault(dependencyMap[5]), large: importDefault(dependencyMap[6]) };
obj[TieredTenureBadge.PREMIUM_TENURE_3_MONTH] = obj;
obj[TieredTenureBadge.PREMIUM_TENURE_6_MONTH] = { small: importDefault(dependencyMap[7]), medium: importDefault(dependencyMap[8]), large: importDefault(dependencyMap[9]) };
const obj1 = { small: importDefault(dependencyMap[7]), medium: importDefault(dependencyMap[8]), large: importDefault(dependencyMap[9]) };
obj[TieredTenureBadge.PREMIUM_TENURE_12_MONTH] = { small: importDefault(dependencyMap[10]), medium: importDefault(dependencyMap[11]), large: importDefault(dependencyMap[12]) };
const obj2 = { small: importDefault(dependencyMap[10]), medium: importDefault(dependencyMap[11]), large: importDefault(dependencyMap[12]) };
obj[TieredTenureBadge.PREMIUM_TENURE_24_MONTH] = { small: importDefault(dependencyMap[13]), medium: importDefault(dependencyMap[14]), large: importDefault(dependencyMap[15]) };
const obj3 = { small: importDefault(dependencyMap[13]), medium: importDefault(dependencyMap[14]), large: importDefault(dependencyMap[15]) };
obj[TieredTenureBadge.PREMIUM_TENURE_36_MONTH] = { small: importDefault(dependencyMap[16]), medium: importDefault(dependencyMap[17]), large: importDefault(dependencyMap[18]) };
const obj4 = { small: importDefault(dependencyMap[16]), medium: importDefault(dependencyMap[17]), large: importDefault(dependencyMap[18]) };
obj[TieredTenureBadge.PREMIUM_TENURE_60_MONTH] = { small: importDefault(dependencyMap[19]), medium: importDefault(dependencyMap[20]), large: importDefault(dependencyMap[21]) };
const obj5 = { small: importDefault(dependencyMap[19]), medium: importDefault(dependencyMap[20]), large: importDefault(dependencyMap[21]) };
obj[TieredTenureBadge.PREMIUM_TENURE_72_MONTH] = { small: importDefault(dependencyMap[22]), medium: importDefault(dependencyMap[23]), large: importDefault(dependencyMap[24]) };
const _module = require(dependencyMap[25]);
const result = _module.fileFinishedImporting("modules/premium/tiered_tenure_badging/native/hooks/useMobileTenureBadgeImages.tsx");

export const useMobileTenureBadgeImages = function useMobileTenureBadgeImages(id) {
  let tmp = null;
  if (null != id) {
    tmp = getMobileTenureBadgeImages(id);
  }
  return tmp;
};
export { getMobileTenureBadgeImages };
