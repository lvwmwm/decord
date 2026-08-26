// Module ID: 13608
// Function ID: 13609
// Name: set
// Dependencies: [2]

// Module 13608 (set)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("modules/premium/SKUListing.tsx");

export default function SKUListing(skuId, skuFeatures) {
  const obj = Object.create(new.target.prototype);
  obj.skuId = skuId;
  obj.skuFeatures = skuFeatures;
  return obj;
}.prototype;
