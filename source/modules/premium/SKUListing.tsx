// Module ID: 13140
// Function ID: 13141
// Name: set
// Dependencies: [2]

// Module 13140 (set)
const result = require("set").fileFinishedImporting("modules/premium/SKUListing.tsx");

export default function SKUListing(skuId, skuFeatures) {
  const obj = Object.create(new.target.prototype);
  obj.skuId = skuId;
  obj.skuFeatures = skuFeatures;
  return obj;
}.prototype;
