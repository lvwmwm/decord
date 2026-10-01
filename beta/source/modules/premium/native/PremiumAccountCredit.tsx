// Module ID: 12933
// Function ID: 12934
// Name: PremiumAccountCredit
// Dependencies: [19, 17, 6814, 1074, 21, 4836, 576, 6593, 4488, 1115, 3199, 8678, 4832, 504, 12, 2]
// Exports: default

// Module 12933 (PremiumAccountCredit)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl6 from "intl" /* 1115 */;
import PremiumUtils from "PremiumUtils" /* 4488 */;
import GameIcon from "GameIcon" /* 6593 */;
import react from "react" /* 19 */;
import EntitlementStore from "EntitlementStore" /* 6814 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const PremiumUtilsDefault = PremiumUtils;
const GameIconDefault = GameIcon;
let dependencyMap;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
function AccountCreditTier(arg0) {
  let BoostGemIcon;
  let currentSubscription;
  let displayName;
  let hasPremiumGroup;
  let intl4;
  let intl5;
  let items1;
  let items2;
  let months;
  let obj8;
  let planId;
  let shouldAddDivider;
  let stringResult;
  let tmp22Result;
  let tmp25;
  let unconsumedFractionalPremiumUnits;
  ({ planId, currentSubscription } = arg0);
  ({ months, shouldAddDivider, unconsumedFractionalPremiumUnits, hasPremiumGroup } = arg0);
  const tmp = closure_8();
  const castPremiumSubscriptionAsSkuId = PremiumUtils.castPremiumSubscriptionAsSkuId;
  PremiumUtils;
  const obj = PremiumUtilsDefault;
  const result = castPremiumSubscriptionAsSkuId(obj.getSkuIdForPlan(planId));
  const obj2 = PremiumUtils;
  const result1 = obj2.isPremiumGuildSubscriptionPlan(planId);
  const obj3 = PremiumUtilsDefault;
  if (result1) {
    displayName = obj3.getDisplayName(planId);
  } else {
    displayName = obj3.getTierDisplayNameByPlanId(planId);
  }
  if (hasPremiumGroup) {
    const intl3 = tmp2(1115).intl;
    stringResult = intl3.string(tmp5(3199)["5asczk"]);
  } else {
    if (null != currentSubscription) {
      if (currentSubscription.planId === planId) {
        if (currentSubscription.status === SubscriptionStatusTypes.PAUSED) {
          let date;
          if (null != currentSubscription.pauseEndsAt) {
            const _Date2 = Date;
            const self3 = this;
            const self4 = this;
            date = new Date(currentSubscription.pauseEndsAt);
          }
          const tmp2Result = PremiumUtils;
          let num = tmp2Result.extendDateWithUnconsumedFractionalPremium(date, unconsumedFractionalPremiumUnits);
          const intl2 = tmp2(1115).intl;
          const formatToPlainString = intl2.formatToPlainString;
          const v5CNRRA = tmp2(1115).t["5CNRRA"];
          if (num == null) {
            num = 0;
          }
          const obj4 = { date: num };
          stringResult = formatToPlainString(v5CNRRA, obj4);
        }
        const _Date = Date;
        const self = this;
        const self2 = this;
        date = new Date(currentSubscription.currentPeriodEnd);
      }
    }
    const intl = tmp2(1115).intl;
    const obj5 = { planName: displayName };
    stringResult = intl.formatToPlainString(tmp2(1115).t.eNXZ5O, obj5);
  }
  let tmp16 = result1;
  if (!tmp16) {
    tmp16 = null != currentSubscription && currentSubscription.isPurchasedExternally;
  }
  const items = [tmp.creditItem, ];
  let divider = null;
  if (shouldAddDivider) {
    divider = tmp.divider;
  }
  const obj6 = { style: items, children: items1 };
  items[1] = divider;
  if (result1) {
    const obj7 = { style: tmp.boostIcon, children: metroRequire(BoostGemIcon, obj8) };
    obj8 = { size: "md", color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
    BoostGemIcon = tmp2(8678).BoostGemIcon;
    tmp22Result = tmp22(tmp20, obj7);
    tmp25 = tmp22;
  } else {
    const obj9 = { size: GameIcon.GameIconSizes.SMALL, skuId: result };
    const tmp5Result = GameIconDefault;
    tmp22Result = tmp22(tmp5Result, obj9);
    tmp25 = tmp22;
  }
  items1 = [tmp22Result, , ];
  const obj10 = { style: tmp.textContainer, children: items2 };
  const obj11 = { style: tmp.headerText, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl4.format(intl6.t.LzobT9, { planName: displayName }) };
  const Text = tmp2(4832).Text;
  intl4 = tmp2(1115).intl;
  items2 = [tmp25(Text, obj11), ];
  let tmp25Result = !tmp16;
  if (tmp25Result) {
    const obj12 = { style: tmp.subText, variant: "text-xs/medium", color: "text-default", children: stringResult };
    tmp25Result = tmp25(tmp2(4832).Text, obj12);
  }
  items2[1] = tmp25Result;
  items1[1] = metroImportDefault(View, obj10);
  const obj13 = { style: tmp.timeText, variant: "text-md/medium", color: "text-default", children: intl5.format(intl6.t["ess/xl"], { count: months }) };
  const Text2 = tmp2(4832).Text;
  intl5 = tmp2(1115).intl;
  items1[2] = tmp25(Text2, obj13);
  return metroImportDefault(View, obj6);
}
const View = react_native.View;
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { title: { marginBottom: 12 }, creditList: obj2, creditItem: { flexDirection: "row", alignItems: "center", padding: 16 }, boostIcon: size, textContainer: { marginLeft: 16, marginRight: 16, flexDirection: "column", flex: 1 }, headerText: { lineHeight: 20 }, subText: { lineHeight: 16 }, timeText: { lineHeight: 20, alignSelf: "flex-start" }, divider: obj3, creditDescription: { marginTop: 8 } };
obj2 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
size = { width: GameIcon.GameIconImageSize[GameIcon.GameIconSizes.SMALL], height: GameIcon.GameIconImageSize[GameIcon.GameIconSizes.SMALL], alignItems: "center", justifyContent: "center" };
obj3 = { borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_8 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/premium/native/PremiumAccountCredit.tsx");

export default function PremiumAccountCredit(currentSubscription) {
  let _undefined;
  let creditListContainerStyle;
  let entitlements;
  let hasPremiumGroup;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let keys;
  let style;
  let unactivatedFractionalPremiumUnits;
  let unconsumedFractionalPremiumUnits;
  currentSubscription = currentSubscription.currentSubscription;
  ({ entitlements, hasPremiumGroup: importDefault } = currentSubscription);
  let c3;
  ({ style, creditListContainerStyle } = currentSubscription);
  let tmp = closure_8();
  let obj = currentSubscription(504);
  const items = [EntitlementStore];
  dependencyMap = obj.useStateFromStoresArray(items, () => unactivatedFractionalPremiumUnits.getUnactivatedFractionalPremiumUnits());
  if (null != entitlements) {
    const obj8 = PremiumUtilsDefault;
    const tmp11 = importDefault;
    if (obj8.hasAccountCredit(entitlements)) {
      const _Array = Array;
      const tmp11Result = tmp11(12);
      const tmp11ResultResult = tmp11Result(Array.from(entitlements));
      const found = tmp11ResultResult.filter((subscriptionPlanId) => {
        let tmp = null != subscriptionPlanId.subscriptionPlanId;
        const consumed = subscriptionPlanId.consumed;
        if (tmp) {
          tmp = null != subscriptionPlanId.parentId;
        }
        if (tmp) {
          tmp = !consumed;
        }
        return tmp;
      });
      const iter = found.groupBy((subscriptionPlanId) => subscriptionPlanId.subscriptionPlanId);
      const valueResult = iter.value();
      c3 = valueResult;
      const obj2 = { style, children: items1 };
      const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "eyebrow", color: "text-default", children: intl.string(currentSubscription(1115).t.YugZY0) };
      const Text = tmp2(4832).Text;
      intl = tmp2(1115).intl;
      items1 = [closure_6(Text, obj3), , , ];
      const obj4 = {
        style: items2,
        children: keys.map((planId) => {
              const keys = Object.keys(c3);
              const obj = { planId, months: c3[planId].length, currentSubscription, shouldAddDivider: planId !== keys[Object.keys(Object, c3).length - 1], unconsumedFractionalPremiumUnits, hasPremiumGroup: importDefault };
              return metroRequire(AccountCreditTier, obj, planId);
            })
      };
      items2 = [tmp.creditList, creditListContainerStyle];
      const _Object = Object;
      keys = Object.keys(valueResult);
      items1[1] = closure_6(c3, obj4);
      const obj5 = { style: tmp.creditDescription, variant: "text-sm/medium", children: intl2.string(currentSubscription(1115).t.Z5b2Gf) };
      const Text2 = tmp2(4832).Text;
      intl2 = tmp2(1115).intl;
      items1[2] = closure_6(Text2, obj5);
      let tmp9Result = null;
      const tmp7 = closure_7;
      const tmp8 = c3;
      const tmp9 = closure_6;
      if (null != currentSubscription) {
        tmp9Result = null;
        if (currentSubscription.isPurchasedExternally) {
          const obj6 = { style: tmp.creditDescription, variant: "text-sm/medium", children: intl3.string(currentSubscription(1115).t.azRP0E) };
          const Text3 = tmp2(4832).Text;
          intl3 = tmp2(1115).intl;
          tmp9Result = tmp9(Text3, obj6);
        }
      }
      items1[3] = tmp9Result;
      return tmp7(tmp8, obj2);
    }
  }
  return null;
};
