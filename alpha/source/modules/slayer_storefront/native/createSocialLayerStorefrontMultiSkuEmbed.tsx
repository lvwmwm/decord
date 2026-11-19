// Module ID: 14221
// Function ID: 14222
// Name: createSocialLayerStorefrontMultiSkuEmbed
// Dependencies: [2165, 6553, 6730, 1072, 8319, 10351, 11904, 11905, 13402, 11903, 14222, 8561, 14223, 6238, 6728, 2]
// Exports: createSocialLayerStorefrontMultiSkuEmbed

// Module 14221 (createSocialLayerStorefrontMultiSkuEmbed)
import Constants from "Constants" /* 1072 */;
import Constants2 from "Constants" /* 8319 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10351 */;
import isSocialLayerApplicationDefault from "isSocialLayerApplication" /* 13402 */;
import getSocialLayerStorefrontSkuEmbedDetails from "getSocialLayerStorefrontSkuEmbedDetails" /* 14222 */;
import ApplicationStore from "ApplicationStore" /* 2165 */;
import SKUStore from "SKUStore" /* 6553 */;
import SocialLayerStorefrontStore from "SocialLayerStorefrontStore" /* 6730 */;
import size from "module_2" /* 2 */;

const ThemeTypes = Constants.ThemeTypes;
const InviteTypes = Constants2.InviteTypes;
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
let result = size.fileFinishedImporting("modules/slayer_storefront/native/createSocialLayerStorefrontMultiSkuEmbed.tsx");

export function createSocialLayerStorefrontMultiSkuEmbed(arg0) {
  let assetURL;
  let guildOrApplication;
  let skuIds;
  let socialLayerStorefrontBackgroundImageURL;
  let tmpResult4;
  let application;
  const tmp2 = dependencyMap;
  ({ skuIds, guildOrApplication } = arg0);
  let obj = application(11904);
  const isEligibleForSocialLayerStorefrontMobileEmbed = obj.getIsEligibleForSocialLayerStorefrontMobileEmbed({ location: "create_coded_link_embeds", autoTrackExposure: true });
  let obj2 = application(11905);
  if (isEligibleForSocialLayerStorefrontMobileEmbed) {
    if (obj2.getIsEligibleForSocialLayerStorefrontMobileMultiSkuEmbed({ location: "create_coded_link_embeds", autoTrackExposure: true })) {
      const storefrontFetchState = SocialLayerStorefrontStore.getStorefrontFetchState(guildOrApplication);
      let storefront;
      if (storefrontFetchState != null) {
        storefront = storefrontFetchState.storefront;
      }
      if (null == storefront) {
        return null;
      } else {
        application = ApplicationStore.getApplication(storefront.applicationId);
        if (null != application) {
          const tmp18 = importDefault;
          if (isSocialLayerApplicationDefault(application)) {
            const tmpResult = application(11903);
            const result = tmpResult.normalizeStorefrontSkuIds(skuIds);
            const flatMapResult = result.flatMap((skuId) => {
              const value = SKUStore.get(skuId);
              if (null != value) {
                let items;
                if (value.applicationId === application.id) {
                  const obj = { skuId };
                  const obj2 = getSocialLayerStorefrontSkuEmbedDetails;
                  const merged = Object.assign(obj2.getSocialLayerStorefrontSkuEmbedDetails(value, tmp2));
                  items = [obj];
                }
                return items;
              }
              items = [];
            });
            if (0 === flatMapResult.length) {
              return null;
            } else {
              let lightThemeLogoAssetId = storefront.logoAssetId;
              if (lightThemeLogoAssetId == null) {
                lightThemeLogoAssetId = storefront.lightThemeLogoAssetId;
              }
              const obj3 = { backgroundColor: tmpResult4.getSocialLayerStorefrontEmbedColors(ThemeTypes.DARK).backgroundColor, extendedType: CodedLinkExtendedType.SOCIAL_LAYER_STOREFRONT_MULTI_SKU_EMBED, type: InviteTypes.GUILD, headerText: storefront.title, headerLogoUrl: assetURL, headerBackgroundImageUrl: socialLayerStorefrontBackgroundImageURL, headerAccessibilityLabel: "" + application.name + " " + storefront.title, firstItemFullWidth: flatMapResult.length % 2 === 1, items: flatMapResult, embedCanBeTapped: true };
              let merged = Object.assign(tmp18(8561)(ThemeTypes.DARK).baseColors);
              assetURL = undefined;
              tmpResult4 = application(14223);
              if (null != lightThemeLogoAssetId) {
                const tmpResult5 = application(6238);
                assetURL = tmpResult5.getAssetURL(application.id, lightThemeLogoAssetId, 128);
              }
              const tmpResult6 = application(6728);
              socialLayerStorefrontBackgroundImageURL = tmpResult6.getSocialLayerStorefrontBackgroundImageURL(storefront);
              const _HermesInternal = HermesInternal;
              return obj3;
            }
          }
        }
        return null;
      }
    }
  }
  return null;
}
