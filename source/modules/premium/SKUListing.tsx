// Module ID: 13331
// Function ID: 13332
// Name: set
// Dependencies: [2]

// Module 13331 (set)
const result = require("set").fileFinishedImporting("modules/premium/SKUListing.tsx");

export default function SKUListing(skuId, skuFeatures) {
  const obj = Object.create(new.target.prototype);
  obj.skuId = skuId;
  obj.skuFeatures = skuFeatures;
  return obj;
}.prototype;
