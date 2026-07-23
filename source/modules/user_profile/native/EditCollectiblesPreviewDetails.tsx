// Module ID: 7877
// Function ID: 62719
// Name: EditCollectiblesPreviewDescription
// Dependencies: [31, 27, 1921, 33, 4130, 566, 3776, 6786, 3800, 4126, 1212, 7857, 2]
// Exports: default

// Module 7877 (EditCollectiblesPreviewDescription)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
let closure_7;
const require = arg1;
function EditCollectiblesPreviewDescription(arg0) {
  let nitroJoinCTA;
  let nitroUpgradeCTA;
  let product;
  let purchase;
  let user;
  ({ user, purchase } = arg0);
  ({ product, nitroJoinCTA, nitroUpgradeCTA } = arg0);
  let obj = require(566) /* initialize */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.locale);
  let obj1 = importDefault(3776);
  const canUseCollectiblesResult = obj1.canUseCollectibles(user);
  let obj2 = require(6786) /* getPriceForCollectiblesProduct */;
  let result = obj2.isPremiumCollectiblesProduct(product);
  if (!result) {
    let obj3 = require(6786) /* getPriceForCollectiblesProduct */;
    result = obj3.isPremiumCollectiblesPurchase(purchase);
  }
  let result1 = !canUseCollectiblesResult;
  if (result1) {
    let obj4 = require(6786) /* getPriceForCollectiblesProduct */;
    result1 = obj4.isPremiumCollectiblesPurchase(purchase);
  }
  if (null != purchase) {
    if (!result1) {
      let expiresAt;
      if (null != purchase) {
        expiresAt = purchase.expiresAt;
      }
      let diffAsUnitsResult = null;
      if (null != expiresAt) {
        let obj5 = require(3800) /* resetCache */;
        const _Date = Date;
        const date = new Date();
        diffAsUnitsResult = obj5.diffAsUnits(date, purchase.expiresAt);
      }
      obj = {};
      let tmp20 = null != diffAsUnitsResult;
      if (tmp20) {
        obj = { variant: "text-sm/medium", color: "text-default" };
        const intl = require(1212) /* getSystemLocale */.intl;
        obj1 = { days: diffAsUnitsResult.days.toString() };
        obj.children = intl.format(require(1212) /* getSystemLocale */.t.Io7ozn, obj1);
        tmp20 = callback(require(4126) /* Text */.Text, obj);
        const str = diffAsUnitsResult.days;
      }
      const items1 = [tmp20, , ];
      obj2 = { variant: "text-sm/medium", color: "text-default" };
      const intl2 = require(1212) /* getSystemLocale */.intl;
      obj3 = {};
      let toLocaleDateStringResult;
      if (null != purchase) {
        const purchasedAt = purchase.purchasedAt;
        toLocaleDateStringResult = purchasedAt.toLocaleDateString(stateFromStores, { month: "long", year: "numeric" });
      }
      obj3.date = toLocaleDateStringResult;
      obj2.children = intl2.format(require(1212) /* getSystemLocale */.t.gW9R4B, obj3);
      items1[1] = callback(require(4126) /* Text */.Text, obj2);
      let expiresAt1;
      if (null != purchase) {
        expiresAt1 = purchase.expiresAt;
      }
      let tmp29 = null != expiresAt1;
      if (tmp29) {
        obj4 = { variant: "text-sm/medium", color: "text-default" };
        const intl3 = require(1212) /* getSystemLocale */.intl;
        obj5 = {};
        expiresAt = purchase.expiresAt;
        obj5.date = expiresAt.toLocaleDateString(stateFromStores, { minute: "numeric", hour: "numeric", day: "numeric", month: "long", year: "numeric" });
        obj4.children = intl3.format(require(1212) /* getSystemLocale */.t.eZSTa5, obj5);
        tmp29 = callback(require(4126) /* Text */.Text, obj4);
      }
      items1[2] = tmp29;
      obj.children = items1;
      return closure_7(closure_6, obj);
    }
  }
  if (result) {
    if (canUseCollectiblesResult) {
      const obj6 = { variant: "text-sm/medium", color: "text-default" };
      const intl5 = require(1212) /* getSystemLocale */.intl;
      obj6.children = intl5.string(require(1212) /* getSystemLocale */.t.hmyYK8);
      let tmp39Result = callback(require(4126) /* Text */.Text, obj6);
    } else {
      const obj15 = importDefault(3776);
      const Text = require(4126) /* Text */.Text;
      const obj7 = { variant: "text-sm/medium", color: "text-default" };
      if (isPremiumResult) {
        obj7.children = nitroUpgradeCTA;
        tmp39Result = tmp39(Text, obj7);
      } else {
        obj7.children = nitroJoinCTA;
        tmp39Result = tmp39(Text, obj7);
      }
      isPremiumResult = importDefault(3776).isPremium(user);
    }
  } else {
    const obj8 = { variant: "text-sm/medium", color: "text-default" };
    const intl4 = require(1212) /* getSystemLocale */.intl;
    obj8.children = intl4.string(require(1212) /* getSystemLocale */.t.fEGjVQ);
    return callback(require(4126) /* Text */.Text, obj8);
  }
}
({ jsx: closure_5, Fragment: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ productDetailsContainer: { width: "100%", marginTop: 16, alignItems: "center", gap: 2 } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/native/EditCollectiblesPreviewDetails.tsx");

export default function EditCollectiblesPreviewDetails(previewSkuId) {
  let nitroJoinCTA;
  let nitroUpgradeCTA;
  let product;
  let purchase;
  let user;
  previewSkuId = previewSkuId.previewSkuId;
  ({ user, nitroJoinCTA, nitroUpgradeCTA } = previewSkuId);
  const tmp = callback2();
  ({ product, purchase } = importDefault(7857)(previewSkuId));
  let tmp4Result = null;
  if (null != previewSkuId) {
    if (null != product) {
      let obj = { style: tmp.productDetailsContainer };
      obj = { variant: "text-md/bold", color: "text-default" };
      let name;
      if (null != product) {
        name = product.name;
      }
      if (null == name) {
        let name1;
        if (null != purchase) {
          name1 = purchase.name;
        }
        name = name1;
      }
      obj.children = name;
      const items = [callback(require(4126) /* Text */.Text, obj), ];
      obj = { user, product, purchase, nitroJoinCTA, nitroUpgradeCTA };
      items[1] = callback(EditCollectiblesPreviewDescription, obj);
      obj.children = items;
      tmp4Result = closure_7(View, obj);
      const tmp4 = closure_7;
      const tmp5 = View;
      const tmp6 = callback;
    } else {
      tmp4Result = null;
    }
  }
  return tmp4Result;
};
