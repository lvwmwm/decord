// Module ID: 7420
// Function ID: 59652
// Name: AccountCreditTier
// Dependencies: [31, 27, 6637, 653, 33, 4130, 689, 3776, 1212, 2780, 5472, 4126, 566, 22, 2]
// Exports: default

// Module 7420 (AccountCreditTier)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { SubscriptionStatusTypes } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function AccountCreditTier(arg0) {
  let currentSubscription;
  let hasPremiumGroup;
  let months;
  let planId;
  let shouldAddDivider;
  let unconsumedFractionalPremiumUnits;
  ({ planId, currentSubscription } = arg0);
  ({ months, shouldAddDivider, unconsumedFractionalPremiumUnits, hasPremiumGroup } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3776) /* _createForOfIteratorHelperLoose */;
  let obj1 = importDefault(3776);
  const result = obj.castPremiumSubscriptionAsSkuId(obj1.getSkuIdForPlan(planId));
  let obj2 = importDefault(3776);
  const tierDisplayNameByPlanId = obj2.getTierDisplayNameByPlanId(planId);
  if (hasPremiumGroup) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    let stringResult = intl3.string(importDefault(2780)["5asczk"]);
  } else {
    if (null != currentSubscription) {
      if (currentSubscription.planId === planId) {
        if (currentSubscription.status === SubscriptionStatusTypes.PAUSED) {
          if (null != currentSubscription.pauseEndsAt) {
            const _Date2 = Date;
            let date = new Date(currentSubscription.pauseEndsAt);
          }
          let obj4 = require(3776) /* _createForOfIteratorHelperLoose */;
          const result1 = obj4.extendDateWithUnconsumedFractionalPremium(date, unconsumedFractionalPremiumUnits);
          const intl2 = require(1212) /* getSystemLocale */.intl;
          obj = {};
          let num3 = 0;
          if (null != result1) {
            num3 = result1;
          }
          obj.date = num3;
          stringResult = intl2.formatToPlainString(require(1212) /* getSystemLocale */.t["5CNRRA"], obj);
        }
        const _Date = Date;
        date = new Date(currentSubscription.currentPeriodEnd);
      }
    }
    const intl = require(1212) /* getSystemLocale */.intl;
    obj = { planName: tierDisplayNameByPlanId };
    stringResult = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.eNXZ5O, obj);
  }
  obj1 = {};
  const items = [tmp.creditItem, ];
  let divider = null;
  if (shouldAddDivider) {
    divider = tmp.divider;
  }
  items[1] = divider;
  obj1.style = items;
  obj2 = { size: require(5472) /* GameIcon */.GameIconSizes.SMALL, skuId: result };
  const items1 = [callback(importDefault(5472), obj2), , ];
  const obj3 = { style: tmp.textContainer };
  obj4 = { style: tmp.headerText, variant: "text-md/semibold", color: "mobile-text-heading-primary" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj4.children = intl4.format(require(1212) /* getSystemLocale */.t.LzobT9, { planName: tierDisplayNameByPlanId });
  const items2 = [callback(require(4126) /* Text */.Text, obj4), ];
  let tmp29 = !(null != currentSubscription && currentSubscription.isPurchasedExternally);
  if (tmp29) {
    const obj5 = { style: tmp.subText, variant: "text-xs/medium", color: "text-default", children: stringResult };
    tmp29 = callback(require(4126) /* Text */.Text, obj5);
  }
  items2[1] = tmp29;
  obj3.children = items2;
  items1[1] = closure_7(View, obj3);
  const obj6 = { style: tmp.timeText, variant: "text-md/medium", color: "text-default" };
  const intl5 = require(1212) /* getSystemLocale */.intl;
  obj6.children = intl5.format(require(1212) /* getSystemLocale */.t["ess/xl"], { count: months });
  items1[2] = callback(require(4126) /* Text */.Text, obj6);
  obj1.children = items1;
  return closure_7(View, obj1);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { title: { marginBottom: 12 } };
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.creditList = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.creditItem = { flexDirection: "row", alignItems: "center", padding: 16 };
_createForOfIteratorHelperLoose.textContainer = { marginLeft: 16, marginRight: 16, flexDirection: "column", flex: 1 };
_createForOfIteratorHelperLoose.headerText = { lineHeight: 20 };
_createForOfIteratorHelperLoose.subText = { lineHeight: 16 };
_createForOfIteratorHelperLoose.timeText = { lineHeight: 20, alignSelf: "flex-start" };
_createForOfIteratorHelperLoose.divider = { borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.creditDescription = { marginTop: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { borderBottomWidth: 1, borderBottomColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/premium/native/PremiumAccountCredit.tsx");

export default function PremiumAccountCredit(currentSubscription) {
  let creditListContainerStyle;
  let entitlements;
  let importDefault;
  let style;
  currentSubscription = currentSubscription.currentSubscription;
  ({ entitlements, hasPremiumGroup: importDefault } = currentSubscription);
  let c3;
  ({ style, creditListContainerStyle } = currentSubscription);
  let tmp = _createForOfIteratorHelperLoose();
  let obj = currentSubscription(566);
  const items = [_isNativeReflectConstruct];
  const dependencyMap = obj.useStateFromStoresArray(items, () => outer1_4.getUnactivatedFractionalPremiumUnits());
  if (null != entitlements) {
    if (obj8.hasAccountCredit(entitlements)) {
      const _Array = Array;
      const tmp4 = importDefault(22);
      const found = importDefault(22)(Array.from(entitlements)).filter((subscriptionPlanId) => {
        let tmp = null != subscriptionPlanId.subscriptionPlanId;
        if (tmp) {
          tmp = null != subscriptionPlanId.parentId;
        }
        if (tmp) {
          tmp = !subscriptionPlanId.consumed;
        }
        return tmp;
      });
      const tmp4Result = importDefault(22)(Array.from(entitlements));
      const valueResult = found.groupBy((subscriptionPlanId) => subscriptionPlanId.subscriptionPlanId).value();
      c3 = valueResult;
      obj = { style };
      obj = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default" };
      const intl = currentSubscription(1212).intl;
      obj.children = intl.string(currentSubscription(1212).t.YugZY0);
      const items1 = [callback(currentSubscription(4126).Text, obj), , , ];
      const obj1 = {};
      const items2 = [tmp.creditList, creditListContainerStyle];
      obj1.style = items2;
      const _Object = Object;
      let keys = Object.keys(valueResult);
      obj1.children = keys.map((planId) => {
        const keys = Object.keys(_undefined);
        return outer1_6(outer1_9, { planId, months: _undefined[planId].length, currentSubscription, shouldAddDivider: planId !== keys[Object.keys(Object, _undefined).length - 1], unconsumedFractionalPremiumUnits: closure_2, hasPremiumGroup: closure_1 }, planId);
      });
      items1[1] = callback(c3, obj1);
      const obj2 = { style: tmp.creditDescription, variant: "text-sm/medium" };
      const intl2 = currentSubscription(1212).intl;
      obj2.children = intl2.string(currentSubscription(1212).t.kNEjGm);
      items1[2] = callback(currentSubscription(4126).Text, obj2);
      let tmp14 = null;
      if (null != currentSubscription) {
        tmp14 = null;
        if (currentSubscription.isPurchasedExternally) {
          const obj3 = { style: tmp.creditDescription, variant: "text-sm/medium" };
          const intl3 = currentSubscription(1212).intl;
          obj3.children = intl3.string(currentSubscription(1212).t.azRP0E);
          tmp14 = callback(currentSubscription(4126).Text, obj3);
        }
      }
      items1[3] = tmp14;
      obj.children = items1;
      return closure_7(c3, obj);
    }
    obj8 = importDefault(3776);
  }
  return null;
};
