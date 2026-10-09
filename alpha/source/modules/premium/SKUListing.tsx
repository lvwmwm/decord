// Module ID: 14218
// Function ID: 14219
// Name: SKUListing
// Dependencies: [2]
// Exports: default

// Module 14218 (SKUListing)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/SKUListing.tsx");

export default function SKUListing(skuId, skuFeatures) {
  const obj = Object.create(new.target.prototype);
  obj.skuId = skuId;
  obj.skuFeatures = skuFeatures;
  return obj;
};
