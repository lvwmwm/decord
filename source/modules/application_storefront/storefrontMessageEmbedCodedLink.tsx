// Module ID: 6926
// Function ID: 55247
// Name: makeStorefrontSKUCodedLink
// Dependencies: [1953825491, 683]
// Exports: makeStorefrontSKUCodedLink, parseStorefrontSkuCodedLink

// Module 6926 (makeStorefrontSKUCodedLink)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let closure_0 = importDefault(dependencyMap[0]);
const result = _isNativeReflectConstruct.fileFinishedImporting("modules/application_storefront/storefrontMessageEmbedCodedLink.tsx");

export const makeStorefrontSKUCodedLink = function makeStorefrontSKUCodedLink(arg0, arg1) {
  return "" + arg0 + ":" + arg1;
};
export const parseStorefrontSkuCodedLink = function parseStorefrontSkuCodedLink(code) {
  const parts = code.split(":");
  if (2 !== parts.length) {
    return null;
  } else {
    const tmp2 = callback(parts, 2);
    const obj = { applicationId: tmp2[0], skuId: tmp2[1] };
    return obj;
  }
};
