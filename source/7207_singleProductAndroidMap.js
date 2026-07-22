// Module ID: 7207
// Function ID: 58048
// Name: singleProductAndroidMap
// Dependencies: []

// Module 7207 (singleProductAndroidMap)
arg5.AndroidPurchaseState = { purchased: 0, [0]: "purchased", canceled: 1, [1]: "canceled", pending: 2, [2]: "pending" };
arg5.AndroidPurchaseType = { test: 0, [0]: "test", promo: 1, [1]: "promo", rewarded: 2, [2]: "rewarded" };
arg5.AndroidConsumptionState = { yet: 0, [0]: "yet", consumed: 1, [1]: "consumed" };
arg5.AndroidAcknowledgementState = { yet: 0, [0]: "yet", acknowledged: 1, [1]: "acknowledged" };
arg5.FeatureType = { IN_APP_MESSAGING: "IN_APP_MESSAGING", PRICE_CHANGE_CONFIRMATION: "PRICE_CHANGE_CONFIRMATION", PRODUCT_DETAILS: "PRODUCT_DETAILS", SUBSCRIPTIONS: "SUBSCRIPTIONS", SUBSCRIPTIONS_UPDATE: "SUBSCRIPTIONS_UPDATE" };
arg5.singleProductAndroidMap = function singleProductAndroidMap(oneTimePurchaseOfferDetails) {
  const obj = {};
  oneTimePurchaseOfferDetails = oneTimePurchaseOfferDetails.oneTimePurchaseOfferDetails;
  let formattedPrice;
  if (null != oneTimePurchaseOfferDetails) {
    formattedPrice = oneTimePurchaseOfferDetails.formattedPrice;
  }
  if (null == formattedPrice) {
    formattedPrice = oneTimePurchaseOfferDetails.price;
  }
  obj.price = formattedPrice;
  const oneTimePurchaseOfferDetails2 = oneTimePurchaseOfferDetails.oneTimePurchaseOfferDetails;
  let formattedPrice1;
  if (null != oneTimePurchaseOfferDetails2) {
    formattedPrice1 = oneTimePurchaseOfferDetails2.formattedPrice;
  }
  if (null == formattedPrice1) {
    formattedPrice1 = oneTimePurchaseOfferDetails.price;
  }
  obj.localizedPrice = formattedPrice1;
  const oneTimePurchaseOfferDetails3 = oneTimePurchaseOfferDetails.oneTimePurchaseOfferDetails;
  let priceCurrencyCode;
  if (null != oneTimePurchaseOfferDetails3) {
    priceCurrencyCode = oneTimePurchaseOfferDetails3.priceCurrencyCode;
  }
  if (null == priceCurrencyCode) {
    priceCurrencyCode = oneTimePurchaseOfferDetails.currency;
  }
  obj.currency = priceCurrencyCode;
  return Object.assign({}, oneTimePurchaseOfferDetails, obj);
};
