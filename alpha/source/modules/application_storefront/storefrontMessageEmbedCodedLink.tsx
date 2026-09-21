// Module ID: 7927
// Function ID: 7928
// Name: storefrontMessageEmbedCodedLink
// Dependencies: [32, 2]
// Exports: makeStorefrontSKUCodedLink, parseStorefrontSkuCodedLink

// Module 7927 (storefrontMessageEmbedCodedLink)
import _slicedToArray from "module_32" /* 32 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/application_storefront/storefrontMessageEmbedCodedLink.tsx");

export const makeStorefrontSKUCodedLink = function makeStorefrontSKUCodedLink(match7, match72) {
  return "" + match7 + ":" + match72;
};
export const parseStorefrontSkuCodedLink = function parseStorefrontSkuCodedLink(code) {
  const parts = code.split(":");
  if (2 !== parts.length) {
    return null;
  } else {
    const obj = { applicationId: null, skuId: null };
    [obj.applicationId, obj.skuId] = parts;
    return obj;
  }
};
