// Module ID: 9736
// Function ID: 75736
// Name: getNotSupportedSentence
// Dependencies: []
// Exports: getFinePrintMessageForApplication, getGiftLinkAccountDescriptionForApplication, getMobileFinePrintMessageForApplication, getRedeemPurchaseDescriptionForApplication

// Module 9736 (getNotSupportedSentence)
function getNotSupportedSentence(id) {
  if (null == id) {
    let arr = items;
  } else {
    const configForApplicationId = configForApplicationId.getConfigForApplicationId(id);
    arr = null == configForApplicationId ? items : configForApplicationId.excludedPlatforms;
  }
  let str = "";
  if (0 !== arr.length) {
    const intl = arg1(dependencyMap[4]).intl;
    const obj = {};
    const _Intl = Intl;
    const prototype = ListFormat.prototype;
    const listFormat = new ListFormat(locale.locale);
    obj.platforms = listFormat.format(arr.map((arg0) => closure_6[arg0]));
    obj.count = arr.length;
    str = intl.formatToPlainString(importDefault(dependencyMap[5]).5h8p5P, obj);
  }
  return str;
}
function getCheckoutDisclaimerMessageForApplication(id) {
  const intl = arg1(dependencyMap[4]).intl;
  const obj = {};
  id = undefined;
  if (null != id) {
    id = id.id;
  }
  obj.platforms_info = getNotSupportedSentence(id);
  return intl.format(importDefault(dependencyMap[5]).Q0dHYO, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const MarketingURLs = arg1(dependencyMap[2]).MarketingURLs;
let closure_6 = { [arg1(dependencyMap[3]).StorefrontPlatform.DESKTOP]: "PC", [arg1(dependencyMap[3]).StorefrontPlatform.XBOX]: "Xbox", [arg1(dependencyMap[3]).StorefrontPlatform.PLAYSTATION]: "PlayStation", [arg1(dependencyMap[3]).StorefrontPlatform.SWITCH]: "Switch", [arg1(dependencyMap[3]).StorefrontPlatform.APPLE_ARCADE]: "Apple Arcade", [arg1(dependencyMap[3]).StorefrontPlatform.NETFLIX]: "Netflix", [arg1(dependencyMap[3]).StorefrontPlatform.AMAZON_KIDS_PLUS]: "Amazon Kids+" };
const items = [arg1(dependencyMap[3]).StorefrontPlatform.PLAYSTATION];
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/slayer_storefront/utils/SlayerStorefrontDisclaimerUtils.tsx");

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
  const intl = shouldAppendDisclaimer(dependencyMap[4]).intl;
  const format = intl.format;
  if (shouldAppendDisclaimer.shouldAppendDisclaimer) {
    let obj = { applicationName: str, platforms_info: getCheckoutDisclaimerMessageForApplication(name) };
    let formatResult = format(importDefault(tmp3[5]).3ah/a2, obj);
  } else {
    obj = { applicationName: str };
    formatResult = format(shouldAppendDisclaimer(tmp3[4]).t.CVITgq, obj);
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
    const intl2 = result2(dependencyMap[4]).intl;
    items[1] = intl2.format(importDefault(dependencyMap[5]).Ufm9XX, obj);
    let items1 = items;
  } else {
    const intl = result2(dependencyMap[4]).intl;
    items1 = [intl.format(importDefault(dependencyMap[5]).Ufm9XX, obj)];
  }
  return items1;
};
export const getRedeemPurchaseDescriptionForApplication = function getRedeemPurchaseDescriptionForApplication(applicationName) {
  const intl = arg1(dependencyMap[4]).intl;
  const obj = { applicationName: applicationName.name, platforms_info: getNotSupportedSentence(applicationName.id) };
  return intl.format(importDefault(dependencyMap[5]).fO4b1C, obj);
};
export const getGiftLinkAccountDescriptionForApplication = function getGiftLinkAccountDescriptionForApplication(applicationName, hasAlreadyLinked) {
  const tmp = importDefault(dependencyMap[5]);
  const intl = hasAlreadyLinked(dependencyMap[4]).intl;
  return intl.format(hasAlreadyLinked.hasAlreadyLinked ? tmp.yqAKVO : tmp.vyAtfo, { applicationName: applicationName.name, platforms_info: getNotSupportedSentence(applicationName.id) });
};
