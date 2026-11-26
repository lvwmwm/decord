// Module ID: 14182
// Function ID: 14183
// Name: GiftSubscriptionInventoryCard
// Dependencies: [32, 19, 17, 11910, 1386, 8120, 6674, 1388, 21, 4913, 575, 1112, 14171, 2439, 2888, 504, 4969, 7047, 11911, 5600, 14183, 5504, 7516, 7020, 14184, 2]

// Module 14182 (GiftSubscriptionInventoryCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import PremiumConstants from "PremiumConstants" /* 1388 */;
import _modDef2439 from "module_2439" /* 2439 */;
import _modDef2888 from "module_2888" /* 2888 */;
import FastImageDefault from "FastImage" /* 5600 */;
import AssetRegistryDefault from "AssetRegistry" /* 7516 */;
import GiftCodeActionCreatorsDefault from "GiftCodeActionCreators" /* 11911 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 14183 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GiftCodeStore from "GiftCodeStore" /* 11910 */;
import UserStore from "UserStore" /* 1386 */;
import EntitlementStore from "EntitlementStore" /* 8120 */;
import SKUStore from "SKUStore" /* 6674 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, importDefault;

let closure_12;
let items;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
let size1;
let unpackModuleId;
let react = react_mod;
const View = react_native.View;
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, header: obj3, icon: size, caret: size1, caretOpen: obj4, details: obj5, body: obj6 };
obj2 = { marginBottom: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_16 };
size = { width: nativeDefault.space.PX_40, height: nativeDefault.space.PX_40 };
size1 = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24, tintColor: nativeDefault.colors.ICON_DEFAULT };
obj4 = { transform: items };
items = [{ rotate: "180deg" }];
obj5 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj6 = { paddingBottom: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: nativeDefault.radii.md, borderBottomRightRadius: nativeDefault.radii.md };
let closure_13 = createStyles(obj);
const memoResult = react.memo(function GiftSubscriptionInventoryCard(subscription) {
  let c1;
  let c2;
  let c4;
  let expiresAt;
  let formatToPlainStringResult;
  let giftCode;
  let handleToggleOpen;
  let intl6;
  let isFetching;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj12;
  let obj7;
  let tmp22;
  subscription = subscription.subscription;
  let recipientUserId;
  importDefault = undefined;
  dependencyMap = undefined;
  let stateFromStores1;
  react = undefined;
  let first;
  let first1;
  let closure_7;
  const tmp = closure_13();
  let tmp2 = recipientUserId;
  let obj = recipientUserId(14171);
  const giftedSubscriptionRowState = obj.getGiftedSubscriptionRowState(subscription);
  recipientUserId = null;
  if ("pending" !== giftedSubscriptionRowState.kind) {
    recipientUserId = giftedSubscriptionRowState.recipientUserId;
  }
  const items = [closure_7];
  const tmp2Result = tmp2(504);
  const stateFromStores = tmp2Result.useStateFromStores(items, () => {
    let user = null;
    if (null != recipientUserId) {
      user = UserStore.getUser(tmp);
    }
    return user;
  });
  ({ initialEntitlementId: c1, initialGiftCode: c2 } = subscription.giftSubscription);
  const tmp2Result6 = tmp2(4969);
  const userTag = tmp2Result6.useUserTag(stateFromStores, { decoration: "auto" });
  const items1 = [EntitlementStore];
  const tmp2Result7 = tmp2(504);
  stateFromStores1 = tmp2Result7.useStateFromStores(items1, () => {
    let found;
    if (null != c1) {
      const giftable = EntitlementStore.getGiftable();
      found = giftable.find((id) => id.id === closure_1_1);
    }
    return found;
  });
  const items2 = [SKUStore];
  const tmp2Result8 = tmp2(504);
  const stateFromStores2 = tmp2Result8.useStateFromStores(items2, () => {
    let value = null;
    if (null != stateFromStores1) {
      value = SKUStore.get(tmp.skuId);
    }
    return value;
  });
  const items3 = [first1];
  const tmp2Result9 = tmp2(504);
  const stateFromStoresObject = tmp2Result9.useStateFromStoresObject(items3, () => {
    let userGiftCodesFetchingForSKUAndPlan;
    let userGiftCodesLoadedAtForSKUAndPlan;
    let value = null;
    if (null != c2) {
      value = GiftCodeStore.get(tmp);
    }
    const obj = { giftCode: value, isFetching: userGiftCodesFetchingForSKUAndPlan, loadedAt: userGiftCodesLoadedAtForSKUAndPlan };
    userGiftCodesFetchingForSKUAndPlan = null != stateFromStores1 && GiftCodeStore.getUserGiftCodesFetchingForSKUAndPlan(tmp4.skuId, tmp4.subscriptionPlanId);
    userGiftCodesLoadedAtForSKUAndPlan = null;
    if (null != stateFromStores1) {
      userGiftCodesLoadedAtForSKUAndPlan = GiftCodeStore.getUserGiftCodesLoadedAtForSKUAndPlan(tmp4.skuId, tmp4.subscriptionPlanId);
    }
    return obj;
  });
  ({ giftCode, isFetching, loadedAt: c4 } = stateFromStoresObject);
  first = stateFromStores1(react.useState(Date.now), 1)[0];
  const tmp12 = stateFromStores1(react.useState(false), 2);
  first1 = tmp12[0];
  closure_7 = tmp12[1];
  if ("pending" === giftedSubscriptionRowState.kind) {
    const intl3 = tmp2(1112).intl;
    const formatToPlainString = intl3.formatToPlainString;
    const _Math = Math;
    const _Math2 = Math;
    const obj2 = { hours: Math.max(0, Math.floor((expiresAt.getTime() - first) / 3600000)) };
    expiresAt = giftedSubscriptionRowState.expiresAt;
    const ltVZcJ = tmp2(1112).t.ltVZcJ;
    formatToPlainStringResult = formatToPlainString(ltVZcJ, obj2);
  } else {
    const kind = giftedSubscriptionRowState.kind;
    if ("active" === kind) {
      const intl2 = tmp2(1112).intl;
      const obj3 = { renewalDate: giftedSubscriptionRowState.renewsAt };
      formatToPlainStringResult = intl2.formatToPlainString(_modDef2439.MR4VnX, obj3);
    } else if ("canceled" === kind) {
      const intl = tmp2(1112).intl;
      formatToPlainStringResult = intl.string(_modDef2888.bWW0Gp);
    } else if ("payment_failed" === kind) {
      const intl7 = tmp2(1112).intl;
      formatToPlainStringResult = intl7.string(_modDef2888.nZIlOV);
    }
  }
  let tmp21 = !tmp14;
  const obj4 = { style: tmp.card, children: items7 };
  const Card = tmp2(7047).Card;
  if ("pending" === giftedSubscriptionRowState.kind && null != stateFromStores1 && null != stateFromStores2) {
    tmp21 = !first1;
  }
  const obj5 = { end: tmp21, onPress: handleToggleOpen, accessibilityState: tmp22, children: closure_12(first, obj7) };
  handleToggleOpen = undefined;
  if ("pending" === giftedSubscriptionRowState.kind && null != stateFromStores1 && null != stateFromStores2) {
    handleToggleOpen = function handleToggleOpen() {
      let tmp2 = !first1 && null != stateFromStores1;
      if (tmp2) {
        tmp2 = null == c4 || tmp5 < first;
        const tmp7 = null == c4 || tmp5 < first;
      }
      if (tmp2) {
        const obj = GiftCodeActionCreatorsDefault;
        const userGiftCodesForSKU = obj.fetchUserGiftCodesForSKU(stateFromStores1.skuId, stateFromStores1.subscriptionPlanId);
      }
      closure_7(!first1);
    };
  }
  tmp22 = undefined;
  if ("pending" === giftedSubscriptionRowState.kind && null != stateFromStores1 && null != stateFromStores2) {
    tmp22 = { expanded: first1 };
    const obj6 = { expanded: first1 };
  }
  obj7 = { style: tmp.header, children: items4 };
  const obj8 = { source: AssetRegistryDefault2, style: tmp.icon, accessible: false };
  const tmp24 = FastImageDefault;
  items4 = [closure_11(tmp24, obj8), , ];
  const obj9 = { style: tmp.details, children: items5 };
  const Text = tmp2(5504).Text;
  const intl4 = tmp2(1112).intl;
  const stringResult = intl4.string(tmp2(1112).t.lG6a5x);
  const tmp2Result10 = tmp2(14171);
  const giftSubscriptionInterval = tmp2Result10.getGiftSubscriptionInterval(subscription.planId);
  let formatToPlainString2Result = stringResult;
  if (null != giftSubscriptionInterval) {
    let Vd3Iu8;
    const intl5 = tmp2(1112).intl;
    const formatToPlainString2 = intl5.formatToPlainString;
    if (giftSubscriptionInterval.interval === SubscriptionIntervalTypes.MONTH) {
      Vd3Iu8 = tmp2(1112).t.rCJvqo;
    } else {
      Vd3Iu8 = tmp2(1112).t.Vd3Iu8;
    }
    const obj10 = { skuName: stringResult, intervalCount: giftSubscriptionInterval.intervalCount };
    formatToPlainString2Result = formatToPlainString2(Vd3Iu8, obj10);
  }
  items5 = [closure_11(Text, { variant: "body-md/semibold", children: formatToPlainString2Result }), , ];
  let tmp20Result = null;
  if ("pending" !== giftedSubscriptionRowState.kind) {
    tmp20Result = null;
    if (null != stateFromStores) {
      const obj11 = { variant: "body-sm/medium", color: "text-muted", children: intl6.formatToPlainString(_modDef2888.kVUGot, obj12) };
      const Text2 = tmp2(5504).Text;
      intl6 = tmp2(1112).intl;
      obj12 = { username: userTag };
      tmp20Result = tmp20(Text2, obj11);
    }
  }
  items5[1] = tmp20Result;
  items5[2] = closure_11(tmp2(5504).Text, { variant: "body-sm/medium", color: "text-muted", children: formatToPlainStringResult });
  items4[1] = closure_12(first, obj9);
  let tmp20Result4 = null;
  if ("pending" === giftedSubscriptionRowState.kind && null != stateFromStores1 && null != stateFromStores2) {
    const obj13 = { source: AssetRegistryDefault, style: items6, accessible: false };
    items6 = [tmp.caret, ];
    let caretOpen = null;
    const tmp23Result = FastImageDefault;
    if (first1) {
      caretOpen = tmp.caretOpen;
    }
    items6[1] = caretOpen;
    tmp20Result4 = tmp20(tmp23Result, obj13);
  }
  items4[2] = tmp20Result4;
  items7 = [closure_11(Card, obj5), ];
  let tmp18Result = null;
  if ("pending" === giftedSubscriptionRowState.kind && null != stateFromStores1 && null != stateFromStores2) {
    tmp18Result = null;
    if (first1) {
      let tmp20Result5 = null;
      const obj14 = { style: tmp.body, children: items8 };
      if (isFetching) {
        tmp20Result5 = tmp20(tmp2(7020).ActivityIndicator, {});
      }
      items8 = [tmp20Result5, ];
      let tmp20Result6 = null;
      if (!isFetching) {
        tmp20Result6 = null;
        if (null != giftCode) {
          tmp20Result6 = null;
          if (null != stateFromStores2) {
            const obj15 = { giftCode, sku: stateFromStores2, isFirst: true, canRevoke: false, showCopy: true };
            tmp20Result6 = tmp20(tmp23(14184), obj15);
          }
        }
      }
      items8[1] = tmp20Result6;
      tmp18Result = tmp18(tmp19, obj14);
    }
  }
  items7[1] = tmp18Result;
  return closure_12(first, obj4);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/user_settings/gifting/native/GiftSubscriptionInventoryCard.tsx");

export default memoResult;
