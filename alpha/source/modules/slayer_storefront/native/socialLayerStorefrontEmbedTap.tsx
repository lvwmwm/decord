// Module ID: 14004
// Function ID: 14005
// Name: socialLayerStorefrontEmbedTap
// Dependencies: [32, 12340, 12341, 12339, 2]
// Exports: getSocialLayerStorefrontEmbedTap

// Module 14004 (socialLayerStorefrontEmbedTap)
import storefrontCodedLink from "storefrontCodedLink" /* 12339 */;
import SocialLayerStorefrontMobileEmbedExperiment from "SocialLayerStorefrontMobileEmbedExperiment" /* 12340 */;
import SocialLayerStorefrontMobileMultiSkuEmbedExperiment from "SocialLayerStorefrontMobileMultiSkuEmbedExperiment" /* 12341 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/slayer_storefront/native/socialLayerStorefrontEmbedTap.tsx");

export function getSocialLayerStorefrontEmbedTap(code, secondary, skuId) {
  let isEligibleForSocialLayerStorefrontMobileEmbed;
  if (null != skuId) {
    const obj = SocialLayerStorefrontMobileEmbedExperiment;
    if (obj.getIsEligibleForSocialLayerStorefrontMobileEmbed({ location: "create_coded_link_embeds" })) {
      const tmpResult = SocialLayerStorefrontMobileMultiSkuEmbedExperiment;
      if (tmpResult.getIsEligibleForSocialLayerStorefrontMobileMultiSkuEmbed({ location: "create_coded_link_embeds" })) {
        const tmpResult2 = storefrontCodedLink;
        const result = tmpResult2.parseStorefrontCodedLink(code);
        if (null != result) {
          if (result.skuIds.length > 1) {
            const skuIds = result.skuIds;
            let tmp7 = null;
            if (skuIds.includes(skuId)) {
              tmp7 = { skuId, wishlist: false };
              const obj2 = { skuId, wishlist: false };
            }
            return tmp7;
          }
        }
      }
    }
  }
  const obj3 = { skuId: _slicedToArray(code.split("-"), 1)[0], wishlist: isEligibleForSocialLayerStorefrontMobileEmbed };
  isEligibleForSocialLayerStorefrontMobileEmbed = true === secondary;
  if (isEligibleForSocialLayerStorefrontMobileEmbed) {
    const obj5 = SocialLayerStorefrontMobileEmbedExperiment;
    isEligibleForSocialLayerStorefrontMobileEmbed = obj5.getIsEligibleForSocialLayerStorefrontMobileEmbed({ location: "create_coded_link_embeds" });
  }
  return obj3;
}
