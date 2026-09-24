// Module ID: 14350
// Function ID: 14351
// Name: SKUListing
// Dependencies: [2]

// Module 14350 (SKUListing)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/SKUListing.tsx");

export default function SKUListing(skuId, skuFeatures) {
  const obj = Object.create(new.target.prototype);
  obj.skuId = skuId;
  obj.skuFeatures = skuFeatures;
  return obj;
}.prototype;
