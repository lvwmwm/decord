// Module ID: 15436
// Function ID: 15437
// Name: createSocialLayerStorefrontProductDetailsEmbed
// Dependencies: [17, 2162, 7881, 9588, 502, 1385, 6984, 7989, 10270, 1387, 8498, 1113, 14444, 7506, 7501, 3896, 15434, 11739, 2171, 7513, 9650, 15435, 9586, 9653, 11741, 2]
// Exports: createSocialLayerStorefrontProductDetailsEmbed

// Module 15436 (createSocialLayerStorefrontProductDetailsEmbed)
import react_native from "react-native" /* 17 */;
import intl6 from "intl" /* 1113 */;
import PremiumConstants from "PremiumConstants" /* 1387 */;
import PremiumUtilsDefault from "PremiumUtils" /* 2171 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7501 */;
import StorefrontUtils from "StorefrontUtils" /* 7506 */;
import OrbCheckoutUtils from "OrbCheckoutUtils" /* 7513 */;
import Constants from "Constants" /* 7989 */;
import getEmbedThemeColorsDefault from "getEmbedThemeColors" /* 8498 */;
import CodedLinksConstants from "CodedLinksConstants" /* 10270 */;
import socialLayerStorefrontEmbedPrice2 from "socialLayerStorefrontEmbedPrice" /* 11739 */;
import SocialLayerStorefrontMobileEmbedExperiment from "SocialLayerStorefrontMobileEmbedExperiment" /* 11741 */;
import isSocialLayerApplicationDefault from "isSocialLayerApplication" /* 14444 */;
import getSocialLayerStorefrontSkuEmbedDetails from "getSocialLayerStorefrontSkuEmbedDetails" /* 15434 */;
import socialLayerStorefrontEmbedColors from "socialLayerStorefrontEmbedColors" /* 15435 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import UserProfileStore from "UserProfileStore" /* 7881 */;
import WishlistStore from "WishlistStore" /* 9588 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1385 */;
import SKUStore from "SKUStore" /* 6984 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const InviteTypes = Constants.InviteTypes;
const CodedLinkExtendedType = CodedLinksConstants.CodedLinkExtendedType;
const PremiumTypes = PremiumConstants.PremiumTypes;
let result = size.fileFinishedImporting("modules/slayer_storefront/native/createSocialLayerStorefrontProductDetailsEmbed.tsx");

export function createSocialLayerStorefrontProductDetailsEmbed(arg0) {
  let StringResult;
  let baseColors;
  let colors;
  let guildOrApplication;
  let intl2;
  let prop;
  let skuId;
  let string2;
  let stringResult;
  let t;
  let theme;
  let tmp15;
  let tmp36;
  let tmpResult10;
  let tmpResult9;
  let uri;
  ({ skuId, guildOrApplication, theme } = arg0);
  const obj = SocialLayerStorefrontMobileEmbedExperiment;
  const isEligibleForSocialLayerStorefrontMobileEmbed = obj.getIsEligibleForSocialLayerStorefrontMobileEmbed({ location: "create_coded_link_embeds", autoTrackExposure: true });
  ({ colors, baseColors } = getEmbedThemeColorsDefault(theme));
  getEmbedThemeColorsDefault(theme);
  const value = SKUStore.get(skuId);
  if (isEligibleForSocialLayerStorefrontMobileEmbed) {
    let applicationId;
    if (value != null) {
      applicationId = value.applicationId;
    }
    const application = ApplicationStore.getApplication(applicationId);
    let result = null != applicationId;
    const isFetchingResult = SKUStore.isFetching(skuId);
    SKUStore.didFetchingSkuFail(skuId);
    if (result) {
      result = obj9.isFetchingApplication(applicationId);
    }
    let name;
    null != applicationId && ApplicationStore.didFetchingApplicationFail(applicationId);
    if (application != null) {
      name = application.name;
    }
    if (name == null) {
      const intl4 = tmp(1113).intl;
      const str5 = intl4.string(intl6.t.vyaWs7);
      name = str5.toUpperCase();
    }
    if (!isFetchingResult) {
      if (!result) {
        if (null != applicationId) {
          if (null == application) {
            if (!result) {
              tmp15 = tmp36;
            }
          }
        }
      }
      tmp36 = null;
      if (null != value) {
        tmp36 = null;
        if (null != application) {
          tmp36 = null;
          if (isSocialLayerApplicationDefault(application)) {
            if ("guild" !== guildOrApplication.type) {
              if ("application" !== guildOrApplication.type) {
                const tmpResult = getSocialLayerStorefrontSkuEmbedDetails;
                const socialLayerStorefrontSkuEmbedDetails = tmpResult.getSocialLayerStorefrontSkuEmbedDetails(value, application);
                const tmpResult7 = socialLayerStorefrontEmbedPrice2;
                const socialLayerStorefrontEmbedPrice = tmpResult7.getSocialLayerStorefrontEmbedPrice(value);
                const currentUser = UserStore.getCurrentUser();
                const tmp4Result = PremiumUtilsDefault;
                const isPremiumResult = tmp4Result.isPremium(currentUser, PremiumTypes.TIER_2);
                const tmpResult8 = OrbCheckoutUtils;
                const orbPriceFromPrices = tmpResult8.getOrbPriceFromPrices(value.prices, isPremiumResult);
                const id = AuthenticationStore.getId();
                let firstWishlistId = null;
                if (null != id) {
                  firstWishlistId = UserProfileStore.getFirstWishlistId(id);
                }
                const hasSkuIdResult = null != firstWishlistId && WishlistStore.hasSkuId(firstWishlistId, value.id);
                const obj4 = { headerText: name, headerColor: colors.headerColor, titleText: socialLayerStorefrontSkuEmbedDetails.title, titleColor: colors.titleColor, subtitleColor: colors.subtitleColor, thumbnailBackgroundColor: colors.thumbnailBackgroundColor, normalPriceText: socialLayerStorefrontEmbedPrice, orbPriceText: StringResult, orbIconUrl: uri, overlayBadgeBackgroundColor: colors.acceptBlurpleLabelBackgroundColor, overlayBadgeTextColor: tmpResult9.getSocialLayerStorefrontEmbedColors(theme).overlayTextColor, backgroundColor: tmpResult10.getSocialLayerStorefrontEmbedColors(theme).backgroundColor, showWishlistButton: true, wishlistButtonIconUrl: Image.resolveAssetSource(importDefault(hasSkuIdResult ? 9586 : 9653)).uri, wishlistButtonAccessibilityLabel: string2(hasSkuIdResult ? t["19b82d"] : t.Hcgz2S), embedCanBeTapped: true, canBeAccepted: false, type: InviteTypes.GUILD, extendedType: CodedLinkExtendedType.SOCIAL_LAYER_STOREFRONT_EMBED, skuId };
                const merged = Object.assign(baseColors);
                ({ titleIconUrl: obj14.titleIconUrl, subtitle: obj14.subtitle } = socialLayerStorefrontSkuEmbedDetails);
                ({ foregroundImageUrl: obj14.foregroundImageUrl, backgroundImageUrl: obj14.backgroundImageUrl, foregroundImageUrl: obj14.thumbnailUrl } = socialLayerStorefrontSkuEmbedDetails);
                StringResult = undefined;
                if (null != orbPriceFromPrices) {
                  const _String = String;
                  StringResult = String(orbPriceFromPrices.amount);
                }
                uri = undefined;
                if (null != orbPriceFromPrices) {
                  uri = Image.resolveAssetSource(tmp4(9650)).uri;
                }
                ({ badgeText: obj14.overlayBadgeText, badgeIconUrl: obj14.overlayBadgeIconUrl } = socialLayerStorefrontSkuEmbedDetails);
                tmpResult9 = socialLayerStorefrontEmbedColors;
                tmpResult10 = socialLayerStorefrontEmbedColors;
                const intl5 = tmp(1113).intl;
                string2 = intl5.string;
                t = tmp(1113).t;
                tmp36 = obj4;
              } else {
                tmp36 = null;
              }
            } else {
              tmp36 = null;
            }
          }
        }
      }
    }
    const obj5 = { headerText: name, type: InviteTypes.GUILD, extendedType: CodedLinkExtendedType.SOCIAL_LAYER_STOREFRONT_EMBED, skuId };
    const merged1 = Object.assign(baseColors);
    ({ resolvingGradientEnd: obj17.resolvingGradientEnd, resolvingGradientStart: obj17.resolvingGradientStart } = colors);
    tmp36 = obj5;
  } else {
    let applicationId1;
    if (value != null) {
      applicationId1 = value.applicationId;
    }
    const application1 = ApplicationStore.getApplication(applicationId1);
    let result1 = null != applicationId1;
    const isFetchingResult1 = SKUStore.isFetching(skuId);
    SKUStore.didFetchingSkuFail(skuId);
    if (result1) {
      result1 = obj3.isFetchingApplication(applicationId1);
    }
    let name1;
    null != applicationId1 && ApplicationStore.didFetchingApplicationFail(applicationId1);
    if (application1 != null) {
      name1 = application1.name;
    }
    if (name1 == null) {
      const intl = tmp(1113).intl;
      const str = intl.string(intl6.t.vyaWs7);
      name1 = str.toUpperCase();
    }
    if (!isFetchingResult1) {
      tmp15 = null;
      if (null != value) {
        tmp15 = null;
        if (null != application1) {
          tmp15 = null;
          if (isSocialLayerApplicationDefault(application1)) {
            if ("guild" !== guildOrApplication.type) {
              if ("application" !== guildOrApplication.type) {
                const tmpResult11 = StorefrontUtils;
                const result2 = tmpResult11.isSlayerSkuAvailableOnThisPlatform(value);
                const tmpResult12 = SlayerStorefrontUtils;
                const str4 = tmpResult12.getCardImageURL(value);
                let str1;
                if (str4 != null) {
                  str1 = str4.toString();
                }
                if (str1 == null) {
                  str1 = application1.getIconURL(64);
                }
                const obj6 = { headerText: name1, headerColor: colors.headerColor, titleText: value.name, titleColor: colors.titleColor, subtitle: intl2.string(intl6.t.V91tvy), subtitleColor: colors.subtitleColor, thumbnailUrl: str1, thumbnailBackgroundColor: colors.thumbnailBackgroundColor, acceptLabelText: stringResult, acceptLabelColor: prop, acceptLabelBackgroundColor: result2 ? colors.acceptLabelGreenBackgroundColor : colors.acceptBlurpleLabelBackgroundColor, embedCanBeTapped: true, canBeAccepted: true, type: InviteTypes.GUILD };
                const merged2 = Object.assign(baseColors);
                intl2 = tmp(1113).intl;
                const intl3 = tmp(1113).intl;
                const string = intl3.string;
                if (result2) {
                  stringResult = string(tmp(1113).t.boqtTA);
                } else {
                  stringResult = string(tmp4(3896).BKf0MM);
                }
                prop = undefined;
                if (result2) {
                  prop = colors.acceptLabelGreenColor;
                }
                tmp15 = obj6;
              } else {
                tmp15 = null;
              }
            } else {
              tmp15 = null;
            }
          }
        }
      }
    }
    const obj7 = { headerText: name1, type: InviteTypes.GUILD };
    const merged3 = Object.assign(baseColors);
    ({ resolvingGradientEnd: obj8.resolvingGradientEnd, resolvingGradientStart: obj8.resolvingGradientStart } = colors);
    tmp15 = obj7;
  }
  return tmp15;
}
