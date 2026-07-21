// Module ID: 7413
// Function ID: 59572
// Name: AccountCreditTier
// Dependencies: []
// Exports: default

// Module 7413 (AccountCreditTier)
function AccountCreditTier(arg0) {
  let currentSubscription;
  let hasPremiumGroup;
  let months;
  let planId;
  let shouldAddDivider;
  let unconsumedFractionalPremiumUnits;
  ({ planId, currentSubscription } = arg0);
  ({ months, shouldAddDivider, unconsumedFractionalPremiumUnits, hasPremiumGroup } = arg0);
  const tmp = callback2();
  let obj = arg1(dependencyMap[7]);
  let obj1 = importDefault(dependencyMap[7]);
  const result = obj.castPremiumSubscriptionAsSkuId(obj1.getSkuIdForPlan(planId));
  let obj2 = importDefault(dependencyMap[7]);
  const tierDisplayNameByPlanId = obj2.getTierDisplayNameByPlanId(planId);
  if (hasPremiumGroup) {
    const intl3 = arg1(dependencyMap[8]).intl;
    let stringResult = intl3.string(importDefault(dependencyMap[9]).5asczk);
  } else {
    if (null != currentSubscription) {
      if (currentSubscription.planId === planId) {
        if (currentSubscription.status === SubscriptionStatusTypes.PAUSED) {
          if (null != currentSubscription.pauseEndsAt) {
            const _Date2 = Date;
            let date = new Date(currentSubscription.pauseEndsAt);
          }
          let obj4 = arg1(dependencyMap[7]);
          const result1 = obj4.extendDateWithUnconsumedFractionalPremium(date, unconsumedFractionalPremiumUnits);
          const intl2 = arg1(dependencyMap[8]).intl;
          obj = {};
          let num3 = 0;
          if (null != result1) {
            num3 = result1;
          }
          obj.date = num3;
          stringResult = intl2.formatToPlainString(arg1(dependencyMap[8]).t.5CNRRA, obj);
        }
        const _Date = Date;
        date = new Date(currentSubscription.currentPeriodEnd);
      }
    }
    const intl = arg1(dependencyMap[8]).intl;
    obj = { planName: tierDisplayNameByPlanId };
    stringResult = intl.formatToPlainString(arg1(dependencyMap[8]).t.eNXZ5O, obj);
  }
  obj1 = {};
  const items = [tmp.creditItem, ];
  let divider = null;
  if (shouldAddDivider) {
    divider = tmp.divider;
  }
  items[1] = divider;
  obj1.style = items;
  obj2 = { size: arg1(dependencyMap[10]).GameIconSizes.SMALL, skuId: result };
  const items1 = [callback(importDefault(dependencyMap[10]), obj2), , ];
  const obj3 = { style: tmp.textContainer };
  obj4 = { delete: null, dispatch: null, raw: null, style: tmp.headerText };
  const intl4 = arg1(dependencyMap[8]).intl;
  obj4.children = intl4.format(arg1(dependencyMap[8]).t.LzobT9, { planName: tierDisplayNameByPlanId });
  const items2 = [callback(arg1(dependencyMap[11]).Text, obj4), ];
  let tmp29 = !(null != currentSubscription && currentSubscription.isPurchasedExternally);
  if (tmp29) {
    const obj5 = { delete: "a", dispatch: "isArray", raw: "textAlign", style: tmp.subText, children: stringResult };
    tmp29 = callback(arg1(dependencyMap[11]).Text, obj5);
  }
  items2[1] = tmp29;
  obj3.children = items2;
  items1[1] = closure_7(View, obj3);
  const obj6 = { style: tmp.timeText };
  const intl5 = arg1(dependencyMap[8]).intl;
  obj6.children = intl5.format(arg1(dependencyMap[8]).t.ess/xl, { count: months });
  items1[2] = callback(arg1(dependencyMap[11]).Text, obj6);
  obj1.children = items1;
  return closure_7(View, obj1);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_4 = importDefault(dependencyMap[2]);
const SubscriptionStatusTypes = arg1(dependencyMap[3]).SubscriptionStatusTypes;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { title: { marginBottom: 12 } };
obj = { borderRadius: importDefault(dependencyMap[6]).radii.xs, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.creditList = obj;
obj.creditItem = { 822894183: "center", 400842798: "center", 1120077519: "100%" };
obj.textContainer = { ICON_VOICE_MUTED: null, HAPPENING_NOW_CARD_WIDTH_STRETCHY_MIN: null, useIsVerifiedAdult: null, showName: null };
obj.headerText = { lineHeight: 20 };
obj.subText = { lineHeight: 16 };
obj.timeText = { "Bool(false)": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011797377198986917, "Bool(false)": 0.0000000000000000000000000000000000000000000000000000000000000000000000012074054739553683 };
const tmp3 = arg1(dependencyMap[4]);
obj.divider = { borderBottomWidth: 1, borderBottomColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
obj.creditDescription = { marginTop: 8 };
let closure_8 = obj.createStyles(obj);
const obj1 = { borderBottomWidth: 1, borderBottomColor: importDefault(dependencyMap[6]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/premium/native/PremiumAccountCredit.tsx");

export default function PremiumAccountCredit(currentSubscription) {
  let creditListContainerStyle;
  let entitlements;
  let style;
  currentSubscription = currentSubscription.currentSubscription;
  const arg1 = currentSubscription;
  ({ entitlements, hasPremiumGroup: closure_1 } = currentSubscription);
  let View;
  ({ style, creditListContainerStyle } = currentSubscription);
  const tmp = callback2();
  let obj = arg1(closure_2[12]);
  const items = [closure_4];
  closure_2 = obj.useStateFromStoresArray(items, () => unactivatedFractionalPremiumUnits.getUnactivatedFractionalPremiumUnits());
  if (null != entitlements) {
    if (obj8.hasAccountCredit(entitlements)) {
      const _Array = Array;
      const tmp4 = importDefault(closure_2[13]);
      const found = importDefault(closure_2[13])(Array.from(entitlements)).filter((subscriptionPlanId) => {
        let tmp = null != subscriptionPlanId.subscriptionPlanId;
        if (tmp) {
          tmp = null != subscriptionPlanId.parentId;
        }
        if (tmp) {
          tmp = !subscriptionPlanId.consumed;
        }
        return tmp;
      });
      const tmp4Result = importDefault(closure_2[13])(Array.from(entitlements));
      const valueResult = found.groupBy((subscriptionPlanId) => subscriptionPlanId.subscriptionPlanId).value();
      View = valueResult;
      obj = { style };
      obj = { Opened: -918482477, marginVertical: 1912603017, marginStart: 51, marginEnd: 36, style: tmp.title };
      const intl = arg1(closure_2[8]).intl;
      obj.children = intl.string(arg1(closure_2[8]).t.YugZY0);
      const items1 = [callback(arg1(closure_2[11]).Text, obj), , , ];
      const obj1 = {};
      const items2 = [tmp.creditList, creditListContainerStyle];
      obj1.style = items2;
      const _Object = Object;
      const keys = Object.keys(valueResult);
      obj1.children = keys.map((planId) => {
        const keys = Object.keys(valueResult);
        return callback(closure_9, { planId, months: valueResult[planId].length, currentSubscription, shouldAddDivider: planId !== keys[Object.keys(Object, closure_3).length - 1], unconsumedFractionalPremiumUnits: closure_2, hasPremiumGroup: closure_1 }, planId);
      });
      items1[1] = callback(View, obj1);
      const obj2 = { style: tmp.creditDescription, variant: "text-sm/medium" };
      const intl2 = arg1(closure_2[8]).intl;
      obj2.children = intl2.string(arg1(closure_2[8]).t.kNEjGm);
      items1[2] = callback(arg1(closure_2[11]).Text, obj2);
      let tmp14 = null;
      if (null != currentSubscription) {
        tmp14 = null;
        if (currentSubscription.isPurchasedExternally) {
          const obj3 = { style: tmp.creditDescription, variant: "text-sm/medium" };
          const intl3 = arg1(closure_2[8]).intl;
          obj3.children = intl3.string(arg1(closure_2[8]).t.azRP0E);
          tmp14 = callback(arg1(closure_2[11]).Text, obj3);
        }
      }
      items1[3] = tmp14;
      obj.children = items1;
      return closure_7(View, obj);
    }
    const obj8 = importDefault(closure_2[7]);
  }
  return null;
};
