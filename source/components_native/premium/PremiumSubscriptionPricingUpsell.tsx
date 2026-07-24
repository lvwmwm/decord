// Module ID: 12520
// Function ID: 96951
// Name: PricingSubheadingCopy
// Dependencies: [57, 31, 27, 1921, 1849, 3781, 3782, 5619, 653, 1851, 33, 4130, 566, 3776, 12404, 686, 6658, 5622, 4126, 477, 5617, 5616, 1212, 1827, 2]
// Exports: default

// Module 12520 (PricingSubheadingCopy)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import { CurrencyCodes } from "ME";
import GuildFeatures from "GuildFeatures";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let require = arg1;
function PricingSubheadingCopy() {
  let interval;
  let intervalCount;
  let tmp = callback3();
  const require = tmp;
  let obj = require(str3[12]);
  let items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getCurrentUser());
  let obj1 = importDefault(str3[13]);
  const hasBoostDiscountResult = obj1.hasBoostDiscount(stateFromStores);
  let obj2 = require(str3[12]);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_6.locale);
  let obj3 = require(str3[14]);
  const subscriptionPlansLoaded = obj3.useSubscriptionPlansLoaded();
  let obj4 = require(str3[12]);
  const items2 = [closure_9];
  importDefault = obj4.useStateFromStores(items2, () => outer1_9.getPremiumTypeSubscription());
  let obj5 = require(str3[12]);
  const items3 = [closure_8];
  let stateFromStores2 = obj5.useStateFromStores(items3, () => {
    let value;
    if (null != lib) {
      value = outer1_8.get(lib.planId);
    }
    return value;
  });
  const effect = React.useEffect(() => {
    if (!outer1_10.isReady()) {
      lib(str3[15]).wait(() => callback(str3[16]).loadProducts());
      const obj = lib(str3[15]);
    }
  }, []);
  let obj6 = require(str3[12]);
  const items4 = [ready];
  const tmp8 = str2(obj6.useStateFromStoresArray(items4, () => {
    const items = [outer1_10.getProduct(tmp(str3[17]).ProductIds.PREMIUM_GUILD_1_MONTHLY), outer1_10.getProduct(tmp(str3[17]).ProductIds.PREMIUM_TIER_2_MONTHLY), outer1_10.getProduct(tmp(str3[17]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY), outer1_10.getProduct(tmp(str3[17]).ProductIds.PREMIUM_TIER_2_YEARLY), outer1_10.getProduct(tmp(str3[17]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY)];
    return items;
  }), 5);
  const first = tmp8[0];
  if (null == stateFromStores2) {
    stateFromStores2 = table[constants.PREMIUM_MONTH_GUILD];
  }
  ({ interval, intervalCount } = stateFromStores2);
  if (subscriptionPlansLoaded) {
    if (ready.isReady()) {
      if (null != first) {
        if (null != first) {
          const formatted = first.currencyCode.toLowerCase();
          const str = first.currencyCode;
        }
        if (null != first) {
          let price = first.price;
        }
        if (interval === constants2.YEAR) {
          let diff = null;
          if (null != tmp13) {
            diff = null;
            if (null != tmp12) {
              diff = tmp13.price - tmp12.price;
            }
          }
          let diff1 = diff;
          let tmp20 = diff;
        } else {
          diff1 = price;
          tmp20 = price;
          if (hasBoostDiscountResult) {
            diff1 = price;
            tmp20 = price;
            if (null != price) {
              price = undefined;
              if (null != tmp11) {
                price = tmp11.price;
              }
              let num = 0;
              if (null != price) {
                num = price;
              }
              let price1;
              if (null != tmp10) {
                price1 = tmp10.price;
              }
              let num2 = 0;
              if (null != price1) {
                num2 = price1;
              }
              diff1 = num - num2;
              tmp20 = price;
            }
          }
        }
        let obj7 = require(str3[19]);
        let result = diff1;
        if (tmp26) {
          let obj8 = require(str3[20]);
          result = obj8.convertToMajorCurrencyUnits(diff1, CurrencyCodes.USD);
        }
        let obj9 = require(str3[19]);
        tmp26 = obj7.isAndroid() && null != diff1;
        let result1 = tmp20;
        if (tmp33) {
          let obj10 = require(str3[20]);
          result1 = obj10.convertToMajorCurrencyUnits(tmp20, CurrencyCodes.USD);
        }
        str2 = "...";
        str3 = "...";
        if (null != result) {
          let obj11 = require(str3[21]);
          let obj12 = require(str3[21]);
          obj = { convertToMajorUnits: false };
          str3 = obj11.formatRate(obj12.formatPrice(result, formatted, obj), interval, intervalCount);
        }
        if (null != result1) {
          const obj15 = require(str3[21]);
          obj = { convertToMajorUnits: false };
          str2 = obj15.formatRate(require(str3[21]).formatPrice(result1, formatted, obj), interval, intervalCount);
          const obj16 = require(str3[21]);
        }
        if (result !== result1) {
          obj1 = { style: tmp.cardText };
          const intl2 = require(str3[22]).intl;
          obj2 = { price: str3, originalPrice: str2 };
          obj1.accessibilityLabel = intl2.formatToPlainString(require(str3[22]).t.lEIwDw, obj2);
          obj1.variant = "text-md/medium";
          const intl3 = require(str3[22]).intl;
          obj3 = {
            price: str3,
            originalPrice: str2,
            originalPriceHook(children) {
                      let tmp = null;
                      if (str3 !== str2) {
                        const obj = { style: tmp.originalPrice, variant: "text-sm/medium", color: "text-muted", children };
                        tmp = outer1_18(tmp(str3[18]).Text, obj, arg1);
                      }
                      return tmp;
                    }
          };
          obj1.children = intl3.format(require(str3[22]).t.eRSsbf, obj3);
          obj4 = obj1;
        } else {
          obj4 = { style: tmp.cardText, variant: "text-md/medium" };
          const intl = require(str3[22]).intl;
          obj5 = { price: str3 };
          obj4.children = intl.format(require(str3[22]).t.Mmf63F, obj5);
        }
        const tmp42Result = callback(require(str3[18]).Text, obj4);
        tmp33 = obj9.isAndroid() && null != tmp20;
        const tmp42 = callback;
        if (obj23.hasFreeBoosts(stateFromStores)) {
          if (hasBoostDiscountResult) {
            if (obj24.isPremium(stateFromStores, closure_14.TIER_2)) {
              obj6 = {};
              obj7 = { style: tmp.cardText, variant: "text-md/medium" };
              const intl5 = require(str3[22]).intl;
              obj8 = { freeSubscriptionCount: closure_16, discountPercent: require(str3[23]).formatPercent(stateFromStores1, closure_17 / 100) };
              obj7.children = intl5.format(require(str3[22]).t["ZikTt+"], obj8);
              const items5 = [callback(require(str3[18]).Text, obj7), tmp42Result];
              obj6.children = items5;
              let tmp55 = callback2(closure_19, obj6);
              const obj33 = require(str3[23]);
            }
            return tmp55;
          }
        }
        tmp55 = tmp42Result;
        if (hasBoostDiscountResult) {
          tmp55 = tmp42Result;
          if (obj25.isPremium(stateFromStores, closure_14.TIER_1)) {
            obj9 = {};
            obj10 = { style: tmp.cardText, variant: "text-md/medium" };
            const intl4 = require(str3[22]).intl;
            obj11 = { discountPercent: require(str3[23]).formatPercent(stateFromStores1, closure_17 / 100) };
            obj10.children = intl4.format(require(str3[22]).t.XVMAKU, obj11);
            const items6 = [callback(require(str3[18]).Text, obj10), tmp42Result];
            obj9.children = items6;
            tmp55 = callback2(closure_19, obj9);
            const obj29 = require(str3[23]);
          }
          obj25 = importDefault(str3[13]);
        }
        obj23 = importDefault(str3[13]);
      }
    }
  }
  obj12 = { style: tmp.cardText, variant: "text-md/medium", children: "..." };
  return callback(require(str3[18]).Text, obj12);
}
({ SubscriptionPlans: closure_12, SubscriptionPlanInfo: closure_13, PremiumTypes: closure_14, SubscriptionIntervalTypes: closure_15, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_16, GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_17 } = GuildFeatures);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = jsxProd);
let closure_21 = _createForOfIteratorHelperLoose.createStyles({ title: { marginTop: 16 }, pricingSection: { alignItems: "center" }, originalPrice: { textDecorationLine: "line-through" }, cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" } });
let result = require("get ActivityIndicator").fileFinishedImporting("components_native/premium/PremiumSubscriptionPricingUpsell.tsx");

export default function PremiumSubscriptionPricingUpsell() {
  const tmp = callback3();
  let obj = require(12404) /* _createForOfIteratorHelperLoose */;
  obj = { style: tmp.pricingSection };
  const subscriptionPlansLoaded = obj.useSubscriptionPlansLoaded();
  obj = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["3x1PFE"]);
  const items = [callback(require(4126) /* Text */.Text, obj), ];
  let tmp5 = null;
  if (subscriptionPlansLoaded) {
    tmp5 = callback(PricingSubheadingCopy, {});
  }
  items[1] = tmp5;
  obj.children = items;
  return closure_20(View, obj);
};
