// Module ID: 12341
// Function ID: 94414
// Name: PricingSubheadingCopy
// Dependencies: []
// Exports: default

// Module 12341 (PricingSubheadingCopy)
function PricingSubheadingCopy() {
  let interval;
  let intervalCount;
  const tmp = callback4();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = importDefault(dependencyMap[13]);
  const hasBoostDiscountResult = obj1.hasBoostDiscount(stateFromStores);
  let obj2 = arg1(dependencyMap[12]);
  const items1 = [closure_6];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => locale.locale);
  let obj3 = arg1(dependencyMap[14]);
  const subscriptionPlansLoaded = obj3.useSubscriptionPlansLoaded();
  let obj4 = arg1(dependencyMap[12]);
  const items2 = [closure_9];
  const importDefault = obj4.useStateFromStores(items2, () => premiumTypeSubscription.getPremiumTypeSubscription());
  let obj5 = arg1(dependencyMap[12]);
  const items3 = [closure_8];
  let stateFromStores2 = obj5.useStateFromStores(items3, () => {
    let value;
    if (null != lib) {
      value = closure_8.get(lib.planId);
    }
    return value;
  });
  const effect = React.useEffect(() => {
    if (!store.isReady()) {
      lib(str3[15]).wait(() => callback(closure_2[16]).loadProducts());
      const obj = lib(str3[15]);
    }
  }, []);
  let obj6 = arg1(dependencyMap[12]);
  const items4 = [ready];
  const tmp8 = callback(obj6.useStateFromStoresArray(items4, () => {
    const items = [store.getProduct(tmp(str3[17]).ProductIds.PREMIUM_GUILD_1_MONTHLY), store.getProduct(tmp(str3[17]).ProductIds.PREMIUM_TIER_2_MONTHLY), store.getProduct(tmp(str3[17]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY), store.getProduct(tmp(str3[17]).ProductIds.PREMIUM_TIER_2_YEARLY), store.getProduct(tmp(str3[17]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY)];
    return items;
  }), 5);
  const first = tmp8[0];
  if (null == stateFromStores2) {
    stateFromStores2 = closure_13[closure_12.PREMIUM_MONTH_GUILD];
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
        if (interval === constants.YEAR) {
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
        let obj7 = arg1(dependencyMap[19]);
        let result = diff1;
        if (tmp26) {
          let obj8 = arg1(dependencyMap[20]);
          result = obj8.convertToMajorCurrencyUnits(diff1, CurrencyCodes.USD);
        }
        let obj9 = arg1(dependencyMap[19]);
        const tmp26 = obj7.isAndroid() && null != diff1;
        let result1 = tmp20;
        if (tmp33) {
          let obj10 = arg1(dependencyMap[20]);
          result1 = obj10.convertToMajorCurrencyUnits(tmp20, CurrencyCodes.USD);
        }
        let str2 = "...";
        let str3 = "...";
        if (null != result) {
          let obj11 = arg1(dependencyMap[21]);
          let obj12 = arg1(dependencyMap[21]);
          obj = { convertToMajorUnits: false };
          str3 = obj11.formatRate(obj12.formatPrice(result, formatted, obj), interval, intervalCount);
        }
        const dependencyMap = str3;
        if (null != result1) {
          const obj15 = arg1(dependencyMap[21]);
          obj = { convertToMajorUnits: false };
          str2 = obj15.formatRate(arg1(dependencyMap[21]).formatPrice(result1, formatted, obj), interval, intervalCount);
          const obj16 = arg1(dependencyMap[21]);
        }
        const callback = str2;
        if (result !== result1) {
          obj1 = { style: tmp.cardText };
          const intl2 = arg1(dependencyMap[22]).intl;
          obj2 = { price: str3, originalPrice: str2 };
          obj1.accessibilityLabel = intl2.formatToPlainString(arg1(dependencyMap[22]).t.lEIwDw, obj2);
          obj1.variant = "text-md/medium";
          const intl3 = arg1(dependencyMap[22]).intl;
          obj3 = {
            price: str3,
            originalPrice: str2,
            originalPriceHook(children) {
                      let tmp = null;
                      if (str3 !== str2) {
                        const obj = { Promise: null, marginTop: null, flags: null, style: tmp.originalPrice, children };
                        tmp = callback(tmp(str3[18]).Text, obj, arg1);
                      }
                      return tmp;
                    }
          };
          obj1.children = intl3.format(arg1(dependencyMap[22]).t.eRSsbf, obj3);
          obj4 = obj1;
        } else {
          obj4 = { style: tmp.cardText, variant: "text-md/medium" };
          const intl = arg1(dependencyMap[22]).intl;
          obj5 = { price: str3 };
          obj4.children = intl.format(arg1(dependencyMap[22]).t.Mmf63F, obj5);
        }
        const tmp42Result = callback2(arg1(dependencyMap[18]).Text, obj4);
        const tmp33 = obj9.isAndroid() && null != tmp20;
        const tmp42 = callback2;
        if (obj23.hasFreeBoosts(stateFromStores)) {
          if (hasBoostDiscountResult) {
            if (obj24.isPremium(stateFromStores, closure_14.TIER_2)) {
              obj6 = {};
              obj7 = { style: tmp.cardText, variant: "text-md/medium" };
              const intl5 = arg1(dependencyMap[22]).intl;
              obj8 = { freeSubscriptionCount: closure_16, discountPercent: arg1(dependencyMap[23]).formatPercent(stateFromStores1, closure_17 / 100) };
              obj7.children = intl5.format(arg1(dependencyMap[22]).t.ZikTt+, obj8);
              const items5 = [callback2(arg1(dependencyMap[18]).Text, obj7), tmp42Result];
              obj6.children = items5;
              let tmp55 = callback3(closure_19, obj6);
              const obj33 = arg1(dependencyMap[23]);
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
            const intl4 = arg1(dependencyMap[22]).intl;
            obj11 = { discountPercent: arg1(dependencyMap[23]).formatPercent(stateFromStores1, closure_17 / 100) };
            obj10.children = intl4.format(arg1(dependencyMap[22]).t.XVMAKU, obj11);
            const items6 = [callback2(arg1(dependencyMap[18]).Text, obj10), tmp42Result];
            obj9.children = items6;
            tmp55 = callback3(closure_19, obj9);
            const obj29 = arg1(dependencyMap[23]);
          }
          const obj25 = importDefault(dependencyMap[13]);
        }
        const obj23 = importDefault(dependencyMap[13]);
      }
    }
  }
  obj12 = { style: tmp.cardText };
  return callback2(arg1(dependencyMap[18]).Text, obj12);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
const CurrencyCodes = arg1(dependencyMap[8]).CurrencyCodes;
({ SubscriptionPlans: closure_12, SubscriptionPlanInfo: closure_13, PremiumTypes: closure_14, SubscriptionIntervalTypes: closure_15, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_16, GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_17 } = arg1(dependencyMap[9]));
const tmp2 = arg1(dependencyMap[9]);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = arg1(dependencyMap[10]));
const tmp3 = arg1(dependencyMap[10]);
let closure_21 = arg1(dependencyMap[11]).createStyles({ title: { marginTop: 16 }, pricingSection: { alignItems: "center" }, originalPrice: { textDecorationLine: "line-through" }, cardText: {} });
const obj = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("components_native/premium/PremiumSubscriptionPricingUpsell.tsx");

export default function PremiumSubscriptionPricingUpsell() {
  const tmp = callback4();
  let obj = arg1(dependencyMap[14]);
  obj = { style: tmp.pricingSection };
  const subscriptionPlansLoaded = obj.useSubscriptionPlansLoaded();
  obj = { style: tmp.title };
  const intl = arg1(dependencyMap[22]).intl;
  obj.children = intl.string(arg1(dependencyMap[22]).t.3x1PFE);
  const items = [callback2(arg1(dependencyMap[18]).Text, obj), ];
  let tmp5 = null;
  if (subscriptionPlansLoaded) {
    tmp5 = callback2(PricingSubheadingCopy, {});
  }
  items[1] = tmp5;
  obj.children = items;
  return closure_20(View, obj);
};
