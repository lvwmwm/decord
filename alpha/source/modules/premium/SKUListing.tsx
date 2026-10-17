// Module ID: 15064
// Function ID: 15065
// Name: SKUListing
// Dependencies: [2]
// Exports: default

// Module 15064 (SKUListing)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/SKUListing.tsx");

export default function SKUListing(skuId, skuFeatures) {
  const obj = Object.create(new.target.prototype);
  obj.skuId = skuId;
  obj.skuFeatures = skuFeatures;
  return obj;
};
