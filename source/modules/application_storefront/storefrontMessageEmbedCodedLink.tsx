// Module ID: 6931
// Function ID: 55313
// Name: makeStorefrontSKUCodedLink
// Dependencies: [57, 2]
// Exports: makeStorefrontSKUCodedLink, parseStorefrontSkuCodedLink

// Module 6931 (makeStorefrontSKUCodedLink)
import _slicedToArray from "_slicedToArray";

const result = require("set").fileFinishedImporting("modules/application_storefront/storefrontMessageEmbedCodedLink.tsx");

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
