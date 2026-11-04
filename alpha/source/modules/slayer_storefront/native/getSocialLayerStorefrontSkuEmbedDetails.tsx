// Module ID: 15354
// Function ID: 15355
// Name: getSocialLayerStorefrontSkuEmbedDetails
// Dependencies: [17, 1113, 7544, 10864, 2]
// Exports: getSocialLayerStorefrontSkuEmbedDetails

// Module 15354 (getSocialLayerStorefrontSkuEmbedDetails)
import react_native from "react-native" /* 17 */;
import intl3 from "intl" /* 1113 */;
import SlayerStorefrontUtils from "SlayerStorefrontUtils" /* 7544 */;
import AssetRegistryDefault from "AssetRegistry" /* 10864 */;
import size from "module_2" /* 2 */;

const Image = react_native.Image;
const result = size.fileFinishedImporting("modules/slayer_storefront/native/getSocialLayerStorefrontSkuEmbedDetails.tsx");

export function getSocialLayerStorefrontSkuEmbedDetails(value, application) {
  let formatted;
  let intl;
  let str1;
  let str5;
  let str6;
  let uri;
  const obj = { title: value.name, subtitle: intl.string(intl3.t.V91tvy), foregroundImageUrl: str1, backgroundImageUrl: str5, titleIconUrl: str6, badgeText: formatted, badgeIconUrl: uri };
  intl = intl3.intl;
  const obj2 = SlayerStorefrontUtils;
  const str = obj2.getCardImageURL(value);
  str1 = undefined;
  if (str != null) {
    str1 = str.toString();
  }
  if (str1 == null) {
    str1 = application.getIconURL(512);
  }
  const tmpResult = SlayerStorefrontUtils;
  const str2 = tmpResult.getCardBackgroundImageURL(value);
  str5 = undefined;
  if (str2 != null) {
    str5 = str2.toString();
  }
  const tmpResult2 = SlayerStorefrontUtils;
  const str3 = tmpResult2.getPrimaryCarouselItemInfo(value, application.id).primaryIconAsset;
  str6 = undefined;
  if (str3 != null) {
    str6 = str3.toString();
  }
  formatted = undefined;
  if (value.exclusive) {
    const intl2 = tmp(1113).intl;
    const str4 = intl2.string(intl3.t.RiDMFz);
    formatted = str4.toUpperCase();
  }
  uri = undefined;
  if (value.exclusive) {
    uri = Image.resolveAssetSource(AssetRegistryDefault).uri;
  }
  return obj;
}
