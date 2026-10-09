// Module ID: 14217
// Function ID: 14218
// Name: PremiumSKUFeature
// Dependencies: [2]
// Exports: default

// Module 14217 (PremiumSKUFeature)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/PremiumSKUFeature.tsx");

export default function PremiumSKUFeature(INCREASED_FILE_UPLOAD_SIZE, getUserMaxFileSize, description) {
  const obj2 = Object.create(new.target.prototype);
  obj2.name = INCREASED_FILE_UPLOAD_SIZE;
  obj2.description = description;
  obj2.getFeatureValue = getUserMaxFileSize;
  const obj = { value: getUserMaxFileSize, configurable: false, writable: false };
  Object.defineProperty(obj2, "getFeatureValue", obj);
  return obj2;
};
