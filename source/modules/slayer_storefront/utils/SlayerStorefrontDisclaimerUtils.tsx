// Module ID: 9778
// Function ID: 76002
// Name: getNotSupportedSentence
// Dependencies: [1921, 5611, 653, 9779, 1212, 3104, 2]
// Exports: getFinePrintMessageForApplication, getGiftLinkAccountDescriptionForApplication, getMobileFinePrintMessageForApplication, getRedeemPurchaseDescriptionForApplication

// Module 9778 (getNotSupportedSentence)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { MarketingURLs } from "ME";

const require = arg1;
function getNotSupportedSentence(id) {
  if (null == id) {
    let arr = items;
  } else {
    configForApplicationId = configForApplicationId.getConfigForApplicationId(id);
    arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
  }
  let str = "";
  if (0 !== arr.length) {
    const intl = require(1212) /* getSystemLocale */.intl;
    const obj = {};
    const _Intl = Intl;
    const prototype = ListFormat.prototype;
    const listFormat = new ListFormat(locale.locale);
    obj.platforms = listFormat.format(arr.map((arg0) => outer1_6[arg0]));
    obj.count = arr.length;
    str = intl.formatToPlainString(importDefault(3104)["5h8p5P"], obj);
  }
  return str;
}
function getCheckoutDisclaimerMessageForApplication(id) {
  const intl = require(1212) /* getSystemLocale */.intl;
  const obj = {};
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  obj.platforms_info = getNotSupportedSentence(id);
  return intl.format(importDefault(3104).Q0dHYO, obj);
}
let closure_6 = { [arg1(9779).StorefrontPlatform.DESKTOP]: "PC", [arg1(9779).StorefrontPlatform.XBOX]: "Xbox", [arg1(9779).StorefrontPlatform.PLAYSTATION]: "PlayStation", [arg1(9779).StorefrontPlatform.SWITCH]: "Switch", [arg1(9779).StorefrontPlatform.APPLE_ARCADE]: "Apple Arcade", [arg1(9779).StorefrontPlatform.NETFLIX]: "Netflix", [arg1(9779).StorefrontPlatform.AMAZON_KIDS_PLUS]: "Amazon Kids+" };
let items = [require("StorefrontPlatform").StorefrontPlatform.PLAYSTATION];
const result = require("ME").fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontDisclaimerUtils.tsx");

export { getNotSupportedSentence };
export { getCheckoutDisclaimerMessageForApplication };
export const getFinePrintMessageForApplication = function getFinePrintMessageForApplication(name, shouldAppendDisclaimer) {
  name = undefined;
  if (null != name) {
    name = name.name;
  }
  let str = "game's";
  if (null != name) {
    str = name;
  }
  const intl = require(1212) /* getSystemLocale */.intl;
  const format = intl.format;
  if (shouldAppendDisclaimer.shouldAppendDisclaimer) {
    let obj = { applicationName: str, platforms_info: getCheckoutDisclaimerMessageForApplication(name) };
    let formatResult = format(importDefault(3104)["3ah/a2"], obj);
  } else {
    obj = { applicationName: str };
    formatResult = format(require(1212) /* getSystemLocale */.t.CVITgq, obj);
  }
  return formatResult;
};
export const getMobileFinePrintMessageForApplication = function getMobileFinePrintMessageForApplication(result, result2, shouldAppendDisclaimer) {
  let name;
  if (null != result) {
    name = result.name;
  }
  let str = "game's";
  if (null != name) {
    str = name;
  }
  const obj = { buyButtonLabel: result2, paidServiceTermURL: MarketingURLs.PAID_TERMS, applicationName: str };
  if (shouldAppendDisclaimer.shouldAppendDisclaimer) {
    const items = [getCheckoutDisclaimerMessageForApplication(result), ];
    const intl2 = require(1212) /* getSystemLocale */.intl;
    items[1] = intl2.format(importDefault(3104).Ufm9XX, obj);
    let items1 = items;
  } else {
    const intl = require(1212) /* getSystemLocale */.intl;
    items1 = [intl.format(importDefault(3104).Ufm9XX, obj)];
  }
  return items1;
};
export const getRedeemPurchaseDescriptionForApplication = function getRedeemPurchaseDescriptionForApplication(applicationName) {
  const intl = require(1212) /* getSystemLocale */.intl;
  const obj = { applicationName: applicationName.name, platforms_info: getNotSupportedSentence(applicationName.id) };
  return intl.format(importDefault(3104).fO4b1C, obj);
};
export const getGiftLinkAccountDescriptionForApplication = function getGiftLinkAccountDescriptionForApplication(applicationName, hasAlreadyLinked) {
  const tmp = importDefault(3104);
  const intl = require(1212) /* getSystemLocale */.intl;
  return intl.format(hasAlreadyLinked.hasAlreadyLinked ? tmp.yqAKVO : tmp.vyAtfo, { applicationName: applicationName.name, platforms_info: getNotSupportedSentence(applicationName.id) });
};
