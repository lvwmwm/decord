// Module ID: 13721
// Function ID: 13722
// Name: set
// Dependencies: [2]

// Module 13721 (set)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/premium/SKUListing.tsx");

export default function SKUListing(skuId, skuFeatures) {
  const obj = Object.create(new.target.prototype);
  obj.skuId = skuId;
  obj.skuFeatures = skuFeatures;
  return obj;
}.prototype;
