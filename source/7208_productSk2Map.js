// Module ID: 7208
// Function ID: 58087
// Name: productSk2Map
// Dependencies: [2013265948]

// Module 7208 (productSk2Map)
arg5.productSk2Map = function productSk2Map(displayName) {
  let currency;
  let description;
  let displayPrice;
  let price;
  ({ description, price, currency, displayPrice } = displayName);
  return { title: displayName.displayName, productId: String(displayName.id), description, type: "iap", price: String(price), localizedPrice: displayPrice, currency };
};
arg5.subscriptionSk2Map = function subscriptionSk2Map(subscription) {
  let currency;
  let description;
  let displayName;
  let displayPrice;
  let id;
  let price;
  subscription = subscription.subscription;
  const obj = { platform: arg1(arg6[0]).SubscriptionPlatform.ios, title: displayName, productId: String(id), description, type: "subs", price: String(price), localizedPrice: displayPrice, currency };
  ({ id, description, displayName, price, currency, displayPrice } = subscription);
  let value;
  if (null != subscription) {
    if (null != subscription.subscriptionPeriod) {
      value = iter.value;
    }
  }
  obj.subscriptionPeriodNumberIOS = "" + value;
  let formatted;
  if (null != subscription) {
    const subscriptionPeriod = subscription.subscriptionPeriod;
    if (null != subscriptionPeriod) {
      let str = subscriptionPeriod.unit;
      formatted = str.toUpperCase();
    }
  }
  obj.subscriptionPeriodUnitIOS = formatted;
  displayPrice = undefined;
  if (null != subscription) {
    const introductoryOffer = subscription.introductoryOffer;
    if (null != introductoryOffer) {
      displayPrice = introductoryOffer.displayPrice;
    }
  }
  obj.introductoryPriceAsAmountIOS = displayPrice;
  let formatted1;
  if (null != subscription) {
    const introductoryOffer2 = subscription.introductoryOffer;
    if (null != introductoryOffer2) {
      formatted1 = introductoryOffer2.paymentMode.toUpperCase();
      const str2 = introductoryOffer2.paymentMode;
    }
  }
  obj.introductoryPricePaymentModeIOS = formatted1;
  str = undefined;
  if (null != subscription) {
    const introductoryOffer3 = subscription.introductoryOffer;
    if (null != introductoryOffer3) {
      if (null != introductoryOffer3.period) {
        if (null != iter2.value) {
          str = str3.toString();
        }
      }
    }
  }
  obj.introductoryPriceNumberOfPeriodsIOS = str;
  let unit;
  if (null != subscription) {
    const introductoryOffer4 = subscription.introductoryOffer;
    if (null != introductoryOffer4) {
      const period = introductoryOffer4.period;
      if (null != period) {
        unit = period.unit;
      }
    }
  }
  obj.introductoryPriceSubscriptionPeriodIOS = unit;
  return obj;
};
arg5.transactionSk2ToPurchaseMap = function transactionSk2ToPurchaseMap(jsonRepresentation) {
  let appAccountToken;
  let id;
  let originalID;
  let originalPurchaseDate;
  let productID;
  let purchaseDate;
  let purchasedQuantity;
  let verificationResult;
  ({ verificationResult, appAccountToken } = jsonRepresentation);
  ({ id, originalPurchaseDate, productID, purchaseDate, purchasedQuantity, originalID } = jsonRepresentation);
  const transactionReason = JSON.parse(jsonRepresentation.jsonRepresentation).transactionReason;
  while (true) {
    let obj = { productId: productID };
    let tmp = globalThis;
    let _String = String;
    obj.transactionId = String(id);
    obj.transactionDate = purchaseDate;
    let str = "";
    obj.transactionReceipt = "";
    obj.purchaseToken = "";
    obj.quantityIOS = purchasedQuantity;
    obj.originalTransactionDateIOS = originalPurchaseDate;
    obj.originalTransactionIdentifierIOS = originalID;
    let tmp2 = verificationResult;
    let tmp3 = null;
    let str2 = "";
    if (null == verificationResult) {
      break;
    } else {
      str2 = verificationResult;
      // break
    }
    obj.verificationResultIOS = str2;
    let tmp4 = appAccountToken;
    let tmp5 = str;
    if (null != appAccountToken) {
      tmp5 = appAccountToken;
    }
    obj.appAccountToken = tmp5;
    let tmp6 = transactionReason;
    if (null != transactionReason) {
      str = transactionReason;
    }
    obj.transactionReasonIOS = str;
    return obj;
  }
};
arg5.offerSk2Map = function offerSk2Map(arg0) {
  let timestamp;
  if (arg0) {
    const obj = {};
    ({ identifier: obj.offerID, keyIdentifier: obj.keyID, nonce: obj.nonce, signature: obj.signature, timestamp } = arg0);
    obj.timestamp = timestamp.toString();
    return obj;
  }
};
