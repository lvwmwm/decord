// Module ID: 13076
// Function ID: 13077
// Name: PremiumSubscriptionPricingUpsell
// Dependencies: [32, 19, 17, 2112, 1372, 4493, 4494, 6658, 1074, 1374, 21, 4836, 504, 4488, 12939, 573, 6839, 6661, 4832, 1364, 6656, 6655, 1115, 1882, 2]
// Exports: default

// Module 13076 (PremiumSubscriptionPricingUpsell)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1074 */;
import intl6 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import useSubscriptionPlansLoaded from "useSubscriptionPlansLoaded" /* 12939 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import UserStore from "UserStore" /* 1372 */;
import SubscriptionPlanStore from "SubscriptionPlanStore" /* 4493 */;
import SubscriptionStore from "SubscriptionStore" /* 4494 */;
import IAPStore from "IAPStore" /* 6658 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let closure_12;
let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_19;
let closure_20;
let map1;
function PricingSubheadingCopy() {
  let XVMAKU;
  let closure_0;
  let closure_1;
  let currentUser;
  let format;
  let format2;
  let interval;
  let intervalCount;
  let intl;
  let intl2;
  let intl3;
  let items5;
  let items6;
  let locale;
  let obj10;
  let obj11;
  let obj13;
  let obj16;
  let obj19;
  let premiumTypeSubscription;
  let prop;
  let str2;
  let str3;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp16;
  let tmp2Result17;
  let tmp2Result18;
  const f97419 = () => {
    const items = [IAPStore.getProduct(closure_0(str3[17]).ProductIds.PREMIUM_GUILD_1_MONTHLY), IAPStore.getProduct(closure_0(str3[17]).ProductIds.PREMIUM_TIER_2_MONTHLY), IAPStore.getProduct(closure_0(str3[17]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_MONTHLY), IAPStore.getProduct(closure_0(str3[17]).ProductIds.PREMIUM_TIER_2_YEARLY), IAPStore.getProduct(closure_0(str3[17]).ProductIds.PREMIUM_TIER_2_PREMIUM_GUILD_1_YEARLY)];
    return items;
  };
  let tmp = closure_21();
  _require = tmp;
  let obj = require("get initialized");
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = require("PremiumUtils");
  const hasBoostDiscountResult = obj2.hasBoostDiscount(stateFromStores);
  const items1 = [LocaleStore];
  const obj3 = require("get initialized");
  const stateFromStores1 = obj3.useStateFromStores(items1, () => locale.locale);
  const obj4 = require("useSubscriptionPlansLoaded");
  const subscriptionPlansLoaded = obj4.useSubscriptionPlansLoaded();
  const items2 = [SubscriptionStore];
  const obj5 = require("get initialized");
  importDefault = obj5.useStateFromStores(items2, () => premiumTypeSubscription.getPremiumTypeSubscription());
  const items3 = [SubscriptionPlanStore];
  const obj6 = require("get initialized");
  let stateFromStores2 = obj6.useStateFromStores(items3, () => {
    let value;
    if (null != closure_1) {
      value = SubscriptionPlanStore.get(tmp.planId);
    }
    return value;
  });
  const effect = react.useEffect(() => {
    if (!IAPStore.isReady()) {
      let obj = closure_1(str3[15]);
      obj.wait(() => {
        const obj = closure_1_1(str3[16]);
        return obj.loadProducts();
      });
    }
  }, []);
  const items4 = [IAPStore];
  const obj7 = require("get initialized");
  [tmp12, tmp13, tmp14, tmp15, tmp16] = str2(obj7.useStateFromStoresArray(items4, f97419), 5);
  str2(obj7.useStateFromStoresArray(items4, f97419), 5);
  const obj8 = IAPStore;
  if (stateFromStores2 == null) {
    stateFromStores2 = closure_13[constants.PREMIUM_MONTH_GUILD];
  }
  ({ interval, intervalCount } = stateFromStores2);
  if (subscriptionPlansLoaded) {
    if (obj8.isReady()) {
      if (null != tmp12) {
        let formatted;
        let price;
        let tmp22;
        let diff1;
        let obj12;
        let tmp36;
        if (tmp12 != null) {
          const str = tmp12.currencyCode;
          formatted = str.toLowerCase();
        }
        if (tmp12 != null) {
          price = tmp12.price;
        }
        if (interval === constants2.YEAR) {
          let diff = null;
          if (null != tmp16) {
            diff = null;
            if (null != tmp15) {
              diff = tmp16.price - tmp15.price;
            }
          }
          tmp22 = diff;
          diff1 = diff;
        } else {
          tmp22 = price;
          diff1 = price;
          const tmp21 = hasBoostDiscountResult && null != price;
          if (tmp21) {
            let num;
            if (tmp14 != null) {
              num = tmp14.price;
            }
            if (num == null) {
              num = 0;
            }
            let num2;
            if (tmp13 != null) {
              num2 = tmp13.price;
            }
            if (num2 == null) {
              num2 = 0;
            }
            diff1 = num - num2;
            tmp22 = price;
          }
        }
        let result = diff1;
        const tmp2Result = require("PlatformUtils");
        const tmp25 = tmp2Result.isAndroid() && null != diff1;
        if (tmp25) {
          const tmp2Result10 = require("utils/PriceUtils");
          result = tmp2Result10.convertToMajorCurrencyUnits(diff1, CurrencyCodes.USD);
        }
        let result1 = tmp22;
        const tmp2Result11 = require("PlatformUtils");
        const tmp28 = tmp2Result11.isAndroid() && null != tmp22;
        if (tmp28) {
          const tmp2Result12 = require("utils/PriceUtils");
          result1 = tmp2Result12.convertToMajorCurrencyUnits(tmp22, CurrencyCodes.USD);
        }
        str2 = "...";
        str3 = "...";
        if (null != result) {
          const formatRate = tmp2(tmp3[21]).formatRate;
          require("PriceUtils");
          const tmp2Result14 = require("PriceUtils");
          str3 = formatRate(tmp2Result14.formatPrice(result, formatted, { convertToMajorUnits: false }), interval, intervalCount);
        }
        if (null != result1) {
          const formatRate2 = tmp2(tmp3[21]).formatRate;
          require("PriceUtils");
          const tmp2Result16 = require("PriceUtils");
          str2 = formatRate2(tmp2Result16.formatPrice(result1, formatted, { convertToMajorUnits: false }), interval, intervalCount);
        }
        const Text = tmp2(tmp3[18]).Text;
        if (result !== result1) {
          const obj9 = { style: tmp.cardText, accessibilityLabel: intl2.formatToPlainString(require("intl").t.lEIwDw, obj10), variant: "text-md/medium", children: intl3.format(require("intl").t.eRSsbf, obj11) };
          intl2 = tmp2(tmp3[22]).intl;
          obj10 = { price: str3, originalPrice: str2 };
          intl3 = tmp2(tmp3[22]).intl;
          obj12 = obj9;
          obj11 = {
            price: str3,
            originalPrice: str2,
            originalPriceHook(children, arg1) {
                      let tmp = null;
                      if (str3 !== str2) {
                        const obj = { style: closure_0.originalPrice, variant: "text-sm/medium", color: "text-muted", children };
                        tmp = authStore4(Text_Text.Text, obj, arg1);
                      }
                      return tmp;
                    }
          };
        } else {
          obj12 = { style: tmp.cardText, variant: "text-md/medium", children: intl.format(tmp2(tmp3[22]).t.Mmf63F, obj13) };
          intl = tmp2(tmp3[22]).intl;
          obj13 = { price: str3 };
        }
        const tmp33Result = closure_18(Text, obj12);
        const tmp5Result = require("PremiumUtils");
        if (tmp5Result.hasFreeBoosts(stateFromStores)) {
          if (hasBoostDiscountResult) {
            const tmp5Result3 = require("PremiumUtils");
            if (tmp5Result3.isPremium(stateFromStores, closure_14.TIER_2)) {
              const obj14 = { children: items5 };
              const obj15 = { style: tmp.cardText, variant: "text-md/medium", children: format2(prop, obj16) };
              const Text3 = tmp2(tmp3[18]).Text;
              const intl5 = tmp2(tmp3[22]).intl;
              format2 = intl5.format;
              obj16 = { freeSubscriptionCount, discountPercent: tmp2Result17.formatPercent(stateFromStores1, closure_17 / 100) };
              prop = tmp2(tmp3[22]).t["ZikTt+"];
              tmp2Result17 = require("NumberUtils");
              items5 = [closure_18(Text3, obj15), tmp33Result];
              tmp36 = closure_20(closure_19, obj14);
            }
            return tmp36;
          }
        }
        tmp36 = tmp33Result;
        if (hasBoostDiscountResult) {
          tmp36 = tmp33Result;
          const tmp5Result4 = require("PremiumUtils");
          if (tmp5Result4.isPremium(stateFromStores, closure_14.TIER_1)) {
            const obj17 = { children: items6 };
            const obj18 = { style: tmp.cardText, variant: "text-md/medium", children: format(XVMAKU, obj19) };
            const Text2 = tmp2(tmp3[18]).Text;
            const intl4 = tmp2(tmp3[22]).intl;
            format = intl4.format;
            obj19 = { discountPercent: tmp2Result18.formatPercent(stateFromStores1, closure_17 / 100) };
            XVMAKU = tmp2(tmp3[22]).t.XVMAKU;
            tmp2Result18 = require("NumberUtils");
            items6 = [closure_18(Text2, obj18), tmp33Result];
            tmp36 = closure_20(closure_19, obj17);
          }
        }
      }
    }
  }
  const obj20 = { style: tmp.cardText, variant: "text-md/medium", children: "..." };
  return closure_18(require("Text/Text").Text, obj20);
}
const View = react_native.View;
const CurrencyCodes = Constants.CurrencyCodes;
({ SubscriptionPlans: closure_12, SubscriptionPlanInfo: map1, PremiumTypes: closure_14, SubscriptionIntervalTypes: closure_15, NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM: closure_16, GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT: closure_17 } = PremiumConstants);
({ jsx: closure_18, Fragment: closure_19, jsxs: closure_20 } = Fragment);
let closure_21 = createStyles.createStyles({ title: { marginTop: 16 }, pricingSection: { alignItems: "center" }, originalPrice: { textDecorationLine: "line-through" }, cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" } });
let result = size.fileFinishedImporting("components_native/premium/PremiumSubscriptionPricingUpsell.tsx");

export default function PremiumSubscriptionPricingUpsell() {
  let intl;
  let items;
  const tmp = closure_21();
  const obj2 = { style: tmp.pricingSection, children: items };
  const obj = useSubscriptionPlansLoaded;
  const subscriptionPlansLoaded = obj.useSubscriptionPlansLoaded();
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl6.t["3x1PFE"]) };
  const Text = Text_Text.Text;
  intl = intl6.intl;
  items = [authStore4(Text, obj3), ];
  let tmp5Result = null;
  const tmp3 = closure_20;
  const tmp4 = View;
  const tmp5 = authStore4;
  if (subscriptionPlansLoaded) {
    tmp5Result = tmp5(PricingSubheadingCopy, {});
  }
  items[1] = tmp5Result;
  return tmp3(tmp4, obj2);
};
