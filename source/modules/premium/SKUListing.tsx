// Module ID: 13398
// Function ID: 13399
// Name: set
// Dependencies: [2]

// Module 13398 (set)
const result = require("set").fileFinishedImporting("modules/premium/SKUListing.tsx");

export default function SKUListing(skuId, skuFeatures) {
  const obj = Object.create(new.target.prototype);
  obj.skuId = skuId;
  obj.skuFeatures = skuFeatures;
  return obj;
}.prototype;
